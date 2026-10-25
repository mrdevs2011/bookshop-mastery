from django.conf import settings
from django.template.loader import get_template
from django.test import Client

from .base import Base
from .meta import meta


@meta(['M02-settings'])
class SettingsTests(Base):
    @meta(['M02-installed-apps'], 'MC-app-not-installed')
    def test_apps_installed(self):
        """INSTALLED_APPS da main, auth, sessions, messages, admin bor"""
        for a in ('main', 'django.contrib.auth', 'django.contrib.sessions', 'django.contrib.messages', 'django.contrib.admin', 'django.contrib.contenttypes'):
            self.assertIn(a, settings.INSTALLED_APPS)

    @meta(['M02-middleware'])
    def test_required_middleware(self):
        """MIDDLEWARE da Session, Authentication va Message middleware bor (request.user va messages ishlashi uchun)"""
        for m in ('django.contrib.sessions.middleware.SessionMiddleware', 'django.contrib.auth.middleware.AuthenticationMiddleware',
                  'django.contrib.messages.middleware.MessageMiddleware'):
            self.assertIn(m, settings.MIDDLEWARE)
        mw = list(settings.MIDDLEWARE)
        self.assertLess(mw.index('django.contrib.sessions.middleware.SessionMiddleware'), mw.index('django.contrib.auth.middleware.AuthenticationMiddleware'),
                        'Session middleware Authentication dan OLDIN turishi kerak')

    @meta(['M02-urlconf'])
    def test_urlconf_and_db(self):
        """ROOT_URLCONF = core.urls, ma'lumotlar bazasi — SQLite"""
        self.assertEqual(settings.ROOT_URLCONF, 'core.urls')
        self.assertTrue(settings.DATABASES['default']['ENGINE'].endswith('sqlite3'))

    @meta(['M08-template-dirs'])
    def test_all_templates_found(self):
        """Shablonlar topiladi: login, signup, books-list, add_book, book, error, 404"""
        for t in ('login.html', 'signup.html', 'books-list.html', 'add_book.html', 'book.html', 'error.html', '404.html'):
            get_template(t)

    @meta(['M12-csrf'], 'MC-csrf-assumed', kind='quirk')
    def test_csrf_not_enforced(self):
        """Bu loyihada CsrfViewMiddleware yo'q: csrf tokensiz POST ham ishlaydi (B05)"""
        self.assertNotIn('django.middleware.csrf.CsrfViewMiddleware', settings.MIDDLEWARE)
        c = Client(enforce_csrf_checks=True)
        r = c.post('/login/', {'username': 'ali', 'password': 'pw-ali'})
        self.assertEqual((r.status_code, r['Location']), (302, '/book-list/'))
        c.post('/add-book/', {'name': 'X', 'url': 'x.uz'})
        self.assertEqual(self.ali.book_set.count(), 1)

    @meta(['M12-password-validators'], 'MC-validators-assumed', kind='quirk')
    def test_validators_configured_but_unused(self):
        """AUTH_PASSWORD_VALIDATORS sozlangan, lekin signup ularni chaqirmaydi (B07)"""
        self.assertGreaterEqual(len(settings.AUTH_PASSWORD_VALIDATORS), 1)
