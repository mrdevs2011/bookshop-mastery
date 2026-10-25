/* hl.js — sintaksis ranglagich (tashqi kutubxonasiz): Python, Django shablon, HTML, shell.
   Invariant: teglarni olib, entity'larni qaytarsak — matn aynan asl holida (testlarda tekshiriladi). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function wrap(text, cls) { return cls ? '<span class="tok-' + cls + '">' + esc(text) + '</span>' : esc(text); }
  function set(str) { var o = {}; str.split(' ').forEach(function (w) { o[w] = 1; }); return o; }

  // rules: [{re (sticky), cls | fn(text, src, i) -> cls}]
  function scan(src, rules) {
    var out = '', i = 0, n = src.length;
    while (i < n) {
      var hit = false;
      for (var r = 0; r < rules.length; r++) {
        var rule = rules[r];
        rule.re.lastIndex = i;
        var m = rule.re.exec(src);
        if (m && m[0].length > 0) {
          out += wrap(m[0], rule.fn ? rule.fn(m[0], src, i) : rule.cls);
          i += m[0].length; hit = true; break;
        }
      }
      if (!hit) { out += esc(src.charAt(i)); i++; }
    }
    return out;
  }

  // ---------------- Python
  var PYKW = set('False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield');
  var PYBI = set('print len range int str float bool list dict set tuple open isinstance super type id sorted enumerate zip map filter any all min max sum abs round repr input object Exception ValueError KeyError');
  function hlPy(src) {
    var st = { prev: null };
    function fixed(cls) { return function () { st.prev = null; return cls; }; }
    return scan(src, [
      { re: /#[^\n]*/y, fn: fixed('cm') },
      { re: /(?:[rRbBuUfF]{1,2})?('''|""")[\s\S]*?(?:\1|$)/y, fn: fixed('str') },
      { re: /(?:[rRbBuUfF]{1,2})?(?:'(?:\\.|[^'\\\n])*'?|"(?:\\.|[^"\\\n])*"?)/y, fn: fixed('str') },
      { re: /@[A-Za-z_][\w.]*/y, fn: fixed('dec') },
      { re: /\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?|\.\d+/y, fn: fixed('num') },
      { re: /[A-Za-z_]\w*/y, fn: function (t) {
          var c = '';
          if (PYKW[t]) c = 'kw';
          else if (st.prev === 'def') c = 'fn';
          else if (st.prev === 'class') c = 'cls';
          else if (t === 'self' || t === 'cls') c = 'self';
          else if (PYBI[t]) c = 'bi';
          st.prev = (t === 'def' || t === 'class') ? t : null;
          return c;
        } },
      { re: /[ \t\r\n]+/y, fn: function () { return ''; } },
      { re: /[+\-*\/%=<>!&|^~:;,.()\[\]{}@]+/y, fn: fixed('op') }
    ]);
  }

  // ---------------- HTML
  function hlHtml(src) {
    var out = '', i = 0, n = src.length, inTag = false;
    var R = {
      comment: /<!--[\s\S]*?(?:-->|$)/y, doctype: /<![A-Za-z][^>]*>?/y, open: /<\/?[A-Za-z][\w:-]*/y,
      str: /"[^"]*"?|'[^']*'?/y, attr: /[A-Za-z_:@][\w:.-]*/y, eq: /=/y, close: /\/?>/y, ws: /\s+/y
    };
    function t(re) { re.lastIndex = i; var m = re.exec(src); return m && m[0].length ? m[0] : null; }
    var m;
    while (i < n) {
      if (!inTag) {
        if ((m = t(R.comment))) { out += wrap(m, 'cm'); i += m.length; }
        else if ((m = t(R.doctype))) { out += wrap(m, 'dt'); i += m.length; }
        else if ((m = t(R.open))) { out += wrap(m, 'tag'); i += m.length; inTag = true; }
        else {
          var j = src.indexOf('<', i + 1);
          if (j < 0) j = n;
          out += esc(src.slice(i, j)); i = j;
        }
      } else {
        if ((m = t(R.ws))) { out += esc(m); i += m.length; }
        else if ((m = t(R.close))) { out += wrap(m, 'tag'); i += m.length; inTag = false; }
        else if ((m = t(R.str))) { out += wrap(m, 'str'); i += m.length; }
        else if ((m = t(R.eq))) { out += wrap(m, 'op'); i += m.length; }
        else if ((m = t(R.attr))) { out += wrap(m, 'attr'); i += m.length; }
        else { out += esc(src.charAt(i)); i++; }
      }
    }
    return out;
  }

  // ---------------- Django shablon
  var TPLKW = set('for in if elif else endif endfor empty extends block endblock include load csrf_token url static with endwith not and or as');
  function tplTag(t) {
    if (t.charAt(1) === '#') return wrap(t, 'cm');
    var open = t.slice(0, 2), close = t.slice(-2), inner = t.slice(2, -2), isTag = open === '{%', first = true;
    var body = scan(inner, [
      { re: /"[^"]*"?|'[^']*'?/y, cls: 'str' },
      { re: /\|\s*[A-Za-z_]\w*/y, cls: 'fn' },
      { re: /\d+(?:\.\d+)?/y, cls: 'num' },
      { re: /[A-Za-z_][\w.]*/y, fn: function (w) {
          var c;
          if (first) c = isTag ? 'kw' : 'var';
          else c = TPLKW[w] ? 'kw' : 'var';
          first = false;
          return c;
        } },
      { re: /\s+/y, cls: '' }
    ]);
    return wrap(open, 'dt') + body + wrap(close, 'dt');
  }
  function hlTpl(src) {
    var re = /\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\}|\{#[\s\S]*?#\}/g, out = '', last = 0, m;
    while ((m = re.exec(src))) {
      if (m.index > last) out += hlHtml(src.slice(last, m.index));
      out += tplTag(m[0]);
      last = m.index + m[0].length;
    }
    if (last < src.length) out += hlHtml(src.slice(last));
    return out;
  }

  // ---------------- shell
  function hlSh(src) {
    var st = { cmd: true };
    function fixed(cls, cmd) { return function () { if (cmd !== undefined) st.cmd = cmd; return cls; }; }
    return scan(src, [
      { re: /(?<![^\n])\$ (?=\S)/y, fn: fixed('dim') },
      { re: /(?<![^\s])#[^\n]*/y, fn: fixed('cm') },
      { re: /'[^']*'?/y, fn: fixed('str', false) },
      { re: /"(?:\\[\s\S]|[^"\\])*"?/y, fn: fixed('str', false) },
      { re: /\$(?:\{[^}]*\}?|[A-Za-z_]\w*|[0-9@#?*!$-])/y, fn: fixed('var', false) },
      { re: /(?<![^\s])--?[A-Za-z][\w-]*(?:=\S*)?/y, fn: fixed('flag', false) },
      { re: /\|\||&&|[|;&<>]+/y, fn: fixed('op', true) },
      { re: /\n/y, fn: fixed('', true) },
      { re: /[ \t]+/y, fn: function () { return ''; } },
      { re: /[^\s|;&<>'"$#]+/y, fn: function () { var c = st.cmd ? 'fn' : ''; st.cmd = false; return c; } }
    ]);
  }

  var LANGS = { py: hlPy, python: hlPy, tpl: hlTpl, django: hlTpl, html: hlHtml, sh: hlSh, bash: hlSh, shell: hlSh };
  function highlight(lang, code) {
    var f = LANGS[lang];
    return f ? f(String(code)) : esc(code);
  }

  BS.hl = { highlight: highlight, esc: esc, langs: Object.keys(LANGS) };
})();
