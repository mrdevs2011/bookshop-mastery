/* node tests/run.js — yadro modullarini vm kontekstida (window = global) yuklab, testlarni yurgizadi. */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path'), crypto = require('crypto');
const root = path.join(__dirname, '..');
const man = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8'));
const ctx = vm.createContext({ console, __nodeSha: (s) => crypto.createHash('sha256').update(s, 'utf8').digest('hex') });
ctx.window = ctx;
const load = (rel) => vm.runInContext(fs.readFileSync(path.join(root, rel), 'utf8'), ctx, { filename: rel });
load('tests/harness.js');
man.core.forEach(load);
man.tests.forEach(load);
const r = vm.runInContext('T.run()', ctx);
console.log('testlar: ' + r.total + ' | o‘tdi: ' + r.passed + ' | o‘tkazib yuborildi (DOM kerak): ' + r.skipped + ' | yiqildi: ' + r.failed.length);
r.failed.forEach((f) => console.log('  ✗ ' + f.name + '\n      ' + f.err));
process.exit(r.failed.length ? 1 : 0);
