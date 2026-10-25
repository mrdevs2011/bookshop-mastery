"""gen_sql.py shu faylni reference NUSXA ichida BookShopBomba venv Python bilan ishga tushiradi: _sql_driver.py <out.json>.
Xotiradagi SQLite + sintetik seed (tools/bs_seed.py). Har holat tranzaksiya rollback bilan izolyatsiya qilinadi.
Har holat: kod (talabaga ko'rsatiladigan), natija, HAQIQIY bajarilgan SQL (CaptureQueriesContext), so'rovlar soni."""
import json
import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.environ['BS_TOOLS'])

import django  # noqa: E402
from django.conf import settings  # noqa: E402
import core.settings as _s  # noqa: E402

_cfg = {k: getattr(_s, k) for k in dir(_s) if k.isupper()}
_cfg.update(DATABASES={'default': {'ENGINE': 'django.db.backends.sqlite3', 'NAME': ':memory:'}},
            DEBUG=False, LOGGING={}, LOGGING_CONFIG=None, SECRET_KEY='sql-gen-only',
            PASSWORD_HASHERS=['django.contrib.auth.hashers.MD5PasswordHasher'])
settings.configure(**_cfg)
django.setup()

from django.contrib.auth.models import User  # noqa: E402
from django.core.management import call_command  # noqa: E402
from django.db import connection, transaction  # noqa: E402
from django.db.models import Count, Q  # noqa: E402
from django.test.utils import CaptureQueriesContext  # noqa: E402
from main.models import Book, BookView  # noqa: E402
import bs_seed  # noqa: E402

call_command('migrate', verbosity=0, interactive=False)
bs_seed.load()

# (id, mavzu, kod, tushuntirish_kaliti)  — kod: exec qilinadi, oxirida `result` o'zgaruvchisi bo'lishi shart.
CASES = [
    ('Q01', 'all', "result = list(Book.objects.all()[:3])", 'all-lazy'),
    ('Q02', 'count-vs-len', "result = Book.objects.count()", 'count-sql'),
    ('Q03', 'count-vs-len', "result = len(Book.objects.all())", 'len-loads-all'),
    ('Q04', 'filter', "ali = User.objects.get(username='ali')\nresult = [b.id for b in Book.objects.filter(user_id=ali.id).order_by('-id')]", 'filter-user_id'),
    ('Q05', 'filter', "ali = User.objects.get(username='ali')\nresult = [b.id for b in Book.objects.filter(user=ali).order_by('-id')]", 'filter-user-eq-user_id'),
    ('Q06', 'filter', "result = Book.objects.filter(public=True).count()", 'filter-public'),
    ('Q07', 'exclude', "result = Book.objects.exclude(public=True).count()", 'exclude'),
    ('Q08', 'Q', "ali = User.objects.get(username='ali')\nresult = Book.objects.filter(Q(public=True) | Q(user=ali)).count()", 'Q-or'),
    ('Q09', 'Q', "ali = User.objects.get(username='ali')\nresult = Book.objects.filter(public=True, user=ali).count()", 'filter-and'),
    ('Q10', 'order_by', "result = list(Book.objects.order_by('-id').values_list('id', flat=True)[:5])", 'order-desc-limit'),
    ('Q11', 'icontains', "result = list(Book.objects.filter(name__icontains='python').values_list('name', flat=True))", 'icontains'),
    ('Q12', 'exists', "result = Book.objects.filter(public=True, user__username='admin').exists()", 'exists-limit1'),
    ('Q13', 'get', "result = Book.objects.get(id=1).name", 'get-one'),
    ('Q14', 'get', "try:\n    Book.objects.get(id=999)\n    result = 'topildi'\nexcept Book.DoesNotExist:\n    result = 'DoesNotExist'", 'get-missing'),
    ('Q15', 'get_or_create', "vali = User.objects.get(username='vali')\nresult = list(BookView.objects.get_or_create(book_id=1, user=vali))[1]", 'get_or_create-exists'),
    ('Q16', 'get_or_create', "dil = User.objects.get(username='dilnoza')\nresult = list(BookView.objects.get_or_create(book_id=1, user=dil))[1] is False", 'get_or_create-exists-b'),
    ('Q17', 'get_or_create', "bob = User.objects.get(username='bobur')\nresult = BookView.objects.get_or_create(book_id=3, user=bob)[1]", 'get_or_create-create'),
    ('Q18', 'lazy', "qs = Book.objects.filter(public=True).order_by('-id')\nresult = 'qs tuzildi, hali o‘qilmadi'", 'lazy-zero'),
    ('Q19', 'lazy', "qs = Book.objects.filter(public=True)\nlist(qs)\nlist(qs)\nresult = len(qs)", 'queryset-cache'),
    ('Q20', 'lazy', "qs = Book.objects.filter(public=True)\nlist(qs)\nresult = qs.count()", 'count-after-eval-cache'),
    ('Q21', 'reverse', "b = Book.objects.get(id=1)\nresult = b.bookview_set.count()", 'bookview_set-count'),
    ('Q22', 'reverse', "result = User.objects.filter(book__public=True).distinct().count()", 'reverse-query-name'),
    ('Q23', 'join', "vali = User.objects.get(username='vali')\nresult = list(Book.objects.filter(bookview__user=vali).values_list('id', flat=True).order_by('id'))", 'join-filter'),
    ('Q24', 'n+1', "result = [b.bookview_set.count() for b in Book.objects.filter(public=True)]", 'n-plus-1'),
    ('Q25', 'n+1', "result = [b.bookview_count for b in Book.objects.filter(public=True).annotate(bookview_count=Count('bookview'))]", 'annotate-fix'),
    ('Q26', 'n+1', "result = [len(b.bookview_set.all()) for b in Book.objects.filter(public=True).prefetch_related('bookview_set')]", 'prefetch-fix'),
    ('Q27', 'n+1', "result = [b.user.username for b in Book.objects.filter(public=True)]", 'fk-n-plus-1'),
    ('Q28', 'n+1', "result = [b.user.username for b in Book.objects.filter(public=True).select_related('user')]", 'select_related-fix'),
    ('Q29', 'aggregate', "result = BookView.objects.filter(book_id=1).values('user').distinct().count()", 'distinct-count'),
    ('Q30', 'annotate', "result = list(BookView.objects.values('book').annotate(n=Count('id')).order_by('-n', 'book')[:3])", 'group-by'),
    ('Q31', 'first-last', "result = [Book.objects.first().id, Book.objects.last().id]", 'first-last'),
    ('Q32', 'null', "result = Book.objects.filter(url__isnull=True).count()", 'isnull'),
    ('Q33', 'cascade', "ali = User.objects.get(username='ali')\nbefore = (Book.objects.count(), BookView.objects.count())\nali.delete()\nresult = {'oldin': before, 'keyin': (Book.objects.count(), BookView.objects.count())}", 'on_delete-cascade'),
    ('Q34', 'update', "n = Book.objects.filter(public=False).update(public=True)\nresult = {'yangilandi': n, 'public': Book.objects.filter(public=True).count()}", 'update-bulk'),
    ('Q35', 'create', "ali = User.objects.get(username='ali')\nb = Book.objects.create(name='Yangi', user=ali, url=None)\nresult = {'id': b.id, 'public': b.public, 'url': b.url}", 'create-defaults'),
]


def serial(v):
    if isinstance(v, (list, tuple)):
        return [serial(i) for i in v]
    if isinstance(v, dict):
        return {str(k): serial(x) for k, x in v.items()}
    if isinstance(v, (int, float, bool, str)) or v is None:
        return v
    return repr(v)


def run_case(cid, topic, code, key):
    ns = dict(Book=Book, BookView=BookView, User=User, Q=Q, Count=Count)
    with transaction.atomic():
        with CaptureQueriesContext(connection) as ctx:
            exec(code, ns)
        sqls = [q['sql'] for q in ctx.captured_queries if not q['sql'].upper().startswith(('SAVEPOINT', 'RELEASE'))]
        qs = ns.get('qs')
        qstr = None
        if qs is not None and hasattr(qs, 'query'):
            qstr = str(qs.query)
        transaction.set_rollback(True)
    return {'id': cid, 'topic': topic, 'key': key, 'code': code, 'result': serial(ns['result']),
            'queries': len(sqls), 'sql': sqls[:4], 'sql_more': max(0, len(sqls) - 4), 'qs_sql': qstr}


def main(out):
    cases = [run_case(*c) for c in CASES]
    ids = [c['id'] for c in cases]
    assert len(set(ids)) == len(ids)
    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'meta': {'db': 'sqlite3 (:memory:)', 'django': django.get_version(), 'seed': 'tools/bs_seed.py (sintetik)',
                            'note': 'SQL va so\'rovlar soni haqiqiy: CaptureQueriesContext (reference nusxada).'},
                   'cases': cases}, f, ensure_ascii=False, sort_keys=True)


main(sys.argv[1])
