"""app/server.py ni haqiqiy ishga tushirib sinaydi (stdlib unittest): python3 -m unittest tests.test_server -v"""
import http.client
import json
import os
import socket
import subprocess
import sys
import time
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'grader'))
import run as grader  # noqa: E402


def free_port():
    s = socket.socket()
    s.bind(('127.0.0.1', 0))
    p = s.getsockname()[1]
    s.close()
    return p


class ServerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.port = free_port()
        env = dict(os.environ, BS_PORT=str(cls.port), BS_QUIET='1')
        cls.proc = subprocess.Popen([sys.executable, os.path.join(ROOT, 'app', 'server.py')], env=env,
                                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for _ in range(50):
            try:
                if cls.req('GET', '/api/health')[0] == 200:
                    return
            except OSError:
                time.sleep(0.1)
        raise RuntimeError('server ishga tushmadi')

    @classmethod
    def tearDownClass(cls):
        cls.proc.terminate()
        cls.proc.wait(timeout=5)

    @classmethod
    def req(cls, method, path, body=None, headers=None, host=None):
        c = http.client.HTTPConnection('127.0.0.1', cls.port, timeout=60)
        h = dict(headers or {})
        if host:
            h['Host'] = host
        data = None
        if body is not None:
            data = body if isinstance(body, bytes) else json.dumps(body).encode('utf-8')
            h.setdefault('Content-Type', 'application/json')
        c.request(method, path, body=data, headers=h)
        r = c.getresponse()
        raw = r.read()
        c.close()
        return r.status, dict(r.getheaders()), raw

    def j(self, method, path, body=None, headers=None):
        st, hd, raw = self.req(method, path, body, headers)
        return st, hd, json.loads(raw.decode('utf-8'))

    def test_health(self):
        st, _, d = self.j('GET', '/api/health')
        self.assertEqual(st, 200)
        self.assertTrue(d['ok'] and d['grader'])
        self.assertGreaterEqual(d['tests'], 10)

    def test_static_served(self):
        for p in ('/app/index.html', '/index.html', '/app/css/app.css', '/app/js/core/rng.js', '/assets/style.css'):
            self.assertEqual(self.req('GET', p)[0], 200, p)

    def test_private_files_not_served(self):
        for p in ('/app/server.py', '/grader/hidden/test_login.py', '/grader/run.py', '/grader/reference/core/settings.py',
                  '/PROMPT.md', '/GROUND_TRUTH.md', '/DECISIONS.md', '/PROGRESS.md', '/.git/config', '/tools/mutation_run.py',
                  '/tests/test_server.py', '/_backup/', '/app/../grader/run.py', '/app/%2e%2e/grader/run.py',
                  '/app/..%2fgrader/run.py', '/%2e%2e/%2e%2e/boshqa', '/app/js/core/../../../PROMPT.md', '/start.sh'):
            self.assertEqual(self.req('GET', p)[0], 404, p)

    def test_bad_host_rejected(self):
        self.assertEqual(self.req('GET', '/api/health', host='evil.example:%d' % self.port)[0], 403)

    def test_origin_rules(self):
        st, hd, _ = self.req('GET', '/api/health', headers={'Origin': 'https://evil.example'})
        self.assertEqual(st, 403)
        st, hd, _ = self.req('POST', '/api/grade', {'files': {}}, headers={'Origin': 'https://evil.example', 'Content-Type': 'text/plain'})
        self.assertEqual(st, 403)
        st, hd, _ = self.req('GET', '/api/health', headers={'Origin': 'null'})
        self.assertEqual((st, hd.get('Access-Control-Allow-Origin')), (200, 'null'))
        st, hd, _ = self.req('OPTIONS', '/api/grade', headers={'Origin': 'null', 'Access-Control-Request-Method': 'POST'})
        self.assertEqual(st, 204)
        self.assertIn('POST', hd.get('Access-Control-Allow-Methods', ''))

    def test_grade_reference_is_perfect(self):
        st, _, d = self.j('POST', '/api/grade', {'files': grader.read_reference()}, {'Origin': 'null'})
        self.assertEqual(st, 200)
        self.assertEqual((d['status'], d['score'], d['failed']), ('ok', 100.0, []))

    def test_grade_detects_bug(self):
        files = {'core/views.py': grader.read_reference()['core/views.py'].replace('.order_by("-id")', '.order_by("id")', 1)}
        st, _, d = self.j('POST', '/api/grade', {'files': files})
        self.assertEqual(st, 200)
        self.assertLess(d['score'], 100.0)
        self.assertTrue(d['failed'] and d['failed'][0]['plain_uz'])

    def test_grade_bad_inputs(self):
        self.assertEqual(self.j('POST', '/api/grade', {'files': {}})[2]['status'], 'bad_input')
        self.assertEqual(self.j('POST', '/api/grade', {'files': {'../x.py': 'x'}})[2]['status'], 'bad_input')
        self.assertEqual(self.req('POST', '/api/grade', b'{yaroqsiz')[0], 400)
        self.assertEqual(self.req('POST', '/api/grade', b'[1,2]')[0], 400)
        self.assertEqual(self.req('GET', '/api/yoq')[0], 404)
        self.assertEqual(self.req('POST', '/api/yoq', {})[0], 404)

    def test_body_too_large(self):
        c = http.client.HTTPConnection('127.0.0.1', self.port, timeout=10)
        c.putrequest('POST', '/api/grade')
        c.putheader('Content-Length', str(1_000_001))
        c.putheader('Content-Type', 'application/json')
        c.endheaders()
        self.assertEqual(c.getresponse().status, 413)
        c.close()

    def test_run_whitelist(self):
        st, _, d = self.j('POST', '/api/run', {'files': {}, 'args': ['check']})
        self.assertEqual((st, d['status'], d['code']), (200, 'ok', 0))
        self.assertIn('no issues', d['output'])
        for bad in (['ls', '-la'], ['runserver'], ['check', '; ls'], 'check', [], ['shell', '-c', '']):
            self.assertEqual(self.j('POST', '/api/run', {'args': bad})[2]['status'], 'bad_input', bad)


if __name__ == '__main__':
    unittest.main()
