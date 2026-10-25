/* questions M14 — P5 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m14 = [
 {
  "id": "M14-Q01",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Takroriy auth tekshiruv o'rniga?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B18.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "@login_required",
   "Middleware o'chirish",
   "Faqat urls",
   "Frontend"
  ],
  "accepted": [
   "@login_required"
  ]
 },
 {
  "id": "M14-Q02",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "try/except DoesNotExist o'rniga?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B09.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "get_object_or_404",
   "Book.objects.all()",
   "filter().first()",
   "HttpResponse"
  ],
  "accepted": [
   "get_object_or_404"
  ]
 },
 {
  "id": "M14-Q03",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "ModelForm nima beradi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Model asosida forma + validatsiya",
   "Faqat HTML",
   "Faqat admin",
   "Migratsiya"
  ],
  "accepted": [
   "Model asosida forma + validatsiya"
  ]
 },
 {
  "id": "M14-Q04",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Ro'yxat uchun CBV?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "ListView",
   "DetailView",
   "CreateView",
   "TemplateView"
  ],
  "accepted": [
   "ListView"
  ]
 },
 {
  "id": "M14-Q05",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Takroriy style yechimi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B19.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "base.html + extends",
   "Har faylda copy",
   "inline JS",
   "CDN majburiy"
  ],
  "accepted": [
   "base.html + extends"
  ]
 },
 {
  "id": "M14-Q06",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qattiq URL o'rniga?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B17.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "name= + reverse/redirect('name')",
   "Faqat path string",
   "Absolute URL",
   "Hardcode OK"
  ],
  "accepted": [
   "name= + reverse/redirect('name')"
  ]
 },
 {
  "id": "M14-Q07",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "BookView dublikatini to'sish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B14.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "UniqueConstraint(book, user)",
   "unique=True faqat book",
   "Faqat get_or_create",
   "Hech narsa"
  ],
  "accepted": [
   "UniqueConstraint(book, user)"
  ]
 },
 {
  "id": "M14-Q08",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "N+1 count yechimi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B10.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "annotate(Count(...))",
   "prefetch faqat",
   "select_related count",
   "cache template"
  ],
  "accepted": [
   "annotate(Count(...))"
  ]
 },
 {
  "id": "M14-Q09",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "SECRET_KEY qayerda bo'lishi kerak?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B20.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Muhit o'zgaruvchisi",
   "Git ichida",
   "Template",
   "urls.py"
  ],
  "accepted": [
   "Muhit o'zgaruvchisi"
  ]
 },
 {
  "id": "M14-Q10",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "login_required dekoratori:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "@login_required",
   "@login_required(login_url='/login/')"
  ]
 },
 {
  "id": "M14-Q20",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "ListView Django CBV mi?",
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
  "id": "M14-Q21",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "DetailView Django CBV mi?",
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
  "id": "M14-Q22",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "CreateView Django CBV mi?",
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
  "id": "M14-Q23",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "UpdateView Django CBV mi?",
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
  "id": "M14-Q24",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "DeleteView Django CBV mi?",
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
