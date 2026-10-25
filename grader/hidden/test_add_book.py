import datetime

from django.test import override_settings

from main.models import Book

from .base import Base, TxBase
from .meta import meta


@meta(['M10-add-book'])
class AddBookTests(Base):
    def post(self, **data):
        return self.as_(self.ali).post('/add-book/', data)

    @meta(['M09-is-authenticated'], 'MC-forgot-auth-check')
    def test_anon_goes_to_login(self):
        """Kirmagan foydalanuvchi GET ham, POST ham qila olmaydi: /login/; kitob yaratilmaydi"""
        self.assertGoes(self.client.get('/add-book/'), '/login/')
        self.assertGoes(self.client.post('/add-book/', {'name': 'X', 'url': 'x.uz'}), '/login/')
        self.assertEqual(Book.objects.count(), 0)

    @meta(['M07-method-branch'])
    def test_get_shows_form(self):
        """GET: forma sahifasi (add_book.html) ko'rsatiladi"""
        r = self.as_(self.ali).get('/add-book/')
        self.assertEqual(r.status_code, 200)
        self.assertTemplateUsed(r, 'add_book.html')

    @meta(['M07-redirect'], 'MC-wrong-redirect-path')
    def test_post_creates_and_redirects(self):
        """To'g'ri POST: kitob joriy foydalanuvchiga yaratiladi va /book-list/ ga yo'naltiriladi"""
        r = self.post(name='Mehrobdan chayon', url='example.com/m')
        self.assertGoes(r, '/book-list/')
        b = Book.objects.get()
        self.assertEqual((b.name, b.user_id, b.url, b.public), ('Mehrobdan chayon', self.ali.pk, 'example.com/m', False))
        self.assertEqual(b.yaratilgan_sanasi, datetime.date.today())

    @meta(['M10-url-strip'], 'MC-url-scheme-strip')
    def test_https_prefix_stripped(self):
        """https:// kesib tashlanadi (url[8:]), http:// ham (url[7:])"""
        self.post(name='A', url='https://site.uz/a')
        self.post(name='B', url='http://site.uz/b')
        self.assertEqual(Book.objects.get(name='A').url, 'site.uz/a')
        self.assertEqual(Book.objects.get(name='B').url, 'site.uz/b')

    @meta(['M10-url-strip'], 'MC-url-scheme-strip')
    def test_other_urls_untouched(self):
        """Sxemasiz, ftp://, HTTPS:// (katta harf), https:/ (bitta slesh) — o'zgarmaydi; bo'sh url bo'sh qoladi"""
        cases = {'C1': 'site.uz', 'C2': 'ftp://x.uz', 'C3': 'HTTPS://X.UZ', 'C4': 'https:/x.uz', 'C5': '', 'C6': 'xhttps://x'}
        for n, u in cases.items():
            self.post(name=n, url=u)
        for n, u in cases.items():
            self.assertEqual(Book.objects.get(name=n).url, u, n)

    @meta(['M10-url-strip'])
    def test_only_leading_scheme_removed(self):
        """Faqat boshidagi sxema olinadi: 'https://a.uz/?r=https://b.uz' -> 'a.uz/?r=https://b.uz'"""
        self.post(name='D', url='https://a.uz/?r=https://b.uz')
        self.assertEqual(Book.objects.get().url, 'a.uz/?r=https://b.uz')

    @meta(['M10-public-private'], 'MC-checkbox-on')
    def test_public_only_when_on(self):
        """public faqat checkbox 'on' kelganda True; yo'q/true/1/off/ON — False"""
        self.post(name='P1', url='a.uz', public='on')
        self.assertIs(Book.objects.get(name='P1').public, True)
        for i, v in enumerate(('true', '1', 'off', 'ON', 'yes', '')):
            self.post(name='N%d' % i, url='a.uz', public=v)
            self.assertIs(Book.objects.get(name='N%d' % i).public, False, v)
        self.post(name='NoField', url='a.uz')
        self.assertIs(Book.objects.get(name='NoField').public, False)

    @meta(['M10-add-book'])
    def test_owner_is_logged_in_user_and_duplicates_allowed(self):
        """Egasi — so'rov yuborgan foydalanuvchi; bir xil nomli kitoblar ruxsat"""
        self.as_(self.vali).post('/add-book/', {'name': 'Bir', 'url': 'a.uz'})
        self.as_(self.vali).post('/add-book/', {'name': 'Bir', 'url': 'a.uz'})
        self.assertEqual(Book.objects.filter(user=self.vali, name='Bir').count(), 2)
        self.assertEqual(Book.objects.filter(user=self.ali).count(), 0)

    @meta(['M07-http-status'])
    def test_other_method_text_response(self):
        """GET va POST dan boshqa metod: 200 va 'hozircha ishlamayapti' matni"""
        r = self.as_(self.ali).put('/add-book/')
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.content.decode(), 'hozircha ishlamayapti')

    @meta(['M07-none-return'], 'MC-missing-else', kind='quirk')
    def test_post_without_url_crashes(self):
        """POST da url maydoni umuman yo'q bo'lsa None.startswith -> AttributeError (B04)"""
        c = self.as_(self.ali)
        with self.assertRaises(AttributeError):
            c.post('/add-book/', {'name': 'X'})
        self.assertEqual(Book.objects.count(), 0)


@meta(['M00-try-except', 'M10-add-book'], 'MC-except-swallows', kind='quirk')
class AddBookErrorPathTests(TxBase):
    def test_save_error_goes_to_error_page(self):
        """Saqlashda xato (masalan name yo'q -> NULL) try/except ga tushadi va /error/ ga yo'naltiriladi; xato yutiladi (B04)"""
        self.client.force_login(self.ali)
        r = self.client.post('/add-book/', {'url': 'a.uz'})
        self.assertEqual((r.status_code, r['Location']), (302, '/error/'))
        self.assertEqual(Book.objects.count(), 0)
