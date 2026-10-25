/* M11 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m11 = [
 {
  "id": "M11-Q01",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Modelni adminga ulash?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "admin.site.register(Book)",
   "register(Book)",
   "Book.admin = True",
   "urls.py"
  ],
  "accepted": [
   "admin.site.register(Book)"
  ]
 },
 {
  "id": "M11-Q02",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Superuser yaratish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "python manage.py createsuperuser",
   "migrate",
   "startapp",
   "shell"
  ],
  "accepted": [
   "python manage.py createsuperuser"
  ]
 },
 {
  "id": "M11-Q03",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "__str__ yo'q — admin ro'yxat?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B15.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Book object (1)",
   "name",
   "(bo'sh)",
   "id"
  ],
  "accepted": [
   "Book object (1)"
  ]
 },
 {
  "id": "M11-Q04",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "ModelAdmin nima uchun?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Admin ro'yxat/filter/sozlama",
   "Faqat CSS",
   "Migratsiya",
   "Test"
  ],
  "accepted": [
   "Admin ro'yxat/filter/sozlama"
  ]
 },
 {
  "id": "M11-Q05",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "BookView adminga ulanganmi (haqiqiy)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B15.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Yo'q",
   "Ha",
   "Faqat DEBUG",
   "Faqat superuser"
  ],
  "accepted": [
   "Yo'q"
  ]
 },
 {
  "id": "M11-QXDC9CD15B",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "admin.register qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M11"
  ]
 },
 {
  "id": "M11-QX21C03146",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "admin.register bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M11-register"
  ]
 },
 {
  "id": "M11-QX216E91A9",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "admin.register bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QX12041A18",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "admin.register oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QX1DF2A14E",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "admin.register: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QXC3F55882",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "ModelAdmin uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ModelAdmin",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "ModelAdmin"
  ]
 },
 {
  "id": "M11-QX90340549",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "ModelAdmin: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "modeladmin",
   "ModelAdmin"
  ]
 },
 {
  "id": "M11-QX7D7AFE03",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "ModelAdmin bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QX801A51E0",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "ModelAdmin oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QX0D7FB25B",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "ModelAdmin: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QX9DF75A41",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — createsuperuser?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11-createsuperuser",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-createsuperuser"
  ]
 },
 {
  "id": "M11-QX07CD520B",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "createsuperuser bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M11-createsuperuser"
  ]
 },
 {
  "id": "M11-QX9C2BC912",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "createsuperuser bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QXE5F84DF8",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "createsuperuser oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QXA55CA1BE",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "createsuperuser: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QX04A760A6",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "__str__ ta'siri qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M11"
  ]
 },
 {
  "id": "M11-QX379367BD",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "__str__ ta'siri: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "effect",
   "__str__ ta'siri"
  ]
 },
 {
  "id": "M11-QXBDBF631D",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "__str__ ta'siri bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QX7E5A9C7C",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "__str__ ta'siri oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QX510ADF09",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "__str__ ta'siri: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QXA680B0E3",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "admin.register uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "options": [
   "admin.register",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "admin.register"
  ]
 },
 {
  "id": "M11-QX533FA4DE",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "admin.register bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M11-register"
  ]
 },
 {
  "id": "M11-QXEF88E38D",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "admin.register bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QX4CDE76CC",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "admin.register oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QXB5F5CD1E",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "admin.register: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QXCA208141",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — ModelAdmin?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11-modeladmin",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-modeladmin"
  ]
 },
 {
  "id": "M11-QXBC242895",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "ModelAdmin: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "modeladmin",
   "ModelAdmin"
  ]
 },
 {
  "id": "M11-QXEB3618F8",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "ModelAdmin bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QXFFE6A857",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "ModelAdmin oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QX0EFE7CE2",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "ModelAdmin: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QX4EE5D4E6",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "createsuperuser qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M11"
  ]
 },
 {
  "id": "M11-QX080823EF",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "createsuperuser bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M11-createsuperuser"
  ]
 },
 {
  "id": "M11-QX9BB486A0",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "createsuperuser bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QXEFE864D2",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "createsuperuser oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QX1808E323",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "createsuperuser: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QX5BE5FE8F",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "__str__ ta'siri uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
  "source_ref": "",
  "distractors": [],
  "options": [
   "__str__ ta'siri",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "__str__ ta'siri"
  ]
 },
 {
  "id": "M11-QX91C8C102",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "__str__ ta'siri: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "effect",
   "__str__ ta'siri"
  ]
 },
 {
  "id": "M11-QX98ECD741",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "__str__ ta'siri bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QXA8323441",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "__str__ ta'siri oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QXFAB684D1",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "__str__ ta'siri: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QX3CB70F41",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — admin.register?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11-register",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-register"
  ]
 },
 {
  "id": "M11-QXAC17A7BB",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "admin.register bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M11-register"
  ]
 },
 {
  "id": "M11-QX3BB0E7A7",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "admin.register bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QX1DF26DF9",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "admin.register oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QXD577CFCA",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "admin.register: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QX056E6250",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "ModelAdmin qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M11"
  ]
 },
 {
  "id": "M11-QX92B8D532",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "ModelAdmin: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "modeladmin",
   "ModelAdmin"
  ]
 },
 {
  "id": "M11-QX6643EF3D",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "ModelAdmin bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QXB2452714",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "ModelAdmin oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QXF86E8465",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "ModelAdmin: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
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
  "id": "M11-QX6C90CE29",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "createsuperuser uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
  "source_ref": "",
  "distractors": [],
  "options": [
   "createsuperuser",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "createsuperuser"
  ]
 },
 {
  "id": "M11-QX1001E750",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "createsuperuser bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M11-createsuperuser"
  ]
 },
 {
  "id": "M11-QXF1D81D0D",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "createsuperuser bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QX74ABFA9C",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "createsuperuser oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QXB00EED9F",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "createsuperuser: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-createsuperuser"
  ],
  "explanation_uz": "createsuperuser — M11-createsuperuser",
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
  "id": "M11-QXC1D1565C",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — __str__ ta'siri?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11-str-effect",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-str-effect"
  ]
 },
 {
  "id": "M11-QXC8A805C9",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "__str__ ta'siri: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "effect",
   "__str__ ta'siri"
  ]
 },
 {
  "id": "M11-QXE4D530CC",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "__str__ ta'siri bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QXA949B9B3",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "__str__ ta'siri oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QX01255649",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "__str__ ta'siri: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-str-effect"
  ],
  "explanation_uz": "__str__ ta'siri — M11-str-effect",
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
  "id": "M11-QX2A8D58BE",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "admin.register qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M11",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M11"
  ]
 },
 {
  "id": "M11-QXD30DCD03",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "admin.register bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M11-register"
  ]
 },
 {
  "id": "M11-QX339E4C28",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "admin.register bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QXD9F6D8FF",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "admin.register oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QXF57A5220",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "admin.register: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-register"
  ],
  "explanation_uz": "admin.register — M11-register",
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
  "id": "M11-QXE68F6B36",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "ModelAdmin uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ModelAdmin",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "ModelAdmin"
  ]
 },
 {
  "id": "M11-QXD43AE53B",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "ModelAdmin: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M11-modeladmin"
  ],
  "explanation_uz": "ModelAdmin — M11-modeladmin",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "modeladmin",
   "ModelAdmin"
  ]
 }
];
