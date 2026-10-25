#!/usr/bin/env python3
"""Haqiqiy SQL/ORM chiqishlari generatori (PROMPT.md 6.2).

reference nusxasida _sql_driver.py ni ishga tushiradi: CaptureQueriesContext orqali
SQL va so'rovlar sonini yozadi → app/data/sql.js.
Deterministik: --check ikki marta yurgizib solishtiradi.

  python3 tools/gen_sql.py
  python3 tools/gen_sql.py --check
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from _gen_common import run_driver, js_text, write_or_check, DATA  # noqa: E402

OUT = os.path.join(DATA, 'sql.js')


def build():
    data = run_driver('_sql_driver.py', 'out.json', timeout=90)
    return data


def main(argv):
    check = '--check' in argv
    first = js_text('sql', build(), items_key='cases')
    if check:
        second = js_text('sql', build(), items_key='cases')
        same = first == second
        disk_ok = write_or_check(OUT, first, True)
        print('deterministik (2 yurgizish):', 'OK' if same else 'FARQ')
        print('diskdagi fayl bilan:', 'OK' if disk_ok else 'FARQ')
        return 0 if same and disk_ok else 1
    write_or_check(OUT, first, False)
    # quick stats
    import json
    d = json.loads(first[first.index('= {') + 2:].rstrip().rstrip(';'))
    print('yozildi:', OUT, '| %d case | %d bayt' % (len(d.get('cases', [])), len(first.encode())))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
