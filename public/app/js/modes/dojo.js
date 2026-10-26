/* Syntax Dojo — kodni yoddan yozish (token diff). 15 ta target bank. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};

  var TARGETS = [
    {
      title: 'index view',
      code: 'def index(request):\n    if request.user.is_authenticated:\n        return redirect("/book-list/")\n    return redirect("/login/")'
    },
    {
      title: 'logout view',
      code: 'def logout(request):\n    django_logout(request)\n    return redirect("/login/")'
    },
    {
      title: 'book_list auth check',
      code: 'def book_list(request):\n    if not request.user.is_authenticated:\n        return redirect("/login/")\n    books = Book.objects.filter(user_id=request.user.id).order_by("-id")\n    return render(request, "books-list.html", {"books": books})'
    },
    {
      title: 'add_book GET',
      code: 'def add_book(request):\n    if not request.user.is_authenticated:\n        return redirect("/login/")\n    if request.method == "GET":\n        return render(request, "add_book.html")'
    },
    {
      title: 'Book model',
      code: 'class Book(models.Model):\n    name = models.CharField(max_length=255)\n    yaratilgan_sanasi = models.DateField(auto_now_add=True)\n    user = models.ForeignKey(User, on_delete=models.CASCADE)\n    url = models.CharField(null=True)\n    public = models.BooleanField(default=False)'
    },
    {
      title: 'BookView model',
      code: 'class BookView(models.Model):\n    book = models.ForeignKey(Book, on_delete=models.CASCADE)\n    user = models.ForeignKey(User, on_delete=models.CASCADE)'
    },
    {
      title: 'login GET',
      code: 'def login(request):\n    if request.user.is_authenticated:\n        return redirect("/book-list/")\n    if request.method == "GET":\n        return render(request, "login.html")'
    },
    {
      title: 'url strip',
      code: 'if url.startswith("https://"):\n    url = url[8:]\nelif url.startswith("http://"):\n    url = url[7:]'
    },
    {
      title: 'public flag',
      code: 'if public == "on":\n    public = True\nelse:\n    public = False'
    },
    {
      title: 'book_page public',
      code: 'if book.public:\n    BookView.objects.get_or_create(book=book, user=request.user)\n    soni = BookView.objects.filter(book=book).count()\n    return render(request, "book.html", {"book": book, "soni": soni})'
    },
    {
      title: 'owner check',
      code: 'if book.user.id != request.user.id:\n    return HttpResponse("kitob topilmadi")'
    },
    {
      title: 'signup password check',
      code: 'if password != password_confirm:\n    messages.error(request, "Parollar mos emas!")\n    return redirect("/signup/")'
    },
    {
      title: 'user create',
      code: 'user = User(username=username)\nuser.set_password(password)\nuser.save()\ndjango_login(request, user)\nreturn redirect("/book-list/")'
    },
    {
      title: 'DoesNotExist',
      code: 'try:\n    book = Book.objects.get(id=id)\nexcept Book.DoesNotExist:\n    return HttpResponse("kitob topilmadi")'
    },
    {
      title: 'filter public',
      code: 'is_public = request.GET.get("public") == "true"\nif is_public:\n    books = Book.objects.filter(public=True).order_by("-id")'
    }
  ];

  BS.modes.dojo = {
    id: 'dojo', title: 'Syntax Dojo',
    start: function (opts) {
      opts = opts || {};
      var rng = BS.rng.create(opts.seed || Date.now());
      var order = rng.shuffle(TARGETS.slice());
      var n = Math.min(opts.n || 5, order.length);
      var i = 0, okCount = 0;
      var root = BS.ui.h('div');
      var stat = BS.ui.h('p', { class: 'score' });
      var box = BS.ui.h('div');
      var out = BS.ui.h('div');
      var edHost = BS.ui.h('div');
      var ed = null;

      function show() {
        if (i >= n) {
          BS.ui.mount(box, BS.ui.h('div', null,
            BS.ui.h('h3', null, 'Tugadi'),
            BS.ui.h('p', null, okCount + '/' + n + ' to\u2018g\u2018ri')
          ));
          if (opts.onDone) opts.onDone({ ok: okCount, total: n, format: 'write' });
          return;
        }
        var item = order[i];
        var target = item.code;
        function check() {
          if (!ed) return;
          var r = BS.diff.report(ed.getValue(), target), errs = [];
          r.lines.forEach(function (l) {
            if ((l.status === 'changed' || l.status === 'extra') && l.studentLine)
              errs.push({ line: l.studentLine, msg: l.indentOnly ? 'indent' : 'token' });
          });
          ed.markErrors(errs);
          BS.ui.mount(out, BS.ui.h('p', { class: 'score' },
            'To\u2018g\u2018ri: ' + r.ok + '/' + r.total + (r.exact ? ' \u2705' : '')));
          if (r.exact) {
            okCount++;
            i++;
            stat.textContent = 'Progress: ' + okCount + '/' + i + ' (jami ' + n + ')';
            setTimeout(show, 500);
          }
        }
        BS.ui.mount(box, BS.ui.h('div', null,
          BS.ui.h('h2', null, 'Syntax Dojo'),
          BS.ui.h('p', { class: 'sub' }, (i + 1) + '/' + n + ' — ' + item.title + ': quyidagini yoddan yozing.'),
          BS.ui.h('div', { class: 'card' }, (function () {
            var p = BS.ui.h('pre');
            BS.ui.rawHTML(p, BS.hl.highlight('py', target));
            return p;
          })()),
          edHost,
          BS.ui.h('button', { class: 'btn', onclick: check }, 'Tekshir'),
          out
        ));
        edHost.innerHTML = '';
        out.innerHTML = '';
        ed = BS.editor.create(edHost, { lang: 'py', minRows: 6 });
      }

      BS.ui.mount(root, BS.ui.h('div', null, stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
