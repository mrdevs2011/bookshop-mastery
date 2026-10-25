/* diff.js — LCS diff: qatorlar, tokenlar, belgilar; Dojo uchun report() (qator-qator, token darajasida).
   Yo'nalish: a = talaba, b = maqsad. op: 'eq' | 'del' (talabada ortiqcha) | 'add' (talabada yetishmaydi). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  function lcsOps(a, b, eq) {
    var n = a.length, m = b.length, dp = [], i, j;
    for (i = 0; i <= n; i++) dp.push(new Int32Array(m + 1));
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--)
      dp[i][j] = eq(a[i], b[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    var ops = []; i = 0; j = 0;
    while (i < n && j < m) {
      if (eq(a[i], b[j])) { ops.push({ op: 'eq', a: a[i], b: b[j] }); i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) { ops.push({ op: 'del', a: a[i] }); i++; }
      else { ops.push({ op: 'add', b: b[j] }); j++; }
    }
    while (i < n) { ops.push({ op: 'del', a: a[i++] }); }
    while (j < m) { ops.push({ op: 'add', b: b[j++] }); }
    return ops;
  }
  function same(x, y) { return x === y; }

  function lines(a, b) {
    return lcsOps(String(a).replace(/\r\n?/g, '\n').split('\n'), String(b).replace(/\r\n?/g, '\n').split('\n'), same);
  }

  var LEX = /"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?|[A-Za-z_]\w*|\d+(?:\.\d+)?|\*\*=?|\/\/=?|==|!=|<=|>=|->|[+\-*\/%&|^<>=!]=|\S/g;
  function lex(s) { return String(s).match(LEX) || []; }
  function tokenOps(aToks, bToks) {
    return lcsOps(aToks, bToks, same).map(function (o) {
      return { op: o.op, text: o.op === 'add' ? o.b : o.a };
    });
  }
  function tokens(a, b) { return tokenOps(lex(a), lex(b)); }

  function mergeRuns(ops) {
    var out = [];
    ops.forEach(function (o) {
      var last = out[out.length - 1];
      if (last && last.op === o.op) last.text += o.text; else out.push({ op: o.op, text: o.text });
    });
    return out;
  }
  function chars(a, b) {
    var ops = lcsOps(String(a).split(''), String(b).split(''), same).map(function (o) { return { op: o.op, text: o.op === 'add' ? o.b : o.a }; });
    return mergeRuns(ops);
  }
  function firstDiff(a, b) {
    a = String(a); b = String(b);
    var n = Math.min(a.length, b.length);
    for (var i = 0; i < n; i++) if (a.charAt(i) !== b.charAt(i)) return i;
    return a.length === b.length ? -1 : n;
  }

  // Dojo: talaba kodi vs maqsad kod -> qator-qator holat
  // status: ok | changed (token farqi/indentatsiya) | extra (talabada ortiqcha qator) | missing (yetishmaydi)
  function report(student, target) {
    var S = BS.normalize.canonLines(student), T = BS.normalize.canonLines(target);
    var ops = lcsOps(S, T, function (x, y) { return x.key === y.key; });
    var res = [], k = 0;
    while (k < ops.length) {
      if (ops[k].op === 'eq') {
        res.push({ status: 'ok', studentLine: ops[k].a.line, targetLine: ops[k].b.line, text: ops[k].b.toks.join(' ') });
        k++; continue;
      }
      var dels = [], adds = [];
      while (k < ops.length && ops[k].op !== 'eq') { (ops[k].op === 'del' ? dels : adds).push(ops[k]); k++; }
      var p = Math.min(dels.length, adds.length), q;
      for (q = 0; q < p; q++) {
        var s = dels[q].a, t = adds[q].b;
        res.push({
          status: 'changed', studentLine: s.line, targetLine: t.line,
          indent: { got: s.level, expected: t.level },
          ops: tokenOps(s.toks, t.toks),
          indentOnly: s.toks.join(' ') === t.toks.join(' ')
        });
      }
      for (q = p; q < dels.length; q++) res.push({ status: 'extra', studentLine: dels[q].a.line, text: dels[q].a.toks.join(' ') });
      for (q = p; q < adds.length; q++) res.push({ status: 'missing', targetLine: adds[q].b.line, text: adds[q].b.toks.join(' ') });
    }
    var ok = res.filter(function (r) { return r.status === 'ok'; }).length;
    return { exact: res.every(function (r) { return r.status === 'ok'; }), lines: res, ok: ok, total: T.length, score: T.length ? ok / T.length : 1 };
  }

  BS.diff = { lcsOps: lcsOps, lines: lines, lex: lex, tokens: tokens, tokenOps: tokenOps, chars: chars, firstDiff: firstDiff, report: report };
})();
