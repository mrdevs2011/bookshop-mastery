/* M04 savollar — kengaytirilgan */
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
 },
 {
  "id": "M04-QXB7815FB3",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "get / filter / exclude qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-filter"
  ],
  "explanation_uz": "get / filter / exclude — M04-get-filter",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M04",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M04"
  ]
 },
 {
  "id": "M04-QX04E6E2C4",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "get / filter / exclude bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-filter"
  ],
  "explanation_uz": "get / filter / exclude — M04-get-filter",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M04-get-filter"
  ]
 },
 {
  "id": "M04-QXABBAAABA",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "get / filter / exclude bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-filter"
  ],
  "explanation_uz": "get / filter / exclude — M04-get-filter",
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
  "id": "M04-QX1139DDD9",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "get / filter / exclude oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-filter"
  ],
  "explanation_uz": "get / filter / exclude — M04-get-filter",
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
  "id": "M04-QX73C80625",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "get / filter / exclude: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-filter"
  ],
  "explanation_uz": "get / filter / exclude — M04-get-filter",
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
  "id": "M04-QXD89115BA",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "order_by / count / exists uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-count"
  ],
  "explanation_uz": "order_by / count / exists — M04-order-count",
  "source_ref": "",
  "distractors": [],
  "options": [
   "order_by / count / exists",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "order_by / count / exists"
  ]
 },
 {
  "id": "M04-QXB2119847",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "order_by / count / exists: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-count"
  ],
  "explanation_uz": "order_by / count / exists — M04-order-count",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "count",
   "order_by / count / e"
  ]
 },
 {
  "id": "M04-QX3EB7CB47",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "order_by / count / exists bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-count"
  ],
  "explanation_uz": "order_by / count / exists — M04-order-count",
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
  "id": "M04-QX31D7B3FB",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "order_by / count / exists oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-count"
  ],
  "explanation_uz": "order_by / count / exists — M04-order-count",
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
  "id": "M04-QX59FDEA40",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "order_by / count / exists: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-count"
  ],
  "explanation_uz": "order_by / count / exists — M04-order-count",
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
  "id": "M04-QX4F21EC93",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — get_or_create?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-or-create"
  ],
  "explanation_uz": "get_or_create — M04-get-or-create",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M04-get-or-create",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-get-or-create"
  ]
 },
 {
  "id": "M04-QX870F0877",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "get_or_create bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-or-create"
  ],
  "explanation_uz": "get_or_create — M04-get-or-create",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M04-get-or-create"
  ]
 },
 {
  "id": "M04-QXAC3BDDEB",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "get_or_create bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-or-create"
  ],
  "explanation_uz": "get_or_create — M04-get-or-create",
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
  "id": "M04-QXA22869E0",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "get_or_create oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-or-create"
  ],
  "explanation_uz": "get_or_create — M04-get-or-create",
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
  "id": "M04-QXF98366DA",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "get_or_create: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-get-or-create"
  ],
  "explanation_uz": "get_or_create — M04-get-or-create",
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
  "id": "M04-QX030E5DA7",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "DoesNotExist qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-does-not-exist"
  ],
  "explanation_uz": "DoesNotExist — M04-does-not-exist",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M04",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M04"
  ]
 },
 {
  "id": "M04-QXAB4EA83D",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "DoesNotExist: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-does-not-exist"
  ],
  "explanation_uz": "DoesNotExist — M04-does-not-exist",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "exist",
   "DoesNotExist"
  ]
 },
 {
  "id": "M04-QX7FA1168F",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "DoesNotExist bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-does-not-exist"
  ],
  "explanation_uz": "DoesNotExist — M04-does-not-exist",
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
  "id": "M04-QX58153E0A",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "DoesNotExist oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-does-not-exist"
  ],
  "explanation_uz": "DoesNotExist — M04-does-not-exist",
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
  "id": "M04-QX618F7543",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "DoesNotExist: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-does-not-exist"
  ],
  "explanation_uz": "DoesNotExist — M04-does-not-exist",
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
  "id": "M04-QX692E67BB",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Lazy QuerySet uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-lazy"
  ],
  "explanation_uz": "Lazy QuerySet — M04-lazy",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Lazy QuerySet",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "Lazy QuerySet"
  ]
 },
 {
  "id": "M04-QX62984727",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "Lazy QuerySet bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-lazy"
  ],
  "explanation_uz": "Lazy QuerySet — M04-lazy",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M04-lazy"
  ]
 },
 {
  "id": "M04-QX8071F7DF",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "Lazy QuerySet bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-lazy"
  ],
  "explanation_uz": "Lazy QuerySet — M04-lazy",
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
  "id": "M04-QXF7DBE0DB",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "Lazy QuerySet oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-lazy"
  ],
  "explanation_uz": "Lazy QuerySet — M04-lazy",
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
  "id": "M04-QX7F2EAEB8",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "Lazy QuerySet: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-lazy"
  ],
  "explanation_uz": "Lazy QuerySet — M04-lazy",
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
  "id": "M04-QX481C10F4",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — order_by('-id')?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-id"
  ],
  "explanation_uz": "order_by('-id') — M04-order-id",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M04-order-id",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-order-id"
  ]
 },
 {
  "id": "M04-QX50C41DB3",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "order_by('-id'): kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-id"
  ],
  "explanation_uz": "order_by('-id') — M04-order-id",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "id",
   "order_by('-id')"
  ]
 },
 {
  "id": "M04-QX968FE576",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "order_by('-id') bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-id"
  ],
  "explanation_uz": "order_by('-id') — M04-order-id",
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
  "id": "M04-QX7AE0A34A",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "order_by('-id') oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-id"
  ],
  "explanation_uz": "order_by('-id') — M04-order-id",
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
  "id": "M04-QX42BD44C0",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "order_by('-id'): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-order-id"
  ],
  "explanation_uz": "order_by('-id') — M04-order-id",
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
  "id": "M04-QXFC83B613",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Q obyektlari qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-q"
  ],
  "explanation_uz": "Q obyektlari — M04-q",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M04",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M04"
  ]
 },
 {
  "id": "M04-QX8E34FF9A",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "Q obyektlari bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-q"
  ],
  "explanation_uz": "Q obyektlari — M04-q",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M04-q"
  ]
 },
 {
  "id": "M04-QX8DC206C3",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "Q obyektlari bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-q"
  ],
  "explanation_uz": "Q obyektlari — M04-q",
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
  "id": "M04-QXE250F58E",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "Q obyektlari oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-q"
  ],
  "explanation_uz": "Q obyektlari — M04-q",
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
  "id": "M04-QX003AD978",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "Q obyektlari: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-q"
  ],
  "explanation_uz": "Q obyektlari — M04-q",
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
  "id": "M04-QX86473E79",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "select_related uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-select-related"
  ],
  "explanation_uz": "select_related — M04-select-related",
  "source_ref": "",
  "distractors": [],
  "options": [
   "select_related",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "select_related"
  ]
 },
 {
  "id": "M04-QXFF742AC6",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "select_related: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-select-related"
  ],
  "explanation_uz": "select_related — M04-select-related",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "related",
   "select_related"
  ]
 },
 {
  "id": "M04-QX67C4FA3E",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "select_related bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-select-related"
  ],
  "explanation_uz": "select_related — M04-select-related",
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
  "id": "M04-QXF3D84CD0",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "select_related oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-select-related"
  ],
  "explanation_uz": "select_related — M04-select-related",
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
  "id": "M04-QX0959500B",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "select_related: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-select-related"
  ],
  "explanation_uz": "select_related — M04-select-related",
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
  "id": "M04-QX9A0C0BD4",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — prefetch_related?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-prefetch"
  ],
  "explanation_uz": "prefetch_related — M04-prefetch",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M04-prefetch",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-prefetch"
  ]
 },
 {
  "id": "M04-QX5A5808F4",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "prefetch_related bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-prefetch"
  ],
  "explanation_uz": "prefetch_related — M04-prefetch",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M04-prefetch"
  ]
 },
 {
  "id": "M04-QXFC460DD9",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "prefetch_related bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M04-prefetch"
  ],
  "explanation_uz": "prefetch_related — M04-prefetch",
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
