"""Hamma testlar uchun umumiy asos: sintetik foydalanuvchilar (haqiqiy db dan hech narsa olinmagan)."""
from django.contrib.auth.models import User
from django.contrib.messages import get_messages
from django.test import TestCase, TransactionTestCase, override_settings

from main.models import Book, BookView

FAST = override_settings(PASSWORD_HASHERS=['django.contrib.auth.hashers.MD5PasswordHasher'])


class Mixin:
    def book(self, owner, name='Kitob', url='example.com/k', public=False):
        return Book.objects.create(name=name, user=owner, url=url, public=public)

    def as_(self, user):
        self.client.force_login(user)
        return self.client

    def assertGoes(self, resp, where, status=302):
        self.assertEqual(resp.status_code, status, 'status %s kutilgan edi %s' % (resp.status_code, status))
        self.assertEqual(resp['Location'], where, "yo'naltirish %r kutilgan edi %r" % (resp['Location'], where))

    def msgs(self, resp):
        return [(m.level_tag, str(m)) for m in get_messages(resp.wsgi_request)]

    def session_uid(self):
        return self.client.session.get('_auth_user_id')


@FAST
class Base(Mixin, TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.ali = User.objects.create_user('ali', password='pw-ali')
        cls.vali = User.objects.create_user('vali', password='pw-vali')
        cls.sardor = User.objects.create_user('sardor', password='pw-sardor')


@FAST
class TxBase(Mixin, TransactionTestCase):
    def setUp(self):
        self.ali = User.objects.create_user('ali', password='pw-ali')
        self.vali = User.objects.create_user('vali', password='pw-vali')
