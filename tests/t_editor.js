(function () { var T = window.T, BS = window.BS, E = BS.editor;
  function ed(v, s, e, key, o) { return E.edit(v, s, e == null ? s : e, key, o); }
  function chk(r, value, s, e) { T.assert(r.handled, 'handled bo‘lishi kerak'); T.eq(r.value, value); T.eq([r.selStart, r.selEnd], [s, e == null ? s : e]); }

  T.describe('editor › edit()', function () {
    T.it('Tab: ustun bo‘yicha keyingi 4 ga karrali joyga', function () {
      chk(ed('', 0, 0, 'Tab'), '    ', 4); chk(ed('ab', 2, 2, 'Tab'), 'ab  ', 4); chk(ed('abcd', 4, 4, 'Tab'), 'abcd    ', 8);
    });
    T.it('Tab: ko‘p qator tanlansa — hammasi surilidi, bo‘sh qatorlarga tegilmaydi', function () {
      var r = ed('a\n\nb', 0, 4, 'Tab'); T.assert(r.handled); T.eq(r.value, '    a\n\n    b');
    });
    T.it('Shift+Tab: 4 gacha probel olinadi (tab ham)', function () {
      var r = ed('    a\n  b\n\tc', 0, 13, 'Shift+Tab'); T.eq(r.value, 'a\nb\nc');
      T.eq(ed('x', 0, 0, 'Shift+Tab').value, 'x');
    });
    T.it('Enter: oldingi indentatsiyani saqlaydi', function () { chk(ed('    a = 1', 9, 9, 'Enter'), '    a = 1\n    ', 14); });
    T.it('Enter: ":" dan keyin (py) bir daraja ichkariga', function () { chk(ed('if x:', 5, 5, 'Enter'), 'if x:\n    ', 10); });
    T.it('Enter: izohdagi ":" hisobga olinmaydi', function () { chk(ed('x = 1  # a:', 11, 11, 'Enter'), 'x = 1  # a:\n', 12); });
    T.it('Enter: html tilida ":" indentatsiya qo‘shmaydi', function () { chk(ed('a:', 2, 2, 'Enter', { lang: 'html' }), 'a:\n', 3); });
    T.it('Enter: qavs orasida — ichki qator + yopuvchi qavs pastga', function () { chk(ed('f()', 2, 2, 'Enter'), 'f(\n    \n)', 7); });
    T.it('Enter: tanlangan matn almashtiriladi', function () { chk(ed('ab', 0, 2, 'Enter'), '\n', 1); });
    T.it('Backspace: bo‘sh juftlik ikkalasi ham o‘chadi', function () {
      chk(ed('()', 1, 1, 'Backspace'), '', 0); chk(ed('""', 1, 1, 'Backspace'), '', 0); T.assert(!ed('(x)', 2, 2, 'Backspace').handled);
    });
    T.it('Backspace: indentatsiya bo‘yicha 4 ta probel birdan', function () {
      chk(ed('    ', 4, 4, 'Backspace'), '', 0); T.assert(!ed('   ', 3, 3, 'Backspace').handled); T.assert(!ed('', 0, 0, 'Backspace').handled);
      chk(ed('    x', 4, 4, 'Backspace'), 'x', 0);
    });
    T.it('qavs juftlash: oxirida va bo‘shliq/yopuvchi oldida', function () {
      chk(ed('', 0, 0, '('), '()', 1); chk(ed('[', 1, 1, '{'), '[{}', 2); chk(ed('a ', 2, 2, '['), 'a []', 3);
    });
    T.it('qavs juftlash: so‘z oldida juftlanmaydi', function () { T.assert(!ed('foo', 0, 0, '(').handled); });
    T.it('tanlanganni o‘rab olish (teskari tanlov ham)', function () {
      chk(ed('abc', 0, 3, '('), '(abc)', 1, 4); chk(ed('abc', 3, 0, '"'), '"abc"', 1, 4);
    });
    T.it('qo‘shtirnoq: juftlash, bosib o‘tish, so‘z ichida (don\'t) juftlanmaydi', function () {
      chk(ed('', 0, 0, '"'), '""', 1); chk(ed('""', 1, 1, '"'), '""', 2); T.assert(!ed('don', 3, 3, "'").handled);
    });
    T.it('yopuvchi qavsni bosganda — ustidan o‘tadi', function () {
      chk(ed('()', 1, 1, ')'), '()', 2); T.assert(!ed('(', 1, 1, ')').handled);
    });
    T.it('oddiy belgi va noma‘lum tugma — handled emas', function () {
      T.assert(!ed('a', 1, 1, 'b').handled); T.assert(!ed('a', 1, 1, 'ArrowLeft').handled);
    });
  });

  T.describe('editor › DOM', function () {
    T.itDom('create: qator raqamlari, getValue/setValue, markErrors, destroy', function () {
      var box = document.createElement('div'), ch = 0, e = E.create(box, { value: 'a\nb', onChange: function () { ch++; } });
      T.eq(box.querySelectorAll('.ed-ln').length, 2); T.eq(e.getValue(), 'a\nb');
      e.setValue('a\nb\nc'); T.eq(box.querySelectorAll('.ed-ln').length, 3);
      e.markErrors([{ line: 2, msg: 'xato' }]);
      T.eq(box.querySelectorAll('.ed-ln.err').length, 1); T.eq(box.querySelectorAll('.band').length, 1);
      e.clearErrors(); T.eq(box.querySelectorAll('.ed-ln.err').length, 0);
      e.destroy(); T.eq(box.children.length, 0);
    });
    T.itDom('highlight qatlami kod bilan sinxron va xavfsiz', function () {
      var box = document.createElement('div'), e = E.create(box, { value: 'x = "<b>"' });
      T.eq(box.querySelector('.ed-hl').textContent, 'x = "<b>"\n'); T.eq(box.querySelectorAll('.ed-hl b').length, 0);
      e.setLang('tpl'); T.assert(box.firstChild.className.indexOf('ed-tpl') >= 0);
    });
  });
})();
