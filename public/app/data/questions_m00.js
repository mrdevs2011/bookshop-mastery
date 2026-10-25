/* M00 savollar — kengaytirilgan */
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
 },
 {
  "id": "M00-QXA7839D85",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "import va from … import qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-import"
  ],
  "explanation_uz": "import va from … import — M00-import",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M00",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M00"
  ]
 },
 {
  "id": "M00-QX591D6651",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "import va from … import bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-import"
  ],
  "explanation_uz": "import va from … import — M00-import",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M00-import"
  ]
 },
 {
  "id": "M00-QXB9A7A240",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "import va from … import bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-import"
  ],
  "explanation_uz": "import va from … import — M00-import",
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
  "id": "M00-QX171DF442",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "import va from … import oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-import"
  ],
  "explanation_uz": "import va from … import — M00-import",
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
  "id": "M00-QX7312AA65",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "import va from … import: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-import"
  ],
  "explanation_uz": "import va from … import — M00-import",
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
  "id": "M00-QX86B780E1",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "def, return, None qaytish uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-def-return"
  ],
  "explanation_uz": "def, return, None qaytish — M00-def-return",
  "source_ref": "",
  "distractors": [],
  "options": [
   "def, return, None qaytish",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "def, return, None qaytish"
  ]
 },
 {
  "id": "M00-QXBD8DDBD3",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "def, return, None qaytish: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-def-return"
  ],
  "explanation_uz": "def, return, None qaytish — M00-def-return",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "return",
   "def, return, None qa"
  ]
 },
 {
  "id": "M00-QXF3DE0988",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "def, return, None qaytish bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-def-return"
  ],
  "explanation_uz": "def, return, None qaytish — M00-def-return",
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
  "id": "M00-QX378F2BF1",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "def, return, None qaytish oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-def-return"
  ],
  "explanation_uz": "def, return, None qaytish — M00-def-return",
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
  "id": "M00-QX9F984CB2",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "def, return, None qaytish: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-def-return"
  ],
  "explanation_uz": "def, return, None qaytish — M00-def-return",
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
  "id": "M00-QX3D7553FB",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — if / elif / else?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-if"
  ],
  "explanation_uz": "if / elif / else — M00-if",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M00-if",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-if"
  ]
 },
 {
  "id": "M00-QXF767F52B",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "if / elif / else bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-if"
  ],
  "explanation_uz": "if / elif / else — M00-if",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M00-if"
  ]
 },
 {
  "id": "M00-QX7B15C842",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "if / elif / else bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-if"
  ],
  "explanation_uz": "if / elif / else — M00-if",
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
  "id": "M00-QXAD124310",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "if / elif / else oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-if"
  ],
  "explanation_uz": "if / elif / else — M00-if",
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
  "id": "M00-QX8DCF033D",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "if / elif / else: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-if"
  ],
  "explanation_uz": "if / elif / else — M00-if",
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
  "id": "M00-QX7F7AB16E",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "str: startswith, slicing qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-str-methods"
  ],
  "explanation_uz": "str: startswith, slicing — M00-str-methods",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M00",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M00"
  ]
 },
 {
  "id": "M00-QXE2E53DF7",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "str: startswith, slicing: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-str-methods"
  ],
  "explanation_uz": "str: startswith, slicing — M00-str-methods",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "methods",
   "str: startswith, sli"
  ]
 },
 {
  "id": "M00-QX9A71EFF6",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "str: startswith, slicing bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-str-methods"
  ],
  "explanation_uz": "str: startswith, slicing — M00-str-methods",
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
  "id": "M00-QX9398A48D",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "str: startswith, slicing oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-str-methods"
  ],
  "explanation_uz": "str: startswith, slicing — M00-str-methods",
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
  "id": "M00-QX69F6FA73",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "str: startswith, slicing: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-str-methods"
  ],
  "explanation_uz": "str: startswith, slicing — M00-str-methods",
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
  "id": "M00-QXCA2E17D2",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "try / except Exception uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-try-except"
  ],
  "explanation_uz": "try / except Exception — M00-try-except",
  "source_ref": "",
  "distractors": [],
  "options": [
   "try / except Exception",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "try / except Exception"
  ]
 },
 {
  "id": "M00-QX12B26DDC",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "try / except Exception bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-try-except"
  ],
  "explanation_uz": "try / except Exception — M00-try-except",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M00-try-except"
  ]
 },
 {
  "id": "M00-QX37C6E2D6",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "try / except Exception bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-try-except"
  ],
  "explanation_uz": "try / except Exception — M00-try-except",
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
  "id": "M00-QXD77255C3",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "try / except Exception oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-try-except"
  ],
  "explanation_uz": "try / except Exception — M00-try-except",
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
  "id": "M00-QXD34361B3",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "try / except Exception: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-try-except"
  ],
  "explanation_uz": "try / except Exception — M00-try-except",
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
  "id": "M00-QX7E13BA85",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — class, self, meros?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-class"
  ],
  "explanation_uz": "class, self, meros — M00-class",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M00-class",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-class"
  ]
 },
 {
  "id": "M00-QX0B5D7E8A",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "class, self, meros: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-class"
  ],
  "explanation_uz": "class, self, meros — M00-class",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "class",
   "class, self, meros"
  ]
 },
 {
  "id": "M00-QX331B0114",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "class, self, meros bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-class"
  ],
  "explanation_uz": "class, self, meros — M00-class",
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
  "id": "M00-QX980149BA",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "class, self, meros oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-class"
  ],
  "explanation_uz": "class, self, meros — M00-class",
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
  "id": "M00-QX012C770A",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "class, self, meros: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-class"
  ],
  "explanation_uz": "class, self, meros — M00-class",
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
  "id": "M00-QX43056B61",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "kwargs va type hint qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-kwargs"
  ],
  "explanation_uz": "kwargs va type hint — M00-kwargs",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M00",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M00"
  ]
 },
 {
  "id": "M00-QX8E91CA40",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "kwargs va type hint bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-kwargs"
  ],
  "explanation_uz": "kwargs va type hint — M00-kwargs",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M00-kwargs"
  ]
 },
 {
  "id": "M00-QX932476E0",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "kwargs va type hint bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-kwargs"
  ],
  "explanation_uz": "kwargs va type hint — M00-kwargs",
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
  "id": "M00-QXE1B07F8C",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "kwargs va type hint oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-kwargs"
  ],
  "explanation_uz": "kwargs va type hint — M00-kwargs",
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
  "id": "M00-QX2FF2A91C",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "kwargs va type hint: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-kwargs"
  ],
  "explanation_uz": "kwargs va type hint — M00-kwargs",
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
  "id": "M00-QX395B4E62",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "None va bo'sh qiymat uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-none"
  ],
  "explanation_uz": "None va bo'sh qiymat — M00-none",
  "source_ref": "",
  "distractors": [],
  "options": [
   "None va bo'sh qiymat",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "None va bo'sh qiymat"
  ]
 },
 {
  "id": "M00-QXAFE449BB",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "None va bo'sh qiymat: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-none"
  ],
  "explanation_uz": "None va bo'sh qiymat — M00-none",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "none",
   "None va bo'sh qiymat"
  ]
 },
 {
  "id": "M00-QX1FEB90C6",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "None va bo'sh qiymat bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-none"
  ],
  "explanation_uz": "None va bo'sh qiymat — M00-none",
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
  "id": "M00-QX062009BC",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "None va bo'sh qiymat oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-none"
  ],
  "explanation_uz": "None va bo'sh qiymat — M00-none",
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
  "id": "M00-QXF84B1CF3",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "None va bo'sh qiymat: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-none"
  ],
  "explanation_uz": "None va bo'sh qiymat — M00-none",
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
  "id": "M00-QXC52D5F31",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — docstring?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-docstring"
  ],
  "explanation_uz": "docstring — M00-docstring",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M00-docstring",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-docstring"
  ]
 },
 {
  "id": "M00-QX57BACDD5",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "docstring bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-docstring"
  ],
  "explanation_uz": "docstring — M00-docstring",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M00-docstring"
  ]
 },
 {
  "id": "M00-QXC39EB2FE",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "docstring bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M00-docstring"
  ],
  "explanation_uz": "docstring — M00-docstring",
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
 }
];
