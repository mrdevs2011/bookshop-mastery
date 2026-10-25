/* Terminal — haqiqiy chiqish terminal.js dan. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.terminal = {
    id: 'terminal', title: 'Terminal',
    start: function (opts) {
      opts = opts || {};
      var items = ((BS.data || {}).terminal || {}).items || [];
      var sample = items.filter(function (x) { return x.cmd && /migrate|showmigrations|check/.test(x.cmd); }).slice(0, 3);
      if (!sample.length && items.length) sample = items.slice(0, 3);
      var root = BS.ui.h('div');
      BS.ui.mount(root, BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Terminal'),
        BS.ui.h('p', { class: 'sub' }, 'Haqiqiy manage.py chiqishlari (capture_cmds).'),
        sample.map(function (it) {
          return BS.ui.h('div', { class: 'card' },
            BS.ui.h('pre', null, '$ ' + (it.cmd || it.title || '')),
            BS.ui.h('pre', { style: { maxHeight: '120px', overflow: 'auto', fontSize: '12px' } }, (it.out || it.clean || '').slice(0, 800)));
        }),
        sample.length ? null : BS.ui.h('p', null, 'terminal.js bo\u2018sh')));
      if (opts.mount) BS.ui.mount(opts.mount, root);
      if (opts.onDone) opts.onDone({ ok: true, format: 'trace' });
      return { el: root };
    }
  };
})();
