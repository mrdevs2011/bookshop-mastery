/* Reverse Engineer — javobdan kodga. */
(function () {
  'use strict';
  var BS = window.BS;
  BS.modes = BS.modes || {};
  BS.modes.reverse = {
    id: 'reverse', title: 'Reverse Engineer',
    start: function (opts) {
      opts = opts || {};
      var q = {
        prompt: 'Javob: 302, Location: /login/. Qaysi holat?',
        options: ['Anonim /book-list/', 'Login bo\u2018lgan /book-list/', 'POST /add-book/ muvaffaqiyat', '404 kitob'],
        accepted: 'Anonim /book-list/'
      };
      var msg = BS.ui.h('p');
      var root = BS.ui.h('div', null,
        BS.ui.h('h2', null, 'Reverse Engineer'),
        BS.ui.h('div', { class: 'card' },
          BS.ui.h('p', null, q.prompt),
          q.options.map(function (o) {
            return BS.ui.h('button', { class: 'btn sec', style: { display: 'block', margin: '4px 0', width: '100%' }, onclick: function () {
              var good = o === q.accepted;
              msg.textContent = good ? '\u2705' : '\u274c';
              if (good && opts.onDone) opts.onDone({ ok: true, format: 'trace' });
            }}, o);
          })),
        msg);
      if (opts.mount) BS.ui.mount(opts.mount, root);
      return { el: root };
    }
  };
})();
