/* boot.js — to'liq shell: home, arena, rejimlar, imtihon, statistika */
(function () {
  'use strict';
  var BS = window.BS, h = BS.ui.h;
  BS.version = '1.0';
  var CORE = ['rng', 'srs', 'ledger', 'state', 'mastery', 'selector', 'router', 'normalize', 'diff', 'hl', 'ui', 'editor'];
  var MODES = [
    { path: '/dojo', id: 'dojo', title: 'Syntax Dojo' },
    { path: '/parsons', id: 'parsons', title: 'Parsons+' },
    { path: '/quickfire', id: 'quickfire', title: 'Quick-Fire' },
    { path: '/duel', id: 'duel', title: 'Diff Duel' },
    { path: '/tracer', id: 'tracer', title: 'Request Flight' },
    { path: '/bughunt', id: 'bughunt', title: 'Bug Hunt' },
    { path: '/matrix', id: 'matrix', title: 'Permission Matrix' },
    { path: '/orm', id: 'orm', title: 'ORM Arena' },
    { path: '/migrations', id: 'migrations', title: 'Migration TM' },
    { path: '/templates', id: 'templates', title: 'Template Forge' },
    { path: '/terminal', id: 'terminal', title: 'Terminal' },
    { path: '/reverse', id: 'reverse', title: 'Reverse Engineer' },
    { path: '/sprint', id: 'sprint', title: 'Sprint' },
    { path: '/boss', id: 'boss', title: 'Boss Fight' },
    { path: '/teachback', id: 'teachback', title: 'Teach-back' },
    { path: '/gauntlet', id: 'gauntlet', title: 'Refactor Gauntlet' },
    { path: '/daily', id: 'daily', title: 'Daily Mission' },
    { path: '/chaos', id: 'chaos', title: 'Chaos Mode' }
  ];

  function countQuestions() {
    var n = 0;
    for (var i = 0; i <= 16; i++) {
      var k = 'questions_m' + (i < 10 ? '0' + i : '' + i);
      if (BS.data && Array.isArray(BS.data[k])) n += BS.data[k].length;
    }
    return n;
  }

  function shell(active, content) {
    var st = BS.state.get(), lv = BS.state.levelFor(st.profile.xp);
    var links = [
      ['/', 'Bosh'],
      ['/arena', 'Kod arena'],
      ['/stats', 'Statistika'],
      ['/exam', 'Imtihon 9.0']
    ].concat(MODES.map(function (m) { return [m.path, m.title]; }));
    var nav = links.map(function (n) {
      return h('a', {
        href: '#' + n[0],
        class: 'nav-item' + (active === n[0] ? ' active' : ''),
        style: { textDecoration: 'none' }
      }, n[1]);
    });
    return [
      h('nav', { class: 'sidebar', 'aria-label': 'Asosiy menyu' },
        h('div', { class: 'brand' },
          h('h1', null, 'BookShop ', h('span', null, 'Mastery')),
          h('p', null, 'Engine · v' + BS.version)),
        h('div', { class: 'progress-wrap' },
          lv.name + ' · ' + st.profile.xp + ' XP',
          h('div', { class: 'progress-bar' },
            h('i', {
              style: {
                width: lv.next
                  ? Math.min(100, 100 * (st.profile.xp - BS.state.LEVELS[lv.index].xp) / (lv.next.xp - BS.state.LEVELS[lv.index].xp)) + '%'
                  : '100%'
              }
            }))),
        nav,
        h('a', { href: '../index.html', class: 'nav-item', style: { textDecoration: 'none' } }, 'Darslik →')),
      h('main', { class: 'main', id: 'main-content' }, content)
    ];
  }

  function render(active, content) {
    BS.ui.mount(document.getElementById('app'), h('div', { style: { display: 'contents' } }, shell(active, content)));
  }

  function home() {
    var st = BS.state.get(), v = BS.state.checkIntegrity();
    var nC = (BS.data && BS.data.concepts) ? BS.data.concepts.length : 0;
    var nB = (BS.data && BS.data.bugs) ? BS.data.bugs.length : 0;
    var nQ = countQuestions();
    var nE = (BS.data && BS.data.exam_bank) ? BS.data.exam_bank.length : 0;
    var pred = { band: '—', total: '—' };
    try {
      if (BS.examScoring) pred = BS.examScoring.predictBand(st);
    } catch (e) {}
    render('/', [
      h('h1', { class: 't' }, 'BookShop Mastery'),
      h('p', { class: 'sub' }, 'Django · o\u2018zbekcha · adaptiv · BOOKSHOP 9.0'),
      h('div', { class: 'card' },
        h('h3', null, 'Bank'),
        h('p', null, 'Konsept: ' + nC + ' · Bug: ' + nB + ' · Mashq: ' + nQ + ' · Imtihon: ' + nE)),
      h('div', { class: 'card' },
        h('h3', null, 'Band bashorati'),
        h('p', { class: 'score' }, String(pred.band),
          h('span', { class: 'sub' }, ' taxminiy ball ' + pred.total))),
      h('div', { class: 'card' },
        h('h3', null, 'Rejimlar'),
        h('div', { class: 'mode-grid' }, MODES.map(function (m) {
          return h('a', {
            href: '#' + m.path,
            class: 'card',
            style: { textDecoration: 'none', color: 'inherit' }
          }, h('strong', null, m.title));
        }))),
      h('div', { class: 'card' },
        h('h3', null, 'Tez yo\u2018llar'),
        h('p', null,
          h('a', { href: '#/exam', class: 'btn' }, 'Imtihon'),
          ' ',
          h('a', { href: '#/dojo', class: 'btn sec' }, 'Dojo'),
          ' ',
          h('a', { href: '#/stats', class: 'btn sec' }, 'Statistika'))),
      h('div', { class: 'card' },
        h('h3', null, 'Yadro'),
        h('ul', { class: 'core-list' }, CORE.map(function (m) {
          return h('li', null, (BS[m] ? '\u2705 ' : '\u274c ') + m);
        }))),
      h('div', { class: 'card' },
        h('h3', null, 'Holat'),
        h('p', { class: 'score' },
          'Urinishlar: ' + st.ledger.length + ' · yaxlitlik: ',
          h('b', null, v.ok ? 'butun' : 'BUZILGAN')))
    ]);
  }

  function arena() {
    var TARGET = 'def index(request):\n    if request.user.is_authenticated:\n        return redirect("/book-list/")\n    return redirect("/login/")';
    var out = h('div'), box = h('div'), ed;
    function check() {
      var r = BS.diff.report(ed.getValue(), TARGET), errs = [];
      r.lines.forEach(function (l) {
        if ((l.status === 'changed' || l.status === 'extra') && l.studentLine)
          errs.push({ line: l.studentLine, msg: l.status });
      });
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

  function stats() {
    var st = BS.state.get();
    var today = BS.srs ? BS.srs.today() : 0;
    var concepts = (BS.data && BS.data.concepts) || [];
    var mastered = 0, sum = 0, n = 0;
    concepts.forEach(function (c) {
      var r = st.concepts[c.id];
      if (!r) return;
      n++;
      var eff = BS.mastery ? BS.mastery.effectiveScore(r, today) : (r.score || 0);
      sum += eff;
      if (BS.mastery && BS.mastery.isMastered(r, today)) mastered++;
    });
    var avg = n ? Math.round(sum / n) : 0;
    var pred = BS.examScoring ? BS.examScoring.predictBand(st) : { band: '—', total: 0 };
    render('/stats', [
      h('h1', { class: 't' }, 'Statistika'),
      h('div', { class: 'card' },
        h('h3', null, 'Mastery'),
        h('p', null, 'O\u2018zlashtirilgan: ' + mastered + ' / ' + concepts.length),
        h('p', null, 'O\u2018rtacha samarali ball: ' + avg),
        h('p', null, 'Ledger yozuvlari: ' + st.ledger.length)),
      h('div', { class: 'card' },
        h('h3', null, 'Band bashorati'),
        h('p', { class: 'score' }, String(pred.band)),
        h('p', { class: 'sub' }, 'Taxminiy: ' + pred.total + '/100')),
      h('div', { class: 'card' },
        h('h3', null, 'Yaxlitlik'),
        h('p', null, BS.state.checkIntegrity().ok ? 'Ledger butun' : 'Ledger BUZILGAN'))
    ]);
  }

  function examPage() {
    var mount = h('div');
    render('/exam', [mount]);
    if (!BS.exam) {
      BS.ui.mount(mount, h('p', null, 'Imtihon moduli yuklanmadi.'));
      return;
    }
    function showLobby() {
      BS.ui.rawHTML(mount, BS.exam.lobbyHtml());
      mount.querySelectorAll('[data-mock]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-mock');
          runMock(id);
        });
      });
    }
    function runMock(mockId) {
      var session = BS.exam.startMock(mockId);
      if (session.error) {
        BS.ui.mount(mount, h('p', null, session.error));
        return;
      }
      function paint() {
        var it = BS.exam.currentItem();
        if (!it) {
          var result = BS.exam.finish();
          var cert = BS.examCertificate
            ? BS.examCertificate.render({
                band: result.band,
                total: result.total,
                sectionBands: result.sectionBands,
                name: 'Talaba'
              })
            : '';
          BS.ui.mount(mount, h('div', null,
            h('h2', null, 'Natija'),
            h('p', { class: 'score' }, result.total + ' / 100 · band ' + result.band),
            h('p', null, result.passed ? 'O\u2018tdi (≥60)' : 'O\u2018tmadi'),
            h('button', { class: 'btn', onclick: showLobby }, 'Lobbiga'),
            h('button', {
              class: 'btn sec',
              onclick: function () {
                if (BS.examCertificate) BS.examCertificate.openPrint({
                  band: result.band, total: result.total,
                  sectionBands: result.sectionBands, name: 'Talaba'
                });
              }
            }, 'Sertifikat'),
            h('div', { class: 'card' })
          ));
          if (cert) {
            var box = mount.querySelector('.card');
            if (box) BS.ui.rawHTML(box, cert);
          }
          return;
        }
        var sec = it.section;
        var opts = (it.options || []).map(function (o, i) {
          return h('button', {
            class: 'btn sec',
            style: { display: 'block', width: '100%', marginBottom: '6px', textAlign: 'left' },
            onclick: function () {
              var ok = (it.accepted || []).indexOf(o) >= 0;
              BS.exam.submitAnswer(ok ? 1 : 0, {});
              paint();
            }
          }, o);
        });
        BS.ui.mount(mount, h('div', null,
          h('p', { class: 'sub' }, 'Bo\u2018lim ' + sec + ' · ' + it.id + (session.official ? '' : ' · MOCK')),
          h('h2', null, it.prompt),
          opts.length ? h('div', null, opts) : h('div', null,
            h('textarea', { id: 'exam-ans', rows: 4, style: { width: '100%' } }),
            h('button', {
              class: 'btn',
              onclick: function () {
                var val = (document.getElementById('exam-ans') || {}).value || '';
                var ok = (it.accepted || []).some(function (a) {
                  return val.toLowerCase().indexOf(String(a).toLowerCase()) >= 0;
                });
                // build/teach: partial credit if non-empty
                if (!it.accepted || !it.accepted.length) ok = val.trim().length > 10;
                BS.exam.submitAnswer(ok ? 1 : 0.3, {});
                paint();
              }
            }, 'Javobni yuborish')
          ),
          h('button', { class: 'btn sec', onclick: function () { BS.exam.submitAnswer(0, {}); paint(); } }, 'O\u2018tkazib yuborish')
        ));
      }
      paint();
    }
    showLobby();
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
  BS.router.add('/', home).add('/arena', arena).add('/stats', stats).add('/exam', examPage);
  MODES.forEach(function (m) { BS.router.add(m.path, modePage(m)); });
  BS.router.start(function () { BS.router.go('/'); });
})();
