/* code.js — darslikdagi barcha <pre> kod bloklarini avtomatik ranglaydi (app/js/core/hl.js asosida).
   Matn o'zgarmaydi (textContent invariant) — faqat <span class="tok-*"> qo'shiladi.
   Qo'shimcha: til yorlig'i, "Nusxa" tugmasi, haqiqiy fayl bloklari (data-src) uchun satr raqamlari. */
(function () {
  'use strict';
  var BS = window.BS || {};
  if (!BS.hl) return;

  var LABEL = { py: 'Python', tpl: 'Django shablon', html: 'HTML', sh: 'Terminal', tree: 'Tuzilma' };

  function detect(t) {
    if (/[├└]──/.test(t)) return 'tree';
    if (/\{%|\{\{|%\}/.test(t)) return 'tpl';
    if (/^\s*<(?:!doctype|[a-z][\w-]*[\s>\/])/i.test(t)) return 'html';
    if (/^\s*\$ /m.test(t) || /^\s*(?:python3?|pip3?|cd|git|source|mkdir|touch|django-admin|npm|node)\s/m.test(t)) return 'sh';
    return 'py';
  }

  function span(cls, text) { return text ? '<span class="tok-' + cls + '">' + BS.hl.esc(text) + '</span>' : ''; }

  function hlTree(src) {
    return src.split('\n').map(function (line) {
      var m = line.match(/^([\s│├└─]*)([^#]*?)(\s*#.*)?$/);
      if (!m) return BS.hl.esc(line);
      var name = m[2], cls = '';
      if (/\/\s*$/.test(name)) cls = 'cls';
      else if (/\.py\s*$/.test(name)) cls = 'fn';
      else if (/\.html\s*$/.test(name)) cls = 'tag';
      return span('dim', m[1]) + (cls ? span(cls, name) : BS.hl.esc(name)) + span('cm', m[3] || '');
    }).join('\n');
  }

  function render(lang, text) { return lang === 'tree' ? hlTree(text) : BS.hl.highlight(lang, text); }

  function copy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
    return new Promise(function (ok, bad) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? ok() : bad(); } catch (e) { bad(e); }
      document.body.removeChild(ta);
    });
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function enhance(pre) {
    if (pre.closest('.codebox') || pre.classList.contains('ed-hl') || pre.dataset.hl === 'off') return;
    var text = pre.textContent.replace(/^\n/, '').replace(/\s+$/, '');
    if (!text) return;
    var lang = pre.dataset.lang || detect(text);
    pre.innerHTML = render(lang, text);

    var box = el('div', 'codebox'), bar = el('div', 'codebar'), body = el('div', 'codebody');
    bar.appendChild(el('span', 'lang', LABEL[lang] || lang));

    var src = (pre.dataset.src || '').match(/^(.+?):(\d+)-(\d+)$/), lines = text.split('\n').length;
    if (src) {
      bar.appendChild(el('span', 'file', src[1] + '  ·  ' + src[2] + '–' + src[3] + '-satrlar'));
      var len = +src[3] - +src[2] + 1;
      if (lines <= len && lines >= len - 3) {
        var g = el('div', 'gutter'), nums = [];
        for (var i = 0; i < lines; i++) nums.push(+src[2] + i);
        g.textContent = nums.join('\n');
        g.setAttribute('aria-hidden', 'true');
        body.appendChild(g);
      }
    } else {
      bar.appendChild(el('span', 'file', ''));
    }

    var btn = el('button', 'copy', 'Nusxa');
    btn.type = 'button';
    btn.addEventListener('click', function () {
      copy(text).then(function () { btn.textContent = 'Nusxalandi'; }, function () { btn.textContent = 'Xato'; });
      setTimeout(function () { btn.textContent = 'Nusxa'; }, 1600);
    });
    bar.appendChild(btn);

    pre.parentNode.insertBefore(box, pre);
    body.appendChild(pre);
    box.appendChild(bar);
    box.appendChild(body);
  }

  function run() { Array.prototype.slice.call(document.querySelectorAll('pre')).forEach(enhance); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  BS.codeBlocks = { detect: detect, render: render, enhance: enhance, run: run };
  window.BS = BS;
})();
