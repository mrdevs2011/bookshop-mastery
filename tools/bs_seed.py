"""Sintetik seed (R2: haqiqiy db dan faqat SHAKL olingan — 6 user, 20 kitob, 18 ko'rish; ismlar/parollar to'qilgan).
Tartib QAT'IY (id lar har safar bir xil): gen_scenarios, gen_sql va app (ORM Arena) shu manbadan foydalanadi."""

USERS = [  # (username, is_superuser) — parol: 'pw-<username>'
    ('ali', False), ('vali', False), ('sardor', False), ('dilnoza', False), ('bobur', False), ('admin', True),
]

# (nom, egasi, public)  — url: example.uz/k<N>
BOOKS = [
    ('O‘tkan kunlar', 'ali', True), ('Mehrobdan chayon', 'ali', False),
    ('Sariq devni minib', 'vali', True), ('Ikki eshik orasi', 'vali', False),
    ('Kecha va kunduz', 'sardor', True), ('Navoiy g‘azallari', 'sardor', False),
    ('Alpomish', 'dilnoza', True), ('Boburnoma', 'dilnoza', False),
    ('Qutadg‘u bilig', 'bobur', True), ('Xamsa', 'bobur', False),
    ('Python asoslari', 'ali', True), ('Django qo‘llanma', 'ali', False),
    ('Algoritmlar', 'vali', True), ('Ingliz tili', 'vali', True),
    ('Tarix saboqlari', 'sardor', True), ('Shaxsiy daftar', 'admin', False),
    ('Ochiq kutubxona', 'admin', True), ('Bolalar ertaklari', 'dilnoza', True),
    ('Sirli xotiralar', 'bobur', False), ('Ilm yo‘li', 'ali', True),
]

# (kitob raqami 1..20, ko'ruvchi) — 18 ta; ba'zilari egasining o'z kitobi (view mantig'i egasini ham yozadi)
VIEWS = [
    (1, 'vali'), (1, 'sardor'), (1, 'dilnoza'), (3, 'ali'), (3, 'sardor'), (5, 'ali'),
    (5, 'vali'), (7, 'ali'), (9, 'ali'), (9, 'vali'), (11, 'vali'), (11, 'sardor'),
    (13, 'ali'), (14, 'ali'), (15, 'vali'), (17, 'ali'), (17, 'vali'), (2, 'ali'),
]


def password_of(username):
    return 'pw-' + username


def as_json():
    return {
        'users': [{'username': u, 'superuser': s, 'password': password_of(u)} for u, s in USERS],
        'books': [{'id': i + 1, 'name': n, 'owner': o, 'public': p, 'url': 'example.uz/k%d' % (i + 1)}
                  for i, (n, o, p) in enumerate(BOOKS)],
        'views': [{'book_id': b, 'user': u} for b, u in VIEWS],
    }


def load():
    """Django ichida (setup dan keyin) chaqiriladi: seed ni DB ga yozadi. -> {username: User}"""
    from django.contrib.auth.models import User
    from main.models import Book, BookView
    users = {}
    for u, s in USERS:
        if s:
            users[u] = User.objects.create_superuser(u, password=password_of(u))
        else:
            users[u] = User.objects.create_user(u, password=password_of(u))
    books = []
    for i, (n, o, p) in enumerate(BOOKS):
        books.append(Book.objects.create(name=n, user=users[o], url='example.uz/k%d' % (i + 1), public=p))
    for b, u in VIEWS:
        BookView.objects.create(book=books[b - 1], user=users[u])
    return users


assert len(USERS) == 6 and len(BOOKS) == 20 and len(VIEWS) == 18
