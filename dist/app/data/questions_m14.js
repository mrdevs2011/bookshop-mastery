/* M14 savollar — kengaytirilgan */
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
 },
 {
  "id": "M14-QXC5070CFA",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "login_required refaktor qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M14"
  ]
 },
 {
  "id": "M14-QXEE078A18",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "login_required refaktor bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M14-login-required"
  ]
 },
 {
  "id": "M14-QXD9BCEB9E",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "login_required refaktor bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
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
  "id": "M14-QX77636485",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "login_required refaktor oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
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
  "id": "M14-QX5603C23C",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "login_required refaktor: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
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
  "id": "M14-QXA4CD6944",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "get_object_or_404 uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QX754B03BC",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "get_object_or_404: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "object",
   "get_object_or_404"
  ]
 },
 {
  "id": "M14-QXC816A35A",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "get_object_or_404 bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QX0DD03034",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "get_object_or_404 oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QXFA609AF9",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "get_object_or_404: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QXE75AAC99",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — ModelForm?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-modelform"
  ],
  "explanation_uz": "ModelForm — M14-modelform",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14-modelform",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-modelform"
  ]
 },
 {
  "id": "M14-QXEA13CAB6",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "ModelForm bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-modelform"
  ],
  "explanation_uz": "ModelForm — M14-modelform",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M14-modelform"
  ]
 },
 {
  "id": "M14-QX7187D268",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "ModelForm bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-modelform"
  ],
  "explanation_uz": "ModelForm — M14-modelform",
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
  "id": "M14-QX3C804A18",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "ModelForm oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-modelform"
  ],
  "explanation_uz": "ModelForm — M14-modelform",
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
  "id": "M14-QX6D1D48CE",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "ModelForm: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-modelform"
  ],
  "explanation_uz": "ModelForm — M14-modelform",
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
  "id": "M14-QX1437198D",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "ListView/DetailView/CreateView qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-cbv"
  ],
  "explanation_uz": "ListView/DetailView/CreateView — M14-cbv",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M14"
  ]
 },
 {
  "id": "M14-QX97BD28E5",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "ListView/DetailView/CreateView: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-cbv"
  ],
  "explanation_uz": "ListView/DetailView/CreateView — M14-cbv",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "cbv",
   "ListView/DetailView/"
  ]
 },
 {
  "id": "M14-QXB1BDFEB0",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "ListView/DetailView/CreateView bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-cbv"
  ],
  "explanation_uz": "ListView/DetailView/CreateView — M14-cbv",
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
  "id": "M14-QX7C179D43",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "ListView/DetailView/CreateView oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-cbv"
  ],
  "explanation_uz": "ListView/DetailView/CreateView — M14-cbv",
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
  "id": "M14-QX5550DFF5",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "ListView/DetailView/CreateView: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-cbv"
  ],
  "explanation_uz": "ListView/DetailView/CreateView — M14-cbv",
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
  "id": "M14-QX3DE20805",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "base.html uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-base-html"
  ],
  "explanation_uz": "base.html — M14-base-html",
  "source_ref": "",
  "distractors": [],
  "options": [
   "base.html",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "base.html"
  ]
 },
 {
  "id": "M14-QXA1474536",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "base.html bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-base-html"
  ],
  "explanation_uz": "base.html — M14-base-html",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M14-base-html"
  ]
 },
 {
  "id": "M14-QX771C8507",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "base.html bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-base-html"
  ],
  "explanation_uz": "base.html — M14-base-html",
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
  "id": "M14-QX1973C08C",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "base.html oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-base-html"
  ],
  "explanation_uz": "base.html — M14-base-html",
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
  "id": "M14-QXBF0AAD72",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "base.html: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-base-html"
  ],
  "explanation_uz": "base.html — M14-base-html",
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
  "id": "M14-QXAA57EFCF",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — nomlangan URL?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-named-urls"
  ],
  "explanation_uz": "nomlangan URL — M14-named-urls",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14-named-urls",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-named-urls"
  ]
 },
 {
  "id": "M14-QXD672495F",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "nomlangan URL: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-named-urls"
  ],
  "explanation_uz": "nomlangan URL — M14-named-urls",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "urls",
   "nomlangan URL"
  ]
 },
 {
  "id": "M14-QXEA0531BA",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "nomlangan URL bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-named-urls"
  ],
  "explanation_uz": "nomlangan URL — M14-named-urls",
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
  "id": "M14-QXD051C40E",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "nomlangan URL oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-named-urls"
  ],
  "explanation_uz": "nomlangan URL — M14-named-urls",
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
  "id": "M14-QX2A42AF4C",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "nomlangan URL: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-named-urls"
  ],
  "explanation_uz": "nomlangan URL — M14-named-urls",
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
  "id": "M14-QXE14E89B6",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "UniqueConstraint qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-unique"
  ],
  "explanation_uz": "UniqueConstraint — M14-unique",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M14"
  ]
 },
 {
  "id": "M14-QXDCA24857",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "UniqueConstraint bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-unique"
  ],
  "explanation_uz": "UniqueConstraint — M14-unique",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M14-unique"
  ]
 },
 {
  "id": "M14-QX0003F2DA",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "UniqueConstraint bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-unique"
  ],
  "explanation_uz": "UniqueConstraint — M14-unique",
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
  "id": "M14-QXD257BC76",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "UniqueConstraint oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-unique"
  ],
  "explanation_uz": "UniqueConstraint — M14-unique",
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
  "id": "M14-QX41C1C5EA",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "UniqueConstraint: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-unique"
  ],
  "explanation_uz": "UniqueConstraint — M14-unique",
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
  "id": "M14-QX17C0E7D3",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "annotate(Count) uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-annotate-count"
  ],
  "explanation_uz": "annotate(Count) — M14-annotate-count",
  "source_ref": "",
  "distractors": [],
  "options": [
   "annotate(Count)",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "annotate(Count)"
  ]
 },
 {
  "id": "M14-QXAA8CEEF3",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "annotate(Count): kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-annotate-count"
  ],
  "explanation_uz": "annotate(Count) — M14-annotate-count",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "count",
   "annotate(Count)"
  ]
 },
 {
  "id": "M14-QX3AAD52EE",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "annotate(Count) bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-annotate-count"
  ],
  "explanation_uz": "annotate(Count) — M14-annotate-count",
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
  "id": "M14-QXA49D8B55",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "annotate(Count) oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-annotate-count"
  ],
  "explanation_uz": "annotate(Count) — M14-annotate-count",
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
  "id": "M14-QXB3A10508",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "annotate(Count): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-annotate-count"
  ],
  "explanation_uz": "annotate(Count) — M14-annotate-count",
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
  "id": "M14-QX5A023E31",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — sozlamalarni muhitga ajratish?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-env-settings"
  ],
  "explanation_uz": "sozlamalarni muhitga ajratish — M14-env-settings",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14-env-settings",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-env-settings"
  ]
 },
 {
  "id": "M14-QXFF28BD7A",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "sozlamalarni muhitga ajratish bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-env-settings"
  ],
  "explanation_uz": "sozlamalarni muhitga ajratish — M14-env-settings",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M14-env-settings"
  ]
 },
 {
  "id": "M14-QX8998791C",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "sozlamalarni muhitga ajratish bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-env-settings"
  ],
  "explanation_uz": "sozlamalarni muhitga ajratish — M14-env-settings",
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
  "id": "M14-QX879FABFA",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "sozlamalarni muhitga ajratish oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-env-settings"
  ],
  "explanation_uz": "sozlamalarni muhitga ajratish — M14-env-settings",
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
  "id": "M14-QXC423BA7B",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "sozlamalarni muhitga ajratish: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-env-settings"
  ],
  "explanation_uz": "sozlamalarni muhitga ajratish — M14-env-settings",
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
  "id": "M14-QXC8358B28",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "login_required refaktor qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M14"
  ]
 },
 {
  "id": "M14-QX106D02EB",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "login_required refaktor: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "required",
   "login_required refak"
  ]
 },
 {
  "id": "M14-QX9F1D8E34",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "login_required refaktor bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
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
  "id": "M14-QXEDCD0F3C",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "login_required refaktor oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
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
  "id": "M14-QX367F36ED",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "login_required refaktor: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-login-required"
  ],
  "explanation_uz": "login_required refaktor — M14-login-required",
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
  "id": "M14-QXB2AC877A",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "get_object_or_404 uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QXF62FB56D",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "get_object_or_404 bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M14-get-object"
  ]
 },
 {
  "id": "M14-QXCA94A51F",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "get_object_or_404 bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QXAFED872F",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "get_object_or_404 oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QX8F177664",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "get_object_or_404: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-get-object"
  ],
  "explanation_uz": "get_object_or_404 — M14-get-object",
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
  "id": "M14-QXD7299ECF",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — ModelForm?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-modelform"
  ],
  "explanation_uz": "ModelForm — M14-modelform",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M14-modelform",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-modelform"
  ]
 },
 {
  "id": "M14-QX6A746DC5",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "ModelForm: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M14-modelform"
  ],
  "explanation_uz": "ModelForm — M14-modelform",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "modelform",
   "ModelForm"
  ]
 }
];
