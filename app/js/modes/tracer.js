/* Request Flight — ssenariydan status/redirect bashorat (soddalashtirilgan). */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.tracer = {
    id: 'tracer', title: 'Request Flight',
    start: function (opts) {
      opts = opts || {};
      var scenarios = ((BS.data || {}).scenarios || {}).single || [];
      var s = opts.scenario || scenarios[0] || {
        id: 'demo', actor: 'anon', method: 'GET', path: '/book-list/',
        expect: { status: 302, location: '/login/' }
      };
      var statusIn = BS.ui.h('input', { type: 'number', placeholder: 'status', style: { width: '100px' } });
      var locIn = BS.ui.h('input', { type: 'text', placeholder: 'Location (ixtiyoriy)', style: { width: '200px' } });
      var msg = BS.ui.h('p');
      function check() {
        var st = parseInt(statusIn.value, 10);
        var exp = s.expect || s.result || {};
        var ok = st === (exp.status || exp.status_code);
        if (exp.location && locIn.value) ok = ok && locIn.value.replace(/\/$/, '') === String(exp.location).replace(/\/$/, '');
        msg.textContent = ok ? '\u2705 To\u2018g\u2018ri bashorat' : '\u274c Noto\u2018g\u2018ri (kutilgan status: ' + (exp.status || exp.status_code) + ')';
        if (ok && opts.onDone) opts.onDone({ ok: true, format: 'trace' });
      }
      var root = BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Request Flight'),
        BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, 'Aktiyor: ' + (s.actor || '?')),
          BS.ui.h('p', null, (s.method || 'GET') + ' ' + (s.path || s.url || '')),
          s.payload ? BS.ui.h('pre', null, JSON.stringify(s.payload)) : null),
        BS.ui.h('label', null, 'Status: ', statusIn),
        BS.ui.h('label', null, ' Location: ', locIn),
        BS.ui.h('div', null, BS.ui.h('button', { class: 'btn', onclick: check }, 'Tekshir')),
        msg);
      if (opts.mount) BS.ui.mount(opts.mount, root);
      return { el: root };
    }
  };
})();
