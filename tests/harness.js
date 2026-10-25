/* harness.js — kichik test freymvorki (node va brauzerda bir xil). */
(function () {
  'use strict';
  var g = (typeof window !== 'undefined') ? window : this;
  var T = g.T = { tests: [], cur: '' };
  T.describe = function (name, fn) { var p = T.cur; T.cur = p ? p + ' › ' + name : name; try { fn(); } finally { T.cur = p; } };
  T.it = function (name, fn) { T.tests.push({ name: T.cur + ' › ' + name, fn: fn, dom: false }); };
  T.itDom = function (name, fn) { T.tests.push({ name: T.cur + ' › ' + name, fn: fn, dom: true }); };
  T.assert = function (c, msg) { if (!c) throw new Error(msg || 'assert xato'); };
  T.eq = function (a, b, msg) {
    var A = JSON.stringify(a), B = JSON.stringify(b);
    if (A !== B) throw new Error((msg ? msg + ': ' : '') + 'kutilgan ' + B + ', lekin ' + A);
  };
  T.near = function (a, b, eps, msg) { if (Math.abs(a - b) > eps) throw new Error((msg ? msg + ': ' : '') + 'kutilgan ≈' + b + ', lekin ' + a); };
  T.throws = function (fn, msg) { var t = false; try { fn(); } catch (e) { t = true; } if (!t) throw new Error(msg || 'xato kutilgan edi'); };
  T.run = function () {
    var r = { total: T.tests.length, passed: 0, skipped: 0, failed: [] };
    T.tests.forEach(function (t) {
      if (t.dom && typeof document === 'undefined') { r.skipped++; return; }
      try { t.fn(); r.passed++; } catch (e) { r.failed.push({ name: t.name, err: String(e && e.message || e) }); }
    });
    return r;
  };
})();
