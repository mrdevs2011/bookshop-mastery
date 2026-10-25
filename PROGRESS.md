# PROGRESS — faza holati (kim kirsa AVVAL shuni o'qisin)

Belgilar: ✓ tugagan (qaytadan YOZMA, ustidan yozma) • ▶ jarayonda (kim/qachon) • ☐ boshlanmagan

## Qoida (har agent uchun)
1. Ish boshlashdan oldin: shu fayl + `GROUND_TRUTH.md` + `DECISIONS.md` + `git log --oneline` + `ls ~/Claude/.messages/unread`.
2. Fazani boshlayotganda DARHOL shu yerda `▶ (kim, vaqt)` deb belgila va commit qil — parallel agent ikkinchi marta boshlamasin.
3. Har STEP/faza tugagach: (a) shu jadvalni yangila, (b) `~/Claude/.messages/unread/` ga `fyi` xabar yoz, (c) `git commit -m "P<n>: ..."`.
4. ✓ faza ichida xato topsang — qayta yozma, `DECISIONS.md` ga yozib, kichik tuzatish commit qil.
5. Haqiqat manbai: `~/MR/BookShopBomba` (faqat o'qish). Xesh nazorati: `GROUND_TRUTH.sha256`.

## Fazalar
| Faza | Holat | Commit | Natija / izoh |
|---|---|---|---|
| P0 Zaxira, git, GROUND_TRUTH, DECISIONS | ✓ 2026-10-25 18:42 | 804bf5d, ac5ada2 | zip zaxira (63 fayl), git init, GROUND_TRUTH.md + .sha256, DEC-01…DEC-11; BookShopBomba o'zgarmagan (sha: 0 nomuvofiqlik) |
| P1 Poydevor (core/* modullar, birlik testlar) | ✓ 2026-10-25 19:10 | a4f0060 | 12 core modul (rng, srs, ledger, state, mastery, selector, router, normalize, diff, hl, ui, editor) + boot.js; 150 birlik test: node 142 o‘tdi (+8 DOM testi o‘tkazib yuborildi), brauzerda (headless chromium) 150/150; app `file://` da konsol xatosiz |
| P2 Haqiqat vositalari (server.py, grader, mutantlar, gen_*) | ▶ Grok (chat), 2026-10-25 19:54 | — | davom etyapti: terminal.js + sql.js |
| P3 Kontent A (M00–M05 + 1-batch rejimlar) | ☐ | — | |
| P4 Kontent B (M06–M12 + 2-batch rejimlar) | ☐ | — | |
| P5 Kontent C (M13–M16, Sprint, Boss, ...) | ☐ | — | |
| P6 Adaptiv dvigatel + sim_students | ☐ | — | |
| P7 Imtihon dvigateli | ☐ | — | |
| P8 Darslikni tuzatish va sinxron | ☐ | — | |
| P9 Qotirish (a11y, perf, README, start.sh) | ☐ | — | |
| P10 Yakuniy hisobot | ☐ | — | |

## Jurnal (eng yangisi tepada)
- 2026-10-25 19:54 — ▶ P2 davom (Grok): capture_cmds.py ishga tushiriladi (terminal.js), gen_sql yakunlanadi.
- 2026-10-25 19:10 — P1 ✓ tugadi (8 ta yetishmayotgan test fayl yozildi: mastery, selector, router, normalize, diff, hl, editor, ui; barchasi yashil). Keyingi: P2.
- 2026-10-25 18:42 — P0 ✓ tugadi va e'lon qilindi (`.messages/unread`).
- 2026-10-25 19:52 — ▶ P2 ichida `tools/gen_sql.py` + `tools/_sql_driver.py` + `app/data/sql.js` ni 2-sessiya olyapti (capture_cmds.py — 1-sessiyada, tegilmaydi).
