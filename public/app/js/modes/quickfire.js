/* Quick-Fire — tanlov savollari, combo. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  function allQuestions() {
    var d = (BS.data || {}), out = [];
    ['questions_m00','questions_m01','questions_m02','questions_m03','questions_m04','questions_m05'].forEach(function (k) {
      var arr = d[k]; if (Array.isArray(arr)) out = out.concat(arr.filter(function (q) { return q.format === 'choice' && q.options; }));
    });
    return out;
  }
  BS.modes.quickfire = {
    id: 'quickfire', title: 'Quick-Fire',
    start: function (opts) {
      opts = opts || {};
      var pool = allQuestions();
      if (!pool.length) {
        var empty = BS.ui.h('p', null, 'Savollar yuklanmagan.');
        if (opts.mount) BS.ui.mount(opts.mount, empty);
        return { el: empty };
      }
      var rng = BS.rng.create(opts.seed || Date.now());
      var i = 0, combo = 0, ok = 0, n = Math.min(opts.n || 8, pool.length);
      var order = rng.shuffle(pool.slice()).slice(0, n);
      var root = BS.ui.h('div'), qbox = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= order.length) {
          BS.ui.mount(qbox, BS.ui.h('div', null,
            BS.ui.h('h3', null, 'Tugadi'),
            BS.ui.h('p', null, ok + '/' + order.length + ' to\u2018g\u2018ri · combo max ishlatildi')));
          if (opts.onDone) opts.onDone({ ok: ok, total: order.length, format: 'choice' });
          return;
        }
        var q = order[i];
        var optsEl = q.options.map(function (o) {
          return BS.ui.h('button', { class: 'btn sec', style: { display: 'block', margin: '6px 0', width: '100%' }, onclick: function () {
            var good = (q.accepted || []).indexOf(o) >= 0;
            if (good) { ok++; combo++; } else combo = 0;
            i++;
            stat.textContent = 'To\u2018g\u2018ri ' + ok + ' · combo ' + combo + ' · ' + i + '/' + order.length;
            show();
          }}, o);
        });
        BS.ui.mount(qbox, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, q.prompt),
          optsEl));
      }
      BS.ui.mount(root, BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Quick-Fire'),
        stat, qbox));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
