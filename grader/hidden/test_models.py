import datetime

from django.contrib.auth.models import User
from django.core.management import call_command
from django.db import IntegrityError, models, transaction
from django.db.migrations.loader import MigrationLoader

from main.models import Book, BookView

from .base import Base
from .meta import meta


@meta(['M03-fields'])
class ModelTests(Base):
    def test_book_fields(self):
        """Book modelida name(CharField, max_length=255), yaratilgan_sanasi(DateField, auto_now_add), user(FK), url, public maydonlari bor"""
        f = {x.name: x for x in Book._meta.get_fields() if getattr(x, 'concrete', False)}
        self.assertTrue({'name', 'yaratilgan_sanasi', 'user', 'url', 'public'} <= set(f), 'maydonlar: %s' % sorted(f))
        self.assertIsInstance(f['name'], models.CharField)
        self.assertEqual(f['name'].max_length, 255)
        self.assertIsInstance(f['yaratilgan_sanasi'], models.DateField)
        self.assertTrue(f['yaratilgan_sanasi'].auto_now_add)
        self.assertIsInstance(f['user'], models.ForeignKey)
        self.assertIs(f['user'].remote_field.model, User)
        self.assertIsInstance(f['url'], models.CharField)
        self.assertIsInstance(f['public'], models.BooleanField)

    @meta(['M03-null-blank'], 'MC-null-blank')
    def test_url_nullable_name_required(self):
        """url bo'sh (NULL) bo'lishi mumkin, name esa majburiy (NULL bo'lmaydi)"""
        b = Book.objects.create(name='A', user=self.ali, url=None)
        b.refresh_from_db()
        self.assertIsNone(b.url)
        with self.assertRaises(IntegrityError), transaction.atomic():
            Book.objects.create(name=None, user=self.ali)

    @meta(['M03-default'])
    def test_defaults(self):
        """public standart False; yaratilgan_sanasi bugungi sana bo'lib o'zi qo'yiladi"""
        b = Book.objects.create(name='A', user=self.ali)
        b.refresh_from_db()
        self.assertIs(b.public, False)
        self.assertEqual(b.yaratilgan_sanasi, datetime.date.today())

    @meta(['M03-fk-cascade'], 'MC-cascade')
    def test_cascade_user_deletes_books_and_views(self):
        """Foydalanuvchi o'chsa, uning kitoblari va ko'rishlari ham o'chadi (CASCADE)"""
        b = self.book(self.ali, public=True)
        BookView.objects.create(book=b, user=self.vali)
        self.ali.delete()
        self.assertEqual(Book.objects.count(), 0)
        self.assertEqual(BookView.objects.count(), 0)

    @meta(['M03-fk-cascade'], 'MC-cascade')
    def test_cascade_book_deletes_views_only(self):
        """Kitob o'chsa ko'rishlari o'chadi; ko'rish o'chsa kitob va foydalanuvchi qoladi"""
        b = self.book(self.ali, public=True)
        v = BookView.objects.create(book=b, user=self.vali)
        v.delete()
        self.assertTrue(Book.objects.filter(pk=b.pk).exists())
        self.assertTrue(User.objects.filter(pk=self.vali.pk).exists())
        BookView.objects.create(book=b, user=self.vali)
        b.delete()
        self.assertEqual(BookView.objects.count(), 0)

    @meta(['M03-bookview'])
    def test_bookview_fields(self):
        """BookView modelida book va user — ikkalasi ham ForeignKey"""
        f = {x.name: x for x in BookView._meta.get_fields() if getattr(x, 'concrete', False)}
        self.assertIs(f['book'].remote_field.model, Book)
        self.assertIs(f['user'].remote_field.model, User)

    @meta(['M03-reverse-manager'])
    def test_reverse_managers(self):
        """Teskari menejerlar ishlaydi: user.book_set va book.bookview_set"""
        b = self.book(self.ali, public=True)
        BookView.objects.create(book=b, user=self.vali)
        BookView.objects.create(book=b, user=self.sardor)
        self.assertEqual(self.ali.book_set.count(), 1)
        self.assertEqual(b.bookview_set.count(), 2)
        self.assertEqual(self.vali.bookview_set.count(), 1)

    @meta(['M05-makemigrations'], 'MC-forgot-migrate')
    def test_no_pending_migrations(self):
        """Modellar bilan migratsiyalar mos: `makemigrations --check` o'zgarish topmaydi"""
        try:
            call_command('makemigrations', '--check', '--dry-run', verbosity=0)
        except SystemExit:
            self.fail('modelda o\'zgarish bor, lekin migratsiya yaratilmagan')

    @meta(['M05-migration-graph'])
    def test_migration_graph_has_no_conflicts(self):
        """Migratsiyalar grafi to'qnashuvsiz (bitta oxirgi migratsiya)"""
        loader = MigrationLoader(None, ignore_no_migrations=True)
        self.assertEqual(loader.detect_conflicts(), {})

    @meta(['M03-str'], 'MC-str-missing', kind='quirk')
    def test_str_default(self):
        """Book uchun __str__ yo'q: str(book) 'Book object (1)' ko'rinishida (B15)"""
        b = self.book(self.ali)
        self.assertEqual(str(b), 'Book object (%d)' % b.pk)
