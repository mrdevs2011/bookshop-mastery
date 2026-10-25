/* M10 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m10 = [
 {
  "id": "M10-Q01",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "add_book URL dan https:// ni?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:46",
  "distractors": [],
  "options": [
   "Kesib tashlaydi (url[8:])",
   "Saqlaydi",
   "Rad etadi",
   "None"
  ],
  "accepted": [
   "Kesib tashlaydi (url[8:])"
  ]
 },
 {
  "id": "M10-Q02",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "url maydoni yo'q POST —?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B04.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "AttributeError (None.startswith)",
   "Bo'sh saqlanadi",
   "404",
   "302"
  ],
  "accepted": [
   "AttributeError (None.startswith)"
  ]
 },
 {
  "id": "M10-Q03",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "public=False kitobni begona ochsa (haqiqiy kod)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:80",
  "distractors": [],
  "options": [
   "'kitob topilmadi' (200)",
   "404",
   "403",
   "302"
  ],
  "accepted": [
   "'kitob topilmadi' (200)"
  ]
 },
 {
  "id": "M10-Q04",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "?public=true nima ko'rsatadi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B16.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Barcha public kitoblar (o'ziniki ham)",
   "Faqat begonalar",
   "Faqat o'ziniki",
   "Bo'sh"
  ],
  "accepted": [
   "Barcha public kitoblar (o'ziniki ham)"
  ]
 },
 {
  "id": "M10-Q05",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Ko'rishlar soni qanday?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:74-76",
  "distractors": [],
  "options": [
   "get_or_create + count (noyob user)",
   "Har ochish +1",
   "Faqat cookie",
   "Session"
  ],
  "accepted": [
   "get_or_create + count (noyob user)"
  ]
 },
 {
  "id": "M10-Q06",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "UniqueConstraint yo'q — xavf?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B14.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Poyga dublikat BookView",
   "Hech narsa",
   "Sekin",
   "Faqat PG"
  ],
  "accepted": [
   "Poyga dublikat BookView"
  ]
 },
 {
  "id": "M10-Q07",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Ega private kitobini ochsa?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ko'radi + BookView yozuvi",
   "Rad",
   "404",
   "Faqat admin"
  ],
  "accepted": [
   "Ko'radi + BookView yozuvi"
  ]
 },
 {
  "id": "M10-Q08",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "public checkbox 'on'?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:50-53",
  "distractors": [],
  "options": [
   "True saqlanadi",
   "'on' satr",
   "False",
   "None"
  ],
  "accepted": [
   "True saqlanadi"
  ]
 },
 {
  "id": "M10-QX65DB27F9",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "add-book URL mantig'i qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M10"
  ]
 },
 {
  "id": "M10-QX7EB9F6E0",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "add-book URL mantig'i bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M10-add-book-url"
  ]
 },
 {
  "id": "M10-QX68F793C7",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "add-book URL mantig'i bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX9DC8E366",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "add-book URL mantig'i oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX77EEAD55",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "add-book URL mantig'i: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QXF21ECC07",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "public/private matritsa uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "options": [
   "public/private matritsa",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "public/private matritsa"
  ]
 },
 {
  "id": "M10-QX824665AA",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "public/private matritsa: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "private",
   "public/private matri"
  ]
 },
 {
  "id": "M10-QXE4C2354B",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "public/private matritsa bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX0D973406",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "public/private matritsa oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX7A6900B4",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "public/private matritsa: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX3A77A61F",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — noyob ko'rishlar hisobi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10-unique-views",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M10-unique-views"
  ]
 },
 {
  "id": "M10-QX0DCDE74E",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "noyob ko'rishlar hisobi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M10-unique-views"
  ]
 },
 {
  "id": "M10-QX4DE947E2",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "noyob ko'rishlar hisobi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX9C615C90",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "noyob ko'rishlar hisobi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QXAE45A63B",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "noyob ko'rishlar hisobi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX77C0064F",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "add-book URL mantig'i qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M10"
  ]
 },
 {
  "id": "M10-QXE3F89D6A",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "add-book URL mantig'i: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "url",
   "add-book URL mantig'"
  ]
 },
 {
  "id": "M10-QXAB5EABDC",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "add-book URL mantig'i bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QXA6A181C5",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "add-book URL mantig'i oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX56A980AE",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "add-book URL mantig'i: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX9804013F",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "public/private matritsa uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "options": [
   "public/private matritsa",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "public/private matritsa"
  ]
 },
 {
  "id": "M10-QX2299A63F",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "public/private matritsa bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M10-public-private"
  ]
 },
 {
  "id": "M10-QXE9C217F7",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "public/private matritsa bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX2AEA43E4",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "public/private matritsa oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX08F10536",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "public/private matritsa: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX700815D0",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — noyob ko'rishlar hisobi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10-unique-views",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M10-unique-views"
  ]
 },
 {
  "id": "M10-QXEB173FA3",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "noyob ko'rishlar hisobi: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "views",
   "noyob ko'rishlar his"
  ]
 },
 {
  "id": "M10-QX7C7FFEA6",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "noyob ko'rishlar hisobi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX981EFADB",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "noyob ko'rishlar hisobi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QXE03B350C",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "noyob ko'rishlar hisobi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX3986552E",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "add-book URL mantig'i qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M10"
  ]
 },
 {
  "id": "M10-QX8238DE2E",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "add-book URL mantig'i bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M10-add-book-url"
  ]
 },
 {
  "id": "M10-QX823D125F",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "add-book URL mantig'i bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QXDD6B2FDC",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "add-book URL mantig'i oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QXF1FF28EB",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "add-book URL mantig'i: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX8CD8FE2A",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "public/private matritsa uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "options": [
   "public/private matritsa",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "public/private matritsa"
  ]
 },
 {
  "id": "M10-QX4C9AB7C7",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "public/private matritsa: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "private",
   "public/private matri"
  ]
 },
 {
  "id": "M10-QX83A05652",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "public/private matritsa bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX25CF90BD",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "public/private matritsa oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX96F7740A",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "public/private matritsa: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QXD5D99B70",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — noyob ko'rishlar hisobi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10-unique-views",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M10-unique-views"
  ]
 },
 {
  "id": "M10-QXFB794EC0",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "noyob ko'rishlar hisobi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M10-unique-views"
  ]
 },
 {
  "id": "M10-QX3B228FF1",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "noyob ko'rishlar hisobi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX7B3B105B",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "noyob ko'rishlar hisobi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX157D738D",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "noyob ko'rishlar hisobi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX56BA5AD9",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "add-book URL mantig'i qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M10"
  ]
 },
 {
  "id": "M10-QXE326E7A5",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "add-book URL mantig'i: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "url",
   "add-book URL mantig'"
  ]
 },
 {
  "id": "M10-QX757A80F8",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "add-book URL mantig'i bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX64564875",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "add-book URL mantig'i oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QXA549692D",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "add-book URL mantig'i: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX8251ED28",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "public/private matritsa uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "options": [
   "public/private matritsa",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "public/private matritsa"
  ]
 },
 {
  "id": "M10-QX91BFD84E",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "public/private matritsa bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M10-public-private"
  ]
 },
 {
  "id": "M10-QXE7DC2505",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "public/private matritsa bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX1308141E",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "public/private matritsa oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX8EF9BD03",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "public/private matritsa: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-public-private"
  ],
  "explanation_uz": "public/private matritsa — M10-public-private",
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
  "id": "M10-QX4FAB9F1D",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — noyob ko'rishlar hisobi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10-unique-views",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M10-unique-views"
  ]
 },
 {
  "id": "M10-QX1501409E",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "noyob ko'rishlar hisobi: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "views",
   "noyob ko'rishlar his"
  ]
 },
 {
  "id": "M10-QXFC825483",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "noyob ko'rishlar hisobi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX1191D711",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "noyob ko'rishlar hisobi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QX83416E0A",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "noyob ko'rishlar hisobi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-unique-views"
  ],
  "explanation_uz": "noyob ko'rishlar hisobi — M10-unique-views",
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
  "id": "M10-QXE48EE0AC",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "add-book URL mantig'i qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M10",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M10"
  ]
 },
 {
  "id": "M10-QXB6452F67",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "add-book URL mantig'i bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M10-add-book-url"
  ]
 },
 {
  "id": "M10-QX79C97C4E",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "add-book URL mantig'i bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
  "id": "M10-QX3F8D4DDB",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "add-book URL mantig'i oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M10-add-book-url"
  ],
  "explanation_uz": "add-book URL mantig'i — M10-add-book-url",
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
 }
];
