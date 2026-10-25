"""gen_scenarios.py shu faylni reference NUSXA ichida, BookShopBomba venv Python bilan ishga tushiradi.
stdout: faqat JSON. Hammasi xotiradagi SQLite'da, sintetik ma'lumot bilan; har stsenariy tranzaksiya rollback bilan izolyatsiya."""
import json
import logging
import os
import sys

logging.disable(logging.CRITICAL)
os.environ['DJANGO_SETTINGS_MODULE'] = '_genset'
sys.path.insert(0, os.getcwd())

import django  # noqa: E402
django.setup()
from django.contrib.auth.models import User  # noqa: E402
from django.contrib.messages import get_messages  # noqa: E402
from django.core.management import call_command  # noqa: E402
from django.db import transaction  # noqa: E402
from django.test import Client  # noqa: E402
from django.test.utils import setup_test_environment  # noqa: E402
from main.models import Book, BookView  # noqa: E402

setup_test_environment()
call_command('migrate', verbosity=0, interactive=False)

PASS = {'alice': 'alice-pass-1', 'bob': 'bob-pass-1', 'root': 'root-pass-1'}
ACTORS = {'anon': None, 'ega': 'alice', 'begona': 'bob', 'admin': 'root'}
KNOWN = {'login.html', 'signup.html', 'books-list.html', 'add_book.html', 'book.html', 'error.html', '404.html'}


def seed():
    a = User.objects.create_user('alice', password=PASS['alice'])
    b = User.objects.create_user('bob', password=PASS['bob'])
    User.objects.create_superuser('root', password=PASS['root'])
    b1 = Book.objects.create(name='Python asoslari', user=a, url='python.org', public=True)
    Book.objects.create(name='Maxfiy kundalik', user=a, url='diary.example.com', public=False)
    b3 = Book.objects.create(name='Django amaliyot', user=b, url='djangoproject.com', public=True)
    Book.objects.create(name='Bobning sirlari', user=b, url='bob.example.com', public=False)
    BookView.objects.create(book=b1, user=b)
    BookView.objects.create(book=b3, user=a)


def make_client(actor):
    c = Client(raise_request_exception=False)
    name = ACTORS[actor]
    if name:
        c.force_login(User.objects.get(username=name))
    return c


def snap():
    return {'books': set(Book.objects.values_list('id', flat=True)),
            'views': set(BookView.objects.values_list('id', flat=True)),
            'users': set(User.objects.values_list('id', flat=True))}


def short(s):
    return s if s is None or len(s) <= 40 else '%s…(%d belgi)' % (s[:10], len(s))


def diff(b, a):
    out = {}
    db = {}
    for k in ('books', 'views', 'users'):
        n = len(a[k]) - len(b[k])
        if n:
            db[k] = n
    if db:
        out['db'] = db
    nb = [{'name': short(x.name), 'url': x.url, 'public': x.public, 'owner': x.user.username}
          for x in Book.objects.filter(id__in=sorted(a['books'] - b['books'])).order_by('id')]
    if nb:
        out['new_book'] = nb[0] if len(nb) == 1 else nb
    nv = ['%d:%s' % (x.book_id, x.user.username)
          for x in BookView.objects.filter(id__in=sorted(a['views'] - b['views'])).order_by('id')]
    if nv:
        out['new_views'] = nv
    nu = [x.username for x in User.objects.filter(id__in=sorted(a['users'] - b['users'])).order_by('id')]
    if nu:
        out['new_user'] = nu[0] if len(nu) == 1 else nu
    return out


def ctx_get(resp, key):
    ctx = getattr(resp, 'context', None)
    if not ctx:
        return None
    try:
        return ctx[key]
    except KeyError:
        return None


def info(resp, c):
    d = {'status': resp.status_code}
    loc = resp.get('Location')
    if loc:
        d['location'] = loc
    exc = getattr(resp, 'exc_info', None)
    if exc:
        d['exception'] = exc[0].__name__
    tpls = []
    for t in (getattr(resp, 'templates', None) or []):
        if t.name in KNOWN and t.name not in tpls:
            tpls.append(t.name)
    if tpls:
        d['templates'] = tpls
    elif resp.status_code == 200 and not exc and resp.get('Content-Type', '').startswith('text/html'):
        body = resp.content.decode()
        if len(body) < 200:
            d['text'] = body
    books = ctx_get(resp, 'books')
    if books is not None:
        d['books'] = [b.name for b in books]
    for k in ('is_public', 'soni'):
        v = ctx_get(resp, k)
        if v is not None:
            d[k] = v
    bk = ctx_get(resp, 'book')
    if bk is not None and hasattr(bk, 'name'):
        d['book'] = bk.name
    msgs = [{'level': m.level_tag, 'text': m.message} for m in get_messages(resp.wsgi_request)]
    if msgs:
        d['messages'] = msgs
    uid = c.session.get('_auth_user_id')
    d['session_user'] = User.objects.get(pk=uid).username if uid else None
    return d


def do(c, spec, follow=False):
    m = spec['method']
    path = spec['path']
    if m == 'GET':
        return c.get(path, follow=follow)
    if m == 'POST':
        return c.post(path, spec.get('payload') or {}, follow=follow)
    return getattr(c, m.lower())(path, follow=follow)


def run_step(c, spec, follow=False):
    b = snap()
    resp = do(c, spec, follow)
    a = snap()
    d = {'actor': spec['actor'], 'method': spec['method'], 'path': spec['path']}
    if spec.get('payload') is not None:
        d['payload'] = spec['payload']
    if follow:
        d['chain'] = [[u, s] for (u, s) in resp.redirect_chain]
    d.update(info(resp, c))
    d.update(diff(b, a))
    return d


def fresh(fn):
    with transaction.atomic():
        seed()
        try:
            return fn()
        finally:
            transaction.set_rollback(True)


def S(actor, method, path, payload=None, label=''):
    return {'actor': actor, 'method': method, 'path': path, 'payload': payload, 'label': label}


GET_PATHS = ['/', '/book-list/', '/book-list/?public=true', '/book-list/?public=false', '/add-book/',
             '/book/1/', '/book/2/', '/book/3/', '/book/4/', '/book/999/', '/login/', '/signup/', '/logout/',
             '/error/', '/admin/', '/nonexistent/', '/book/abc/']

single = []
for actor in ACTORS:
    for p in GET_PATHS:
        single.append(S(actor, 'GET', p))
for actor in ACTORS:
    single += [S(actor, 'POST', '/book-list/'), S(actor, 'PUT', '/book-list/'), S(actor, 'DELETE', '/add-book/'),
               S(actor, 'POST', '/book/1/'), S(actor, 'POST', '/book/2/'), S(actor, 'PUT', '/login/'),
               S(actor, 'DELETE', '/signup/'), S(actor, 'POST', '/logout/')]

ADD = [
    ('private-https', {'name': 'Yangi kitob', 'url': 'https://uz.wikipedia.org/wiki/Django'}),
    ('public-http', {'name': 'Ochiq', 'url': 'http://example.org', 'public': 'on'}),
    ('url-sxemasiz', {'name': 'X', 'url': 'example.com'}),
    ('ftp', {'name': 'F', 'url': 'ftp://files.example.com'}),
    ('url-yoq', {'name': 'Urlsiz'}),
    ('public-true-matn', {'name': 'T', 'url': 'a.b', 'public': 'true'}),
    ('bosh-nom', {'name': '', 'url': 'a.b'}),
    ('bosh-url', {'name': 'E', 'url': ''}),
    ('HTTPS-katta', {'name': 'K', 'url': 'HTTPS://x.com'}),
    ('uzun-nom', {'name': 'N' * 300, 'url': 'a.b'}),
]
for actor in ('anon', 'ega', 'admin'):
    for lbl, pl in ADD:
        single.append(S(actor, 'POST', '/add-book/', pl, lbl))

LOGIN = [
    ('togri', {'username': 'alice', 'password': PASS['alice']}),
    ('xato-parol', {'username': 'alice', 'password': 'nope'}),
    ('yoq-user', {'username': 'ghost', 'password': 'x'}),
    ('bosh', {'username': '', 'password': ''}),
    ('parolsiz', {'username': 'alice'}),
    ('katta-harf', {'username': 'Alice', 'password': PASS['alice']}),
]
for actor in ('anon', 'ega'):
    for lbl, pl in LOGIN:
        single.append(S(actor, 'POST', '/login/', pl, lbl))

SIGN = [
    ('yangi-zaif-parol', {'username': 'charlie', 'password': 'x', 'password_confirm_ui': 'x'}),
    ('mos-emas', {'username': 'charlie', 'password': 'abc', 'password_confirm_ui': 'abd'}),
    ('band-user', {'username': 'alice', 'password': 'x', 'password_confirm_ui': 'x'}),
    ('bosh-user', {'username': '', 'password': 'x', 'password_confirm_ui': 'x'}),
    ('tasdiqsiz', {'username': 'charlie', 'password': 'x'}),
    ('katta-harf-user', {'username': 'ALICE', 'password': 'x', 'password_confirm_ui': 'x'}),
    ('probelli-user', {'username': 'a b', 'password': 'x', 'password_confirm_ui': 'x'}),
]
for actor in ('anon', 'ega'):
    for lbl, pl in SIGN:
        single.append(S(actor, 'POST', '/signup/', pl, lbl))

FOLLOW = [
    S('anon', 'POST', '/login/', LOGIN[1][1], 'xato-parol'),
    S('anon', 'POST', '/login/', LOGIN[0][1], 'togri'),
    S('anon', 'POST', '/signup/', SIGN[1][1], 'mos-emas'),
    S('anon', 'POST', '/signup/', SIGN[2][1], 'band-user'),
    S('anon', 'POST', '/signup/', SIGN[0][1], 'yangi'),
    S('anon', 'GET', '/book/1/', None, 'login-ga'),
    S('anon', 'GET', '/', None, 'bosh'),
    S('ega', 'GET', '/', None, 'bosh'),
    S('ega', 'GET', '/logout/', None, 'chiqish'),
    S('ega', 'POST', '/add-book/', ADD[0][1], 'private'),
    S('ega', 'POST', '/add-book/', ADD[1][1], 'public'),
    S('ega', 'POST', '/add-book/', ADD[3][1], 'ftp'),
]

SEQ = [
    ('noyob-korishlar', [S('ega', 'GET', '/book/3/'), S('begona', 'GET', '/book/3/'), S('begona', 'GET', '/book/3/'),
                         S('admin', 'GET', '/book/3/'), S('ega', 'GET', '/book/3/')]),
    ('private-ega-korishi', [S('ega', 'GET', '/book/2/'), S('ega', 'GET', '/book/2/'), S('begona', 'GET', '/book/2/')]),
    ('egasi-public-ochadi', [S('begona', 'GET', '/book/3/'), S('ega', 'GET', '/book/1/'), S('begona', 'GET', '/book/1/')]),
    ('signup-logout-login', [S('anon', 'POST', '/signup/', SIGN[0][1]), S('anon', 'GET', '/logout/'),
                             S('anon', 'POST', '/login/', {'username': 'charlie', 'password': 'x'}),
                             S('anon', 'GET', '/book-list/')]),
    ('public-qoshish-va-royxat', [S('ega', 'POST', '/add-book/', ADD[1][1]), S('begona', 'GET', '/book-list/?public=true'),
                                  S('ega', 'GET', '/book-list/?public=true'), S('ega', 'GET', '/book-list/')]),
    ('private-boshqaga-korinmaydi', [S('ega', 'POST', '/add-book/', ADD[0][1]), S('begona', 'GET', '/book-list/?public=true'),
                                     S('begona', 'GET', '/book/5/'), S('ega', 'GET', '/book/5/')]),
]


def run_group(specs, follow=False):
    out = []
    for spec in specs:
        def go(spec=spec):
            return run_step(make_client(spec['actor']), spec, follow)
        d = fresh(go)
        if spec.get('label'):
            d['label'] = spec['label']
        out.append(d)
    return out


def run_seq(name, steps):
    def go():
        clients = {}
        res = []
        for st in steps:
            c = clients.setdefault(st['actor'], make_client(st['actor']))
            res.append(run_step(c, st))
        return res
    return {'name': name, 'steps': fresh(go)}


def key(d):
    return (d['actor'], d['method'], d['path'], d.get('label', ''))


single_out = run_group(single)
follow_out = run_group(FOLLOW, follow=True)
seq_out = [run_seq(n, s) for n, s in SEQ]
keys = [key(d) for d in single_out]
assert len(keys) == len(set(keys)), 'takroriy stsenariy kaliti'
for i, d in enumerate(single_out):
    d['id'] = 'S%03d' % (i + 1)
for i, d in enumerate(follow_out):
    d['id'] = 'F%02d' % (i + 1)
for i, d in enumerate(seq_out):
    d['id'] = 'Q%02d' % (i + 1)

meta = {
    'note': 'Sintetik ma\'lumot; natijalar reference nusxada Django Client bilan olingan (haqiqiy).',
    'users': [{'username': 'alice', 'role': 'ega'}, {'username': 'bob', 'role': 'begona'},
              {'username': 'root', 'role': 'admin'}],
    'books': [{'id': 1, 'name': 'Python asoslari', 'owner': 'alice', 'public': True},
              {'id': 2, 'name': 'Maxfiy kundalik', 'owner': 'alice', 'public': False},
              {'id': 3, 'name': 'Django amaliyot', 'owner': 'bob', 'public': True},
              {'id': 4, 'name': 'Bobning sirlari', 'owner': 'bob', 'public': False}],
    'views': ['1:bob', '3:alice'],
    'actors': {'anon': None, 'ega': 'alice', 'begona': 'bob', 'admin': 'root'},
}
sys.stdout.write(json.dumps({'meta': meta, 'single': single_out, 'follow': follow_out, 'seq': seq_out},
                            ensure_ascii=False, sort_keys=True))
