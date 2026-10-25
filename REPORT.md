# Yakuniy hisobot — BookShop Mastery Engine

Sana: 2026-10-25 · Repo: `~/MR/tushuntirish` · Oxirgi commit: `bab8a6d` (P9)

## 1. Faza jadvali

| Faza | Holat | Izoh |
|---|---|---|
| P0 Zaxira / GROUND_TRUTH | ✓ | oldingi sessiyalar |
| P1 Poydevor (core/*) | ✓ | |
| P2 Haqiqat vositalari / grader | ✓ | selftest yashil |
| P3 Kontent A (M00–M05) | ✓ | |
| P4 Kontent B (M06–M12) | ✓ | |
| P5 Kontent C (M13–M16 + rejimlar) | ✓ | |
| P6 Adaptiv + sim_students | ✓ | PASS |
| P7 Imtihon dvigateli | ✓ | bank 804, 5 mock |
| P8 Darslik sinxron | ✓ | verify_docs 0 |
| P9 Qotirish | ✓ | README, start.sh, a11y |
| P10 Hisobot | ✓ | ushbu fayl |

## 2. Raqamlar

| Metrika | Qiymat |
|---|---|
| Konseptlar | 143 |
| Misconception | 25 |
| Bug (B01–B22) | 22 |
| Mashq savollari (M00–M16) | 284 |
| Imtihon banki (muhrlangan) | 804 |
| Mock imtihon | 5 (har biri 83 element) |
| O\'yin rejimlari | 18 |
| app `*.js` fayllar | 61 |
| Hajm: app / tools / grader | 1.2M / 180K / 436K |

## 3. Tekshiruvlar (2026-10-25 20:58, qayta ishga tushirilgan)

### `python3 tools/lint_bank.py`
```
questions=284 concepts=143 bugs=22 misconceptions=25
OK 0 errors
```

### `python3 tools/verify_docs.py`
```
checked=3 errors=0
OK verify_docs 0 mismatches
```

### `python3 tools/sim_students.py`
```
talaba            urinish  master   core%  aniqlandi   gate
1-lazy                280       0    0.0%      False  False
2-rote                280       0    0.0%       True  False
3-hint_masher         280       0    0.0%       True  False
4-cheat               280       5    4.3%       True  False
5-ready              8424     117  100.0%      False   True
ACCEPT weak_blocked=True ready_95=True weak_no_gate=True
OK sim_students PASS
```

### `python3 grader/run.py --selftest`
```
[a] reference: ok score=100.0 core=73/73 ... OK
... chekka holatlar (bo'sh, sintaksis, timeout, ...) OK
SELFTEST OK
```

### Boshqa
- `bash -n start.sh` → OK
- `git -C ~/MR/BookShopBomba status --porcelain` → **mahalliy diff bor**
  (settings, urls, views, models, db, templates). `tushuntirish` yozuvi sifatida
  tasdiqlanmagan; holat ochiq qayd etiladi.

## 4. Ishga tushirish

```bash
cd ~/MR/tushuntirish
./start.sh
# App:     http://127.0.0.1:8765/app/index.html
# Darslik: http://127.0.0.1:8765/index.html
```

Offline: `app/index.html` ni to\'g\'ridan ochish mumkin (grader API siz).

## 5. Halol cheklovlar

1. Ledger/client-side himoya — o\'zgartirishni sezadi, to\'liq to\'xtatmaydi.
2. Imtihon banki brauzerda yuklanadi — server-side muhr emas.
3. Writing to\'liq bahosi uchun `./start.sh` + Django muhiti kerak.
4. Mashq savollari 284 (PROMPT ≥1200 variant maqsadiga yetmagan) — keyingi kengaytirish ochiq.
5. `data-src` sinxron hozir 3 aniq blok (urls/models/views); butun 28 sahifa avto-solishtiruv kengaytirilishi mumkin.
6. BookShopBomba working tree toza emas (yuqorida).

## 6. Xulosa

Asosiy zanjir ishlaydi: kontent → adaptiv model → sim_students PASS → imtihon banki/scoring →
darslik sinxron → grader selftest → start.sh/README. Maqsadli raqamlarning bir qismi
(masalan ≥1200 mashq varianti) hali pastroq; bu hisobotda yashirilmagan.
