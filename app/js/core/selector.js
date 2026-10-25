/* selector.js — keyingi savolni tanlash: kutilgan muvaffaqiyat ~75%, interleaving (3 savoldan keyin modul almashadi),
   takrorlar, zaif nuqtalar, egizak savollar, format xilma-xilligi. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  // opts: {cands:[{id,concept,module,difficulty,format,twin?}], st, today, rng, recent:[ids], lastModules:[...], lastFormat, target}
  function rank(opts) {
    var st = opts.st, today = opts.today, target = opts.target || 0.75;
    var recent = opts.recent || [], lm = opts.lastModules || [];
    var lastMod = lm.length ? lm[lm.length - 1] : null, run = 0;
    for (var i = lm.length - 1; i >= 0 && lm[i] === lastMod; i--) run++;
    var out = [];
    (opts.cands || []).forEach(function (c) {
      if (recent.indexOf(c.id) >= 0) return;
      var rec = st.concepts[c.concept];
      var eff = rec ? BS.mastery.effectiveScore(rec, today) : 0;
      var p = BS.mastery.expected(eff, c.difficulty);
      var s = -Math.abs(p - target) * 10;
      if (rec) {
        if (rec.weak) s += 1.5;
        if (rec.twinPending && c.twin) s += 5;                       // egizak savol ustuvor
        if (BS.srs.isDue(rec, today)) s += 2;                        // muddati kelgan takror
        if (!rec.ok[c.format]) s += 0.6;                             // yangi formatda urinish (3 xil format kerak)
      } else s += 0.5;                                               // ko'rilmagan konsept
      if (c.twin && !(rec && rec.twinPending)) s -= 6;               // egizak faqat H3 dan keyin
      if (lastMod != null && c.module === lastMod) s -= run >= 3 ? 8 : 0.5;
      if (opts.lastFormat && c.format === opts.lastFormat) s -= 0.7;
      s += (opts.rng ? opts.rng.next() : 0) * 0.3;                   // teng holatda deterministik "tuz"
      out.push({ cand: c, score: s, p: p });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out;
  }
  function pick(opts) { var r = rank(opts); return r.length ? r[0].cand : null; }

  BS.selector = { rank: rank, pick: pick };
})();
