#!/usr/bin/env python3
"""BookShop grader.

grade(files)  -> JSON natija. `files` = {"core/views.py": "...", "main/models.py": "...", ...}
Oqim: reference nusxasi (tmp) -> oq ro'yxatdagi fayllarni ustiga qo'yish -> `manage.py check`
      -> yashirin testlar (hidden/, haqiqiy Django TestCase, toza test DB) -> natija.
Talaba kodi HECH QACHON haqiqiy loyihada ishlamaydi. Faqat stdlib.

CLI:
  run.py --grade fayl.json      # {"files": {...}} yoki {...}
  run.py --selftest [--mutation]
  run.py --reference            # faqat reference'ni yurgizadi
"""
import json
import os
import re
import resource
import shutil
import signal
import subprocess
import sys
import tempfile
import time

HERE = os.path.dirname(os.path.abspath(__file__))
REFERENCE = os.path.join(HERE, 'reference')
HIDDEN = os.path.join(HERE, 'hidden')

PYTHON = os.environ.get('BS_PYTHON') or os.path.expanduser('~/MR/BookShopBomba/.venv/bin/python')
if not os.path.exists(PYTHON):
    PYTHON = sys.executable

TIMEOUT = 20          # soniya (har bir bosqich)
MAX_FILES = 40
MAX_FILE_BYTES = 200 * 1024
OUT_TAIL = 20000      # natijadan oxirgi baytlar

ALLOWED = [
    re.compile(r'^core/urls\.py$'),
    re.compile(r'^core/views\.py$'),
    re.compile(r'^core/settings\.py$'),
    re.compile(r'^main/models\.py$'),
    re.compile(r'^main/admin\.py$'),
    re.compile(r'^main/templates/[A-Za-z0-9_.-]+\.html$'),
    re.compile(r'^main/migrations/\d{4}_[A-Za-z0-9_]+\.py$'),
]


def allowed(path):
    if not isinstance(path, str) or path.startswith('/') or '..' in path.split('/') or '\\' in path:
        return False
    return any(r.match(path) for r in ALLOWED)


def _limits():
    os.setsid()
    resource.setrlimit(resource.RLIMIT_CPU, (TIMEOUT, TIMEOUT + 2))
    resource.setrlimit(resource.RLIMIT_AS, (2 << 30, 2 << 30))
    resource.setrlimit(resource.RLIMIT_FSIZE, (32 << 20, 32 << 20))
    resource.setrlimit(resource.RLIMIT_NOFILE, (256, 256))
    resource.setrlimit(resource.RLIMIT_CORE, (0, 0))


def _env(tmp):
    return {
        'PATH': '/usr/bin:/bin',
        'HOME': tmp,
        'TMPDIR': tmp,
        'LANG': 'C.UTF-8',
        'PYTHONDONTWRITEBYTECODE': '1',
        'PYTHONPATH': tmp,
        'PYTHONIOENCODING': 'utf-8',
        'BS_RESULT': os.path.join(tmp, '_result.json'),
    }


def _run(cmd, tmp, cwd, timeout=TIMEOUT):
    """cmd ni cheklovlar bilan ishga tushiradi. -> (kod|None, matn_dumi, timeout_bo'ldimi)"""
    outp = os.path.join(tmp, '_out.txt')
    with open(outp, 'wb') as fo:
        p = subprocess.Popen(cmd, cwd=cwd, env=_env(tmp), stdin=subprocess.DEVNULL,
                             stdout=fo, stderr=subprocess.STDOUT, preexec_fn=_limits)
        try:
            code = p.wait(timeout=timeout)
            timed_out = False
        except subprocess.TimeoutExpired:
            timed_out = True
            code = None
            try:
                os.killpg(p.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            p.wait()
    with open(outp, 'rb') as f:
        f.seek(0, 2)
        size = f.tell()
        f.seek(max(0, size - OUT_TAIL))
        tail = f.read().decode('utf-8', 'replace')
    if size > OUT_TAIL:
        tail = '...(qisqartirildi)...\n' + tail
    if size >= (30 << 20):
        tail = '[[FSIZE]] ' + tail[-2000:]
    return code, tail, timed_out


def _prepare(files, tmp):
    proj = os.path.join(tmp, 'proj')
    shutil.copytree(REFERENCE, proj, ignore=shutil.ignore_patterns('__pycache__', '*.pyc', 'db.sqlite3'))
    shutil.copytree(HIDDEN, os.path.join(tmp, 'hidden'), ignore=shutil.ignore_patterns('__pycache__'))
    if any(p.startswith('main/migrations/') for p in files):
        mig = os.path.join(proj, 'main', 'migrations')
        for n in os.listdir(mig):
            if n != '__init__.py':
                os.remove(os.path.join(mig, n))
    for path, content in files.items():
        dst = os.path.join(proj, path)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        with open(dst, 'w', encoding='utf-8', newline='') as f:
            f.write(content)
    return proj


def _last_line(trace):
    lines = [l for l in (trace or '').strip().split('\n') if l.strip()]
    return lines[-1].strip() if lines else ''


EXPLAIN = [
    (r"FSIZE|Errno 27|File too large", "Dastur juda katta chiqish (>32 MB) yozdi va to'xtatildi — `print` / yozish siklini tekshir."),
    (r"didn't return an HttpResponse", "view `None` qaytardi — ya'ni bu metod uchun `return` yo'li yo'q (M07-none-return)"),
    (r"NoReverseMatch", "URL nomi topilmadi — `name=` berilmagan yoki noto'g'ri (M06-name-reverse)"),
    (r"TemplateDoesNotExist", "shablon topilmadi — fayl nomi yoki `main/templates/` joyi noto'g'ri (M08-template-lookup)"),
    (r"AttributeError: 'NoneType'", "`None` ustida metod chaqirildi — qiymat kelmagan holat tekshirilmagan (M00-none)"),
    (r"IntegrityError", "ma'lumotlar bazasi cheklovi buzildi (NOT NULL / UNIQUE) (M03-null-blank)"),
    (r"DoesNotExist", "ob'ekt topilmadi va bu holat ushlanmadi (M04-does-not-exist)"),
    (r"Page not found|Http404", "404 kutilgan joyda boshqa javob keldi yoki aksincha (M07-404)"),
    (r"ImportError|ModuleNotFoundError", "import xato — nom yoki modul yo'li noto'g'ri (M00-import)"),
    (r"SyntaxError|IndentationError|TabError", "sintaksis xato — fayl Python sifatida o'qilmadi (M00-syntax)"),
    (r"Couldn't find|not found in", "javobda kutilgan matn yo'q (M08-render)"),
]


def explain(trace):
    for pat, uz in EXPLAIN:
        if re.search(pat, trace or ''):
            return uz
    return ''


def _short(trace):
    t = (trace or '').strip().split('\n')
    return '\n'.join(t[-6:])[-700:]


def _fail_row(r):
    reason = explain(r.get('trace', '')) or _last_line(r.get('trace', ''))
    uz = r.get('doc') or r['id']
    return {
        'test': r['id'],
        'concepts': r.get('concepts', []),
        'misconception': r.get('mis', ''),
        'kind': r.get('kind', 'core'),
        'plain_uz': ('Kutilgan: %s. Sabab: %s' % (uz.rstrip('.'), reason)) if reason else ('Kutilgan: %s' % uz.rstrip('.')),
        'trace_short': _short(r.get('trace', '')),
    }


def grade(files, timeout=TIMEOUT):
    t0 = time.time()
    res = {'status': 'ok', 'passed': [], 'failed': [], 'quirks': [], 'check_output': '', 'score': 0,
           'core_total': 0, 'core_passed': 0, 'ms': 0, 'note': ''}
    if not isinstance(files, dict) or not files:
        res.update(status='bad_input', note="Fayl yuborilmadi — grader'ga kamida bitta fayl kerak.")
        return res
    if len(files) > MAX_FILES:
        res.update(status='bad_input', note="Fayllar soni %d dan oshmasin." % MAX_FILES)
        return res
    for p, c in files.items():
        if not allowed(p):
            res.update(status='bad_input', note="Ruxsat etilmagan yo'l: %r" % p)
            return res
        if not isinstance(c, str) or len(c.encode('utf-8')) > MAX_FILE_BYTES:
            res.update(status='bad_input', note="Fayl matn bo'lishi va %d KB dan oshmasligi kerak: %s" % (MAX_FILE_BYTES // 1024, p))
            return res
    tmp = tempfile.mkdtemp(prefix='bsgrade-')
    try:
        proj = _prepare(files, tmp)
        manage = [PYTHON, 'manage.py']
        code, out, to = _run(manage + ['check'], tmp, proj, timeout)
        res['check_output'] = out.strip()[-1500:]
        if to:
            res.update(status='timeout', note="`manage.py check` %d soniyada tugamadi (cheksiz sikl?)." % timeout)
            return res
        if code != 0:
            note = explain(out) or "`manage.py check` xato berdi — loyiha ishga tushmaydi."
            if code == -signal.SIGXFSZ:
                note = "Dastur juda katta chiqish (>32 MB) yozdi va to'xtatildi — `print` / yozish siklini tekshir."
            elif code == -signal.SIGXCPU or code == -signal.SIGKILL:
                note = "Dastur CPU/xotira chegarasidan oshdi va to'xtatildi."
            res.update(status='check_failed', note=note)
            return res
        rp = os.path.join(tmp, '_result.json')
        code, out, to = _run(manage + ['test', 'hidden', '--testrunner', 'hidden.runner.JsonRunner', '--noinput'],
                             tmp, proj, timeout)
        if to:
            res.update(status='timeout', note="Testlar %d soniyada tugamadi (cheksiz sikl yoki juda sekin kod)." % timeout)
            return res
        if not os.path.exists(rp):
            res.update(status='runner_failed', note=explain(out) or "Testlar ishga tushmadi.",
                       check_output=out.strip()[-1500:])
            return res
        with open(rp, encoding='utf-8') as f:
            rows = json.load(f)['rows']
        for r in rows:
            core = r.get('kind', 'core') == 'core'
            if r['status'] == 'pass':
                res['passed'].append(r['id'])
                if core:
                    res['core_passed'] += 1
            elif r['status'] in ('fail', 'error'):
                fr = _fail_row(r)
                (res['failed'] if core else res['quirks']).append(fr)
            if core and r['status'] != 'skip':
                res['core_total'] += 1
        if res['core_total']:
            res['score'] = round(100.0 * res['core_passed'] / res['core_total'], 1)
        return res
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
        res['ms'] = int((time.time() - t0) * 1000)


_SIMPLE = {
    ('check',), ('showmigrations',), ('showmigrations', 'main'), ('showmigrations', '--list'),
    ('makemigrations', '--check', '--dry-run'), ('makemigrations', '--dry-run'), ('makemigrations', 'main', '--dry-run'),
    ('makemigrations', '--dry-run', '-v', '3'), ('migrate',), ('migrate', '--plan'), ('--version',),
}
_SQLMIG = re.compile(r'^\d{4}(_[A-Za-z0-9_]+)?$')


def manage_args_ok(args):
    """/api/run uchun oq ro'yxat: faqat xavfsiz, tushunarli manage.py buyruqlari."""
    if not isinstance(args, list) or not args or not all(isinstance(a, str) for a in args):
        return False
    t = tuple(args)
    if t in _SIMPLE:
        return True
    if len(t) == 3 and t[0] == 'sqlmigrate' and t[1] == 'main' and _SQLMIG.match(t[2]):
        return True
    if len(t) == 3 and t[0] == 'shell' and t[1] == '-c' and 0 < len(t[2]) <= 2000:
        return True
    return False


def run_manage(files, args, timeout=TIMEOUT):
    """Talaba fayllari bilan tmp nusxada `manage.py <args>` ni bajaradi. -> {status, code, output, ms, note}"""
    t0 = time.time()
    res = {'status': 'ok', 'code': None, 'output': '', 'ms': 0, 'note': ''}
    if not manage_args_ok(args):
        res.update(status='bad_input', note="Bu buyruq ruxsat etilmagan. Ruxsat: check, showmigrations, makemigrations [--dry-run|--check], migrate, sqlmigrate main NNNN, shell -c '...'.")
        return res
    files = files or {}
    if not isinstance(files, dict) or len(files) > MAX_FILES:
        res.update(status='bad_input', note="Fayllar noto'g'ri.")
        return res
    for p, c in files.items():
        if not allowed(p) or not isinstance(c, str) or len(c.encode('utf-8')) > MAX_FILE_BYTES:
            res.update(status='bad_input', note="Ruxsat etilmagan yo'l yoki juda katta fayl: %r" % (p,))
            return res
    tmp = tempfile.mkdtemp(prefix='bsrun-')
    try:
        proj = _prepare(files, tmp)
        manage = [PYTHON, 'manage.py']
        if args[0] == 'shell':
            code, out, to = _run(manage + ['migrate', '--noinput', '-v', '0'], tmp, proj, timeout)
            if to or code != 0:
                res.update(status='timeout' if to else 'failed', code=code, output=out.strip()[-4000:],
                           note='Shell uchun baza tayyorlanmadi (migratsiya xato).')
                return res
        code, out, to = _run(manage + list(args), tmp, proj, timeout)
        res['code'] = code
        res['output'] = out.strip()[-8000:]
        if to:
            res.update(status='timeout', note="Buyruq %d soniyada tugamadi." % timeout)
        elif code != 0:
            res.update(status='failed', note=explain(out))
        return res
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
        res['ms'] = int((time.time() - t0) * 1000)


def read_reference():
    files = {}
    for root, dirs, names in os.walk(REFERENCE):
        dirs[:] = [d for d in dirs if d != '__pycache__']
        for n in names:
            full = os.path.join(root, n)
            rel = os.path.relpath(full, REFERENCE)
            if allowed(rel):
                with open(full, encoding='utf-8') as f:
                    files[rel] = f.read()
    return files


def _fmt(res):
    return '%s score=%s core=%s/%s failed=%d quirks_failed=%d %dms' % (
        res['status'], res['score'], res['core_passed'], res['core_total'], len(res['failed']), len(res['quirks']), res['ms'])


def selftest(mutation=False):
    ok = True
    ref = read_reference()
    r = grade(ref)
    good = r['status'] == 'ok' and not r['failed'] and not r['quirks'] and r['score'] == 100.0
    print('[a] reference:', _fmt(r), 'OK' if good else 'FAIL')
    if not good:
        for f in r['failed'] + r['quirks']:
            print('    -', f['test'], '|', f['plain_uz'])
        ok = False

    def edge(name, files, want, note_has=None):
        nonlocal ok
        x = grade(files)
        hit = x['status'] == want and (note_has is None or note_has.lower() in (x['note'] + x['check_output']).lower())
        print('[c] %-16s' % name, _fmt(x), 'OK' if hit else 'FAIL (kutilgan %s)' % want)
        if not hit:
            print('      note:', x['note'][:200])
            ok = False

    edge("bo'sh fayl", {'core/views.py': ''}, 'check_failed')
    edge('sintaksis xato', {'core/views.py': 'def x(:\n  pass\n'}, 'check_failed', 'SyntaxError')
    edge("fayl yo'q", {}, 'bad_input')
    edge("taqiqlangan yo'l", {'../x.py': 'x=1'}, 'bad_input')
    edge('manage.py', {'manage.py': 'print(1)'}, 'bad_input')
    loop = dict(ref)
    loop['core/views.py'] = 'while True:\n    pass\n' + ref['core/views.py']
    edge('cheksiz sikl', loop, 'timeout')
    big = dict(ref)
    big['core/views.py'] = 'import sys\nsys.stdout.write("x" * 50_000_000)\n' + ref['core/views.py']
    edge('katta chiqish', big, 'check_failed', 'katta chiqish')
    huge = {'core/views.py': 'x = 1\n' * 100000}
    edge('katta fayl', huge, 'bad_input')
    if mutation:
        sys.path.insert(0, os.path.join(HERE, '..', 'tools'))
        import mutation_run
        m = mutation_run.run_all(verbose=False)
        print("[b] mutatsiya: %d/%d o'ldirildi, score=%.1f%%" % (m['killed'], m['total'], m['score']))
        if m['survived']:
            print('    omon qolganlar:', ', '.join(m['survived']))
        if m['total'] < 40 or m['score'] < 95.0:
            ok = False
    print('SELFTEST', 'OK' if ok else 'FAIL')
    return 0 if ok else 1


def main(argv):
    if '--selftest' in argv:
        return selftest('--mutation' in argv)
    if '--reference' in argv:
        r = grade(read_reference())
        print(_fmt(r))
        return 0 if r['score'] == 100.0 else 1
    if '--grade' in argv:
        data = json.load(open(argv[argv.index('--grade') + 1], encoding='utf-8'))
        data = data.get('files', data)
        print(json.dumps(grade(data), ensure_ascii=False, indent=2))
        return 0
    print(__doc__)
    return 2


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
