/* rng.js — deterministik seed'li PRNG (mulberry32). Har urinishda seed saqlanadi. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  function hashStr(s) {            // FNV-1a, 32-bit
    var h = 2166136261 >>> 0;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function create(seed) {
    var s = typeof seed === 'string' ? hashStr(seed) : (seed >>> 0);
    var f = mulberry32(s);
    return {
      seed: seed,
      next: f,
      int: function (a, b) { return a + Math.floor(f() * (b - a + 1)); },
      pick: function (arr) { return arr[Math.floor(f() * arr.length)]; },
      chance: function (p) { return f() < p; },
      shuffle: function (arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
          var j = Math.floor(f() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
      }
    };
  }
  function newSeed() { return (Date.now() ^ Math.floor(Math.random() * 4294967296)) >>> 0; }

  BS.rng = { create: create, hashStr: hashStr, newSeed: newSeed };
})();
