"""Mutantlar: reference'dagi BITTA kichik, ma'noli o'zgarish. Har biri kamida bitta hidden test tomonidan "o'ldirilishi" shart.
M(id, fayl, eski, yangi, nth=0, tavsif): `eski` matnning nth-chi uchragani `yangi` bilan almashtiriladi."""

V = 'core/views.py'
U = 'core/urls.py'
MO = 'main/models.py'
S = 'core/settings.py'
T = 'main/templates/'

MUTANTS = []


def M(mid, f, old, new, nth=0, desc=''):
    MUTANTS.append({'id': mid, 'file': f, 'old': old, 'new': new, 'nth': nth, 'desc': desc})


# ---- views: index
M('v01-index-swap', V, '    if request.user.is_authenticated:\n        return redirect("/book-list/")\n    return redirect("/login/")',
  '    if request.user.is_authenticated:\n        return redirect("/login/")\n    return redirect("/book-list/")', 0, "index: yo'nalishlar almashtirildi")
# ---- views: book_list
M('v02-list-no-auth', V, '    if not request.user.is_authenticated:\n        return redirect("/login/")\n', '    pass\n', 0, "book_list: auth tekshiruvi yo'q")
M('v03-list-order-asc', V, '.order_by("-id")', '.order_by("id")', 0, "book_list: shaxsiy ro'yxat tartibi teskari")
M('v04-list-public-order-asc', V, '.order_by("-id")', '.order_by("id")', 1, "book_list: public ro'yxat tartibi teskari")
M('v05-list-all-users', V, 'Book.objects.filter(user_id=user_id).order_by("-id")', 'Book.objects.all().order_by("-id")', 0, "book_list: egasi bo'yicha filtr yo'q")
M('v06-list-public-false', V, 'filter(public=True)', 'filter(public=False)', 0, "book_list: public filtr teskari")
M('v07-list-flag-case', V, "== 'true'", "== 'True'", 0, "book_list: ?public=true katta-kichik harf")
M('v08-list-post-renders', V, '    if request.method == "GET":\n        return render(request,"books-list.html"', '    if True:\n        return render(request,"books-list.html"', 0, "book_list: POST ham render qiladi")
M('v09-list-ctx-ispublic', V, '"is_public": is_public', '"is_public": False', 0, "book_list: is_public kontekstga noto'g'ri")
M('v10-list-ctx-name', V, '{"books": books,', '{"booklar": books,', 0, "book_list: kontekst kaliti")
# ---- views: add_book
M('v11-add-no-auth', V, '    if not request.user.is_authenticated:\n            return redirect("/login/")\n', '    pass\n', 0, "add_book: auth tekshiruvi yo'q")
M('v12-add-get-template', V, 'render(request, "add_book.html")', 'render(request, "book.html")', 0, "add_book: GET noto'g'ri shablon")
M('v13-add-https-off', V, 'url = url[8:]', 'url = url[7:]', 0, "add_book: https:// noto'g'ri kesiladi")
M('v14-add-http-off', V, 'url = url[7:]', 'url = url[8:]', 0, "add_book: http:// noto'g'ri kesiladi")
M('v15-add-public-inverted', V, 'if public  == "on":', 'if public  != "on":', 0, "add_book: public teskari")
M('v16-add-wrong-user', V, 'user_id=request.user.id, url=url', 'user_id=request.user.id + 1, url=url', 0, "add_book: boshqa user nomiga saqlaydi")
M('v17-add-redirect-wrong', V, '        return redirect("/book-list/")\n\n    return HttpResponse("hozircha', '        return redirect("/add-book/")\n\n    return HttpResponse("hozircha', 0, "add_book: muvaffaqiyatdan keyin noto'g'ri redirect")
M('v18-add-error-redirect', V, 'return redirect("/error/")', 'return redirect("/book-list/")', 0, "add_book: xatoda /error/ emas")
M('v19-add-no-save', V, 'b1.save()', 'pass', 0, "add_book: saqlamaydi")
M('v20-add-name-url', V, 'Book(name=name1,', 'Book(name=url,', 0, "add_book: nom o'rniga url")
# ---- views: book_page
M('v21-page-no-auth', V, '    if not request.user.is_authenticated:\n        return redirect("/login/")\n', '    pass\n', 1, "book_page: auth tekshiruvi yo'q")
M('v22-page-public-no-view', V, 'BookView.objects.get_or_create(book=book, user=request.user)', 'pass', 0, "book_page: public ko'rish yozilmaydi")
M('v23-page-owner-no-view', V, 'BookView.objects.get_or_create(book=book, user=request.user)', 'pass', 1, "book_page: egasi ko'rishi yozilmaydi")
M('v24-page-count-all', V, 'soni = BookView.objects.filter(book=book).count()', 'soni = BookView.objects.count()', 0, "book_page: hamma kitoblar ko'rishi sanaladi")
M('v25-page-owner-inverted', V, 'if book.user.id != request.user.id:', 'if book.user.id == request.user.id:', 0, "book_page: egalik tekshiruvi teskari")
M('v26-page-owner-removed', V, 'if book.user.id != request.user.id:', 'if False:', 0, "book_page: egalik tekshiruvi yo'q (IDOR)")
M('v27-page-msg-private', V, "return HttpResponse('kitob topilmadi')", "return HttpResponse('topilmadi')", 0, "book_page: private matni")
M('v28-page-msg-missing', V, "return HttpResponse('kitob topilmadi')", "return HttpResponse('topilmadi')", 1, "book_page: yo'q id matni")
M('v29-page-public-inverted', V, 'if book.public:', 'if not book.public:', 0, "book_page: public tekshiruvi teskari")
M('v30-page-soni-zero', V, '{"book": book, "soni": soni})', '{"book": book, "soni": 0})', 0, "book_page: soni doim 0")
M('v31-page-missing-404', V, "    except Book.DoesNotExist:\n        return HttpResponse('kitob topilmadi')", "    except Book.DoesNotExist:\n        raise Http404()", 0, "book_page: yo'q id -> 404 (haqiqiy xatti-harakat 200)")
# ---- views: login
M('v32-login-authed-no-redirect', V, 'def login(request: HttpRequest):\n    if request.user.is_authenticated:\n        return redirect("/book-list/")\n', 'def login(request: HttpRequest):\n    pass\n', 0, "login: kirgan foydalanuvchi qaytarilmaydi")
M('v33-login-check-inverted', V, 'if  user.check_password(password):', 'if not user.check_password(password):', 0, "login: parol tekshiruvi teskari")
M('v34-login-no-session', V, "            django_login(request, user)\n            return redirect('/book-list/')", "            return redirect('/book-list/')", 0, "login: sessiya ochilmaydi")
M('v35-login-nomsg-user', V, 'messages.error(request, "Kechirasiz', 'pass  #', 0, "login: noma'lum user xabarsiz")
M('v36-login-nomsg-pass', V, 'messages.error(request, "Kechirasiz', 'pass  #', 1, "login: noto'g'ri parol xabarsiz")
M('v37-login-success-root', V, "            django_login(request, user)\n            return redirect('/book-list/')", "            django_login(request, user)\n            return redirect('/')", 0, "login: muvaffaqiyatdan keyin '/'")
M('v38-login-field', V, "request.POST.get('username')", "request.POST.get('user')", 0, "login: maydon nomi")
# ---- views: signup
M('v39-signup-authed-no-redirect', V, 'def mrsign(request: HttpRequest):\n    if request.user.is_authenticated:\n       return redirect("/book-list/")\n', 'def mrsign(request: HttpRequest):\n    pass\n', 0, "signup: kirgan foydalanuvchi qaytarilmaydi")
M('v40-signup-confirm-inverted', V, 'if  password != password_confirm:', 'if  password == password_confirm:', 0, "signup: parol tasdiqi teskari")
M('v41-signup-nomsg-mismatch', V, 'messages.error(request, "Parolllar', 'pass  #', 0, "signup: mos kelmaslik xabarsiz")
M('v42-signup-dupe-check', V, 'User.objects.get(username=username)\n           messages', "User.objects.get(username=username + 'x')\n           messages", 0, "signup: band username tekshiruvi buzilgan")
M('v43-signup-no-hash', V, 'user.set_password(password)', 'user.password = password', 0, "signup: parol heshlanmaydi")
M('v44-signup-no-login', V, 'user.save()\n           django_login(request, user)', 'user.save()', 0, "signup: avto-login yo'q")
M('v45-signup-redirect', V, "django_login(request, user)\n           return redirect('/book-list/')", "django_login(request, user)\n           return redirect('/login/')", 0, "signup: muvaffaqiyatdan keyin /login/")
M('v46-signup-field', V, "request.POST.get('password_confirm_ui')", "request.POST.get('password_confirm')", 0, "signup: tasdiq maydoni nomi")
# ---- views: logout
M('v47-logout-noop', V, '    django_logout(request)', '    pass', 0, "logout: sessiya tozalanmaydi")
M('v48-logout-redirect', V, "    django_logout(request)\n    return redirect('/login/')", "    django_logout(request)\n    return redirect('/book-list/')", 0, "logout: noto'g'ri redirect")
# ---- urls
M('u01-url-converter', U, "'book/<int:id>/'", "'book/<str:id>/'", 0, "urls: <int:id> o'rniga <str:id>")
M('u02-url-logout-name', U, "name='logout'", "name='chiqish'", 0, "urls: logout nomi")
M('u03-url-no-error', U, "    path('error/', TemplateView.as_view(template_name='error.html')),\n", '', 0, "urls: /error/ yo'q")
M('u04-url-signup-path', U, "'signup/'", "'register/'", 0, "urls: signup yo'li")
M('u05-url-no-index', U, "    path('', index),\n", '', 0, "urls: bosh sahifa yo'q")
M('u06-url-add-book-path', U, "'add-book/'", "'add_book/'", 0, "urls: add-book yo'li")
# ---- models
M('m01-name-maxlen', MO, 'CharField(max_length=255)', 'CharField(max_length=100)', 0, "models: name uzunligi (migratsiya mos emas)")
M('m02-public-default', MO, 'BooleanField(default=False)', 'BooleanField(default=True)', 0, "models: public default")
M('m03-url-not-null', MO, 'CharField(null=True)', 'CharField()', 0, "models: url null emas")
M('m04-book-user-protect', MO, 'on_delete=models.CASCADE)\n    url', 'on_delete=models.PROTECT)\n    url', 0, "models: Book.user PROTECT")
M('m05-date-no-auto', MO, 'DateField(auto_now_add=True)', 'DateField(null=True)', 0, "models: sana avtomatik emas")
M('m06-bookview-cascade', MO, 'class BookView(models.Model):\n    book = models.ForeignKey(Book, on_delete=models.CASCADE)', 'class BookView(models.Model):\n    book = models.ForeignKey(Book, on_delete=models.PROTECT)', 0, "models: BookView.book PROTECT")
# ---- admin
M('a01-admin-unregistered', 'main/admin.py', 'admin.site.register(Book)', 'pass', 0, "admin: Book ro'yxatda yo'q")
# ---- settings
M('s01-csrf-on', S, "    'django.middleware.common.CommonMiddleware',\n", "    'django.middleware.common.CommonMiddleware',\n    'django.middleware.csrf.CsrfViewMiddleware',\n", 0, "settings: CsrfViewMiddleware yoqilgan")
M('s02-debug-off', S, 'DEBUG = True', 'DEBUG = False', 0, "settings: DEBUG o'chirilgan")
M('s03-lang', S, "LANGUAGE_CODE = 'en-us'", "LANGUAGE_CODE = 'uz'", 0, "settings: til")
M('s04-no-main-app', S, '    "main"\n', '', 0, "settings: main ilova ro'yxatda yo'q")
M('s05-timezone', S, "TIME_ZONE = 'UTC'", "TIME_ZONE = 'Asia/Tashkent'", 0, "settings: vaqt mintaqasi")
M('s06-hosts', S, 'ALLOWED_HOSTS = ["*"]', 'ALLOWED_HOSTS = []', 0, "settings: ALLOWED_HOSTS bo'sh")
# ---- templates
M('t01-book-soni', T + 'book.html', '{{ soni }}', '{{ 0 }}', 0, "book.html: ko'rishlar soni")
M('t02-list-views-count', T + 'books-list.html', '{{book.bookview_set.count}}', '{{ 0 }}', 0, "books-list.html: ko'rishlar soni")
M('t03-list-link', T + 'books-list.html', 'href="/book/{{book.id}}/"', 'href="/book/0/"', 0, "books-list.html: kartochka havolasi")
M('t04-login-field', T + 'login.html', 'name="password"', 'name="parol"', 0, "login.html: parol maydoni nomi")
M('t05-add-public-field', T + 'add_book.html', 'name="public"', 'name="ommaviy"', 0, "add_book.html: public maydoni nomi")
M('t06-book-link-scheme', T + 'book.html', 'href="https://{{book.url}}"', 'href="http://{{book.url}}"', 0, "book.html: havola sxemasi")
M('t07-signup-confirm-field', T + 'signup.html', 'name="password_confirm_ui"', 'name="password_confirm"', 0, "signup.html: tasdiq maydoni nomi")
M('t08-book-author', T + 'book.html', '<div class="detail-value">{{book.user.username}}</div>', '<div class="detail-value">{{book.name}}</div>', 0, "book.html: muallif o'rniga nom")
M('t09-list-count', T + 'books-list.html', '{{books.count}}', '{{ 0 }}', 0, "books-list.html: jami soni")
M('t10-login-messages', T + 'login.html', '{% if messages %}', '{% if False %}', 0, "login.html: xabarlar ko'rsatilmaydi")
