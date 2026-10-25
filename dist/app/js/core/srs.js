/* srs.js — Leitner oraliqli takror: 1 → 3 → 7 → 21 → 60 kun. Kunlar butun son (mahalliy kun raqami). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};
  BS.clock = BS.clock || { now: function () { return Date.now(); } };

  var INTERVALS = [1, 3, 7, 21, 60];

  function dayOf(ts) {
    var d = new Date(ts);
    return Math.floor((ts - d.getTimezoneOffset() * 60000) / 86400000);
  }
  function today() { return dayOf(BS.clock.now()); }

  // rec: {box, due}. success: bool. day: bugungi kun raqami.
  //  - birinchi urinish: quti 0, 1 kundan keyin takror
  //  - muvaffaqiyatsizlik: quti 0, ertaga
  //  - muvaffaqiyat va muddati kelgan: quti +1 (eng ko'pi 4), keyingi oraliq
  //  - muvaffaqiyat lekin hali erta: quti o'zgarmaydi (oldindan "pishirish" hisoblanmaydi)
  function apply(rec, success, day) {
    if (rec.due == null) { rec.box = 0; rec.due = day + INTERVALS[0]; return { first: true, advanced: false }; }
    if (!success) { rec.box = 0; rec.due = day + INTERVALS[0]; return { reset: true, advanced: false }; }
    if (rec.due <= day) {
      rec.box = Math.min(INTERVALS.length - 1, rec.box + 1);
      rec.due = day + INTERVALS[rec.box];
      return { advanced: true };
    }
    return { early: true, advanced: false };
  }
  function isDue(rec, day) { return rec && rec.due != null && rec.due <= day; }

  BS.srs = { INTERVALS: INTERVALS, dayOf: dayOf, today: today, apply: apply, isDue: isDue };
})();
