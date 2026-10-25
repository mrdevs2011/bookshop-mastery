/* Refactor Gauntlet */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.gauntlet = {
    id: 'gauntlet', title: 'Refactor Gauntlet',
    start: function (opts) {
      opts = opts || {};
      var bugs = ((BS.data || {}).bugs || []).filter(function (b) { return b.severity >= 3; }).slice(0, 5);
      var i = 0, ok = 0;
      var root = BS.ui.h('div'), box = BS.ui.h('div'), stat = BS.ui.h('p', { class: 'score' });
      function show() {
        if (i >= bugs.length) {
          BS.ui.mount(box, BS.ui.h('p', null, 'Tugadi: ' + ok + '/' + bugs.length));
          if (opts.onDone) opts.onDone({ ok: ok, total: bugs.length, format: 'debug' });
          return;
        }
        var b = bugs[i];
        var inp = BS.ui.h('input', { type: 'text', placeholder: 'tuzatish kalit sozi', style: { width: '100%' } });
        BS.ui.mount(box, BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, b.id + ': ' + b.title),
          BS.ui.h('p', { class: 'sub' }, b.mech.slice(0, 160)),
          inp,
          BS.ui.h('button', { class: 'btn', onclick: function () {
            var t = (inp.value || '').toLowerCase();
            var fix = (b.fix || '').toLowerCase();
            if (t.length >= 3 && fix.indexOf(t.slice(0, Math.min(8, t.length))) >= 0) ok++;
            i++;
            stat.textContent = ok + '/' + i;
            show();
          }}, 'Tekshir')));
      }
      BS.ui.mount(root, BS.ui.h('div', null, BS.ui.h('h2', null, 'Refactor Gauntlet'), stat, box));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      show();
      return { el: root };
    }
  };
})();
