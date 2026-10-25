from django.test import override_settings
from django.urls import resolve, reverse

from .base import Base
from .meta import meta


@meta(['M06-path'])
class UrlTests(Base):
    @meta(['M06-path-converter'], 'MC-url-converter')
    def test_book_url_int_kwarg_id(self):
        """/book/7/ view ga id=7 (butun son) nomli argument bilan boradi"""
        self.assertEqual(resolve('/book/7/').kwargs, {'id': 7})

    @meta(['M06-name-reverse'])
    def test_logout_is_named(self):
        """'logout' nomi /logout/ ga reverse qilinadi"""
        self.assertEqual(reverse('logout'), '/logout/')

    @meta(['M06-path-converter'], 'MC-url-converter')
    def test_bad_book_ids_are_404(self):
        """/book/abc/, /book/-1/, /book/1.5/ — int konvertoriga mos kelmaydi, 404"""
        self.as_(self.ali)
        for u in ('/book/abc/', '/book/-1/', '/book/1.5/'):
            self.assertEqual(self.client.get(u).status_code, 404, u)

    @meta(['M06-trailing-slash'], 'MC-trailing-slash')
    def test_missing_trailing_slash_redirects_301(self):
        """Oxirgi '/' siz so'rov 301 bilan '/' li manzilga yo'naltiriladi (APPEND_SLASH)"""
        for bad, good in (('/book-list', '/book-list/'), ('/add-book', '/add-book/'), ('/book/1', '/book/1/'), ('/login', '/login/')):
            r = self.client.get(bad)
            self.assertEqual((r.status_code, r['Location']), (301, good), bad)

    @meta(['M07-404-vs-text'])
    def test_unknown_path_renders_404_template(self):
        """Yo'q manzil 404 beradi va 404.html shabloni ishlatiladi (DEBUG=False da)"""
        r = self.client.get('/nope/')
        self.assertEqual(r.status_code, 404)
        self.assertTemplateUsed(r, '404.html')

    @meta(['M06-template-view'])
    def test_error_page_public_template_view(self):
        """/error/ hamma uchun ochiq (kirish shart emas) va error.html ni ko'rsatadi"""
        r = self.client.get('/error/')
        self.assertEqual(r.status_code, 200)
        self.assertTemplateUsed(r, 'error.html')
        self.assertContains(r, 'XATO')

    @meta(['M09-is-authenticated'], 'MC-forgot-auth-check')
    def test_anon_redirect_table(self):
        """Kirmagan foydalanuvchi: /, /book-list/, /add-book/, /book/1/, /logout/ -> /login/; /login/, /signup/, /error/ -> 200"""
        for u in ('/', '/book-list/', '/add-book/', '/book/1/', '/logout/'):
            r = self.client.get(u)
            self.assertEqual((r.status_code, r['Location']), (302, '/login/'), u)
        for u in ('/login/', '/signup/', '/error/'):
            self.assertEqual(self.client.get(u).status_code, 200, u)

    @meta(['M11-admin-register'])
    def test_admin_url_exists(self):
        """/admin/ bor: kirmagan foydalanuvchi /admin/login/ ga yo'naltiriladi"""
        r = self.client.get('/admin/')
        self.assertEqual(r.status_code, 302)
        self.assertTrue(r['Location'].startswith('/admin/login/'), r['Location'])
