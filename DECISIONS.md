# DECISIONS — bir qatorli qarorlar (savol berilmaydi, eng yaxshisi tanlanadi)

- DEC-01 (P0) Zaxira: `_backup/tushuntirish-P0-20261025-183837.zip` (63 fayl); `_backup/` `.gitignore` da, gitga kirmaydi.
- DEC-02 (P0) Git: `~/MR/tushuntirish` da lokal repo (`main`), muallif — global git identity; har faza oxirida `P<n>: ...` commit.
- DEC-03 (P0) Vositalar: node v22 bor → birlik testlar `node` bilan; chromium (headless tekshiruv) va firefox bor.
- DEC-04 (P0) Grader Python: `~/MR/BookShopBomba/.venv/bin/python` (faqat ishga tushirish, ichiga yozilmaydi); reference tozalangan NUSXA da ishlaydi.
- DEC-05 (P0) Tema: ikki tema saqlanadi (docs = oq `assets/style.css`, app = qorong'i `app/css/app.css`); brend ranglari (#e63946, #f4a261) `app/css/tokens.css` da yagona manba, docs shu qiymatlarga moslanadi (P8 da tekshiriladi).
- DEC-06 (P0) B23 (bonus): shablonlar Google Fonts'ni CDN dan oladi. B01–B22 majburiy ro'yxat o'zgarmaydi, DoD dagi "22 bug" soni saqlanadi, B23 qo'shimcha.
- DEC-07 (P0) Darslik 28 ta `.html` sahifa (26 `index.html` + `buyruqlar.html` + `login-batafsil.html`); P8 hammasini qamraydi, `build_nav.py` ham `index.html` bilan cheklanmaydi.
- DEC-08 (P0) BookShopBomba nazorati: `GROUND_TRUTH.sha256` (manbalar xeshi); `db.sqlite3` DoD tekshiruvidan istisno — uni boshqa jarayon yozib turadi (N07).
- DEC-09 (P0) Uzun jarayonlar (mutation, server) uchun `run_command` 30 s timeout → `~/Claude/.bin/psession.sh`; mavjudligi P2 boshida tekshiriladi.
- DEC-10 (P0) Ledger SHA-256: sof-JS amaliyoti (R5: `file://` da `crypto.subtle` ga tayanilmaydi).
