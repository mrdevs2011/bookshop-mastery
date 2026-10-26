/* Template Forge — bashorat. 12+ item. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  var ITEMS = [
    { ctx: { book: { name: 'Django', public: true } }, tpl: '{{ book.name }}', expect: 'Django' },
    { ctx: { n: 3 }, tpl: '{% if n %}bor{% else %}yoq{% endif %}', expect: 'bor' },
    { ctx: { n: 0 }, tpl: '{% if n %}bor{% else %}yoq{% endif %}', expect: 'yoq' },
    { ctx: { books: [{name:'A'}, {name:'B'}] }, tpl: '{% for b in books %}{{ b.name }} {% endfor %}', expect: 'A B ' },
    { ctx: { book: { public: False } }, tpl: '{% if book.public %}ommaviy{% else %}shaxsiy{% endif %}', expect: 'shaxsiy' },
    { ctx: { soni: 5 }, tpl: 'Ko\'rilgan: {{ soni }}', expect: "Ko'rilgan: 5" },
    { ctx: { user: { username: 'ali' } }, tpl: 'Salom, {{ user.username }}!', expect: 'Salom, ali!' },
    { ctx: { books: [] }, tpl: '{% if books %}bor{% else %}bo\'sh{% endif %}', expect: "bo'sh" },
    { ctx: { name: 'Test <script>' }, tpl: '{{ name }}', expect: 'Test <script>' },
    { ctx: { n: 1 }, tpl: '{% if n == 1 %}bir{% elif n == 2 %}ikki{% else %}boshqa{% endif %}', expect: 'bir' },
    { ctx: { items: [1,2,3] }, tpl: '{{ items|length }}', expect: '3' },
    { ctx: { s: 'hello' }, tpl: '{{ s|upper }}', expect: 'HELLO' },
    { ctx: { book: { name: 'Python' } }, tpl: '<h1>{{ book.name }}</h1>', expect: '<h1>Python</h1>' },
    { ctx: { ok: True }, tpl: '{% if ok %}OK{% endif %}', expect: 'OK' },
    { ctx: { ok: False }, tpl: '{% if ok %}OK{% endif %}', expect: '' }
  ];
  BS.modes.templates = {
    id: 'templates', title: 'Template Forge',
    start: function (opts) {
      opts = opts || {};
      var rng = BS.rng.create(opts.seed || Date.now());
      var order = rng.shuffle(ITEMS.slice());
      var n = Math.min(opts.n || 8, order.length);
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= n) {
          BS.ui.mount(box, BS.ui.h('p', null, 'Tugadi: ' + ok + '/' + n));
          if (opts.onDone) opts.onDone({ ok: ok, total: n, format: 'write' });
          return;
        }
        var it = order[i];
        var inp = BS.ui.h('input', { type: 'text', placeholder: 'render natijasi', style: { width: '100%' } });
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('pre', null, 'Kontekst: ' + JSON.stringify(it.ctx)),
          BS.ui.code ? BS.ui.code('tpl', it.tpl) : BS.ui.h('pre', null, it.tpl),
          inp,
          BS.ui.h('button', { class: 'btn', onclick: function () {
            if ((inp.value || '').trim() === it.expect) ok++;
            i++;
            stat.textContent = ok + '/' + i + ' (jami ' + n + ')';
            show();
          }}, 'Tekshir')));
      }
      BS.ui.mount(root, BS.ui.h('div', null, BS.ui.h('h2', null, 'Template Forge'), stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
