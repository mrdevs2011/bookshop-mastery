/* questions M03 — P3 */
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
 }
];
