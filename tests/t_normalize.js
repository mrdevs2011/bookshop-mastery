(function () { var T = window.T, BS = window.BS, N = BS.normalize;
  function same(a, b, msg) { T.eq(N.python(a), N.python(b), msg); }
  function differ(a, b, msg) { T.assert(N.python(a) !== N.python(b), msg || ('farq bo‘lishi kerak edi: ' + JSON.stringify(a) + ' vs ' + JSON.stringify(b))); }

  T.describe('normalize › python', function () {
    T.it('probel, izoh va bo‘sh qatorlar farq qilmaydi', function () {
      same('x = 1  # izoh', 'x=1'); same('# bosh\n\nx = 1\n\n\ny = 2', 'x = 1\ny = 2'); same('a   =    b', 'a = b');
    });
    T.it('qo‘shtirnoq turi farq qilmaydi (\' ≡ ")', function () {
      same("a = 'x'", 'a = "x"'); same("s = \"it's\"", "s = 'it\\'s'"); same('p = F"x"', 'p = f"x"');
    });
    T.it('uchlik qo‘shtirnoq: \'\'\' ≡ """, ichki qator hisobga olinadi', function () {
      same("def f():\n    '''doc'''", 'def f():\n    """doc"""');
      T.eq(N.canonLines('def f():\n    """a\n    b"""\n    return 1').length, 3);
    });
    T.it('ortiqcha qavs: if/elif/while/return/assert', function () {
      same('if (a == b):\n    pass', 'if a == b:\n    pass'); same('while ((x)):\n    pass', 'while x:\n    pass');
      same('return (a + b)', 'return a + b'); same('assert (x > 1)', 'assert x > 1');
    });
    T.it('ko‘p qatorli qavs bir mantiqiy qator bo‘ladi', function () {
      same('x = foo(\n    a,\n    b\n)', 'x = foo(a, b)');
      same('Book.objects.filter(\n    user=request.user,\n)', 'Book.objects.filter(user=request.user,)');
    });
    T.it('indentatsiya SEMANTIK: 2 ≡ 4 probel ≡ tab, lekin daraja farqi — farq', function () {
      same('def f():\n  return 1', 'def f():\n    return 1'); same('def f():\n\treturn 1', 'def f():\n    return 1');
      differ('def f():\n    return 1', 'def f():\nreturn 1');
      differ('if a:\n    x = 1\n    y = 2', 'if a:\n    x = 1\ny = 2');
    });
    T.it('semantik farq saqlanadi: == vs =, : yo‘q, qavs, nom', function () {
      differ('if a == b:\n    pass', 'if a = b:\n    pass');
      differ('if a == b:\n    pass', 'if a == b\n    pass');
      differ('f(a)', 'f(a, b)'); differ('x = books', 'x = book'); differ('x = 1', 'x = 10');
      differ('return redirect("/login/")', 'return redirect("/login")');
    });
    T.it('qator raqami asl joyni ko‘rsatadi (izoh/bo‘sh qatorlardan keyin ham)', function () {
      var L = N.canonLines('# c\n\nx = 1\ny = 2');
      T.eq([L[0].line, L[1].line], [3, 4]);
    });
    T.it('ko‘p belgili operatorlar bitta token', function () {
      T.eq(N.canonLines('a //= 2')[0].toks, ['a', '//=', '2']); T.eq(N.canonLines('a != b')[0].toks, ['a', '!=', 'b']);
      T.eq(N.canonLines('def f(x) -> int:')[0].toks.indexOf('->') > 0, true);
    });
    T.it('yopilmagan satr va g‘alati kiritish yiqitmaydi', function () {
      N.python("x = 'abc"); N.python('def (((('); N.python('"""'); N.python('\\'); N.python('   '); T.eq(N.python(''), '');
    });
    T.it('CRLF ≡ LF', function () { same('a = 1\r\nb = 2', 'a = 1\nb = 2'); });
  });

  T.describe('normalize › template, shell, text', function () {
    T.it('template: {{ x }} ≡ {{x}}, tag ichida bo‘sh joy va qo‘shtirnoq turi', function () {
      T.eq(N.template('{{ book.name }}'), N.template('{{book.name}}'));
      T.eq(N.template("{% if x == 'a' %}"), N.template('{% if x ==  "a" %}'));
      T.eq(N.template('{%for b in books%}'), N.template('{% for  b in books %}'));
    });
    T.it('template: teglar orasidagi probellar yig‘iladi; mazmun farqi — farq', function () {
      T.eq(N.template('<ul>\n  <li>a</li>\n</ul>'), N.template('<ul><li>a</li></ul>'));
      T.assert(N.template('{{ a }}') !== N.template('{{ b }}'));
      T.assert(N.template('{% if a %}x{% endif %}') !== N.template('{% if a %}x'));
    });
    T.it('shell: probellar, bitta → ikkilik qo‘shtirnoq; $ bor bo‘lsa o‘zgarmaydi', function () {
      T.eq(N.shell('python   manage.py  runserver'), 'python manage.py runserver');
      T.eq(N.shell("python manage.py shell -c 'print(1)'"), N.shell('python manage.py shell -c "print(1)"'));
      T.eq(N.shell("echo '$HOME'"), "echo '$HOME'");
      T.assert(N.shell('python manage.py migrate') !== N.shell('python manage.py makemigrations'));
    });
    T.it('text va normalize(kind) yo‘naltirish', function () {
      T.eq(N.text('  a   b \n c '), 'a b c'); T.eq(N.normalize('whatever', ' x  y '), 'x y');
      T.eq(N.normalize('py', "a='x'"), N.python('a = "x"')); T.eq(N.normalize('tpl', '{{ a }}'), '{{a}}');
      T.eq(N.normalize('sh', 'ls   -la'), 'ls -la');
    });
    T.it('equivalent', function () {
      T.assert(N.equivalent('py', 'x=1 # c', 'x = 1')); T.assert(!N.equivalent('py', 'x=1', 'x=2'));
      T.assert(N.equivalent('tpl', '{{ a }}', '{{a}}'));
    });
    T.it('haqiqiy BookShop qatorlari: filter(user_id=x) va filter(user=x) NORMALIZATSIYA bilan teng EMAS (maxsus qoida kerak)', function () {
      differ('Book.objects.filter(user_id=u)', 'Book.objects.filter(user=u)');
    });
  });
})();
