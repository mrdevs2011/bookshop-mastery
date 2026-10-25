/* M12 savollar — kengaytirilgan */
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
 },
 {
  "id": "M12-QX05959B72",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "CSRF qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M12"
  ]
 },
 {
  "id": "M12-QX04EC0A9F",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "CSRF bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M12-csrf"
  ]
 },
 {
  "id": "M12-QX8671124D",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "CSRF bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
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
  "id": "M12-QX2BECA374",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "CSRF oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
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
  "id": "M12-QX412E2EC2",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "CSRF: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
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
  "id": "M12-QX9B2DA793",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "XSS/autoescape uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
  "source_ref": "",
  "distractors": [],
  "options": [
   "XSS/autoescape",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "XSS/autoescape"
  ]
 },
 {
  "id": "M12-QX14B39863",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "XSS/autoescape: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "xss",
   "XSS/autoescape"
  ]
 },
 {
  "id": "M12-QX9BA9E189",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "XSS/autoescape bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
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
  "id": "M12-QX3C39267C",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "XSS/autoescape oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
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
  "id": "M12-QX4E034A2B",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "XSS/autoescape: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
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
  "id": "M12-QX18035B73",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — IDOR /book/<id>/?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-idor"
  ],
  "explanation_uz": "IDOR /book/<id>/ — M12-idor",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12-idor",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-idor"
  ]
 },
 {
  "id": "M12-QX63550395",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "IDOR /book/<id>/ bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-idor"
  ],
  "explanation_uz": "IDOR /book/<id>/ — M12-idor",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M12-idor"
  ]
 },
 {
  "id": "M12-QXED95838B",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "IDOR /book/<id>/ bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-idor"
  ],
  "explanation_uz": "IDOR /book/<id>/ — M12-idor",
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
  "id": "M12-QX4988BE38",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "IDOR /book/<id>/ oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-idor"
  ],
  "explanation_uz": "IDOR /book/<id>/ — M12-idor",
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
  "id": "M12-QXB7A732A2",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "IDOR /book/<id>/: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-idor"
  ],
  "explanation_uz": "IDOR /book/<id>/ — M12-idor",
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
  "id": "M12-QX8B07F393",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "user enumeration qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-user-enum"
  ],
  "explanation_uz": "user enumeration — M12-user-enum",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M12"
  ]
 },
 {
  "id": "M12-QXB1F0456B",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "user enumeration: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-user-enum"
  ],
  "explanation_uz": "user enumeration — M12-user-enum",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "enum",
   "user enumeration"
  ]
 },
 {
  "id": "M12-QX9A06A483",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "user enumeration bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-user-enum"
  ],
  "explanation_uz": "user enumeration — M12-user-enum",
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
  "id": "M12-QX639250D5",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "user enumeration oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-user-enum"
  ],
  "explanation_uz": "user enumeration — M12-user-enum",
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
  "id": "M12-QX7A1F81B7",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "user enumeration: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-user-enum"
  ],
  "explanation_uz": "user enumeration — M12-user-enum",
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
  "id": "M12-QX5E107B55",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "DEBUG/ALLOWED_HOSTS/SECRET_KEY uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-debug-hosts"
  ],
  "explanation_uz": "DEBUG/ALLOWED_HOSTS/SECRET_KEY — M12-debug-hosts",
  "source_ref": "",
  "distractors": [],
  "options": [
   "DEBUG/ALLOWED_HOSTS/SECRET_KEY",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "DEBUG/ALLOWED_HOSTS/SECRET_KEY"
  ]
 },
 {
  "id": "M12-QX968D7AE8",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "DEBUG/ALLOWED_HOSTS/SECRET_KEY bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-debug-hosts"
  ],
  "explanation_uz": "DEBUG/ALLOWED_HOSTS/SECRET_KEY — M12-debug-hosts",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M12-debug-hosts"
  ]
 },
 {
  "id": "M12-QX63E631CA",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "DEBUG/ALLOWED_HOSTS/SECRET_KEY bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-debug-hosts"
  ],
  "explanation_uz": "DEBUG/ALLOWED_HOSTS/SECRET_KEY — M12-debug-hosts",
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
  "id": "M12-QXCB4C72A9",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "DEBUG/ALLOWED_HOSTS/SECRET_KEY oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-debug-hosts"
  ],
  "explanation_uz": "DEBUG/ALLOWED_HOSTS/SECRET_KEY — M12-debug-hosts",
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
  "id": "M12-QX10F5D427",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "DEBUG/ALLOWED_HOSTS/SECRET_KEY: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-debug-hosts"
  ],
  "explanation_uz": "DEBUG/ALLOWED_HOSTS/SECRET_KEY — M12-debug-hosts",
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
  "id": "M12-QX9DE2638B",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — GET-logout?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-get-side-effect"
  ],
  "explanation_uz": "GET-logout — M12-get-side-effect",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12-get-side-effect",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-get-side-effect"
  ]
 },
 {
  "id": "M12-QX881146C9",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "GET-logout: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-get-side-effect"
  ],
  "explanation_uz": "GET-logout — M12-get-side-effect",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "effect",
   "GET-logout"
  ]
 },
 {
  "id": "M12-QXBAF49D3E",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "GET-logout bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-get-side-effect"
  ],
  "explanation_uz": "GET-logout — M12-get-side-effect",
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
  "id": "M12-QX0B76D879",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "GET-logout oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-get-side-effect"
  ],
  "explanation_uz": "GET-logout — M12-get-side-effect",
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
  "id": "M12-QX22A6FCAC",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "GET-logout: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-get-side-effect"
  ],
  "explanation_uz": "GET-logout — M12-get-side-effect",
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
  "id": "M12-QXAC8202D8",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "parol siyosati qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-password-policy"
  ],
  "explanation_uz": "parol siyosati — M12-password-policy",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M12"
  ]
 },
 {
  "id": "M12-QX4BAC0A5B",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "parol siyosati bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-password-policy"
  ],
  "explanation_uz": "parol siyosati — M12-password-policy",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M12-password-policy"
  ]
 },
 {
  "id": "M12-QX7E321727",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "parol siyosati bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-password-policy"
  ],
  "explanation_uz": "parol siyosati — M12-password-policy",
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
  "id": "M12-QX03E17861",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "parol siyosati oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-password-policy"
  ],
  "explanation_uz": "parol siyosati — M12-password-policy",
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
  "id": "M12-QX2E21F1F8",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "parol siyosati: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-password-policy"
  ],
  "explanation_uz": "parol siyosati — M12-password-policy",
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
  "id": "M12-QX6112F3E1",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "sirlar gitda uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-secrets-git"
  ],
  "explanation_uz": "sirlar gitda — M12-secrets-git",
  "source_ref": "",
  "distractors": [],
  "options": [
   "sirlar gitda",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "sirlar gitda"
  ]
 },
 {
  "id": "M12-QXD99A8BC5",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "sirlar gitda: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-secrets-git"
  ],
  "explanation_uz": "sirlar gitda — M12-secrets-git",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "git",
   "sirlar gitda"
  ]
 },
 {
  "id": "M12-QX304FDCD6",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "sirlar gitda bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-secrets-git"
  ],
  "explanation_uz": "sirlar gitda — M12-secrets-git",
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
  "id": "M12-QXD5E5A2E0",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "sirlar gitda oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-secrets-git"
  ],
  "explanation_uz": "sirlar gitda — M12-secrets-git",
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
  "id": "M12-QXF175B656",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "sirlar gitda: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-secrets-git"
  ],
  "explanation_uz": "sirlar gitda — M12-secrets-git",
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
  "id": "M12-QX08C1B195",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — XSS kontekstlari?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss-context"
  ],
  "explanation_uz": "XSS kontekstlari — M12-xss-context",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12-xss-context",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-xss-context"
  ]
 },
 {
  "id": "M12-QX58153CF0",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "XSS kontekstlari bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss-context"
  ],
  "explanation_uz": "XSS kontekstlari — M12-xss-context",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M12-xss-context"
  ]
 },
 {
  "id": "M12-QX0A11F2CE",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "XSS kontekstlari bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss-context"
  ],
  "explanation_uz": "XSS kontekstlari — M12-xss-context",
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
  "id": "M12-QX0EC8BDD1",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "XSS kontekstlari oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss-context"
  ],
  "explanation_uz": "XSS kontekstlari — M12-xss-context",
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
  "id": "M12-QX1CCE3E49",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "XSS kontekstlari: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss-context"
  ],
  "explanation_uz": "XSS kontekstlari — M12-xss-context",
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
  "id": "M12-QXA6B56928",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "CSRF qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M12"
  ]
 },
 {
  "id": "M12-QX7917E3DC",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "CSRF: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "csrf",
   "CSRF"
  ]
 },
 {
  "id": "M12-QXC4ECA941",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "CSRF bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
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
  "id": "M12-QX6EB2AF3D",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "CSRF oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
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
  "id": "M12-QX208099BE",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "CSRF: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-csrf"
  ],
  "explanation_uz": "CSRF — M12-csrf",
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
  "id": "M12-QXFE1F5BE4",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "XSS/autoescape uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
  "source_ref": "",
  "distractors": [],
  "options": [
   "XSS/autoescape",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "XSS/autoescape"
  ]
 },
 {
  "id": "M12-QXFD83F4C1",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "XSS/autoescape bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M12-xss"
  ]
 },
 {
  "id": "M12-QX78B3AED5",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "XSS/autoescape bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
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
  "id": "M12-QX152D0613",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "XSS/autoescape oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
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
  "id": "M12-QX9ACCA52C",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "XSS/autoescape: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-xss"
  ],
  "explanation_uz": "XSS/autoescape — M12-xss",
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
  "id": "M12-QX863AE754",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — IDOR /book/<id>/?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M12-idor"
  ],
  "explanation_uz": "IDOR /book/<id>/ — M12-idor",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M12-idor",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-idor"
  ]
 }
];
