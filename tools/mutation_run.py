#!/usr/bin/env python3
"""Grader'ning o'zini sinash: mutatsiya.

Reference'ga BITTA kichik o'zgarish (mutant) kiritiladi va grader.grade() yurgiziladi.
Mutant "o'ldirildi" = grader uni sezdi (status != ok, yoki biror hidden test yiqildi).
Omon qolgan mutant = hidden testlarda teshik bor (yoki mutant reference bilan ekvivalent).
Yaroqsiz mutant (`old` matn topilmadi / eski == yangi) ham nosozlik: u hisobga olinadi va xato beradi.

Ishlatish:
  python3 tools/mutation_run.py [-j 6] [-v] [--only v01,u02] [--report grader/mutants/report.json]
Chiqish kodi: 0 — score >= 95% va yaroqsiz mutant yo'q va soni >= 40; aks holda 1.
"""
import argparse
import concurrent.futures as cf
import importlib.util
import json
import os
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
GRADER = os.path.join(ROOT, 'grader')
sys.path.insert(0, GRADER)

import run as grader  # noqa: E402

MIN_COUNT = 40
MIN_SCORE = 95.0


def _load_mutants():
    spec = importlib.util.spec_from_file_location('bs_mutants', os.path.join(GRADER, 'mutants', 'mutants.py'))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.MUTANTS


def _nth_index(text, sub, nth):
    pos = -1
    for _ in range(nth + 1):
        pos = text.find(sub, pos + 1)
        if pos < 0:
            return -1
    return pos


def apply(ref, m):
    """-> (yangi_fayllar | None, xato_matni)"""
    f = m['file']
    if f not in ref:
        return None, "fayl reference'da yo'q: %s" % f
    if not m['old']:
        return None, "`old` bo'sh"
    if m['old'] == m['new']:
        return None, "`old` == `new` (o'zgarish yo'q)"
    text = ref[f]
    i = _nth_index(text, m['old'], m['nth'])
    if i < 0:
        return None, "`old` matn %d-marta topilmadi (%s)" % (m['nth'] + 1, f)
    out = dict(ref)
    out[f] = text[:i] + m['new'] + text[i + len(m['old']):]
    return out, ''


def _one(ref, m):
    files, err = apply(ref, m)
    if files is None:
        return {'id': m['id'], 'status': 'invalid', 'by': [], 'note': err, 'desc': m['desc']}
    # faqat o'zgargan fayl yuboriladi: grader qolganini reference'dan oladi
    res = grader.grade({m['file']: files[m['file']]})
    killers = [x['test'] for x in res['failed']] + [x['test'] for x in res['quirks']]
    if res['status'] != 'ok':
        status, by = 'killed', ['<%s>' % res['status']]
    elif killers:
        status, by = 'killed', killers
    else:
        status, by = 'survived', []
    return {'id': m['id'], 'status': status, 'by': by, 'note': res.get('note', ''), 'desc': m['desc'],
            'ms': res.get('ms', 0)}


def run_all(verbose=True, workers=6, only=None, report=None):
    ref = grader.read_reference()
    muts = _load_mutants()
    if only:
        muts = [m for m in muts if any(m['id'].startswith(o) for o in only)]
    ids = [m['id'] for m in muts]
    dup = sorted({i for i in ids if ids.count(i) > 1})
    t0 = time.time()
    rows = []
    with cf.ThreadPoolExecutor(max_workers=workers) as ex:
        futs = {ex.submit(_one, ref, m): m for m in muts}
        for fu in cf.as_completed(futs):
            r = fu.result()
            rows.append(r)
            if verbose:
                mark = {'killed': "o'ldi   ", 'survived': 'OMON    ', 'invalid': 'YAROQSIZ'}[r['status']]
                by = (', '.join(r['by'][:2]) + (' +%d' % (len(r['by']) - 2) if len(r['by']) > 2 else '')) if r['by'] else r['note']
                print('  %s %-30s %s' % (mark, r['id'], by[:90]), flush=True)
    rows.sort(key=lambda r: r['id'])
    killed = [r for r in rows if r['status'] == 'killed']
    survived = [r['id'] for r in rows if r['status'] == 'survived']
    invalid = [r['id'] for r in rows if r['status'] == 'invalid']
    total = len(rows)
    score = 100.0 * len(killed) / total if total else 0.0
    check_only = [r['id'] for r in killed if r['by'] and all(b.startswith('<') for b in r['by'])]
    out = {'total': total, 'killed': len(killed), 'score': round(score, 1),
           'survived': survived + ['%s(yaroqsiz)' % i for i in invalid],
           'invalid': invalid, 'duplicates': dup, 'check_only': check_only,
           'seconds': round(time.time() - t0, 1), 'rows': rows}
    if report:
        with open(report, 'w', encoding='utf-8') as f:
            json.dump(out, f, ensure_ascii=False, indent=1)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('-j', type=int, default=6)
    ap.add_argument('-v', action='store_true')
    ap.add_argument('--only', default='')
    ap.add_argument('--report', default=os.path.join(GRADER, 'mutants', 'report.json'))
    a = ap.parse_args()
    only = [s for s in a.only.split(',') if s] or None
    m = run_all(verbose=a.v, workers=a.j, only=only, report=a.report)
    print("MUTATSIYA: %d/%d o'ldirildi, score=%.1f%%, %.0f s" % (m['killed'], m['total'], m['score'], m['seconds']))
    if m['check_only']:
        print("  faqat check/timeout bilan ushlangan (%d): %s" % (len(m['check_only']), ', '.join(m['check_only'])))
    if m['survived']:
        print('  OMON QOLGAN/YAROQSIZ:', ', '.join(m['survived']))
    if m['duplicates']:
        print('  TAKROR id lar:', ', '.join(m['duplicates']))
    ok = m['total'] >= MIN_COUNT and m['score'] >= MIN_SCORE and not m['invalid'] and not m['duplicates']
    print('MUTATION', 'OK' if ok else 'FAIL')
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
