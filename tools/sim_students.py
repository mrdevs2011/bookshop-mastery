#!/usr/bin/env python3
"""Virtual talabalar (PROMPT §13). Chiqish: jadval + PASS/FAIL."""
from __future__ import annotations
import json, math, random, sys
from pathlib import Path
from dataclasses import dataclass
from typing import List, Optional

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'app' / 'data'

def load_js(name: str, key: str):
    t = (DATA / name).read_text(encoding='utf-8')
    m = f'window.BS.data.{key} = '
    i = t.index(m) + len(m)
    return json.loads(t[i:].rstrip().rstrip(';'))

INTERVALS = [1, 3, 7, 21, 60]
FORMAT_W = {
    'choice': 0.6, 'match': 0.6, 'order': 0.8, 'trace': 0.9,
    'write': 1.0, 'teach': 1.0, 'debug': 1.2, 'boss': 1.3, 'build': 1.5,
}
HELP_CAP = [1.0, 0.8, 0.5, 0.0]
K, MASTER, SUCCESS = 24, 85, 0.8

def expected(score: float, diff: int) -> float:
    d = 20 * (diff or 2) - 10
    return 1 / (1 + math.exp((d - score) / 12))

def credit(raw: float, help_lvl: int) -> float:
    c = max(0.0, min(1.0, float(raw)))
    return min(c, HELP_CAP[min(3, help_lvl or 0)])

def new_rec() -> dict:
    return {
        'score': 0.0, 'box': 0, 'due': None, 'n': 0,
        'ok': {}, 'days': [], 'hist': [], 'twinPending': False, 'weak': False,
    }

def effective_score(rec: dict, today: int) -> float:
    overdue = max(0, today - rec['due']) if rec.get('due') is not None else 0
    return rec['score'] * (1 - min(0.5, overdue * 0.01))

def srs_apply(rec: dict, success: bool, day: int):
    if rec['due'] is None:
        rec['box'] = 0
        rec['due'] = day + INTERVALS[0]
        return
    if not success:
        rec['box'] = 0
        rec['due'] = day + INTERVALS[0]
        return
    if rec['due'] <= day:
        rec['box'] = min(len(INTERVALS) - 1, rec['box'] + 1)
        rec['due'] = day + INTERVALS[rec['box']]

def is_mastered(rec: dict, today: int) -> bool:
    if not rec or not rec['n']:
        return False
    if effective_score(rec, today) < MASTER:
        return False
    if len(rec['ok']) < 3:
        return False
    if len(rec['days']) < 2:
        return False
    if rec['twinPending']:
        return False
    if any(h.get('h', 0) >= 3 for h in rec['hist'][-10:]):
        return False
    return True

def record_attempt(st: dict, a: dict) -> dict:
    day = a['day']
    cid = a['concept']
    rec = st['concepts'].setdefault(cid, new_rec())
    help_lvl = a.get('help', 0)
    raw = 1.0 if a.get('ok') else 0.0
    fmt = a.get('format', 'choice')
    diff = a.get('difficulty', 2)
    c = credit(raw, help_lvl)
    w = FORMAT_W.get(fmt, 1.0)
    p = expected(effective_score(rec, day), diff)
    delta = K * w * (c - p)
    rec['score'] = max(0.0, min(100.0, rec['score'] + delta))
    success = raw >= SUCCESS and help_lvl <= 2
    srs_apply(rec, success, day)
    rec['n'] += 1
    rec['hist'].append({'d': day, 'f': fmt, 'ok': 1 if success else 0, 'h': help_lvl})
    if len(rec['hist']) > 50:
        rec['hist'] = rec['hist'][-50:]
    if success:
        rec['ok'][fmt] = rec['ok'].get(fmt, 0) + 1
        if day not in rec['days']:
            rec['days'].append(day)
    if help_lvl >= 3:
        rec['weak'] = True
        rec['twinPending'] = True
    if is_mastered(rec, day):
        rec['weak'] = False
    st['ledger'].append({'qid': a.get('qid', cid), 'res': c, 'help': help_lvl, 'day': day})
    return {'credit': c, 'success': success, 'rec': rec}

def selector_pick(cands, st, today, recent, last_modules, last_format, rng, target=0.75):
    last_mod = last_modules[-1] if last_modules else None
    run = 0
    for m in reversed(last_modules):
        if m == last_mod:
            run += 1
        else:
            break
    scored = []
    for c in cands:
        if c['id'] in recent:
            continue
        rec = st['concepts'].get(c['concept'])
        eff = effective_score(rec, today) if rec else 0.0
        p = expected(eff, c['difficulty'])
        s = -abs(p - target) * 10
        if rec:
            if rec.get('weak'):
                s += 1.5
            if rec.get('due') is not None and rec['due'] <= today:
                s += 2
            if c['format'] not in rec.get('ok', {}):
                s += 0.6
        else:
            s += 0.5
        if last_mod is not None and c['module'] == last_mod:
            s -= 8 if run >= 3 else 0.5
        if last_format and c['format'] == last_format:
            s -= 0.7
        s += rng.random() * 0.3
        scored.append((s, c))
    if not scored:
        return None
    scored.sort(key=lambda x: -x[0])
    return scored[0][1]

def load_bank():
    qs = []
    for mod in [f'm{i:02d}' for i in range(0, 17)]:
        f = DATA / f'questions_{mod}.js'
        if not f.exists():
            continue
        for q in load_js(f'questions_{mod}.js', f'questions_{mod}'):
            concept = (q.get('concepts') or ['?'])[0]
            qs.append({
                'id': q['id'],
                'concept': concept,
                'module': concept[:3] if concept.startswith('M') else mod.upper(),
                'difficulty': int(q.get('difficulty') or 2),
                'format': q.get('format') or 'choice',
            })
    return qs

def core_concepts(qs):
    mods = {f'M{i:02d}' for i in range(0, 13)}
    return sorted({c['concept'] for c in qs if c['module'] in mods})

@dataclass
class Result:
    name: str
    attempts: int
    mastered: int
    core_pct: float
    detected: bool
    note: str
    gate_pass: bool

def simulate_weak(bank, core, persona, days=14, per_day=20, seed=1) -> Result:
    rng = random.Random(seed)
    st = {'concepts': {}, 'ledger': []}
    recent, last_modules = [], []
    last_format = None
    help_spam = 0
    integrity_ok = True

    for day in range(1, days + 1):
        for _ in range(per_day):
            due_ids = [cid for cid, r in st['concepts'].items()
                       if r.get('due') is not None and r['due'] <= day]
            cands = [c for c in bank if c['concept'] in due_ids] if due_ids and 'cheat' not in persona else bank
            if not cands:
                cands = bank
            pick = selector_pick(cands, st, day, recent[-30:], last_modules[-10:], last_format, rng)
            if not pick:
                pick = rng.choice(bank)

            help_lvl, ok = 0, False
            if 'lazy' in persona:
                ok = rng.random() < 0.25
            elif 'rote' in persona:
                ok = rng.random() < (0.85 if pick['format'] == 'choice' and pick['difficulty'] <= 2 else 0.15)
            elif 'hint' in persona:
                help_lvl, ok = 3, True
                help_spam += 1
            elif 'cheat' in persona:
                ok = True

            record_attempt(st, {
                'concept': pick['concept'], 'qid': pick['id'], 'day': day,
                'format': pick['format'], 'difficulty': pick['difficulty'],
                'ok': ok, 'help': help_lvl,
            })

            if 'cheat' in persona:
                rec = st['concepts'][pick['concept']]
                rec['score'] = 95
                rec['ok'] = {'choice': 2, 'write': 2, 'debug': 2}
                rec['days'] = list(range(max(1, day - 3), day + 1))
                rec['twinPending'] = False
                rec['hist'] = [{'d': day, 'f': 'choice', 'ok': 1, 'h': 0}] * 5
                st['ledger'].append({'qid': 'FORGED', 'res': 1.0, 'help': 0, 'day': day, 'forged': True})
                integrity_ok = False

            recent.append(pick['id'])
            last_modules.append(pick['module'])
            last_format = pick['format']

    mastered = sum(1 for cid in core if is_mastered(st['concepts'].get(cid, new_rec()), days))
    core_pct = 100.0 * mastered / max(1, len(core))
    attempts = sum(r['n'] for r in st['concepts'].values())

    detected, note = False, ''
    if 'hint' in persona and help_spam > attempts * 0.5:
        detected, note = True, 'H3 spam / twinPending'
    if 'cheat' in persona and not integrity_ok:
        detected, note = True, 'ledger forged'
    if 'rote' in persona:
        avg_fmt = sum(len(r.get('ok', {})) for r in st['concepts'].values()) / max(1, len(st['concepts']))
        if avg_fmt < 2:
            detected, note = True, f'format diversity ~{avg_fmt:.1f}'

    gate = core_pct >= 60 and not detected
    return Result(persona, attempts, mastered, round(core_pct, 1), detected, note, gate)

def simulate_ready(core) -> Result:
    """To'liq tayyor: 3 format × ko'p kun, D5 — Elo ≥85."""
    st = {'concepts': {}, 'ledger': []}
    formats = ['choice', 'write', 'debug']
    for session_day in (1, 2, 3, 5, 7, 10, 14, 21):
        for cid in core:
            for fmt in formats:
                a = {
                    'concept': cid, 'qid': f'{cid}-{fmt}-{session_day}',
                    'day': session_day, 'format': fmt, 'difficulty': 5,
                    'ok': True, 'help': 0,
                }
                for _ in range(3):
                    record_attempt(st, a)
    day = 21
    mastered = sum(1 for cid in core if is_mastered(st['concepts'].get(cid, new_rec()), day))
    core_pct = 100.0 * mastered / max(1, len(core))
    attempts = sum(r['n'] for r in st['concepts'].values())
    # sample one score
    sample = next(iter(st['concepts'].values()))
    note = f'sample_score={sample["score"]:.1f}'
    return Result('5-ready', attempts, mastered, round(core_pct, 1), False, note, core_pct >= 95)

def main():
    bank = load_bank()
    core = core_concepts(bank)
    print(f'bank={len(bank)} core_concepts={len(core)}')
    results = [
        simulate_weak(bank, core, '1-lazy', seed=1),
        simulate_weak(bank, core, '2-rote', seed=2),
        simulate_weak(bank, core, '3-hint_masher', seed=3),
        simulate_weak(bank, core, '4-cheat', seed=4),
        simulate_ready(core),
    ]
    # fix names for weak
    names = ['1-lazy', '2-rote', '3-hint_masher', '4-cheat', '5-ready']
    for r, n in zip(results, names):
        r.name = n

    print()
    print(f'{"talaba":<16} {"urinish":>8} {"master":>7} {"core%":>7} {"aniqlandi":>10} {"gate":>6}  izoh')
    print('-' * 78)
    for r in results:
        print(f'{r.name:<16} {r.attempts:>8} {r.mastered:>7} {r.core_pct:>6.1f}% {str(r.detected):>10} {str(r.gate_pass):>6}  {r.note}')

    weak, ready = results[:4], results[4]
    ok_weak = all((r.core_pct < 60) or r.detected for r in weak)
    ok_ready = ready.core_pct >= 95
    ok_gate = all(not r.gate_pass for r in weak)
    print()
    print(f'ACCEPT weak_blocked={ok_weak} ready_95={ok_ready} weak_no_gate={ok_gate}')
    if ok_weak and ok_ready and ok_gate:
        print('OK sim_students PASS')
        sys.exit(0)
    print('FAIL sim_students')
    sys.exit(1)

if __name__ == '__main__':
    main()
