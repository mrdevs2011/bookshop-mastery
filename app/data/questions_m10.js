/* questions M10 — P4 */
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
 }
];
