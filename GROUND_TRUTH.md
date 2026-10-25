# GROUND_TRUTH — BookShopBomba haqiqiy holati

P0 da yozildi: 2026-10-25 ~18:40. Manba: `~/MR/BookShopBomba` (FAQAT o'qildi, hech narsa yozilmadi).
SECRET_KEY, parol xeshlari va haqiqiy usernamelar bu faylga ko'chirilmagan.
Qoida R1: kod bilan ziddiyat bo'lsa — KOD to'g'ri. Kod o'zgarsa bu fayl va `GROUND_TRUTH.sha256` qayta olinadi.

## 1. PROMPT.md 2-bo'lim snapshot'i bilan taqqoslash

Natija: snapshot haqiqiy kodga MOS. Tekshirilgan va tasdiqlangan:

| Snapshot da'vosi | Haqiqat |
|---|---|
| Python 3.14.7, Django 6.1.2 | ✓ `.venv/bin/python` 3.14.7, django 6.1.2 |
| requirements: asgiref 3.12.1, Django 6.1.2, sqlparse 0.6.0 | ✓ aynan shu |
| 9 ta URL yo'li | ✓ `core/urls.py` 7–17-qatorlar: admin, book-list, add-book, book/<int:id>, login, logout, signup, error, '' |
| faqat `logout` ga `name=` | ✓ 13-qator |
| views hammasi `core/views.py` da, `main/views.py` bo'sh | ✓ |
| views: `check_auth` chaqirilmagan, `book_list` POST da None | ✓ 15–17, 30–31 |
| models: Book (5 maydon), BookView (book, user), axlat importlar | ✓ `main/models.py` 1–2, 7–16 |
| admin: faqat Book | ✓ `main/admin.py` 5 |
| migratsiyalar 0001–0008 (rename 0003, remove 0007, BookView 0008) | ✓ operatsiyalar mos |
| MIDDLEWARE da CsrfViewMiddleware yo'q | ✓ 6 ta middleware, csrf yo'q |
| shablonlarda `{% csrf_token %}`, `{% extends %}`, `{% include %}` yo'q | ✓ grep: hech biri |
| `MAILERS` — Django 6.1 da haqiqiy sozlama | ✓ `django/conf/global_settings.py` da bor |
| `a.active` CSS bor, lekin shablon `active` qo'ymaydi | ✓ `books-list.html:122` CSS; 311–312 da `class="private"` / `class="public"` |
| 20 book, 18 bookview, 6 user | ✓ (faqat COUNT o'qildi) |
| git: 8 commit, ishchi daraxtda o'zgarishlar | ✓ 8 commit (oxirgisi `a515c94`), 9 ta o'zgargan fayl + db, `error.html` kuzatilmaydi |
| `main/tests.py` bo'sh | ✓ faqat `# Create your tests here.` |

### Yangi topilmalar (snapshot da yo'q edi)

- N01. Barcha 7 shablon Google Fonts'ni CDN'dan yuklaydi (`fonts.googleapis.com`, `fonts.gstatic.com`; har faylda 8–10-qatorlar). Offline'da tizim shrifti tushadi, tashqi so'rov ketadi. → bonus bug B23 (DECISIONS.md DEC-06).
- N02. Shablon hajmi: 404=378, books-list=344, book=241, add_book=211, error=177, signup=155, login=153 qator; jami 1659. Asosan takroriy `<style>` (B19 raqamli isboti).
- N03. DB: 4 ta public, 16 ta private kitob (seed shakli uchun).
- N04. `main/templates/error.html` git'da kuzatilmaydi (`??`). `/error/` shu faylga bog'liq — toza clone da `TemplateDoesNotExist` bo'ladi.
- N05. `/error/` auth tekshiruvisiz (TemplateView) — anonim ham ochadi.
- N06. `.gitignore` da `db.sqlite3` (10-qator) bor, LEKIN fayl allaqachon kuzatilgan (`git ls-files` ko'rsatadi) → ignore ta'sir qilmaydi, db o'zgargan holda turibdi. Dars: ignore faqat kuzatilmagan fayllarga ishlaydi (B20 ni aniqlashtiradi).
- N07. `db.sqlite3` mtime 18:35 — kimdir/nimadir hozir ham yozayapti. DoD tekshiruvi (15-bo'lim) db ni istisno qiladi, manba fayllarni `GROUND_TRUTH.sha256` bilan solishtiradi.
- N08. `.venv` `.gitignore` da (136-qator), kuzatilmaydi ✓.

## 2. Muhitdagi vositalar (which)

- `node`: /usr/bin/node
- `npm`: /usr/bin/npm
- `python3`: /usr/bin/python3
- `zip`: /usr/bin/zip
- `git`: /usr/bin/git
- `chromium`: /usr/bin/chromium
- `firefox`: /usr/bin/firefox
- `brave`: /usr/bin/brave
- node: v22.23.2, python3 (tizim): Python 3.14.7, git: git version 2.55.0

## 3. core/settings.py bayroq qatorlari (faqat kalit nomi + qator raqami; qiymat yozilmadi)

- satr 11: SECRET_KEY 
- satr 14: DEBUG 
- satr 16: ALLOWED_HOSTS 
- satr 21: INSTALLED_APPS 
- satr 31: MIDDLEWARE 
- satr 42: TEMPLATES 
- satr 74: AUTH_PASSWORD_VALIDATORS 
- satr 93: LANGUAGE_CODE 
- satr 95: TIME_ZONE 
- satr 106: STATICFILES_DIRS 
- satr 113: MAILERS 

## 4. Darslik ↔ haqiqat: D01–D04 dastlabki tekshiruv (P8 da to'liq)

### D01 — '7 ta path' (10-xotira)
```
10-xotira/index.html:51:2. urlpatterns = [ ... ]  # 7 ta path
```
### D02 — csrf_token da'vosi (06-templates, 12-xatolar)
```
06-templates/index.html:58:<tr><td><code>{% csrf_token %}</code></td><td>POST formalar uchun majburiy</td></tr>
06-templates/index.html:72:<div class="warn">POST formaning ichida doim <code>{% csrf_token %}</code> bo‘lishi kerak. Yo‘q bo‘lsa Django formani rad etadi.</div>
12-xatolar/index.html:24:<tr><td>CSRF verification failed</td><td>Formada csrf_token yo‘q</td><td>{% csrf_token %}</td></tr>
```
### D03 — sidebar (barcha .html sahifalar, app/ va _backup/ dan tashqari)

- jami .html sahifa: 28 (26 ta index.html + buyruqlar.html + login-batafsil.html); 'sidebar' so'zi bor: 11; yo'q: 17
- README.md: `# BookShop — 100% tushuntirish  Ochish: file:///home/muhamad/MR/tushuntirish/index.html  Tartib: 01 → 10. Har bo‘limda mashq bor. `

## 5. B01–B22 → haqiqiy joylashuv (fayl:qator, kod bo'yicha tasdiqlangan)

| ID | Joy | Izoh |
|---|---|---|
| B01 | core/views.py:15–17 | `check_auth` hech qayerda chaqirilmagan; ichida `return` bor, lekin chaqiruvchi uni qaytarmaydi |
| B02 | core/views.py:30–31 | faqat `if request.method == "GET": return ...` |
| B03 | core/views.py:97–114 (login), 120–140 (mrsign) | GET/POST dan boshqa metodda `None` |
| B04 | core/views.py:43–46, 58–60 | `url=None` → `.startswith`; `except Exception: print` |
| B05 | settings MIDDLEWARE; add_book.html:188, login.html:136, signup.html:136 | csrf middleware ham, `{% csrf_token %}` ham yo'q |
| B06 | core/views.py:142–144 | GET bilan logout |
| B07 | core/views.py:136–138 | `set_password` to'g'ridan; bo'sh username tekshirilmaydi (124–126) |
| B08 | core/views.py:104–110 | `User.objects.get`+`check_password`+`django_login`, `authenticate` emas |
| B09 | core/views.py:80–81, 88–89 | 'kitob topilmadi' → status 200; `404.html` ishlatilmaydi |
| B10 | books-list.html:331 | `book.bookview_set.count` har kartochkada |
| B11 | books-list.html:122 (CSS), 311–312 (tab) | `active` klassi qo'yilmaydi |
| B12 | models.py:1–2, views.py:5 | `os.name`, `statistics.mode`, `trans_real.re` |
| B13 | models.py:11; views.py:46–49; book.html:228 | `CharField(null=True)`, `url[8:]`, `https://{{book.url}}` |
| B14 | models.py:14–16; views.py:75, 84 | `UniqueConstraint` yo'q |
| B15 | admin.py:5; models.py | `__str__` yo'q; BookView adminda yo'q |
| B16 | views.py:26–28, 75, 84 | public tabda o'z kitoblari ham; egasi ham ko'rishga hisoblanadi |
| B17 | views.py: 12,13,17,21,36,60,62,68,95,107,111,114,118,129,134,140,144 | qattiq yozilgan `redirect("/...")` |
| B18 | views.py:20, 35, 67 | takroriy `is_authenticated` tekshiruvi |
| B19 | 7 ta shablon, jami 1659 qator | `base.html`/`extends` yo'q |
| B20 | settings (§3) + `db.sqlite3` kuzatilgan (N06) | DEBUG, ALLOWED_HOSTS, SECRET_KEY, db gitda |
| B21 | settings (§3) | `en-us`, `UTC` |
| B22 | main/tests.py | bo'sh |
| B23 (bonus) | 7 ta shablon, 8–10-qatorlar | Google Fonts CDN (N01) |

(B17 raqamlari `grep -nE 'redirect\(' core/views.py` bilan tekshirilgan; qolgan qatorlar `cat -n` dan.)

## 6. BookShopBomba nazorat nuqtasi

- `GROUND_TRUTH.sha256` — manba fayllar (core/*.py, main/*.py, main/templates, main/migrations, manage.py, requirements.txt, .gitignore) xeshi.
  Tekshirish: `cd ~/MR/BookShopBomba && sha256sum -c ~/MR/tushuntirish/GROUND_TRUTH.sha256`.
- db.sqlite3 xeshga kirmaydi (N07). Boshlang'ich `git status --short` (P0): M core/urls.py, core/views.py, db.sqlite3, main/models.py, main/templates/{404,add_book,book,books-list,login,signup}.html; ?? main/templates/error.html.
