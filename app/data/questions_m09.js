/* M09 savollar — kengaytirilgan */
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
 },
 {
  "id": "M09-QX624C4A42",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "User modeli qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-user"
  ],
  "explanation_uz": "User modeli — M09-user",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M09",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M09"
  ]
 },
 {
  "id": "M09-QX23261732",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "User modeli bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-user"
  ],
  "explanation_uz": "User modeli — M09-user",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M09-user"
  ]
 },
 {
  "id": "M09-QX5182B638",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "User modeli bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-user"
  ],
  "explanation_uz": "User modeli — M09-user",
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
  "id": "M09-QX6059FEB9",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "User modeli oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-user"
  ],
  "explanation_uz": "User modeli — M09-user",
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
  "id": "M09-QXDC5FF892",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "User modeli: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-user"
  ],
  "explanation_uz": "User modeli — M09-user",
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
  "id": "M09-QX589C3FEA",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "set_password hash uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-set-password"
  ],
  "explanation_uz": "set_password hash — M09-set-password",
  "source_ref": "",
  "distractors": [],
  "options": [
   "set_password hash",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "set_password hash"
  ]
 },
 {
  "id": "M09-QX185DF24C",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "set_password hash: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-set-password"
  ],
  "explanation_uz": "set_password hash — M09-set-password",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "password",
   "set_password hash"
  ]
 },
 {
  "id": "M09-QXC1792B22",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "set_password hash bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-set-password"
  ],
  "explanation_uz": "set_password hash — M09-set-password",
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
  "id": "M09-QX7541E73B",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "set_password hash oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-set-password"
  ],
  "explanation_uz": "set_password hash — M09-set-password",
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
  "id": "M09-QXE33CDAB8",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "set_password hash: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-set-password"
  ],
  "explanation_uz": "set_password hash — M09-set-password",
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
  "id": "M09-QXBE4D27FB",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — check_password?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-check-password"
  ],
  "explanation_uz": "check_password — M09-check-password",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M09-check-password",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-check-password"
  ]
 },
 {
  "id": "M09-QX7246E643",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "check_password bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-check-password"
  ],
  "explanation_uz": "check_password — M09-check-password",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M09-check-password"
  ]
 },
 {
  "id": "M09-QXF8973C08",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "check_password bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-check-password"
  ],
  "explanation_uz": "check_password — M09-check-password",
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
  "id": "M09-QX7409C8C2",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "check_password oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-check-password"
  ],
  "explanation_uz": "check_password — M09-check-password",
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
  "id": "M09-QX65240EAC",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "check_password: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-check-password"
  ],
  "explanation_uz": "check_password — M09-check-password",
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
  "id": "M09-QXBC7A93F2",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "login()/logout() qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-logout"
  ],
  "explanation_uz": "login()/logout() — M09-login-logout",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M09",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M09"
  ]
 },
 {
  "id": "M09-QX7683E45F",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "login()/logout(): kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-logout"
  ],
  "explanation_uz": "login()/logout() — M09-login-logout",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "logout",
   "login()/logout()"
  ]
 },
 {
  "id": "M09-QXA5AD53D3",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "login()/logout() bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-logout"
  ],
  "explanation_uz": "login()/logout() — M09-login-logout",
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
  "id": "M09-QX53E012EF",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "login()/logout() oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-logout"
  ],
  "explanation_uz": "login()/logout() — M09-login-logout",
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
  "id": "M09-QXF2D3A4E6",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "login()/logout(): so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-logout"
  ],
  "explanation_uz": "login()/logout() — M09-login-logout",
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
  "id": "M09-QX57E42C32",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "sessiya cookie uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-session-cookie"
  ],
  "explanation_uz": "sessiya cookie — M09-session-cookie",
  "source_ref": "",
  "distractors": [],
  "options": [
   "sessiya cookie",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "sessiya cookie"
  ]
 },
 {
  "id": "M09-QX67C3AC53",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "sessiya cookie bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-session-cookie"
  ],
  "explanation_uz": "sessiya cookie — M09-session-cookie",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M09-session-cookie"
  ]
 },
 {
  "id": "M09-QX3F6D0C3D",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "sessiya cookie bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-session-cookie"
  ],
  "explanation_uz": "sessiya cookie — M09-session-cookie",
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
  "id": "M09-QXAAA0465A",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "sessiya cookie oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-session-cookie"
  ],
  "explanation_uz": "sessiya cookie — M09-session-cookie",
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
  "id": "M09-QXA05A2944",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "sessiya cookie: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-session-cookie"
  ],
  "explanation_uz": "sessiya cookie — M09-session-cookie",
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
  "id": "M09-QXCF8ED458",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — request.user?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-request-user"
  ],
  "explanation_uz": "request.user — M09-request-user",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M09-request-user",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-request-user"
  ]
 },
 {
  "id": "M09-QX2446A8A7",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "request.user: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-request-user"
  ],
  "explanation_uz": "request.user — M09-request-user",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "user",
   "request.user"
  ]
 },
 {
  "id": "M09-QX392957BB",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "request.user bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-request-user"
  ],
  "explanation_uz": "request.user — M09-request-user",
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
  "id": "M09-QX128CC483",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "request.user oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-request-user"
  ],
  "explanation_uz": "request.user — M09-request-user",
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
  "id": "M09-QXF3C2D3F5",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "request.user: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-request-user"
  ],
  "explanation_uz": "request.user — M09-request-user",
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
  "id": "M09-QX74C7275C",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "is_authenticated qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-authenticated"
  ],
  "explanation_uz": "is_authenticated — M09-is-authenticated",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M09",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M09"
  ]
 },
 {
  "id": "M09-QX5F6497E4",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "is_authenticated bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-authenticated"
  ],
  "explanation_uz": "is_authenticated — M09-is-authenticated",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M09-is-authenticated"
  ]
 },
 {
  "id": "M09-QXBCAA2EB4",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "is_authenticated bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-authenticated"
  ],
  "explanation_uz": "is_authenticated — M09-is-authenticated",
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
  "id": "M09-QXCEFA3CD9",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "is_authenticated oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-authenticated"
  ],
  "explanation_uz": "is_authenticated — M09-is-authenticated",
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
  "id": "M09-QXF813559E",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "is_authenticated: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-authenticated"
  ],
  "explanation_uz": "is_authenticated — M09-is-authenticated",
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
  "id": "M09-QX3D04833A",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "authenticate vs qo'lda uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-authenticate"
  ],
  "explanation_uz": "authenticate vs qo'lda — M09-authenticate",
  "source_ref": "",
  "distractors": [],
  "options": [
   "authenticate vs qo'lda",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "authenticate vs qo'lda"
  ]
 },
 {
  "id": "M09-QX1B069759",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "authenticate vs qo'lda: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-authenticate"
  ],
  "explanation_uz": "authenticate vs qo'lda — M09-authenticate",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "authenticate",
   "authenticate vs qo'l"
  ]
 },
 {
  "id": "M09-QXE1FF7770",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "authenticate vs qo'lda bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-authenticate"
  ],
  "explanation_uz": "authenticate vs qo'lda — M09-authenticate",
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
  "id": "M09-QXF3CB1024",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "authenticate vs qo'lda oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-authenticate"
  ],
  "explanation_uz": "authenticate vs qo'lda — M09-authenticate",
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
  "id": "M09-QXBD6309C6",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "authenticate vs qo'lda: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-authenticate"
  ],
  "explanation_uz": "authenticate vs qo'lda — M09-authenticate",
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
  "id": "M09-QX3E4EE23F",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — is_active?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-active"
  ],
  "explanation_uz": "is_active — M09-is-active",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M09-is-active",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-is-active"
  ]
 },
 {
  "id": "M09-QXCC56B8CB",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "is_active bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-active"
  ],
  "explanation_uz": "is_active — M09-is-active",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M09-is-active"
  ]
 },
 {
  "id": "M09-QX13B85ADC",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "is_active bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-active"
  ],
  "explanation_uz": "is_active — M09-is-active",
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
  "id": "M09-QXE370D42A",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "is_active oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-active"
  ],
  "explanation_uz": "is_active — M09-is-active",
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
  "id": "M09-QXDD9D9314",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "is_active: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-is-active"
  ],
  "explanation_uz": "is_active — M09-is-active",
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
  "id": "M09-QX9AE16E9F",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "parol validatorlari qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-validators"
  ],
  "explanation_uz": "parol validatorlari — M09-validators",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M09",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M09"
  ]
 },
 {
  "id": "M09-QX02FF24DC",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "parol validatorlari: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-validators"
  ],
  "explanation_uz": "parol validatorlari — M09-validators",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "validators",
   "parol validatorlari"
  ]
 },
 {
  "id": "M09-QX0B8A5192",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "parol validatorlari bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-validators"
  ],
  "explanation_uz": "parol validatorlari — M09-validators",
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
  "id": "M09-QX59273048",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "parol validatorlari oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-validators"
  ],
  "explanation_uz": "parol validatorlari — M09-validators",
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
  "id": "M09-QX8D74A127",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "parol validatorlari: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-validators"
  ],
  "explanation_uz": "parol validatorlari — M09-validators",
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
  "id": "M09-QX3CD08B9E",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "login_required uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-required"
  ],
  "explanation_uz": "login_required — M09-login-required",
  "source_ref": "",
  "distractors": [],
  "options": [
   "login_required",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "login_required"
  ]
 },
 {
  "id": "M09-QXC72136A4",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "login_required bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-required"
  ],
  "explanation_uz": "login_required — M09-login-required",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M09-login-required"
  ]
 },
 {
  "id": "M09-QX914B514F",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "login_required bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-required"
  ],
  "explanation_uz": "login_required — M09-login-required",
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
  "id": "M09-QX103BDE62",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 1,
  "format": "order",
  "prompt": "login_required oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-required"
  ],
  "explanation_uz": "login_required — M09-login-required",
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
  "id": "M09-QXAE74413C",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 2,
  "format": "trace",
  "prompt": "login_required: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M09-login-required"
  ],
  "explanation_uz": "login_required — M09-login-required",
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
 }
];
