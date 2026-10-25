/* M02 savollar — kengaytirilgan */
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
 },
 {
  "id": "M02-QX3E4D29F8",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "startproject vs startapp qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M02",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M02"
  ]
 },
 {
  "id": "M02-QX9337F2A1",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "startproject vs startapp bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M02-startproject"
  ]
 },
 {
  "id": "M02-QX327D13F2",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "startproject vs startapp bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QX35E6C00A",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "startproject vs startapp oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QX9E0B5B09",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "startproject vs startapp: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QXF393BD37",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "manage.py buyruqlari uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "manage.py buyruqlari",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "manage.py buyruqlari"
  ]
 },
 {
  "id": "M02-QX1F75C32C",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "manage.py buyruqlari: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "manage",
   "manage.py buyruqlari"
  ]
 },
 {
  "id": "M02-QX243333CC",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "manage.py buyruqlari bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QX9708E468",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "manage.py buyruqlari oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QX7B824902",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "manage.py buyruqlari: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX94E731C5",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — settings anatomiyasi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-settings"
  ],
  "explanation_uz": "settings anatomiyasi — M02-settings",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M02-settings",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-settings"
  ]
 },
 {
  "id": "M02-QX11406B05",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "settings anatomiyasi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-settings"
  ],
  "explanation_uz": "settings anatomiyasi — M02-settings",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M02-settings"
  ]
 },
 {
  "id": "M02-QX1DD4A05A",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "settings anatomiyasi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-settings"
  ],
  "explanation_uz": "settings anatomiyasi — M02-settings",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QX6268B793",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "settings anatomiyasi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-settings"
  ],
  "explanation_uz": "settings anatomiyasi — M02-settings",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QXD5D0B4F5",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "settings anatomiyasi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-settings"
  ],
  "explanation_uz": "settings anatomiyasi — M02-settings",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX88FFBC91",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "INSTALLED_APPS qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-installed-apps"
  ],
  "explanation_uz": "INSTALLED_APPS — M02-installed-apps",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M02",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M02"
  ]
 },
 {
  "id": "M02-QXD06DAC83",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "INSTALLED_APPS: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-installed-apps"
  ],
  "explanation_uz": "INSTALLED_APPS — M02-installed-apps",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "apps",
   "INSTALLED_APPS"
  ]
 },
 {
  "id": "M02-QX618136BF",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "INSTALLED_APPS bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-installed-apps"
  ],
  "explanation_uz": "INSTALLED_APPS — M02-installed-apps",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QXA2CF3929",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "INSTALLED_APPS oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-installed-apps"
  ],
  "explanation_uz": "INSTALLED_APPS — M02-installed-apps",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QX8B096655",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "INSTALLED_APPS: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-installed-apps"
  ],
  "explanation_uz": "INSTALLED_APPS — M02-installed-apps",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX9B3BB033",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "MIDDLEWARE tartibi uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-middleware"
  ],
  "explanation_uz": "MIDDLEWARE tartibi — M02-middleware",
  "source_ref": "",
  "distractors": [],
  "options": [
   "MIDDLEWARE tartibi",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "MIDDLEWARE tartibi"
  ]
 },
 {
  "id": "M02-QX655FDD8F",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "MIDDLEWARE tartibi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-middleware"
  ],
  "explanation_uz": "MIDDLEWARE tartibi — M02-middleware",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M02-middleware"
  ]
 },
 {
  "id": "M02-QX2B293044",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "MIDDLEWARE tartibi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-middleware"
  ],
  "explanation_uz": "MIDDLEWARE tartibi — M02-middleware",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QXC48229BD",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "MIDDLEWARE tartibi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-middleware"
  ],
  "explanation_uz": "MIDDLEWARE tartibi — M02-middleware",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QXD3BAACA0",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "MIDDLEWARE tartibi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-middleware"
  ],
  "explanation_uz": "MIDDLEWARE tartibi — M02-middleware",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX66C71422",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — So'rov hayot sikli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-request-cycle"
  ],
  "explanation_uz": "So'rov hayot sikli — M02-request-cycle",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M02-request-cycle",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-request-cycle"
  ]
 },
 {
  "id": "M02-QX8B15E5B0",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "So'rov hayot sikli: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-request-cycle"
  ],
  "explanation_uz": "So'rov hayot sikli — M02-request-cycle",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "cycle",
   "So'rov hayot sikli"
  ]
 },
 {
  "id": "M02-QXCC646491",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "So'rov hayot sikli bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-request-cycle"
  ],
  "explanation_uz": "So'rov hayot sikli — M02-request-cycle",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QXE887E582",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "So'rov hayot sikli oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-request-cycle"
  ],
  "explanation_uz": "So'rov hayot sikli — M02-request-cycle",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QX88D194F4",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "So'rov hayot sikli: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-request-cycle"
  ],
  "explanation_uz": "So'rov hayot sikli — M02-request-cycle",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX7333B592",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "WSGI/ASGI qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-wsgi"
  ],
  "explanation_uz": "WSGI/ASGI — M02-wsgi",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M02",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M02"
  ]
 },
 {
  "id": "M02-QX5167B1F5",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "WSGI/ASGI bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-wsgi"
  ],
  "explanation_uz": "WSGI/ASGI — M02-wsgi",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M02-wsgi"
  ]
 },
 {
  "id": "M02-QXF73E15AA",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "WSGI/ASGI bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-wsgi"
  ],
  "explanation_uz": "WSGI/ASGI — M02-wsgi",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QXCB52710E",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "WSGI/ASGI oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-wsgi"
  ],
  "explanation_uz": "WSGI/ASGI — M02-wsgi",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QXEA4A9724",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "WSGI/ASGI: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-wsgi"
  ],
  "explanation_uz": "WSGI/ASGI — M02-wsgi",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX3F159F31",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "STATICFILES_DIRS uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-staticfiles"
  ],
  "explanation_uz": "STATICFILES_DIRS — M02-staticfiles",
  "source_ref": "",
  "distractors": [],
  "options": [
   "STATICFILES_DIRS",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "STATICFILES_DIRS"
  ]
 },
 {
  "id": "M02-QX1038558A",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "STATICFILES_DIRS: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-staticfiles"
  ],
  "explanation_uz": "STATICFILES_DIRS — M02-staticfiles",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "staticfiles",
   "STATICFILES_DIRS"
  ]
 },
 {
  "id": "M02-QX2C741178",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "STATICFILES_DIRS bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-staticfiles"
  ],
  "explanation_uz": "STATICFILES_DIRS — M02-staticfiles",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QXBFC84960",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "STATICFILES_DIRS oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-staticfiles"
  ],
  "explanation_uz": "STATICFILES_DIRS — M02-staticfiles",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QX8D38E0DC",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "STATICFILES_DIRS: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-staticfiles"
  ],
  "explanation_uz": "STATICFILES_DIRS — M02-staticfiles",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QXBD120990",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — startproject vs startapp?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M02-startproject",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-startproject"
  ]
 },
 {
  "id": "M02-QX97DB2704",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "startproject vs startapp bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M02-startproject"
  ]
 },
 {
  "id": "M02-QX69E5DD19",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "startproject vs startapp bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QX6B7DDF35",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "startproject vs startapp oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QX6551FFAF",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "startproject vs startapp: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-startproject"
  ],
  "explanation_uz": "startproject vs startapp — M02-startproject",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX90EDCA9A",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "manage.py buyruqlari qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M02",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M02"
  ]
 },
 {
  "id": "M02-QXB4D91BA1",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "manage.py buyruqlari: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "manage",
   "manage.py buyruqlari"
  ]
 },
 {
  "id": "M02-QX2AC2E83F",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "manage.py buyruqlari bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Noto'g'ri import",
   "CSRF yo'q",
   "N+1",
   "To'g'ri kod"
  ],
  "accepted": [
   "Noto'g'ri import"
  ]
 },
 {
  "id": "M02-QX19465D50",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "manage.py buyruqlari oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ],
  "accepted": [
   "1-aniqlash",
   "2-qo'llash",
   "3-tekshirish",
   "4-takror"
  ]
 },
 {
  "id": "M02-QX30A61963",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "manage.py buyruqlari: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-manage"
  ],
  "explanation_uz": "manage.py buyruqlari — M02-manage",
  "source_ref": "",
  "distractors": [],
  "options": [
   "URL",
   "View",
   "Model",
   "Template"
  ],
  "accepted": [
   "View"
  ]
 },
 {
  "id": "M02-QX8C61B9E4",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "settings anatomiyasi uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-settings"
  ],
  "explanation_uz": "settings anatomiyasi — M02-settings",
  "source_ref": "",
  "distractors": [],
  "options": [
   "settings anatomiyasi",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "settings anatomiyasi"
  ]
 },
 {
  "id": "M02-QX3296676B",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "settings anatomiyasi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M02-settings"
  ],
  "explanation_uz": "settings anatomiyasi — M02-settings",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M02-settings"
  ]
 }
];
