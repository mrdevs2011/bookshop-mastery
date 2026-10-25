/* Teach-back */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  var PROMPTS = [
    { q: 'N+1 nima va qanday tuzatiladi?', keys: ['n+1', 'annotate', 'prefetch', 'sql'] },
    { q: 'CSRF nima uchun kerak?', keys: ['csrf', 'post', 'begona', 'middleware'] },
    { q: 'null va blank farqi?', keys: ['null', 'blank', 'db', 'forma'] }
  ];
  BS.modes.teachback = {
    id: 'teachback', title: 'Teach-back',
    start: function (opts) {
      opts = opts || {};
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= PROMPTS.length) {
          BS.ui.mount(box, BS.ui.h('p', null, 'Tugadi: ' + ok + '/' + PROMPTS.length));
          if (opts.onDone) opts.onDone({ ok: ok, total: PROMPTS.length, format: 'teach' });
          return;
        }
        var p = PROMPTS[i];
        var ta = BS.ui.h('textarea', { rows: 4, style: { width: '100%' }, placeholder: '2-4 gap...' });
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, p.q), ta,
          BS.ui.h('button', { class: 'btn', onclick: function () {
            var t = (ta.value || '').toLowerCase();
            var hits = p.keys.filter(function (k) { return t.indexOf(k) >= 0; }).length;
            if (hits >= 1) ok++;
            i++; stat.textContent = ok + '/' + i; show();
          }}, 'Yuborish')));
      }
      BS.ui.mount(root, BS.ui.h('div', null, BS.ui.h('h2', null, 'Teach-back'), stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
