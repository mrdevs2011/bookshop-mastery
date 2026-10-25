/* Permission Matrix — actor × resource × endpoint. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  var CELLS = [
    { actor: 'anon', path: '/book-list/', expect: 302 },
    { actor: 'anon', path: '/login/', expect: 200 },
    { actor: 'ega', path: '/book-list/', expect: 200 },
    { actor: 'begona', path: '/book/private/', expect: 200, note: 'matn topilmadi (B09)' },
    { actor: 'ega', path: '/add-book/', expect: 200 }
  ];
  BS.modes.matrix = {
    id: 'matrix', title: 'Permission Matrix',
    start: function (opts) {
      opts = opts || {};
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= CELLS.length) {
          BS.ui.mount(box, BS.ui.h('p', null, 'Tugadi: ' + ok + '/' + CELLS.length));
          if (opts.onDone) opts.onDone({ ok: ok, total: CELLS.length, format: 'trace' });
          return;
        }
        var c = CELLS[i];
        var inp = BS.ui.h('input', { type: 'number', placeholder: 'status', style: { width: '100px' } });
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, 'Aktiyor: ' + c.actor),
          BS.ui.h('p', null, 'GET ' + c.path),
          c.note ? BS.ui.h('p', { class: 'sub' }, c.note) : null,
          BS.ui.h('label', null, 'Kutilgan status: ', inp),
          BS.ui.h('button', { class: 'btn', onclick: function () {
            if (parseInt(inp.value, 10) === c.expect) ok++;
            i++;
            stat.textContent = ok + '/' + i;
            show();
          }}, 'Tekshir')));
      }
      BS.ui.mount(root, BS.ui.h('div', null, BS.ui.h('h2', null, 'Permission Matrix'), stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
