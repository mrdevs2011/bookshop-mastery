"""Formalar (HTML maydon nomlari), book.html muallif bloki va settings.py ning haqiqiy qiymatlari.
Forma testi: view `request.POST.get('password')` deydi — shablon esa aynan shu nomli <input> chiqarishi SHART,
aks holda brauzer forma yuborganda view bo'sh qiymat oladi (testlar `client.post` bilan buni sezmaydi)."""
import importlib
import re

from .base import Base
from .meta import meta


def input_names(html):
    return set(re.findall(r'<input[^>]*\bname="([^"]+)"', html))


@meta(['M08-form-fields'])
class FormFieldTests(Base):
    @meta(['M09-login-flow', 'M08-form-fields'], 'MC-field-name-mismatch')
    def test_login_form_fields(self):
        """login.html formasida view kutgan maydonlar bor: username va password"""
        names = input_names(self.client.get('/login/').content.decode())
        self.assertTrue({'username', 'password'} <= names, "login.html da <input name=...> yetishmaydi, bor: %s" % sorted(names))

    @meta(['M09-login-flow', 'M08-form-fields'], 'MC-field-name-mismatch')
    def test_login_form_roundtrip(self):
        """Login formasidagi maydon nomlari bilan yuborilgan ma'lumot haqiqatan kiritadi"""
        names = input_names(self.client.get('/login/').content.decode())
        data = {n: ('ali' if n == 'username' else 'pw-ali') for n in names}
        r = self.client.post('/login/', data)
        self.assertGoes(r, '/book-list/')
        self.assertEqual(self.session_uid(), str(self.ali.pk))

    @meta(['M09-signup-flow', 'M08-form-fields'], 'MC-field-name-mismatch')
    def test_signup_form_fields(self):
        """signup.html formasida: username, password va password_confirm_ui (view shu nomlarni o'qiydi)"""
        names = input_names(self.client.get('/signup/').content.decode())
        need = {'username', 'password', 'password_confirm_ui'}
        self.assertTrue(need <= names, "signup.html da <input name=...> yetishmaydi, bor: %s" % sorted(names))

    @meta(['M09-signup-flow', 'M08-form-fields'], 'MC-field-name-mismatch')
    def test_signup_form_roundtrip(self):
        """Signup formasidagi maydon nomlari bilan yangi foydalanuvchi yaratiladi va avtomatik kiradi"""
        names = input_names(self.client.get('/signup/').content.decode())
        data = {n: ('yangi' if n == 'username' else 'Sir-123') for n in names}
        r = self.client.post('/signup/', data)
        self.assertGoes(r, '/book-list/')
        self.assertIsNotNone(self.session_uid())

    @meta(['M10-add-book', 'M08-form-fields'], 'MC-field-name-mismatch')
    def test_add_book_form_fields(self):
        """add_book.html formasida: name, url va public (checkbox)"""
        html = self.as_(self.ali).get('/add-book/').content.decode()
        names = input_names(html)
        self.assertTrue({'name', 'url', 'public'} <= names, "add_book.html da <input name=...> yetishmaydi, bor: %s" % sorted(names))
        self.assertIn('type="checkbox" name="public"', html)

    @meta(['M10-add-book', 'M08-form-fields'], 'MC-field-name-mismatch')
    def test_add_book_form_roundtrip(self):
        """add_book formasidagi 'public' checkbox nomi bilan yuborilsa, kitob ommaviy bo'ladi"""
        c = self.as_(self.ali)
        names = input_names(c.get('/add-book/').content.decode())
        data = {n: ('Forma kitobi' if n == 'name' else 'forma.uz/k') for n in names if n != 'public'}
        if 'public' in names:
            data['public'] = 'on'
        self.assertGoes(c.post('/add-book/', data), '/book-list/')
        b = self.ali.book_set.get(name='Forma kitobi')
        self.assertTrue(b.public, "checkbox yuborildi, lekin kitob public bo'lmadi — maydon nomi view dagi bilan mos emasmi?")


@meta(['M08-template-vars'])
class BookPageAuthorTests(Base):
    @meta(['M08-dotted-lookup'], 'MC-wrong-variable')
    def test_author_block_shows_owner_username(self):
        """book.html 'muallif' bloki kitob egasining username'ini ko'rsatadi (kitob nomini emas)"""
        b = self.book(self.ali, name='Mualliflik sinovi', public=True)
        html = self.as_(self.vali).get('/book/%d/' % b.pk).content.decode()
        self.assertIn('<div class="detail-value">ali</div>', html)
        self.assertIn('<div class="detail-value title">Mualliflik sinovi</div>', html)


@meta(['M02-settings'])
class ConfigValueTests(Base):
    """Django test-runner DEBUG ni o'zi False qiladi va ALLOWED_HOSTS ga 'testserver' qo'shadi,
    shuning uchun qiymatlar settings MODULI dan o'qiladi."""

    def mod(self):
        return importlib.import_module('core.settings')

    @meta(['M12-debug-hosts'], 'MC-dev-settings-in-prod', kind='quirk')
    def test_debug_true_and_open_hosts(self):
        """Haqiqiy loyihada DEBUG=True va ALLOWED_HOSTS=['*'] (B20 — ishlab chiqarishda xavfli)"""
        m = self.mod()
        self.assertIs(m.DEBUG, True)
        self.assertEqual(list(m.ALLOWED_HOSTS), ['*'])

    @meta(['M02-i18n'], 'MC-lang-tz-defaults', kind='quirk')
    def test_language_and_timezone(self):
        """LANGUAGE_CODE='en-us', TIME_ZONE='UTC', USE_TZ=True (B21 — UI o'zbekcha bo'lsa ham)"""
        m = self.mod()
        self.assertEqual(m.LANGUAGE_CODE, 'en-us')
        self.assertEqual(m.TIME_ZONE, 'UTC')
        self.assertIs(m.USE_TZ, True)
