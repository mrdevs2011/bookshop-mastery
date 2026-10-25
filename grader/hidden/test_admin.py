from django.contrib import admin
from django.contrib.auth.models import User

from main.models import Book, BookView

from .base import Base
from .meta import meta


@meta(['M11-admin-register'])
class AdminTests(Base):
    def test_book_registered(self):
        """Book admin saytda ro'yxatdan o'tgan"""
        self.assertIn(Book, admin.site._registry)

    @meta(['M11-createsuperuser'])
    def test_superuser_sees_book_list(self):
        """Superuser /admin/main/book/ ni ocha oladi; oddiy foydalanuvchi — yo'q"""
        root = User.objects.create_superuser('root', 'r@x.uz', 'pw-root')
        self.book(self.ali, name='Admin kitobi')
        self.client.force_login(root)
        r = self.client.get('/admin/main/book/')
        self.assertEqual(r.status_code, 200)
        self.client.force_login(self.ali)
        r2 = self.client.get('/admin/main/book/')
        self.assertEqual(r2.status_code, 302)
        self.assertTrue(r2['Location'].startswith('/admin/login/'))

    @meta(['M11-str'], 'MC-str-missing', kind='quirk')
    def test_admin_shows_object_repr_and_bookview_unregistered(self):
        """Adminda 'Book object (1)' ko'rinadi; BookView adminga ulanmagan (B15)"""
        root = User.objects.create_superuser('root', 'r@x.uz', 'pw-root')
        b = self.book(self.ali)
        self.client.force_login(root)
        self.assertContains(self.client.get('/admin/main/book/'), 'Book object (%d)' % b.pk)
        self.assertNotIn(BookView, admin.site._registry)
