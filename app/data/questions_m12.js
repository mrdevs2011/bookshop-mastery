/* questions M12 — P4 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m12 = [
 {
  "id": "M12-Q01",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "CSRF middleware yo'q —?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B05.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Begona sayt POST qila oladi",
   "Hech narsa",
   "Faqat GET xavfli",
   "Static buziladi"
  ],
  "accepted": [
   "Begona sayt POST qila oladi"
  ]
 },
 {
  "id": "M12-Q02",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Avto-escape nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "HTML maxsus belgilarini escape",
   "SQL inject to'sadi",
   "CSRF",
   "Parol hash"
  ],
  "accepted": [
   "HTML maxsus belgilarini escape"
  ]
 },
 {
  "id": "M12-Q03",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "/book/<id>/ IDOR xavfi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Boshqa user private kitobini ko'rishga urinish",
   "Faqat public",
   "CSRF",
   "XSS"
  ],
  "accepted": [
   "Boshqa user private kitobini ko'rishga urinish"
  ]
 },
 {
  "id": "M12-Q04",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "DEBUG=True prod da?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B20.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Traceback/sozlamalar oshkor",
   "Yaxshi",
   "Majburiy",
   "Tezroq"
  ],
  "accepted": [
   "Traceback/sozlamalar oshkor"
  ]
 },
 {
  "id": "M12-Q05",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "GET /logout/ xavfi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B06.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "<img src> bilan majburan chiqish",
   "Hech narsa",
   "Faqat POST xavfli",
   "Cookie o'g'irlash"
  ],
  "accepted": [
   "<img src> bilan majburan chiqish"
  ]
 },
 {
  "id": "M12-Q06",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "SECRET_KEY gitda?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Xavfli — oshkor",
   "Yaxshi amaliyot",
   "Majburiy",
   "Faqat private repo OK"
  ],
  "accepted": [
   "Xavfli — oshkor"
  ]
 },
 {
  "id": "M12-Q07",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Parol '1' o'tishi mumkinmi (haqiqiy signup)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B07.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha (validatorlar ishlamaydi)",
   "Yo'q",
   "Faqat admin",
   "Faqat shell"
  ],
  "accepted": [
   "Ha (validatorlar ishlamaydi)"
  ]
 },
 {
  "id": "M12-Q08",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Login da 'user yo'q' vs 'parol xato' alohida?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "User enumeration xavfi",
   "Yaxshi UX majburiy",
   "CSRF",
   "Hech narsa"
  ],
  "accepted": [
   "User enumeration xavfi"
  ]
 },
 {
  "id": "M12-Q09",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Formaga CSRF token:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "{% csrf_token %}"
  ]
 },
 {
  "id": "M12-Q10",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "ALLOWED_HOSTS=['*']?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Har qanday Host — xavfli",
   "Xavfsiz",
   "Django default",
   "Faqat local"
  ],
  "accepted": [
   "Har qanday Host — xavfli"
  ]
 },
 {
  "id": "M12-BUG-B05",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "B05 haqiqiy kamchilik sifatida ro'yxatdami?",
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
  "id": "M12-BUG-B06",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "B06 haqiqiy kamchilik sifatida ro'yxatdami?",
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
  "id": "M12-BUG-B07",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "B07 haqiqiy kamchilik sifatida ro'yxatdami?",
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
  "id": "M12-BUG-B08",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "B08 haqiqiy kamchilik sifatida ro'yxatdami?",
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
  "id": "M12-BUG-B09",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "B09 haqiqiy kamchilik sifatida ro'yxatdami?",
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
  "id": "M12-BUG-B20",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "B20 haqiqiy kamchilik sifatida ro'yxatdami?",
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
