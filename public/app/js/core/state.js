/* state.js — yagona holat (localStorage; bo'lmasa xotirada). Qulf/ochish mantig'i faqat mastery.js + state.js da. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};
  BS.clock = BS.clock || { now: function () { return Date.now(); } };

  var KEY = 'bs.v1';
  var LEVELS = [
    { name: 'Yangi', xp: 0 }, { name: 'Shogird', xp: 500 }, { name: 'Usta', xp: 2000 },
    { name: 'Arxitektor', xp: 6000 }, { name: 'BOMBA', xp: 15000 }
  ];

  function memStore() {
    var m = {};
    return {
      mem: true,
      getItem: function (k) { return Object.prototype.hasOwnProperty.call(m, k) ? m[k] : null; },
      setItem: function (k, v) { m[k] = String(v); },
      removeItem: function (k) { delete m[k]; }
    };
  }
  function detect() {
    try {
      var s = window.localStorage;
      if (!s) return memStore();
      s.setItem('__bs_t', '1'); s.removeItem('__bs_t');
      return s;
    } catch (e) { return memStore(); }
  }

  var store = null, st = null, subs = [];

  function fresh(now) {
    return {
      v: 1, created: now,
      profile: { xp: 0, streak: 0, bestStreak: 0, lastDay: null, badges: [] },
      concepts: {},          // id -> mastery yozuvi (mastery.js)
      bosses: {},            // modul id -> true
      ledger: [],            // zanjirli jurnal (ledger.js)
      daily: {},
      settings: { sound: true, reduceMotion: false, theme: 'dark' },
      flags: { integrity: true, integrityAt: null }
    };
  }
  function migrate(o) {
    if (!o || typeof o !== 'object' || o.v !== 1) return null;
    var f = fresh(o.created || BS.clock.now());
    Object.keys(f).forEach(function (k) {
      if (!(k in o)) o[k] = f[k];
      else if (f[k] && typeof f[k] === 'object' && !Array.isArray(f[k])) {
        Object.keys(f[k]).forEach(function (kk) { if (!(kk in o[k])) o[k][kk] = f[k][kk]; });
      }
    });
    return o;
  }

  function init(storage) {
    store = storage || detect();
    var raw = null, o = null;
    try { raw = store.getItem(KEY); } catch (e) { raw = null; }
    if (raw) { try { o = migrate(JSON.parse(raw)); } catch (e) { o = null; } }
    st = o || fresh(BS.clock.now());
    return st;
  }
  function get() { if (!st) init(); return st; }
  function save() { try { store.setItem(KEY, JSON.stringify(st)); return true; } catch (e) { return false; } }
  function notify() { subs.slice().forEach(function (f) { try { f(st); } catch (e) { /* tinglovchi xatosi yutilmaydi, lekin zanjirni buzmaydi */ if (typeof console !== 'undefined') console.error(e); } }); }
  function update(fn) { var s = get(); var r = fn(s); save(); notify(); return r; }
  function on(f) { subs.push(f); return function () { subs = subs.filter(function (x) { return x !== f; }); }; }
  function reset() { st = fresh(BS.clock.now()); save(); notify(); return st; }

  function levelFor(xp) {
    var i = 0;
    for (var j = 0; j < LEVELS.length; j++) if (xp >= LEVELS[j].xp) i = j;
    return { index: i, name: LEVELS[i].name, next: LEVELS[i + 1] || null };
  }
  function checkIntegrity() {
    var s = get(), v = BS.ledger.verify(s.ledger);
    s.flags.integrity = v.ok; s.flags.integrityAt = v.ok ? null : v.at;
    save();
    return v;
  }
  function exportAll() { return JSON.stringify(get()); }
  function importAll(json) {
    var o;
    try { o = migrate(JSON.parse(json)); } catch (e) { return { ok: false, why: 'json' }; }
    if (!o) return { ok: false, why: 'format' };
    var v = BS.ledger.verify(o.ledger || []);
    o.flags.integrity = v.ok; o.flags.integrityAt = v.ok ? null : v.at;   // buzilgan zanjir yuklanadi, lekin bayroq bilan (imtihon/sertifikat bloklanadi)
    st = o; save(); notify();
    return { ok: true, integrity: v.ok };
  }

  BS.state = {
    KEY: KEY, LEVELS: LEVELS, init: init, get: get, save: save, update: update, on: on, reset: reset,
    levelFor: levelFor, checkIntegrity: checkIntegrity, exportAll: exportAll, importAll: importAll,
    memStore: memStore, fresh: fresh
  };
})();
