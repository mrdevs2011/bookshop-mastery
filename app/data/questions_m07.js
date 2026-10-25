/* questions M07 — P4 */
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
 }
];
