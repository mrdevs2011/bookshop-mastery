/* icons.js — SVG chiziqli ikonlar (emoji yo'q). BS.icon(nom, o'lcham) -> <svg> elementi. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};
  var NS = 'http://www.w3.org/2000/svg';
  var P = {
    home: 'M3 11 12 3l9 8M5 10v10h14V10M10 20v-6h4v6',
    code: 'M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16',
    chart: 'M4 20V4M4 20h16M8 16v-5M13 16V8M18 16v-9',
    exam: 'M9 4h6v3H9zM6 5v16h12V5h-3M9 14l2 2 4-4',
    book: 'M3 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H3zM21 4h-7a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h7z',
    flame: 'M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z',
    clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
    menu: 'M4 6h16M4 12h16M4 18h16',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    check: 'M4 12l5 5L20 6',
    warn: 'M12 3 2 20h20zM12 10v5M12 17.5v.5',
    target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 12h.01',
    braces: 'M8 4C6 4 6 6 6 8s0 3-2 4c2 1 2 2 2 4s0 4 2 4M16 4c2 0 2 2 2 4s0 3 2 4c-2 1-2 2-2 4s0 4-2 4',
    layers: 'M4 5h16v4H4zM4 11h16v4H4zM4 17h10v3H4z',
    bolt: 'M13 2 4 14h7l-1 8 9-12h-7z',
    diff: 'M7 4v16M17 4v16M4 8l3-3 3 3M14 16l3 3 3-3',
    route: 'M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 17c6 0 2-10 10-10',
    bug: 'M9 8a3 3 0 0 1 6 0v1H9zM7 9h10v6a5 5 0 0 1-10 0zM3 12h4M17 12h4M4 6l3 3M20 6l-3 3M4 19l3-3M20 19l-3-3M12 10v10',
    grid: 'M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18',
    db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    history: 'M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 8v4l3 2',
    layout: 'M3 3h18v18H3zM3 9h18M9 9v12',
    terminal: 'M3 5h18v14H3zM7 10l3 2-3 2M12 15h5',
    swap: 'M4 8h14l-4-4M20 16H6l4 4',
    timer: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l2 2M9 2h6',
    crown: 'M3 18h18M4 18 3 7l5 4 4-7 4 7 5-4-1 11',
    present: 'M3 4h18v11H3zM12 15v5M8 20h8M7 9h6',
    refresh: 'M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4',
    calendar: 'M3 5h18v16H3zM3 10h18M8 3v4M16 3v4M8 14h2M12 14h2M8 17h2',
    shuffle: 'M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3',
    dot: 'M12 11h.01'
  };
  function icon(name, size) {
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('width', size || 18);
    s.setAttribute('height', size || 18);
    s.setAttribute('class', 'ic');
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('fill', 'none');
    s.setAttribute('stroke', 'currentColor');
    s.setAttribute('stroke-width', '1.75');
    s.setAttribute('stroke-linecap', 'square');
    s.setAttribute('stroke-linejoin', 'miter');
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', P[name] || P.dot);
    s.appendChild(p);
    return s;
  }
  BS.icon = icon;
  BS.iconNames = Object.keys(P);
})();
