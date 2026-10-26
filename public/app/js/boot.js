/* boot.js — to'liq shell: home, arena, rejimlar, imtihon, statistika */
(function () {
  'use strict';
  var BS = window.BS, h = BS.ui.h;
  BS.version = '1.0';
  var CORE = ['rng', 'srs', 'ledger', 'state', 'mastery', 'selector', 'router', 'normalize', 'diff', 'hl', 'ui', 'editor'];
  var MODES = [
    { path: '/dojo', id: 'dojo', title: 'Syntax Dojo', desc: 'Kodni yoddan yozib sintaksisni qotir' },
    { path: '/parsons', id: 'parsons', title: 'Parsons+', desc: 'Aralash qatorlarni to‘g‘ri tartibga qo‘y' },
    { path: '/quickfire', id: 'quickfire', title: 'Quick-Fire', desc: 'Tez test savollari, ketma-ket to‘g‘ri javob — combo' },
    { path: '/duel', id: 'duel', title: 'Diff Duel', desc: 'Deyarli bir xil ikki koddagi farqni top' },
    { path: '/tracer', id: 'tracer', title: 'Request Flight', desc: 'Ssenariy bo‘yicha status va redirectni top' },
    { path: '/bughunt', id: 'bughunt', title: 'Bug Hunt', desc: 'Koddagi haqiqiy xatoni (B01–B22) top' },
    { path: '/matrix', id: 'matrix', title: 'Permission Matrix', desc: 'Kim nimaga kira olishini aniqla' },
    { path: '/orm', id: 'orm', title: 'ORM Arena', desc: 'ORM so‘rovi qanday SQL va natija berishini ayt' },
    { path: '/migrations', id: 'migrations', title: 'Migration TM', desc: 'Migratsiyalarni to‘g‘ri tartibga qo‘y' },
    { path: '/templates', id: 'templates', title: 'Template Forge', desc: 'Shablon natijasini oldindan ayt' },
    { path: '/terminal', id: 'terminal', title: 'Terminal', desc: 'Terminal buyruqlari qanday natija beradi' },
    { path: '/reverse', id: 'reverse', title: 'Reverse Engineer', desc: 'Javobga qarab kodni tikla' },
    { path: '/sprint', id: 'sprint', title: 'Sprint', desc: '20 qadamli mini-BookShop' },
    { path: '/boss', id: 'boss', title: 'Boss Fight', desc: 'Modul oxiridagi yakuniy sinov' },
    { path: '/teachback', id: 'teachback', title: 'Teach-back', desc: 'O‘zing tushuntirib berib mustahkamla' },
    { path: '/gauntlet', id: 'gauntlet', title: 'Refactor Gauntlet', desc: 'Kodni yaxshilash mashqlari' },
    { path: '/daily', id: 'daily', title: 'Daily Mission', desc: 'Har kungi qisqa missiya' },
    { path: '/chaos', id: 'chaos', title: 'Chaos Mode', desc: 'Qiyin aralash savollar' }
  ];

  function countQuestions() {
    var n = 0;
    for (var i = 0; i <= 16; i++) {
      var k = 'questions_m' + (i < 10 ? '0' + i : '' + i);
      if (BS.data && Array.isArray(BS.data[k])) n += BS.data[k].length;
    }
    return n;
  }

  var ICONS = { dojo: 'braces', parsons: 'layers', quickfire: 'bolt', duel: 'diff', tracer: 'route', bughunt: 'bug', matrix: 'grid', orm: 'db', migrations: 'history', templates: 'layout', terminal: 'terminal', reverse: 'swap', sprint: 'timer', boss: 'crown', teachback: 'present', gauntlet: 'refresh', daily: 'calendar', chaos: 'shuffle' };
  var GROUPS = [
    { title: 'Yoddan yozish', ids: ['dojo', 'parsons', 'templates', 'terminal'] },
    { title: 'Tushunish', ids: ['tracer', 'matrix', 'orm', 'migrations', 'reverse'] },
    { title: 'Xato topish', ids: ['duel', 'bughunt', 'chaos'] },
    { title: 'Tezlik va sinov', ids: ['quickfire', 'sprint', 'boss', 'daily', 'teachback', 'gauntlet'] }
  ];
  var MODE_BY_ID = {};
  MODES.forEach(function (m) { MODE_BY_ID[m.id] = m; });

  function ico(name, size) { return h('span', { class: 'ico' }, BS.icon(name, size || 17)); }

  function calc() {
    var st = BS.state.get();
    var today = BS.srs ? BS.srs.today() : 0;
    var concepts = (BS.data && BS.data.concepts) || [];
    var mastered = 0, byMod = {}, order = [];
    concepts.forEach(function (c) {
      var m = c.modul || '?';
      if (!byMod[m]) { byMod[m] = { id: m, total: 0, done: 0 }; order.push(m); }
      byMod[m].total++;
      var r = st.concepts[c.id];
      if (r && BS.mastery && BS.mastery.isMastered(r, today)) { mastered++; byMod[m].done++; }
    });
    var thr = (BS.mastery && BS.mastery.SUCCESS) || 0.6, ok = 0;
    st.ledger.forEach(function (e) { if (e && e.res >= thr) ok++; });
    var due = 0;
    try { due = BS.mastery.dueList(st, today).length; } catch (e) { due = 0; }
    var pred = { band: '—', total: 0 };
    try { if (BS.examScoring) pred = BS.examScoring.predictBand(st); } catch (e) { /* bashorat ixtiyoriy */ }
    return {
      st: st, today: today, total: concepts.length, mastered: mastered,
      mods: order.sort().map(function (k) { return byMod[k]; }),
      attempts: st.ledger.length,
      acc: st.ledger.length ? Math.round(100 * ok / st.ledger.length) : null,
      due: due, pred: pred
    };
  }
  function tile(v, label, icon) {
    return h('div', { class: 'stat' },
      h('span', { class: 'stat-ic' }, BS.icon(icon, 16)),
      h('b', null, String(v)),
      h('span', { class: 'stat-l' }, label));
  }
  function modBars(mods) {
    return mods.map(function (m) {
      var p = m.total ? Math.round(100 * m.done / m.total) : 0;
      return h('div', { class: 'mod-row' },
        h('span', { class: 'nm' }, 'Modul ' + String(m.id).replace(/^M/, '')),
        h('div', { class: 'bar' }, h('i', { style: { width: p + '%' } })),
        h('span', { class: 'ct' }, m.done + '/' + m.total));
    });
  }
  function statTiles(d) {
    var first = d.attempts === 0;
    return h('div', { class: 'stats' },
      tile(d.st.profile.xp, 'XP', 'bolt'),
      tile(d.st.profile.streak || 0, 'Ketma-ket kun', 'flame'),
      tile(d.attempts, 'Urinishlar', 'target'),
      tile(d.acc == null ? '—' : d.acc + '%', 'Aniqlik', 'check'),
      tile(d.mastered + '/' + d.total, 'O‘zlashtirilgan', 'crown'),
      tile(first ? '—' : d.pred.band, 'Band (taxmin)', 'chart'));
  }

  function shell(active, content) {
    var st = BS.state.get(), lv = BS.state.levelFor(st.profile.xp);
    var cur = BS.state.LEVELS[lv.index];
    var pct = lv.next ? Math.min(100, Math.round(100 * (st.profile.xp - cur.xp) / (lv.next.xp - cur.xp))) : 100;
    function item(path, title, icon) {
      return h('a', { href: '#' + path, class: 'nav-item' + (active === path ? ' active' : ''), style: { textDecoration: 'none' } },
        ico(icon), h('span', null, title));
    }
    var top = [item('/', 'Bosh', 'home'), item('/arena', 'Kod arena', 'code'), item('/stats', 'Statistika', 'chart'), item('/exam', 'Imtihon 9.0', 'exam')];
    var groups = GROUPS.map(function (g) {
      return [h('div', { class: 'nav-group' }, g.title)].concat(g.ids.map(function (id) {
        var m = MODE_BY_ID[id];
        return item(m.path, m.title, ICONS[id] || 'dot');
      }));
    });
    return [
      h('div', { class: 'menubar' },
        h('button', { class: 'menu-btn', 'aria-label': 'Menyuni ochish', onclick: function () { document.body.classList.toggle('nav-open'); } }, BS.icon('menu', 22)),
        h('strong', null, 'BookShop Mastery')),
      h('div', { class: 'scrim', onclick: function () { document.body.classList.remove('nav-open'); } }),
      h('nav', { class: 'sidebar', 'aria-label': 'Asosiy menyu' },
        h('div', { class: 'brand' },
          h('h1', null, 'BookShop ', h('span', null, 'Mastery')),
          h('p', null, 'Engine · v' + BS.version)),
        h('div', { class: 'lvl' },
          h('div', { class: 'lvl-top' }, h('span', null, lv.name), h('span', { class: 'streak' }, BS.icon('flame', 14), String(st.profile.streak || 0))),
          h('div', { class: 'progress-bar' }, h('i', { style: { width: pct + '%' } })),
          h('small', null, st.profile.xp + (lv.next ? ' / ' + lv.next.xp : '') + ' XP')),
        h('a', { href: '../index.html', class: 'nav-item switch', style: { textDecoration: 'none' } }, ico('book'), h('span', null, 'Darslik')),
        top, groups),
      h('main', { class: 'main', id: 'main-content' }, content)
    ];
  }

  function render(active, content) {
    document.body.classList.remove('nav-open');
    BS.ui.mount(document.getElementById('app'), h('div', { style: { display: 'contents' } }, shell(active, content)));
    try { window.scrollTo(0, 0); } catch (e) { /* ixtiyoriy */ }
  }

  function home() {
    var d = calc(), first = d.attempts === 0;
    function modeCard(id) {
      var m = MODE_BY_ID[id];
      var n = ('0' + (MODES.indexOf(m) + 1)).slice(-2);
      return h('a', { href: '#' + m.path, class: 'card', style: { textDecoration: 'none', color: 'inherit' } },
        h('span', { class: 'mode-ico' }, BS.icon(ICONS[id] || 'dot', 20)),
        h('span', { class: 'mode-txt' }, h('strong', null, m.title), h('small', null, m.desc || '')),
        h('span', { class: 'mode-n' }, n));
    }
    var kids = [
      h('div', { class: 'hero' },
        h('h1', { class: 't' }, first ? 'Xush kelibsiz' : 'Davom etamiz'),
        h('p', { class: 'sub' }, first
          ? 'Boshlash uchun “Syntax Dojo”ni oching — kodni yoddan yozishni mashq qilasiz.'
          : 'Kunlik missiya va takrorlarni bajarib, darajangizni oshiring.'),
        h('div', { class: 'row' },
          h('a', { href: '#/daily', class: 'btn' }, BS.icon('calendar', 16), 'Kunlik missiya'),
          h('a', { href: '#/dojo', class: 'btn sec' }, BS.icon('braces', 16), 'Syntax Dojo'),
          h('a', { href: '#/exam', class: 'btn sec' }, BS.icon('exam', 16), 'Imtihon 9.0')))
    ];
    if (first) {
      kids.push(h('div', { class: 'card start' },
        h('h3', null, 'Qayerdan boshlayman?'),
        h('div', { class: 'step' }, h('span', { class: 'num' }, '1'), h('div', null, 'Darslikni o‘qing (chap menyudagi “Darslik”).')),
        h('div', { class: 'step' }, h('span', { class: 'num' }, '2'), h('div', null, 'Quyidagi rejimlardan birini tanlang — Syntax Dojo yoki Quick-Fire yaxshi boshlanish.')),
        h('div', { class: 'step' }, h('span', { class: 'num' }, '3'), h('div', null, 'Haftada bir marta “Imtihon 9.0” ni topshiring.'))));
    }
    if (d.due > 0) kids.push(h('div', { class: 'due' }, BS.icon('clock', 18), h('span', null, d.due + ' ta takror muddati kelgan — yangi mavzudan oldin ularni takrorlang.')));
    kids.push(statTiles(d));
    GROUPS.forEach(function (g) {
      kids.push(h('h2', { class: 'group-title' }, g.title));
      kids.push(h('div', { class: 'mode-grid' }, g.ids.map(modeCard)));
    });
    kids.push(h('h2', { class: 'group-title' }, 'Modullar'));
    kids.push(h('div', { class: 'card' }, modBars(d.mods)));
    var nB = (BS.data && BS.data.bugs) ? BS.data.bugs.length : 0;
    var nE = (BS.data && BS.data.exam_bank) ? BS.data.exam_bank.length : 0;
    kids.push(h('p', { class: 'sub foot' },
      'Bazada: ' + d.total + ' konsept · ' + countQuestions() + ' mashq · ' + nE + ' imtihon savoli · ' + nB + ' bug. Natijalaringiz shu qurilmada (brauzer xotirasida) saqlanadi.'));
    render('/', kids);
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
      h('p', { class: 'sub' }, 'Namuna kod tepada. Uni muharrirga yozing va “Tekshir”ni bosing — xato qatorlar belgilanadi.'),
      h('div', { class: 'card' }, BS.ui.code('py', TARGET)),
      box,
      h('button', { class: 'btn', onclick: check }, 'Tekshir'),
      out
    ]);
    ed = BS.editor.create(box, { lang: 'py', minRows: 6 });
  }

  function stats() {
    var d = calc(), intact = BS.state.checkIntegrity().ok;
    render('/stats', [
      h('h1', { class: 't' }, 'Statistika'),
      h('p', { class: 'sub' }, 'Qancha mashq qilganingiz va qaysi modullar o‘zlashtirilgani.'),
      statTiles(d),
      h('h2', { class: 'group-title' }, 'Modullar'),
      h('div', { class: 'card' }, modBars(d.mods)),
      h('div', { class: 'card' },
        h('h3', null, 'Band bashorati'),
        h('p', { class: 'score' }, String(d.attempts === 0 ? '—' : d.pred.band)),
        h('p', { class: 'sub' }, 'Taxminiy: ' + d.pred.total + '/100')),
      h('div', { class: 'card' },
        h('h3', null, 'Yaxlitlik'),
        h('p', { class: 'ok-line' }, BS.icon(intact ? 'check' : 'warn', 16), intact ? 'Natijalar jurnali butun' : 'Natijalar jurnali BUZILGAN'))
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
