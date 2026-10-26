/* Template Forge — oddiy bashorat. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  var ITEMS = [
    { ctx: { book: { name: 'Django', public: true } }, tpl: '{{ book.name }}', expect: 'Django' },
    { ctx: { n: 3 }, tpl: '{% if n %}bor{% else %}yoq{% endif %}', expect: 'bor' },
    { ctx: { n: 0 }, tpl: '{% if n %}bor{% else %}yoq{% endif %}', expect: 'yoq' }
  ];
  BS.modes.templates = {
    id: 'templates', title: 'Template Forge',
    start: function (opts) {
      opts = opts || {};
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= ITEMS.length) {
          BS.ui.mount(box, BS.ui.h('p', null, 'Tugadi: ' + ok + '/' + ITEMS.length));
          if (opts.onDone) opts.onDone({ ok: ok, total: ITEMS.length, format: 'write' });
          return;
        }
        var it = ITEMS[i];
        var inp = BS.ui.h('input', { type: 'text', placeholder: 'render natijasi', style: { width: '100%' } });
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('pre', null, 'Kontekst: ' + JSON.stringify(it.ctx)),
          BS.ui.code('tpl', it.tpl),
          inp,
          BS.ui.h('button', { class: 'btn', onclick: function () {
            if ((inp.value || '').trim() === it.expect) ok++;
            i++;
            stat.textContent = ok + '/' + i;
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
