/* normalize.js — yozma javoblarni normallashtirish: Python tokenizatori, kanonik qatorlar (probel/qo'shtirnoq/izoh/
   ortiqcha qavs farqlari yo'q; indentatsiya SEMANTIK — daraja bo'yicha), Django shablon va shell normalizatori.
   Semantik farq (== vs =, `:` yo'q va h.k.) normalizatsiyadan keyin ham farq bo'lib qoladi. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  var MULTI = ['**=', '//=', '>>=', '<<=', '...', '!=', '==', '<=', '>=', '->', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '@=', ':=', '**', '//', '<<', '>>'];
  var reStr = /([rRbBuUfF]{1,2})?('''|"""|'|")/y;
  var reNum = /0[xX][0-9a-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|(?:\d[\d_]*\.?[\d_]*|\.\d[\d_]*)(?:[eE][+-]?\d+)?[jJ]?/y;
  var reName = /[A-Za-z_\u0080-\uFFFF][\w\u0080-\uFFFF]*/y;

  function scanString(src, i) {
    reStr.lastIndex = i;
    var m = reStr.exec(src);
    if (!m) return null;
    var prefix = m[1] || '', q = m[2], triple = q.length === 3, qc = q.charAt(0);
    var start = i + m[0].length, j = start;
    while (j < src.length) {
      var c = src.charAt(j);
      if (c === '\\') { j += 2; continue; }
      if (triple) {
        if (src.substr(j, 3) === q) return { end: j + 3, prefix: prefix, q: q, body: src.slice(start, j) };
      } else {
        if (c === qc) return { end: j + 1, prefix: prefix, q: q, body: src.slice(start, j) };
        if (c === '\n') break;                 // yopilmagan satr — xatoga bardoshli
      }
      j++;
    }
    var e = Math.min(j, src.length);
    return { end: e, prefix: prefix, q: q, body: src.slice(start, e) };
  }
  function canonStr(p, q, body) {
    p = p.toLowerCase();
    if (q.length === 3) { if (body.indexOf('"""') < 0) q = '"""'; return p + q + body + q; }
    var raw = p.indexOf('r') >= 0, b = body;
    if (!raw) b = b.replace(/\\(['"])/g, '$1');
    if (b.indexOf('"') < 0) return p + '"' + b + '"';
    if (b.indexOf("'") < 0) return p + "'" + b + "'";
    if (raw) return p + q + body + q;
    return p + '"' + b.replace(/"/g, '\\"') + '"';
  }

  // mantiqiy qatorlar: [{indent, line, toks:[{t,v}]}]; izoh va bo'sh qatorlar tashlanadi
  function tokenizeLines(src) {
    src = String(src).replace(/\r\n?/g, '\n');
    var i = 0, n = src.length, lines = [], toks = [], depth = 0, atStart = true, lineNo = 1, indent = 0, curLine = 1;
    function flush() { if (toks.length) lines.push({ indent: indent, line: curLine, toks: toks }); toks = []; }
    while (i < n) {
      var ch = src.charAt(i);
      if (atStart && depth === 0) {
        var j = i, w = 0;
        while (j < n && (src.charAt(j) === ' ' || src.charAt(j) === '\t')) { w += src.charAt(j) === '\t' ? 8 : 1; j++; }
        if (j >= n) break;
        if (src.charAt(j) === '\n') { i = j + 1; lineNo++; continue; }
        if (src.charAt(j) === '#') { while (j < n && src.charAt(j) !== '\n') j++; if (j < n) { j++; lineNo++; } i = j; continue; }
        indent = w; curLine = lineNo; i = j; atStart = false; continue;
      }
      if (ch === ' ' || ch === '\t') { i++; continue; }
      if (ch === '\\' && src.charAt(i + 1) === '\n') { i += 2; lineNo++; continue; }
      if (ch === '\n') {
        lineNo++; i++;
        if (depth === 0) { flush(); atStart = true; }
        continue;
      }
      if (ch === '#') { while (i < n && src.charAt(i) !== '\n') i++; continue; }
      var s = (/[A-Za-z]|['"]/.test(ch)) ? scanString(src, i) : null;
      if (s) {
        var text = src.slice(i, s.end);
        lineNo += (text.match(/\n/g) || []).length;
        toks.push({ t: 'str', v: canonStr(s.prefix, s.q, s.body) });
        i = s.end; continue;
      }
      if (/[0-9]/.test(ch) || (ch === '.' && /[0-9]/.test(src.charAt(i + 1)))) {
        reNum.lastIndex = i; var mn = reNum.exec(src);
        if (mn && mn[0].length) { toks.push({ t: 'num', v: mn[0] }); i += mn[0].length; continue; }
      }
      reName.lastIndex = i; var mm = reName.exec(src);
      if (mm && mm[0].length) { toks.push({ t: 'name', v: mm[0] }); i += mm[0].length; continue; }
      var op = null;
      for (var k = 0; k < MULTI.length; k++) if (src.substr(i, MULTI[k].length) === MULTI[k]) { op = MULTI[k]; break; }
      if (!op) op = ch;
      if (op === '(' || op === '[' || op === '{') depth++;
      else if (op === ')' || op === ']' || op === '}') depth = Math.max(0, depth - 1);
      toks.push({ t: 'op', v: op });
      i += op.length;
    }
    flush();
    return lines;
  }

  function matchParen(arr, start) {
    var d = 0;
    for (var i = start; i < arr.length; i++) {
      var t = arr[i];
      if (t.t !== 'op') continue;
      if (t.v === '(' || t.v === '[' || t.v === '{') d++;
      else if (t.v === ')' || t.v === ']' || t.v === '}') { d--; if (d === 0) return i; }
    }
    return -1;
  }
  // if/elif/while/return/assert dan keyingi butun ifodani o'rab turgan ortiqcha qavslarni olib tashlaydi
  function stripParens(toks) {
    if (!toks.length || toks[0].t !== 'name') return toks;
    var kw = toks[0].v;
    if (kw !== 'if' && kw !== 'elif' && kw !== 'while' && kw !== 'return' && kw !== 'assert') return toks;
    var end = toks.length;
    if (kw !== 'return' && kw !== 'assert') {
      if (toks[end - 1].v === ':' && toks[end - 1].t === 'op') end--; else return toks;
    }
    var inner = toks.slice(1, end);
    while (inner.length > 2 && inner[0].t === 'op' && inner[0].v === '(' && matchParen(inner, 0) === inner.length - 1) inner = inner.slice(1, -1);
    return [toks[0]].concat(inner, toks.slice(end));
  }

  // kanonik qatorlar: [{level, toks:[string], key, line}]
  function canonLines(src) {
    var L = tokenizeLines(src), stack = [0], out = [];
    L.forEach(function (ln) {
      while (stack.length > 1 && ln.indent < stack[stack.length - 1]) stack.pop();
      if (ln.indent > stack[stack.length - 1]) stack.push(ln.indent);
      var level = stack.length - 1;
      var toks = stripParens(ln.toks).map(function (t) { return t.v; });
      out.push({ level: level, toks: toks, key: level + '|' + toks.join(' '), line: ln.line });
    });
    return out;
  }
  function python(src) {
    return canonLines(src).map(function (l) { return new Array(l.level + 1).join('  ') + l.toks.join(' '); }).join('\n');
  }

  // Django shablon: {{ x }} ≡ {{x}}, tag ichidagi '..' ≡ "..", HTML probellari yig'iladi
  function template(src) {
    var s = String(src).replace(/\r\n?/g, '\n');
    s = s.replace(/\{%([\s\S]*?)%\}|\{\{([\s\S]*?)\}\}/g, function (all, tag, v) {
      var open = tag !== undefined ? '{%' : '{{', close = tag !== undefined ? '%}' : '}}';
      var inner = (tag !== undefined ? tag : v).trim().replace(/\s+/g, ' ');
      inner = inner.replace(/'([^'"]*)'/g, '"$1"');
      return open + inner + close;
    });
    return s.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
  }
  function shell(cmd) {
    var parts = String(cmd).trim().match(/'[^']*'|"(?:\\.|[^"\\])*"|\S+/g) || [];
    return parts.map(function (p) {
      if (p.charAt(0) === "'" && p.charAt(p.length - 1) === "'" && p.length >= 2) {
        var b = p.slice(1, -1);
        if (!/["$\\`!]/.test(b)) return '"' + b + '"';
      }
      return p;
    }).join(' ');
  }
  function text(s) { return String(s).trim().replace(/\s+/g, ' '); }

  function normalize(kind, s) {
    if (kind === 'py' || kind === 'python') return python(s);
    if (kind === 'tpl' || kind === 'template') return template(s);
    if (kind === 'sh' || kind === 'shell') return shell(s);
    return text(s);
  }
  function equivalent(kind, a, b) { return normalize(kind, a) === normalize(kind, b); }

  BS.normalize = {
    tokenizeLines: tokenizeLines, canonLines: canonLines, canonStr: canonStr,
    python: python, template: template, shell: shell, text: text, normalize: normalize, equivalent: equivalent
  };
})();
