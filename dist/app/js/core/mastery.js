/* mastery.js — konsept ballari (Elo + vaqt bilan sust-so'nish), "o'zlashtirildi" shartlari, qulf/ochish va qarz tizimi.
   Qulf/ochish mantig'i FAQAT shu yerda va state.js da (UI hech qachon qulfni o'zi hal qilmaydi). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};
  BS.clock = BS.clock || { now: function () { return Date.now(); } };

  // format og'irligi: tanlov < yozish < debug < qurish
  var FORMAT_W = { choice: 0.6, match: 0.6, order: 0.8, trace: 0.9, write: 1.0, teach: 1.0, debug: 1.2, boss: 1.3, build: 1.5 };
  var HELP_CAP = [1, 0.8, 0.5, 0];          // H0, H1 ≤80%, H2 ≤50%, H3 = 0
  var K = 24, MASTER_SCORE = 85, SUCCESS = 0.8;

  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function bool2num(x) { return x === true ? 1 : (x === false || x == null ? 0 : x); }

  // D1..D5 -> maqsad ball 10..90; kutilgan muvaffaqiyat ehtimoli
  function expected(score, diff) {
    var d = 20 * (diff || 2) - 10;
    return 1 / (1 + Math.exp((d - score) / 12));
  }
  function credit(raw, help, ms, budget) {
    var c = clamp(raw, 0, 1);
    c = Math.min(c, HELP_CAP[Math.min(3, help || 0)]);
    if (c > 0 && budget && ms > 2 * budget) c *= 0.9;        // juda sekin — ozgina kamayadi
    return c;
  }
  function newRec() {
    return { score: 0, box: 0, due: null, n: 0, last: null, ok: {}, days: [], hist: [], twinPending: false, weak: false };
  }

  function effectiveScore(rec, today) {
    if (!rec) return 0;
    var overdue = rec.due != null ? Math.max(0, today - rec.due) : 0;
    return rec.score * (1 - Math.min(0.5, overdue * 0.01));
  }
  function last10HasH3(rec) {
    var h = rec.hist.slice(-10);
    for (var i = 0; i < h.length; i++) if (h[i].h >= 3) return true;
    return false;
  }
  // O'zlashtirildi: ≥85 ball VA ≥3 xil formatda muvaffaqiyat VA ≥2 xil KUNDA VA oxirgi 10 urinishda H3 yo'q (+ egizak hal qilingan)
  function isMastered(rec, today) {
    if (!rec || !rec.n) return false;
    if (effectiveScore(rec, today) < MASTER_SCORE) return false;
    if (Object.keys(rec.ok).length < 3) return false;
    if (rec.days.length < 2) return false;
    if (rec.twinPending) return false;
    if (last10HasH3(rec)) return false;
    return true;
  }
  function status(rec, today) {
    if (!rec || !rec.n) return 'new';
    if (isMastered(rec, today)) return 'mastered';
    if (rec.weak || rec.twinPending) return 'weak';
    return 'learning';
  }

  function touchStreak(st, day) {
    var p = st.profile;
    if (p.lastDay === day) return;
    p.streak = (p.lastDay === day - 1) ? p.streak + 1 : 1;
    p.bestStreak = Math.max(p.bestStreak || 0, p.streak);
    p.lastDay = day;
  }

  // a: {concept, qid, seed, answer, format, difficulty, ok(bool|0..1), help(0..3), ms, budget, twin, mode, now}
  function recordAttempt(st, a) {
    var now = a.now != null ? a.now : BS.clock.now();
    var day = BS.srs.dayOf(now);
    var rec = st.concepts[a.concept] || (st.concepts[a.concept] = newRec());
    var help = a.help || 0, raw = bool2num(a.ok);
    var fmt = a.format || 'choice', diff = a.difficulty || 2;
    var c = credit(raw, help, a.ms, a.budget);
    var w = FORMAT_W[fmt] || 1;
    var p = expected(effectiveScore(rec, day), diff);
    var delta = K * w * (c - p);
    rec.score = clamp(rec.score + delta, 0, 100);
    var success = raw >= SUCCESS && help <= 2;

    BS.srs.apply(rec, success, day);
    rec.n++; rec.last = day;
    rec.hist.push({ d: day, f: fmt, ok: success ? 1 : 0, h: help, df: diff });
    if (rec.hist.length > 50) rec.hist.shift();
    if (success) {
      rec.ok[fmt] = (rec.ok[fmt] || 0) + 1;
      if (rec.days.indexOf(day) < 0) { rec.days.push(day); rec.days.sort(function (x, y) { return x - y; }); if (rec.days.length > 60) rec.days.shift(); }
      if (a.twin && help === 0) rec.twinPending = false;
    }
    if (help >= 3) { rec.weak = true; rec.twinPending = true; }   // H3: konsept "zaif", majburiy egizak savol
    var mastered = isMastered(rec, day);
    if (mastered) rec.weak = false;

    var xp = c > 0 ? Math.round(10 * c * w * (1 + 0.25 * (diff - 1))) : 0;
    st.profile.xp += xp;
    touchStreak(st, day);
    BS.ledger.append(st.ledger, { t: now, day: day, qid: a.qid || a.concept, seed: a.seed, answer: a.answer, res: c, help: help, ms: a.ms, mode: a.mode || fmt });
    return { credit: c, delta: delta, success: success, mastered: mastered, xp: xp, rec: rec };
  }

  // ---- qarz tizimi: muddati kelgan takrorlar bor ekan, yangi kontent qulflangan
  function dueList(st, today) {
    var out = [];
    Object.keys(st.concepts).forEach(function (id) {
      var r = st.concepts[id];
      if (r.n > 0 && BS.srs.isDue(r, today)) out.push({ id: id, due: r.due, overdue: today - r.due });
    });
    out.sort(function (x, y) { return x.due - y.due || (x.id < y.id ? -1 : 1); });
    return out;
  }
  function contentLocked(st, today) { var d = dueList(st, today); return { locked: d.length > 0, due: d }; }

  // ---- katalog (data/concepts.js): {modules:[{id,title}], concepts:{id:{modul, prereq:[]}}}
  function moduleConcepts(cat, mid) {
    cat._mc = cat._mc || {};
    if (!cat._mc[mid]) cat._mc[mid] = Object.keys(cat.concepts).filter(function (id) { return cat.concepts[id].modul === mid; });
    return cat._mc[mid];
  }
  function conceptUnlocked(cat, st, cid, today) {
    var c = cat.concepts[cid];
    if (!c) return false;
    return (c.prereq || []).every(function (p) { return isMastered(st.concepts[p], today); });
  }
  function moduleOpen(cat, st, mid, today) {
    var idx = -1;
    for (var i = 0; i < cat.modules.length; i++) if (cat.modules[i].id === mid) { idx = i; break; }
    if (idx < 0) return false;
    if (idx === 0) return true;
    var prev = cat.modules[idx - 1].id;
    var allDone = moduleConcepts(cat, prev).every(function (id) { return isMastered(st.concepts[id], today); });
    return allDone && !!st.bosses[prev];            // boss yengilmaguncha modul yopilmaydi
  }
  // yangi konseptni boshlash mumkinmi? (allaqachon urinilgan konseptni takrorlash/mashq qilish har doim mumkin)
  function canPractice(cat, st, cid, today) {
    var c = cat.concepts[cid];
    if (!c) return false;
    var rec = st.concepts[cid];
    if (rec && rec.n > 0) return true;
    if (contentLocked(st, today).locked) return false;
    return moduleOpen(cat, st, c.modul, today) && conceptUnlocked(cat, st, cid, today);
  }
  function modulesProgress(cat, st, today) {
    return cat.modules.map(function (m) {
      var ids = moduleConcepts(cat, m.id);
      var done = ids.filter(function (id) { return isMastered(st.concepts[id], today); }).length;
      return { id: m.id, title: m.title, total: ids.length, mastered: done, open: moduleOpen(cat, st, m.id, today), boss: !!st.bosses[m.id] };
    });
  }
  function markBoss(st, mid) { st.bosses[mid] = true; }

  BS.mastery = {
    FORMAT_W: FORMAT_W, HELP_CAP: HELP_CAP, MASTER_SCORE: MASTER_SCORE, SUCCESS: SUCCESS,
    expected: expected, credit: credit, newRec: newRec, effectiveScore: effectiveScore, isMastered: isMastered, status: status,
    recordAttempt: recordAttempt, touchStreak: touchStreak, dueList: dueList, contentLocked: contentLocked,
    moduleConcepts: moduleConcepts, conceptUnlocked: conceptUnlocked, moduleOpen: moduleOpen, canPractice: canPractice,
    modulesProgress: modulesProgress, markBoss: markBoss
  };
})();
