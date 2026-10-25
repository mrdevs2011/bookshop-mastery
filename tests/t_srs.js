(function () { var T = window.T, BS = window.BS;
  T.describe('srs', function () {
    T.it('oraliqlar 1,3,7,21,60', function () { T.eq(BS.srs.INTERVALS, [1, 3, 7, 21, 60]); });
    T.it('to‘liq yo‘l: 1 → 3 → 7 → 21 → 60 → 60', function () {
      var r = {}, d = 100, got = [];
      BS.srs.apply(r, true, d); got.push([r.box, r.due - d]);
      [3, 7, 21, 60, 60].forEach(function () { d = r.due; BS.srs.apply(r, true, d); got.push([r.box, r.due - d]); });
      T.eq(got, [[0, 1], [1, 3], [2, 7], [3, 21], [4, 60], [4, 60]]);
    });
    T.it('muddatidan oldin muvaffaqiyat — quti o‘zgarmaydi (oldindan pishirib bo‘lmaydi)', function () {
      var r = { box: 2, due: 110 };
      var o = BS.srs.apply(r, true, 105);
      T.assert(o.early && !o.advanced); T.eq([r.box, r.due], [2, 110]);
    });
    T.it('muvaffaqiyatsizlik — quti 0, ertaga', function () {
      var r = { box: 3, due: 130 };
      BS.srs.apply(r, false, 120); T.eq([r.box, r.due], [0, 121]);
    });
    T.it('kechikib kelgan muvaffaqiyat ham bir quti oshiradi', function () {
      var r = { box: 1, due: 50 }; BS.srs.apply(r, true, 70); T.eq([r.box, r.due], [2, 77]);
    });
    T.it('isDue', function () {
      T.assert(BS.srs.isDue({ due: 5 }, 5)); T.assert(!BS.srs.isDue({ due: 6 }, 5)); T.assert(!BS.srs.isDue({ due: null }, 5));
    });
    T.it('dayOf: bir kun ichida bir xil, ertasi +1', function () {
      var a = new Date(2026, 9, 25, 9, 0).getTime(), b = new Date(2026, 9, 25, 21, 0).getTime(), c = new Date(2026, 9, 26, 12, 0).getTime();
      T.eq(BS.srs.dayOf(a), BS.srs.dayOf(b)); T.eq(BS.srs.dayOf(c), BS.srs.dayOf(a) + 1);
    });
  });
})();
