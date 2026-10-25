/* questions M04 — P3 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m04 = [
 {
  "id": "M04-Q01",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "filter() SQL yuboradi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [
   {
    "text": "Ha",
    "misconception": "MC-qs-immediate",
    "why_tempting": "chaqirildi",
    "why_wrong": "lazy"
   }
  ],
  "options": [
   "Yo'q, lazy",
   "Ha",
   "Faqat DEBUG",
   "Faqat count"
  ],
  "accepted": [
   "Yo'q, lazy"
  ]
 },
 {
  "id": "M04-Q02",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "20 kitob × count — SQL?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "main/templates/books-list.html",
  "distractors": [],
  "options": [
   "21 (1+20)",
   "1",
   "20",
   "2"
  ],
  "accepted": [
   "21 (1+20)"
  ]
 },
 {
  "id": "M04-Q03",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "annotate bilan N+1 tuzatish:",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "Book.objects.filter(public=True).annotate(vc=Count('bookview'))",
   "Book.objects.annotate(vc=Count('bookview')).filter(public=True)"
  ]
 },
 {
  "id": "M04-Q04",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "get_or_create qaytaradi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "(object, created)",
   "faqat object",
   "faqat bool",
   "QuerySet"
  ],
  "accepted": [
   "(object, created)"
  ]
 },
 {
  "id": "M04-Q05",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "UniqueConstraint yo'q — xavf?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Poyga dublikat",
   "Hech qanday",
   "Sekin",
   "Faqat PG"
  ],
  "accepted": [
   "Poyga dublikat"
  ]
 },
 {
  "id": "M04-Q06",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "Eng yangi tartib:",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py:24",
  "distractors": [],
  "accepted": [
   "Book.objects.order_by('-id')"
  ]
 },
 {
  "id": "M04-Q11",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "get() 0 qator topilsa?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "DoesNotExist",
   "None",
   "[]",
   "False"
  ],
  "accepted": [
   "DoesNotExist"
  ]
 },
 {
  "id": "M04-Q12",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "get() 2+ qator topilsa?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "MultipleObjectsReturned",
   "birinchisini",
   "list",
   "xato yo'q"
  ],
  "accepted": [
   "MultipleObjectsReturned"
  ]
 },
 {
  "id": "M04-Q13",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Ali ning kitoblari:",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "Book.objects.filter(user=ali)",
   "Book.objects.filter(user_id=ali.id)"
  ]
 },
 {
  "id": "M04-Q14",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "qs.count() nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "SQL COUNT, butun QS ni yuklamaydi",
   "list qilib len",
   "Faqat cache",
   "Hech narsa"
  ],
  "accepted": [
   "SQL COUNT, butun QS ni yuklamaydi"
  ]
 },
 {
  "id": "M04-Q15",
  "concepts": [
   "M04-exists"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "exists() vs count()?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "exists LIMIT 1, odatda arzonroq",
   "Bir xil",
   "exists sekinroq",
   "exists list qiladi"
  ],
  "accepted": [
   "exists LIMIT 1, odatda arzonroq"
  ]
 },
 {
  "id": "M04-Q16",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "list(qs) dan keyin yana list(qs)?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Cache dan, ikkinchi SQL yo'q (odatiy)",
   "Yana SQL",
   "Xato",
   "Faqat DEBUG"
  ],
  "accepted": [
   "Cache dan, ikkinchi SQL yo'q (odatiy)"
  ]
 },
 {
  "id": "M04-Q17",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "select_related('user') nima uchun?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "FK ni JOIN bilan birga olish (N+1 yo'q)",
   "M2M uchun",
   "Faqat count",
   "Delete uchun"
  ],
  "accepted": [
   "FK ni JOIN bilan birga olish (N+1 yo'q)"
  ]
 },
 {
  "id": "M04-Q18",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "prefetch_related qachon?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "reverse FK / M2M",
   "Faqat OneToOne",
   "Faqat count",
   "Faqat admin"
  ],
  "accepted": [
   "reverse FK / M2M"
  ]
 },
 {
  "id": "M04-Q19",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "Har kitobga ko'rishlar soni annotate:",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "Book.objects.annotate(vc=Count('bookview'))",
   "Book.objects.annotate(bookview_count=Count('bookview'))"
  ]
 },
 {
  "id": "M04-Q20",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "Shablonda {{ book.user.username }} 50 kitob — muammo?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "select_related('user') yechim.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "N+1 (har biri alohida user)",
   "1 SQL",
   "Xato",
   "Faqat admin"
  ],
  "accepted": [
   "N+1 (har biri alohida user)"
  ]
 },
 {
  "id": "M04-Q21",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "public yoki o'z kitobi (Q):",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "Book.objects.filter(Q(public=True) | Q(user=request.user))",
   "Book.objects.filter(Q(public=True) | Q(user_id=request.user.id))"
  ]
 },
 {
  "id": "M04-Q22",
  "concepts": [
   "M04-shell"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "ORM ni sinash uchun?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "python manage.py shell",
   "migrate",
   "runserver",
   "test"
  ],
  "accepted": [
   "python manage.py shell"
  ]
 },
 {
  "id": "BUG-B10",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "bookview_set.count har kartochkada — muammo?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "Haqiqiy kamchilik B10.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "N+1 SQL",
   "Hech qanday muammo",
   "Faqat DEBUG da",
   "Faqat admin da"
  ],
  "accepted": [
   "N+1 SQL"
  ]
 },
 {
  "id": "M04-Q30",
  "concepts": [
   "M04-values"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "values_list('id', flat=True) nima qaytaradi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "id lar ro'yxati (tekis)",
   "dict lar",
   "Model obyektlari",
   "SQL matn"
  ],
  "accepted": [
   "id lar ro'yxati (tekis)"
  ]
 },
 {
  "id": "M04-Q31",
  "concepts": [
   "M04-exclude"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "exclude(public=True) nima?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "public=True bo'lmaganlar",
   "Faqat public",
   "Bo'sh",
   "Xato"
  ],
  "accepted": [
   "public=True bo'lmaganlar"
  ]
 },
 {
  "id": "M04-Q32",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Book.DoesNotExist qachon?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "get() topilmasa",
   "filter() bo'sh",
   "delete dan keyin",
   "doim"
  ],
  "accepted": [
   "get() topilmasa"
  ]
 },
 {
  "id": "M04-Q40",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "QuerySet.filter mavjudmi?",
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
  "id": "M04-Q41",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "QuerySet.exclude mavjudmi?",
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
  "id": "M04-Q42",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "QuerySet.order_by mavjudmi?",
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
  "id": "M04-Q43",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "QuerySet.count mavjudmi?",
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
  "id": "M04-Q44",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "QuerySet.exists mavjudmi?",
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
  "id": "M04-Q45",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "QuerySet.get mavjudmi?",
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
  "id": "M04-Q46",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "QuerySet.annotate mavjudmi?",
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
