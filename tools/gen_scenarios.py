#!/usr/bin/env python3
"""Haqiqiy ssenariylar: aktyor x resurs holati x endpoint x metod x payload — reference'da Django Client bilan bajariladi.
Natija: app/data/scenarios.js (Request Flight, Permission Matrix, Reverse Engineer savollari shundan olinadi) va app/data/seed.js.
Ishlatish: python3 tools/gen_scenarios.py [--check]   (--check: fayl o'zgarmasligini tekshiradi — determinizm)"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import _gen_common as G  # noqa: E402
import bs_seed  # noqa: E402


def build():
    d = G.run_driver('_scenario_driver.py', 'x')
    sc = {'django': d['django'], 'debug': d['debug'], 'count': len(d['items']), 'items': d['items']}
    return G.js_text('scenarios', sc, 'items'), G.js_text('seed', bs_seed.as_json()), d


def main():
    check = '--check' in sys.argv
    sc_js, seed_js, d = build()
    ok1 = G.write_or_check(os.path.join(G.DATA, 'scenarios.js'), sc_js, check)
    ok2 = G.write_or_check(os.path.join(G.DATA, 'seed.js'), seed_js, check)
    if check:
        print('gen_scenarios --check:', 'OZGARMADI (deterministik)' if ok1 and ok2 else 'FARQ BOR')
        return 0 if ok1 and ok2 else 1
    codes = {}
    for it in d['items']:
        codes[it['result']['status']] = codes.get(it['result']['status'], 0) + 1
    print('scenarios.js: %d ssenariy, statuslar %s, Django %s, DEBUG=%s' % (len(d['items']), dict(sorted(codes.items())), d['django'], d['debug']))
    return 0


if __name__ == '__main__':
    sys.exit(main())
