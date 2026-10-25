/* M05 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m05 = [
 {
  "id": "M05-Q01",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "models o'zgargach birinchi?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "makemigrations",
   "migrate",
   "runserver",
   "collectstatic"
  ],
  "accepted": [
   "makemigrations"
  ]
 },
 {
  "id": "M05-Q02",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "Book→nashr→rename→user FK diapazon?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "0001–0004",
   "0001–0002",
   "0005–0008",
   "0003–0007"
  ],
  "accepted": [
   "0001–0004"
  ]
 },
 {
  "id": "M05-Q03",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Rename vs delete+add?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Rename ma'lumotni saqlaydi",
   "Farq yo'q",
   "Rename sekin",
   "delete+add xavfsiz"
  ],
  "accepted": [
   "Rename ma'lumotni saqlaydi"
  ]
 },
 {
  "id": "M05-Q04",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "null=False yangi maydon?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "default yoki null=True kerak",
   "Hech narsa",
   "Avtomatik ''",
   "Doim rad"
  ],
  "accepted": [
   "default yoki null=True kerak"
  ]
 },
 {
  "id": "M05-Q05",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "showmigrations?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Qo'llangan/qo'llanmagan",
   "SQL",
   "Maydonlar",
   "Test"
  ],
  "accepted": [
   "Qo'llangan/qo'llanmagan"
  ]
 },
 {
  "id": "M05-Q11",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "migrate dan oldin?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "makemigrations",
   "runserver",
   "collectstatic",
   "createsuperuser"
  ],
  "accepted": [
   "makemigrations"
  ]
 },
 {
  "id": "M05-Q12",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "sqlmigrate nima ko'rsatadi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Migratsiyaning SQL matni",
   "Python kod",
   "Test",
   "Template"
  ],
  "accepted": [
   "Migratsiyaning SQL matni"
  ]
 },
 {
  "id": "M05-Q13",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Yangi maydon qo'shish operatsiyasi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "AddField",
   "RenameField",
   "RemoveField",
   "AlterField"
  ],
  "accepted": [
   "AddField"
  ]
 },
 {
  "id": "M05-Q14",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Django rename ni qanday sezadi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "makemigrations so'raydi (detection)",
   "Avtomatik doim",
   "Hech qachon",
   "Faqat admin"
  ],
  "accepted": [
   "makemigrations so'raydi (detection)"
  ]
 },
 {
  "id": "M05-Q15",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "RemoveField nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ustunni o'chiradi (ma'lumot yo'qoladi)",
   "Faqat modeldan",
   "Null qiladi",
   "Rename"
  ],
  "accepted": [
   "Ustunni o'chiradi (ma'lumot yo'qoladi)"
  ]
 },
 {
  "id": "M05-Q16",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "BookView qaysi migratsiyada?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "PROMPT: 0008 BookView.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "0008",
   "0001",
   "0004",
   "0006"
  ],
  "accepted": [
   "0008"
  ]
 },
 {
  "id": "M05-Q17",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "public maydon taxminan qaysi migratsiya?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "0006 public (PROMPT §2.2).",
  "source_ref": "",
  "distractors": [],
  "options": [
   "0006",
   "0001",
   "0008",
   "0003"
  ],
  "accepted": [
   "0006"
  ]
 },
 {
  "id": "M05-Q18",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "Mavjud 1000 qator, yangi CharField null=False default yo'q —?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Migratsiya default so'raydi yoki xato",
   "Avtomatik ''",
   "O'chiriladi",
   "Hech narsa"
  ],
  "accepted": [
   "Migratsiya default so'raydi yoki xato"
  ]
 },
 {
  "id": "M05-Q19",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Migratsiyalar bog'liqligi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "depends_on / chiziqli tarix",
   "Tasodifiy",
   "Faqat nom",
   "Git commit"
  ],
  "accepted": [
   "depends_on / chiziqli tarix"
  ]
 },
 {
  "id": "M05-Q20",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[X] belgisi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Qo'llangan",
   "Qo'llanmagan",
   "Xato",
   "O'chirilgan"
  ],
  "accepted": [
   "Qo'llangan"
  ]
 },
 {
  "id": "M05-Q30",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "AlterField nima?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Maydon xususiyatini o'zgartirish",
   "O'chirish",
   "Rename",
   "Yangi model"
  ],
  "accepted": [
   "Maydon xususiyatini o'zgartirish"
  ]
 },
 {
  "id": "M05-Q31",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "squashmigrations maqsadi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ko'p migratsiyani birlashtirish",
   "DB backup",
   "Test",
   "Static"
  ],
  "accepted": [
   "Ko'p migratsiyani birlashtirish"
  ]
 },
 {
  "id": "M05-Q32",
  "concepts": [
   "M05-dependency"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Migratsiya depends_on nima?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Oldingi migratsiyaga bog'liqlik",
   "Git branch",
   "App nomi",
   "Python versiya"
  ],
  "accepted": [
   "Oldingi migratsiyaga bog'liqlik"
  ]
 },
 {
  "id": "M05-QXE74B6301",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "makemigrations vs migrate qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-makemigrations"
  ],
  "explanation_uz": "makemigrations vs migrate — M05-makemigrations",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M05",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M05"
  ]
 },
 {
  "id": "M05-QX55FFDDFF",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "makemigrations vs migrate bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-makemigrations"
  ],
  "explanation_uz": "makemigrations vs migrate — M05-makemigrations",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M05-makemigrations"
  ]
 },
 {
  "id": "M05-QX84CCF29E",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "makemigrations vs migrate bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-makemigrations"
  ],
  "explanation_uz": "makemigrations vs migrate — M05-makemigrations",
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
  "id": "M05-QXDBEEF720",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "makemigrations vs migrate oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-makemigrations"
  ],
  "explanation_uz": "makemigrations vs migrate — M05-makemigrations",
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
  "id": "M05-QXB98FC58E",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "makemigrations vs migrate: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-makemigrations"
  ],
  "explanation_uz": "makemigrations vs migrate — M05-makemigrations",
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
  "id": "M05-QX026D9F89",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "showmigrations uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-showmigrations"
  ],
  "explanation_uz": "showmigrations — M05-showmigrations",
  "source_ref": "",
  "distractors": [],
  "options": [
   "showmigrations",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "showmigrations"
  ]
 },
 {
  "id": "M05-QX412D41A4",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "showmigrations: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-showmigrations"
  ],
  "explanation_uz": "showmigrations — M05-showmigrations",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "showmigrations",
   "showmigrations"
  ]
 },
 {
  "id": "M05-QX02F73F5D",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "showmigrations bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-showmigrations"
  ],
  "explanation_uz": "showmigrations — M05-showmigrations",
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
  "id": "M05-QX97A1D3B5",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "showmigrations oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-showmigrations"
  ],
  "explanation_uz": "showmigrations — M05-showmigrations",
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
  "id": "M05-QX83336F51",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "showmigrations: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-showmigrations"
  ],
  "explanation_uz": "showmigrations — M05-showmigrations",
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
  "id": "M05-QXC1455930",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — sqlmigrate?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-sqlmigrate"
  ],
  "explanation_uz": "sqlmigrate — M05-sqlmigrate",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M05-sqlmigrate",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-sqlmigrate"
  ]
 },
 {
  "id": "M05-QXE60EC894",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "sqlmigrate bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-sqlmigrate"
  ],
  "explanation_uz": "sqlmigrate — M05-sqlmigrate",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M05-sqlmigrate"
  ]
 },
 {
  "id": "M05-QXDAE965BB",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "sqlmigrate bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-sqlmigrate"
  ],
  "explanation_uz": "sqlmigrate — M05-sqlmigrate",
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
  "id": "M05-QX79BCAB1F",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "sqlmigrate oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-sqlmigrate"
  ],
  "explanation_uz": "sqlmigrate — M05-sqlmigrate",
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
  "id": "M05-QX21C1F478",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "sqlmigrate: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-sqlmigrate"
  ],
  "explanation_uz": "sqlmigrate — M05-sqlmigrate",
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
  "id": "M05-QX147A8966",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "AddField qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-add-field"
  ],
  "explanation_uz": "AddField — M05-add-field",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M05",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M05"
  ]
 },
 {
  "id": "M05-QX4ECE6D29",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "AddField: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-add-field"
  ],
  "explanation_uz": "AddField — M05-add-field",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "field",
   "AddField"
  ]
 },
 {
  "id": "M05-QXE9247805",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "AddField bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-add-field"
  ],
  "explanation_uz": "AddField — M05-add-field",
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
  "id": "M05-QX74648928",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "AddField oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-add-field"
  ],
  "explanation_uz": "AddField — M05-add-field",
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
  "id": "M05-QX340FBFE6",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "AddField: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-add-field"
  ],
  "explanation_uz": "AddField — M05-add-field",
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
  "id": "M05-QX33B51849",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "RenameField (detection) uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-rename"
  ],
  "explanation_uz": "RenameField (detection) — M05-rename",
  "source_ref": "",
  "distractors": [],
  "options": [
   "RenameField (detection)",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "RenameField (detection)"
  ]
 },
 {
  "id": "M05-QXE2028C33",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "RenameField (detection) bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-rename"
  ],
  "explanation_uz": "RenameField (detection) — M05-rename",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M05-rename"
  ]
 },
 {
  "id": "M05-QX8EE9B430",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "RenameField (detection) bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-rename"
  ],
  "explanation_uz": "RenameField (detection) — M05-rename",
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
  "id": "M05-QX3F6EFAF0",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "RenameField (detection) oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-rename"
  ],
  "explanation_uz": "RenameField (detection) — M05-rename",
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
  "id": "M05-QX4221DD8A",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "RenameField (detection): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-rename"
  ],
  "explanation_uz": "RenameField (detection) — M05-rename",
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
  "id": "M05-QX080CC6C3",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — AlterField?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-alter"
  ],
  "explanation_uz": "AlterField — M05-alter",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M05-alter",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-alter"
  ]
 },
 {
  "id": "M05-QX4811E0F9",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "AlterField: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-alter"
  ],
  "explanation_uz": "AlterField — M05-alter",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "alter",
   "AlterField"
  ]
 },
 {
  "id": "M05-QX13717CDA",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "AlterField bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-alter"
  ],
  "explanation_uz": "AlterField — M05-alter",
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
  "id": "M05-QX905B2BCB",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "AlterField oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-alter"
  ],
  "explanation_uz": "AlterField — M05-alter",
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
  "id": "M05-QX869D290E",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "AlterField: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-alter"
  ],
  "explanation_uz": "AlterField — M05-alter",
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
  "id": "M05-QX853CE1BB",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "RemoveField qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-remove"
  ],
  "explanation_uz": "RemoveField — M05-remove",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M05",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M05"
  ]
 },
 {
  "id": "M05-QX75881313",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "RemoveField bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-remove"
  ],
  "explanation_uz": "RemoveField — M05-remove",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M05-remove"
  ]
 },
 {
  "id": "M05-QXFF4BAE67",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "RemoveField bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-remove"
  ],
  "explanation_uz": "RemoveField — M05-remove",
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
  "id": "M05-QX1335D9D5",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "RemoveField oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-remove"
  ],
  "explanation_uz": "RemoveField — M05-remove",
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
  "id": "M05-QX1665BC6D",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "RemoveField: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-remove"
  ],
  "explanation_uz": "RemoveField — M05-remove",
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
  "id": "M05-QX4D364436",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Migratsiya bog'liqlik grafi uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-graph"
  ],
  "explanation_uz": "Migratsiya bog'liqlik grafi — M05-graph",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Migratsiya bog'liqlik grafi",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "Migratsiya bog'liqlik grafi"
  ]
 },
 {
  "id": "M05-QX1D72F904",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "Migratsiya bog'liqlik grafi: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-graph"
  ],
  "explanation_uz": "Migratsiya bog'liqlik grafi — M05-graph",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "graph",
   "Migratsiya bog'liqli"
  ]
 },
 {
  "id": "M05-QX02616E94",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "Migratsiya bog'liqlik grafi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-graph"
  ],
  "explanation_uz": "Migratsiya bog'liqlik grafi — M05-graph",
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
  "id": "M05-QXA36E6C17",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "Migratsiya bog'liqlik grafi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-graph"
  ],
  "explanation_uz": "Migratsiya bog'liqlik grafi — M05-graph",
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
  "id": "M05-QX160FA9DD",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "Migratsiya bog'liqlik grafi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-graph"
  ],
  "explanation_uz": "Migratsiya bog'liqlik grafi — M05-graph",
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
  "id": "M05-QXA2DC4CBA",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — null qo'shish va default?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-null-default"
  ],
  "explanation_uz": "null qo'shish va default — M05-null-default",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M05-null-default",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-null-default"
  ]
 },
 {
  "id": "M05-QX75329B0D",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "null qo'shish va default bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-null-default"
  ],
  "explanation_uz": "null qo'shish va default — M05-null-default",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M05-null-default"
  ]
 },
 {
  "id": "M05-QXA6654355",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "null qo'shish va default bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-null-default"
  ],
  "explanation_uz": "null qo'shish va default — M05-null-default",
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
  "id": "M05-QX7574F6BB",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "null qo'shish va default oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-null-default"
  ],
  "explanation_uz": "null qo'shish va default — M05-null-default",
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
  "id": "M05-QX72D1D9B5",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "null qo'shish va default: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-null-default"
  ],
  "explanation_uz": "null qo'shish va default — M05-null-default",
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
  "id": "M05-QXA7001D08",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "0001–0008 tarixi qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-history"
  ],
  "explanation_uz": "0001–0008 tarixi — M05-history",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M05",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M05"
  ]
 },
 {
  "id": "M05-QXA4C128A7",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "0001–0008 tarixi: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-history"
  ],
  "explanation_uz": "0001–0008 tarixi — M05-history",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "history",
   "0001–0008 tarixi"
  ]
 },
 {
  "id": "M05-QXCF15D0C2",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "0001–0008 tarixi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-history"
  ],
  "explanation_uz": "0001–0008 tarixi — M05-history",
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
  "id": "M05-QX51C07EAA",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "0001–0008 tarixi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-history"
  ],
  "explanation_uz": "0001–0008 tarixi — M05-history",
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
  "id": "M05-QX80824F4E",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 3,
  "format": "trace",
  "prompt": "0001–0008 tarixi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-history"
  ],
  "explanation_uz": "0001–0008 tarixi — M05-history",
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
  "id": "M05-QX81A9DC3D",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "squashmigrations uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-squash"
  ],
  "explanation_uz": "squashmigrations — M05-squash",
  "source_ref": "",
  "distractors": [],
  "options": [
   "squashmigrations",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "squashmigrations"
  ]
 },
 {
  "id": "M05-QXA4327813",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "squashmigrations bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-squash"
  ],
  "explanation_uz": "squashmigrations — M05-squash",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M05-squash"
  ]
 },
 {
  "id": "M05-QX66ECB926",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 1,
  "format": "debug",
  "prompt": "squashmigrations bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-squash"
  ],
  "explanation_uz": "squashmigrations — M05-squash",
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
  "id": "M05-QX31FE227E",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 2,
  "format": "order",
  "prompt": "squashmigrations oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M05-squash"
  ],
  "explanation_uz": "squashmigrations — M05-squash",
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
 }
];
