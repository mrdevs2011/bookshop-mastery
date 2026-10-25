/* editor.js — o'z kod muharriri: qator raqami, avto-indent, Tab/Shift+Tab, qavs/qo'shtirnoq juftlash,
   sintaksis rangi (hl.js), grader xato chiziqlari. Tahrir mantig'i `edit()` — sof funksiya (testlanadi). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  var PAIRS = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
  var CLOSERS = { ')': 1, ']': 1, '}': 1 };

  function lineStart(v, p) { return v.lastIndexOf('\n', p - 1) + 1; }
  function lineEnd(v, p) { var i = v.indexOf('\n', p); return i < 0 ? v.length : i; }
  function res(v, s, e) { return { handled: true, value: v, selStart: s, selEnd: e }; }
  function none(v, s, e) { return { handled: false, value: v, selStart: s, selEnd: e }; }
  function isWord(c) { return !!c && /[A-Za-z0-9_]/.test(c); }
  function spaces(n) { return new Array(n + 1).join(' '); }

  function blockRange(v, s, e) {
    var a = lineStart(v, s), b = (e > s && v.charAt(e - 1) === '\n') ? e - 1 : e;
    return { a: a, end: lineEnd(v, b) };
  }
  function indentLines(v, s, e, ind) {
    var r = blockRange(v, s, e), lines = v.slice(r.a, r.end).split('\n'), count = 0;
    var out = lines.map(function (l) { if (!l.length) return l; count++; return ind + l; });
    var firstNonEmpty = lines[0].length > 0;
    return res(v.slice(0, r.a) + out.join('\n') + v.slice(r.end), s + (firstNonEmpty ? ind.length : 0), e + ind.length * count);
  }
  function outdentLines(v, s, e, ind) {
    var r = blockRange(v, s, e), lines = v.slice(r.a, r.end).split('\n'), removed = [], total = 0;
    var out = lines.map(function (l) {
      var n = 0;
      if (l.charAt(0) === '\t') n = 1;
      else while (n < ind.length && l.charAt(n) === ' ') n++;
      removed.push(n); total += n;
      return l.slice(n);
    });
    var newS = s - Math.min(removed[0], s - r.a);
    var newE = Math.max(newS, e - total);
    return res(v.slice(0, r.a) + out.join('\n') + v.slice(r.end), newS, newE);
  }

  // key: 'Tab' | 'Shift+Tab' | 'Enter' | 'Backspace' | bitta belgi. opts: {lang, indent}
  function edit(v, s, e, key, opts) {
    opts = opts || {};
    var ind = opts.indent || '    ', lang = opts.lang || 'py';
    if (s > e) { var t = s; s = e; e = t; }
    var before = v.slice(0, s), after = v.slice(e), sel = v.slice(s, e);

    if (key === 'Tab') {
      if (sel.indexOf('\n') < 0) {
        var col = s - lineStart(v, s), n = ind.length - (col % ind.length);
        return res(before + spaces(n) + after, s + n, s + n);
      }
      return indentLines(v, s, e, ind);
    }
    if (key === 'Shift+Tab') return outdentLines(v, s, e, ind);

    if (key === 'Enter') {
      var ls = lineStart(v, s), cur = v.slice(ls, s), lead = /^[ \t]*/.exec(cur)[0];
      var prev = before.charAt(before.length - 1), next = after.charAt(0);
      var isOpen = prev !== '' && '([{'.indexOf(prev) >= 0;
      var colon = lang === 'py' && /:\s*$/.test(cur.replace(/\s*#.*$/, ''));
      if (isOpen && next === PAIRS[prev]) {
        var mid = lead + ind;
        return res(before + '\n' + mid + '\n' + lead + after, s + 1 + mid.length, s + 1 + mid.length);
      }
      var ins = '\n' + lead + ((colon || isOpen) ? ind : '');
      return res(before + ins + after, s + ins.length, s + ins.length);
    }

    if (key === 'Backspace') {
      if (s !== e || s === 0) return none(v, s, e);
      var p = v.charAt(s - 1), nx = v.charAt(s);
      if (PAIRS[p] !== undefined && PAIRS[p] === nx) return res(v.slice(0, s - 1) + v.slice(s + 1), s - 1, s - 1);
      var cur2 = v.slice(lineStart(v, s), s);
      if (/^ +$/.test(cur2) && cur2.length % ind.length === 0) return res(v.slice(0, s - ind.length) + after, s - ind.length, s - ind.length);
      return none(v, s, e);
    }

    if (key.length === 1) {
      if (PAIRS[key] !== undefined) {
        var close = PAIRS[key];
        if (s !== e) return res(before + key + sel + close + after, s + 1, e + 1);          // tanlanganni o'rab olish
        var nx2 = after.charAt(0);
        if (key === close) {                                                                  // qo'shtirnoq
          if (nx2 === key) return res(v, s + 1, s + 1);
          var pv = before.charAt(before.length - 1);
          if (isWord(pv) || pv === key) return none(v, s, e);                                 // don't, """ — juftlanmaydi
          return res(before + key + key + after, s + 1, s + 1);
        }
        if (nx2 === '' || /[\s)\]},;:.]/.test(nx2)) return res(before + key + close + after, s + 1, s + 1);
        return none(v, s, e);
      }
      if (CLOSERS[key] && s === e && after.charAt(0) === key) return res(v, s + 1, s + 1);   // yopuvchini "bosib o'tish"
    }
    return none(v, s, e);
  }

  // ---------------- DOM komponenti
  function create(container, opts) {
    opts = opts || {};
    var h = BS.ui.h, lang = opts.lang || 'py', indent = opts.indent || '    ';
    var minRows = opts.minRows || 6, maxRows = opts.maxRows || 28, errors = [], trap = true;

    var gutter = h('div', { class: 'ed-gutter', 'aria-hidden': 'true' });
    var bands = h('div', { class: 'ed-bands', 'aria-hidden': 'true' });
    var pre = h('pre', { class: 'ed-hl', 'aria-hidden': 'true' });
    var ta = h('textarea', { class: 'ed-ta', spellcheck: 'false', autocapitalize: 'off', autocomplete: 'off', autocorrect: 'off', wrap: 'off', 'aria-label': opts.label || 'Kod muharriri' });
    var stack = h('div', { class: 'ed-stack' }, bands, pre, ta);
    var root = h('div', { class: 'ed ed-' + lang }, gutter, stack);
    ta.value = opts.value || '';
    container.appendChild(root);

    function errFor(n) { for (var i = 0; i < errors.length; i++) if (errors[i].line === n) return errors[i]; return null; }
    function render() {
      var v = ta.value, n = v.split('\n').length;
      BS.ui.rawHTML(pre, BS.hl.highlight(lang, v) + '\n');
      BS.ui.clear(gutter); BS.ui.clear(bands);
      for (var i = 1; i <= n; i++) {
        var er = errFor(i);
        gutter.appendChild(h('div', { class: 'ed-ln' + (er ? ' err' : ''), title: er ? er.msg : null }, String(i)));
      }
      errors.forEach(function (er) {
        bands.appendChild(h('div', { class: 'band', title: er.msg, style: { top: 'calc(' + (er.line - 1) + ' * var(--ed-lh))' } }));
      });
      var rows = Math.max(minRows, Math.min(maxRows, n));
      root.style.setProperty('--ed-rows', String(rows));
    }
    function sync() {
      pre.scrollTop = ta.scrollTop; pre.scrollLeft = ta.scrollLeft;
      gutter.scrollTop = ta.scrollTop;
      bands.style.transform = 'translateY(' + (-ta.scrollTop) + 'px)';
    }
    function changed() { render(); if (opts.onChange) opts.onChange(ta.value); }

    ta.addEventListener('scroll', sync);
    ta.addEventListener('input', changed);
    ta.addEventListener('blur', function () { trap = true; });
    ta.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
      if (e.key === 'Escape') { trap = false; return; }          // Esc dan keyin Tab fokusni chiqaradi (klaviatura tuzog'i yo'q)
      var key = e.key;
      if (key === 'Tab') { if (!trap) return; if (e.shiftKey) key = 'Shift+Tab'; }
      if (!(key === 'Tab' || key === 'Shift+Tab' || key === 'Enter' || key === 'Backspace' || key.length === 1)) return;
      var r = edit(ta.value, ta.selectionStart, ta.selectionEnd, key, { lang: lang, indent: indent });
      if (!r.handled) return;
      e.preventDefault();
      ta.value = r.value; ta.setSelectionRange(r.selStart, r.selEnd);
      changed();
    });
    render();

    return {
      el: root, ta: ta,
      getValue: function () { return ta.value; },
      setValue: function (v) { ta.value = v; render(); sync(); },
      markErrors: function (list) { errors = list || []; render(); },
      clearErrors: function () { errors = []; render(); },
      setLang: function (l) { lang = l; root.className = 'ed ed-' + l; render(); },
      focus: function () { ta.focus(); },
      destroy: function () { if (root.parentNode) root.parentNode.removeChild(root); }
    };
  }

  BS.editor = { edit: edit, create: create, PAIRS: PAIRS };
})();
