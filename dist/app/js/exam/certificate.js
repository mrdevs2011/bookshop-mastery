/* Bosma sertifikat (HTML + print.css). */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};

  function render(opts) {
    opts = opts || {};
    var band = opts.band != null ? opts.band : '—';
    var total = opts.total != null ? opts.total : '—';
    var name = opts.name || 'Talaba';
    var date = opts.date || new Date().toISOString().slice(0, 10);
    var hash = opts.hash || (BS.sha256 ? BS.sha256(name + '|' + total + '|' + band + '|' + date).slice(0, 16) : 'nohash');
    var secs = opts.sectionBands || {};
    var secLine = ['A', 'B', 'C', 'D'].map(function (s) {
      return s + ': ' + (secs[s] != null ? secs[s] : '—');
    }).join(' · ');
    return (
      '<div class="cert">' +
      '<h1>BOOKSHOP 9.0</h1>' +
      '<p class="sub">Rasmiy natija sertifikati</p>' +
      '<p class="name">' + name + '</p>' +
      '<p class="band">Band <strong>' + band + '</strong></p>' +
      '<p>Umumiy ball: <strong>' + total + '</strong> / 100</p>' +
      '<p class="secs">' + secLine + '</p>' +
      '<p class="meta">Sana: ' + date + ' · Yaxlitlik: ' + hash + '</p>' +
      '<p class="foot">Bu hujjat mahalliy ledger xeshiga bog\u2018langan.</p>' +
      '</div>'
    );
  }

  function openPrint(opts) {
    var html = '<!doctype html><html><head><meta charset="utf-8"><title>Sertifikat</title>' +
      '<link rel="stylesheet" href="css/print.css"></head><body onload="window.print()">' +
      render(opts) + '</body></html>';
    var w = window.open('', '_blank');
    if (w) { w.document.write(html); w.document.close(); }
    return html;
  }

  BS.examCertificate = { render: render, openPrint: openPrint };
})();
