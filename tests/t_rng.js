(function () { var T = window.T, BS = window.BS;
  T.describe('rng', function () {
    T.it('bir xil seed — bir xil ketma-ketlik', function () {
      var a = BS.rng.create(42), b = BS.rng.create(42), x = [], y = [];
      for (var i = 0; i < 20; i++) { x.push(a.next()); y.push(b.next()); }
      T.eq(x, y);
    });
    T.it('har xil seed — har xil ketma-ketlik', function () {
      T.assert(BS.rng.create(1).next() !== BS.rng.create(2).next());
    });
    T.it('satr seed barqaror', function () {
      T.eq(BS.rng.hashStr('bookshop'), BS.rng.hashStr('bookshop'));
      T.assert(BS.rng.hashStr('a') !== BS.rng.hashStr('b'));
      T.eq(BS.rng.create('x').next(), BS.rng.create('x').next());
    });
    T.it('next() [0,1) oralig‘ida, o‘rtacha ≈ 0.5', function () {
      var r = BS.rng.create(7), s = 0, n = 10000;
      for (var i = 0; i < n; i++) { var v = r.next(); T.assert(v >= 0 && v < 1); s += v; }
      T.near(s / n, 0.5, 0.02);
    });
    T.it('int(a,b) chegaralar ichida va ikkala chegarani ham beradi', function () {
      var r = BS.rng.create(3), seen = {};
      for (var i = 0; i < 500; i++) { var v = r.int(2, 5); T.assert(v >= 2 && v <= 5); seen[v] = 1; }
      T.eq(Object.keys(seen).sort(), ['2', '3', '4', '5']);
    });
    T.it('shuffle — o‘sha elementlar, asl massiv o‘zgarmaydi, deterministik', function () {
      var src = [1, 2, 3, 4, 5, 6, 7, 8], s1 = BS.rng.create(9).shuffle(src), s2 = BS.rng.create(9).shuffle(src);
      T.eq(s1, s2); T.eq(src, [1, 2, 3, 4, 5, 6, 7, 8]);
      T.eq(s1.slice().sort(function (a, b) { return a - b; }), src);
    });
    T.it('pick va chance', function () {
      var r = BS.rng.create(5); T.assert(['a', 'b', 'c'].indexOf(r.pick(['a', 'b', 'c'])) >= 0);
      var rr = BS.rng.create(5), t = 0; for (var i = 0; i < 4000; i++) if (rr.chance(0.25)) t++;
      T.near(t / 4000, 0.25, 0.03);
    });
  });
})();
