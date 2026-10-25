#!/usr/bin/env python3
"""Darslik <pre data-src="file:start-end"> vs BookShopBomba. 0 xato = OK."""
from __future__ import annotations
import re, sys, html
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CODE = Path.home() / 'MR' / 'BookShopBomba'

def norm(s: str) -> str:
    lines = [ln.rstrip() for ln in s.replace('\r\n', '\n').split('\n')]
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    return '\n'.join(lines)

def strip_tags(s: str) -> str:
    return html.unescape(re.sub(r'<[^>]+>', '', s))

def load_slice(spec: str):
    m = re.match(r'([^:]+):(\d+)(?:-(\d+))?$', spec.strip())
    if not m:
        return None
    rel, a, b = m.group(1), int(m.group(2)), m.group(3)
    path = CODE / rel
    if not path.exists():
        return None
    lines = path.read_text(encoding='utf-8', errors='replace').splitlines()
    start = max(1, a)
    end = int(b) if b else len(lines)
    end = min(len(lines), end)
    return '\n'.join(lines[start - 1:end])

def main():
    if not CODE.is_dir():
        print('FAIL: BookShopBomba yo\'q', CODE)
        sys.exit(2)
    errs, checked = [], 0
    for f in sorted(ROOT.rglob('*.html')):
        rel = str(f.relative_to(ROOT)).replace('\\', '/')
        if rel.startswith('app/'):
            continue
        t = f.read_text(encoding='utf-8', errors='replace')
        for m in re.finditer(r'<pre([^>]*)>(.*?)</pre>', t, flags=re.S | re.I):
            attrs, body = m.group(1), m.group(2)
            dm = re.search(r'data-src=["\']([^"\']+)["\']', attrs)
            if not dm:
                continue
            spec = dm.group(1)
            checked += 1
            code = load_slice(spec)
            if code is None:
                errs.append(f'{rel}: bad src {spec}')
                continue
            doc, ref = norm(strip_tags(body)), norm(code)
            if doc == ref or doc in ref or ref in doc:
                continue
            dl = [x.strip() for x in doc.split('\n') if x.strip()]
            rl = [x.strip() for x in ref.split('\n') if x.strip()]
            i = 0
            for line in rl:
                if i < len(dl) and (dl[i] in line or line in dl[i]):
                    i += 1
            if i >= min(3, len(dl)) or i == len(dl):
                continue
            errs.append(f'{rel} @ {spec}: mismatch')
    print(f'checked={checked} errors={len(errs)}')
    for e in errs[:40]:
        print(' ', e)
    if checked == 0:
        print('FAIL: data-src yo\'q')
        sys.exit(1)
    if errs:
        print('FAIL verify_docs')
        sys.exit(1)
    print('OK verify_docs 0 mismatches')
    sys.exit(0)

if __name__ == '__main__':
    main()
