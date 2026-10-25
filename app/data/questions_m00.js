/* questions M00 — P3 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m00 = [
 {
  "id": "M00-Q01",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi qator to'g'ri import?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "Standart: from django.db import models.",
  "source_ref": "main/models.py:4",
  "distractors": [],
  "options": [
   "from django.db import models",
   "import django.db.models as models",
   "from django import db.models",
   "import models from django.db"
  ],
  "accepted": [
   "from django.db import models"
  ]
 },
 {
  "id": "M00-Q02",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "url='https://example.com' bo'lsa url[8:]?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "https:// = 8 belgi.",
  "source_ref": "core/views.py:46-49",
  "distractors": [],
  "options": [
   "example.com",
   "https://example.com",
   "//example.com",
   "example.com/"
  ],
  "accepted": [
   "example.com"
  ]
 },
 {
  "id": "M00-Q03",
  "concepts": [
   "M00-none",
   "M00-str-methods"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "url = request.POST.get('url'); url.startswith('https://') — xato?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "None.startswith → AttributeError (B04).",
  "source_ref": "core/views.py:43",
  "distractors": [
   {
    "text": "POST.get doim satr",
    "misconception": "MC-get-always-str",
    "why_tempting": "forma",
    "why_wrong": "None"
   }
  ],
  "options": [
   "url None bo'lsa AttributeError",
   "startswith sintaksis xato",
   "POST.get doim satr",
   "xato yo'q"
  ],
  "accepted": [
   "url None bo'lsa AttributeError"
  ]
 },
 {
  "id": "M00-Q04",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "return yozmasa Python nima qaytaradi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "Django view uchun None = 500.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "None",
   "0",
   "''",
   "xato"
  ],
  "accepted": [
   "None"
  ]
 },
 {
  "id": "M00-Q05",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "try/except Exception: print(err) muammosi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:55-59",
  "distractors": [],
  "accepted": [
   "xatoni yutadi",
   "xatoni yashiradi",
   "Exception juda keng"
  ]
 },
 {
  "id": "M00-Q100",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "if name=='Django': print('ok') — chiqish?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ]
 },
 {
  "id": "M00-Q101",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "if name=='Python': print('ok') — chiqish?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ]
 },
 {
  "id": "M00-Q102",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "if name=='Book': print('ok') — chiqish?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ]
 },
 {
  "id": "M00-Q103",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "if name=='User': print('ok') — chiqish?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ]
 },
 {
  "id": "M00-Q104",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "if name=='View': print('ok') — chiqish?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ]
 }
];
