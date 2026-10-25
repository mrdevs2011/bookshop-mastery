"""gen_* vositalari uchun umumiy yordamchilar: reference'ning TMP nusxasi, drayver ishga tushirish, deterministik JS yozish."""
import json
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, 'grader'))
import run as grader  # noqa: E402

DATA = os.path.join(ROOT, 'app', 'data')


def temp_project():
    """reference'ning toza nusxasi (db yo'q) -> (tmp, proj). Chaqiruvchi shutil.rmtree(tmp) qiladi."""
    tmp = tempfile.mkdtemp(prefix='bsgen-')
    proj = os.path.join(tmp, 'proj')
    shutil.copytree(grader.REFERENCE, proj, ignore=shutil.ignore_patterns('__pycache__', '*.pyc', 'db.sqlite3'))
    return tmp, proj


def run_driver(driver, out_json, timeout=120, extra_env=None):
    """driver (tools/ ichidagi .py) ni reference nusxasi ichida bajaradi; natija out_json fayliga yoziladi."""
    tmp, proj = temp_project()
    try:
        env = {'PATH': '/usr/bin:/bin', 'HOME': tmp, 'TMPDIR': tmp, 'LANG': 'C.UTF-8', 'PYTHONDONTWRITEBYTECODE': '1',
               'PYTHONIOENCODING': 'utf-8', 'PYTHONPATH': proj, 'BS_TOOLS': HERE}
        env.update(extra_env or {})
        res = os.path.join(tmp, 'out.json')
        p = subprocess.run([grader.PYTHON, os.path.join(HERE, driver), res], cwd=proj, env=env, timeout=timeout,
                           stdin=subprocess.DEVNULL, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if p.returncode != 0 or not os.path.exists(res):
            raise RuntimeError('%s xato (kod %s):\n%s' % (driver, p.returncode, p.stderr.decode('utf-8', 'replace')[-3000:]))
        with open(res, encoding='utf-8') as f:
            return json.load(f)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def js_text(var, obj, items_key=None):
    """window.BS.data.<var> = {...};  Deterministik (sort_keys). items_key bo'lsa — ro'yxat elementlari alohida qatorda."""
    head = '/* AVTOMATIK: tools/ dagi generator yaratgan — qo\'lda tahrirlama. */\nwindow.BS = window.BS || {}; window.BS.data = window.BS.data || {};\n'
    if items_key and isinstance(obj, dict) and isinstance(obj.get(items_key), list):
        rest = {k: v for k, v in obj.items() if k != items_key}
        lines = ',\n'.join(json.dumps(i, sort_keys=True, ensure_ascii=False) for i in obj[items_key])
        meta = json.dumps(rest, sort_keys=True, ensure_ascii=False)[:-1]
        body = '%s%s"%s":[\n%s\n]}' % (meta, ',' if rest else '', items_key, lines)
    else:
        body = json.dumps(obj, sort_keys=True, ensure_ascii=False, indent=1)
    return '%swindow.BS.data.%s = %s;\n' % (head, var, body)


def write_or_check(path, text, check):
    """check=True: faylni yozmaydi, farq bo'lsa False. Aks holda yozadi (o'zgarmagan bo'lsa tegmaydi)."""
    old = None
    if os.path.exists(path):
        with open(path, encoding='utf-8') as f:
            old = f.read()
    if check:
        return old == text
    if old != text:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
    return True
