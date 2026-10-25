/* node tools/gen_test_html.js — tests/manifest.json dan tests/run.html ni yaratadi (brauzerda ham xuddi shu testlar). */
'use strict';
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const man = JSON.parse(fs.readFileSync(path.join(root, 'tests', 'manifest.json'), 'utf8'));
const src = (p) => '<script src="../' + p + '"></script>';
const html = '<!doctype html>\n<html lang="uz"><head><meta charset="utf-8"><title>Birlik testlar</title>\n' +
  '<style>body{font:14px/1.5 ui-monospace,monospace;background:#0f0f12;color:#eee;padding:24px}.ok{color:#2a9d8f}.bad{color:#e63946}</style></head>\n<body>\n<h2>BookShop Mastery Engine — birlik testlar</h2>\n<pre id="out">kutilmoqda…</pre>\n' +
  '<script src="harness.js"></script>\n' + man.core.map(src).join('\n') + '\n' + man.tests.map(src).join('\n') + '\n' +
  '<script>(function(){var r=T.run(),o=document.getElementById("out");' +
  'var lines=["testlar: "+r.total+" | otdi: "+r.passed+" | otkazildi: "+r.skipped+" | yiqildi: "+r.failed.length];' +
  'r.failed.forEach(function(f){lines.push("  X "+f.name+" :: "+f.err)});' +
  'o.textContent=lines.join("\\n");o.className=r.failed.length?"bad":"ok";document.title=(r.failed.length?"FAIL ":"PASS ")+r.passed+"/"+r.total;})();</script>\n</body></html>\n';
fs.writeFileSync(path.join(root, 'tests', 'run.html'), html);
console.log('tests/run.html yozildi (' + man.core.length + ' modul, ' + man.tests.length + ' test fayl)');
