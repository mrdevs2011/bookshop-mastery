(function () { var T = window.T, BS = window.BS, R = BS.router;
  function setHash(h) { if (typeof document === 'undefined') window.location = { hash: h }; else window.location.hash = h; }
  T.describe('router', function () {
    T.it('parse: yo‘l va query', function () {
      T.eq(R.parse('#/book/5?x=1&y=a%20b'), { path: '/book/5', query: { x: '1', y: 'a b' } });
      T.eq(R.parse(''), { path: '/', query: {} }); T.eq(R.parse('#'), { path: '/', query: {} });
      T.eq(R.parse('#about').path, '/about'); T.eq(R.parse('#/a?flag').query, { flag: '' });
    });
    T.it('parseQuery: buzuq foiz-kodlash yiqitmaydi', function () {
      T.eq(R.parseQuery('a=%E0%A4%A&b=2'), { a: '%E0%A4%A', b: '2' });
      T.eq(R.parseQuery('=x'), { '': 'x' }); T.eq(R.parseQuery(''), {});
    });
    T.it('match: parametrlar, oxirgi slash, mos kelmaslik', function () {
      T.eq(R.match('/book/:id', '/book/42'), { id: '42' });
      T.eq(R.match('/book/:id', '/book/42/'), { id: '42' });
      T.eq(R.match('/book/:id', '/book'), null); T.eq(R.match('/book/:id', '/book/1/2'), null);
      T.eq(R.match('/', '/'), {}); T.eq(R.match('/', '/x'), null);
      T.eq(R.match('/m/:mid/c/:cid', '/m/M3/c/get_or_create'), { mid: 'M3', cid: 'get_or_create' });
    });
    T.it('match: foiz-kodlangan parametr dekodlanadi; pattern dagi nuqta literal', function () {
      T.eq(R.match('/q/:s', '/q/a%2Fb'), { s: 'a/b' });
      T.eq(R.match('/a.b', '/a.b'), {}); T.eq(R.match('/a.b', '/aXb'), null);
    });
    T.it('resolve: birinchi mos yo‘l yutadi; reset tozalaydi', function () {
      R.reset();
      R.add('/x/:id', function () {}).add('/x/special', function () {});
      T.eq(R.resolve('/x/special').pattern, '/x/:id');
      T.eq(R.resolve('/yoq'), null);
      R.reset(); T.eq(R.resolve('/x/1'), null);
    });
    T.it('run: handler (params, query, path) bilan chaqiriladi', function () {
      R.reset(); var got = null;
      R.add('/x/:id', function (p, q, path) { got = [p, q, path]; });
      var saved = typeof document !== 'undefined' ? window.location.hash : null;
      try {
        setHash('#/x/9?k=v'); R.run();
        T.eq(got, [{ id: '9' }, { k: 'v' }, '/x/9']);
      } finally { if (saved !== null) window.location.hash = saved; R.reset(); }
    });
    T.it('run: handler xatosi yutilmaydi', function () {
      R.reset(); R.add('/boom', function () { throw new Error('boom'); });
      var saved = typeof document !== 'undefined' ? window.location.hash : null, origErr = console.error; console.error = function () {};
      try { setHash('#/boom'); T.throws(function () { R.run(); }); }
      finally { console.error = origErr; if (saved !== null) window.location.hash = saved; R.reset(); }
    });
  });
})();
