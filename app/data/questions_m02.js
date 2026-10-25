/* questions M02 — P3 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m02 = [
 {
  "id": "M02-Q01",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "startproject core . nima qiladi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Joriy papkada core loyiha",
   "core papka ichida",
   "app yaratadi",
   "migrate"
  ],
  "accepted": [
   "Joriy papkada core loyiha"
  ]
 },
 {
  "id": "M02-Q02",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "CsrfViewMiddleware bormi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "core/settings.py",
  "distractors": [
   {
    "text": "Ha",
    "misconception": "MC-csrf-optional",
    "why_tempting": "default",
    "why_wrong": "olib tashlangan"
   }
  ],
  "options": [
   "Yo'q",
   "Ha",
   "Faqat DEBUG",
   "Faqat admin"
  ],
  "accepted": [
   "Yo'q"
  ]
 },
 {
  "id": "M02-Q03",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "DEBUG=True xavfi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Traceback oshkor",
   "Sekin",
   "Migratsiya buziladi",
   "Static yo'q"
  ],
  "accepted": [
   "Traceback oshkor"
  ]
 },
 {
  "id": "M02-Q04",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book qaysi app?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "main",
   "core",
   "books",
   "auth"
  ],
  "accepted": [
   "main"
  ]
 },
 {
  "id": "M02-Q05",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "So'rov tartibi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "WSGI → middleware → urls → view → template → response",
   "urls → view → middleware",
   "view → urls → response",
   "template → view"
  ],
  "accepted": [
   "WSGI → middleware → urls → view → template → response"
  ]
 },
 {
  "id": "M02-Q11",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "startapp main nima yaratadi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ilova papkasi (models, views, ...)",
   "Loyiha sozlamalari",
   "faqat urls",
   "db.sqlite3"
  ],
  "accepted": [
   "Ilova papkasi (models, views, ...)"
  ]
 },
 {
  "id": "M02-Q12",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "python manage.py migrate nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Migratsiyalarni DB ga qo'llaydi",
   "Migratsiya fayli yozadi",
   "Test yuritadi",
   "Static yig'adi"
  ],
  "accepted": [
   "Migratsiyalarni DB ga qo'llaydi"
  ]
 },
 {
  "id": "M02-Q13",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "makemigrations nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "models o'zgarishidan migratsiya fayli",
   "DB ni o'zgartiradi",
   "Server ishga tushadi",
   "Superuser"
  ],
  "accepted": [
   "models o'zgarishidan migratsiya fayli"
  ]
 },
 {
  "id": "M02-Q14",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "INSTALLED_APPS ga nima qo'shiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ilova nomi (main)",
   "Har bir model",
   "Har bir view",
   "Template yo'li"
  ],
  "accepted": [
   "Ilova nomi (main)"
  ]
 },
 {
  "id": "M02-Q15",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "MIDDLEWARE tartibi muhimmi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha, ketma-ket ishlaydi",
   "Yo'q",
   "Faqat CSRF uchun",
   "Faqat DEBUG da"
  ],
  "accepted": [
   "Ha, ketma-ket ishlaydi"
  ]
 },
 {
  "id": "M02-Q16",
  "concepts": [
   "M02-middleware",
   "M12-csrf"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "CSRF ni yoqish uchun MIDDLEWARE ga nima qo'shiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "B05 tuzatishi.",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "django.middleware.csrf.CsrfViewMiddleware",
   "'django.middleware.csrf.CsrfViewMiddleware'"
  ]
 },
 {
  "id": "M02-Q17",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "URL moslash qachon?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Middleware dan keyin, view dan oldin",
   "View dan keyin",
   "Template dan keyin",
   "Birinchi"
  ],
  "accepted": [
   "Middleware dan keyin, view dan oldin"
  ]
 },
 {
  "id": "M02-Q18",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "ALLOWED_HOSTS=['*'] xavfi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "B20.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Har qanday Host qabul",
   "Sekin",
   "Static buziladi",
   "Migratsiya xato"
  ],
  "accepted": [
   "Har qanday Host qabul"
  ]
 },
 {
  "id": "M02-Q20",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "manage.py check mavjud buyruqmi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ]
 },
 {
  "id": "M02-Q21",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "manage.py showmigrations mavjud buyruqmi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ]
 },
 {
  "id": "M02-Q22",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "manage.py makemigrations mavjud buyruqmi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ]
 },
 {
  "id": "M02-Q23",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "manage.py migrate mavjud buyruqmi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ]
 },
 {
  "id": "M02-Q24",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "manage.py shell mavjud buyruqmi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ]
 },
 {
  "id": "M02-Q30",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "wsgi.py vazifasi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "WSGI server kirish nuqtasi",
   "Template",
   "Migratsiya",
   "Test"
  ],
  "accepted": [
   "WSGI server kirish nuqtasi"
  ]
 },
 {
  "id": "M02-Q31",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "STATICFILES_DIRS nima?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Qo'shimcha static papkalar",
   "Faqat MEDIA",
   "Faqat admin CSS",
   "DB yo'li"
  ],
  "accepted": [
   "Qo'shimcha static papkalar"
  ]
 }
];
