from django.utils.formats import date_format

from main.models import Book, BookView

from .base import Base
from .meta import meta

NOT_FOUND = 'kitob topilmadi'


@meta(['M10-book-page'])
class BookPageTests(Base):
    def page(self, user, b):
        return self.as_(user).get('/book/%d/' % b.pk)

    @meta(['M09-is-authenticated'], 'MC-forgot-auth-check')
    def test_anon_goes_to_login(self):
        """Kirmagan foydalanuvchi kitob sahifasini ko'ra olmaydi (public bo'lsa ham): /login/"""
        b = self.book(self.ali, public=True)
        self.assertGoes(self.client.get('/book/%d/' % b.pk), '/login/')
        self.assertEqual(BookView.objects.count(), 0)

    @meta(['M10-public-private'])
    def test_public_book_visible_to_any_user(self):
        """Public kitobni istalgan kirgan foydalanuvchi ocha oladi: book.html, nom, muallif, havola, sana"""
        b = self.book(self.ali, 'Ochiq kitob', url='kitob.uz/x', public=True)
        r = self.page(self.vali, b)
        self.assertEqual(r.status_code, 200)
        self.assertTemplateUsed(r, 'book.html')
        self.assertEqual(r.context['book'], b)
        for s in ('Ochiq kitob', 'ali', 'href="https://kitob.uz/x"', date_format(b.yaratilgan_sanasi)):
            self.assertContains(r, s)

    @meta(['M12-idor'], 'MC-owner-check')
    def test_private_book_hidden_from_others(self):
        """Private kitobni boshqa foydalanuvchi ochsa: 200 status va faqat 'kitob topilmadi' matni (404 EMAS), ko'rish yozilmaydi"""
        b = self.book(self.ali, 'Maxfiy', public=False)
        r = self.page(self.vali, b)
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.content.decode(), NOT_FOUND)
        self.assertEqual(BookView.objects.count(), 0)

    @meta(['M10-public-private'], 'MC-owner-check')
    def test_private_book_visible_to_owner(self):
        """Private kitobni egasi ochadi: book.html, ko'rish yoziladi"""
        b = self.book(self.ali, 'Mening', public=False)
        r = self.page(self.ali, b)
        self.assertTemplateUsed(r, 'book.html')
        self.assertContains(r, 'Mening')
        self.assertEqual(BookView.objects.filter(book=b, user=self.ali).count(), 1)

    @meta(['M07-404-vs-text'])
    def test_missing_id_text_not_404(self):
        """Mavjud bo'lmagan id: 200 va 'kitob topilmadi' (Http404 emas)"""
        r = self.as_(self.ali).get('/book/99999/')
        self.assertEqual((r.status_code, r.content.decode()), (200, NOT_FOUND))
        r0 = self.client.get('/book/0/')
        self.assertEqual((r0.status_code, r0.content.decode()), (200, NOT_FOUND))

    @meta(['M10-unique-views', 'M04-get-or-create'], 'MC-count-dup')
    def test_unique_viewers_counted_once(self):
        """Ko'rishlar soni — NOYOB foydalanuvchilar: bir kishi 3 marta ochsa ham 1; boshqa kishi qo'shilsa 2"""
        b = self.book(self.ali, public=True)
        for _ in range(3):
            r = self.page(self.vali, b)
        self.assertEqual(r.context['soni'], 1)
        self.assertEqual(BookView.objects.filter(book=b).count(), 1)
        r = self.page(self.sardor, b)
        self.assertEqual(r.context['soni'], 2)

    @meta(['M10-unique-views'])
    def test_owner_view_counts_and_counts_are_per_book(self):
        """Egasining o'zi ham hisobga kiradi; har kitobning soni alohida"""
        a = self.book(self.ali, 'A', public=True)
        b = self.book(self.ali, 'B', public=True)
        self.assertEqual(self.page(self.ali, a).context['soni'], 1)
        self.page(self.vali, a)
        self.assertEqual(self.page(self.sardor, b).context['soni'], 1)
        self.assertEqual(self.page(self.ali, a).context['soni'], 2)
        self.assertContains(self.page(self.ali, a), '>2<')

    @meta(['M08-dot-lookup'])
    def test_rendered_fields(self):
        """Sahifada kitob id si (#id), sarlavha va 'Ko'rganlar soni' chiqadi"""
        b = self.book(self.ali, 'Sarlavha', public=True)
        r = self.page(self.vali, b)
        self.assertContains(r, '#%d' % b.pk)
        self.assertContains(r, '<title>Sarlavha')
        self.assertContains(r, 'rganlar soni')

    @meta(['M08-autoescape'], 'MC-autoescape')
    def test_name_escaped(self):
        """Kitob nomidagi HTML escape qilinadi"""
        b = self.book(self.ali, '<b>qalin</b>', public=True)
        r = self.page(self.vali, b)
        self.assertNotContains(r, '<b>qalin</b>')
        self.assertContains(r, '&lt;b&gt;qalin&lt;/b&gt;')

    @meta(['M10-url-strip'], 'MC-url-scheme-strip', kind='quirk')
    def test_link_prefix_and_none_url(self):
        """Havola 'https://' + url ko'rinishida yig'iladi; url NULL bo'lsa 'https://None' chiqadi (B13)"""
        b = self.book(self.ali, 'X', url='ftp://x.uz', public=True)
        self.assertContains(self.page(self.vali, b), 'href="https://ftp://x.uz"')
        n = Book.objects.create(name='Y', user=self.ali, url=None, public=True)
        self.assertContains(self.page(self.vali, n), 'href="https://None"')
