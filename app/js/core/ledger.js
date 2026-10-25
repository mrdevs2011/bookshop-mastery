/* ledger.js — zanjir-xeshli urinishlar jurnali + sof-JS SHA-256 (file:// da crypto.subtle ga tayanilmaydi).
   Halol cheklov: bu mahalliy app — o'zgartirishni SEZADI, to'liq oldini olmaydi (README, P9). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  // ---- SHA-256 (K va H konstantalari tub sonlarning ildizidan hisoblanadi; testlar standart vektorlar bilan tekshiradi)
  var K = [], H0 = [];
  (function () {
    var primes = [], n = 2;
    while (primes.length < 64) {
      var isP = true;
      for (var i = 0; i < primes.length; i++) { if (n % primes[i] === 0) { isP = false; break; } }
      if (isP) primes.push(n);
      n++;
    }
    function frac32(x) { return Math.floor((x - Math.floor(x)) * 4294967296) >>> 0; }
    for (var j = 0; j < 64; j++) K.push(frac32(Math.cbrt(primes[j])));
    for (var k = 0; k < 8; k++) H0.push(frac32(Math.sqrt(primes[k])));
  })();

  function utf8(str) {
    var out = [];
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 0xD800 && c <= 0xDBFF && i + 1 < str.length) {
        var d = str.charCodeAt(i + 1);
        if (d >= 0xDC00 && d <= 0xDFFF) { c = 0x10000 + ((c - 0xD800) << 10) + (d - 0xDC00); i++; }
      }
      if (c < 0x80) out.push(c);
      else if (c < 0x800) out.push(0xC0 | (c >> 6), 0x80 | (c & 63));
      else if (c < 0x10000) out.push(0xE0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
      else out.push(0xF0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    }
    return out;
  }
  function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }

  function sha256(str) {
    var b = utf8(String(str)), l = b.length;
    var total = ((l + 9 + 63) >>> 6) << 6;
    var m = new Uint8Array(total);
    for (var i = 0; i < l; i++) m[i] = b[i];
    m[l] = 0x80;
    var hi = Math.floor(l / 0x20000000), lo = (l << 3) >>> 0;
    m[total - 8] = (hi >>> 24) & 255; m[total - 7] = (hi >>> 16) & 255; m[total - 6] = (hi >>> 8) & 255; m[total - 5] = hi & 255;
    m[total - 4] = (lo >>> 24) & 255; m[total - 3] = (lo >>> 16) & 255; m[total - 2] = (lo >>> 8) & 255; m[total - 1] = lo & 255;

    var h = H0.slice(), w = new Array(64);
    for (var off = 0; off < total; off += 64) {
      for (var t = 0; t < 16; t++) {
        var p = off + t * 4;
        w[t] = ((m[p] << 24) | (m[p + 1] << 16) | (m[p + 2] << 8) | m[p + 3]) | 0;
      }
      for (t = 16; t < 64; t++) {
        var s0 = rotr(w[t - 15], 7) ^ rotr(w[t - 15], 18) ^ (w[t - 15] >>> 3);
        var s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> 10);
        w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0;
      }
      var a = h[0], bb = h[1], c = h[2], d = h[3], e = h[4], f = h[5], g = h[6], hh = h[7];
      for (t = 0; t < 64; t++) {
        var S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        var ch = (e & f) ^ (~e & g);
        var t1 = (hh + S1 + ch + K[t] + w[t]) | 0;
        var S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        var maj = (a & bb) ^ (a & c) ^ (bb & c);
        var t2 = (S0 + maj) | 0;
        hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = bb; bb = a; a = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a) | 0; h[1] = (h[1] + bb) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0;
      h[4] = (h[4] + e) | 0; h[5] = (h[5] + f) | 0; h[6] = (h[6] + g) | 0; h[7] = (h[7] + hh) | 0;
    }
    var hex = '';
    for (var q = 0; q < 8; q++) hex += ('00000000' + (h[q] >>> 0).toString(16)).slice(-8);
    return hex;
  }

  // ---- zanjirli jurnal
  var GENESIS = new Array(65).join('0');
  function canon(e) {
    return JSON.stringify([e.i, e.t, e.day, e.qid, e.seed, e.ah, e.res, e.help, e.ms, e.mode, e.prev]);
  }
  function append(list, d) {
    var prev = list.length ? list[list.length - 1].hash : GENESIS;
    var e = {
      i: list.length,
      t: d.t != null ? d.t : BS.clock.now(),
      day: d.day != null ? d.day : BS.srs.dayOf(d.t != null ? d.t : BS.clock.now()),
      qid: String(d.qid),
      seed: d.seed != null ? d.seed : 0,
      ah: d.answer == null ? '' : sha256(String(d.answer)),
      res: d.res != null ? Math.round(d.res * 1000) / 1000 : 0,
      help: d.help || 0,
      ms: Math.round(d.ms || 0),
      mode: d.mode || '',
      prev: prev
    };
    e.hash = sha256(canon(e));
    list.push(e);
    return e;
  }
  function verify(list) {
    var prev = GENESIS;
    for (var i = 0; i < list.length; i++) {
      var e = list[i];
      if (!e || e.i !== i) return { ok: false, at: i, why: 'index' };
      if (e.prev !== prev) return { ok: false, at: i, why: 'prev' };
      if (sha256(canon(e)) !== e.hash) return { ok: false, at: i, why: 'hash' };
      prev = e.hash;
    }
    return { ok: true, n: list.length, head: prev };
  }
  function exportJSON(list) { return JSON.stringify({ v: 1, entries: list }); }
  function importJSON(str) {
    try {
      var o = JSON.parse(str);
      var v = verify(o.entries || []);
      return { ok: v.ok, at: v.at, why: v.why, entries: o.entries || [] };
    } catch (e) { return { ok: false, why: 'json', entries: [] }; }
  }

  BS.sha256 = sha256;
  BS.ledger = { GENESIS: GENESIS, append: append, verify: verify, exportJSON: exportJSON, importJSON: importJSON };
})();
