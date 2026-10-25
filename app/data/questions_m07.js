/* M07 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m07 = [
 {
  "id": "M07-Q01",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "FBV nima?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Function-Based View",
   "Form-Based View",
   "File-Based View",
   "Fast Backend View"
  ],
  "accepted": [
   "Function-Based View"
  ]
 },
 {
  "id": "M07-Q02",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Auth tekshiruvdan keyin return qilmasak?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B01: check_auth return qilinmasa ta'sirsiz.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Redirect ishlamaydi, kod davom etadi",
   "Avtomatik to'xtaydi",
   "404",
   "500"
  ],
  "accepted": [
   "Redirect ishlamaydi, kod davom etadi"
  ]
 },
 {
  "id": "M07-Q03",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "View hech narsa return qilmasa?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:19-31",
  "distractors": [],
  "options": [
   "ValueError: didn't return an HttpResponse",
   "200",
   "None sahifa",
   "302"
  ],
  "accepted": [
   "ValueError: didn't return an HttpResponse"
  ]
 },
 {
  "id": "M07-Q04",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "GET va POST ni ajratish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "if request.method == 'GET': ...",
   "if request.GET:",
   "if request.is_get",
   "avtomatik"
  ],
  "accepted": [
   "if request.method == 'GET': ..."
  ]
 },
 {
  "id": "M07-Q05",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "render() nima qaytaradi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "HttpResponse (HTML)",
   "None",
   "str",
   "dict"
  ],
  "accepted": [
   "HttpResponse (HTML)"
  ]
 },
 {
  "id": "M07-Q06",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "books-list.html ni kontekst bilan:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:31",
  "distractors": [],
  "accepted": [
   "return render(request, 'books-list.html', {'books': books})",
   "render(request, \"books-list.html\", {\"books\": books})"
  ]
 },
 {
  "id": "M07-Q07",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "render 3-arg nima?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Kontekst lug'ati",
   "Template nomi",
   "Status",
   "Headers"
  ],
  "accepted": [
   "Kontekst lug'ati"
  ]
 },
 {
  "id": "M07-Q08",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Private kitob begonaga HttpResponse('topilmadi') — muammo?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B09.",
  "source_ref": "core/views.py:80",
  "distractors": [],
  "options": [
   "Status 200, 404 emas",
   "To'g'ri",
   "Faqat matn xato",
   "CSRF"
  ],
  "accepted": [
   "Status 200, 404 emas"
  ]
 },
 {
  "id": "M07-Q09",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Book ni id bo'yicha xavfsiz olish:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "get_object_or_404(Book, id=id)",
   "get_object_or_404(Book, pk=id)"
  ]
 },
 {
  "id": "M07-Q10",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "raise Http404 natijasi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "404 status + 404.html (DEBUG=False)",
   "200",
   "500",
   "302"
  ],
  "accepted": [
   "404 status + 404.html (DEBUG=False)"
  ]
 },
 {
  "id": "M07-Q11",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "index view autentifikatsiya bo'lsa?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:9-13",
  "distractors": [],
  "options": [
   "/book-list/ ga redirect",
   "books-list render",
   "login",
   "404"
  ],
  "accepted": [
   "/book-list/ ga redirect"
  ]
 },
 {
  "id": "M07-Q12",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "add_book da GET?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:38-39",
  "distractors": [],
  "options": [
   "Forma ko'rsatadi",
   "Kitob yaratadi",
   "404",
   "None"
  ],
  "accepted": [
   "Forma ko'rsatadi"
  ]
 },
 {
  "id": "M07-QXD5D0CBAC",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "FBV oqimi qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M07"
  ]
 },
 {
  "id": "M07-QX84986CFC",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "FBV oqimi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M07-fbv"
  ]
 },
 {
  "id": "M07-QX5C87CAB5",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "FBV oqimi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
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
  "id": "M07-QXD948EF46",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "FBV oqimi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
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
  "id": "M07-QX64841EFA",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "FBV oqimi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
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
  "id": "M07-QX2A8D5B32",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "erta return uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
  "source_ref": "",
  "distractors": [],
  "options": [
   "erta return",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "erta return"
  ]
 },
 {
  "id": "M07-QX29726425",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "erta return: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "return",
   "erta return"
  ]
 },
 {
  "id": "M07-QXDD77735B",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "erta return bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
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
  "id": "M07-QX46575C31",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "erta return oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
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
  "id": "M07-QXC109D0A2",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "erta return: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
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
  "id": "M07-QXE6A9CC73",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — metod bo'yicha tarmoq?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07-method-branch",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-method-branch"
  ]
 },
 {
  "id": "M07-QXC99D4855",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "metod bo'yicha tarmoq bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M07-method-branch"
  ]
 },
 {
  "id": "M07-QXC306E68B",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "metod bo'yicha tarmoq bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
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
  "id": "M07-QX869A5CC6",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "metod bo'yicha tarmoq oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
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
  "id": "M07-QXB4819486",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "metod bo'yicha tarmoq: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
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
  "id": "M07-QXAE074B6F",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "render/redirect/HttpResponse qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-render-redirect"
  ],
  "explanation_uz": "render/redirect/HttpResponse — M07-render-redirect",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M07"
  ]
 },
 {
  "id": "M07-QXDBCD430A",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "render/redirect/HttpResponse: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-render-redirect"
  ],
  "explanation_uz": "render/redirect/HttpResponse — M07-render-redirect",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "redirect",
   "render/redirect/Http"
  ]
 },
 {
  "id": "M07-QXFC578745",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "render/redirect/HttpResponse bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-render-redirect"
  ],
  "explanation_uz": "render/redirect/HttpResponse — M07-render-redirect",
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
  "id": "M07-QX85FB08AA",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "render/redirect/HttpResponse oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-render-redirect"
  ],
  "explanation_uz": "render/redirect/HttpResponse — M07-render-redirect",
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
  "id": "M07-QX293C9F02",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "render/redirect/HttpResponse: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-render-redirect"
  ],
  "explanation_uz": "render/redirect/HttpResponse — M07-render-redirect",
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
  "id": "M07-QXAB57EE19",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "kontekst lug'ati uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-context"
  ],
  "explanation_uz": "kontekst lug'ati — M07-context",
  "source_ref": "",
  "distractors": [],
  "options": [
   "kontekst lug'ati",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "kontekst lug'ati"
  ]
 },
 {
  "id": "M07-QX171A50E6",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "kontekst lug'ati bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-context"
  ],
  "explanation_uz": "kontekst lug'ati — M07-context",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M07-context"
  ]
 },
 {
  "id": "M07-QX3DA8967A",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "kontekst lug'ati bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-context"
  ],
  "explanation_uz": "kontekst lug'ati — M07-context",
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
  "id": "M07-QX5DBD16A5",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "kontekst lug'ati oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-context"
  ],
  "explanation_uz": "kontekst lug'ati — M07-context",
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
  "id": "M07-QX4A35BAFD",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "kontekst lug'ati: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-context"
  ],
  "explanation_uz": "kontekst lug'ati — M07-context",
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
  "id": "M07-QX7EF2F851",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — None qaytarish xatosi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-none-return"
  ],
  "explanation_uz": "None qaytarish xatosi — M07-none-return",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07-none-return",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-none-return"
  ]
 },
 {
  "id": "M07-QX6022D9B5",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "None qaytarish xatosi: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-none-return"
  ],
  "explanation_uz": "None qaytarish xatosi — M07-none-return",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "return",
   "None qaytarish xatos"
  ]
 },
 {
  "id": "M07-QX250F5EB1",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "None qaytarish xatosi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-none-return"
  ],
  "explanation_uz": "None qaytarish xatosi — M07-none-return",
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
  "id": "M07-QX1FEB22FE",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "None qaytarish xatosi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-none-return"
  ],
  "explanation_uz": "None qaytarish xatosi — M07-none-return",
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
  "id": "M07-QX7E23B226",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "None qaytarish xatosi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-none-return"
  ],
  "explanation_uz": "None qaytarish xatosi — M07-none-return",
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
  "id": "M07-QX9D52E3E9",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "404 vs matn qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-404"
  ],
  "explanation_uz": "404 vs matn — M07-404",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M07"
  ]
 },
 {
  "id": "M07-QX90D64F3C",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "404 vs matn bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-404"
  ],
  "explanation_uz": "404 vs matn — M07-404",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M07-404"
  ]
 },
 {
  "id": "M07-QXCCD214C8",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "404 vs matn bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-404"
  ],
  "explanation_uz": "404 vs matn — M07-404",
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
  "id": "M07-QXCD0FD073",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "404 vs matn oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-404"
  ],
  "explanation_uz": "404 vs matn — M07-404",
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
  "id": "M07-QX232C1B7C",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "404 vs matn: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-404"
  ],
  "explanation_uz": "404 vs matn — M07-404",
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
  "id": "M07-QX90A8DAB4",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "get_object_or_404 uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-get-object-or-404"
  ],
  "explanation_uz": "get_object_or_404 — M07-get-object-or-404",
  "source_ref": "",
  "distractors": [],
  "options": [
   "get_object_or_404",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "get_object_or_404"
  ]
 },
 {
  "id": "M07-QXA04C5C49",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "get_object_or_404: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-get-object-or-404"
  ],
  "explanation_uz": "get_object_or_404 — M07-get-object-or-404",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "404",
   "get_object_or_404"
  ]
 },
 {
  "id": "M07-QX885D0787",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "get_object_or_404 bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-get-object-or-404"
  ],
  "explanation_uz": "get_object_or_404 — M07-get-object-or-404",
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
  "id": "M07-QX4924ED4F",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "get_object_or_404 oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-get-object-or-404"
  ],
  "explanation_uz": "get_object_or_404 — M07-get-object-or-404",
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
  "id": "M07-QX53B1C2A8",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "get_object_or_404: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-get-object-or-404"
  ],
  "explanation_uz": "get_object_or_404 — M07-get-object-or-404",
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
  "id": "M07-QXCBF04CD4",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — HttpResponse turlari?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-httpresponse"
  ],
  "explanation_uz": "HttpResponse turlari — M07-httpresponse",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07-httpresponse",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-httpresponse"
  ]
 },
 {
  "id": "M07-QX43BCA731",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "HttpResponse turlari bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-httpresponse"
  ],
  "explanation_uz": "HttpResponse turlari — M07-httpresponse",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M07-httpresponse"
  ]
 },
 {
  "id": "M07-QX952F6C1E",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "HttpResponse turlari bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-httpresponse"
  ],
  "explanation_uz": "HttpResponse turlari — M07-httpresponse",
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
  "id": "M07-QX7143E3E3",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "HttpResponse turlari oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-httpresponse"
  ],
  "explanation_uz": "HttpResponse turlari — M07-httpresponse",
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
  "id": "M07-QX8AC27812",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "HttpResponse turlari: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-httpresponse"
  ],
  "explanation_uz": "HttpResponse turlari — M07-httpresponse",
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
  "id": "M07-QX9241D267",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "FBV oqimi qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M07"
  ]
 },
 {
  "id": "M07-QXCB605BC9",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "FBV oqimi: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "fbv",
   "FBV oqimi"
  ]
 },
 {
  "id": "M07-QX2321096D",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "FBV oqimi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
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
  "id": "M07-QXCB6DD531",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "FBV oqimi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
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
  "id": "M07-QXDA762721",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "FBV oqimi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-fbv"
  ],
  "explanation_uz": "FBV oqimi — M07-fbv",
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
  "id": "M07-QX1ED43EFB",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "erta return uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
  "source_ref": "",
  "distractors": [],
  "options": [
   "erta return",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "erta return"
  ]
 },
 {
  "id": "M07-QX45ABCE53",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "erta return bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M07-early-return"
  ]
 },
 {
  "id": "M07-QXA595731A",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "erta return bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
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
  "id": "M07-QX790453B8",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "erta return oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
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
  "id": "M07-QXD5587A1C",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "erta return: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-early-return"
  ],
  "explanation_uz": "erta return — M07-early-return",
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
  "id": "M07-QX401B9B52",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — metod bo'yicha tarmoq?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M07-method-branch",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-method-branch"
  ]
 },
 {
  "id": "M07-QXD58FE1E1",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "metod bo'yicha tarmoq: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "branch",
   "metod bo'yicha tarmo"
  ]
 },
 {
  "id": "M07-QXDFC96D66",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "metod bo'yicha tarmoq bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
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
  "id": "M07-QXFC2F692B",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "metod bo'yicha tarmoq oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
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
  "id": "M07-QX793B0FAC",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "metod bo'yicha tarmoq: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M07-method-branch"
  ],
  "explanation_uz": "metod bo'yicha tarmoq — M07-method-branch",
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
 }
];
