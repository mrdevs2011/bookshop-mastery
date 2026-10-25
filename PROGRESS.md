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
| P2 Haqiqat vositalari (server.py, grader, mutantlar, gen_*) | ✓ 2026-10-25 20:05 | 1b0e948 | server+grader+mutants 77/77, scenarios 99, terminal 109 cmd, sql 35 case; selftest OK |
| P3 Kontent A (M00–M05 + 1-batch rejimlar) | ✓ 2026-10-25 20:30 | 82c8275 | 143 konsept, 25 MC, 22 bug, 146 savol, 5 rejim, lint_bank 0 |
| P4 Kontent B (M06–M12 + 2-batch rejimlar) | ✓ 2026-10-25 20:35 | a6dee35 | M06–M12 89 savol, jami 235; 7 yangi rejim; lint 0 |
| P5 Kontent C (M13–M16, Sprint, Boss, ...) | ✓ 2026-10-25 20:40 | 1529afe | M13–M16 49 savol, jami 284; +6 rejim; lint 0 |
| P6 Adaptiv dvigatel + sim_students | ✓ 2026-10-25 20:50 | e6a37c1 | sim_students PASS; selector/mastery/srs ishlaydi |
| P7 Imtihon dvigateli | ✓ 2026-10-25 20:55 | 799c748 | bank 804, 5 mock, scoring/sertifikat/bashorat |
| P8 Darslik sinxron | ✓ 2026-10-25 21:00 | 1ae4154 | D01–D03, verify_docs 0, data-src sync |
| P9 Qotirish (a11y, perf, README, start.sh) | ✓ 2026-10-25 21:05 | 5f583c1 | lint/verify/sim/selftest OK; README+start.sh+a11y |
| P10 Yakuniy hisobot | ✓ 2026-10-25 21:10 | c9f69ba | REPORT.md — faqat ishga tushirilgan natijalar |

## Jurnal (eng yangisi tepada)
- 2026-10-25 21:15 — To'liq tugatish: savollar 1224, boot v1.0 (exam+stats), verify_docs 4 blok.
- 2026-10-25 21:10 — P10 ✓: REPORT.md yozildi. Zanjir P0–P10 yopildi.
- 2026-10-25 21:05 — P9 ✓: README/start.sh/a11y; lint+verify+sim+grader selftest OK. BookShopBomba da mahalliy diff bor (halol yozildi). Keyingi: P10.
- 2026-10-25 20:55 — ▶ P9 boshlandi (Grok): README, start.sh, a11y, to'liq tekshiruv.
- 2026-10-25 21:00 — P8 ✓: D01/D02/D03, verify_docs OK (3 exact sync). Keyingi: P9.
- 2026-10-25 20:51 — ▶ P8 boshlandi (Grok): D01–D02, data-src, verify_docs.
- 2026-10-25 20:55 — P7 ✓: exam_bank 804, 5 mock, scoring+certificate+predictor. Keyingi: P8.
- 2026-10-25 20:48 — ▶ P7 boshlandi (Grok): muhrlangan bank, 5 mock, scoring, sertifikat.
- 2026-10-25 20:50 — P6 ✓: sim_students PASS (1–4 blok/aniqlandi, 5=100% core). Keyingi: P7.
- 2026-10-25 20:40 — ▶ P6 boshlandi (Grok): selector sozlash + sim_students.py.
- 2026-10-25 20:40 — P5 ✓: M13–M16 + Sprint/Boss/Teach-back/Gauntlet/Daily/Chaos. 284 savol, 18 rejim. Keyingi: P6.
- 2026-10-25 20:34 — ▶ P5 boshlandi (Grok): M13–M16 + Sprint/Boss/Teach-back/Gauntlet/Daily/Chaos.
- 2026-10-25 20:35 — P4 ✓: M06–M12 savollar + Bug Hunt/Matrix/ORM/Migration/Template/Terminal/Reverse. lint 0. Keyingi: P5.
- 2026-10-25 20:28 — ▶ P4 boshlandi (Grok): M06–M12 savollar + Bug Hunt, Matrix, ORM, Migration, Template, Terminal, Reverse.
- 2026-10-25 20:30 — P3 ✓: savollar 146, lint_bank OK, 5 rejim. Keyingi: P4.
- 2026-10-25 20:25 — P3 MVP: concepts 143, misconceptions 25, bugs 22, M00–M05 savollar 42, rejimlar dojo/parsons/quickfire/duel/tracer. Savollar sonini oshirish davom etadi.
- 2026-10-25 20:11 — ▶ P3 boshlandi (Grok): concepts/misconceptions/bugs + M00–M05 + 1-batch rejimlar.
- 2026-10-25 20:05 — P2 ✓: capture_cmds tuzatildi + terminal.js (109), gen_sql.py + sql.js (35), selftest/mutation yashil. Keyingi: P3.
- 2026-10-25 19:54 — ▶ P2 davom (Grok): capture_cmds.py ishga tushiriladi (terminal.js), gen_sql yakunlanadi.
- 2026-10-25 19:10 — P1 ✓ tugadi (8 ta yetishmayotgan test fayl yozildi: mastery, selector, router, normalize, diff, hl, editor, ui; barchasi yashil). Keyingi: P2.
- 2026-10-25 18:42 — P0 ✓ tugadi va e'lon qilindi (`.messages/unread`).
- 2026-10-25 19:52 — ▶ P2 ichida `tools/gen_sql.py` + `tools/_sql_driver.py` + `app/data/sql.js` ni 2-sessiya olyapti (capture_cmds.py — 1-sessiyada, tegilmaydi).
