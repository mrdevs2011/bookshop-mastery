/* router.js — hash-router (#/yo'l/:param?kalit=qiymat). file:// da ishlaydi. */
(function () {
  'use strict';
  var BS = window.BS = window.BS || {};
  var routes = [], notFound = null, started = false;

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function compile(pattern) {
    var keys = [], segs = pattern.split('/').filter(Boolean);
    var src = segs.length ? '/' + segs.map(function (s) {
      if (s.charAt(0) === ':') { keys.push(s.slice(1)); return '([^/]+)'; }
      return esc(s);
    }).join('/') : '';
    return { re: new RegExp('^' + src + '/?$'), keys: keys };
  }
  function safeDecode(s) { try { return decodeURIComponent(s); } catch (e) { return s; } }
  function parseQuery(q) {
    var o = {};
    (q || '').split('&').forEach(function (kv) {
      if (!kv) return;
      var i = kv.indexOf('=');
      if (i < 0) o[safeDecode(kv)] = '';
      else o[safeDecode(kv.slice(0, i))] = safeDecode(kv.slice(i + 1));
    });
    return o;
  }
  function parse(hash) {
    var s = (hash || '').replace(/^#/, ''), q = '', i = s.indexOf('?');
    if (i >= 0) { q = s.slice(i + 1); s = s.slice(0, i); }
    if (!s) s = '/';
    if (s.charAt(0) !== '/') s = '/' + s;
    return { path: s, query: parseQuery(q) };
  }
  function match(pattern, path) {
    var c = compile(pattern), m = c.re.exec(path);
    if (!m) return null;
    var params = {};
    c.keys.forEach(function (k, i) { params[k] = safeDecode(m[i + 1]); });
    return params;
  }
  function add(pattern, handler) { routes.push({ pattern: pattern, handler: handler }); return BS.router; }
  function resolve(path) {
    for (var i = 0; i < routes.length; i++) {
      var p = match(routes[i].pattern, path);
      if (p) return { handler: routes[i].handler, params: p, pattern: routes[i].pattern };
    }
    return null;
  }
  function run() {
    var loc = parse(window.location.hash), r = resolve(loc.path);
    try {
      if (r) r.handler(r.params, loc.query, loc.path);
      else if (notFound) notFound(loc.path);
    } catch (e) { if (typeof console !== 'undefined') console.error('router:', e); throw e; }
  }
  function go(path) { window.location.hash = '#' + path; }
  function start(nf) {
    notFound = nf || null;
    if (!started) { window.addEventListener('hashchange', run); started = true; }
    run();
  }
  function reset() { routes = []; notFound = null; }

  BS.router = { add: add, match: match, resolve: resolve, parse: parse, parseQuery: parseQuery, go: go, start: start, run: run, reset: reset };
})();
