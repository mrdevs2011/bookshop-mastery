/* questions M01 — P3 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m01 = [
 {
  "id": "M01-Q01",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "HttpResponse('kitob topilmadi') status?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "Default 200 (B09).",
  "source_ref": "core/views.py:80",
  "distractors": [
   {
    "text": "404",
    "misconception": "MC-text-equals-404",
    "why_tempting": "matn",
    "why_wrong": "status 200"
   }
  ],
  "options": [
   "200",
   "404",
   "403",
   "302"
  ],
  "accepted": [
   "200"
  ]
 },
 {
  "id": "M01-Q02",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Kitob qo'shish metodi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "POST",
   "GET",
   "PUT",
   "DELETE"
  ],
  "accepted": [
   "POST"
  ]
 },
 {
  "id": "M01-Q03",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "is_public ni GET dan olish (bir qator)?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:26",
  "distractors": [],
  "accepted": [
   "request.GET.get('public') == 'true'",
   "request.GET.get(\"public\") == \"true\""
  ]
 },
 {
  "id": "M01-Q04",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "redirect('/login/') status?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "302",
   "200",
   "301",
   "404"
  ],
  "accepted": [
   "302"
  ]
 },
 {
  "id": "M01-Q05",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "is_authenticated False?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Anonim foydalanuvchi",
   "Xato",
   "None",
   "Sessiya yo'q"
  ],
  "accepted": [
   "Anonim foydalanuvchi"
  ]
 },
 {
  "id": "M01-Q100",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 404 oilasi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "client xato",
   "boshqa"
  ],
  "accepted": [
   "client xato"
  ]
 },
 {
  "id": "M01-Q101",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 302 oilasi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "redirect",
   "boshqa"
  ],
  "accepted": [
   "redirect"
  ]
 },
 {
  "id": "M01-Q102",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 200 oilasi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "muvaffaqiyat",
   "boshqa"
  ],
  "accepted": [
   "muvaffaqiyat"
  ]
 },
 {
  "id": "M01-Q103",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 500 oilasi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "server xato",
   "boshqa"
  ],
  "accepted": [
   "server xato"
  ]
 },
 {
  "id": "M01-Q104",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 403 oilasi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "client xato",
   "boshqa"
  ],
  "accepted": [
   "client xato"
  ]
 }
];
