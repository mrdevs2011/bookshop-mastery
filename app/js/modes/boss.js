/* Boss Fight — P5 */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  function pool() {
    var d = BS.data || {}, out = [];
    for (var k in d) if (k.indexOf('questions_') === 0 && Array.isArray(d[k]))
      out = out.concat(d[k].filter(function (q) { return q.format === 'choice' && q.options; }));
    return out;
  }
  BS.modes.boss = {
    id: 'boss', title: 'Boss Fight',
    start: function (opts) {
      opts = opts || {};
      var items = pool();
      var rng = BS.rng.create(opts.seed || 99);
      var n = opts.n || 10;
      var pick = rng.shuffle(items.slice()).slice(0, Math.min(n, items.length));
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (!pick.length) { BS.ui.mount(box, BS.ui.h('p', null, 'Savollar yo‘q')); return; }
        if (i >= pick.length) {
          BS.ui.mount(box, BS.ui.h('div', null, BS.ui.h('h3', null, 'Tugadi'), BS.ui.h('p', null, ok + '/' + pick.length)));
          if (opts.onDone) opts.onDone({ ok: ok, total: pick.length, format: 'choice' });
          return;
        }
        var q = pick[i];
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', { class: 'sub' }, 'Modul yakuni'),
          BS.ui.h('p', null, q.prompt),
          q.options.map(function (o) {
            return BS.ui.h('button', { class: 'btn sec', style: { display: 'block', margin: '4px 0', width: '100%' }, onclick: function () {
              if ((q.accepted || []).indexOf(o) >= 0) ok++;
              i++;
              stat.textContent = ok + '/' + i;
              show();
            } }, o);
          })));
      }
      BS.ui.mount(root, BS.ui.h('div', null, BS.ui.h('h2', null, 'Boss Fight'), stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
