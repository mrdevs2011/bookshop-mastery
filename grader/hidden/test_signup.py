from django.contrib.auth.models import User
from django.db import IntegrityError
from django.test import Client

from .base import Base
from .meta import meta


@meta(['M09-signup'])
class SignupTests(Base):
    def reg(self, c=None, **kw):
        d = {'username': 'yangi', 'password': 'maxfiy123', 'password_confirm_ui': 'maxfiy123'}
        d.update(kw)
        return (c or Client()).post('/signup/', d)

    def test_get_shows_form(self):
        """GET /signup/: forma (signup.html)"""
        r = self.client.get('/signup/')
        self.assertEqual(r.status_code, 200)
        self.assertTemplateUsed(r, 'signup.html')

    @meta(['M09-is-authenticated'])
    def test_logged_in_user_redirected(self):
        """Kirgan foydalanuvchi /signup/ ni ochsa/POST qilsa /book-list/ ga ketadi, yangi akkaunt yaratilmaydi"""
        c = self.as_(self.ali)
        self.assertGoes(c.get('/signup/'), '/book-list/')
        self.assertGoes(self.reg(c), '/book-list/')
        self.assertFalse(User.objects.filter(username='yangi').exists())

    @meta(['M09-set-password', 'M09-session'], 'MC-password-plain')
    def test_signup_creates_hashed_user_and_logs_in(self):
        """To'g'ri ro'yxatdan o'tish: foydalanuvchi yaratiladi, parol HASH qilinadi (ochiq saqlanmaydi), avtomatik kiradi, /book-list/"""
        c = Client()
        r = self.reg(c)
        self.assertGoes(r, '/book-list/')
        u = User.objects.get(username='yangi')
        self.assertNotEqual(u.password, 'maxfiy123')
        self.assertNotIn('maxfiy123', u.password)
        self.assertTrue(u.check_password('maxfiy123'))
        self.assertEqual(c.session.get('_auth_user_id'), str(u.pk))
        self.assertEqual(c.get('/book-list/').status_code, 200)

    @meta(['M09-signup'], 'MC-msg-missing')
    def test_password_mismatch(self):
        """Parollar mos kelmasa: /signup/ ga qaytariladi, 'Parolllar mos emas!' xabari, foydalanuvchi yaratilmaydi"""
        c = Client()
        r = self.reg(c, password_confirm_ui='boshqa')
        self.assertGoes(r, '/signup/')
        self.assertEqual(self.msgs(r), [('error', 'Parolllar mos emas!')])
        self.assertFalse(User.objects.filter(username='yangi').exists())
        self.assertIsNone(c.session.get('_auth_user_id'))

    @meta(['M04-get', 'M09-signup'], 'MC-msg-missing')
    def test_username_taken(self):
        """Username band bo'lsa: /signup/ ga qaytariladi, 'Bu user allaqachon mavjud!' xabari, eski parol o'zgarmaydi"""
        r = self.reg(username='ali', password='boshqa1', password_confirm_ui='boshqa1')
        self.assertGoes(r, '/signup/')
        self.assertEqual(self.msgs(r), [('error', 'Bu user allaqachon mavjud!')])
        self.assertEqual(User.objects.filter(username='ali').count(), 1)
        self.assertTrue(User.objects.get(username='ali').check_password('pw-ali'))

    @meta(['M09-signup'])
    def test_mismatch_checked_before_taken(self):
        """Tekshiruv tartibi: avval parollar mosligi, keyin username bandligi"""
        r = self.reg(username='ali', password_confirm_ui='x')
        self.assertEqual(self.msgs(r), [('error', 'Parolllar mos emas!')])

    @meta(['M12-password-validators'], 'MC-validators-assumed', kind='quirk')
    def test_weak_and_empty_username_accepted(self):
        """Parol validatorlari chaqirilmaydi: '1' paroli va bo'sh username qabul qilinadi (B07)"""
        self.assertGoes(self.reg(username='zaif', password='1', password_confirm_ui='1'), '/book-list/')
        self.assertTrue(User.objects.get(username='zaif').check_password('1'))
        self.assertGoes(self.reg(username='', password='abc', password_confirm_ui='abc'), '/book-list/')
        self.assertTrue(User.objects.filter(username='').exists())

    @meta(['M07-none-return'], 'MC-none-return', kind='quirk')
    def test_missing_username_crashes_and_other_methods(self):
        """Boshqa metod -> None -> ValueError; username umuman yuborilmasa NULL saqlanmoqchi bo'lib IntegrityError (B03/B07)"""
        with self.assertRaises(ValueError):
            Client().put('/signup/')
        with self.assertRaises(IntegrityError):
            Client().post('/signup/', {})
