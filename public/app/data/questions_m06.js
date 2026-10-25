/* M06 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m06 = [
 {
  "id": "M06-Q01",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Django da URL yo'lini qaysi funksiya belgilaydi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "path()",
   "url()",
   "route()",
   "link()"
  ],
  "accepted": [
   "path()"
  ]
 },
 {
  "id": "M06-Q02",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "kitob id si butun son — to'g'ri konvertor?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "<int:id>",
   "<str:id>",
   "<slug:id>",
   "<id>"
  ],
  "accepted": [
   "<int:id>"
  ]
 },
 {
  "id": "M06-Q03",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "book_page uchun path yozing (id int):",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "accepted": [
   "path('book/<int:id>/', book_page)",
   "path(\"book/<int:id>/\", book_page)"
  ]
 },
 {
  "id": "M06-Q04",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "path oxirida / bo'lmasa (APPEND_SLASH)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Django odatda / ga redirect qilishi mumkin",
   "Doim 404",
   "Doim 500",
   "Hech narsa"
  ],
  "accepted": [
   "Django odatda / ga redirect qilishi mumkin"
  ]
 },
 {
  "id": "M06-Q05",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Faqat qaysi path da name= bor (haqiqiy loyiha)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B17: faqat logout nomlangan.",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "logout",
   "login",
   "book-list",
   "signup"
  ],
  "accepted": [
   "logout"
  ]
 },
 {
  "id": "M06-Q06",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Nomlangan URL ga redirect:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "redirect('logout')",
   "return redirect('logout')"
  ]
 },
 {
  "id": "M06-Q07",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "/error/ qanday ulangan?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "TemplateView.as_view(template_name='error.html')",
   "render()",
   "HttpResponse",
   "static"
  ],
  "accepted": [
   "TemplateView.as_view(template_name='error.html')"
  ]
 },
 {
  "id": "M06-Q08",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "URL tartibi muhimmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha, birinchi mos kelgan ishlaydi",
   "Yo'q",
   "Faqat admin",
   "Faqat include"
  ],
  "accepted": [
   "Ha, birinchi mos kelgan ishlaydi"
  ]
 },
 {
  "id": "M06-Q09",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "include() nima uchun?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Boshqa urls modulini ulash",
   "Template",
   "Static",
   "Migrate"
  ],
  "accepted": [
   "Boshqa urls modulini ulash"
  ]
 },
 {
  "id": "M06-Q10",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "BookShop da nechta path (admin bilan)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "PROMPT: 9 ta yo'l (darslikda 7 deb xato).",
  "source_ref": "",
  "distractors": [],
  "options": [
   "9",
   "7",
   "5",
   "12"
  ],
  "accepted": [
   "9"
  ]
 },
 {
  "id": "M06-Q11",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Bosh sahifa path?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "path('', index)",
   "path('/', index)",
   "path('home/', index)",
   "path('index/', index)"
  ],
  "accepted": [
   "path('', index)"
  ]
 },
 {
  "id": "M06-Q12",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "<int:id> ga 'abc' kelsa?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Mos kelmaydi (404)",
   "0",
   "Xato 500",
   "'abc'"
  ],
  "accepted": [
   "Mos kelmaydi (404)"
  ]
 },
 {
  "id": "M06-Q20",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'admin/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q21",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'book-list/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q22",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'add-book/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q23",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'login/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q24",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'logout/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q25",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'signup/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q26",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'error/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q27",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path '(bo'sh)' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-QX0DD25AAB",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path() qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M06",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M06"
  ]
 },
 {
  "id": "M06-QX1B1FE072",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "path() bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M06-path"
  ]
 },
 {
  "id": "M06-QXA80600A6",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "path() bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
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
  "id": "M06-QXDE227F9A",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "path() oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
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
  "id": "M06-QXA0C4786B",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "path(): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
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
  "id": "M06-QX3E779BE5",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "<int:id> uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
  "source_ref": "",
  "distractors": [],
  "options": [
   "<int:id>",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "<int:id>"
  ]
 },
 {
  "id": "M06-QXF742B37B",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "<int:id>: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "converter",
   "<int:id>"
  ]
 },
 {
  "id": "M06-QX4BA77C77",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "<int:id> bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
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
  "id": "M06-QX6E371790",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "<int:id> oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
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
  "id": "M06-QX8FF7CAC3",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "<int:id>: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
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
  "id": "M06-QX2E290D21",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — URL tartibi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M06-order",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-order"
  ]
 },
 {
  "id": "M06-QX5E466FE2",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "URL tartibi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M06-order"
  ]
 },
 {
  "id": "M06-QXC8877BA8",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "URL tartibi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
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
  "id": "M06-QX54EFEE06",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "URL tartibi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
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
  "id": "M06-QX5387E8D6",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "URL tartibi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
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
  "id": "M06-QX1A0E5F90",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "oxirgi / qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-trailing"
  ],
  "explanation_uz": "oxirgi / — M06-trailing",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M06",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M06"
  ]
 },
 {
  "id": "M06-QX212E7E74",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "oxirgi /: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-trailing"
  ],
  "explanation_uz": "oxirgi / — M06-trailing",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "trailing",
   "oxirgi /"
  ]
 },
 {
  "id": "M06-QX354E68FB",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "oxirgi / bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-trailing"
  ],
  "explanation_uz": "oxirgi / — M06-trailing",
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
  "id": "M06-QX6E6261FC",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "oxirgi / oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-trailing"
  ],
  "explanation_uz": "oxirgi / — M06-trailing",
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
  "id": "M06-QXD26E9409",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "oxirgi /: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-trailing"
  ],
  "explanation_uz": "oxirgi / — M06-trailing",
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
  "id": "M06-QX09227F28",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "name= + reverse uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-name-reverse"
  ],
  "explanation_uz": "name= + reverse — M06-name-reverse",
  "source_ref": "",
  "distractors": [],
  "options": [
   "name= + reverse",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "name= + reverse"
  ]
 },
 {
  "id": "M06-QXD86D40EE",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "name= + reverse bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-name-reverse"
  ],
  "explanation_uz": "name= + reverse — M06-name-reverse",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M06-name-reverse"
  ]
 },
 {
  "id": "M06-QXA71C6FA1",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "name= + reverse bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-name-reverse"
  ],
  "explanation_uz": "name= + reverse — M06-name-reverse",
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
  "id": "M06-QX1523C215",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "name= + reverse oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-name-reverse"
  ],
  "explanation_uz": "name= + reverse — M06-name-reverse",
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
  "id": "M06-QX1E8F0F3A",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "name= + reverse: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-name-reverse"
  ],
  "explanation_uz": "name= + reverse — M06-name-reverse",
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
  "id": "M06-QX240D808E",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — include()?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-include"
  ],
  "explanation_uz": "include() — M06-include",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M06-include",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-include"
  ]
 },
 {
  "id": "M06-QX85E088D8",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "include(): kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-include"
  ],
  "explanation_uz": "include() — M06-include",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "include",
   "include()"
  ]
 },
 {
  "id": "M06-QXA3C5CF3C",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "include() bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-include"
  ],
  "explanation_uz": "include() — M06-include",
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
  "id": "M06-QX117A0CC2",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "include() oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-include"
  ],
  "explanation_uz": "include() — M06-include",
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
  "id": "M06-QXB04D6D9E",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "include(): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-include"
  ],
  "explanation_uz": "include() — M06-include",
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
  "id": "M06-QX8A880DB5",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "TemplateView.as_view qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-templateview"
  ],
  "explanation_uz": "TemplateView.as_view — M06-templateview",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M06",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M06"
  ]
 },
 {
  "id": "M06-QX5CD787B3",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "TemplateView.as_view bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-templateview"
  ],
  "explanation_uz": "TemplateView.as_view — M06-templateview",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M06-templateview"
  ]
 },
 {
  "id": "M06-QX08D8A5D9",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "TemplateView.as_view bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-templateview"
  ],
  "explanation_uz": "TemplateView.as_view — M06-templateview",
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
  "id": "M06-QX9AB39AAF",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "TemplateView.as_view oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-templateview"
  ],
  "explanation_uz": "TemplateView.as_view — M06-templateview",
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
  "id": "M06-QXAF16D6B9",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "TemplateView.as_view: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-templateview"
  ],
  "explanation_uz": "TemplateView.as_view — M06-templateview",
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
  "id": "M06-QXBB15FF87",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path() uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
  "source_ref": "",
  "distractors": [],
  "options": [
   "path()",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "path()"
  ]
 },
 {
  "id": "M06-QXB0E38005",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "path(): kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "path",
   "path()"
  ]
 },
 {
  "id": "M06-QXAAF71D88",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "path() bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
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
  "id": "M06-QX4668FE16",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "path() oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
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
  "id": "M06-QX690B66CD",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "path(): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-path"
  ],
  "explanation_uz": "path() — M06-path",
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
  "id": "M06-QX30F7CBDE",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — <int:id>?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M06-converter",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-converter"
  ]
 },
 {
  "id": "M06-QX4690B218",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "<int:id> bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M06-converter"
  ]
 },
 {
  "id": "M06-QX7B4F3ABC",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "<int:id> bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
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
  "id": "M06-QXBEEE4D39",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "<int:id> oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
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
  "id": "M06-QX9A00A4AB",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "<int:id>: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-converter"
  ],
  "explanation_uz": "<int:id> — M06-converter",
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
  "id": "M06-QXE50C883C",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "URL tartibi qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M06",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M06"
  ]
 },
 {
  "id": "M06-QX5C41721E",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "URL tartibi: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "order",
   "URL tartibi"
  ]
 },
 {
  "id": "M06-QX95C41CFE",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "URL tartibi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
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
  "id": "M06-QX95E897C0",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "URL tartibi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
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
  "id": "M06-QXBD54E13C",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "URL tartibi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-order"
  ],
  "explanation_uz": "URL tartibi — M06-order",
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
  "id": "M06-QXC9914638",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "oxirgi / uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-trailing"
  ],
  "explanation_uz": "oxirgi / — M06-trailing",
  "source_ref": "",
  "distractors": [],
  "options": [
   "oxirgi /",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "oxirgi /"
  ]
 },
 {
  "id": "M06-QX7C26F643",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "oxirgi / bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M06-trailing"
  ],
  "explanation_uz": "oxirgi / — M06-trailing",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M06-trailing"
  ]
 }
];
