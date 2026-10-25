from .base import Base
from .meta import meta


@meta(['M09-logout'])
class LogoutTests(Base):
    def test_logout_clears_session(self):
        """/logout/ sessiyani tozalaydi va /login/ ga yo'naltiradi; keyin yopiq sahifalar yana yopiladi"""
        c = self.as_(self.ali)
        self.assertEqual(c.get('/book-list/').status_code, 200)
        self.assertGoes(c.get('/logout/'), '/login/')
        self.assertIsNone(c.session.get('_auth_user_id'))
        self.assertGoes(c.get('/book-list/'), '/login/')

    @meta(['M09-logout'])
    def test_anon_logout_is_harmless(self):
        """Kirmagan foydalanuvchi /logout/ ni ochsa ham /login/ ga yo'naltiriladi"""
        self.assertGoes(self.client.get('/logout/'), '/login/')

    @meta(['M12-get-logout'], 'MC-get-logout', kind='quirk')
    def test_logout_works_with_get_and_post(self):
        """/logout/ GET bilan ham ishlaydi (B06): rasm/havola orqali majburan chiqarish mumkin; POST ham"""
        c = self.as_(self.ali)
        c.get('/logout/')
        self.assertIsNone(c.session.get('_auth_user_id'))
        c = self.as_(self.vali)
        self.assertGoes(c.post('/logout/'), '/login/')
        self.assertIsNone(c.session.get('_auth_user_id'))

    @meta(['M09-session'])
    def test_logout_then_login_other_user(self):
        """Chiqqandan keyin boshqa foydalanuvchi sifatida kirsa, sessiya yangi foydalanuvchiga tegishli"""
        c = self.as_(self.ali)
        c.get('/logout/')
        c.post('/login/', {'username': 'vali', 'password': 'pw-vali'})
        self.assertEqual(c.session.get('_auth_user_id'), str(self.vali.pk))
