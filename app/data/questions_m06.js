/* questions M06 — P4 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m06 = [
 {
  "id": "M06-Q01",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Django da URL yo'lini qaysi funksiya belgilaydi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "path()",
   "url()",
   "route()",
   "link()"
  ],
  "accepted": [
   "path()"
  ]
 },
 {
  "id": "M06-Q02",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "kitob id si butun son — to'g'ri konvertor?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "<int:id>",
   "<str:id>",
   "<slug:id>",
   "<id>"
  ],
  "accepted": [
   "<int:id>"
  ]
 },
 {
  "id": "M06-Q03",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "book_page uchun path yozing (id int):",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "accepted": [
   "path('book/<int:id>/', book_page)",
   "path(\"book/<int:id>/\", book_page)"
  ]
 },
 {
  "id": "M06-Q04",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "path oxirida / bo'lmasa (APPEND_SLASH)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Django odatda / ga redirect qilishi mumkin",
   "Doim 404",
   "Doim 500",
   "Hech narsa"
  ],
  "accepted": [
   "Django odatda / ga redirect qilishi mumkin"
  ]
 },
 {
  "id": "M06-Q05",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Faqat qaysi path da name= bor (haqiqiy loyiha)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B17: faqat logout nomlangan.",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "logout",
   "login",
   "book-list",
   "signup"
  ],
  "accepted": [
   "logout"
  ]
 },
 {
  "id": "M06-Q06",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Nomlangan URL ga redirect:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "redirect('logout')",
   "return redirect('logout')"
  ]
 },
 {
  "id": "M06-Q07",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "/error/ qanday ulangan?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "TemplateView.as_view(template_name='error.html')",
   "render()",
   "HttpResponse",
   "static"
  ],
  "accepted": [
   "TemplateView.as_view(template_name='error.html')"
  ]
 },
 {
  "id": "M06-Q08",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "URL tartibi muhimmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha, birinchi mos kelgan ishlaydi",
   "Yo'q",
   "Faqat admin",
   "Faqat include"
  ],
  "accepted": [
   "Ha, birinchi mos kelgan ishlaydi"
  ]
 },
 {
  "id": "M06-Q09",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "include() nima uchun?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Boshqa urls modulini ulash",
   "Template",
   "Static",
   "Migrate"
  ],
  "accepted": [
   "Boshqa urls modulini ulash"
  ]
 },
 {
  "id": "M06-Q10",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "BookShop da nechta path (admin bilan)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "PROMPT: 9 ta yo'l (darslikda 7 deb xato).",
  "source_ref": "",
  "distractors": [],
  "options": [
   "9",
   "7",
   "5",
   "12"
  ],
  "accepted": [
   "9"
  ]
 },
 {
  "id": "M06-Q11",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Bosh sahifa path?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
  "distractors": [],
  "options": [
   "path('', index)",
   "path('/', index)",
   "path('home/', index)",
   "path('index/', index)"
  ],
  "accepted": [
   "path('', index)"
  ]
 },
 {
  "id": "M06-Q12",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "<int:id> ga 'abc' kelsa?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Mos kelmaydi (404)",
   "0",
   "Xato 500",
   "'abc'"
  ],
  "accepted": [
   "Mos kelmaydi (404)"
  ]
 },
 {
  "id": "M06-Q20",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'admin/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q21",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'book-list/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q22",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'add-book/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q23",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'login/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q24",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'logout/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q25",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'signup/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q26",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path 'error/' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
  "id": "M06-Q27",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "path '(bo'sh)' loyihada bormi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/urls.py",
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
