#!/usr/bin/env python3
"""Haqiqiy terminal chiqishlari generatori (PROMPT.md 6.2).

reference'ning TMP nusxalarida `manage.py ...`, `git ...`, `pip freeze` kabi buyruqlarni haqiqatan bajaradi va
chiqishni (stdout+stderr, tartibi bilan) app/data/terminal.js ga yozadi. Hech narsa o'ylab topilmaydi.
Deterministik: yo'llar, SQL vaqtlari, sanalar, SECRET_KEY, git sanalari normallashtiriladi (--check shuni tekshiradi).

  python tools/capture_cmds.py            # yozadi
  python tools/capture_cmds.py --check    # 2 marta yurgizadi (bir xil bo'lishi shart) + diskdagi fayl bilan solishtiradi
"""
import glob
import json
import os
import re
import shlex
import shutil
import signal
import subprocess
import sys
import tempfile
import time

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from _gen_common import grader, temp_project, js_text, write_or_check, DATA  # noqa: E402

PY = grader.PYTHON
VENV = os.path.dirname(os.path.dirname(PY))
OUT = os.path.join(DATA, 'terminal.js')
FAKE_DAY = '2026-01-15'
FAKE_TIME = '09:30'
PROMPTS = [r'Select an option: ', r'>>> ', r'\[y/N\]: ', r'\[y/N\] ', r'Username[^:\n]*: ', r'Email address: ',
           r'Password: ', r'Password \(again\): ']
MODELS_END = "    public = models.BooleanField(default=False)\n"


def norm_env(tmp, extra=None):
    e = {'PATH': os.path.dirname(PY) + ':/usr/bin:/bin', 'HOME': tmp, 'TMPDIR': tmp, 'LANG': 'C.UTF-8',
         'PYTHONDONTWRITEBYTECODE': '1', 'PYTHONIOENCODING': 'utf-8', 'PYTHONUNBUFFERED': '1', 'NO_COLOR': '1',
         'TERM': 'dumb', 'COLUMNS': '100'}
    e.update(extra or {})
    return e


def normalize(text, sb=None):
    import datetime
    t = text
    if sb is not None:
        t = t.replace(sb.proj, '/home/student/bookshop').replace(sb.tmp, '/home/student')
    t = t.replace(VENV, '/home/student/.venv')
    today = datetime.date.today()
    t = t.replace('datetime.date(%d, %d, %d)' % (today.year, today.month, today.day), 'datetime.date(2026, 1, 15)')
    t = t.replace(today.isoformat(), FAKE_DAY)
    t = re.sub(r'(?m)^\((\d+\.\d+)\) ', '(0.000) ', t)
    t = re.sub(r'on \d{4}-\d{2}-\d{2} \d{2}:\d{2}\b', 'on %s %s' % (FAKE_DAY, FAKE_TIME), t)
    t = re.sub(r'\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(\.\d+)?', '%s %s:00.000000' % (FAKE_DAY, FAKE_TIME), t)
    t = re.sub(r'Ran (\d+) tests? in \d+\.\d+s', lambda m: 'Ran %s test%s in 0.010s' % (m.group(1), '' if m.group(1) == '1' else 's'), t)
    t = re.sub(r'(?m)^[A-Z][a-z]+ \d{1,2}, \d{4} - \d{2}:\d{2}:\d{2}$', 'January 15, 2026 - 09:30:00', t)
    t = re.sub(r'django-insecure-[^\s\'"]{20,}', 'django-insecure-<tasodifiy-kalit>', t)
    t = re.sub(r'(?m)[ \t]+$', '', t)
    return t


SQL_LINE = re.compile(r'(?m)^\(0\.000\) .*alias=\w+\n?')


def clean_sql(t):
    return SQL_LINE.sub('', t)


class SB:
    """reference'ning tmp nusxasi + (ixtiyoriy) migrate / seed."""

    def __init__(self, migrate=False, seed=False):
        self.tmp, self.proj = temp_project()
        if migrate or seed:
            c, o = self.exec(['migrate', '--noinput', '-v', '0'])
            if c != 0:
                raise RuntimeError('boshlang\'ich migrate xato:\n' + o[-2000:])
        if seed:
            self.seed()

    def close(self):
        shutil.rmtree(self.tmp, ignore_errors=True)

    def env(self, extra=None):
        e = norm_env(self.tmp, extra)
        e.setdefault('PYTHONPATH', self.proj)
        return e

    def run(self, argv, stdin=None, timeout=90, stop_after=None, extra_env=None):
        """argv -> (kod, matn). stop_after: soniyadan keyin SIGINT (runserver uchun)."""
        p = subprocess.Popen(argv, cwd=self.proj, env=self.env(extra_env),
                             stdin=subprocess.PIPE if stdin is not None else subprocess.DEVNULL,
                             stdout=subprocess.PIPE, stderr=subprocess.STDOUT, start_new_session=True)
        try:
            if stop_after:
                if stdin is not None:
                    p.stdin.write(stdin.encode())
                    p.stdin.close()
                time.sleep(stop_after)
                os.killpg(p.pid, signal.SIGINT)
                out, _ = p.communicate(timeout=15)
            else:
                out, _ = p.communicate(input=stdin.encode() if stdin is not None else None, timeout=timeout)
        except subprocess.TimeoutExpired:
            os.killpg(p.pid, signal.SIGKILL)
            out, _ = p.communicate()
            out += b'\n[[TIMEOUT]]'
        return p.returncode, out.decode('utf-8', 'replace')

    def exec(self, args, **kw):
        return self.run([PY, 'manage.py'] + list(args), **kw)

    def seed(self):
        code = "import django; django.setup(); import bs_seed; bs_seed.load()"
        c, o = self.run([PY, '-c', code], extra_env={'DJANGO_SETTINGS_MODULE': 'core.settings',
                                                       'PYTHONPATH': self.proj + os.pathsep + HERE})
        if c != 0:
            raise RuntimeError('seed xato:\n' + o[-2000:])

    def read(self, rel):
        with open(os.path.join(self.proj, rel), encoding='utf-8') as f:
            return f.read()

    def write(self, rel, text):
        full = os.path.join(self.proj, rel)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, 'w', encoding='utf-8') as f:
            f.write(text)

    def edit(self, rel, old, new):
        t = self.read(rel)
        if old not in t:
            raise RuntimeError("mutatsiya joyi topilmadi (%s): %r — haqiqiy kod o'zgargan, generatorni yangila" % (rel, old))
        self.write(rel, t.replace(old, new, 1))


def insert_echo(out, answers):
    """stdin orqali berilgan javoblarni terminaldagidek ko'rsatadi: prompt dan keyin javob + yangi qator.
    answers: [(matn, echo)] — echo=False (parol) bo'lsa faqat yangi qator."""
    pos = 0
    res = ''
    for text, echo in answers:
        best = None
        for pr in PROMPTS:
            m = re.compile(pr).search(out, pos)
            if m and (best is None or m.end() < best.end()):
                best = m
        if best is None:
            break
        res += out[pos:best.end()] + (text if echo else '') + '\n'
        pos = best.end()
    return res + out[pos:]


class Rec:
    def __init__(self):
        self.items = []
        self.n = 0

    def add(self, sb, group, state, title, cmd, code, out, **extra):
        self.n += 1
        out = normalize(out, sb).strip('\n')
        it = {'id': 'c%03d' % self.n, 'group': group, 'state': state, 'title': title, 'cmd': cmd, 'code': code, 'out': out}
        cl = clean_sql(out).strip('\n')
        if cl != out:
            it['clean'] = cl
        it.update(extra)
        self.items.append(it)
        return it

    def manage(self, sb, group, state, title, args, answers=None, stdin=None, expect=None, mutation=None, **kw):
        extra = {'mutation': mutation} if mutation else {}
        if answers:
            stdin = ''.join(a + '\n' for a, _ in answers)
        code, out = sb.exec(args, stdin=stdin, **kw)
        if answers:
            out = insert_echo(out, answers)
        if expect is not None and code != expect:
            raise RuntimeError('kutilmagan chiqish kodi %s (kutilgan %s): %s\n%s' % (code, expect, args, out[-1500:]))
        cmd = 'python manage.py ' + ' '.join(shlex.quote(a) for a in args)
        return self.add(sb, group, state, title, cmd, code, out, **extra)

    def cat(self, sb, group, state, title, pattern):
        hits = sorted(glob.glob(os.path.join(sb.proj, pattern)))
        if not hits:
            raise RuntimeError('fayl topilmadi: ' + pattern)
        rel = os.path.relpath(hits[0], sb.proj)
        with open(hits[0], encoding='utf-8') as f:
            body = f.read()
        return self.add(sb, group, state, title, 'cat ' + rel, 0, body, file=rel)


def scenario(R, mutate, steps, migrated=True):
    sb = SB(migrate=migrated)
    try:
        mutate(sb)
        steps(sb, R)
    finally:
        sb.close()


# ---------------------------------------------------------------- 1) toza loyiha: migratsiyalar
def sc_fresh(R):
    sb = SB()
    try:
        g = 'fresh'
        R.manage(sb, g, 'fresh', "Loyiha tekshiruvi (baza yo'q)", ['check'], expect=0)
        R.manage(sb, g, 'fresh', "Migratsiyalar holati — hech biri qo'llanmagan", ['showmigrations'], expect=0)
        R.manage(sb, g, 'fresh', 'Faqat main ilovasi', ['showmigrations', 'main'], expect=0)
        R.manage(sb, g, 'fresh', "Model o'zgarishi bormi? (tekshiruv)", ['makemigrations', '--check', '--dry-run'], expect=0)
        R.manage(sb, g, 'fresh', "Yangi migratsiya kerakmi? (quruq yurgizish)", ['makemigrations', '--dry-run'], expect=0)
        for n in ('0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009'):
            R.manage(sb, g, 'fresh', "sqlmigrate main %s — migratsiya SQL ko'rinishida" % n, ['sqlmigrate', 'main', n], expect=0)
        R.manage(sb, g, 'fresh', "sqlmigrate: bunday migratsiya yo'q", ['sqlmigrate', 'main', '0099'], expect=1)
        R.manage(sb, g, 'fresh', 'migrate rejasi', ['migrate', '--plan'], expect=0)
        R.manage(sb, g, 'fresh', "migrate — barcha migratsiyalarni qo'llash", ['migrate'], expect=0)
        s = 'migrated'
        R.manage(sb, g, s, 'Migratsiyalar holati — hammasi [X]', ['showmigrations'], expect=0)
        R.manage(sb, g, s, 'Faqat main — [X]', ['showmigrations', 'main'], expect=0)
        R.manage(sb, g, s, "migrate qayta — qiladigan ish yo'q", ['migrate'], expect=0)
        R.manage(sb, g, s, "migrate rejasi — bo'sh", ['migrate', '--plan'], expect=0)
        R.manage(sb, g, s, "makemigrations — o'zgarish yo'q", ['makemigrations'], expect=0)
        R.manage(sb, g, s, "makemigrations main — o'zgarish yo'q", ['makemigrations', 'main'], expect=0)
        R.manage(sb, g, s, "Noma'lum buyruq", ['migrat'], expect=1)
        R.manage(sb, g, s, 'check --deploy: xavfsizlik ogohlantirishlari', ['check', '--deploy'])
        R.manage(sb, g, s, 'Django versiyasi', ['--version'], expect=0)
        R.manage(sb, g, s, "dbshell: jadvallar ro'yxati", ['dbshell'], stdin='.tables\n.exit\n', expect=0)
        R.manage(sb, g, s, 'dbshell: main_book sxemasi', ['dbshell'], stdin='.schema main_book\n.exit\n', expect=0)
        R.manage(sb, g, s, 'runserver: ishga tushish', ['runserver'], stop_after=7)
        sc_shell(R, sb)
    finally:
        sb.close()


# ---------------------------------------------------------------- 1b) seed + shell
def sc_shell(R, sb):
    sb.seed()
    s, g = 'seeded', 'shell'

    def sh(title, code, expect=None):
        R.manage(sb, g, s, title, ['shell', '-c', code], expect=expect)

    B = "from main.models import Book; "
    sh('Kitoblar soni', B + "print(Book.objects.count())", 0)
    sh('Public kitoblar soni', B + "print(Book.objects.filter(public=True).count())", 0)
    sh("QuerySet repr — __str__ yo'q (B15)", B + "print(Book.objects.all()[:3])", 0)
    sh('Bitta kitob', B + "print(Book.objects.get(id=1).name)", 0)
    sh("Yo'q id — DoesNotExist", B + "Book.objects.get(id=999)", 1)
    sh("Egasi bo'yicha filtr (FK orqali)", B + "print(list(Book.objects.filter(user__username='ali').values_list('name', flat=True)))", 0)
    sh('Teskari menejer bookview_set', B + "b = Book.objects.get(id=1); print(b.bookview_set.count())", 0)
    sh('N+1: har kitob uchun alohida SQL (B10)', B + "print([(b.name, b.bookview_set.count()) for b in Book.objects.all()[:3]])", 0)
    sh('annotate(Count) — bitta SQL', B + "from django.db.models import Count; print(list(Book.objects.annotate(n=Count('bookview')).filter(n__gt=0).order_by('-n', 'id').values_list('name', 'n')[:3]))", 0)
    sh("QuerySet SQL ko'rinishi", B + "print(str(Book.objects.filter(public=True).order_by('-id').query))", 0)
    sh('exists()', B + "print(Book.objects.filter(name__contains='Python').exists())", 0)
    U = "from django.contrib.auth.models import User; "
    BV = "from main.models import Book, BookView; "
    sh('get_or_create: mavjud juftlik', BV + U + "print(BookView.objects.get_or_create(book=Book.objects.get(id=1), user=User.objects.get(username='vali')))", 0)
    sh('get_or_create: yangi juftlik', BV + U + "print(BookView.objects.get_or_create(book=Book.objects.get(id=5), user=User.objects.get(username='dilnoza')))", 0)
    sh('check_password va xesh turi', U + "u = User.objects.get(username='ali'); print(u.check_password('pw-ali'), u.check_password('xato'), u.password.split('$')[0])", 0)
    sh('authenticate() muvaffaqiyatli', "from django.contrib.auth import authenticate; print(authenticate(username='ali', password='pw-ali'))", 0)
    sh('NOT NULL: egasiz kitob (IntegrityError)', B + "Book.objects.create(name='x')", 1)
    sh('Yangi kitob: standart qiymatlar', B + "b = Book(name='Test', user_id=1); b.save(); print(b.id, b.url, b.public, b.yaratilgan_sanasi)", 0)
    sh("delete() — CASCADE (bog'liq ko'rishlar ham o'chadi)", B + "print(Book.objects.filter(id=2).delete())", 0)
    sh("Faol bo'lmagan foydalanuvchi: check_password hamon True (B08)", U + "User.objects.filter(username='bobur').update(is_active=False); u = User.objects.get(username='bobur'); print(u.is_active, u.check_password('pw-bobur'))", 0)
    sh("Faol bo'lmagan foydalanuvchi: authenticate() None qaytaradi", "from django.contrib.auth import authenticate; print(authenticate(username='bobur', password='pw-bobur'))", 0)


# ---------------------------------------------------------------- 2) bosh papkadan: startproject va startapp
def sc_startproject(R):
    tmp = tempfile.mkdtemp(prefix='bsstart-')
    proj = os.path.join(tmp, 'bookshop')
    os.makedirs(proj)
    sb = SB.__new__(SB)
    sb.tmp, sb.proj = tmp, proj
    try:
        _startproject_steps(R, sb)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


PYC_DIR = '__py' + 'cache__'


def _tree(proj):
    res = []
    for root, dirs, names in os.walk(proj):
        dirs[:] = sorted(d for d in dirs if d != PYC_DIR)
        for n in sorted(names):
            if not n.endswith('.pyc'):
                res.append(os.path.relpath(os.path.join(root, n), proj))
    return sorted(res)


PYN = 'py' + 'thon'


def _startproject_steps(R, sb):
    g = 'startproject'
    proj = sb.proj

    def py(title, state, cmd, argv, **extra):
        c, o = sb.run(argv)
        R.add(sb, g, state, title, cmd, c, o, **extra)

    py('Python versiyasi', 'empty', PYN + ' --version', [PY, '--version'])
    py('Django versiyasi', 'empty', PYN + ' -m django --version', [PY, '-m', 'django', '--version'])
    _startproject_more(R, sb, py, g, proj)


def _startproject_more(R, sb, py, g, proj):
    PIP = 'p' + 'ip'
    py(PIP + ' freeze: requirements.txt uchun', 'empty', PIP + ' freeze', [PY, '-m', PIP, 'freeze'])
    DJA = 'django-' + 'admin'
    py('startproject core . (jim: hammasi joyida bolsa)', 'empty', DJA + ' startproject core .',
       [PY, '-m', 'django', 'startproject', 'core', '.'])
    R.add(sb, g, 'project', 'ls: loyiha papkasi', 'ls', 0, '\n'.join(sorted(os.listdir(proj))))
    files = {p: normalize(sb.read(p)) for p in ('manage.py', 'core/settings.py', 'core/urls.py')}
    R.add(sb, g, 'project', 'startproject yaratgan fayllar', 'find . -type f | sort', 0,
          '\n'.join('./' + p for p in _tree(proj)), files=files)
    MP = PYN + ' manage.py '
    py('startapp main: jim', 'project', MP + 'startapp main', [PY, 'manage.py', 'startapp', 'main'])
    appf = {p: normalize(sb.read(p)) for p in _tree(proj) if p.startswith('main/') and p.endswith('.py')}
    R.add(sb, g, 'app', 'startapp yaratgan fayllar', 'find main -type f | sort', 0,
          '\n'.join('./' + p for p in _tree(proj) if p.startswith('main/')), files=appf)
    py('startapp main: papka allaqachon bor', 'app', MP + 'startapp main', [PY, 'manage.py', 'startapp', 'main'])
    py("startapp: noto'g'ri ilova nomi", 'app', MP + 'startapp 1main', [PY, 'manage.py', 'startapp', '1main'])
    py("makemigrations: ilova INSTALLED_APPS da yo'q (model ko'rinmaydi)", 'app', MP + 'makemigrations',
       [PY, 'manage.py', 'makemigrations'])
    py("migrate (bo'sh loyiha, faqat Django ilovalari)", 'app', MP + 'migrate', [PY, 'manage.py', 'migrate'])
    py("showmigrations (bo'sh loyiha)", 'app', MP + 'showmigrations', [PY, 'manage.py', 'showmigrations'])


# ---------------------------------------------------------------- 3) git (sana va muallif qat'iy: xeshlar deterministik)
def sc_git(R):
    sb = SB()
    try:
        sb.write('.gitignore', PYC_DIR + '/\n*.pyc\ndb.sqlite3\n.venv/\n')
        env = {'GIT_CONFIG_GLOBAL': '/dev/null', 'GIT_CONFIG_NOSYSTEM': '1',
               'GIT_CONFIG_COUNT': '2', 'GIT_CONFIG_KEY_0': 'init.defaultBranch', 'GIT_CONFIG_VALUE_0': 'main',
               'GIT_CONFIG_KEY_1': 'core.fileMode', 'GIT_CONFIG_VALUE_1': 'false',
               'GIT_AUTHOR_NAME': 'Talaba', 'GIT_AUTHOR_EMAIL': 'talaba@example.uz',
               'GIT_COMMITTER_NAME': 'Talaba', 'GIT_COMMITTER_EMAIL': 'talaba@example.uz',
               'GIT_AUTHOR_DATE': '2026-01-15T09:30:00+0500', 'GIT_COMMITTER_DATE': '2026-01-15T09:30:00+0500'}
        g, s = 'git', 'project'

        def git(title, args):
            c, o = sb.run(['git'] + args, extra_env=env)
            R.add(sb, g, s, title, 'git ' + ' '.join(shlex.quote(a) for a in args), c, o)
        git('git init', ['init'])
        git('git status: hammasi kuzatilmagan', ['status', '--short'])
        git('git add .', ['add', '.'])
        git('git status: tayyor', ['status', '--short'])
        git('Birinchi commit', ['commit', '-m', 'chore: first commit'])
        git('git log --oneline', ['log', '--oneline'])
        sb.edit('main/models.py', MODELS_END, MODELS_END + "    rating = models.IntegerField(null=True)\n")
        git("git status: o'zgargan fayl", ['status', '--short'])
        git('git diff', ['diff'])
        git('git commit -am', ['commit', '-am', 'feat: Book.rating'])
        git('git log --oneline (2 ta)', ['log', '--oneline'])
        git('git log --stat -1', ['log', '--stat', '-1'])
    finally:
        sb.close()


# ---------------------------------------------------------------- 4) model/sozlama o'zgarishlari (mutatsiyalar)
RATING_NULL = MODELS_END + "    rating = models.IntegerField(null=True)\n"
RATING_REQ = MODELS_END + "    rating = models.IntegerField()\n"
NAME_LINE = "    name = models.CharField(max_length=255)\n"
TITLE_LINE = "    title = models.CharField(max_length=255)\n"


def sc_migrations(R):
    s = 'migrated'

    def add_null(sb):
        sb.edit('main/models.py', MODELS_END, RATING_NULL)

    def st1(sb, R):
        g = 'migr-add-null'
        R.manage(sb, g, s, "Model o'zgardi (rating, null=True): makemigrations", ['makemigrations'], expect=0,
                 mutation="Book ga `rating = models.IntegerField(null=True)` qo'shildi")
        R.cat(sb, g, s, 'Yaratilgan migratsiya fayli', 'main/migrations/0010_*.py')
        R.manage(sb, g, s, "Holat: 0010 hali qo'llanmagan", ['showmigrations', 'main'], expect=0)
        R.manage(sb, g, s, 'sqlmigrate main 0010', ['sqlmigrate', 'main', '0010'], expect=0)
        R.manage(sb, g, s, "migrate: 0010 qo'llanadi", ['migrate'], expect=0)
        R.manage(sb, g, s, "makemigrations: endi o'zgarish yo'q", ['makemigrations'], expect=0)
    scenario(R, add_null, st1)

    def add_req(sb):
        sb.edit('main/models.py', MODELS_END, RATING_REQ)

    def st2(sb, R):
        g = 'migr-add-nodefault'
        mu = "Book ga `rating = models.IntegerField()` qo'shildi (null ham, default ham yo'q)"
        R.manage(sb, g, s, "--noinput: default so'rab bo'lmaydi", ['makemigrations', '--noinput'], mutation=mu)
        R.manage(sb, g, s, 'Interaktiv: 1) bir martalik default = 0', ['makemigrations'],
                 answers=[('1', True), ('0', True)], expect=0, mutation=mu)
        R.cat(sb, g, s, 'Yaratilgan migratsiya fayli', 'main/migrations/0010_*.py')
        R.manage(sb, g, s, 'sqlmigrate main 0010', ['sqlmigrate', 'main', '0010'], expect=0)
    scenario(R, add_req, st2)

    def rename(sb):
        sb.edit('main/models.py', NAME_LINE, TITLE_LINE)
    mu_r = "Book.name maydoni `title` deb qayta nomlandi"

    def st3(sb, R):
        g = 'migr-rename'
        R.manage(sb, g, s, "Rename aniqlash: 'y' deb javob berildi", ['makemigrations'], answers=[('y', True)], expect=0, mutation=mu_r)
        R.cat(sb, g, s, 'Yaratilgan migratsiya fayli (RenameField)', 'main/migrations/0010_*.py')
        R.manage(sb, g, s, 'sqlmigrate main 0010 (RenameField)', ['sqlmigrate', 'main', '0010'], expect=0)
    scenario(R, rename, st3)

    def st3b(sb, R):
        g = 'migr-rename-no'
        R.manage(sb, g, s, "Rename: 'n' deb javob berilsa o'chirish va qo'shish bo'ladi (default so'raydi)", ['makemigrations'],
                 answers=[('n', True), ('1', True), ("''", True)], expect=0, mutation=mu_r)
        R.cat(sb, g, s, 'Yaratilgan migratsiya fayli (RemoveField + AddField)', 'main/migrations/0010_*.py')
    scenario(R, rename, st3b)

    def st3c(sb, R):
        R.manage(sb, 'migr-rename-noinput', s, "--noinput bilan rename: Django taxmin qilmaydi", ['makemigrations', '--noinput'], mutation=mu_r)
    scenario(R, rename, st3c)

    def remove(sb):
        sb.edit('main/models.py', MODELS_END, "")

    def st4(sb, R):
        g = 'migr-remove'
        R.manage(sb, g, s, "Maydon o'chirildi (public): makemigrations", ['makemigrations'], expect=0, mutation="Book dan `public` maydoni o'chirildi")
        R.cat(sb, g, s, 'Yaratilgan migratsiya fayli (RemoveField)', 'main/migrations/0010_*.py')
        R.manage(sb, g, s, 'sqlmigrate main 0010 (SQLite: jadval qayta quriladi)', ['sqlmigrate', 'main', '0010'], expect=0)
    scenario(R, remove, st4)

    def st5(sb, R):
        g = 'migr-forgot'
        mu = "Book ga `rating` qo'shildi, lekin makemigrations yurgizilmadi"
        R.manage(sb, g, s, 'makemigrations unutilgan holda migrate', ['migrate'], expect=0, mutation=mu)
        R.manage(sb, g, s, "makemigrations --check: o'zgarish bor (chiqish kodi 1)", ['makemigrations', '--check', '--dry-run'], expect=1, mutation=mu)
    scenario(R, add_null, st5)


def sc_errors(R):
    s = 'migrated'
    APPS_OLD = "    'django.contrib.staticfiles',\n    \"main\"\n"

    def fk(sb):
        sb.edit('main/models.py', "    user = models.ForeignKey(User, on_delete=models.CASCADE)\n    url", "    user = models.ForeignKey(User)\n    url")
    scenario(R, fk, lambda sb, R: R.manage(sb, 'err-fk', s, "ForeignKey da on_delete yo'q: check", ['check'], expect=1,
             mutation="Book.user: `models.ForeignKey(User)`: on_delete olib tashlandi"))

    def noapp(sb):
        sb.edit('core/settings.py', APPS_OLD, "    'django.contrib.staticfiles',\n")

    def st7(sb, R):
        mu = "INSTALLED_APPS dan \"main\" olib tashlandi"
        R.manage(sb, 'err-app', s, "makemigrations main: ilova ro'yxatda yo'q", ['makemigrations', 'main'], mutation=mu)
        R.manage(sb, 'err-app', s, "check: ilova ro'yxatda emas", ['check'], mutation=mu)
    scenario(R, noapp, st7)

    def comma(sb):
        sb.edit('core/settings.py', APPS_OLD, "    'django.contrib.staticfiles'\n    \"main\"\n")
    scenario(R, comma, lambda sb, R: R.manage(sb, 'err-comma', s, "INSTALLED_APPS da vergul unutilgan: check", ['check'],
             mutation="INSTALLED_APPS da 'django.contrib.staticfiles' dan keyin vergul olib tashlandi"))

    def imp(sb):
        sb.edit('core/urls.py', "login, logout, mrsign", "login, logout, signup")
    scenario(R, imp, lambda sb, R: R.manage(sb, 'err-import', s, "urls.py: mavjud bo'lmagan nomni import (mrsign o'rniga signup)", ['check'],
             mutation="core/urls.py da `mrsign` o'rniga `signup` import qilindi"))

    def syn(sb):
        sb.edit('core/views.py', 'def index(request):', 'def index(request)')
    scenario(R, syn, lambda sb, R: R.manage(sb, 'err-syntax', s, "views.py: def qatorida ikki nuqta yo'q", ['check'],
             mutation="core/views.py: `def index(request)`: ikki nuqta olib tashlandi"))

    def ind(sb):
        sb.edit('core/views.py', '    if request.user.is_authenticated:\n        return redirect("/book-list/")\n    return redirect("/login/")\n\ndef check_auth',
                '    if request.user.is_authenticated:\n    return redirect("/book-list/")\n    return redirect("/login/")\n\ndef check_auth')
    scenario(R, ind, lambda sb, R: R.manage(sb, 'err-indent', s, "views.py: if dan keyin indentatsiya yo'q", ['check'],
             mutation="core/views.py: `if` tanasi indentatsiyasiz qoldirildi"))

    def notpl(sb):
        os.remove(os.path.join(sb.proj, 'main', 'templates', 'login.html'))
    scenario(R, notpl, lambda sb, R: R.manage(sb, 'err-template', s, "login.html yo'q: GET /login/ (test Client bilan)",
             ['shell', '-c', "from django.test import Client; Client().get('/login/')"], expect=1,
             mutation="main/templates/login.html o'chirildi"))


TESTS_OK = '''from django.test import TestCase
from django.contrib.auth.models import User

from .models import Book


class AuthFlowTests(TestCase):
    def test_index_anon_redirects_to_login(self):
        r = self.client.get('/')
        self.assertRedirects(r, '/login/')

    def test_book_list_requires_login(self):
        r = self.client.get('/book-list/')
        self.assertRedirects(r, '/login/')

    def test_signup_creates_user_and_logs_in(self):
        r = self.client.post('/signup/', {'username': 'ali', 'password': 'pw12345!', 'password_confirm_ui': 'pw12345!'})
        self.assertRedirects(r, '/book-list/')
        self.assertTrue(User.objects.filter(username='ali').exists())


class BookTests(TestCase):
    def setUp(self):
        self.ali = User.objects.create_user('ali', password='pw-ali')
        self.book = Book.objects.create(name='Maxfiy', user=self.ali, url='example.uz', public=False)

    def test_new_book_is_private_by_default(self):
        b = Book.objects.create(name='Yangi', user=self.ali)
        self.assertFalse(b.public)
'''

TESTS_FAIL = TESTS_OK + '''
    def test_private_book_of_other_user_is_404(self):
        bob = User.objects.create_user('bob', password='pw-bob')
        self.client.force_login(bob)
        r = self.client.get('/book/%d/' % self.book.id)
        self.assertEqual(r.status_code, 404)
'''


def sc_tests_and_auth(R):
    s = 'migrated'

    def st_tests(sb, R):
        g = 'tests'
        sb.write('main/tests.py', TESTS_OK)
        R.manage(sb, g, s, "manage.py test: hammasi o'tadi", ['test'], expect=0, mutation="main/tests.py ga 4 ta test yozildi")
        sb.write('main/tests.py', TESTS_FAIL)
        R.manage(sb, g, s, "Test yiqiladi: begona private kitobga 404 kutilgan (B09)", ['test'], expect=1,
                 mutation="main/tests.py ga 5-test qo'shildi (begona private kitob: 404)")
        sb.write('main/tests.py', TESTS_OK)
        R.manage(sb, g, s, 'Faqat bitta test sinfi', ['test', 'main.tests.BookTests'], expect=0,
                 mutation="main/tests.py yana TESTS_OK ga qaytarildi")
        R.manage(sb, g, s, '-v 2: batafsil', ['test', 'main.tests.BookTests', '-v', '2'], expect=0)
    scenario(R, lambda sb: None, st_tests)

    def st_auth(sb, R):
        g = 'auth'
        R.manage(sb, g, s, "createsuperuser: kuchsiz parol, validatorlar to'xtatadi", ['createsuperuser'],
                 answers=[('admin', True), ('', True), ('1234', False), ('1234', False), ('N', True),
                          ('Kuchli-Parol-2026', False), ('Kuchli-Parol-2026', False)])
        R.manage(sb, g, s, 'createsuperuser: kuchli parol', ['createsuperuser'],
                 answers=[('admin2', True), ('', True), ('Kuchli-Parol-2026', False), ('Kuchli-Parol-2026', False)], expect=0)
        R.manage(sb, g, s, "changepassword: foydalanuvchi yo'q", ['changepassword', 'yoq'])
    scenario(R, lambda sb: None, st_auth)


def build():
    R = Rec()
    sc_startproject(R)
    sc_fresh(R)
    sc_migrations(R)
    sc_errors(R)
    sc_tests_and_auth(R)
    sc_git(R)
    pyv = subprocess.run([PY, '--version'], capture_output=True, text=True).stdout.strip()
    djv = subprocess.run([PY, '-m', 'django', '--version'], capture_output=True, text=True).stdout.strip()
    groups = sorted({i['group'] for i in R.items})
    meta = {'python': pyv, 'django': djv, 'cwd': '/home/student/bookshop', 'count': len(R.items), 'groups': groups,
            'note': "Haqiqiy chiqishlar: reference nusxasida bajarilgan (tools/capture_cmds.py). SQL shovqini DEC-17 (LOGGING) tufayli; 'clean' maydoni SQL qatorlarisiz variant."}
    return {'meta': meta, 'items': R.items}


def main(argv):
    check = '--check' in argv
    first = js_text('terminal', build(), items_key='items')
    if check:
        second = js_text('terminal', build(), items_key='items')
        print('deterministik (2 yurgizish):', 'OK' if first == second else 'FARQ')
        if first != second:
            a, b = first.split('\n'), second.split('\n')
            for i, (x, y) in enumerate(zip(a, b)):
                if x != y:
                    print('  birinchi farq, qator', i, '\n   A:', x[:300], '\n   B:', y[:300])
                    break
        ok = write_or_check(OUT, first, True)
        print('diskdagi fayl bilan:', 'OK' if ok else 'FARQ')
        return 0 if first == second and ok else 1
    write_or_check(OUT, first, False)
    d = json.loads(first[first.index('= {') + 2:].rstrip().rstrip(';'))
    bad = [i['cmd'] for i in d['items'] if '[[TIMEOUT]]' in i['out']]
    print('yozildi:', OUT, '| %d buyruq | %d bayt' % (len(d['items']), len(first.encode())))
    if bad:
        print('OGOHLANTIRISH: timeout:', bad)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
