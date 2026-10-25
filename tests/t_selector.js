(function () { var T = window.T, BS = window.BS;
  function stWith(map) {
    var st = BS.state.fresh(0);
    Object.keys(map).forEach(function (k) { var r = BS.mastery.newRec(); r.n = 1; for (var f in map[k]) r[f] = map[k][f]; st.concepts[k] = r; });
    return st;
  }
  function cand(id, concept, module, diff, format, twin) { return { id: id, concept: concept, module: module, difficulty: diff, format: format || 'choice', twin: !!twin }; }

  T.describe('selector', function () {
    T.it('nomzodlar yo‘q — null', function () {
      T.eq(BS.selector.pick({ cands: [], st: stWith({}), today: 10 }), null);
      T.eq(BS.selector.rank({ st: stWith({}), today: 10 }), []);
    });
    T.it('yaqinda ko‘rsatilgan savol chiqarib tashlanadi', function () {
      var r = BS.selector.rank({ cands: [cand('q1', 'c1', 'M0', 2), cand('q2', 'c1', 'M0', 2)], st: stWith({}), today: 10, recent: ['q1'] });
      T.eq(r.length, 1); T.eq(r[0].cand.id, 'q2');
    });
    T.it('kutilgan muvaffaqiyat ≈ 75% ga eng yaqin qiyinlik tanlanadi', function () {
      var st = stWith({ c1: { score: 70 } });
      var p = BS.selector.pick({ cands: [cand('q1', 'c1', 'M0', 1), cand('q4', 'c1', 'M0', 4), cand('q3', 'c1', 'M0', 3)], st: st, today: 10 });
      T.eq(p.id, 'q3');
    });
    T.it('o‘zlashtirgan talabaga qiyinroq, bilmaganga osonroq savol tushadi', function () {
      var all = [1, 2, 3, 4, 5].map(function (d) { return cand('d' + d, 'c1', 'M0', d); });
      var weak = BS.selector.pick({ cands: all, st: stWith({ c1: { score: 30 } }), today: 10 });
      var strong = BS.selector.pick({ cands: all, st: stWith({ c1: { score: 95 } }), today: 10 });
      T.assert(strong.difficulty > weak.difficulty, weak.difficulty + ' vs ' + strong.difficulty);
    });
    T.it('muddati kelgan takror ustun turadi (tartibga bog‘liq emas)', function () {
      var st = stWith({ a: { score: 50, due: 1 }, b: { score: 50, due: 100 } });
      var p = BS.selector.pick({ cands: [cand('qb', 'b', 'M0', 3), cand('qa', 'a', 'M0', 3)], st: st, today: 10 });
      T.eq(p.id, 'qa');
    });
    T.it('egizak savol: H3 dan keyin ustuvor; aks holda jazolanadi', function () {
      var pend = stWith({ c1: { score: 50, weak: true, twinPending: true } });
      var set = [cand('n1', 'c1', 'M0', 3), cand('t1', 'c1', 'M0', 3, 'choice', true)];
      T.eq(BS.selector.pick({ cands: set, st: pend, today: 10 }).id, 't1');
      var calm = stWith({ c1: { score: 50 } });
      T.eq(BS.selector.pick({ cands: set, st: calm, today: 10 }).id, 'n1');
    });
    T.it('interleaving: bir modulda 3 ta ketma-ket savoldan keyin modul almashadi', function () {
      var st = stWith({ c1: { score: 50, due: 1 } });
      var set = [cand('a', 'c1', 'M0', 3), cand('b', 'c3', 'M1', 3)];
      T.eq(BS.selector.pick({ cands: set, st: st, today: 10, lastModules: ['M0'] }).id, 'a', 'bitta M0 — hali almashmaydi');
      T.eq(BS.selector.pick({ cands: set, st: st, today: 10, lastModules: ['M0', 'M0', 'M0'] }).id, 'b');
    });
    T.it('format xilma-xilligi: oxirgi format jazolanadi', function () {
      var st = stWith({ c1: { score: 50, ok: { choice: 1, write: 1 } } });
      var set = [cand('qc', 'c1', 'M0', 3, 'choice'), cand('qw', 'c1', 'M0', 3, 'write')];
      T.eq(BS.selector.pick({ cands: set, st: st, today: 10, lastFormat: 'choice' }).id, 'qw');
    });
    T.it('hali muvaffaqiyat bo‘lmagan formatga bonus (3 xil format sharti uchun)', function () {
      var st = stWith({ c1: { score: 50, ok: { choice: 2 } } });
      var set = [cand('qc', 'c1', 'M0', 3, 'choice'), cand('qd', 'c1', 'M0', 3, 'debug')];
      T.eq(BS.selector.pick({ cands: set, st: st, today: 10 }).id, 'qd');
    });
    T.it('rank kamayish tartibida va bir xil seed bilan deterministik', function () {
      var st = stWith({ c1: { score: 60 } }), set = [1, 2, 3, 4, 5].map(function (d) { return cand('d' + d, 'c1', 'M0', d); });
      var r1 = BS.selector.rank({ cands: set, st: st, today: 10, rng: BS.rng.create(7) });
      var r2 = BS.selector.rank({ cands: set, st: st, today: 10, rng: BS.rng.create(7) });
      T.eq(r1.map(function (x) { return x.cand.id; }), r2.map(function (x) { return x.cand.id; }));
      for (var i = 1; i < r1.length; i++) T.assert(r1[i - 1].score >= r1[i].score);
    });
  });
})();
