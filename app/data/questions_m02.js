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
 }
];
