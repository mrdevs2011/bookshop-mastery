/* Terminal — haqiqiy chiqishlardan quiz (kamida 10). */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.terminal = {
    id: 'terminal', title: 'Terminal',
    start: function (opts) {
      opts = opts || {};
      var items = ((BS.data || {}).terminal || {}).items || [];
      if (!items.length) {
        var empty = BS.ui.h('p', null, 'terminal.js bo\u2018sh');
        if (opts.mount) BS.ui.mount(opts.mount, empty);
        return { el: empty };
      }
      var rng = BS.rng.create(opts.seed || Date.now());
      // Prefer interesting commands
      var pool = items.filter(function (x) { return x.cmd && x.out; });
      if (pool.length < 10) pool = items.slice();
      var order = rng.shuffle(pool).slice(0, Math.min(opts.n || 10, pool.length));
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });

      function show() {
        if (i >= order.length) {
          BS.ui.mount(box, BS.ui.h('div', null,
            BS.ui.h('h3', null, 'Tugadi'),
            BS.ui.h('p', null, ok + '/' + order.length + ' to\u2018g\u2018ri')
          ));
          if (opts.onDone) opts.onDone({ ok: ok, total: order.length, format: 'trace' });
          return;
        }
        var it = order[i];
        var cmd = it.cmd || it.title || '';
        var out = (it.out || it.clean || '').trim();
        // Simple quiz: show cmd, ask first line or key phrase of output
        var firstLine = out.split('\n').filter(Boolean)[0] || out.slice(0, 40);
        var choices = [firstLine];
        // distractors from other items
        var others = rng.shuffle(pool.filter(function (x) { return x !== it; })).slice(0, 3);
        others.forEach(function (o) {
          var fl = (o.out || '').split('\n').filter(Boolean)[0];
          if (fl && choices.indexOf(fl) < 0) choices.push(fl);
        });
        while (choices.length < 4) choices.push('No output / xato');
        choices = rng.shuffle(choices).slice(0, 4);

        var btns = choices.map(function (c) {
          return BS.ui.h('button', {
            class: 'btn sec',
            style: { display: 'block', margin: '6px 0', width: '100%', textAlign: 'left' },
            onclick: function () {
              if (c === firstLine) ok++;
              i++;
              stat.textContent = 'To\u2018g\u2018ri ' + ok + ' · ' + i + '/' + order.length;
              show();
            }
          }, c.slice(0, 120));
        });

        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, 'Buyruq:'),
          BS.ui.h('pre', null, '$ ' + cmd),
          BS.ui.h('p', null, 'Chiqishning birinchi qatori qaysi?'),
          btns
        ));
      }

      BS.ui.mount(root, BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Terminal'),
        BS.ui.h('p', { class: 'sub' }, 'Haqiqiy manage.py chiqishlarini tanlang.'),
        stat, box
      ));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
