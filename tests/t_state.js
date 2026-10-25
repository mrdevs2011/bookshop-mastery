(function () { var T = window.T, BS = window.BS;
  T.describe('state', function () {
    T.it('saqlash va qayta yuklash', function () {
      var store = BS.state.memStore(); BS.state.init(store);
      BS.state.update(function (s) { s.profile.xp = 123; s.bosses.M0 = true; });
      var s2 = BS.state.init(store); T.eq([s2.profile.xp, s2.bosses.M0], [123, true]);
    });
    T.it('buzilgan JSON — toza holat bilan boshlanadi', function () {
      var store = BS.state.memStore(); store.setItem(BS.state.KEY, '{buzuq'); T.eq(BS.state.init(store).profile.xp, 0);
    });
    T.it('eski/yetishmayotgan maydonlar migratsiyada to‘ldiriladi', function () {
      var store = BS.state.memStore(); store.setItem(BS.state.KEY, JSON.stringify({ v: 1, created: 5, profile: { xp: 9 } }));
      var s = BS.state.init(store); T.eq(s.profile.xp, 9); T.eq(s.profile.streak, 0); T.eq(s.ledger, []); T.eq(s.settings.sound, true);
    });
    T.it('noma’lum versiya rad etiladi', function () {
      var store = BS.state.memStore(); store.setItem(BS.state.KEY, JSON.stringify({ v: 99, profile: { xp: 9 } })); T.eq(BS.state.init(store).profile.xp, 0);
    });
    T.it('on() tinglovchi va bekor qilish', function () {
      BS.state.init(BS.state.memStore()); var n = 0, off = BS.state.on(function () { n++; });
      BS.state.update(function () {}); off(); BS.state.update(function () {}); T.eq(n, 1);
    });
    T.it('daraja chegaralari', function () {
      T.eq(BS.state.levelFor(0).name, 'Yangi'); T.eq(BS.state.levelFor(499).name, 'Yangi'); T.eq(BS.state.levelFor(500).name, 'Shogird');
      T.eq(BS.state.levelFor(2000).name, 'Usta'); T.eq(BS.state.levelFor(6000).name, 'Arxitektor'); T.eq(BS.state.levelFor(99999).name, 'BOMBA');
      T.eq(BS.state.levelFor(99999).next, null);
    });
    T.it('importAll: butun zanjir — integrity true; buzilgan — bayroq bilan yuklanadi', function () {
      BS.state.init(BS.state.memStore());
      BS.state.update(function (s) { for (var i = 0; i < 3; i++) BS.ledger.append(s.ledger, { t: 10 + i, day: 1, qid: 'q' + i, res: 1 }); });
      var json = BS.state.exportAll(), a = BS.state.importAll(json); T.assert(a.ok && a.integrity); T.assert(BS.state.get().flags.integrity);
      var bad = BS.state.importAll(json.replace('"res":1', '"res":0.5'));
      T.assert(bad.ok && !bad.integrity); T.eq(BS.state.get().flags.integrity, false);
      T.eq(BS.state.importAll('{}').why, 'format'); T.eq(BS.state.importAll('xx').why, 'json');
    });
    T.it('checkIntegrity bayroqni yangilaydi', function () {
      BS.state.init(BS.state.memStore()); BS.state.update(function (s) { BS.ledger.append(s.ledger, { t: 1, day: 1, qid: 'a', res: 1 }); });
      T.assert(BS.state.checkIntegrity().ok);
      BS.state.get().ledger[0].res = 0; var v = BS.state.checkIntegrity(); T.assert(!v.ok); T.eq(BS.state.get().flags.integrityAt, 0);
    });
    T.it('reset', function () { BS.state.init(BS.state.memStore()); BS.state.update(function (s) { s.profile.xp = 5; }); T.eq(BS.state.reset().profile.xp, 0); });
  });
})();
