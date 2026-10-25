#!/usr/bin/env python3
"""BookShop Mastery Engine — lokal server (faqat stdlib, tashqi paket yo'q).

127.0.0.1:8765 ga bog'lanadi (tashqariga OCHILMAYDI). Vazifasi:
  * statik fayllar: index.html, assets/, app/, 01-..14-* (darslik). grader/, tools/, tests/, .git,
    PROMPT.md, GROUND_TRUTH.md va *.py HECH QACHON berilmaydi (yashirin testlar ko'rinmasin).
  * GET  /api/health  -> {"ok": true, ...}
  * POST /api/grade   -> {"files": {...}}  haqiqiy Django grader (grader/run.py)
  * POST /api/run     -> {"files": {...}, "args": ["check"]}  oq ro'yxatdagi manage.py buyrug'i
Himoya: Host va Origin tekshiruvi (DNS-rebinding / begona sayt), tana hajmi chegarasi, bir vaqtda 2 ta baholash.
App serverga ulana olmasa offline rejimga tushadi (app/js tarafida)."""
import json
import os
import re
import sys
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlparse

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, 'grader'))
import run as grader  # noqa: E402

HOST = '127.0.0.1'
PORT = int(os.environ.get('BS_PORT', '8765'))
MAX_BODY = 1_000_000
SLOTS = threading.BoundedSemaphore(2)
VERSION = 1

ALLOWED_HOSTS = {'127.0.0.1:%d' % PORT, 'localhost:%d' % PORT}
ALLOWED_ORIGINS = {'null', 'http://127.0.0.1:%d' % PORT, 'http://localhost:%d' % PORT}  # 'null' = file:// sahifa

TOP_OK = re.compile(r'^/(index\.html|assets/.+|app/.+|\d\d-[^/]+/.+|\d\d-[^/]+)?$')
EXT_OK = {'.html', '.css', '.js', '.json', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico',
          '.woff', '.woff2', '.ttf', '.txt', '.map'}
MIME = {'.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.ico': 'image/x-icon',
        '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8',
        '.map': 'application/json'}


def hidden_count():
    try:
        return len([n for n in os.listdir(grader.HIDDEN) if n.startswith('test_') and n.endswith('.py')])
    except OSError:
        return 0


class Handler(BaseHTTPRequestHandler):
    server_version = 'BookShopEngine/1'
    protocol_version = 'HTTP/1.1'

    def log_message(self, fmt, *args):
        if os.environ.get('BS_QUIET') != '1':
            sys.stderr.write('[%s] %s\n' % (self.log_date_time_string(), fmt % args))

    # ---- umumiy
    def _origin_ok(self):
        host = self.headers.get('Host', '')
        if host not in ALLOWED_HOSTS:
            return False
        o = self.headers.get('Origin')
        return o is None or o in ALLOWED_ORIGINS

    def _send(self, code, body, ctype='application/json; charset=utf-8', extra=None):
        if isinstance(body, (dict, list)):
            body = json.dumps(body, ensure_ascii=False).encode('utf-8')
        elif isinstance(body, str):
            body = body.encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        o = self.headers.get('Origin')
        if o in ALLOWED_ORIGINS:
            self.send_header('Access-Control-Allow-Origin', o)
            self.send_header('Vary', 'Origin')
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(body)

    def _bad_origin(self):
        self._send(403, {'ok': False, 'error': "Begona manba (Host/Origin) — so'rov rad etildi."})

    # ---- usullar
    def do_OPTIONS(self):
        if not self._origin_ok():
            return self._bad_origin()
        self._send(204, b'', extra={'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                                    'Access-Control-Allow-Headers': 'Content-Type',
                                    'Access-Control-Max-Age': '600'})

    def do_GET(self):
        self._get(head=False)

    def do_HEAD(self):
        self._get(head=True)

    def _get(self, head):
        if not self._origin_ok():
            return self._bad_origin()
        path = unquote(urlparse(self.path).path)
        if path == '/api/health':
            return self._send(200, {'ok': True, 'version': VERSION, 'grader': True, 'tests': hidden_count(),
                                    'python': os.path.basename(os.path.dirname(os.path.dirname(grader.PYTHON))) or 'python'})
        if path.startswith('/api/'):
            return self._send(404, {'ok': False, 'error': 'API topilmadi'})
        if path == '/app':
            return self._send(302, b'', extra={'Location': '/app/index.html'})
        self._static(path)

    def _static(self, path):
        if path.endswith('/'):
            path += 'index.html'
        if '\x00' in path or '..' in path.split('/') or not TOP_OK.match(path) or '/.' in path or '__pycache__' in path:
            return self._send(404, 'topilmadi', 'text/plain; charset=utf-8')
        full = os.path.realpath(os.path.join(ROOT, path.lstrip('/')))
        ext = os.path.splitext(full)[1].lower()
        if not (full == ROOT or full.startswith(ROOT + os.sep)) or ext not in EXT_OK \
                or full == os.path.join(HERE, 'server.py') or not os.path.isfile(full):
            return self._send(404, 'topilmadi', 'text/plain; charset=utf-8')
        rel = os.path.relpath(full, ROOT)
        if not (rel == 'index.html' or rel.split(os.sep)[0] in ('assets', 'app') or re.match(r'^\d\d-', rel.split(os.sep)[0])):
            return self._send(404, 'topilmadi', 'text/plain; charset=utf-8')
        with open(full, 'rb') as f:
            data = f.read()
        self._send(200, data, MIME.get(ext, 'application/octet-stream'))

    def do_POST(self):
        if not self._origin_ok():
            return self._bad_origin()
        path = urlparse(self.path).path
        if path not in ('/api/grade', '/api/run'):
            return self._send(404, {'ok': False, 'error': 'API topilmadi'})
        try:
            n = int(self.headers.get('Content-Length', '0'))
        except ValueError:
            n = -1
        if n <= 0 or n > MAX_BODY:
            return self._send(413 if n > MAX_BODY else 400, {'ok': False, 'error': "Tana hajmi noto'g'ri (1 MB gacha)."})
        try:
            data = json.loads(self.rfile.read(n).decode('utf-8'))
        except (ValueError, UnicodeDecodeError):
            return self._send(400, {'ok': False, 'error': "JSON o'qilmadi."})
        if not isinstance(data, dict):
            return self._send(400, {'ok': False, 'error': 'JSON obyekt bo\'lishi kerak.'})
        if not SLOTS.acquire(timeout=30):
            return self._send(503, {'ok': False, 'error': "Grader band — bir ozdan keyin urinib ko'ring."})
        try:
            if path == '/api/grade':
                files = data.get('files', data)
                res = grader.grade(files)
            else:
                res = grader.run_manage(data.get('files') or {}, data.get('args'))
        except Exception as e:  # server hech qachon qulamasin
            return self._send(500, {'ok': False, 'error': 'Ichki xato: %s' % type(e).__name__})
        finally:
            SLOTS.release()
        self._send(200, res)


def main():
    srv = ThreadingHTTPServer((HOST, PORT), Handler)
    srv.daemon_threads = True
    print('BookShop Mastery Engine: http://%s:%d/app/index.html   (to\'xtatish: Ctrl-C)' % (HOST, PORT), flush=True)
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print('\nto\'xtadi.')


if __name__ == '__main__':
    main()
