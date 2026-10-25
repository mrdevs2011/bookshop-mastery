/* questions M09 — P4 */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m09 = [
 {
  "id": "M09-Q01",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Standart foydalanuvchi modeli?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "django.contrib.auth.models.User",
   "main.User",
   "auth.Account",
   "Person"
  ],
  "accepted": [
   "django.contrib.auth.models.User"
  ]
 },
 {
  "id": "M09-Q02",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "set_password nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B07: validatorlar ishlamaydi.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Parolni hash qiladi (saqlamaydi)",
   "DB ga yozadi",
   "Validator ishlatadi",
   "Login qiladi"
  ],
  "accepted": [
   "Parolni hash qiladi (saqlamaydi)"
  ]
 },
 {
  "id": "M09-Q03",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "check_password to'g'ri bo'lsa?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "True",
   "User obyekt",
   "None",
   "login avto"
  ],
  "accepted": [
   "True"
  ]
 },
 {
  "id": "M09-Q04",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "authenticate vs qo'lda get+check_password?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B08.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "authenticate is_active va backend tekshiradi",
   "Bir xil",
   "authenticate sekin",
   "Faqat admin"
  ],
  "accepted": [
   "authenticate is_active va backend tekshiradi"
  ]
 },
 {
  "id": "M09-Q05",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Foydalanuvchini login qilish:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "core/views.py",
  "distractors": [],
  "accepted": [
   "login(request, user)",
   "django_login(request, user)"
  ]
 },
 {
  "id": "M09-Q06",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Anonim foydalanuvchi is_authenticated?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "False",
   "True",
   "None",
   "Xato"
  ],
  "accepted": [
   "False"
  ]
 },
 {
  "id": "M09-Q07",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "@login_required o'rniga loyihada?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B18.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Har viewda if not is_authenticated",
   "Middleware",
   "Faqat urls",
   "Hech narsa"
  ],
  "accepted": [
   "Har viewda if not is_authenticated"
  ]
 },
 {
  "id": "M09-Q08",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "AUTH_PASSWORD_VALIDATORS qachon ishlaydi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B07.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Form / validate_password orqali",
   "set_password da avto",
   "Har login",
   "Hech qachon"
  ],
  "accepted": [
   "Form / validate_password orqali"
  ]
 },
 {
  "id": "M09-Q09",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "is_active=False + qo'lda check_password login?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Kira olishi mumkin (B08)",
   "Hech qachon",
   "Faqat admin",
   "Faqat shell"
  ],
  "accepted": [
   "Kira olishi mumkin (B08)"
  ]
 },
 {
  "id": "M09-Q10",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "logout nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Sessiyani tozalaydi",
   "User ni o'chiradi",
   "Parolni o'chiradi",
   "Cookie ni butunlay bloklaydi"
  ],
  "accepted": [
   "Sessiyani tozalaydi"
  ]
 },
 {
  "id": "M09-Q11",
  "concepts": [
   "M09-messages"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Xato xabar ko'rsatish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "messages.error(request, '...')",
   "print",
   "alert",
   "raise"
  ],
  "accepted": [
   "messages.error(request, '...')"
  ]
 },
 {
  "id": "M09-Q12",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Dekorator bilan himoya:",
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
  "id": "M09-Q20",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "auth da 'login' tushunchasi bormi?",
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
  "id": "M09-Q21",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "auth da 'logout' tushunchasi bormi?",
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
  "id": "M09-Q22",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "auth da 'authenticate' tushunchasi bormi?",
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
  "id": "M09-Q23",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "auth da 'set_password' tushunchasi bormi?",
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
  "id": "M09-Q24",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "auth da 'check_password' tushunchasi bormi?",
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
