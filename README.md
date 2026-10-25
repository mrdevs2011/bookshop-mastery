# BookShop Mastery Engine

Django BookShop (BookShopBomba) asosida **o'zbekcha** interaktiv o'quv platformasi:
darslik (01–14) + app (18 rejim, adaptiv mastery, imtihon BOOKSHOP 9.0).

## Ishga tushirish

```bash
cd ~/MR/tushuntirish
./start.sh
# App:     http://127.0.0.1:8765/app/index.html
# Darslik: http://127.0.0.1:8765/index.html
```

Server **ixtiyoriy**. Brauzerda to'g'ridan `app/index.html` ni ham ochish mumkin (offline):
grader API bo'lmasa Writing bo'limi qisman ball bilan ishlaydi.

Port: `BS_PORT=9000 ./start.sh`

## Kunlik reja (tavsiya)

1. **Isinish** (10–15 daq) — muddati kelgan takrorlar (qarz tizimi).
2. **Yangi konsept** — Dojo / Parsons / Quick-Fire.
3. **Debug** — Bug Hunt yoki Diff Duel (haqiqiy B01–B22).
4. **ORM / migratsiya** — ORM Arena yoki Migration Time Machine.
5. **Haftada 1** — Mock imtihon (BOOKSHOP 9.0).

## Tekshiruvlar

```bash
python3 tools/lint_bank.py
python3 tools/verify_docs.py
python3 tools/sim_students.py
python3 grader/run.py --selftest
```

## Halol cheklovlar

- Bu **mahalliy** app: `localStorage` + zanjir-xeshli ledger o'zgartirishni *sezadi*,
  to'liq oldini olmaydi (devtools bilan state tahrirlash mumkin).
- Imtihon banki alohida (`exam_bank.js`), lekin client-side — mukammal yashirin emas.
- Writing/grader uchun lokal `./start.sh` va Django muhiti kerak; offline da qisman ball.
- BookShopBomba manba kodi **o'zgartirilmaydi** (faqat o'qiladi).
- `sim_students` Python portda mastery/srs mantiqini isbotlaydi.

## Tarkib (qisqa)

| Qism | Miqdor |
|---|---|
| Konseptlar | 143 |
| Mashq savollari | 284 |
| Imtihon banki | 804 |
| Bug katalogi | 22 |
| Rejimlar | 18 |
| Mock imtihon | 5 |

## Manba

O'quv maqsadida. Haqiqiy loyiha: `~/MR/BookShopBomba`.


## Vercel (statik)

Repo: https://github.com/mrdevs2011/bookshop-mastery

Import qilinganda Framework = Other. Deploy dan keyin:
- Darslik: `https://<project>.vercel.app/`
- App: `https://<project>.vercel.app/app/`

**Cheklov:** Django grader API Vercelda ishlamaydi (faqat lokal `./start.sh`).
Mashq, rejimlar, imtihon mock, mastery — to'liq offline/static.
