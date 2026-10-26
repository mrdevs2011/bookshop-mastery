/* progress.js — darslik bo'limlari bo'yicha o'qish progressi.
   Holat brauzer localStorage'ida saqlanadi (qurilmaga bog'liq). Sidebar'dagi havolalardan o'zi o'qiydi. */
(function () {
  'use strict';
  var KEY = 'bs_lessons_done_v1';
  function load() { try { var a = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) { /* private rejim */ } }
  function slugOf(href) { var m = /(\d\d-[a-z]+)\/(?:index\.html)?(?:[#?].*)?$/.exec(href || ''); return m ? m[1] : null; }

  var side = document.querySelector('.sidebar');
  if (!side) return;
  var links = Array.prototype.slice.call(side.querySelectorAll('a[href]')).map(function (a) {
    var s = slugOf(a.getAttribute('href'));
    return s ? { a: a, slug: s, title: a.textContent.trim() } : null;
  }).filter(Boolean);
  if (!links.length) return;

  var done = load(), cur = slugOf(location.pathname);
  var inLessons = links.some(function (l) { return l.slug === cur; });

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  // sidebar: umumiy progress
  var prog = el('div', 'prog'), bar = el('div', 'bar'), fill = el('i'), txt = el('span');
  bar.appendChild(fill); prog.appendChild(bar); prog.appendChild(txt);
  var brand = side.querySelector('.brand');
  if (brand) brand.appendChild(prog); else side.insertBefore(prog, side.firstChild);

  // "O'qildi" tugmasi (faqat bo'lim sahifalarida)
  var btn = null;
  if (inLessons) {
    btn = el('button', 'done-btn'); btn.type = 'button';
    btn.addEventListener('click', function () {
      done = load();
      var i = done.indexOf(cur);
      if (i >= 0) done.splice(i, 1); else done.push(cur);
      save(done); paint();
    });
    var nav = document.querySelector('.main .nav-btns'), main = document.querySelector('.main');
    if (nav) nav.parentNode.insertBefore(btn, nav); else if (main) main.appendChild(btn);
  }

  // bosh sahifa: "Davom ettirish" kartasi
  var cont = null, grid = !cur && document.querySelector('.main .box-grid');
  if (grid) { cont = el('div', 'card g continue'); grid.parentNode.insertBefore(cont, grid); }

  function paintContinue() {
    if (!cont) return;
    while (cont.firstChild) cont.removeChild(cont.firstChild);
    var next = links.filter(function (l) { return done.indexOf(l.slug) < 0; })[0];
    var n = links.length - links.filter(function (l) { return done.indexOf(l.slug) < 0; }).length;
    var h = el('h3', null, !next ? 'Hammasi o‘qildi' : n ? 'Davom ettiring' : 'Boshlang');
    h.style.marginTop = '0'; cont.appendChild(h);
    var p = el('p', null);
    if (next) {
      p.appendChild(document.createTextNode(n + ' / ' + links.length + ' bo‘lim o‘qilgan. Keyingisi: '));
      var a = el('a', null, next.title); a.href = next.a.getAttribute('href'); p.appendChild(a);
    } else {
      p.appendChild(document.createTextNode('Endi '));
      var b = el('a', null, 'Mashq ilovasida'); b.href = '/app/'; p.appendChild(b);
      p.appendChild(document.createTextNode(' bilimingizni sinab ko‘ring.'));
    }
    cont.appendChild(p);
  }

  function paint() {
    var n = 0;
    links.forEach(function (l) {
      var d = done.indexOf(l.slug) >= 0; if (d) n++;
      l.a.classList.toggle('done', d);
    });
    fill.style.width = Math.round(n / links.length * 100) + '%';
    txt.textContent = n + ' / ' + links.length + ' bo‘lim o‘qildi';
    if (btn) {
      var d2 = done.indexOf(cur) >= 0;
      btn.classList.toggle('on', d2);
      btn.textContent = d2 ? 'O‘qildi — bekor qilish' : 'Bo‘limni o‘qildi deb belgilash';
    }
    paintContinue();
  }

  window.addEventListener('pageshow', function () { done = load(); paint(); });
  window.addEventListener('storage', function (e) { if (e.key === KEY) { done = load(); paint(); } });
  paint();
})();
