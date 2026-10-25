#!/usr/bin/env python3
"""Haqiqiy stsenariylar generatori (PROMPT.md 6.2).

aktyor (anon/ega/begona/admin) x endpoint x metod x payload ni reference nusxada Django Client bilan bajaradi,
natijani (status, redirect, DB o'zgarishi, messages, render ma'lumoti) app/data/scenarios.js ga yozadi.
Deterministik: ikki marta yurgizilsa bayt-ma'noda bir xil (--check shuni tekshiradi).

  python3 tools/gen_scenarios.py            # yozadi
  python3 tools/gen_scenarios.py --check    # 2 marta yurgizadi + diskdagi fayl bilan solishtiradi
"""
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

OUT = os.path.join(ROOT, 'app', 'data', 'scenarios.js')

GENSET = """from core.settings import *  # noqa
DATABASES = {'default': {'ENGINE': 'django.db.backends.sqlite3', 'NAME': ':memory:'}}
PASSWORD_HASHERS = ['django.contrib.auth.hashers.MD5PasswordHasher']
SECRET_KEY = 'scenario-gen-only'
DEBUG = False
"""


def run_driver():
    tmp = tempfile.mkdtemp(prefix='bs_scen_')
    try:
        proj = os.path.join(tmp, 'proj')
        shutil.copytree(grader.REFERENCE, proj, ignore=shutil.ignore_patterns('__pycache__', '*.pyc', 'db.sqlite3'))
        with open(os.path.join(proj, '_genset.py'), 'w') as f:
            f.write(GENSET)
        shutil.copy(os.path.join(HERE, '_scenario_driver.py'), proj)
        env = {'PATH': '/usr/bin:/bin', 'HOME': tmp, 'TMPDIR': tmp, 'LANG': 'C.UTF-8', 'PYTHONDONTWRITEBYTECODE': '1',
               'PYTHONIOENCODING': 'utf-8', 'PYTHONPATH': proj}
        p = subprocess.run([grader.PYTHON, '_scenario_driver.py'], cwd=proj, env=env, capture_output=True, text=True,
                           timeout=180)
        if p.returncode != 0:
            sys.stderr.write(p.stderr[-4000:])
            raise SystemExit('driver xato bilan tugadi (kod %d)' % p.returncode)
        return json.loads(p.stdout)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def dumps(o):
    return json.dumps(o, ensure_ascii=False, sort_keys=True)


def render_js(data):
    L = ['/* AVTO-GENERATSIYA: tools/gen_scenarios.py — qo\'lda tahrirlama. Natijalar haqiqiy Django Client dan. */',
         'window.BS = window.BS || {}; window.BS.data = window.BS.data || {};',
         'window.BS.data.scenarios = {',
         ' "meta": ' + dumps(data['meta']) + ',']
    for k in ('single', 'follow', 'seq'):
        L.append(' "%s": [' % k)
        items = data[k]
        for i, it in enumerate(items):
            L.append('  ' + dumps(it) + (',' if i < len(items) - 1 else ''))
        L.append(' ]' + (',' if k != 'seq' else ''))
    L.append('};')
    return '\n'.join(L) + '\n'


def main(argv):
    first = render_js(run_driver())
    if '--check' in argv:
        second = render_js(run_driver())
        same = first == second
        disk = open(OUT, encoding='utf-8').read() if os.path.exists(OUT) else None
        print('deterministik (2 yurgizish):', 'OK' if same else 'FARQ')
        print('diskdagi fayl bilan:', 'OK' if disk == first else ('YO\'Q' if disk is None else 'FARQ'))
        return 0 if same and disk == first else 1
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(first)
    d = json.loads(first[first.index('= {') + 2:].rstrip().rstrip(';'))
    print('yozildi:', OUT, '| single=%d follow=%d seq=%d | %d bayt' % (len(d['single']), len(d['follow']), len(d['seq']), len(first.encode())))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
