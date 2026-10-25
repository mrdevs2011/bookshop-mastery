/* boot.js — P1 kirish nuqtasi: yadro modullarini ko'rsatadigan bosh sahifa + Kod arena (editor/diff/normalize namoyishi).
   Keyingi fazalarda dashboard va o'yin rejimlari shu router'ga ulanadi. */
(function () {
  'use strict';
  var BS = window.BS, h = BS.ui.h;
  BS.version = 'P1';
  var CORE = ['rng', 'srs', 'ledger', 'state', 'mastery', 'selector', 'router', 'normalize', 'diff', 'hl', 'ui', 'editor'];

  // haqiqiy kod: BookShopBomba/core/views.py:9-13 (R1: manba — haqiqiy kod; keyin data/ ga o'tadi)
  var TARGET = [
    'def index(request):',
    '    """Bosh sahifa – loyihaning kirish sahifasi."""',
    '    if request.user.is_authenticated:',
    '        return redirect("/book-list/")',
    '    return redirect("/login/")'
  ].join('\n');

  function shell(active, content) {
    var st = BS.state.get(), lv = BS.state.levelFor(st.profile.xp);
    var nav = [['/', 'Bosh sahifa'], ['/arena', 'Kod arena (demo)']].map(function (n) {
      return h('a', { href: '#' + n[0], class: 'nav-item' + (active === n[0] ? ' active' : ''), style: { textDecoration: 'none' } }, n[1]);
    });
    return [
      h('nav', { class: 'sidebar' },
        h('div', { class: 'brand' }, h('h1', null, 'BookShop ', h('span', null, 'Mastery')), h('p', null, 'Engine · ' + BS.version)),
        h('div', { class: 'progress-wrap' }, lv.name + ' · ' + st.profile.xp + ' XP' + (lv.next ? ' / ' + lv.next.xp : ''),
          h('div', { class: 'progress-bar' }, h('i', { style: { width: lv.next ? Math.min(100, 100 * (st.profile.xp - BS.state.LEVELS[lv.index].xp) / (lv.next.xp - BS.state.LEVELS[lv.index].xp)) + '%' : '100%' } }))),
        nav,
        h('a', { href: '../index.html', class: 'nav-item', style: { textDecoration: 'none' } }, 'Darslik →'),
        h('a', { href: '../tests/run.html', class: 'nav-item', style: { textDecoration: 'none' } }, 'Birlik testlar →')),
      h('main', { class: 'main' }, content)
    ];
  }
  function render(active, content) { BS.ui.mount(document.getElementById('app'), h('div', { style: { display: 'contents' } }, shell(active, content))); }

  function home() {
    var st = BS.state.get(), v = BS.state.checkIntegrity();
    render('/', [
      h('h1', { class: 't' }, 'Poydevor tayyor'),
      h('p', { class: 'sub' }, 'P1: yadro modullari yuklandi. Kontent va o‘yin rejimlari keyingi fazalarda.'),
      h('div', { class: 'card' }, h('h3', null, 'Yadro modullari'),
        h('ul', { class: 'core-list' }, CORE.map(function (m) { return h('li', null, (BS[m] ? '✅ ' : '❌ ') + m); }))),
      h('div', { class: 'card' }, h('h3', null, 'Holat'),
        h('p', { class: 'score' }, 'Saqlash: ' + (window.localStorage && !BS.state.get().__mem ? 'localStorage' : 'xotira') + ' · urinishlar: ' + st.ledger.length +
          ' · yaxlitlik: ', h('b', null, v.ok ? 'zanjir butun' : 'BUZILGAN (qator ' + v.at + ')')))
    ]);
  }

  function arena() {
    var out = h('div'), box = h('div'), ed;
    function check() {
      var r = BS.diff.report(ed.getValue(), TARGET), errs = [];
      r.lines.forEach(function (l) { if ((l.status === 'changed' || l.status === 'extra') && l.studentLine) errs.push({ line: l.studentLine, msg: l.status === 'extra' ? 'ortiqcha qator' : (l.indentOnly ? 'indentatsiya xato' : 'token xato') }); });
      ed.markErrors(errs);
      BS.ui.mount(out, h('div', null,
        h('p', { class: 'score' }, 'To‘g‘ri qatorlar: ', h('b', null, r.ok + ' / ' + r.total), r.exact ? ' — ✅ aynan to‘g‘ri' : ''),
        r.lines.map(function (l) {
          var icon = { ok: '✓', changed: '≠', extra: '+', missing: '−' }[l.status];
          var body = l.status === 'changed'
            ? (l.indentOnly ? 'indentatsiya: ' + l.indent.got + ' → ' + l.indent.expected : l.ops.map(function (o) { return h('span', { class: o.op === 'eq' ? '' : 'diff-' + o.op }, o.text + ' '); }))
            : l.text;
          return h('div', { class: 'rep-row ' + l.status }, h('span', { class: 'st' }, icon), h('span', null, body));
        })));
    }
    render('/arena', [
      h('h1', { class: 't' }, 'Kod arena (demo)'),
      h('p', { class: 'sub' }, 'Pastdagi funksiyani yoddan yoz. Probel, qo‘shtirnoq turi va izoh farqi xato emas; belgi/indentatsiya xatosi — xato.'),
      h('div', { class: 'card' }, h('h3', null, 'Maqsad (core/views.py:9–13)'), (function () { var p = h('pre'); BS.ui.rawHTML(p, BS.hl.highlight('py', TARGET)); return p; })()),
      box,
      h('div', { class: 'row' }, h('button', { class: 'btn', onclick: check }, 'Tekshir'), h('button', { class: 'btn sec', onclick: function () { ed.setValue(''); ed.clearErrors(); BS.ui.clear(out); } }, 'Tozala')),
      out
    ]);
    ed = BS.editor.create(box, { lang: 'py', minRows: 8 });
    ed.focus();
  }

  BS.state.init();
  BS.router.add('/', home).add('/arena', arena);
  BS.router.start(function () { BS.router.go('/'); });
})();
