/* questions M03 — P3 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m03 = [
 {
  "id": "M03-Q01",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book.name?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:8",
  "distractors": [],
  "options": [
   "CharField(max_length=255)",
   "TextField",
   "URLField",
   "SlugField"
  ],
  "accepted": [
   "CharField(max_length=255)"
  ]
 },
 {
  "id": "M03-Q02",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "null=True, blank yo'q — forma?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:11",
  "distractors": [],
  "options": [
   "DB NULL mumkin, forma validatsiyasi alohida",
   "Doim xato",
   "Bo'sh satr",
   "O'chadi"
  ],
  "accepted": [
   "DB NULL mumkin, forma validatsiyasi alohida"
  ]
 },
 {
  "id": "M03-Q03",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "CASCADE user o'chirilsa?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Kitoblari ham o'chadi",
   "Kitoblar qoladi",
   "Xato",
   "Faqat BookView"
  ],
  "accepted": [
   "Kitoblari ham o'chadi"
  ]
 },
 {
  "id": "M03-Q04",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Ko'rishlar soni related manager?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "book.bookview_set.count",
   "book.bookview_set.count()",
   "{{ book.bookview_set.count }}"
  ]
 },
 {
  "id": "M03-Q05",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "__str__ yo'q — admin?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Book object (1)",
   "Book",
   "(bo'sh)",
   "name"
  ],
  "accepted": [
   "Book object (1)"
  ]
 },
 {
  "id": "M03-Q06",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "filter(user=ali) vs user_id?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Natija bir xil",
   "Birinchisi xato",
   "Ikkinchisi xato",
   "Turli SQL"
  ],
  "accepted": [
   "Natija bir xil"
  ]
 }
];
