/* M01 savollar — kengaytirilgan */
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
 },
 {
  "id": "M01-QXCC7503BA",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "HTTP so'rov/javob qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-http"
  ],
  "explanation_uz": "HTTP so'rov/javob — M01-http",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M01",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M01"
  ]
 },
 {
  "id": "M01-QXEA46D5A3",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "HTTP so'rov/javob bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-http"
  ],
  "explanation_uz": "HTTP so'rov/javob — M01-http",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M01-http"
  ]
 },
 {
  "id": "M01-QXA98B1F6F",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "HTTP so'rov/javob bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-http"
  ],
  "explanation_uz": "HTTP so'rov/javob — M01-http",
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
  "id": "M01-QX2902AFCC",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "HTTP so'rov/javob oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-http"
  ],
  "explanation_uz": "HTTP so'rov/javob — M01-http",
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
  "id": "M01-QX49CD8474",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "HTTP so'rov/javob: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-http"
  ],
  "explanation_uz": "HTTP so'rov/javob — M01-http",
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
  "id": "M01-QX015BF783",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "GET vs POST uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-methods"
  ],
  "explanation_uz": "GET vs POST — M01-methods",
  "source_ref": "",
  "distractors": [],
  "options": [
   "GET vs POST",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "GET vs POST"
  ]
 },
 {
  "id": "M01-QX1A148C4E",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "GET vs POST: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-methods"
  ],
  "explanation_uz": "GET vs POST — M01-methods",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "methods",
   "GET vs POST"
  ]
 },
 {
  "id": "M01-QXE7AF140B",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "GET vs POST bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-methods"
  ],
  "explanation_uz": "GET vs POST — M01-methods",
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
  "id": "M01-QX6BB9A68E",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "GET vs POST oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-methods"
  ],
  "explanation_uz": "GET vs POST — M01-methods",
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
  "id": "M01-QX54BC9B53",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "GET vs POST: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-methods"
  ],
  "explanation_uz": "GET vs POST — M01-methods",
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
  "id": "M01-QX152634D2",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — 200/302/404/405/500?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-status-codes"
  ],
  "explanation_uz": "200/302/404/405/500 — M01-status-codes",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M01-status-codes",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-status-codes"
  ]
 },
 {
  "id": "M01-QXA3B09D2C",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "200/302/404/405/500 bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-status-codes"
  ],
  "explanation_uz": "200/302/404/405/500 — M01-status-codes",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M01-status-codes"
  ]
 },
 {
  "id": "M01-QX56446A0F",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "200/302/404/405/500 bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-status-codes"
  ],
  "explanation_uz": "200/302/404/405/500 — M01-status-codes",
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
  "id": "M01-QXEF452FE5",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "200/302/404/405/500 oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-status-codes"
  ],
  "explanation_uz": "200/302/404/405/500 — M01-status-codes",
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
  "id": "M01-QXD02B81E4",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "200/302/404/405/500: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-status-codes"
  ],
  "explanation_uz": "200/302/404/405/500 — M01-status-codes",
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
  "id": "M01-QX109CB968",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Redirect = Location header qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-redirect"
  ],
  "explanation_uz": "Redirect = Location header — M01-redirect",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M01",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M01"
  ]
 },
 {
  "id": "M01-QXBD3AC48C",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Redirect = Location header: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-redirect"
  ],
  "explanation_uz": "Redirect = Location header — M01-redirect",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "redirect",
   "Redirect = Location "
  ]
 },
 {
  "id": "M01-QX525E34AE",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "Redirect = Location header bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-redirect"
  ],
  "explanation_uz": "Redirect = Location header — M01-redirect",
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
  "id": "M01-QX8BF69C85",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "Redirect = Location header oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-redirect"
  ],
  "explanation_uz": "Redirect = Location header — M01-redirect",
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
  "id": "M01-QX9FD9D71F",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "Redirect = Location header: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-redirect"
  ],
  "explanation_uz": "Redirect = Location header — M01-redirect",
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
  "id": "M01-QX88E166AF",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Cookie va sessiya uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-cookie-session"
  ],
  "explanation_uz": "Cookie va sessiya — M01-cookie-session",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Cookie va sessiya",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "Cookie va sessiya"
  ]
 },
 {
  "id": "M01-QX53A74F2B",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Cookie va sessiya bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-cookie-session"
  ],
  "explanation_uz": "Cookie va sessiya — M01-cookie-session",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M01-cookie-session"
  ]
 },
 {
  "id": "M01-QX954A84DF",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "Cookie va sessiya bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-cookie-session"
  ],
  "explanation_uz": "Cookie va sessiya — M01-cookie-session",
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
  "id": "M01-QX2312CD4B",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "Cookie va sessiya oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-cookie-session"
  ],
  "explanation_uz": "Cookie va sessiya — M01-cookie-session",
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
  "id": "M01-QX989011CD",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "Cookie va sessiya: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-cookie-session"
  ],
  "explanation_uz": "Cookie va sessiya — M01-cookie-session",
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
  "id": "M01-QX17D36D0F",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — Forma kodlash (urlencoded)?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-form-encoding"
  ],
  "explanation_uz": "Forma kodlash (urlencoded) — M01-form-encoding",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M01-form-encoding",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-form-encoding"
  ]
 },
 {
  "id": "M01-QX25F355D7",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Forma kodlash (urlencoded): kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-form-encoding"
  ],
  "explanation_uz": "Forma kodlash (urlencoded) — M01-form-encoding",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "encoding",
   "Forma kodlash (urlen"
  ]
 },
 {
  "id": "M01-QXC61B1A92",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "Forma kodlash (urlencoded) bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-form-encoding"
  ],
  "explanation_uz": "Forma kodlash (urlencoded) — M01-form-encoding",
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
  "id": "M01-QXBB7C0D29",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "Forma kodlash (urlencoded) oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-form-encoding"
  ],
  "explanation_uz": "Forma kodlash (urlencoded) — M01-form-encoding",
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
  "id": "M01-QXBC96DF4C",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "Forma kodlash (urlencoded): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-form-encoding"
  ],
  "explanation_uz": "Forma kodlash (urlencoded) — M01-form-encoding",
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
  "id": "M01-QXECFF7BA0",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Query string ?public=true qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-query-string"
  ],
  "explanation_uz": "Query string ?public=true — M01-query-string",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M01",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M01"
  ]
 },
 {
  "id": "M01-QX5654A5A3",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Query string ?public=true bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-query-string"
  ],
  "explanation_uz": "Query string ?public=true — M01-query-string",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M01-query-string"
  ]
 },
 {
  "id": "M01-QX799CF40F",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "Query string ?public=true bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-query-string"
  ],
  "explanation_uz": "Query string ?public=true — M01-query-string",
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
  "id": "M01-QXC066CC35",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "Query string ?public=true oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-query-string"
  ],
  "explanation_uz": "Query string ?public=true — M01-query-string",
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
  "id": "M01-QXC0F8BB55",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "Query string ?public=true: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-query-string"
  ],
  "explanation_uz": "Query string ?public=true — M01-query-string",
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
  "id": "M01-QX2EEDAAF2",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "request.GET/POST/method/user uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-request-attrs"
  ],
  "explanation_uz": "request.GET/POST/method/user — M01-request-attrs",
  "source_ref": "",
  "distractors": [],
  "options": [
   "request.GET/POST/method/user",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "request.GET/POST/method/user"
  ]
 },
 {
  "id": "M01-QXD01E7210",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "request.GET/POST/method/user: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-request-attrs"
  ],
  "explanation_uz": "request.GET/POST/method/user — M01-request-attrs",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "attrs",
   "request.GET/POST/met"
  ]
 },
 {
  "id": "M01-QX4433561B",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "request.GET/POST/method/user bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-request-attrs"
  ],
  "explanation_uz": "request.GET/POST/method/user — M01-request-attrs",
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
  "id": "M01-QXDF0990E3",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "request.GET/POST/method/user oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-request-attrs"
  ],
  "explanation_uz": "request.GET/POST/method/user — M01-request-attrs",
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
  "id": "M01-QX6738CA63",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "request.GET/POST/method/user: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-request-attrs"
  ],
  "explanation_uz": "request.GET/POST/method/user — M01-request-attrs",
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
  "id": "M01-QX87E72B5C",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — HTTP headerlar?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-headers"
  ],
  "explanation_uz": "HTTP headerlar — M01-headers",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M01-headers",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-headers"
  ]
 },
 {
  "id": "M01-QXD25972D4",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "HTTP headerlar bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-headers"
  ],
  "explanation_uz": "HTTP headerlar — M01-headers",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M01-headers"
  ]
 },
 {
  "id": "M01-QXF89FFF30",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "HTTP headerlar bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-headers"
  ],
  "explanation_uz": "HTTP headerlar — M01-headers",
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
  "id": "M01-QXBE33EE29",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "HTTP headerlar oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-headers"
  ],
  "explanation_uz": "HTTP headerlar — M01-headers",
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
  "id": "M01-QX52FE02EC",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "HTTP headerlar: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-headers"
  ],
  "explanation_uz": "HTTP headerlar — M01-headers",
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
  "id": "M01-QX3A07C19F",
  "concepts": [
   "M01-body"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "so'rov tanasi qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M01-body"
  ],
  "explanation_uz": "so'rov tanasi — M01-body",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M01",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M01"
  ]
 }
];
