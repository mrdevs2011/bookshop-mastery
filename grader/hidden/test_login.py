from django.test import Client
from django.utils.html import escape

from .base import Base
from .meta import meta

BAD = "Kechirasiz kiritilgan ma'lumotlar xato!"


@meta(['M09-login-flow'])
class LoginTests(Base):
    def test_get_shows_form(self):
        """Kirmagan foydalanuvchi uchun GET /login/ forma (login.html) ko'rsatadi"""
        r = self.client.get('/login/')
        self.assertEqual(r.status_code, 200)
        self.assertTemplateUsed(r, 'login.html')

    @meta(['M09-is-authenticated'])
    def test_logged_in_user_skips_login(self):
        """Allaqachon kirgan foydalanuvchi /login/ ni ochsa ham, POST qilsa ham /book-list/ ga yo'naltiriladi"""
        c = self.as_(self.ali)
        self.assertGoes(c.get('/login/'), '/book-list/')
        self.assertGoes(c.post('/login/', {'username': 'vali', 'password': 'pw-vali'}), '/book-list/')
        self.assertEqual(self.session_uid(), str(self.ali.pk), 'boshqa akkauntga o\'tib ketmasligi kerak')

    @meta(['M09-check-password', 'M09-session'], 'MC-session-missing')
    def test_good_credentials_log_in(self):
        """To'g'ri login+parol: sessiyada foydalanuvchi paydo bo'ladi va /book-list/ ga yo'naltiriladi"""
        r = self.client.post('/login/', {'username': 'ali', 'password': 'pw-ali'})
        self.assertGoes(r, '/book-list/')
        self.assertEqual(self.session_uid(), str(self.ali.pk))
        self.assertEqual(self.client.get('/book-list/').status_code, 200)

    @meta(['M09-check-password'], 'MC-msg-missing')
    def test_wrong_password(self):
        """Noto'g'ri parol: /login/ ga qaytariladi, 'error' xabari, sessiya yo'q"""
        r = self.client.post('/login/', {'username': 'ali', 'password': 'noto\'g\'ri'})
        self.assertGoes(r, '/login/')
        self.assertEqual(self.msgs(r), [('error', BAD)])
        self.assertIsNone(self.session_uid())

    @meta(['M12-user-enum'], 'MC-user-enum')
    def test_unknown_user_same_message(self):
        """Mavjud bo'lmagan foydalanuvchi ham xuddi shu xabar va yo'naltirishni oladi (kim borligini bildirmaydi)"""
        r = self.client.post('/login/', {'username': 'yoq-odam', 'password': 'x'})
        self.assertGoes(r, '/login/')
        self.assertEqual(self.msgs(r), [('error', BAD)])
        self.assertIsNone(self.session_uid())

    @meta(['M09-check-password'])
    def test_missing_and_case_sensitive_fields(self):
        """Maydonlar yo'q bo'lsa yiqilmaydi; username katta-kichik harfga sezgir; parol bo'sh bo'lsa kirmaydi"""
        for data in ({}, {'username': 'ali'}, {'password': 'pw-ali'}, {'username': 'Ali', 'password': 'pw-ali'}, {'username': 'ali', 'password': ''},
                     {'username': 'ali', 'password': 'PW-ALI'}):
            c = Client()
            r = c.post('/login/', data)
            self.assertEqual((r.status_code, r['Location']), (302, '/login/'), data)
            self.assertIsNone(c.session.get('_auth_user_id'), data)

    @meta(['M08-messages'], 'MC-msg-missing')
    def test_message_shown_once_on_login_page(self):
        """Xato xabari /login/ sahifasida (class='error') bir marta ko'rinadi, keyingi ochilishda yo'q"""
        c = Client()
        r = c.post('/login/', {'username': 'ali', 'password': 'x'}, follow=True)
        self.assertContains(r, '<li class="error">%s</li>' % escape(BAD), html=False)
        self.assertNotContains(c.get('/login/'), 'Kechirasiz')

    @meta(['M09-is-active'], 'MC-authenticate-vs-manual', kind='quirk')
    def test_inactive_user_can_log_in(self):
        """authenticate() ishlatilmagani uchun is_active=False foydalanuvchi ham kira oladi (B08)"""
        self.ali.is_active = False
        self.ali.save()
        c = Client()
        r = c.post('/login/', {'username': 'ali', 'password': 'pw-ali'})
        self.assertGoes(r, '/book-list/')
        self.assertEqual(c.session.get('_auth_user_id'), str(self.ali.pk))

    @meta(['M07-none-return'], 'MC-none-return', kind='quirk')
    def test_other_methods_crash(self):
        """GET/POST dan boshqa metodda view None qaytaradi -> ValueError (B03)"""
        for m in ('put', 'delete'):
            with self.assertRaises(ValueError, msg=m):
                getattr(Client(), m)('/login/')
