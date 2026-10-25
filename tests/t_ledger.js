(function () { var T = window.T, BS = window.BS;
  T.describe('sha256', function () {
    T.it('standart vektorlar', function () {
      T.eq(BS.sha256(''), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
      T.eq(BS.sha256('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
      T.eq(BS.sha256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq'), '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1');
    });
    T.it('blok chegaralari (55,56,63,64,65 bayt) va unicode — node crypto bilan mos', function () {
      if (!window.__nodeSha) return;      // brauzerda: standart vektorlar yetarli
      var lens = [0, 1, 54, 55, 56, 57, 63, 64, 65, 119, 120, 128, 1000], i;
      for (i = 0; i < lens.length; i++) { var s = new Array(lens[i] + 1).join('x'); T.eq(BS.sha256(s), window.__nodeSha(s), 'len ' + lens[i]); }
      ['Salom, dunyo! ʻoʻ ‘g‘ — 🚀 ёж 日本', '\u00e9\u0301', 'a\nb\r\nc'].forEach(function (u) { T.eq(BS.sha256(u), window.__nodeSha(u), u); });
    });
  });
  T.describe('ledger', function () {
    function mk(n) { var L = []; for (var i = 0; i < n; i++) BS.ledger.append(L, { t: 1000 + i, day: 7, qid: 'q' + i, seed: i, answer: 'a' + i, res: i % 2, help: 0, ms: 500 + i, mode: 'choice' }); return L; }
    T.it('zanjir butun', function () {
      var v = BS.ledger.verify(mk(5)); T.assert(v.ok); T.eq(v.n, 5); T.eq(v.head.length, 64);
    });
    T.it('birinchi yozuv GENESIS ga bog‘lanadi', function () { T.eq(mk(1)[0].prev, BS.ledger.GENESIS); });
    T.it('javob xeshi: javob matni jurnalda yo‘q', function () {
      var L = mk(1); T.assert(JSON.stringify(L).indexOf('"a0"') < 0); T.eq(L[0].ah, BS.sha256('a0'));
    });
    T.it('natijani o‘zgartirish aniqlanadi', function () {
      var L = mk(5); L[2].res = 1; var v = BS.ledger.verify(L); T.assert(!v.ok); T.eq([v.at, v.why], [2, 'hash']);
    });
    T.it('o‘zgartirib qayta xeshlash keyingi bog‘lanishni buzadi', function () {
      var L = mk(5); L[1].res = 0.5; L[1].hash = BS.sha256(JSON.stringify([L[1].i, L[1].t, L[1].day, L[1].qid, L[1].seed, L[1].ah, L[1].res, L[1].help, L[1].ms, L[1].mode, L[1].prev]));
      var v = BS.ledger.verify(L); T.assert(!v.ok); T.eq([v.at, v.why], [2, 'prev']);
    });
    T.it('yozuvni o‘chirish / tartibni almashtirish aniqlanadi', function () {
      var L = mk(5); L.splice(2, 1); T.assert(!BS.ledger.verify(L).ok);
      var M = mk(4), t = M[1]; M[1] = M[2]; M[2] = t; T.assert(!BS.ledger.verify(M).ok);
    });
    T.it('bo‘sh jurnal butun hisoblanadi', function () { T.assert(BS.ledger.verify([]).ok); });
    T.it('eksport/import: butun va buzilgan', function () {
      var L = mk(3), ok = BS.ledger.importJSON(BS.ledger.exportJSON(L)); T.assert(ok.ok); T.eq(ok.entries.length, 3);
      var s = BS.ledger.exportJSON(L).replace('"res":1', '"res":0.9'); var bad = BS.ledger.importJSON(s);
      T.assert(!bad.ok); T.eq(BS.ledger.importJSON('{xato').why, 'json');
    });
  });
})();
