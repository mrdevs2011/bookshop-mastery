/* ui.js — DOM yordamchilari. Matn HAR DOIM textNode orqali qo'yiladi (XSS yo'q);
   faqat ishonchli hl.js chiqishi uchun rawHTML bor. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function appendKids(el, kids) {
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (k == null || k === false || k === true) continue;
      if (Array.isArray(k)) appendKids(el, k);
      else if (typeof k === 'string' || typeof k === 'number') el.appendChild(document.createTextNode(String(k)));
      else el.appendChild(k);
    }
  }
  function h(tag, props) {
    var el = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (v == null || v === false) return;
      if (k === 'class' || k === 'className') el.className = v;
      else if (k === 'style' && typeof v === 'object') Object.keys(v).forEach(function (s) { el.style[s] = v[s]; });
      else if (k === 'dataset') Object.keys(v).forEach(function (d) { el.dataset[d] = v[d]; });
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, v);
    });
    appendKids(el, Array.prototype.slice.call(arguments, 2));
    return el;
  }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }
  function mount(parent, child) { clear(parent); appendKids(parent, [child]); return parent; }
  function rawHTML(el, html) { el.innerHTML = html; return el; }      // FAQAT hl.js kabi ishonchli manbadan
  // Rangli kod bloki: <pre> ichiga hl.js chiqishi (hl.js yo'q bo'lsa — oddiy matn).
  function code(lang, text, props) {
    var pre = h('pre', props || null);
    if (BS.hl) rawHTML(pre, BS.hl.highlight(lang, String(text))); else pre.textContent = String(text);
    return pre;
  }

  function fmtDur(ms) {
    var s = Math.max(0, Math.round(ms / 1000)), m = Math.floor(s / 60);
    return m + ':' + ('0' + (s % 60)).slice(-2);
  }
  function fmtPct(x) { return Math.round(x * 100) + '%'; }

  function toast(msg, kind, ms) {
    var box = document.getElementById('bs-toasts');
    if (!box) { box = h('div', { id: 'bs-toasts', class: 'toasts', 'aria-live': 'polite' }); document.body.appendChild(box); }
    var t = h('div', { class: 'toast ' + (kind || '') }, msg);
    box.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, ms || 2600);
    return t;
  }
  // modal({title, body(node|string), actions:[{label, kind, onClick}]}) -> {close}
  function modal(o) {
    var back = h('div', { class: 'modal-back', role: 'dialog', 'aria-modal': 'true' });
    function close() { if (back.parentNode) back.parentNode.removeChild(back); document.removeEventListener('keydown', onKey); }
    function onKey(e) { if (e.key === 'Escape') close(); }
    var acts = (o.actions || []).map(function (a) {
      return h('button', { class: 'btn ' + (a.kind || ''), onclick: function () { if (a.onClick) a.onClick(); close(); } }, a.label);
    });
    back.appendChild(h('div', { class: 'modal' }, h('h3', null, o.title || ''), h('div', { class: 'modal-body' }, o.body), h('div', { class: 'row' }, acts)));
    document.body.appendChild(back);
    document.addEventListener('keydown', onKey);
    return { close: close, el: back };
  }

  BS.ui = { esc: esc, h: h, clear: clear, mount: mount, rawHTML: rawHTML, code: code, fmtDur: fmtDur, fmtPct: fmtPct, toast: toast, modal: modal };
})();
