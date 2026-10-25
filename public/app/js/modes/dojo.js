/* Syntax Dojo — kodni yoddan yozish (token diff). */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.dojo = {
    id: 'dojo', title: 'Syntax Dojo',
    start: function (opts) {
      opts = opts || {};
      var target = opts.target || (
        'def index(request):\n' +
        '    if request.user.is_authenticated:\n' +
        '        return redirect("/book-list/")\n' +
        '    return redirect("/login/")'
      );
      var box = BS.ui.h('div'), out = BS.ui.h('div'), ed;
      function check() {
        var r = BS.diff.report(ed.getValue(), target), errs = [];
        r.lines.forEach(function (l) {
          if ((l.status === 'changed' || l.status === 'extra') && l.studentLine)
            errs.push({ line: l.studentLine, msg: l.indentOnly ? 'indent' : 'token' });
        });
        ed.markErrors(errs);
        BS.ui.mount(out, BS.ui.h('p', { class: 'score' },
          'To\u2018g\u2018ri: ' + r.ok + '/' + r.total + (r.exact ? ' \u2705' : '')));
        if (r.exact && opts.onDone) opts.onDone({ ok: true, format: 'write' });
      }
      var root = BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Syntax Dojo'),
        BS.ui.h('p', { class: 'sub' }, 'Quyidagi funksiyani yoddan yozing.'),
        BS.ui.h('div', { class: 'card' }, (function () {
          var p = BS.ui.h('pre'); BS.ui.rawHTML(p, BS.hl.highlight('py', target)); return p;
        })()),
        box,
        BS.ui.h('button', { class: 'btn', onclick: check }, 'Tekshir'),
        out
      );
      if (opts.mount) BS.ui.mount(opts.mount, root);
      ed = BS.editor.create(box, { lang: 'py', minRows: 6 });
      return { el: root, check: check };
    }
  };
})();
