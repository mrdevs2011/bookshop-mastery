(function () { var T = window.T, BS = window.BS, M = BS.mastery;
  function at(k) { return new Date(2026, 9, 1 + k, 12, 0).getTime(); }
  function day(k) { return BS.srs.dayOf(at(k)); }
  function fresh() { return BS.state.fresh(at(0)); }
  function att(st, cid, o) {
    o = o || {};
    return M.recordAttempt(st, { concept: cid, qid: o.qid || (cid + '-q'), seed: 1, answer: 'a', format: o.format || 'choice',
      difficulty: o.difficulty || 5, ok: o.ok === undefined ? true : o.ok, help: o.help || 0, ms: 1000, budget: 60000, twin: o.twin, now: at(o.k || 0) });
  }
  // 85 ballga va 3 xil formatga yetguncha mashq qiladi (bir kunda)
  function drill(st, cid, k, fmts) {
    fmts = fmts || ['choice', 'write', 'debug']; var i = 0;
    do { att(st, cid, { format: fmts[i % fmts.length], k: k }); i++; if (i > 300) throw new Error('85 ballga yetmadi'); }
    while (st.concepts[cid].score < 85 || i < fmts.length);
    return i;
  }
  function mkMastered() { var r = M.newRec(); r.score = 90; r.n = 5; r.ok = { choice: 1, write: 1, debug: 1 }; r.days = [1, 2]; r.box = 2; r.due = 100; return r; }
  var CAT = {
    modules: [{ id: 'M0', title: 'Birinchi' }, { id: 'M1', title: 'Ikkinchi' }],
    concepts: { c1: { modul: 'M0', prereq: [] }, c2: { modul: 'M0', prereq: ['c1'] }, c3: { modul: 'M1', prereq: [] } }
  };

  T.describe('mastery', function () {
    T.it('expected: ball = maqsad bo‘lsa 50%, ball oshsa ehtimol oshadi, qiyinlik oshsa kamayadi', function () {
      T.near(M.expected(50, 3), 0.5, 1e-9);
      T.assert(M.expected(80, 3) > M.expected(50, 3));
      T.assert(M.expected(50, 5) < M.expected(50, 3));
    });
    T.it('credit: yordam zinasi chegaralari (H1 ≤80%, H2 ≤50%, H3 = 0)', function () {
      T.eq(M.credit(1, 0), 1); T.eq(M.credit(1, 1), 0.8); T.eq(M.credit(1, 2), 0.5); T.eq(M.credit(1, 3), 0);
      T.eq(M.credit(0.6, 1), 0.6); T.eq(M.credit(1.7, 0), 1); T.eq(M.credit(-3, 0), 0);
    });
    T.it('credit: juda sekin javob (>2× byudjet) 10% kamayadi, aniq 2× emas', function () {
      T.near(M.credit(1, 0, 130000, 60000), 0.9, 1e-9); T.eq(M.credit(1, 0, 120000, 60000), 1);
    });
    T.it('recordAttempt: muvaffaqiyat — ball, XP, ledger, yaxlitlik', function () {
      var st = fresh(), r = att(st, 'c1', { difficulty: 1 });
      T.assert(r.success && r.rec.score > 0);
      T.eq(r.xp, 6); T.eq(st.profile.xp, 6); T.eq(st.ledger.length, 1);
      T.assert(BS.ledger.verify(st.ledger).ok);
    });
    T.it('recordAttempt: xato — 0 XP, ball manfiy bo‘lmaydi, quti 0, ertaga takror', function () {
      var st = fresh(), r = att(st, 'c1', { ok: false, difficulty: 3 });
      T.assert(!r.success); T.eq(r.xp, 0); T.assert(r.rec.score >= 0);
      T.eq([r.rec.box, r.rec.due], [0, day(0) + 1]);
    });
    T.it('Elo: oson savolda yiqilish qiyin savoldagi yiqilishdan qattiqroq jazolanadi', function () {
      var a = fresh(), b = fresh(); a.concepts.c1 = M.newRec(); b.concepts.c1 = M.newRec();
      a.concepts.c1.score = 80; b.concepts.c1.score = 80;
      var easy = att(a, 'c1', { ok: false, difficulty: 1 }), hard = att(b, 'c1', { ok: false, difficulty: 5 });
      T.assert(easy.delta < hard.delta, 'easy ' + easy.delta + ' hard ' + hard.delta);
    });
    T.it('format og‘irligi: qurish tanlovdan ko‘proq XP beradi', function () {
      var a = fresh(), b = fresh();
      T.assert(att(a, 'c1', { format: 'build', difficulty: 2 }).xp > att(b, 'c1', { format: 'choice', difficulty: 2 }).xp);
    });
    T.it('H3: kredit 0, muvaffaqiyat emas, konsept zaif va egizak majburiy', function () {
      var st = fresh(), r = att(st, 'c1', { help: 3 });
      T.eq(r.credit, 0); T.assert(!r.success);
      T.assert(r.rec.weak && r.rec.twinPending); T.eq(M.status(r.rec, day(0)), 'weak');
    });
    T.it('egizak: faqat twin:true va H0 muvaffaqiyat twinPending ni yechadi', function () {
      var st = fresh(); att(st, 'c1', { help: 3 });
      att(st, 'c1', { k: 0 }); T.assert(st.concepts.c1.twinPending, 'oddiy muvaffaqiyat yechmasligi kerak');
      att(st, 'c1', { twin: true, help: 1 }); T.assert(st.concepts.c1.twinPending, 'H1 yechmasligi kerak');
      att(st, 'c1', { twin: true }); T.assert(!st.concepts.c1.twinPending);
    });
    T.it('o‘zlashtirish: bir kunda mumkin emas, ikkinchi kunda — mumkin', function () {
      var st = fresh(); drill(st, 'c1', 0);
      T.assert(st.concepts.c1.score >= 85 && Object.keys(st.concepts.c1.ok).length === 3);
      T.assert(!M.isMastered(st.concepts.c1, day(0)), 'bir kechada pishirib bo‘lmaydi');
      att(st, 'c1', { k: 1 });
      T.assert(M.isMastered(st.concepts.c1, day(1))); T.eq(M.status(st.concepts.c1, day(1)), 'mastered');
    });
    T.it('o‘zlashtirish: kamida 3 xil formatda muvaffaqiyat kerak', function () {
      var st = fresh(); drill(st, 'c1', 0, ['choice', 'write']);
      att(st, 'c1', { k: 1, format: 'write' });
      T.assert(!M.isMastered(st.concepts.c1, day(1)), '2 format yetarli emas');
      att(st, 'c1', { k: 1, format: 'debug' });
      T.assert(M.isMastered(st.concepts.c1, day(1)));
    });
    T.it('o‘zlashtirish: H3 oxirgi 10 urinishda bo‘lsa bloklanadi, 10 ta urinishdan keyin ochiladi', function () {
      var st = fresh(); drill(st, 'c1', 0); att(st, 'c1', { k: 1 });
      T.assert(M.isMastered(st.concepts.c1, day(1)));
      att(st, 'c1', { k: 1, help: 3 });
      T.assert(!M.isMastered(st.concepts.c1, day(1)));
      att(st, 'c1', { k: 1, twin: true });
      T.assert(!M.isMastered(st.concepts.c1, day(1)), 'egizak hal bo‘ldi, lekin H3 hali oxirgi 10 ta ichida');
      var n = 0;
      while (!M.isMastered(st.concepts.c1, day(1)) && n < 40) { att(st, 'c1', { k: 1 }); n++; }
      T.assert(M.isMastered(st.concepts.c1, day(1)), 'oxir-oqibat qayta o‘zlashtirilishi kerak');
      T.assert(st.concepts.c1.hist.slice(-10).every(function (h) { return h.h < 3; }));
    });
    T.it('unutish: muddati o‘tgan sari samarali ball tushadi (eng ko‘pi 50%)', function () {
      var r = M.newRec(); r.score = 100; r.due = 0; r.n = 1;
      T.eq(M.effectiveScore(r, 0), 100); T.eq(M.effectiveScore(r, 10), 90); T.eq(M.effectiveScore(r, 100), 50);
      T.eq(M.effectiveScore(null, 5), 0);
    });
    T.it('o‘zlashtirilgan konsept juda kechiksa — o‘zlashtirish yo‘qoladi', function () {
      var r = mkMastered(); T.assert(M.isMastered(r, 50)); T.assert(!M.isMastered(r, 300));
    });
    T.it('status: new / learning / weak / mastered', function () {
      T.eq(M.status(null, 5), 'new'); T.eq(M.status(M.newRec(), 5), 'new');
      var r = mkMastered(); T.eq(M.status(r, 50), 'mastered');
      r.days = [1]; T.eq(M.status(r, 50), 'learning');
      r.weak = true; T.eq(M.status(r, 50), 'weak');
    });
    T.it('hist 50 tadan oshmaydi', function () {
      var st = fresh(); for (var i = 0; i < 60; i++) att(st, 'c1', { k: 0 });
      T.eq(st.concepts.c1.hist.length, 50); T.eq(st.concepts.c1.n, 60);
    });
    T.it('streak: ketma-ket kun +1, o‘tkazilgan kun — 1 ga tushadi, rekord saqlanadi', function () {
      var st = fresh();
      M.touchStreak(st, 10); T.eq(st.profile.streak, 1);
      M.touchStreak(st, 10); T.eq(st.profile.streak, 1);
      M.touchStreak(st, 11); T.eq(st.profile.streak, 2);
      M.touchStreak(st, 13); T.eq([st.profile.streak, st.profile.bestStreak], [1, 2]);
    });
    T.it('ledger: har urinish zanjirga yoziladi; o‘zgartirilsa yaxlitlik buziladi', function () {
      var st = fresh(); for (var i = 0; i < 5; i++) att(st, 'c1', { k: 0 });
      T.assert(BS.ledger.verify(st.ledger).ok);
      st.ledger[2].res = 0.123;
      var v = BS.ledger.verify(st.ledger); T.assert(!v.ok); T.eq(v.at, 2);
    });
    T.it('qarz: muddati kelgan takror bor ekan yangi kontent qulflangan', function () {
      var st = fresh(); st.concepts.a = M.newRec(); st.concepts.a.n = 1; st.concepts.a.due = 5;
      st.concepts.b = M.newRec(); st.concepts.b.n = 1; st.concepts.b.due = 3;
      T.assert(!M.contentLocked(st, 2).locked);
      var l = M.contentLocked(st, 5);
      T.assert(l.locked); T.eq(l.due.map(function (d) { return d.id; }), ['b', 'a']); T.eq(l.due[0].overdue, 2);
    });
    T.it('moduleOpen: birinchi modul ochiq; keyingisi — oldingi hammasi o‘zlashtirilgan VA boss yengilgan', function () {
      var st = fresh();
      T.assert(M.moduleOpen(CAT, st, 'M0', 50)); T.assert(!M.moduleOpen(CAT, st, 'M1', 50));
      st.concepts.c1 = mkMastered(); st.concepts.c2 = mkMastered();
      T.assert(!M.moduleOpen(CAT, st, 'M1', 50), 'boss yengilmagan');
      M.markBoss(st, 'M0'); T.assert(M.moduleOpen(CAT, st, 'M1', 50));
      st.concepts.c2 = M.newRec(); T.assert(!M.moduleOpen(CAT, st, 'M1', 50), 'bitta konsept qolsa yopiq');
      T.assert(!M.moduleOpen(CAT, st, 'yo‘q', 50));
    });
    T.it('canPractice: prereq, qarz va allaqachon boshlangan konsept', function () {
      var st = fresh();
      T.assert(M.canPractice(CAT, st, 'c1', 50)); T.assert(!M.canPractice(CAT, st, 'c2', 50), 'prereq o‘zlashtirilmagan');
      st.concepts.c1 = mkMastered(); T.assert(M.canPractice(CAT, st, 'c2', 50));
      T.assert(!M.canPractice(CAT, st, 'c3', 50), 'boss yo‘q');
      T.assert(!M.canPractice(CAT, st, 'nomalum', 50));
      var q = fresh(); q.concepts.x = M.newRec(); q.concepts.x.n = 1; q.concepts.x.due = 1;
      T.assert(!M.canPractice(CAT, q, 'c1', 50), 'qarz bor — yangi konsept qulflangan');
      q.concepts.c2 = M.newRec(); q.concepts.c2.n = 2; q.concepts.c2.due = 1;
      T.assert(M.canPractice(CAT, q, 'c2', 50), 'boshlangan konseptni takrorlash doim mumkin');
    });
    T.it('modulesProgress: sanoq, ochiqlik va boss', function () {
      var st = fresh(); st.concepts.c1 = mkMastered(); M.markBoss(st, 'M0');
      var p = M.modulesProgress(CAT, st, 50);
      T.eq(p.length, 2); T.eq([p[0].id, p[0].total, p[0].mastered, p[0].open, p[0].boss], ['M0', 2, 1, true, true]);
      T.eq([p[1].total, p[1].mastered, p[1].open], [1, 0, false]);
    });
  });
})();
