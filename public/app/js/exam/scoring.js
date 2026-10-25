/* BOOKSHOP 9.0 ball va band jadvali (PROMPT §9). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};
  var BANDS = [
    [98, 9.0], [94, 8.5], [90, 8.0], [85, 7.5], [80, 7.0], [74, 6.5],
    [68, 6.0], [60, 5.5], [52, 5.0], [44, 4.5], [36, 4.0], [28, 3.5],
    [20, 3.0], [0, 2.5]
  ];
  // Core 60 / Advanced 25 / Elite 15
  var TIER_W = { core: 60, advanced: 25, elite: 15 };

  function bandFromScore(score, critical) {
    score = Math.max(0, Math.min(100, score));
    var b = 2.5;
    for (var i = 0; i < BANDS.length; i++) {
      if (score >= BANDS[i][0]) { b = BANDS[i][1]; break; }
    }
    if (critical && b > 8.0) b = 8.0;
    return b;
  }
  function roundHalf(x) { return Math.round(x * 2) / 2; }

  // answers: [{tier, credit:0..1, critical?:bool, section}]
  function scoreExam(answers) {
    var byTier = { core: [], advanced: [], elite: [] };
    var bySec = { A: [], B: [], C: [], D: [] };
    var critical = false;
    (answers || []).forEach(function (a) {
      var t = a.tier || 'core';
      if (!byTier[t]) t = 'core';
      byTier[t].push(a.credit || 0);
      if (a.section && bySec[a.section]) bySec[a.section].push(a.credit || 0);
      if (a.critical) critical = true;
    });
    function avg(arr) {
      if (!arr.length) return 0;
      var s = 0; for (var i = 0; i < arr.length; i++) s += arr[i];
      return s / arr.length;
    }
    var total = 0;
    Object.keys(TIER_W).forEach(function (t) {
      total += avg(byTier[t]) * TIER_W[t];
    });
    total = Math.round(total * 10) / 10;
    var secBands = {};
    Object.keys(bySec).forEach(function (s) {
      secBands[s] = bandFromScore(avg(bySec[s]) * 100, false);
    });
    var overall = bandFromScore(total, critical);
    var secVals = Object.keys(secBands).map(function (k) { return secBands[k]; });
    var meanSec = secVals.length ? secVals.reduce(function (a, b) { return a + b; }, 0) / secVals.length : overall;
    var combined = roundHalf((overall + meanSec) / 2);
    if (critical && combined > 8.0) combined = 8.0;
    return {
      total: total,
      band: combined,
      sectionBands: secBands,
      critical: critical,
      passed: total >= 60,
      tiers: {
        core: avg(byTier.core),
        advanced: avg(byTier.advanced),
        elite: avg(byTier.elite)
      }
    };
  }

  // mastery-based band predictor (no exam taken yet)
  function predictBand(st, conceptIds) {
    conceptIds = conceptIds || Object.keys((st && st.concepts) || {});
    if (!conceptIds.length) return { band: 2.5, total: 0, note: 'ma\u2019lumot yo\u2018q' };
    var today = BS.srs ? BS.srs.today() : 0;
    var sum = 0, n = 0, mastered = 0;
    conceptIds.forEach(function (id) {
      var r = st.concepts[id];
      if (!r) return;
      var eff = BS.mastery ? BS.mastery.effectiveScore(r, today) : (r.score || 0);
      sum += eff; n++;
      if (BS.mastery && BS.mastery.isMastered(r, today)) mastered++;
    });
    var avgScore = n ? sum / n : 0;
    var coverage = conceptIds.length ? mastered / conceptIds.length : 0;
    var total = avgScore * 0.7 + coverage * 100 * 0.3;
    total = Math.round(Math.min(100, total) * 10) / 10;
    return { band: bandFromScore(total, false), total: total, mastered: mastered, n: conceptIds.length, coverage: coverage };
  }

  BS.examScoring = {
    BANDS: BANDS, TIER_W: TIER_W,
    bandFromScore: bandFromScore, scoreExam: scoreExam, predictBand: predictBand, roundHalf: roundHalf
  };
})();
