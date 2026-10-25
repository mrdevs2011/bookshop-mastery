# BOOKSHOP MASTERY ENGINE — MASTER PROMPT (v2, haqiqiy kod asosida)
> ⚠️ AVVAL `PROGRESS.md` ni o‘qi: ✓ belgili fazalar TUGAGAN — qaytadan yozma. Har faza/step tugagach PROGRESS.md yangilanadi va `~/Claude/.messages/unread` ga e’lon qilinadi.


Sen — dunyodagi eng kuchli o'quv-dastur muhandisi + Django ustozisan. Vazifang: `~/MR/tushuntirish`
ichida shunday app qurish: foydalanuvchi uni oxirigacha o'tsa, **BookShopBomba** loyihasini
(`~/MR/BookShopBomba`) bo'sh papkadan xatosiz yozadi, istalgan qatorini izohlaydi, istalgan
xatosini topadi va kengaytira oladi. "Bilmayman" degan holat tizimda mavjud bo'lmasligi kerak.

Bu fayl — to'liq texnik topshiriq. Uni boshidan oxirigacha o'qi, keyin 14-bo'limdagi
FAZALAR bo'yicha ishla. Savol berma: qaror kerak bo'lsa o'zing eng yaxshisini tanla va
`DECISIONS.md` ga bir qatorda yoz. Faqat haqiqiy to'siq bo'lsa (ruxsat, yo'q fayl) to'xta.

---------------------------------------------------------------------------------------------
## 0. MAQSAD (o'lchanadigan)

Talaba (men) app dagi kursni tugatgach quyidagilarni qila oladi:
1. Bo'sh papkada `django-admin startproject core` dan boshlab BookShop ni **eslab, yo'qotishsiz** qayta yozadi.
2. Har bir qator uchun "nima uchun aynan shunday" ga javob beradi (sintaksis, mantiq, muqobil).
3. Noma'lum (ko'rilmagan) variant savollarni ham yecha oladi — chunki ezberlagan emas, tushungan.
4. Haqiqiy kodda xato/zaiflik topadi (quyidagi 3-bo'lim — haqiqiy kamchiliklar ro'yxati).
5. Yakuniy imtihon "BOOKSHOP 9.0" da 9.0 band olishi mumkin; jiddiy tayyorgarlik bilan 100/100.

Muvaffaqiyat mezoni: app ni men "o'ynab" tugatgandan keyin, hech qanday manbaga qaramay,
imtihondagi "From-Scratch" bo'limida haqiqiy grader (6-bo'lim) barcha yashirin testlarni o'tkazadi.

---------------------------------------------------------------------------------------------
## 1. QAT'IY QOIDALAR (buzilmaydi)

R1. **Haqiqat manbai — haqiqiy kod.** Boshlashdan oldin `~/MR/BookShopBomba` ni QAYTA o'qi
    (`core/urls.py`, `core/views.py`, `core/settings.py`, `main/models.py`, `main/admin.py`,
    `main/templates/*`, `main/migrations/*`, `git log`). Pastdagi 2-bo'lim — 2026-10-25 dagi
    snapshot. Kod o'zgargan bo'lsa — KOD to'g'ri, snapshot emas. Hech narsani o'ylab topma.
R2. **BookShopBomba ga yozma.** Faqat o'qi. Grader faqat vaqtinchalik NUSXA bilan ishlaydi.
    `db.sqlite3` dagi `auth_user` parol xeshlarini, `SECRET_KEY` ni, haqiqiy usernamelarni
    app ga, docs ga, seed ga, gitga KO'CHIRMA. Seed ma'lumot sintetik bo'lsin.
R3. **Mavjud ishni buzma.** `~/MR/tushuntirish` da 28 sahifalik statik darslik bor (01–14
    bo'limlar, `assets/style.css`). `app/` papkasi skelet (bo'sh `js/`, `data/`, qorong'i `app/css/app.css`)
    va u yaqinda (18:20) boshqa sessiya tomonidan tahrirlangan bo'lishi mumkin: avval
    `ls -la --time-style=full-iso` bilan tekshir, `app.css` ni o'chirma — kengaytir.
    Birinchi ish: `_backup/` ga to'liq zip zaxira + `git init` (hozir git yo'q) + birinchi commit.
R4. **Hech qachon "keyinroq to'ldiraman" yo'q.** Placeholder, `TODO`, "Lorem", bo'sh savol,
    yarim tugagan o'yin = nosozlik. Har fazani to'liq tugat, tekshir, commit qil, keyingisiga o't.
R5. **Offline va soddalik.** Build step yo'q, npm yo'q, CDN yo'q. `file://` da ishlashi shart.
    GOTCHA: `file://` da `fetch()` va `<script type="module">` import ishlamaydi → ma'lumotlar
    `app/data/*.js` ko'rinishida (`window.BS.data.xxx = {...}`), klassik `<script>` lar bilan.
    Grader serveri (6-bo'lim) esa OPTSIONAL: bo'lmasa app offline-checker rejimiga tushadi.
R6. **Hajm cheklanmaydi.** 10 MB toza kod bo'lsa ham mayli. Sifat > ixchamlik. Lekin har
    fayl o'qiladigan bo'lsin (modul 1500 qatordan oshmasin, bo'l).
R7. **Til:** UI va izohlar — o'zbek (lotin, to'g'ri `o‘ g‘` belgilari). Kod identifikatorlari va
    Django atamalari inglizcha. Ohang: to'g'ri, qisqa, biroz o'yinchi ("aka" uslubi), hech qachon
    ma'ruzachi emas. Ma'ruza yo'q — mashq bor.
R8. **Doimiy tekshiruv.** Har fazadan keyin 13-bo'limdagi avtomatik tekshiruvlarni yurgiz.
    Ishlamasa — tuzat, keyin ketish. Oxirida haqiqiy natijalarni hisobot qil (taxmin emas).

---------------------------------------------------------------------------------------------
## 2. HAQIQIY LOYIHA — SNAPSHOT (2026-10-25, qayta tekshir!)

Stack: Python 3.14.7, Django 6.1.2, SQLite (`db.sqlite3`: 20 book, 18 bookview, 6 user — faqat hajm
uchun, ma'lumotni olma). `requirements.txt`: asgiref 3.12.1, Django 6.1.2, sqlparse 0.6.0.
Git: 8 commit (`chore: first commit` → `signup va login qo'shildi` → `booklist tabs with active state`
→ `kitob ko'rishlar soni qo'shildi` → `private kitob egasi uchun return qo'shildi`), ishchi daraxtda
o'zgarishlar bor (urls, views, models, templates, db).

### 2.1 Fayl xaritasi (muhim: views `main/` da EMAS, `core/` da)
```
BookShopBomba/
  manage.py
  core/                 # LOYIHA paketi
    settings.py urls.py views.py wsgi.py asgi.py
  main/                 # ILOVA ("main" INSTALLED_APPS da)
    models.py admin.py apps.py tests.py(bo'sh)
    templates/ login.html signup.html books-list.html add_book.html book.html error.html 404.html
    migrations/ 0001_initial … 0008_bookview
  static/  (bo'sh; STATICFILES_DIRS = [BASE_DIR/'static'])
  requirements.txt  .gitignore  db.sqlite3
```
Shablonlar `main/templates/` da, chunki `APP_DIRS=True` (TEMPLATES 'DIRS' bo'sh).
`main/views.py` — bo'sh andoza ("# Create your views here."). Hamma view `core/views.py` da.

### 2.2 models.py (haqiqiy)
```python
from django.db import models
from django.contrib.auth.models import User

class Book(models.Model):
    name = models.CharField(max_length=255)
    yaratilgan_sanasi = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    url = models.CharField(null=True)
    public = models.BooleanField(default=False)

class BookView(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
```
(Faylda keraksiz `from os import name`, `from statistics import mode` ham bor — "axlat import" mavzusi.)
Migratsiya tarixi (muhim dars!): 0001 Book yaratildi → 0002 `nashr_sanasi` qo'shildi → 0003 uni
`muallif` ga rename + `yaratilgan_sanasi` AlterField → 0004 `user` FK → 0005 `url` → 0006 `public`
→ 0007 `muallif` o'chirildi → 0008 `BookView`. Admin: faqat `Book` ro'yxatda (BookView yo'q).

### 2.3 URLs (9 ta yo'l — darslikda "7 ta" deb xato yozilgan!)
```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book-list/', book_list),
    path('add-book/', add_book),
    path('book/<int:id>/', book_page),
    path('login/', login),
    path('logout/', logout, name='logout'),
    path('signup/', mrsign),
    path('error/', TemplateView.as_view(template_name='error.html')),
    path('', index),
]
```
View nomi `mrsign` signup uchun. Faqat `logout` ga `name=` berilgan, qolganlarga yo'q.

### 2.4 views (core/views.py) — xatti-harakat jadvali
| yo'l | anon | login qilgan |
|---|---|---|
| `/` index | → `/login/` | → `/book-list/` |
| `/book-list/` | → `/login/` | GET: o'z kitoblari `-id` bo'yicha; `?public=true` → BARCHA public kitoblar (o'zinikilar ham). POST/boshqa metod: view `None` qaytaradi → ValueError (500) |
| `/add-book/` | → `/login/` | GET forma; POST: `name`,`url`,`public=="on"`; `https://`/`http://` kesib tashlanadi (`url[8:]`, `url[7:]`); try/except → xatoda `/error/`; muvaffaqiyatda → `/book-list/`; `url` yo'q bo'lsa `None.startswith` → AttributeError |
| `/book/<id>/` | → `/login/` | public → BookView `get_or_create` + `soni`; private va egasi emas → `HttpResponse('kitob topilmadi')` (status 200!); private va ega → ko'rish; yo'q id → xuddi shu matn (200) |
| `/login/` | GET forma | login bo'lsa → `/book-list/`; POST: `User.objects.get`, `check_password`, `django_login`; xato → `messages.error` + redirect `/login/`. Boshqa metod → `None` |
| `/signup/` (`mrsign`) | | parol≠`password_confirm_ui` → xato; username band → xato; aks holda `User(username=...)`, `set_password`, `save`, `django_login`, redirect |
| `/logout/` | | `django_logout` → `/login/` (GET bilan ishlaydi) |
Ko'rishlar soni = noyob foydalanuvchilar soni (`get_or_create` + `filter(book=book).count()`).
`books-list.html` da `{{book.bookview_set.count}}` har kartochka uchun alohida SQL (N+1).

### 2.5 settings (muhim nuqtalar; SECRET_KEY ni YOZMA)
`DEBUG=True`, `ALLOWED_HOSTS=["*"]`, INSTALLED_APPS = admin, auth, contenttypes, sessions, messages,
staticfiles, `main`. MIDDLEWARE: Security, Session, Common, Authentication, Messages, Clickjacking —
**`CsrfViewMiddleware` YO'Q**. `LANGUAGE_CODE='en-us'`, `TIME_ZONE='UTC'`, `USE_TZ=True`.
`AUTH_PASSWORD_VALIDATORS` 4 ta bor, lekin signup `set_password` ni to'g'ridan chaqiradi → validatorlar ISHLAMAYDI.
`MAILERS` — Django 6.1 ning yangi email sozlamasi (eski `EMAIL_*` o'rniga); bu yerda console backend. Loyihada email yuborilmaydi, lekin sozlama haqiqiy (tekshirilgan: Django manbasida bor).

### 2.6 Templatelar
Hammasi mustaqil (`{% extends %}` ishlatilmagan, har faylda o'z `<style>`i — takror). Ishlatilgan
konstruktsiyalar: `{{ book.name }}`, `{{ book.user.username }}`, `{% for %}`, `{% if messages %}`,
`{{ message.tags }}`, `{{ request.user.username }}`, `{{ books.count }}`, `{{ book.bookview_set.count }}`.
Formalarda `{% csrf_token %}` YO'Q (middleware ham yo'q, shuning uchun ishlaydi). `book.html` da
havola: `href="https://{{book.url}}"`. `books-list.html` da tab `a.active` CSS bor, lekin `is_public`
view dan uzatilsa ham shablon `active` klassni QO'YMAYDI (commit nomi va haqiqat mos emas).
`404.html` `main/templates/` da — Django `DEBUG=False` da avtomatik ishlatadi; `error.html`
`/error/` ga TemplateView orqali ulangan.

---------------------------------------------------------------------------------------------
## 3. HAQIQIY KAMCHILIKLAR (BUG HUNT MATERIALI) VA DARSLIK NOMUVOFIQLIKLARI

Quyidagilar haqiqiy koddan olingan (qayta tekshir). Ular o'yin materiali: talaba topishi, sababini
tushuntirishi, tuzatishi, tuzatishni testlashi kerak. Har biriga `bugs.js` da yozuv: id, fayl:qator,
og'irlik (1–5), kategoriya, mexanizm, to'g'ri tuzatish, tegishli konsept-id lar, misconception-id.

B01 `check_auth(request)` yozilgan, hech qayerda chaqirilmagan; chaqirilsa ham `return` qilinmasa redirect ta'sirsiz.
B02 `book_list`: faqat `if request.method == "GET": return ...`; POST → view `None` qaytaradi → `ValueError: didn't return an HttpResponse`.
B03 `login` va `mrsign`: GET/POST dan boshqa metodda `None` qaytadi (xuddi shu sinf xato).
B04 `add_book`: `request.POST.get("url")` `None` bo'lsa `url.startswith` → AttributeError (500); `try/except Exception: print(err)` xatoni yutadi.
B05 `CsrfViewMiddleware` yo'q va formalarda `{% csrf_token %}` yo'q → har qanday sayt foydalanuvchi nomidan kitob qo'sha oladi.
B06 `/logout/` GET bilan ishlaydi (rasm/`<img src=/logout/>` bilan majburan chiqarish mumkin).
B07 `mrsign`: `set_password` to'g'ridan; `AUTH_PASSWORD_VALIDATORS` ishlamaydi (parol "1" bo'lishi mumkin); bo'sh username server tomonida tekshirilmaydi.
B08 `login`: `User.objects.get` + `check_password` + `django_login` — `authenticate()` emas → `is_active=False` foydalanuvchi ham kira oladi.
B09 `book_page`: private kitob boshqaga → `HttpResponse('kitob topilmadi')` status 200; to'g'risi 404 (`Http404`/`get_object_or_404`). Loyihada tayyor `404.html` bor, lekin ishlatilmaydi.
B10 `books-list.html`: `book.bookview_set.count` har kartochkada alohida SQL (N+1); yechim `annotate(Count)`/`prefetch_related`.
B11 Tab `active` klassi hech qachon qo'yilmaydi (`is_public` uzatiladi, shablon ishlatmaydi).
B12 Axlat importlar: `from os import name`, `from statistics import mode` (models.py), `from django.utils.translation.trans_real import re` (views.py — IDE avto-import).
B13 `url = CharField(null=True)`: `blank` yo'q, max_length yo'q; sxema kesib tashlash hack'i (`url[8:]`) va shablonda `https://{{book.url}}` — `ftp://x` → `https://ftp://x`.
B14 `BookView` da `UniqueConstraint(book, user)` yo'q → `get_or_create` poyga holatida dublikat berishi mumkin.
B15 `Book.__str__` yo'q → adminda "Book object (1)"; `BookView` adminga ulanmagan.
B16 `/book-list/?public=true` o'z kitoblaringizni ham aralash ko'rsatadi; ko'rish hisobiga egasining o'zi ham kiradi (mahsulot qarori — munozara savoli).
B17 Qattiq yozilgan URL'lar (`redirect("/login/")`) — `name=` + `reverse`/`redirect('login')` o'rniga; faqat `logout` nomlangan.
B18 `@login_required` o'rniga har viewda takror `if not request.user.is_authenticated`.
B19 Har shablonda 150–350 qator takroriy `<style>`; `base.html` + `{% extends %}` yo'q.
B20 `DEBUG=True`, `ALLOWED_HOSTS=["*"]`, qattiq yozilgan `SECRET_KEY`, `db.sqlite3` git ichida (va o'zgargan holda).
B21 `LANGUAGE_CODE='en-us'` — UI o'zbekcha; `TIME_ZONE='UTC'`.
B22 `main/tests.py` bo'sh — birorta test yo'q.

DARSLIK ↔ HAQIQAT NOMUVOFIQLIKLARI (3 ta birinchi darslikni tuzat — 12-bo'lim):
D01 `10-xotira` "7 ta path" deydi; haqiqatda 9 ta.
D02 `06-templates` va `12-xatolar` "formada `{% csrf_token %}` bo'lmasa Django rad etadi" deydi; bu loyihada
    CsrfViewMiddleware yo'q → rad etilmaydi (shuning o'zi B05 ning darsi). Darslik shartli bo'lsin:
    "middleware yoqilgan bo'lsa".
D03 Navigatsiya: 17/28 sahifada sidebar yo'q; 11–14 bo'limlar menyuda yo'q; README "01→10" deydi.
D04 Qolgan 28 sahifani ham `<pre>` bloklari bo'yicha haqiqiy kod bilan avtomatik solishtir (12-bo'lim).

---------------------------------------------------------------------------------------------
## 4. PEDAGOGIKA VA ADAPTIV DVIGATEL (o'tkazib yuborib bo'lmaydi)

### 4.1 Asosiy tamoyil: ma'ruza yo'q — sinov bor
Har konseptda sikl: **Bashorat → Eslash → Qurish → Debug → Ko'chirish → Teach-back → Oraliqli takror.**
Tushuntirish kartochkasi faqat (a) xatodan keyin, (b) urinishdan SO'NG talab bilan ochiladi.
Oldindan matn o'qitma. Faqat "Dalil kartasi" (1 ekran, 1 qoida, 1 misol) mavjud.

### 4.2 "Bilmadim" yo'q
- "Bilmayman" tugmasi YO'Q. O'rniga **Yordam zinasi**: H1 ishora (konseptual) → H2 skelet (bo'sh joylar)
  → H3 to'liq yechim. Har zina ball cheklaydi (H1 ≤80%, H2 ≤50%, H3 = 0 + konsept "zaif" belgilanadi).
- H3 dan keyin **majburiy egizak savol** (twin: boshqa qiymat/ism/tartib) — mustaqil yechilmaguncha
  konsept "o'zlashtirilgan" bo'lmaydi va keyingi modul qulfi ochilmaydi.
- Taymer tugasa = noto'g'ri urinish. Savolni "o'tkazib yuborish" yo'q.

### 4.3 Xatoni tushuntirish formati (har noto'g'ri javobga, avtomatik)
`❌ Sen yozding` → `✅ To'g'risi` → `🧠 Nega (mexanizm, 2–3 gap)` → `🔍 Xato turi (misconception id + nomi)`
→ `⚡ Qoida (1 qator)` → `↻ Egizak savol`. Kod savollarida token darajasidagi diff (qaysi belgi, qaysi qator).
Har distraktor/xato naqshi bank'da `misconception` ga bog'langan: "Nega bu javob jozibali?" + "Nega xato?".

### 4.4 Mastery modeli
- Konsept ball 0–100, dalil asosida yangilanadi (Elo + vaqt bilan sust-so'nish). Savol og'irligi: format
  (tanlov < yozish < debug < qurish), qiyinlik D1–D5, yordam zinasi, javob vaqti.
- **O'zlashtirildi** shartlari: ≥85 ball VA ≥3 xil formatda muvaffaqiyat VA ≥2 xil KUNDA (bir kechada
  "pishirib" bo'lmaydi) VA oxirgi 10 urinishda H3 yo'q.
- Oraliqli takror (Leitner/SM-2 turi): 1 → 3 → 7 → 21 → 60 kun. O'zlashtirilgan konsept ham "yashirin
  nazorat" savollarida qaytadi (talaba bilmagan holda). Yiqilsa — quti 0 ga, modul "qarz"ga kiradi.
- **Qarz tizimi:** muddati o'tgan takrorlar bor ekan, yangi kontent qulflangan. Har kuni 10–15 daqiqalik
  majburiy "Isinish" (due review).

### 4.5 Qiyinlik falsafasi (siz so'ragan: bilmaganga juda qiyin, o'zlashtirganga juda oson)
- Qiyinlik **ko'p qadamli fikrlash va kombinatsiya** orqali yaratiladi, **sirli trivia orqali emas.**
  Hech bir savol kursda o'rgatilmagan faktni so'ramaydi. Hammasi konsept grafidan keladi.
- D1 tanish • D2 o'zgartirilgan • D3 ikki konseptni birlashtirish • D4 ko'p qadamli + xato topish • D5 ko'rilmagan
  vaziyatda sintez (masalan: yangi maydon qo'shib, migratsiya + view + shablonni birga yozish).
- Tanlovchi (selector): kutilgan muvaffaqiyat ~75% atrofida; o'zlashtirilgan konseptlarda o'sish uchun
  chuqurlik/kombinatsiya oshadi — lekin talaba uchun "oson his qilinadi", chunki mexanizm tushunilgan.
- Interleaving: bir mavzuda uzoq o'tirmaydi — modullar aralashtiriladi (3 savoldan keyin aylanadi).

### 4.6 Teach-back (Feynman) bosqichi
Modul oxirida talaba matn bilan tushuntiradi ("`get_or_create` nima va nega bu yerda?"). Baholash rubrikasi:
majburiy tushunchalar (kalit-mazmun ro'yxati + sinonimlar + yo'l qo'yilmaydigan xato iboralar). Rubrikaning
har bandi alohida qizil/yashil. Hammasi yashil bo'lmaguncha modul yopilmaydi. Keyin "Ustoz savol beradi":
2 ta kutilmagan follow-up (zanjir: javobga qarab keyingi savol tanlanadi).

---------------------------------------------------------------------------------------------
## 5. KURS XARITASI (modullar → konseptlar; ≥140 konsept, hammasi `data/concepts.js` da)

Har konseptda: `id`, `nomi`, `modul`, `prereq[]`, `og'irlik`, `formatlar[]`, `misconception[]`.
M00 Python minimumi: import, def/return, if/elif/else, str: startswith/slicing (`url[8:]`), try/except Exception,
    class va meros, `self`, kwargs, type hint (`request: HttpRequest`), docstring, `None` va bo'sh qaytish.
M01 Web asoslari: HTTP so'rov/javob, GET/POST, status 200/302/404/405/500, redirect = `Location`, cookie/session,
    forma kodlash, query string (`?public=true`), `request.GET/POST/method/user`.
M02 Django skeleti: `startproject` vs `startapp`, `manage.py` buyruqlari, settings anatomiyasi, INSTALLED_APPS,
    MIDDLEWARE tartibi, so'rov hayot sikli (wsgi → middleware → urls → view → template → response).
M03 Modellar: maydon turlari, `max_length`, `auto_now_add`, FK + `on_delete=CASCADE`, `null` vs `blank`, `default`,
    `user_id` vs `user`, teskari menejer `bookview_set`, `__str__`, `Meta`.
M04 ORM: `get/filter/exclude/order_by/count/exists/get_or_create`, `DoesNotExist`, lazy QuerySet, `-id`, `Q`,
    `select_related/prefetch_related/annotate(Count)`, N+1, `shell` bilan tajriba.
M05 Migratsiyalar: 0001–0008 tarixi (rename detection!), `makemigrations` vs `migrate`, `showmigrations`, `sqlmigrate`,
    AddField/RenameField/AlterField/RemoveField, bog'liqlik grafi, `null` qo'shish va default masalasi.
M06 URLs: `path`, konvertorlar `<int:id>`, tartib, oxirgi `/`, `name=` + `reverse`, `include`, `TemplateView.as_view`.
M07 Views: FBV oqimi, erta `return`, metod bo'yicha tarmoqlanish, `render/redirect/HttpResponse`, kontekst lug'ati,
    "None qaytarish" xatosi, 404 vs matn, `Http404`, `get_object_or_404`.
M08 Templates: avto-escape, nuqtali qidiruv (`book.user.username`), `bookview_set.count` (qavssiz chaqiruv), `for/if`,
    `messages`, `extends/block/include`, `static`, `csrf_token`.
M09 Auth va sessiya: `User`, hash (`set_password`), `check_password`, `login()/logout()`, sessiya cookie,
    `request.user`, `is_authenticated`, `authenticate` vs qo'lda, `is_active`, validatorlar, `login_required`, messages.
M10 Funksiyalar chuqur: add-book URL mantig'i, public/private ko'rinish matritsasi, noyob ko'rishlar hisobi.
M11 Admin: `register`, `ModelAdmin`, `createsuperuser`, `__str__` ta'siri.
M12 Xavfsizlik va sifat: CSRF, XSS/autoescape, IDOR (`/book/<id>/`), user enumeration, `DEBUG/ALLOWED_HOSTS/SECRET_KEY`,
    GET-logout, parol siyosati, sirlar gitda.
M13 Testlash: `TestCase`, `Client`, `assertRedirects/assertContains`, test DB, kamida 15 ta haqiqiy test yozish.
M14 Professional refaktor: `login_required`, `get_object_or_404`, `ModelForm`, `ListView/DetailView/CreateView`,
    `base.html`, nomlangan URL'lar, `UniqueConstraint`, `annotate(Count)`, sozlamalarni muhitga ajratish.
M15 Bo'sh papkadan qurish (Sprint): 20 qadam, har qadamda grader.
M16 Git va muhit: `init/add/commit/diff/log`, `.gitignore`, `requirements.txt`, `venv`, db ni gitdan chiqarish.

---------------------------------------------------------------------------------------------
## 6. HAQIQIY DJANGO GRADER VA ARXITEKTURA (bu app ni dunyoda noyob qiladigan qism)

Gap shundaki: talaba yozgan kod **haqiqiy Django** da haqiqiy testlar bilan tekshiriladi, shunchaki
matn solishtirish emas.

### 6.1 `grader/` + `app/server.py`
- `app/server.py` — faqat stdlib (`http.server`), `127.0.0.1:8765` ga bog'lanadi (tashqariga ochilmaydi), statik
  fayllar + `POST /api/grade`, `POST /api/run`, `GET /api/health`. `start.sh` ishga tushiradi.
  App serverga ulana olmasa — **offline rejim** (6.3) avtomatik yoqiladi va UI da aniq ko'rsatiladi.
- `grader/reference/` — haqiqiy loyihaning **tozalangan nusxasi** (SECRET_KEY → `'test-only'`, db yo'q, parol xesh yo'q).
  U 100% hidden testlardan o'tishi SHART. Python sifatida `~/MR/BookShopBomba/.venv/bin/python` ni ishlat (faqat o'qish/ishga tushirish).
- Har baholashda: tmp papkaga reference ni nusxala → talaba fayllarini **oq ro'yxatdagi** yo'llarga qo'y
  (`core/urls.py`, `core/views.py`, `core/settings.py`, `main/models.py`, `main/admin.py`, `main/templates/*`, migratsiyalar)
  → `manage.py check` → `makemigrations --check --dry-run` (kerak bo'lsa) → hidden test paketi (`grader/hidden/test_*.py`,
  Django `TestCase`, toza test DB) → JSON natija. Timeout 20 s, `resource.setrlimit` (CPU/xotira/fayl), tozalangan `env`,
  `PYTHONDONTWRITEBYTECODE=1`, jarayon daraxti o'ldiriladi, tmp o'chiriladi. Talaba kodi hech qachon haqiqiy loyiha papkasida ishlamaydi.
- Natija formati: `{passed:[], failed:[{test, concepts[], misconception, plain_uz, trace_short}], check_output, score}`.
  `plain_uz` — traceback emas, odam tilida: "POST kelganda view `None` qaytardi — ya'ni `else` yo'li yo'q (M07-none-return)".
- **Grader'ning o'zini sinash (majburiy):** (a) reference → hamma test yashil; (b) ≥40 ta **mutant** (redirect olib tashlash,
  status o'zgartirish, filter teskari, owner tekshiruvi o'chirilgan, `public` e'tiborsiz va h.k.) — har biri kamida bitta test
  tomonidan "o'ldirilishi" kerak; mutation score ≥ 95% (`grader/mutants/`, `tools/mutation_run.py`); (c) bo'sh fayl, sintaksis
  xato, cheksiz sikl, katta chiqish — grader qulamaydi va tushunarli xabar beradi.

### 6.2 Haqiqiy-dunyo ma'lumot manbalari (hech narsa "o'ylab topilmaydi")
- `tools/gen_scenarios.py`: aktyor (anon / ega / begona / admin) × resurs holati (public / private / yo'q id) × endpoint × metod × payload
  variantlari to'liq kombinatsiyasini reference'da Django `Client` bilan bajaradi va (status, redirect, DB o'zgarishi, messages,
  render parchasi) ni `app/data/scenarios.js` ga yozadi. Barcha "natijani bashorat qil" savollari shu **haqiqiy** natijalardan olinadi.
- `tools/capture_cmds.py`: tmp nusxada `manage.py check|showmigrations|sqlmigrate main 0008|makemigrations|migrate|shell -c ...` kabilarning
  HAQIQIY chiqishini yozib `app/data/terminal.js` ga qo'yadi (ilovadagi terminal shu chiqishlarni ko'rsatadi).
- `tools/gen_sql.py`: ORM ifodalarining haqiqiy SQL'i (`str(qs.query)`) va so'rovlar soni (`CaptureQueriesContext`) — N+1 savollari uchun.
- Seed ma'lumot: sintetik (6 user, 20 kitob, aralash public/private, 18 ko'rish) — haqiqiy db dan **faqat shaklni** ol.

### 6.3 Offline rejim (server bo'lmasa)
JS: Python/Django-shablon tokenizatori, normalizator (probel/qo'shtirnoq/izoh), qator-qator token diff, strukturaviy qoidalar
(majburiy operatorlar tartibi, taqiqlangan konstruktsiyalar), parametrli tekshiruvlar. Haqiqiy-bajarish talab qiladigan topshiriqlar
offline rejimda "qisman ball" bilan belgilanadi va UI aniq yozadi: "Grader o'chiq — bu ball vaqtinchalik". Imtihonning Writing
bo'limi grader'siz boshlanmaydi.

### 6.4 App tuzilmasi (klassik `<script>`, modul yo'q)
```
~/MR/tushuntirish/
  index.html (docs)        app/index.html (APP kirish)     start.sh   PROMPT.md  DECISIONS.md  GROUND_TRUTH.md
  app/css/    tokens.css app.css(mavjud, kengaytir) modes.css exam.css print.css
  app/js/core/   rng.js state.js ledger.js srs.js mastery.js selector.js router.js ui.js sound.js hl.js diff.js normalize.js editor.js terminal.js
  app/js/modes/  dojo.js parsons.js bughunt.js tracer.js matrix.js orm.js migrations.js templates.js duel.js quickfire.js sprint.js refactor.js teachback.js boss.js daily.js
  app/js/exam/   engine.js sections.js scoring.js certificate.js
  app/data/      concepts.js misconceptions.js bugs.js scenarios.js terminal.js sql.js questions_m00.js … questions_m16.js exam_*.js rubrics.js
  app/server.py  grader/ {reference/, hidden/, mutants/, run.py}
  tools/         build_nav.py verify_docs.py gen_scenarios.py capture_cmds.py gen_sql.py mutation_run.py lint_bank.py sim_students.py
  tests/         run.html + py testlar
```
Tasodifiylik: deterministik seed'li PRNG (`rng.js`); har urinishda seed saqlanadi (qayta o'ynash/tekshirish mumkin).
Data fayllar modul bo'yicha dangasa yuklanadi (boshlang'ich yuklash < 1 s, 10 MB data bo'lsa ham).

---------------------------------------------------------------------------------------------
## 7. O'YIN REJIMLARI (hammasi haqiqiy BookShop materialida; har birining XP, combo, rank ta'siri bor)

 1. **Syntax Dojo** — kodni yoddan yozish: qator-qator, jonli token diff; "so'nuvchi ko'rinish" (100% → 60% → 30% → 0% yashirin);
    keyin imtihon tartibida bo'sh sahifa. Har belgi (`:`, `,`, `)`, `__`) alohida bahoslanadi — "sintaksis xatosi yo'q".
 2. **Parsons+** — aralash qatorlarni to'g'ri tartib va **indentatsiya** bilan joylash; chalg'ituvchi (distractor) qatorlar bilan.
 3. **Bug Hunt** — 3-bo'limdagi B01–B22 + avtomatik mutatsiyalar (grader mutantlari!): xatoli qatorni top → turini ayt → tuzat →
    tuzatishing grader'dan o'tsin. "Bug bounty" ball, topilmagan xato "qochib ketdi".
 4. **Request Flight** — so'rovni qadam-baqadam kuzat: brauzer → URL moslash → view tarmoqlari → ORM → shablon → javob. Har qadamda
    talaba bashorat qiladi (status, Location, DB delta, ko'rinadigan matn). Stsenariylar `scenarios.js` dan (haqiqiy natijalar).
 5. **Permission Matrix** — (anon/ega/begona) × (public/private/yo'q) × (endpoint) jadvalini TO'LIQ to'ldirish; bitta xato = jadval
    qizaradi. Keyin "adversarial" variantlar (metod almashtirish, id taxmini).
 6. **ORM Arena** — mini-DB ustida natijani bashorat qil + so'rovni yoz + SQL'ini tanla + so'rovlar sonini ayt (N+1 ovi).
 7. **Migration Time Machine** — 0001–0008 ni to'g'ri tartibga sol; sxemani holat bo'yicha bashorat qil; berilgan o'zgarish uchun
    migratsiya yoz (rename vs delete+add farqi!). Grader `makemigrations --check` bilan.
 8. **Template Forge** — kontekst + shablon → render natijasini bashorat qil; teskarisi: kerakli HTML uchun tegni yoz; autoescape tuzoqlari.
 9. **Diff Duel** — ikki deyarli bir xil kod; bitta (yoki ikki) belgi farqini sekundlarda top ("ko'z o'tkirligi", `==` vs `=`, `/` oxiri).
10. **Quick-Fire** — 60 soniyalik tezkor savol seriyasi, combo, tezlik bonusi; Leitner takrorlari shu rejimda ham.
11. **Reverse Engineer** — brauzer/HTTP izi + DB holatidan kodni tikla ("bu javob qaysi qatordan keldi?").
12. **Boss Fight** — har modul oxirida ko'p fazali boss (HP shkalasi): xato = boss davolanadi, aralash formatlar, vaqt bosimi.
    Boss yengilmaguncha modul yopilmaydi. Final boss — "Bomba" (butun loyiha).
13. **Refactor Gauntlet** — kodni professional shaklga keltir (`login_required`, `get_object_or_404`, `ModelForm`, CBV, `base.html`,
    `reverse`), xatti-harakat o'zgarmasligi grader (regression testlar) bilan tasdiqlanadi.
14. **Terminal** — ilova ichidagi shell: talaba haqiqiy buyruqlarni yozadi (`python manage.py makemigrations main` …), chiqish
    `terminal.js` dagi HAQIQIY yozuvdan; noto'g'ri buyruq = haqiqiy xato xabari.
15. **Sprint (Bo'sh papkadan qurish)** — 20 qadamli yo'l: startproject → startapp → settings → models → makemigrations/migrate →
    admin → urls → views → templates → auth → public/private → ko'rishlar soni → xatolar → testlar. Har qadam grader'dan o'tmaguncha keyingisi ochilmaydi.
16. **Teach-back** — 4.6 bo'lim. **Daily Mission** — kunlik 3 ta aralash vazifa + streak (uzilsa "qarz").
17. **Chaos Mode** (ochilgan keyin) — kutilmagan: tasodifiy mutatsiyali kod ustida "bu kod nima qiladi?" + zudlik bilan tuzat.

Meta: XP/daraja (Yangi → Shogird → Usta → Arxitektor → "BOMBA"), nishonlar (kamida 40), streak, haftalik reja, "Zaif nuqtalar
ovchisi" (eng ko'p xato qilingan misconception'larga yo'naltirilgan seriya).

---------------------------------------------------------------------------------------------
## 8. SAVOL BANKI STANDARTI

- Minimum: **1200 ta tekshirilgan savol/generator-varianti** (qo'lda yozilgan ≥ 400 + parametrik generatorlar), har konseptga ≥ 6, har
  D-darajada. Imtihon banki ALOHIDA (≥ 600 element, mashqda hech qachon ko'rsatilmaydi — "muhrlangan").
- Har savol maydonlari: `id, concepts[], difficulty(1–5), format, prompt, validator|options, accepted[], explanation_uz,
  distractors[{text, misconception, why_tempting, why_wrong}], hints[H1,H2], twin_generator, source_ref(fayl:qator), time_budget`.
- `source_ref` majburiy: har haqiqiy kod ko'rsatilgan savol haqiqiy koddan olinadi (`tools/lint_bank.py` haqiqiy faylda mavjudligini
  tekshiradi; kod o'zgarsa lint yiqiladi — shunday qilib bank haqiqatdan uzoqlashmaydi).
- `lint_bank.py` tekshiradi: dublikat yo'q, har distraktorda misconception, har savolda tushuntirish, yechilishi mumkin (validator o'z
  "to'g'ri javob"ini qabul qiladi), noto'g'ri javob qabul qilinmaydi, til/apostrof, noaniq so'zlar yo'q.
- Yozma javob validatori: normallashtirish (probel, `'`/`"`, ortiqcha qavs, izoh), muqobil to'g'ri shakllar (`filter(user_id=x)` ≡
  `filter(user=x)`), lekin semantik farq (`==` vs `=`) qabul qilinmaydi. Qisman javobga qisman ball + aniq izoh.

---------------------------------------------------------------------------------------------
## 9. YAKUNIY IMTIHON — "BOOKSHOP 9.0" (IELTS uslubi, 0–9 band)

Rasmiy rejim: bir o'tirishda, ortga qaytish yo'q (bo'lim ichida belgilab qo'yish bor, bo'limlar orasida yo'q), yordam/ishora yo'q,
sozlanmagan taymer, fokus yo'qolsa qayd qilinadi. Mashq-rejimida (mock) ruxsat bor lekin "rasmiy emas" belgisi bilan.

| Bo'lim | IELTS analog | Mazmun | Savol/vazifa | Vaqt |
|---|---|---|---|---|
| A. Reading | Reading | Kod o'qish va natijani bashorat (views, ORM, shablon, migratsiya) | 40 | 60 daq |
| B. Trace & Debug | Listening | HTTP izlari, traceback, SQL log, DB holati → diagnoz va sabab | 25 | 45 daq |
| C. Writing | Writing | Bo'sh joydan yozish: grader (haqiqiy Django, yashirin testlar) | 6 vazifa | 90 daq |
| D. Viva | Speaking | Himoya: zanjirli moslashuvchan savollar, tushuntir va asosla (matn) | 12 | 30 daq |

C bo'limi tarkibi: (1) model+migratsiya, (2) urls+view (ruxsat mantig'i), (3) auth oqimi, (4) shablon render, (5) **kutilmagan kengaytma**
(masalan, yangi maydon yoki "sevimlilar" xususiyati — kursda aynan bunday topshiriq yo'q, lekin konseptlar yetarli), (6) xato topib tuzatish
+ regressiya test yozish. Har vazifa — yashirin testlar; qisman ball test bo'yicha.

**Ball tuzilmasi (100):** Core 60 (D1–D3, faqat o'rgatilgan konseptlar; o'zlashtirgan talaba uchun deyarli to'liq ball) • Advanced 25 (D3–D4) •
Elite 15 (D5: ko'rilmagan sintez, xavfsizlik, chekka holatlar).
→ Kafolat dizayni: barcha modul darvozalaridan o'tgan talaba Core'ning ≥95% ini olishi kerak (`sim_students.py` buni "to'liq tayyor"
virtual talaba bilan tasdiqlaydi). "Bilmaganga qiyin": yuzaki o'qigan Core'da ham yiqiladi (distraktorlar misconception asosida).

**Band jadvali:** 98–100 → 9.0 (va 0 ta "kritik xato") • 94–97 → 8.5 • 90–93 → 8.0 • 85–89 → 7.5 • 80–84 → 7.0 • 74–79 → 6.5 •
68–73 → 6.0 • 60–67 → 5.5 • 52–59 → 5.0 • 44–51 → 4.5 • 36–43 → 4.0 • 28–35 → 3.5 • 20–27 → 3.0 • <20 → ≤2.5.
Kritik xato (Writing'da xavfsizlik/egalik tekshiruvi yo'qligi, POST dan keyin redirect yo'qligi, `None` qaytarish va h.k.) → band ≤ 8.0.
Har bo'lim uchun ham alohida band + umumiy band (o'rtacha, 0.5 ga yaxlitlanadi). **60/100 = 5.5 = "o'tdi" chizig'i.**

Imtihon dvigateli: 5 ta to'liq mock (har biri boshqa seed/variant) + bo'limli mashqlar + "Band bashoratchisi". Imtihon natijasi: konsept bo'yicha
issiqlik xaritasi, xato-naqsh tahlili, qayta o'qish tavsiyasi, **bosma sertifikat** (SVG/HTML `print.css`, band + bo'limlar + yaxlitlik xeshi).
Qayta topshirish: 24 soat kutish, boshqa seed. Rasmiy natijalar `ledger` ga zanjir xesh bilan yoziladi.

---------------------------------------------------------------------------------------------
## 10. UI / UX / "JUICE" (har tomondan mukammal his)

- Dizayn: mavjud `app/css/app.css` qorong'i tokenlari + BookShop brendi (qizil #e63946, to'q sariq #f4a261, Playfair Display sarlavhalar,
  Inter matn; shriftlar offline bo'lmasa tizim fallback'i — yuklab olinsa `app/fonts/` ga vendor). `tokens.css` da yagona manba. Kontrast AA.
- Ekranlar: Dashboard ("BookShop shahri" xaritasi — modullar binolar, qulf/ochiq/boss), Konsept grafi (canvas, prereq bog'lari, mastery
  rangi), O'yin ekranlari, Kod arena (o'z `editor.js`: qator raqami, avto-indent, Tab, qavs juftlash, sintaksis rangi, grader xato chiziqlari),
  Terminal, Statistika (kunlik issiqlik xaritasi, unutish egri chizig'i, misconception radari, band bashorati), Imtihon lobbisi, Sozlamalar
  (ovoz, harakat kamaytirish, eksport/import, tema).
- O'z sintaksis ranglagichi `hl.js`: Python, Django shablon, HTML, shell — tashqi kutubxonasiz.
- Juice: WebAudio'da sintez qilingan tovushlar (fayl yo'q), combo/shake/confetti/zarracha, HP shkalalari, daraja ko'tarilish animatsiyasi;
  `prefers-reduced-motion` hurmat qilinadi. Klaviatura-birinchi (barcha amallar tez tugmalar, `?` yordam oynasi). Mobil moslashuvchan.
- Hamma matn o'zbekcha; xato xabarlari do'stona, lekin yumshoq emas — aniq.

---------------------------------------------------------------------------------------------
## 11. PROGRESS YAXLITLIGI ("tizim o'zi qat'iy nazorat qiladi")

Halol cheklov: brauzerda ishlaydigan mahalliy app'ni to'liq buzilmas qilib bo'lmaydi (talaba o'zini aldashi mumkin). Shuning uchun maqsad —
**o'zgartirishni sezish + ishqalanish + bypass'ni foydasiz qilish**, hamda buni README da halol yoz.
- **Ledger:** har urinish (savol id, seed, javob xeshi, natija, yordam zinasi, vaqt, kun) zanjir-xeshli yozuv (har yozuv avvalgisining
  SHA-256'ini o'z ichiga oladi; xesh uchun WebCrypto yoki sof-JS SHA-256). localStorage + eksport fayli. Zanjir buzilsa — "yaxlitlik
  buzildi" bayrog'i, imtihon va sertifikat bloklanadi, dashboard'da ko'rsatiladi.
- **Yagona holat mashinasi:** qulf/ochish mantig'i faqat `mastery.js` + `state.js` da; UI hech qachon qulfni o'zi hal qilmaydi.
- **Javob ekspozitsiyasi:** to'g'ri javoblar to'g'ridan DOMda turmaydi; validatorlar orqali tekshiriladi; imtihon banki alohida yuklanadi va
  sessiyadan oldin ko'rinmaydi. Kod topshiriqlari — grader orqali (talaba "javobni ko'rib" ko'chira olmaydi).
- **Yashirin nazorat:** o'zlashtirilgan konseptlar tasodifiy vaqtlarda qaytadi; "kechiktirilgan imtihon" (7/30 kun) — ballar real saqlanishini tekshiradi.
- Anti-ezberlash: parametrli generatorlar (nomlar/qiymatlar/tartib o'zgaradi), egizak savollar, format aralashtirish.

---------------------------------------------------------------------------------------------
## 12. DARSLIK (28 sahifa) NI TUZATISH VA DOIMIY SINXRON

1. `tools/build_nav.py`: yagona `nav.json` manifestdan **barcha** sahifalarga (chuqurlari ham, nisbiy yo'llar bilan) bir xil sidebar
   generatsiya qiladi; 11–14 menyuga kiradi; "Amaliyot → App" havolasi qo'shiladi. README yangilanadi (01 → 14 va app).
2. D01, D02 (3-bo'lim) ni tuzat. Barcha `<pre>` bloklariga `data-src="core/views.py:9-13"` kabi manba izohi qo'sh.
3. `tools/verify_docs.py`: har `data-src` bloki haqiqiy koddagi shu qatorlar bilan solishtiriladi (normallashtirilgan); mos kelmasa FAIL.
   Haqiqiy kod o'zgarsa darslik "eskirgan" deb qizaradi.
4. Darslik ↔ App: har konsept sahifasida "Shu konseptni o'yna" havolasi; app'dagi "Dalil kartasi" darslik sahifasiga ham yo'naltiradi.
5. Ikki xil tema (oq `assets/style.css`, qorong'i `app/css/app.css`) — qaror qabul qil (DECISIONS.md): tokenlarni birlashtir yoki
   aniq ajrat; ikkala holatda ham brend ranglari bir xil bo'lsin.

---------------------------------------------------------------------------------------------
## 13. AVTOMATIK TEKSHIRUVLAR (har fazadan keyin yurgiz, natijani hisobotga qo'y)

- `tools/lint_bank.py` (6-bo'lim 8 qoidalari) — 0 xato. • `tools/verify_docs.py` — 0 nomuvofiqlik. • havola tekshiruvi (docs + app) — 0 singan.
- `grader/run.py --selftest`: reference yashil + mutation score ≥ 95% + chekka holatlar. • `tools/gen_scenarios.py` qayta ishga tushganda
  `scenarios.js` o'zgarmasligi (deterministik). • `tests/`: yadro modullari (srs, mastery, selector, ledger, normalize, diff, rng, scoring) uchun
  birlik testlari (`node` bo'lsa node bilan, bo'lmasa `tests/run.html` + headless brauzer; qaysi biri ishlatilganini yoz).
- `tools/sim_students.py`: virtual talabalar — (1) dangasa/tasodifiy, (2) faqat ezberlovchi, (3) "yordamni bosib o'tuvchi", (4) tezkor-aldovchi
  (ledger'ni qo'lda o'zgartiradi), (5) to'liq tayyor. Talab: 1–4 modul darvozalaridan/imtihondagi 60+ dan o'ta olmaydi yoki aniqlanadi;
  5 — Core ≥95%, 9.0 band mumkin. Natijalar jadvali hisobotda.
- Performans: boshlang'ich yuklash < 1 s; o'yin ekranlari 60 fps; data lazy-load. • Fayl hajmi/qatorlar statistikasi.

---------------------------------------------------------------------------------------------
## 14. FAZALAR (ketma-ket; har birining chiqish sharti bor)

P0 Zaxira (`_backup/` zip), `git init` + commit, haqiqiy kodni qayta o'qib `GROUND_TRUTH.md` (snapshot bilan farqlar), `DECISIONS.md`.
   `which node python3 chromium firefox` — mavjud vositalarni aniqla. CHIQISH: GROUND_TRUTH.md va farqlar ro'yxati tayyor.
P1 Poydevor: app skeleti, `core/*` modullar (rng, state, ledger, srs, mastery, selector, router, ui, hl, diff, normalize, editor), birlik testlar.
P2 Haqiqat vositalari: reference sanitizatsiya, `server.py`, grader + hidden testlar + mutantlar, `gen_scenarios`, `capture_cmds`, `gen_sql`.
   CHIQISH: grader self-test yashil, mutation ≥ 95%.
P3 Kontent A: `concepts.js`, `misconceptions.js`, `bugs.js`, M00–M05 savollari (+ lint 0 xato) va 1-batch rejimlar (Dojo, Parsons, Quick-Fire, Diff Duel, Request Flight).
P4 Kontent B: M06–M12 va 2-batch rejimlar (Bug Hunt, Permission Matrix, ORM Arena, Migration Time Machine, Template Forge, Terminal, Reverse Engineer).
P5 Kontent C: M13–M16, Sprint, Refactor Gauntlet, Teach-back + rubrikalar, Boss Fights, Daily Mission, Chaos Mode, nishonlar/XP.
P6 Adaptiv dvigatel sozlash + `sim_students.py` (4.4–4.5 va 11-bo'lim talablari isbotlanadi).
P7 Imtihon dvigateli: muhrlangan bank (≥600), 5 mock, bo'limlar, scoring, sertifikat, "band bashoratchisi".
P8 Darslikni tuzatish va sinxron (12-bo'lim). P9 Qotirish: a11y, performans, README (halol cheklovlar bilan), `start.sh`, to'liq tekshiruvlar.
P10 Yakuniy hisobot (15-bo'lim) — faqat haqiqiy, ishga tushirilgan natijalar bilan.

Har faza oxirida: tekshiruvlar → commit (`git commit -m "P3: ..."`) → bir qatorli progress. Fazani to'liq tugatmay keyingisiga o'tma.

---------------------------------------------------------------------------------------------
## 15. QABUL MEZONI (Definition of Done) VA HISOBOT

DONE faqat quyidagilarning HAMMASI haqiqatan bajarilganda:
☐ 17 modul (M00–M16), ≥140 konsept, ≥1200 mashq savoli/varianti, ≥600 imtihon elementi, 22 bug (B01–B22) o'yin sifatida.
☐ 15+ o'yin rejimi ishlaydi; Sprint 20 qadam grader bilan; Boss har modulda.
☐ Haqiqiy grader: reference yashil, mutation ≥ 95%, offline fallback aniq belgilangan.
☐ Imtihon: 4 bo'lim, 100 ball, band jadvali, 5 mock, sertifikat, ledger yaxlitligi.
☐ `sim_students.py` jadvali talablarga mos. ☐ lint_bank, verify_docs, link tekshiruvi — 0 xato.
☐ 28 sahifalik darslik tuzatilgan va `verify_docs` bilan haqiqiy kodga bog'langan; D01–D04 yopilgan.
☐ README: ishga tushirish (`./start.sh`), kunlik reja tavsiyasi, halol cheklovlar. ☐ BookShopBomba o'zgarmagan (`git -C ~/MR/BookShopBomba status` farqi yo'q).

Hisobot formati (oxirida, qisqa): faza jadvali (✓/✗) • raqamlar (konsept/savol/bug/mock soni, kod hajmi) • har tekshiruvning HAQIQIY chiqishi
(buyruq + natija) • sim_students jadvali • ma'lum cheklovlar (halol) • ishga tushirish buyrug'i. Taxmin yoki "ishlashi kerak" degan gap yo'q —
faqat ishga tushirib ko'rilgan narsa "tayyor" deyiladi.

Endi boshla: P0.
