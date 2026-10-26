/* Parsons+ — qatorlarni tartiblash. 12 ta puzzle bank. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};

  var PUZZLES = [
    {
      title: 'book_list',
      lines: [
        'def book_list(request):',
        '    if not request.user.is_authenticated:',
        '        return redirect("/login/")',
        '    books = Book.objects.filter(user_id=request.user.id).order_by("-id")',
        '    return render(request, "books-list.html", {"books": books})'
      ]
    },
    {
      title: 'index',
      lines: [
        'def index(request):',
        '    if request.user.is_authenticated:',
        '        return redirect("/book-list/")',
        '    return redirect("/login/")'
      ]
    },
    {
      title: 'logout',
      lines: [
        'def logout(request):',
        '    django_logout(request)',
        '    return redirect("/login/")'
      ]
    },
    {
      title: 'Book model',
      lines: [
        'class Book(models.Model):',
        '    name = models.CharField(max_length=255)',
        '    yaratilgan_sanasi = models.DateField(auto_now_add=True)',
        '    user = models.ForeignKey(User, on_delete=models.CASCADE)',
        '    url = models.CharField(null=True)',
        '    public = models.BooleanField(default=False)'
      ]
    },
    {
      title: 'add_book GET',
      lines: [
        'def add_book(request):',
        '    if not request.user.is_authenticated:',
        '        return redirect("/login/")',
        '    if request.method == "GET":',
        '        return render(request, "add_book.html")'
      ]
    },
    {
      title: 'url clean',
      lines: [
        'if url.startswith("https://"):',
        '    url = url[8:]',
        'elif url.startswith("http://"):',
        '    url = url[7:]'
      ]
    },
    {
      title: 'public flag',
      lines: [
        'if public == "on":',
        '    public = True',
        'else:',
        '    public = False'
      ]
    },
    {
      title: 'login POST success',
      lines: [
        'if user.check_password(password):',
        '    django_login(request, user)',
        '    return redirect("/book-list/")',
        'else:',
        '    messages.error(request, "Ma\'lumotlar xato!")',
        '    return redirect("/login/")'
      ]
    },
    {
      title: 'DoesNotExist',
      lines: [
        'try:',
        '    book = Book.objects.get(id=id)',
        'except Book.DoesNotExist:',
        '    return HttpResponse("kitob topilmadi")'
      ]
    },
    {
      title: 'owner check',
      lines: [
        'if book.user.id != request.user.id:',
        '    return HttpResponse("kitob topilmadi")',
        'BookView.objects.get_or_create(book=book, user=request.user)',
        'soni = BookView.objects.filter(book=book).count()',
        'return render(request, "book.html", {"book": book, "soni": soni})'
      ]
    },
    {
      title: 'signup create',
      lines: [
        'user = User(username=username)',
        'user.set_password(password)',
        'user.save()',
        'django_login(request, user)',
        'return redirect("/book-list/")'
      ]
    },
    {
      title: 'filter public',
      lines: [
        'is_public = request.GET.get("public") == "true"',
        'if is_public:',
        '    books = Book.objects.filter(public=True).order_by("-id")',
        'else:',
        '    books = Book.objects.filter(user_id=request.user.id).order_by("-id")'
      ]
    }
  ];

  BS.modes.parsons = {
    id: 'parsons', title: 'Parsons+',
    start: function (opts) {
      opts = opts || {};
      var rng = BS.rng.create(opts.seed || Date.now());
      var order = rng.shuffle(PUZZLES.slice());
      var n = Math.min(opts.n || 4, order.length);
      var pi = 0, okCount = 0;
      var root = BS.ui.h('div');
      var stat = BS.ui.h('p', { class: 'score' });
      var box = BS.ui.h('div');

      function startPuzzle() {
        if (pi >= n) {
          BS.ui.mount(box, BS.ui.h('div', null,
            BS.ui.h('h3', null, 'Tugadi'),
            BS.ui.h('p', null, okCount + '/' + n + ' to\u2018g\u2018ri')
          ));
          if (opts.onDone) opts.onDone({ ok: okCount, total: n, format: 'order' });
          return;
        }
        var puzzle = order[pi];
        var lines = puzzle.lines.slice();
        var shuffled = rng.shuffle(lines.map(function (t, i) { return { t: t, i: i }; }));
        var picked = [];
        var pool = BS.ui.h('div'), ans = BS.ui.h('div'), msg = BS.ui.h('p');

        function render() {
          BS.ui.mount(pool, BS.ui.h('div', null, shuffled.filter(function (x) {
            return picked.indexOf(x) < 0;
          }).map(function (x) {
            return BS.ui.h('button', {
              class: 'btn sec',
              style: { display: 'block', margin: '4px 0', textAlign: 'left' },
              onclick: function () { picked.push(x); render(); }
            }, x.t);
          })));
          BS.ui.mount(ans, BS.ui.h('div', { class: 'card' }, picked.map(function (x, idx) {
            return BS.ui.h('div', null, (idx + 1) + '. ' + x.t);
          })));
        }

        function check() {
          var ok = picked.length === lines.length && picked.every(function (x, i) { return x.i === i; });
          msg.textContent = ok ? '\u2705 To\u2018g\u2018ri tartib!' : '\u274c Noto\u2018g\u2018ri — qayta urinib ko\u2018ring';
          if (ok) {
            okCount++;
            pi++;
            stat.textContent = 'Progress: ' + okCount + '/' + pi + ' (jami ' + n + ')';
            setTimeout(startPuzzle, 600);
          }
        }

        BS.ui.mount(box, BS.ui.h('div', null,
          BS.ui.h('h2', null, 'Parsons+'),
          BS.ui.h('p', { class: 'sub' }, (pi + 1) + '/' + n + ' — ' + puzzle.title),
          BS.ui.h('h3', null, 'Hovuz'), pool,
          BS.ui.h('h3', null, 'Javob'), ans,
          BS.ui.h('button', { class: 'btn', onclick: check }, 'Tekshir'),
          BS.ui.h('button', { class: 'btn sec', onclick: function () {
            picked = []; msg.textContent = ''; render();
          }}, 'Tozala'),
          msg
        ));
        render();
      }

      BS.ui.mount(root, BS.ui.h('div', null, stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      startPuzzle();
      return { el: root };
    }
  };
})();
