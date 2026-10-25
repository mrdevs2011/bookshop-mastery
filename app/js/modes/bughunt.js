/* Bug Hunt — B01–B22 dan xato topish. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.bughunt = {
    id: 'bughunt', title: 'Bug Hunt',
    start: function (opts) {
      opts = opts || {};
      var bugs = (BS.data && BS.data.bugs) || [];
      if (!bugs.length) {
        var e = BS.ui.h('p', null, 'Bug banki yo\u2018q');
        if (opts.mount) BS.ui.mount(opts.mount, e);
        return { el: e };
      }
      var rng = BS.rng.create(opts.seed || 42);
      var order = rng.shuffle(bugs.slice()).slice(0, opts.n || 5);
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= order.length) {
          BS.ui.mount(box, BS.ui.h('div', null, BS.ui.h('h3', null, 'Tugadi'), BS.ui.h('p', null, ok + '/' + order.length)));
          if (opts.onDone) opts.onDone({ ok: ok, total: order.length, format: 'debug' });
          return;
        }
        var b = order[i];
        var opts2 = [b.title, 'CSRF yo\u2018q', 'N+1 SQL', 'None return', '__str__ yo\u2018q'].filter(function (x, idx, a) { return a.indexOf(x) === idx; });
        opts2 = rng.shuffle(opts2);
        if (opts2.indexOf(b.title) < 0) opts2[0] = b.title;
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, 'Fayl: ' + b.file + (b.line ? ':' + b.line : '')),
          BS.ui.h('p', null, b.mech.slice(0, 180) + '...'),
          BS.ui.h('p', null, 'Bu qanday xato?'),
          opts2.map(function (o) {
            return BS.ui.h('button', { class: 'btn sec', style: { display: 'block', margin: '4px 0', width: '100%' }, onclick: function () {
              if (o === b.title) ok++;
              i++;
              stat.textContent = '\u2713 ' + ok + ' / ' + i;
              show();
            }}, o);
          })));
      }
      BS.ui.mount(root, BS.ui.h('div', null, BS.ui.h('h2', null, 'Bug Hunt'), stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
