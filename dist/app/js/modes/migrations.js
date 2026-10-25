/* Migration Time Machine — tartib. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  var STEPS = [
    { id: '0001', t: 'Book yaratildi' },
    { id: '0002', t: 'nashr_sanasi qo\u2018shildi' },
    { id: '0003', t: 'rename muallif + yaratilgan_sanasi' },
    { id: '0004', t: 'user FK' },
    { id: '0005', t: 'url' },
    { id: '0006', t: 'public' },
    { id: '0007', t: 'muallif o\u2018chirildi' },
    { id: '0008', t: 'BookView' }
  ];
  BS.modes.migrations = {
    id: 'migrations', title: 'Migration Time Machine',
    start: function (opts) {
      opts = opts || {};
      var rng = BS.rng.create(opts.seed || 3);
      var shuffled = rng.shuffle(STEPS.map(function (s, i) { return { s: s, i: i }; }));
      var picked = [];
      var root = BS.ui.h('div'), pool = BS.ui.h('div'), ans = BS.ui.h('div'), msg = BS.ui.h('p');
      function render() {
        BS.ui.mount(pool, BS.ui.h('div', null, shuffled.filter(function (x) { return picked.indexOf(x) < 0; }).map(function (x) {
          return BS.ui.h('button', { class: 'btn sec', style: { display: 'block', margin: '3px 0' }, onclick: function () {
            picked.push(x); render();
          }}, x.s.id + ' — ' + x.s.t);
        })));
        BS.ui.mount(ans, BS.ui.h('div', { class: 'card' }, picked.map(function (x, idx) {
          return BS.ui.h('div', null, (idx + 1) + '. ' + x.s.id + ' ' + x.s.t);
        })));
      }
      function check() {
        var good = picked.length === STEPS.length && picked.every(function (x, i) { return x.i === i; });
        msg.textContent = good ? '\u2705 To\u2018g\u2018ri tarix!' : '\u274c Noto\u2018g\u2018ri tartib';
        if (good && opts.onDone) opts.onDone({ ok: true, format: 'order' });
      }
      BS.ui.mount(root, BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Migration Time Machine'),
        BS.ui.h('p', { class: 'sub' }, '0001–0008 ni to\u2018g\u2018ri tartibga soling.'),
        BS.ui.h('h3', null, 'Hovuz'), pool, BS.ui.h('h3', null, 'Tarix'), ans,
        BS.ui.h('button', { class: 'btn', onclick: check }, 'Tekshir'),
        BS.ui.h('button', { class: 'btn sec', onclick: function () { picked = []; msg.textContent = ''; render(); } }, 'Tozala'),
        msg));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      render();
      return { el: root };
    }
  };
})();
