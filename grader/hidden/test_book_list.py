from main.models import Book, BookView

from .base import Base
from .meta import meta


@meta(['M07-views'])
class BookListTests(Base):
    def names(self, resp):
        return [b.name for b in resp.context['books']]

    @meta(['M09-is-authenticated'], 'MC-forgot-auth-check')
    def test_anon_goes_to_login(self):
        """Kirmagan foydalanuvchi /book-list/ ni ocholmaydi: /login/ ga yo'naltiriladi"""
        self.assertGoes(self.client.get('/book-list/'), '/login/')
        self.assertGoes(self.client.get('/book-list/?public=true'), '/login/')

    @meta(['M07-views'])
    def test_anon_post_also_goes_to_login(self):
        """Kirmagan foydalanuvchining POST so'rovi ham /login/ ga yo'naltiriladi (avval kirish tekshiriladi)"""
        self.assertGoes(self.client.post('/book-list/'), '/login/')

    @meta(['M04-order-by', 'M04-filter'], 'MC-sort-order')
    def test_own_books_newest_first(self):
        """O'z kitoblari ro'yxati: faqat o'zinikilar, eng yangisi (katta id) tepada"""
        self.book(self.ali, 'A1')
        self.book(self.vali, 'V1')
        self.book(self.ali, 'A2')
        self.book(self.ali, 'A3', public=True)
        r = self.as_(self.ali).get('/book-list/')
        self.assertEqual(r.status_code, 200)
        self.assertTemplateUsed(r, 'books-list.html')
        self.assertEqual(self.names(r), ['A3', 'A2', 'A1'])

    @meta(['M10-public-private'], 'MC-owner-check')
    def test_others_private_never_listed(self):
        """Boshqalarning private kitoblari hech qachon ro'yxatda ko'rinmaydi"""
        self.book(self.vali, 'Yashirin')
        self.book(self.vali, 'Ochiq', public=True)
        r = self.as_(self.ali).get('/book-list/')
        self.assertEqual(self.names(r), [])
        self.assertNotContains(r, 'Yashirin')
        self.assertNotContains(r, 'Ochiq')

    @meta(['M10-public-private'], 'MC-public-ignored')
    def test_public_tab_all_public_books(self):
        """?public=true: BARCHA public kitoblar (o'zinikilar ham), private'lar yo'q, yangisi tepada"""
        self.book(self.ali, 'A-private')
        self.book(self.vali, 'V-public', public=True)
        self.book(self.ali, 'A-public', public=True)
        self.book(self.vali, 'V-private')
        self.book(self.sardor, 'S-public', public=True)
        r = self.as_(self.ali).get('/book-list/?public=true')
        self.assertEqual(self.names(r), ['S-public', 'A-public', 'V-public'])
        self.assertIs(r.context['is_public'], True)

    @meta(['M01-query-string'], 'MC-query-value')
    def test_public_param_only_exact_true(self):
        """Faqat aynan ?public=true ommaviy ro'yxatni beradi; 'True', '1', 'yes', 'false', bo'sh — o'z kitoblari"""
        self.book(self.ali, 'Mening')
        self.book(self.vali, 'Boshqa', public=True)
        c = self.as_(self.ali)
        for v in ('True', '1', 'yes', 'false', '', 'TRUE'):
            r = c.get('/book-list/', {'public': v})
            self.assertEqual(self.names(r), ['Mening'], 'public=%r' % v)
            self.assertIs(r.context['is_public'], False)
        self.assertEqual(self.names(c.get('/book-list/?other=1')), ['Mening'])

    @meta(['M08-for-loop', 'M08-dot-lookup'])
    def test_page_shows_header_cards_and_count(self):
        """Sahifada foydalanuvchi nomi, har kitobga /book/<id>/ havolasi, kitob nomi, muallif, 'N ta' soni va ko'rishlar soni chiqadi"""
        b = self.book(self.ali, 'Alpomish', public=True)
        self.book(self.ali, 'Ikkinchi')
        from main.models import BookView
        BookView.objects.create(book=b, user=self.vali)
        BookView.objects.create(book=b, user=self.sardor)
        r = self.as_(self.ali).get('/book-list/')
        self.assertContains(r, 'Alpomish')
        self.assertContains(r, 'href="/book/%d/"' % b.pk)
        self.assertContains(r, '• 2 ta')
        self.assertContains(r, '👁 2')
        self.assertContains(r, 'ali')
        self.assertContains(r, 'href="/add-book/"')
        self.assertContains(r, 'href="/logout/"')

    @meta(['M08-autoescape'], 'MC-autoescape')
    def test_names_are_escaped(self):
        """Kitob nomidagi HTML belgilari avtomatik escape qilinadi (XSS yo'q)"""
        self.book(self.ali, '<script>alert(1)</script>')
        r = self.as_(self.ali).get('/book-list/')
        self.assertNotContains(r, '<script>alert(1)</script>')
        self.assertContains(r, '&lt;script&gt;alert(1)&lt;/script&gt;')

    @meta(['M07-views'])
    def test_empty_list(self):
        """Kitobi yo'q foydalanuvchi uchun sahifa 200 va '0 ta'"""
        r = self.as_(self.ali).get('/book-list/')
        self.assertEqual(r.status_code, 200)
        self.assertContains(r, '• 0 ta')

    @meta(['M07-none-return'], 'MC-none-return', kind='quirk')
    def test_non_get_methods_return_none_and_crash(self):
        """GET dan boshqa metodda view hech narsa qaytarmaydi (None) -> ValueError (B02)"""
        c = self.as_(self.ali)
        for m in ('post', 'put', 'delete', 'head'):
            with self.assertRaises(ValueError, msg=m):
                getattr(c, m)('/book-list/')
