/* ORM Arena — SQL/natija bashorat (sql.js dan). */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.orm = {
    id: 'orm', title: 'ORM Arena',
    start: function (opts) {
      opts = opts || {};
      var cases = ((BS.data || {}).sql || {}).cases || [];
      if (!cases.length) {
        var e = BS.ui.h('p', null, 'sql.js yo\u2018q');
        if (opts.mount) BS.ui.mount(opts.mount, e);
        return { el: e };
      }
      var rng = BS.rng.create(opts.seed || 7);
      var pick = rng.shuffle(cases.filter(function (c) { return typeof c.queries === 'number'; })).slice(0, opts.n || 5);
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= pick.length) {
          BS.ui.mount(box, BS.ui.h('p', null, 'Tugadi: ' + ok + '/' + pick.length));
          if (opts.onDone) opts.onDone({ ok: ok, total: pick.length, format: 'trace' });
          return;
        }
        var c = pick[i];
        var inp = BS.ui.h('input', { type: 'number', placeholder: 'so\u2018rovlar soni' });
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, c.topic + ' · ' + c.id),
          BS.ui.code('py', c.code),
          BS.ui.h('label', null, 'Nechta SQL? ', inp),
          BS.ui.h('button', { class: 'btn', onclick: function () {
            if (parseInt(inp.value, 10) === c.queries) ok++;
            i++;
            stat.textContent = ok + '/' + i;
            show();
          }}, 'Tekshir')));
      }
      BS.ui.mount(root, BS.ui.h('div', null, BS.ui.h('h2', null, 'ORM Arena'), stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
