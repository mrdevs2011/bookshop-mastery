/* M03 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m03 = [
 {
  "id": "M03-Q01",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book.name?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:8",
  "distractors": [],
  "options": [
   "CharField(max_length=255)",
   "TextField",
   "URLField",
   "SlugField"
  ],
  "accepted": [
   "CharField(max_length=255)"
  ]
 },
 {
  "id": "M03-Q02",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "null=True, blank yo'q — forma?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:11",
  "distractors": [],
  "options": [
   "DB NULL mumkin, forma validatsiyasi alohida",
   "Doim xato",
   "Bo'sh satr",
   "O'chadi"
  ],
  "accepted": [
   "DB NULL mumkin, forma validatsiyasi alohida"
  ]
 },
 {
  "id": "M03-Q03",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "CASCADE user o'chirilsa?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Kitoblari ham o'chadi",
   "Kitoblar qoladi",
   "Xato",
   "Faqat BookView"
  ],
  "accepted": [
   "Kitoblari ham o'chadi"
  ]
 },
 {
  "id": "M03-Q04",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Ko'rishlar soni related manager?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "book.bookview_set.count",
   "book.bookview_set.count()",
   "{{ book.bookview_set.count }}"
  ]
 },
 {
  "id": "M03-Q05",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "__str__ yo'q — admin?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Book object (1)",
   "Book",
   "(bo'sh)",
   "name"
  ],
  "accepted": [
   "Book object (1)"
  ]
 },
 {
  "id": "M03-Q06",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "filter(user=ali) vs user_id?",
  "time_budget": 60,
  "hints": [
   "Ishorat: asosiy qoidani eslang.",
   "Skelet: ___ ni to'ldiring."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Natija bir xil",
   "Birinchisi xato",
   "Ikkinchisi xato",
   "Turli SQL"
  ],
  "accepted": [
   "Natija bir xil"
  ]
 },
 {
  "id": "M03-Q11",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "public maydon turi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:12",
  "distractors": [],
  "options": [
   "BooleanField(default=False)",
   "CharField",
   "IntegerField",
   "DateField"
  ],
  "accepted": [
   "BooleanField(default=False)"
  ]
 },
 {
  "id": "M03-Q12",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "auto_now_add=True nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Yaratilganda sanani avto qo'yadi",
   "Har save da yangilaydi",
   "Null qiladi",
   "Default bugun"
  ],
  "accepted": [
   "Yaratilganda sanani avto qo'yadi"
  ]
 },
 {
  "id": "M03-Q13",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Book → User bog'lanishi (bir qator maydon):",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:10",
  "distractors": [],
  "accepted": [
   "user = models.ForeignKey(User, on_delete=models.CASCADE)"
  ]
 },
 {
  "id": "M03-Q14",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "null=True nima uchun?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "DB da NULL ruxsat",
   "Forma bo'sh bo'lishi",
   "Ikkalasi bir xil",
   "max_length o'rniga"
  ],
  "accepted": [
   "DB da NULL ruxsat"
  ]
 },
 {
  "id": "M03-Q15",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "blank=True nima uchun?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Forma/validatsiyada bo'sh ruxsat",
   "DB NULL",
   "Ikkalasi bir xil",
   "Faqat admin"
  ],
  "accepted": [
   "Forma/validatsiyada bo'sh ruxsat"
  ]
 },
 {
  "id": "M03-Q16",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "public = BooleanField(default=False) — yangi kitob?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "private (False)",
   "public (True)",
   "None",
   "Xato"
  ],
  "accepted": [
   "private (False)"
  ]
 },
 {
  "id": "M03-Q17",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "bookview_set qayerdan keladi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "FK teskari menejer (default)",
   "Qo'lda yozilgan metod",
   "settings",
   "admin"
  ],
  "accepted": [
   "FK teskari menejer (default)"
  ]
 },
 {
  "id": "M03-Q18",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Book uchun __str__ (name qaytarsin):",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "def __str__(self): return self.name",
   "def __str__(self):\n    return self.name"
  ]
 },
 {
  "id": "M03-Q19",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "UniqueConstraint(book, user) nima beradi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "B14.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Bir user bir kitobni bir marta ko'rgan deb hisoblaydi",
   "Tezroq filter",
   "Admin chiroyli",
   "Migratsiya shart emas"
  ],
  "accepted": [
   "Bir user bir kitobni bir marta ko'rgan deb hisoblaydi"
  ]
 },
 {
  "id": "M03-Q20",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "CharField da max_length shartmi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha (Django talab)",
   "Yo'q",
   "Faqat null=True da",
   "Faqat admin da"
  ],
  "accepted": [
   "Ha (Django talab)"
  ]
 },
 {
  "id": "M03-Q30",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book modelida 'name' maydoni bormi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py",
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
  "id": "M03-Q31",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book modelida 'url' maydoni bormi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py",
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
  "id": "M03-Q32",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book modelida 'public' maydoni bormi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py",
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
  "id": "M03-Q33",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book modelida 'user' maydoni bormi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py",
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
  "id": "M03-Q34",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Book modelida 'yaratilgan_sanasi' maydoni bormi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Kod/manbaga qarang."
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py",
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
  "id": "M03-Q40",
  "concepts": [
   "M03-charfield"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "CharField majburiy parametri?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "max_length",
   "null",
   "blank",
   "default"
  ],
  "accepted": [
   "max_length"
  ]
 },
 {
  "id": "M03-Q41",
  "concepts": [
   "M03-boolfield"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "BooleanField default berilmasa?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Default yo'q — ehtiyot",
   "Doim False",
   "Doim True",
   "None"
  ],
  "accepted": [
   "Default yo'q — ehtiyot"
  ]
 },
 {
  "id": "M03-Q42",
  "concepts": [
   "M03-datefield"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "yaratilgan_sanasi turi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "main/models.py:9",
  "distractors": [],
  "options": [
   "DateField(auto_now_add=True)",
   "DateTimeField",
   "CharField",
   "IntegerField"
  ],
  "accepted": [
   "DateField(auto_now_add=True)"
  ]
 },
 {
  "id": "M03-QX57F6593F",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Maydon turlari (Char/Date/Bool/FK) qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fields"
  ],
  "explanation_uz": "Maydon turlari (Char/Date/Bool/FK) — M03-fields",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M03",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M03"
  ]
 },
 {
  "id": "M03-QX39B2E9B5",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "Maydon turlari (Char/Date/Bool/FK) bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fields"
  ],
  "explanation_uz": "Maydon turlari (Char/Date/Bool/FK) — M03-fields",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M03-fields"
  ]
 },
 {
  "id": "M03-QXD52D17C1",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "Maydon turlari (Char/Date/Bool/FK) bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fields"
  ],
  "explanation_uz": "Maydon turlari (Char/Date/Bool/FK) — M03-fields",
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
  "id": "M03-QXE61BA93F",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "Maydon turlari (Char/Date/Bool/FK) oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fields"
  ],
  "explanation_uz": "Maydon turlari (Char/Date/Bool/FK) — M03-fields",
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
  "id": "M03-QXB24191A0",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "Maydon turlari (Char/Date/Bool/FK): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fields"
  ],
  "explanation_uz": "Maydon turlari (Char/Date/Bool/FK) — M03-fields",
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
  "id": "M03-QX9F0BD0EE",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "max_length uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-max-length"
  ],
  "explanation_uz": "max_length — M03-max-length",
  "source_ref": "",
  "distractors": [],
  "options": [
   "max_length",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "max_length"
  ]
 },
 {
  "id": "M03-QXFA03D903",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "max_length: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-max-length"
  ],
  "explanation_uz": "max_length — M03-max-length",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "length",
   "max_length"
  ]
 },
 {
  "id": "M03-QXD2DEA94E",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "max_length bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-max-length"
  ],
  "explanation_uz": "max_length — M03-max-length",
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
  "id": "M03-QXF921B005",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "max_length oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-max-length"
  ],
  "explanation_uz": "max_length — M03-max-length",
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
  "id": "M03-QX21C667F7",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "max_length: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-max-length"
  ],
  "explanation_uz": "max_length — M03-max-length",
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
  "id": "M03-QX2D3CB0C9",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — auto_now_add?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-auto-now-add"
  ],
  "explanation_uz": "auto_now_add — M03-auto-now-add",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M03-auto-now-add",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-auto-now-add"
  ]
 },
 {
  "id": "M03-QX6F0376EE",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "auto_now_add bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-auto-now-add"
  ],
  "explanation_uz": "auto_now_add — M03-auto-now-add",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M03-auto-now-add"
  ]
 },
 {
  "id": "M03-QXA38F20F8",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "auto_now_add bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-auto-now-add"
  ],
  "explanation_uz": "auto_now_add — M03-auto-now-add",
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
  "id": "M03-QX4F7AD657",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "auto_now_add oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-auto-now-add"
  ],
  "explanation_uz": "auto_now_add — M03-auto-now-add",
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
  "id": "M03-QX65472186",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "auto_now_add: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-auto-now-add"
  ],
  "explanation_uz": "auto_now_add — M03-auto-now-add",
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
  "id": "M03-QX687D475F",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "ForeignKey + on_delete=CASCADE qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fk"
  ],
  "explanation_uz": "ForeignKey + on_delete=CASCADE — M03-fk",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M03",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M03"
  ]
 },
 {
  "id": "M03-QX962460BF",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "ForeignKey + on_delete=CASCADE: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fk"
  ],
  "explanation_uz": "ForeignKey + on_delete=CASCADE — M03-fk",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "fk",
   "ForeignKey + on_dele"
  ]
 },
 {
  "id": "M03-QX3CA7D760",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "ForeignKey + on_delete=CASCADE bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fk"
  ],
  "explanation_uz": "ForeignKey + on_delete=CASCADE — M03-fk",
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
  "id": "M03-QX76EC85AE",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "ForeignKey + on_delete=CASCADE oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fk"
  ],
  "explanation_uz": "ForeignKey + on_delete=CASCADE — M03-fk",
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
  "id": "M03-QX9826E43E",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "ForeignKey + on_delete=CASCADE: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-fk"
  ],
  "explanation_uz": "ForeignKey + on_delete=CASCADE — M03-fk",
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
  "id": "M03-QX0589B5D7",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "null vs blank uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-null-blank"
  ],
  "explanation_uz": "null vs blank — M03-null-blank",
  "source_ref": "",
  "distractors": [],
  "options": [
   "null vs blank",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "null vs blank"
  ]
 },
 {
  "id": "M03-QX206C88C0",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "null vs blank bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-null-blank"
  ],
  "explanation_uz": "null vs blank — M03-null-blank",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M03-null-blank"
  ]
 },
 {
  "id": "M03-QX7AFFEE4F",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "null vs blank bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-null-blank"
  ],
  "explanation_uz": "null vs blank — M03-null-blank",
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
  "id": "M03-QX4DDA2A06",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "null vs blank oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-null-blank"
  ],
  "explanation_uz": "null vs blank — M03-null-blank",
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
  "id": "M03-QX1514933F",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "null vs blank: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-null-blank"
  ],
  "explanation_uz": "null vs blank — M03-null-blank",
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
  "id": "M03-QX13B7D236",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — default qiymat?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-default"
  ],
  "explanation_uz": "default qiymat — M03-default",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M03-default",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-default"
  ]
 },
 {
  "id": "M03-QXAA48F2E9",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "default qiymat: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-default"
  ],
  "explanation_uz": "default qiymat — M03-default",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "default",
   "default qiymat"
  ]
 },
 {
  "id": "M03-QX07FCCC66",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "default qiymat bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-default"
  ],
  "explanation_uz": "default qiymat — M03-default",
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
  "id": "M03-QXEC6A8588",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "default qiymat oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-default"
  ],
  "explanation_uz": "default qiymat — M03-default",
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
  "id": "M03-QX2C5B6725",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "default qiymat: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-default"
  ],
  "explanation_uz": "default qiymat — M03-default",
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
  "id": "M03-QX43530659",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "user_id vs user qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-user-id"
  ],
  "explanation_uz": "user_id vs user — M03-user-id",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M03",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M03"
  ]
 },
 {
  "id": "M03-QXCAD81CC5",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "user_id vs user bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-user-id"
  ],
  "explanation_uz": "user_id vs user — M03-user-id",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M03-user-id"
  ]
 },
 {
  "id": "M03-QX1851A45F",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "user_id vs user bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-user-id"
  ],
  "explanation_uz": "user_id vs user — M03-user-id",
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
  "id": "M03-QX37DB0369",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "user_id vs user oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-user-id"
  ],
  "explanation_uz": "user_id vs user — M03-user-id",
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
  "id": "M03-QX07DD0CA7",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "user_id vs user: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-user-id"
  ],
  "explanation_uz": "user_id vs user — M03-user-id",
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
  "id": "M03-QXBA276BDA",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "teskari menejer bookview_set uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-reverse"
  ],
  "explanation_uz": "teskari menejer bookview_set — M03-reverse",
  "source_ref": "",
  "distractors": [],
  "options": [
   "teskari menejer bookview_set",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "teskari menejer bookview_set"
  ]
 },
 {
  "id": "M03-QX546CA9D8",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "teskari menejer bookview_set: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-reverse"
  ],
  "explanation_uz": "teskari menejer bookview_set — M03-reverse",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "reverse",
   "teskari menejer book"
  ]
 },
 {
  "id": "M03-QXF01D319E",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "teskari menejer bookview_set bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-reverse"
  ],
  "explanation_uz": "teskari menejer bookview_set — M03-reverse",
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
  "id": "M03-QX2BFBD8F8",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "teskari menejer bookview_set oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-reverse"
  ],
  "explanation_uz": "teskari menejer bookview_set — M03-reverse",
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
  "id": "M03-QXCDDE465E",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "teskari menejer bookview_set: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-reverse"
  ],
  "explanation_uz": "teskari menejer bookview_set — M03-reverse",
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
  "id": "M03-QX757FD4B3",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — __str__?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-str"
  ],
  "explanation_uz": "__str__ — M03-str",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M03-str",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-str"
  ]
 },
 {
  "id": "M03-QXF682FB4B",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "__str__ bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-str"
  ],
  "explanation_uz": "__str__ — M03-str",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M03-str"
  ]
 },
 {
  "id": "M03-QXED3196FF",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "__str__ bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-str"
  ],
  "explanation_uz": "__str__ — M03-str",
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
  "id": "M03-QX9A937AFC",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "__str__ oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-str"
  ],
  "explanation_uz": "__str__ — M03-str",
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
  "id": "M03-QX48E80274",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "__str__: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-str"
  ],
  "explanation_uz": "__str__ — M03-str",
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
  "id": "M03-QX91FD91B6",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Meta va UniqueConstraint qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-meta"
  ],
  "explanation_uz": "Meta va UniqueConstraint — M03-meta",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M03",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M03"
  ]
 },
 {
  "id": "M03-QXB83ABA53",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "Meta va UniqueConstraint: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-meta"
  ],
  "explanation_uz": "Meta va UniqueConstraint — M03-meta",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "meta",
   "Meta va UniqueConstr"
  ]
 },
 {
  "id": "M03-QX75E6D3FF",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "Meta va UniqueConstraint bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M03-meta"
  ],
  "explanation_uz": "Meta va UniqueConstraint — M03-meta",
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
