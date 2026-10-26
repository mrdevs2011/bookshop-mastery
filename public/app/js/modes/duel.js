/* Diff Duel — ikki deyarli bir xil kod farqini topish. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.duel = {
    id: 'duel', title: 'Diff Duel',
    start: function (opts) {
      opts = opts || {};
      var a = opts.a || 'if request.method == "GET":\n    return render(request, "x.html")';
      var b = opts.b || 'if request.method == "GET"\n    return render(request, "x.html")';
      var answer = opts.answer || ':';
      var input = BS.ui.h('input', { type: 'text', placeholder: 'Farq (belgi yoki qator)', style: { width: '100%' } });
      var msg = BS.ui.h('p');
      function check() {
        var v = (input.value || '').trim();
        var ok = v === answer || v.indexOf(answer) >= 0;
        msg.textContent = ok ? '\u2705 Topdingiz!' : '\u274c Yana urinib ko\u2018ring';
        if (ok && opts.onDone) opts.onDone({ ok: true, format: 'debug' });
      }
      var root = BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Diff Duel'),
        BS.ui.h('p', { class: 'sub' }, 'Ikki fragment farqini toping (bir belgi ham bo\u2018lishi mumkin).'),
        BS.ui.h('div', { class: 'card' }, BS.ui.h('p', { class: 'sub' }, 'A'), BS.ui.code('py', a)),
        BS.ui.h('div', { class: 'card' }, BS.ui.h('p', { class: 'sub' }, 'B'), BS.ui.code('py', b)),
        input,
        BS.ui.h('button', { class: 'btn', onclick: check }, 'Tekshir'),
        msg);
      if (opts.mount) BS.ui.mount(opts.mount, root);
      return { el: root };
    }
  };
})();
