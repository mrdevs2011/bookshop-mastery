/* questions M08 — P4 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m08 = [
 {
  "id": "M08-Q01",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "{{ book.name }} XSS dan himoyalanganmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha, avto-escape",
   "Yo'q",
   "Faqat admin",
   "Faqat DEBUG"
  ],
  "accepted": [
   "Ha, avto-escape"
  ]
 },
 {
  "id": "M08-Q02",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "{{ book.user.username }} nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Bog'langan user.username",
   "Xato",
   "None",
   "SQL"
  ],
  "accepted": [
   "Bog'langan user.username"
  ]
 },
 {
  "id": "M08-Q03",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "{{ book.bookview_set.count }} — qavs?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B10: har biri SQL.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Shablonda qavssiz (callable chaqiriladi)",
   "count() majburiy",
   "Xato",
   "Faqat Python"
  ],
  "accepted": [
   "Shablonda qavssiz (callable chaqiriladi)"
  ]
 },
 {
  "id": "M08-Q04",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Ro'yxat aylanma tegi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% for book in books %}",
   "{{ for book }}",
   "#for",
   "{% loop %}"
  ],
  "accepted": [
   "{% for book in books %}"
  ]
 },
 {
  "id": "M08-Q05",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Shart tegi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% if is_public %}",
   "{{ if }}",
   "#if",
   "{% when %}"
  ],
  "accepted": [
   "{% if is_public %}"
  ]
 },
 {
  "id": "M08-Q06",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "messages ni ko'rsatish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% if messages %} ... {% endif %}",
   "{{ messages.all }}",
   "request.messages",
   "faqat admin"
  ],
  "accepted": [
   "{% if messages %} ... {% endif %}"
  ]
 },
 {
  "id": "M08-Q07",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "base.html ulash?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B19: hozir extends yo'q.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% extends 'base.html' %}",
   "{% include 'base.html' %}",
   "import base",
   "{% base %}"
  ],
  "accepted": [
   "{% extends 'base.html' %}"
  ]
 },
 {
  "id": "M08-Q08",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Formaga CSRF?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% csrf_token %}",
   "{{ csrf }}",
   "csrf()",
   "avtomatik"
  ],
  "accepted": [
   "{% csrf_token %}"
  ]
 },
 {
  "id": "M08-Q09",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Static fayl URL?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% static 'x.css' %}",
   "{{ static }}",
   "/static avto",
   "media"
  ],
  "accepted": [
   "{% static 'x.css' %}"
  ]
 },
 {
  "id": "M08-Q10",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "|safe filtri xavfi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "XSS mumkin",
   "Tezroq",
   "Hech narsa",
   "Faqat admin"
  ],
  "accepted": [
   "XSS mumkin"
  ]
 },
 {
  "id": "M08-Q11",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "is_public true bo'lsa active klass (bir qator):",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B11 tuzatishi.",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "{% if is_public %}class=\"active\"{% endif %}",
   "{% if is_public %}class='active'{% endif %}"
  ]
 }
];
