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
 },
 {
  "id": "M01-Q11",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Brauzer manzil satriga URL yozsa odatda qaysi metod?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "GET",
   "POST",
   "PUT",
   "PATCH"
  ],
  "accepted": [
   "GET"
  ]
 },
 {
  "id": "M01-Q12",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Logout ni GET da qilish xavfi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "B06.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Rasm/link orqali majburan chiqish",
   "Sekin ishlaydi",
   "Cookie o'chmaydi",
   "CSRF majburiy"
  ],
  "accepted": [
   "Rasm/link orqali majburan chiqish"
  ]
 },
 {
  "id": "M01-Q13",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "404 ma'nosi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Resurs topilmadi",
   "Server xato",
   "Redirect",
   "Muvaffaqiyat"
  ],
  "accepted": [
   "Resurs topilmadi"
  ]
 },
 {
  "id": "M01-Q14",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "500 ma'nosi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Server ichki xatosi",
   "Client xato",
   "Redirect",
   "Not found"
  ],
  "accepted": [
   "Server ichki xatosi"
  ]
 },
 {
  "id": "M01-Q15",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Django da /login/ ga yo'naltirish:",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:12",
  "distractors": [],
  "accepted": [
   "redirect('/login/')",
   "return redirect('/login/')"
  ]
 },
 {
  "id": "M01-Q16",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "?public=true da public qiymati?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "'true' (satr)",
   "True (bool)",
   "1",
   "None"
  ],
  "accepted": [
   "'true' (satr)"
  ]
 },
 {
  "id": "M01-Q17",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "request.method nima qaytaradi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "'GET' yoki 'POST' kabi satr",
   "bool",
   "int",
   "list"
  ],
  "accepted": [
   "'GET' yoki 'POST' kabi satr"
  ]
 },
 {
  "id": "M01-Q18",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "HTML form method=post default encoding?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "application/x-www-form-urlencoded",
   "application/json",
   "multipart/form-data",
   "text/plain"
  ],
  "accepted": [
   "application/x-www-form-urlencoded"
  ]
 },
 {
  "id": "M01-Q19",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Login dan keyin sessiya qayerda?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Serverda + cookie da sessionid",
   "Faqat localStorage",
   "Faqat URL",
   "Faqat POST body"
  ],
  "accepted": [
   "Serverda + cookie da sessionid"
  ]
 },
 {
  "id": "M01-Q20",
  "concepts": [
   "M01-status-codes",
   "M07-404"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Http404 raise qilinsa status?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "404",
   "200",
   "500",
   "302"
  ],
  "accepted": [
   "404"
  ]
 },
 {
  "id": "M01-Q21",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 302 — Redirect?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
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
  "id": "M01-Q22",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 404 — Not Found?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
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
  "id": "M01-Q23",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 403 — Forbidden?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
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
  "id": "M01-Q24",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "HTTP 500 — Server Error?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
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
  "id": "M01-Q30",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Redirect da muhim header?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Location",
   "Content-Type",
   "Cookie",
   "Host"
  ],
  "accepted": [
   "Location"
  ]
 },
 {
  "id": "M01-Q31",
  "concepts": [
   "M01-body"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "POST forma ma'lumoti qayerda?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "request body (POST)",
   "URL query",
   "Cookie",
   "Header Host"
  ],
  "accepted": [
   "request body (POST)"
  ]
 }
];
