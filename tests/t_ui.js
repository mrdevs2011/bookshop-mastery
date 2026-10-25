(function () { var T = window.T, BS = window.BS, U = BS.ui;
  T.describe('ui (sof funksiyalar)', function () {
    T.it('esc: 5 ta belgi', function () { T.eq(U.esc('<a href="x">&\''), '&lt;a href=&quot;x&quot;&gt;&amp;&#39;'); T.eq(U.esc(5), '5'); });
    T.it('fmtDur: m:ss, manfiy — 0:00', function () {
      T.eq(U.fmtDur(65000), '1:05'); T.eq(U.fmtDur(0), '0:00'); T.eq(U.fmtDur(-5), '0:00'); T.eq(U.fmtDur(3599000), '59:59'); T.eq(U.fmtDur(600), '0:01');
    });
    T.it('fmtPct', function () { T.eq(U.fmtPct(0.756), '76%'); T.eq(U.fmtPct(0), '0%'); T.eq(U.fmtPct(1), '100%'); });
  });
  T.describe('ui (DOM)', function () {
    T.itDom('h: matn HAR DOIM textNode (XSS yo‘q)', function () {
      var el = U.h('div', null, '<img src=x onerror=alert(1)>'); T.eq(el.querySelectorAll('img').length, 0);
      T.eq(el.textContent, '<img src=x onerror=alert(1)>'); T.eq(el.innerHTML, '&lt;img src=x onerror=alert(1)&gt;');
    });
    T.itDom('h: xususiyatlar — class, dataset, style, hodisa, mantiqiy, null', function () {
      var n = 0, el = U.h('button', { class: 'a b', dataset: { k: 'v' }, style: { color: 'red' }, onclick: function () { n++; }, disabled: true, title: null, hidden: false, 'aria-label': 'x' }, 'Ok');
      T.eq(el.className, 'a b'); T.eq(el.dataset.k, 'v'); T.eq(el.style.color, 'red'); T.assert(el.disabled === true);
      T.assert(!el.hasAttribute('title') && !el.hasAttribute('hidden')); T.eq(el.getAttribute('aria-label'), 'x');
      el.disabled = false; el.click(); T.eq(n, 1);
    });
    T.itDom('h: ichma-ich massivlar, false/null/true tashlanadi, raqam matn bo‘ladi', function () {
      var el = U.h('p', null, ['a', [U.h('b', null, 'x'), null, false]], true, 7);
      T.eq(el.innerHTML, 'a<b>x</b>7');
    });
    T.itDom('mount/clear/rawHTML', function () {
      var p = U.h('div', null, 'eski'); U.mount(p, U.h('i', null, 'yangi')); T.eq(p.innerHTML, '<i>yangi</i>');
      U.clear(p); T.eq(p.childNodes.length, 0); U.rawHTML(p, '<b>x</b>'); T.eq(p.querySelectorAll('b').length, 1);
    });
    T.itDom('toast: #bs-toasts ichiga qo‘shiladi', function () {
      var t = U.toast('salom', 'ok', 5); T.assert(t.parentNode && t.parentNode.id === 'bs-toasts'); T.assert(t.className.indexOf('ok') >= 0);
      if (t.parentNode) t.parentNode.removeChild(t);
    });
    T.itDom('modal: tugma amali chaqiriladi va modal yopiladi; Escape yopadi', function () {
      var hit = 0, m = U.modal({ title: 'T', body: 'matn', actions: [{ label: 'Ha', onClick: function () { hit++; } }] });
      T.assert(m.el.parentNode === document.body); m.el.querySelector('button').click(); T.eq(hit, 1); T.assert(!m.el.parentNode);
      var m2 = U.modal({ title: 'T2', body: U.h('span', null, 'x') });
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); T.assert(!m2.el.parentNode);
    });
  });
})();
