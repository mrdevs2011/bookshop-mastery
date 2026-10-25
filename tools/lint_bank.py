#!/usr/bin/env python3
"""Savol banki lint (PROMPT §8 qisqartma). 0 xato = OK."""
import json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'app' / 'data'

def load(name, key):
    t = (DATA / name).read_text(encoding='utf-8')
    m = f'window.BS.data.{key} = '
    return json.loads(t[t.index(m) + len(m):].rstrip().rstrip(';'))

errs = []
concepts = {c['id'] for c in load('concepts.js', 'concepts')}
mcs = {m['id'] for m in load('misconceptions.js', 'misconceptions')}
bugs = load('bugs.js', 'bugs')
if len(bugs) < 22:
    errs.append(f'bugs {len(bugs)} < 22')

qs = []
for mod in ['m00','m01','m02','m03','m04','m05','m06','m07','m08','m09','m10','m11','m12','m13','m14','m15','m16']:
    f = DATA / f'questions_{mod}.js'
    if f.exists():
        qs.extend(load(f'questions_{mod}.js', f'questions_{mod}'))

ids = set()
for q in qs:
    if q['id'] in ids:
        errs.append(f'dup id {q["id"]}')
    ids.add(q['id'])
    if not q.get('prompt'):
        errs.append(f'{q["id"]}: empty prompt')
    if not q.get('concepts'):
        errs.append(f'{q["id"]}: no concepts')
    for c in q.get('concepts', []):
        if c not in concepts:
            errs.append(f'{q["id"]}: unknown concept {c}')
    if q.get('format') == 'choice' and not q.get('options'):
        errs.append(f'{q["id"]}: choice without options')
    if q.get('format') in ('choice', 'write', 'debug') and not q.get('accepted'):
        errs.append(f'{q["id"]}: no accepted')
    for d in q.get('distractors') or []:
        mid = d.get('misconception')
        if mid and mid not in mcs:
            errs.append(f'{q["id"]}: unknown MC {mid}')

print(f'questions={len(qs)} concepts={len(concepts)} bugs={len(bugs)} misconceptions={len(mcs)}')
if errs:
    print('FAIL', len(errs))
    for e in errs[:40]:
        print(' ', e)
    sys.exit(1)
print('OK 0 errors')
sys.exit(0)
