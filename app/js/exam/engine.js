/* Imtihon dvigateli: mock ishga tushirish, bo'lim ketma-ketligi, ball. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  function bankById() {
    var bank = (BS.data && BS.data.exam_bank) || [];
    var m = {};
    bank.forEach(function (it) { m[it.id] = it; });
    return m;
  }

  function startMock(mockId, opts) {
    opts = opts || {};
    var mocks = (BS.data && BS.data.exam_mocks) || [];
    var mock = null;
    for (var i = 0; i < mocks.length; i++) if (mocks[i].id === mockId) { mock = mocks[i]; break; }
    if (!mock) return { error: 'mock topilmadi' };
    var idx = bankById();
    var session = {
      mockId: mock.id,
      seed: mock.seed,
      official: !!opts.official,
      sectionOrder: BS.examSections.order.slice(),
      sectionIndex: 0,
      itemIndex: 0,
      answers: [],
      startedAt: Date.now(),
      focusLost: 0
    };
    session.queue = {};
    session.sectionOrder.forEach(function (s) {
      session.queue[s] = (mock.sections[s] || []).map(function (id) { return idx[id]; }).filter(Boolean);
    });
    BS._examSession = session;
    return session;
  }

  function currentItem() {
    var s = BS._examSession;
    if (!s) return null;
    var sec = s.sectionOrder[s.sectionIndex];
    if (!sec) return null;
    return s.queue[sec][s.itemIndex] || null;
  }

  function submitAnswer(credit, meta) {
    var s = BS._examSession;
    var it = currentItem();
    if (!s || !it) return null;
    meta = meta || {};
    s.answers.push({
      id: it.id,
      section: it.section,
      tier: it.tier || 'core',
      credit: Math.max(0, Math.min(1, credit)),
      critical: !!meta.critical
    });
    s.itemIndex++;
    if (s.itemIndex >= s.queue[it.section].length) {
      s.sectionIndex++;
      s.itemIndex = 0;
    }
    return currentItem();
  }

  function finish() {
    var s = BS._examSession;
    if (!s) return null;
    var result = BS.examScoring.scoreExam(s.answers);
    result.mockId = s.mockId;
    result.focusLost = s.focusLost;
    result.n = s.answers.length;
    // ledger
    try {
      var st = BS.state && BS.state.get && BS.state.get();
      if (st && BS.ledger) {
        BS.ledger.append(st.ledger, {
          t: Date.now(), qid: 'EXAM:' + s.mockId, seed: s.seed,
          answer: JSON.stringify({ total: result.total, band: result.band }),
          res: result.total / 100, help: 0, ms: Date.now() - s.startedAt, mode: 'exam'
        });
        if (BS.state.save) BS.state.save();
      }
    } catch (e) { /* offline */ }
    s.result = result;
    return result;
  }

  function lobbyHtml() {
    var mocks = (BS.data && BS.data.exam_mocks) || [];
    var pred = { band: '—', total: '—' };
    try {
      var st = BS.state && BS.state.get && BS.state.get();
      if (st) pred = BS.examScoring.predictBand(st);
    } catch (e) {}
    var rows = mocks.map(function (m) {
      return '<button class="btn sec" data-mock="' + m.id + '">' + m.title + ' (seed ' + m.seed + ')</button>';
    }).join('');
    return '<div class="exam-lobby">' +
      '<h2>BOOKSHOP 9.0 — Imtihon</h2>' +
      '<p class="sub">Muhrlangan bank · 4 bo\u2018lim · band 0–9</p>' +
      '<p>Band bashorati: <strong>' + pred.band + '</strong> (taxminiy ball ' + pred.total + ')</p>' +
      '<div class="mock-list">' + rows + '</div>' +
      '<p class="sub">Mock = rasmiy emas. Rasmiy rejimda yordam yo\u2018q, ortga qaytish yo\u2018q.</p>' +
      '</div>';
  }

  BS.exam = {
    startMock: startMock,
    currentItem: currentItem,
    submitAnswer: submitAnswer,
    finish: finish,
    lobbyHtml: lobbyHtml,
    bankSize: function () { return ((BS.data && BS.data.exam_bank) || []).length; }
  };
})();
