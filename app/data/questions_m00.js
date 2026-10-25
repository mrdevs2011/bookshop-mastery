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
 },
 {
  "id": "M00-Q11",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Ishlatilmagan import nima uchun yomon?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "B12: os/statistics importlari ishlatilmagan.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Chalg'itadi va linter xatosi",
   "Dastur ishlamaydi",
   "Django rad etadi",
   "Migratsiya buziladi"
  ],
  "accepted": [
   "Chalg'itadi va linter xatosi"
  ]
 },
 {
  "id": "M00-Q12",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "models.py da Django model bazasi qanday import qilinadi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:4",
  "distractors": [],
  "accepted": [
   "from django.db import models"
  ]
 },
 {
  "id": "M00-Q13",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "View None qaytarsa Django nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "B02/B03: didn't return an HttpResponse.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ValueError / 500",
   "200 bo'sh",
   "302",
   "404"
  ],
  "accepted": [
   "ValueError / 500"
  ]
 },
 {
  "id": "M00-Q14",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "book_list faqat GET da return qiladi. POST da?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:19-31",
  "distractors": [],
  "options": [
   "None → 500",
   "200",
   "405",
   "302 login"
  ],
  "accepted": [
   "None → 500"
  ]
 },
 {
  "id": "M00-Q15",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "if a: ... elif b: ... else: — b True, a False. Qaysi blok?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "elif",
   "if",
   "else",
   "hech qaysi"
  ],
  "accepted": [
   "elif"
  ]
 },
 {
  "id": "M00-Q16",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "'http://x.uz'.startswith('https://')?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "False",
   "True",
   "Xato",
   "None"
  ],
  "accepted": [
   "False"
  ]
 },
 {
  "id": "M00-Q17",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "https:// ni kesib tashlash (haqiqiy kod uslubi):",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:46-47",
  "distractors": [],
  "accepted": [
   "url[8:]",
   "url = url[8:]"
  ]
 },
 {
  "id": "M00-Q18",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "except Exception: print(err) — eng katta muammo?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:55-59",
  "distractors": [],
  "options": [
   "Xato yutiladi, sabab yo'qoladi",
   "print sekin",
   "Exception sintaksis xato",
   "Django rad etadi"
  ],
  "accepted": [
   "Xato yutiladi, sabab yo'qoladi"
  ]
 },
 {
  "id": "M00-Q19",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Model klassida maydon self.siz yoziladi — to'g'rimi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha, klass atributi",
   "Yo'q, self kerak",
   "Faqat FK da",
   "Faqat CharField da"
  ],
  "accepted": [
   "Ha, klass atributi"
  ]
 },
 {
  "id": "M00-Q20",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "request.POST.get('x') kalit yo'q bo'lsa?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "None",
   "''",
   "KeyError",
   "False"
  ],
  "accepted": [
   "None"
  ]
 },
 {
  "id": "M00-Q21",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "None or '' natijasi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "or birinchi truthy ni qaytaradi; None falsy.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "''",
   "None",
   "True",
   "Xato"
  ],
  "accepted": [
   "''"
  ]
 },
 {
  "id": "M00-Q22",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "def f(request: HttpRequest) — : HttpRequest nima?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:19",
  "distractors": [],
  "options": [
   "Type hint",
   "Majburiy tekshiruv",
   "Django dekorator",
   "Middleware"
  ],
  "accepted": [
   "Type hint"
  ]
 },
 {
  "id": "BUG-B04",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "url None bo'lib startswith chaqirilsa?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "Haqiqiy kamchilik B04.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "AttributeError",
   "Hech qanday muammo",
   "Faqat DEBUG da",
   "Faqat admin da"
  ],
  "accepted": [
   "AttributeError"
  ]
 },
 {
  "id": "M00-Q30",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "def ustidagi \"\"\"...\"\"\" nima?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "docstring",
   "dekorator",
   "type hint",
   "import"
  ],
  "accepted": [
   "docstring"
  ]
 },
 {
  "id": "M00-Q31",
  "concepts": [
   "M00-bool"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "bool('False') natijasi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "Bo'sh bo'lmagan satr truthy.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "True",
   "False",
   "Xato",
   "None"
  ],
  "accepted": [
   "True"
  ]
 },
 {
  "id": "M00-Q40",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "'import os' yaroqli Python importmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
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
  "id": "M00-Q41",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "'from os import path' yaroqli Python importmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
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
  "id": "M00-Q42",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "'import sys' yaroqli Python importmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
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
  "id": "M00-Q43",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "'from django.conf import settings' yaroqli Python importmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ]
 }
];
