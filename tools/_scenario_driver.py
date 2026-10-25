"""gen_scenarios.py tomonidan reference'ning TMP nusxasi ichida ishga tushiriladi (Django test muhiti, xotira DB).
argv[1] = natija JSON yo'li. Har ssenariy seed holatidagi db nusxasidan boshlanadi (id lar barqaror)."""
import json
import os
import re
import shutil
import sys

sys.path.insert(0, os.environ['BS_TOOLS'])
os.environ['DJANGO_SETTINGS_MODULE'] = 'core.settings'

import django  # noqa: E402

django.setup()
from django.conf import settings  # noqa: E402
from django.contrib.auth.models import User  # noqa: E402
from django.contrib.messages import get_messages  # noqa: E402
from django.core.management import call_command  # noqa: E402
from django.db import connection  # noqa: E402
from django.test import Client  # noqa: E402
from django.test.utils import CaptureQueriesContext, setup_test_environment  # noqa: E402

import bs_seed  # noqa: E402
from main.models import Book, BookView  # noqa: E402

settings.PASSWORD_HASHERS = ['django.contrib.auth.hashers.MD5PasswordHasher']
setup_test_environment()  # DEBUG qiymati reference'dagidek qoladi (haqiqiy loyihada DEBUG=True)
call_command('migrate', verbosity=0, interactive=False)  # tmp nusxadagi db.sqlite3 (haqiqiy loyihaga tegmaydi)
USERS = bs_seed.load()
DB = str(settings.DATABASES['default']['NAME'])
BAK = DB + '.seed'
connection.close()
shutil.copy(DB, BAK)  # seed holati; har ssenariy shundan boshlanadi (tranzaksiya emas: view IntegrityError ushlaydi)
MAIN_TEMPLATES = {'login.html', 'signup.html', 'books-list.html', 'add_book.html', 'book.html', 'error.html', '404.html'}

SPEC = []


def add(actor, method, path, data=None, note='', repeat=1):
    SPEC.append({'actor': actor, 'method': method, 'path': path, 'data': data, 'note': note, 'repeat': repeat})


ACTORS = ['anon', 'ali', 'vali', 'admin']
for a in ACTORS:
    add(a, 'GET', '/', note="bosh sahifa")
for a in ACTORS:
    for q in ['', '?public=true', '?public=false', '?public=True', '?public=1']:
        add(a, 'GET', '/book-list/' + q, note="kitoblar ro'yxati" + (' ' + q if q else ''))
add('anon', 'POST', '/book-list/', {}, "ro'yxatga POST (kirmagan)")
add('ali', 'POST', '/book-list/', {}, "ro'yxatga POST (kirgan)")
add('ali', 'DELETE', '/book-list/', None, "ro'yxatga DELETE (kirgan)")
for a in ACTORS:
    add(a, 'GET', '/add-book/', note="kitob qo'shish formasi")
ADD = [
    ('private-https', {'name': 'Yangi kitob', 'url': 'https://example.uz/yangi'}),
    ('public-http', {'name': 'Ochiq kitob', 'url': 'http://example.uz/ochiq', 'public': 'on'}),
    ('no-scheme', {'name': 'Sxemasiz', 'url': 'example.uz/sxemasiz'}),
    ('ftp', {'name': 'FTP kitob', 'url': 'ftp://example.uz/f'}),
    ('empty-name', {'name': '', 'url': 'example.uz/b'}),
    ('no-url', {'name': 'URL yo‘q'}),
    ('no-name', {'url': 'example.uz/n'}),
    ('public-off', {'name': 'Public off', 'url': 'example.uz/x', 'public': 'off'}),
    ('empty', {}),
]
for tag, d in ADD:
    add('ali', 'POST', '/add-book/', d, 'kitob qo‘shish: ' + tag)
add('anon', 'POST', '/add-book/', ADD[0][1], "kitob qo'shish (kirmagan)")
add('vali', 'POST', '/add-book/', ADD[1][1], "kitob qo'shish (boshqa foydalanuvchi)")
add('ali', 'DELETE', '/add-book/', None, "add-book ga DELETE")
for bid, what in [(1, 'ali public'), (2, 'ali private'), (3, 'vali public'), (4, 'vali private'), (999, "yo'q id")]:
    for a in ACTORS:
        add(a, 'GET', '/book/%d/' % bid, note='kitob sahifasi: %s' % what)
add('vali', 'POST', '/book/1/', {}, "kitob sahifasiga POST")
add('sardor', 'GET', '/book/17/', None, "yangi ko'ruvchi, ikki marta ochadi: noyob hisob", repeat=2)
add('ali', 'GET', '/book/abc/', None, "int bo'lmagan id")
add('ali', 'GET', '/book/1', None, "oxirgi / yo'q (APPEND_SLASH)")
add('anon', 'GET', '/book-list', None, "oxirgi / yo'q")
LOGIN = [
    ('ok', {'username': 'ali', 'password': 'pw-ali'}),
    ('wrong-password', {'username': 'ali', 'password': 'xato'}),
    ('unknown-user', {'username': 'yoq', 'password': 'x'}),
    ('missing-both', {}),
    ('only-username', {'username': 'ali'}),
]
add('anon', 'GET', '/login/', note='login formasi')
add('ali', 'GET', '/login/', note='kirgan foydalanuvchi login ochadi')
for tag, d in LOGIN:
    add('anon', 'POST', '/login/', d, 'login: ' + tag)
add('ali', 'POST', '/login/', {'username': 'vali', 'password': 'pw-vali'}, 'kirgan foydalanuvchi boshqa akkauntga kirmoqchi')
add('anon', 'DELETE', '/login/', None, 'login ga DELETE')
SIGN = [
    ('ok', {'username': 'yangi', 'password': 'Sir-123', 'password_confirm_ui': 'Sir-123'}),
    ('mismatch', {'username': 'yangi', 'password': 'Sir-123', 'password_confirm_ui': 'Boshqa-1'}),
    ('taken', {'username': 'ali', 'password': 'Sir-123', 'password_confirm_ui': 'Sir-123'}),
    ('empty-username', {'username': '', 'password': 'Sir-123', 'password_confirm_ui': 'Sir-123'}),
    ('weak-password', {'username': 'zaif', 'password': '1', 'password_confirm_ui': '1'}),
    ('missing-confirm', {'username': 'yangi', 'password': 'Sir-123'}),
    ('empty', {}),
]
add('anon', 'GET', '/signup/', note="ro'yxatdan o'tish formasi")
add('ali', 'GET', '/signup/', note='kirgan foydalanuvchi signup ochadi')
for tag, d in SIGN:
    add('anon', 'POST', '/signup/', d, 'signup: ' + tag)
add('ali', 'POST', '/signup/', SIGN[0][1], 'kirgan foydalanuvchi signup POST')
add('anon', 'DELETE', '/signup/', None, 'signup ga DELETE')
add('ali', 'GET', '/logout/', note='logout GET (kirgan)')
add('anon', 'GET', '/logout/', note='logout GET (kirmagan)')
add('ali', 'POST', '/logout/', {}, 'logout POST')
add('anon', 'GET', '/error/', note='/error/ sahifasi')
add('ali', 'GET', '/error/', note='/error/ sahifasi (kirgan)')
add('anon', 'GET', '/admin/', note='admin (kirmagan)')
add('ali', 'GET', '/admin/', note='admin (oddiy foydalanuvchi)')
add('admin', 'GET', '/admin/', note='admin (superuser)')
add('anon', 'GET', '/admin/login/', note='admin login sahifasi')
add('anon', 'GET', '/yoq/', note="mavjud bo'lmagan URL")
add('ali', 'GET', '/yoq/', note="mavjud bo'lmagan URL (kirgan)")


def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-') or 'root'


def snap():
    return ({u.pk: u for u in User.objects.all()}, {b.pk: b for b in Book.objects.select_related('user')},
            {v.pk: v for v in BookView.objects.select_related('user')})


def run_one(sp, idx):
    if True:
        connection.close()
        shutil.copy(BAK, DB)
        before = snap()
        c = Client(raise_request_exception=False)
        if sp['actor'] != 'anon':
            c.force_login(USERS[sp['actor']])
        fn = getattr(c, sp['method'].lower())
        resp = None
        with CaptureQueriesContext(connection) as q:
            for _ in range(sp['repeat']):
                resp = fn(sp['path'], sp['data']) if sp['method'] in ('POST', 'PUT', 'PATCH') else fn(sp['path'])
        res = {'status': resp.status_code}
        loc = resp.headers.get('Location')
        if loc:
            res['location'] = loc
        exc = getattr(resp, 'exc_info', None)
        if exc:
            res['error'] = {'type': exc[0].__name__, 'text': str(exc[1])[:160]}
        res['templates'] = sorted({t.name for t in (resp.templates or []) if t.name in MAIN_TEMPLATES})
        if any((t.name or '').startswith('admin/') for t in (resp.templates or [])):
            res['admin_page'] = True
        ctx = resp.context
        if ctx is not None and 'books-list.html' in res['templates']:
            res['render'] = {'is_public': ctx['is_public'], 'books': [{'id': b.pk, 'name': b.name, 'owner': b.user.username,
                             'views': b.bookview_set.count()} for b in ctx['books']]}
        elif ctx is not None and 'book.html' in res['templates']:
            b = ctx['book']
            res['render'] = {'book': b.name, 'owner': b.user.username, 'soni': ctx['soni']}
        elif resp.status_code == 200 and not res['templates'] and not res.get('admin_page') and 'text' in resp.headers.get('Content-Type', ''):
            res['body'] = resp.content.decode('utf-8', 'replace')[:200]
        msgs = [[m.level_tag, str(m)] for m in get_messages(resp.wsgi_request)]
        if msgs:
            res['messages'] = msgs
        sid = c.session.get('_auth_user_id')
        res['session_user'] = User.objects.get(pk=sid).username if sid else None
        res['queries'] = len(q)
        after = snap()
        delta = {'users': len(after[0]) - len(before[0]), 'books': len(after[1]) - len(before[1]), 'views': len(after[2]) - len(before[2])}
        res['db_delta'] = delta
        new_u = [u for k, u in after[0].items() if k not in before[0]]
        new_b = [b for k, b in after[1].items() if k not in before[1]]
        new_v = [v for k, v in after[2].items() if k not in before[2]]
        if new_u:
            res['new_users'] = [{'username': u.username, 'hashed': '$' in u.password and u.password != 'Sir-123'} for u in new_u]
        if new_b:
            res['new_books'] = [{'id': b.pk, 'name': b.name, 'url': b.url, 'public': b.public, 'owner': b.user.username} for b in new_b]
        if new_v:
            res['new_views'] = [{'book_id': v.book_id, 'user': v.user.username} for v in new_v]
    sid_ = '%03d-%s-%s-%s' % (idx, sp['actor'], sp['method'].lower(), slug(sp['path']))
    out = {'id': sid_, 'actor': sp['actor'], 'method': sp['method'], 'path': sp['path'], 'note': sp['note'], 'result': res}
    if sp['data'] is not None:
        out['data'] = sp['data']
    if sp['repeat'] != 1:
        out['repeat'] = sp['repeat']
    return out


items = [run_one(sp, i + 1) for i, sp in enumerate(SPEC)]
with open(sys.argv[1], 'w', encoding='utf-8') as f:
    json.dump({'django': django.get_version(), 'debug': bool(settings.DEBUG), 'items': items}, f, ensure_ascii=False)
print('ok', len(items))
