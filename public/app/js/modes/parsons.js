/* Parsons+ — qatorlarni tartiblash (soddalashtirilgan). */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.parsons = {
    id: 'parsons', title: 'Parsons+',
    start: function (opts) {
      opts = opts || {};
      var lines = (opts.lines || [
        'def book_list(request):',
        '    if not request.user.is_authenticated:',
        '        return redirect("/login/")',
        '    books = Book.objects.filter(user_id=request.user.id).order_by("-id")',
        '    return render(request, "books-list.html", {"books": books})'
      ]).slice();
      var rng = BS.rng.create(opts.seed || 1);
      var shuffled = rng.shuffle(lines.map(function (t, i) { return { t: t, i: i }; }));
      var picked = [];
      var root = BS.ui.h('div'), pool = BS.ui.h('div'), ans = BS.ui.h('div'), msg = BS.ui.h('p');
      function render() {
        BS.ui.mount(pool, BS.ui.h('div', null, shuffled.filter(function (x) { return picked.indexOf(x) < 0; }).map(function (x) {
          return BS.ui.h('button', { class: 'btn sec', style: { display: 'block', margin: '4px 0', textAlign: 'left' }, onclick: function () {
            picked.push(x); render();
          }}, x.t);
        })));
        BS.ui.mount(ans, BS.ui.h('div', { class: 'card' }, picked.map(function (x, idx) {
          return BS.ui.h('div', null, (idx + 1) + '. ' + x.t);
        })));
      }
      function check() {
        var ok = picked.length === lines.length && picked.every(function (x, i) { return x.i === i; });
        msg.textContent = ok ? '\u2705 To\u2018g\u2018ri tartib!' : '\u274c Noto\u2018g\u2018ri — qayta urinib ko\u2018ring';
        if (ok && opts.onDone) opts.onDone({ ok: true, format: 'order' });
      }
      BS.ui.mount(root, BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Parsons+'),
        BS.ui.h('p', { class: 'sub' }, 'Qatorlarni to\u2018g\u2018ri tartibda tanlang.'),
        BS.ui.h('h3', null, 'Hovuz'), pool,
        BS.ui.h('h3', null, 'Javob'), ans,
        BS.ui.h('button', { class: 'btn', onclick: check }, 'Tekshir'),
        BS.ui.h('button', { class: 'btn sec', onclick: function () { picked = []; msg.textContent = ''; render(); } }, 'Tozala'),
        msg));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      render();
      return { el: root };
    }
  };
})();
