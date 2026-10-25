(function () { var T = window.T, BS = window.BS, D = BS.diff;
  var TARGET = [
    'def index(request):',
    '    """Bosh sahifa – loyihaning kirish sahifasi."""',
    '    if request.user.is_authenticated:',
    '        return redirect("/book-list/")',
    '    return redirect("/login/")'
  ].join('\n');
  function ops(list) { return list.map(function (o) { return o.op; }); }

  T.describe('diff', function () {
    T.it('lines: eq / del / add', function () {
      T.eq(ops(D.lines('a\nb', 'a\nc')), ['eq', 'del', 'add']);
      T.eq(ops(D.lines('a', 'a')), ['eq']); T.eq(ops(D.lines('a\r\nb', 'a\nb')), ['eq', 'eq']);
    });
    T.it('lcsOps: bo‘sh massivlar', function () {
      T.eq(D.lcsOps([], [], function (x, y) { return x === y; }), []);
      T.eq(ops(D.lcsOps(['a'], [], function (x, y) { return x === y; })), ['del']);
      T.eq(ops(D.lcsOps([], ['a'], function (x, y) { return x === y; })), ['add']);
    });
    T.it('lex: tokenlarga bo‘lish', function () {
      T.eq(D.lex("foo(a, 'b') == 1.5"), ['foo', '(', 'a', ',', "'b'", ')', '==', '1.5']);
      T.eq(D.lex(''), []);
    });
    T.it('tokens: == va = farqi aniq ko‘rinadi', function () {
      var d = D.tokens('if x == 1:', 'if x = 1:').filter(function (o) { return o.op !== 'eq'; });
      T.eq(d, [{ op: 'del', text: '==' }, { op: 'add', text: '=' }]);
    });
    T.it('chars: bir xil ketma-ketliklar birlashtiriladi', function () {
      T.eq(D.chars('abc', 'abd'), [{ op: 'eq', text: 'ab' }, { op: 'del', text: 'c' }, { op: 'add', text: 'd' }]);
      T.eq(D.chars('', ''), []);
    });
    T.it('firstDiff', function () {
      T.eq(D.firstDiff('abc', 'abd'), 2); T.eq(D.firstDiff('abc', 'abc'), -1); T.eq(D.firstDiff('abc', 'abcd'), 3); T.eq(D.firstDiff('', 'a'), 0);
    });
    T.it('report: bir xil kod (qo‘shtirnoq/izoh/probel farqi bilan) — aynan to‘g‘ri', function () {
      var s = TARGET.replace(/"\/login\/"/, "'/login/'") + '  # izoh\n\n';
      var r = D.report(s, TARGET); T.assert(r.exact); T.eq([r.ok, r.total, r.score], [5, 5, 1]);
    });
    T.it('report: yetishmayotgan qator — missing', function () {
      var r = D.report(TARGET.split('\n').slice(0, 4).join('\n'), TARGET);
      T.assert(!r.exact); T.eq(r.ok, 4); T.eq(r.score, 0.8);
      var m = r.lines.filter(function (l) { return l.status === 'missing'; }); T.eq(m.length, 1); T.eq(m[0].targetLine, 5);
    });
    T.it('report: ortiqcha qator — extra (talaba qator raqami bilan)', function () {
      var r = D.report(TARGET + '\n    print(1)', TARGET);
      var e = r.lines.filter(function (l) { return l.status === 'extra'; });
      T.assert(!r.exact); T.eq(e.length, 1); T.eq(e[0].studentLine, 6); T.eq(r.ok, 5);
    });
    T.it('report: token xatosi — changed, aniq qaysi token', function () {
      var r = D.report(TARGET.replace('/book-list/', '/book_list/'), TARGET);
      var c = r.lines.filter(function (l) { return l.status === 'changed'; });
      T.eq(c.length, 1); T.assert(!c[0].indentOnly); T.eq(c[0].studentLine, 4);
      T.assert(c[0].ops.some(function (o) { return o.op === 'del'; }) && c[0].ops.some(function (o) { return o.op === 'add'; }));
    });
    T.it('report: faqat indentatsiya xato — indentOnly, daraja ko‘rsatiladi', function () {
      var r = D.report(TARGET.replace('    return redirect("/login/")', '        return redirect("/login/")'), TARGET);
      var c = r.lines.filter(function (l) { return l.status === 'changed'; });
      T.eq(c.length, 1); T.assert(c[0].indentOnly); T.eq(c[0].indent, { got: 2, expected: 1 });
    });
    T.it('report: bo‘sh talaba kodi — hammasi missing; ikkalasi bo‘sh — aynan to‘g‘ri', function () {
      var r = D.report('', TARGET); T.eq([r.ok, r.score], [0, 0]); T.assert(r.lines.every(function (l) { return l.status === 'missing'; }));
      var z = D.report('', ''); T.assert(z.exact); T.eq(z.score, 1);
    });
  });
})();
