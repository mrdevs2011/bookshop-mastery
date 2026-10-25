/* Bo'lim meta: A Reading, B Trace, C Writing, D Viva. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};
  BS.examSections = {
    A: { id: 'A', title: 'Reading', ielts: 'Reading', n: 40, minutes: 60, desc: 'Kod o\u2018qish va natija bashorati' },
    B: { id: 'B', title: 'Trace & Debug', ielts: 'Listening', n: 25, minutes: 45, desc: 'HTTP iz, traceback, SQL' },
    C: { id: 'C', title: 'Writing', ielts: 'Writing', n: 6, minutes: 90, desc: 'Bo\u2018sh joydan yozish + grader' },
    D: { id: 'D', title: 'Viva', ielts: 'Speaking', n: 12, minutes: 30, desc: 'Himoya: tushuntir va asosla' }
  };
  BS.examSections.order = ['A', 'B', 'C', 'D'];
})();
