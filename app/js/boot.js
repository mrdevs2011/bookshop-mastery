/* boot.js — P3: yadro + kontent + 1-batch rejimlar */
(function () {
  'use strict';
  var BS = window.BS, h = BS.ui.h;
  BS.version = 'P3';
  var CORE = ['rng', 'srs', 'ledger', 'state', 'mastery', 'selector', 'router', 'normalize', 'diff', 'hl', 'ui', 'editor'];
  var MODES = [
    { path: '/dojo', id: 'dojo', title: 'Syntax Dojo' },
    { path: '/parsons', id: 'parsons', title: 'Parsons+' },
    { path: '/quickfire', id: 'quickfire', title: 'Quick-Fire' },
    { path: '/duel', id: 'duel', title: 'Diff Duel' },
    { path: '/tracer', id: 'tracer', title: 'Request Flight' }
  ];

  function shell(active, content) {
    var st = BS.state.get(), lv = BS.state.levelFor(st.profile.xp);
    var links = [['/', 'Bosh'], ['/arena', 'Kod arena']].concat(MODES.map(function (m) { return [m.path, m.title]; }));
    var nav = links.map(function (n) {
      return h('a', { href: '#' + n[0], class: 'nav-item' + (active === n[0] ? ' active' : ''), style: { textDecoration: 'none' } }, n[1]);
    });
    return [
      h('nav', { class: 'sidebar' },
        h('div', { class: 'brand' }, h('h1', null, 'BookShop ', h('span', null, 'Mastery')), h('p', null, 'Engine · ' + BS.version)),
        h('div', { class: 'progress-wrap' }, lv.name + ' · ' + st.profile.xp + ' XP',
          h('div', { class: 'progress-bar' }, h('i', { style: { width: lv.next ? Math.min(100, 100 * (st.profile.xp - BS.state.LEVELS[lv.index].xp) / (lv.next.xp - BS.state.LEVELS[lv.index].xp)) + '%' : '100%' } }))),
        nav,
        h('a', { href: '../index.html', class: 'nav-item', style: { textDecoration: 'none' } }, 'Darslik →')),
      h('main', { class: 'main' }, content)
    ];
  }
  function render(active, content) {
    BS.ui.mount(document.getElementById('app'), h('div', { style: { display: 'contents' } }, shell(active, content)));
  }

  function home() {
    var st = BS.state.get(), v = BS.state.checkIntegrity();
    var nC = (BS.data && BS.data.concepts) ? BS.data.concepts.length : 0;
    var nB = (BS.data && BS.data.bugs) ? BS.data.bugs.length : 0;
    var nQ = 0;
    ['questions_m00','questions_m01','questions_m02','questions_m03','questions_m04','questions_m05'].forEach(function (k) {
      if (BS.data && Array.isArray(BS.data[k])) nQ += BS.data[k].length;
    });
    render('/', [
      h('h1', { class: 't' }, 'BookShop Mastery'),
      h('p', { class: 'sub' }, 'P3: kontent A + 1-batch rejimlar.'),
      h('div', { class: 'card' }, h('h3', null, 'Bank'),
        h('p', null, 'Konsept: ' + nC + ' · Bug: ' + nB + ' · Savol (M00–M05): ' + nQ)),
      h('div', { class: 'card' }, h('h3', null, 'Rejimlar'),
        h('div', { class: 'mode-grid' }, MODES.map(function (m) {
          return h('a', { href: '#' + m.path, class: 'card', style: { textDecoration: 'none', color: 'inherit' } }, h('strong', null, m.title));
        }))),
      h('div', { class: 'card' }, h('h3', null, 'Yadro'),
        h('ul', { class: 'core-list' }, CORE.map(function (m) { return h('li', null, (BS[m] ? '✅ ' : '❌ ') + m); }))),
      h('div', { class: 'card' }, h('h3', null, 'Holat'),
        h('p', { class: 'score' }, 'Urinishlar: ' + st.ledger.length + ' · yaxlitlik: ', h('b', null, v.ok ? 'butun' : 'BUZILGAN')))
    ]);
  }

  function arena() {
    var TARGET = 'def index(request):\n    if request.user.is_authenticated:\n        return redirect("/book-list/")\n    return redirect("/login/")';
    var out = h('div'), box = h('div'), ed;
    function check() {
      var r = BS.diff.report(ed.getValue(), TARGET), errs = [];
      r.lines.forEach(function (l) { if ((l.status === 'changed' || l.status === 'extra') && l.studentLine) errs.push({ line: l.studentLine, msg: l.status }); });
      ed.markErrors(errs);
      BS.ui.mount(out, h('p', { class: 'score' }, 'To\u2018g\u2018ri: ' + r.ok + '/' + r.total));
    }
    render('/arena', [
      h('h1', { class: 't' }, 'Kod arena'),
      h('div', { class: 'card' }, h('pre', null, TARGET)),
      box,
      h('button', { class: 'btn', onclick: check }, 'Tekshir'),
      out
    ]);
    ed = BS.editor.create(box, { lang: 'py', minRows: 6 });
  }

  function modePage(m) {
    return function () {
      var mount = h('div');
      render(m.path, [mount]);
      if (BS.modes && BS.modes[m.id]) BS.modes[m.id].start({ mount: mount });
      else BS.ui.mount(mount, h('p', null, 'Rejim yuklanmadi: ' + m.id));
    };
  }

  BS.state.init();
  BS.router.add('/', home).add('/arena', arena);
  MODES.forEach(function (m) { BS.router.add(m.path, modePage(m)); });
  BS.router.start(function () { BS.router.go('/'); });
})();
