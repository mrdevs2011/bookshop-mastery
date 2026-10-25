/* B01–B22 haqiqiy kamchiliklar */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.bugs = [
 {
  "id": "B01",
  "file": "core/views.py",
  "line": 15,
  "severity": 2,
  "cat": "dead-code",
  "title": "check_auth chaqirilmagan",
  "mech": "check_auth yozilgan, lekin hech bir viewda chaqirilmagan. Chaqirilsa ham return qilinmasa redirect ta'sirsiz qoladi.",
  "fix": "Har view boshida: r = check_auth(request); if r: return r  — yoki @login_required ishlating.",
  "concepts": [
   "M07-early-return",
   "M09-login-required"
  ],
  "misconceptions": [
   "MC-dead-helper"
  ],
  "source_ref": "core/views.py:15-17"
 },
 {
  "id": "B02",
  "file": "core/views.py",
  "line": 19,
  "severity": 5,
  "cat": "none-return",
  "title": "book_list POST → None",
  "mech": "Faqat if method==GET: return render(...). POST/PUT/… da funksiya None qaytaradi → ValueError: The view didn't return an HttpResponse.",
  "fix": "else: return HttpResponseNotAllowed(['GET']) yoki barcha yo'llarda HttpResponse qaytaring.",
  "concepts": [
   "M07-none-return",
   "M01-http-methods"
  ],
  "misconceptions": [
   "MC-implicit-none"
  ],
  "source_ref": "core/views.py:19-31"
 },
 {
  "id": "B03",
  "file": "core/views.py",
  "line": 93,
  "severity": 4,
  "cat": "none-return",
  "title": "login/mrsign boshqa metod → None",
  "mech": "GET va POST dan tashqari metodda return yo'q — xuddi B02 sinfi.",
  "fix": "Oxirida return HttpResponseNotAllowed(['GET','POST']).",
  "concepts": [
   "M07-none-return"
  ],
  "misconceptions": [
   "MC-implicit-none"
  ],
  "source_ref": "core/views.py:93-120"
 },
 {
  "id": "B04",
  "file": "core/views.py",
  "line": 41,
  "severity": 5,
  "cat": "null-deref",
  "title": "url None → AttributeError",
  "mech": "request.POST.get('url') None bo'lishi mumkin; url.startswith(...) → AttributeError. try/except Exception: print(err) xatoni yutadi, foydalanuvchi /error/ ga tushadi.",
  "fix": "url = (request.POST.get('url') or '').strip(); keyin startswith. Xatoni loglab, foydalanuvchiga aniq xabar.",
  "concepts": [
   "M00-none",
   "M00-try-except",
   "M07-views"
  ],
  "misconceptions": [
   "MC-get-always-str"
  ],
  "source_ref": "core/views.py:41-60"
 },
 {
  "id": "B05",
  "file": "core/settings.py",
  "line": 0,
  "severity": 5,
  "cat": "security",
  "title": "CSRF middleware yo'q",
  "mech": "CsrfViewMiddleware MIDDLEWARE da yo'q; formalarda {% csrf_token %} yo'q. Begona sayt foydalanuvchi sessiyasi bilan POST qila oladi.",
  "fix": "MIDDLEWARE ga 'django.middleware.csrf.CsrfViewMiddleware' qo'shing; har formaga {% csrf_token %}.",
  "concepts": [
   "M12-csrf",
   "M02-middleware",
   "M08-csrf-token"
  ],
  "misconceptions": [
   "MC-csrf-optional"
  ],
  "source_ref": "core/settings.py:MIDDLEWARE"
 },
 {
  "id": "B06",
  "file": "core/views.py",
  "line": 0,
  "severity": 4,
  "cat": "security",
  "title": "logout GET bilan ishlaydi",
  "mech": "logout view GET ni qabul qiladi. <img src=/logout/> yoki link bosilishi sessiyani yopadi (CSRF-siz side-effect).",
  "fix": "Faqat POST; form + {% csrf_token %}; yoki django.contrib.auth.views.LogoutView.",
  "concepts": [
   "M09-logout",
   "M12-get-side-effect"
  ],
  "misconceptions": [
   "MC-get-safe"
  ],
  "source_ref": "core/views.py:logout"
 },
 {
  "id": "B07",
  "file": "core/views.py",
  "line": 0,
  "severity": 4,
  "cat": "security",
  "title": "parol validatorlari ishlamaydi",
  "mech": "set_password to'g'ridan chaqiriladi; AUTH_PASSWORD_VALIDATORS faqat forms/UserCreationForm orqali ishlaydi. Parol '1' yoki bo'sh username o'tishi mumkin.",
  "fix": "UserCreationForm yoki validate_password() chaqiring; username strip + non-empty tekshiruv.",
  "concepts": [
   "M09-set-password",
   "M09-validators"
  ],
  "misconceptions": [
   "MC-set-password-validates"
  ],
  "source_ref": "core/views.py:mrsign"
 },
 {
  "id": "B08",
  "file": "core/views.py",
  "line": 0,
  "severity": 4,
  "cat": "security",
  "title": "authenticate o'rniga qo'lda login",
  "mech": "User.objects.get + check_password + django_login. authenticate() is_active, backend va boshqa signal/hooklarni tekshiradi; is_active=False ham kira oladi.",
  "fix": "user = authenticate(request, username=..., password=...); if user: login(request, user).",
  "concepts": [
   "M09-authenticate",
   "M09-is-active"
  ],
  "misconceptions": [
   "MC-check-password-enough"
  ],
  "source_ref": "core/views.py:login"
 },
 {
  "id": "B09",
  "file": "core/views.py",
  "line": 80,
  "severity": 3,
  "cat": "http-status",
  "title": "private kitob → 200 'topilmadi'",
  "mech": "HttpResponse('kitob topilmadi') status 200 qaytaradi. 404.html bor, lekin ishlatilmaydi. IDOR va qidiruv tahlilini chalg'itadi.",
  "fix": "from django.http import Http404; raise Http404 yoki get_object_or_404.",
  "concepts": [
   "M07-404",
   "M07-get-object-or-404",
   "M01-status-codes"
  ],
  "misconceptions": [
   "MC-text-equals-404"
  ],
  "source_ref": "core/views.py:80-89"
 },
 {
  "id": "B10",
  "file": "main/templates/books-list.html",
  "line": 0,
  "severity": 3,
  "cat": "perf",
  "title": "N+1 bookview_set.count",
  "mech": "Har kartochkada {{ book.bookview_set.count }} alohida SQL. 20 kitob → 21 so'rov.",
  "fix": "views da books = books.annotate(vc=Count('bookview')); shablonda {{ book.vc }} yoki prefetch_related.",
  "concepts": [
   "M04-n-plus-1",
   "M04-annotate",
   "M08-related-count"
  ],
  "misconceptions": [
   "MC-count-free"
  ],
  "source_ref": "main/templates/books-list.html"
 },
 {
  "id": "B11",
  "file": "main/templates/books-list.html",
  "line": 0,
  "severity": 2,
  "cat": "ui",
  "title": "tab active klassi qo'yilmaydi",
  "mech": "is_public kontekstga uzatiladi, lekin shablon a.active klassini hech qachon qo'ymaydi. CSS tayyor, lekin bog'lanmagan.",
  "fix": "{% if is_public %}class=\"active\"{% endif %} tegishli <a> da.",
  "concepts": [
   "M08-if",
   "M07-context"
  ],
  "misconceptions": [
   "MC-context-auto-class"
  ],
  "source_ref": "main/templates/books-list.html"
 },
 {
  "id": "B12",
  "file": "main/models.py",
  "line": 1,
  "severity": 1,
  "cat": "style",
  "title": "axlat importlar",
  "mech": "from os import name, from statistics import mode (models); views da from django.utils.translation.trans_real import re — ishlatilmaydi (IDE avto-import).",
  "fix": "Ishlatilmagan importlarni o'chiring.",
  "concepts": [
   "M00-import"
  ],
  "misconceptions": [
   "MC-unused-ok"
  ],
  "source_ref": "main/models.py:1-2"
 },
 {
  "id": "B13",
  "file": "main/models.py",
  "line": 11,
  "severity": 3,
  "cat": "model",
  "title": "url CharField(null=True) zaif",
  "mech": "blank yo'q, max_length yo'q; view url[8:]/url[7:] kesadi; shablon https://{{book.url}} — ftp://x → https://ftp://x.",
  "fix": "URLField(blank=True, null=True) yoki max_length + blank; tozalashni urlparse bilan.",
  "concepts": [
   "M03-null-blank",
   "M03-field-types",
   "M00-slicing"
  ],
  "misconceptions": [
   "MC-null-enough"
  ],
  "source_ref": "main/models.py:11"
 },
 {
  "id": "B14",
  "file": "main/models.py",
  "line": 14,
  "severity": 3,
  "cat": "model",
  "title": "BookView UniqueConstraint yo'q",
  "mech": "get_or_create poyga holatida (ikki so'rov bir vaqtda) dublikat BookView yaratishi mumkin.",
  "fix": "class Meta: constraints = [UniqueConstraint(fields=['book','user'], name='unique_book_user')].",
  "concepts": [
   "M03-meta",
   "M04-get-or-create"
  ],
  "misconceptions": [
   "MC-get-or-create-atomic"
  ],
  "source_ref": "main/models.py:14-16"
 },
 {
  "id": "B15",
  "file": "main/models.py",
  "line": 7,
  "severity": 1,
  "cat": "admin",
  "title": "Book.__str__ yo'q",
  "mech": "Adminda 'Book object (1)' ko'rinadi; BookView register qilinmagan.",
  "fix": "def __str__(self): return self.name; admin.site.register(BookView).",
  "concepts": [
   "M03-str",
   "M11-admin"
  ],
  "misconceptions": [
   "MC-default-str-ok"
  ],
  "source_ref": "main/models.py:7-12"
 },
 {
  "id": "B16",
  "file": "core/views.py",
  "line": 26,
  "severity": 1,
  "cat": "product",
  "title": "public=true o'z kitoblarini ham aralashtiradi",
  "mech": "filter(public=True) egasining o'z kitoblarini ham chiqaradi; ko'rish hisobiga egasi ham kiradi. Mahsulot qarori — munozara.",
  "fix": "Agar kerak bo'lsa: filter(public=True).exclude(user=request.user) yoki aniq mahsulot qoidasi.",
  "concepts": [
   "M04-filter",
   "M10-public-private"
  ],
  "misconceptions": [
   "MC-public-excludes-owner"
  ],
  "source_ref": "core/views.py:26-28"
 },
 {
  "id": "B17",
  "file": "core/views.py",
  "line": 12,
  "severity": 2,
  "cat": "urls",
  "title": "qattiq yozilgan URL'lar",
  "mech": "redirect('/login/') — name= faqat logout da. URL o'zgarsa barcha redirect sinadi.",
  "fix": "path(..., name='login'); redirect('login') yoki reverse('login').",
  "concepts": [
   "M06-name-reverse",
   "M07-redirect"
  ],
  "misconceptions": [
   "MC-hardcode-ok"
  ],
  "source_ref": "core/views.py:12"
 },
 {
  "id": "B18",
  "file": "core/views.py",
  "line": 20,
  "severity": 2,
  "cat": "style",
  "title": "login_required o'rniga takror",
  "mech": "Har viewda if not request.user.is_authenticated: return redirect(...). Takror, unutish oson.",
  "fix": "@login_required(login_url='/login/') yoki o'z dekoratoringiz.",
  "concepts": [
   "M09-login-required"
  ],
  "misconceptions": [
   "MC-repeat-ok"
  ],
  "source_ref": "core/views.py:20"
 },
 {
  "id": "B19",
  "file": "main/templates/",
  "line": 0,
  "severity": 2,
  "cat": "templates",
  "title": "base.html yo'q",
  "mech": "Har shablonda 150–350 qator takroriy <style>. extends/block ishlatilmagan.",
  "fix": "base.html + {% extends %} + {% block content %}.",
  "concepts": [
   "M08-extends"
  ],
  "misconceptions": [
   "MC-copy-paste-css"
  ],
  "source_ref": "main/templates/*.html"
 },
 {
  "id": "B20",
  "file": "core/settings.py",
  "line": 0,
  "severity": 5,
  "cat": "security",
  "title": "DEBUG/HOSTS/SECRET/db.git",
  "mech": "DEBUG=True, ALLOWED_HOSTS=['*'], SECRET_KEY qattiq yozilgan, db.sqlite3 gitda.",
  "fix": "env o'zgaruvchilari; DEBUG=False prod; .gitignore ga db.sqlite3; rotates SECRET_KEY.",
  "concepts": [
   "M12-debug-hosts",
   "M16-gitignore"
  ],
  "misconceptions": [
   "MC-debug-prod-ok"
  ],
  "source_ref": "core/settings.py"
 },
 {
  "id": "B21",
  "file": "core/settings.py",
  "line": 0,
  "severity": 1,
  "cat": "i18n",
  "title": "LANGUAGE_CODE en-us",
  "mech": "UI o'zbekcha, LANGUAGE_CODE='en-us', TIME_ZONE='UTC'.",
  "fix": "LANGUAGE_CODE='uz', TIME_ZONE='Asia/Tashkent' (agar kerak).",
  "concepts": [
   "M02-settings"
  ],
  "misconceptions": [
   "MC-lang-cosmetic"
  ],
  "source_ref": "core/settings.py"
 },
 {
  "id": "B22",
  "file": "main/tests.py",
  "line": 0,
  "severity": 3,
  "cat": "tests",
  "title": "tests.py bo'sh",
  "mech": "Birorta TestCase yo'q. Refaktor va regressiya himoyasiz.",
  "fix": "Kamida 15 ta Client test: auth, public/private, add_book, 404.",
  "concepts": [
   "M13-testcase",
   "M13-client"
  ],
  "misconceptions": [
   "MC-manual-enough"
  ],
  "source_ref": "main/tests.py"
 }
];
