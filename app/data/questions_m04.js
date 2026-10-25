/* questions M04 — P3 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m04 = [
 {
  "id": "M04-Q01",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "filter() SQL yuboradi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [
   {
    "text": "Ha",
    "misconception": "MC-qs-immediate",
    "why_tempting": "chaqirildi",
    "why_wrong": "lazy"
   }
  ],
  "options": [
   "Yo'q, lazy",
   "Ha",
   "Faqat DEBUG",
   "Faqat count"
  ],
  "accepted": [
   "Yo'q, lazy"
  ]
 },
 {
  "id": "M04-Q02",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "20 kitob × count — SQL?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "main/templates/books-list.html",
  "distractors": [],
  "options": [
   "21 (1+20)",
   "1",
   "20",
   "2"
  ],
  "accepted": [
   "21 (1+20)"
  ]
 },
 {
  "id": "M04-Q03",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "annotate bilan N+1 tuzatish:",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "Book.objects.filter(public=True).annotate(vc=Count('bookview'))",
   "Book.objects.annotate(vc=Count('bookview')).filter(public=True)"
  ]
 },
 {
  "id": "M04-Q04",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "get_or_create qaytaradi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "(object, created)",
   "faqat object",
   "faqat bool",
   "QuerySet"
  ],
  "accepted": [
   "(object, created)"
  ]
 },
 {
  "id": "M04-Q05",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "UniqueConstraint yo'q — xavf?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Poyga dublikat",
   "Hech qanday",
   "Sekin",
   "Faqat PG"
  ],
  "accepted": [
   "Poyga dublikat"
  ]
 },
 {
  "id": "M04-Q06",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "Eng yangi tartib:",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:24",
  "distractors": [],
  "accepted": [
   "Book.objects.order_by('-id')"
  ]
 }
];
