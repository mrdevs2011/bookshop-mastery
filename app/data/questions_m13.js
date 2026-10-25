/* M13 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m13 = [
 {
  "id": "M13-Q01",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Django testlar qaysi klassdan meros oladi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "TestCase",
   "unittest.Test",
   "pytest.Case",
   "Client"
  ],
  "accepted": [
   "TestCase"
  ]
 },
 {
  "id": "M13-Q02",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "HTTP so'rovni testlash uchun?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "django.test.Client",
   "requests.get",
   "curl",
   "Browser"
  ],
  "accepted": [
   "django.test.Client"
  ]
 },
 {
  "id": "M13-Q03",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Redirect ni tekshirish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "assertRedirects",
   "assertEqual",
   "assertTrue",
   "assertContains"
  ],
  "accepted": [
   "assertRedirects"
  ]
 },
 {
  "id": "M13-Q04",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "HTML matn borligini?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "assertContains",
   "assertRedirects",
   "assertHTML",
   "assertText"
  ],
  "accepted": [
   "assertContains"
  ]
 },
 {
  "id": "M13-Q05",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Test DB haqida to'g'ri?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Har test uchun alohida/toza muhit",
   "Prod DB ishlatiladi",
   "migrate shart emas",
   "Faqat sqlite in-memory majburiy"
  ],
  "accepted": [
   "Har test uchun alohida/toza muhit"
  ]
 },
 {
  "id": "M13-Q06",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "main/tests.py hozir?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B22.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Bo'sh (B22)",
   "15+ test",
   "Faqat admin",
   "Faqat models"
  ],
  "accepted": [
   "Bo'sh (B22)"
  ]
 },
 {
  "id": "M13-Q07",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Anonim GET /book-list/ redirect tekshiruv (1 gap g'oya):",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "self.client.get('/book-list/') keyin assertRedirects",
   "client.get + assertRedirects"
  ]
 },
 {
  "id": "M13-Q08",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "setUp nima uchun?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Har testdan oldin tayyorgarlik",
   "Faqat bir marta",
   "O'chirish",
   "Migrate"
  ],
  "accepted": [
   "Har testdan oldin tayyorgarlik"
  ]
 },
 {
  "id": "M13-Q09",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "Login qilib so'rov?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "client.login(username=..., password=...)",
   "client.auth()",
   "session.login",
   "force_login faqat"
  ],
  "accepted": [
   "client.login(username=..., password=...)"
  ]
 },
 {
  "id": "M13-Q10",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Kamida nechta test tavsiya (PROMPT)?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "15+",
   "1",
   "5",
   "100"
  ],
  "accepted": [
   "15+"
  ]
 },
 {
  "id": "M13-Q20",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "assertEqual unittest/Django da bormi?",
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
  "id": "M13-Q21",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "assertTrue unittest/Django da bormi?",
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
  "id": "M13-Q22",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "assertFalse unittest/Django da bormi?",
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
  "id": "M13-Q23",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "assertIn unittest/Django da bormi?",
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
  "id": "M13-Q24",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "assertRaises unittest/Django da bormi?",
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
  "id": "M13-QX45258B3A",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "TestCase qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M13"
  ]
 },
 {
  "id": "M13-QXDE648C14",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "TestCase bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M13-testcase"
  ]
 },
 {
  "id": "M13-QXE2D4E165",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "TestCase bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QX6D7BB9CE",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "TestCase oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QX1AC54F03",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "TestCase: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QX5AEE831B",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Client uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Client",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "Client"
  ]
 },
 {
  "id": "M13-QX837C5753",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Client: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "client",
   "Client"
  ]
 },
 {
  "id": "M13-QXC8220C90",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "Client bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
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
  "id": "M13-QX10846CA3",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "Client oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
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
  "id": "M13-QX03A0BC1D",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "Client: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
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
  "id": "M13-QX06D3ED62",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — assertRedirects/Contains?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13-assert",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-assert"
  ]
 },
 {
  "id": "M13-QX9E196941",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "assertRedirects/Contains bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M13-assert"
  ]
 },
 {
  "id": "M13-QX93D3E6E8",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "assertRedirects/Contains bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
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
  "id": "M13-QXA32EB7BB",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "assertRedirects/Contains oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
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
  "id": "M13-QX53E987FC",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "assertRedirects/Contains: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
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
  "id": "M13-QXD09D5983",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "test DB qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M13"
  ]
 },
 {
  "id": "M13-QX5C8ED20C",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "test DB: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "db",
   "test DB"
  ]
 },
 {
  "id": "M13-QX313B9149",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "test DB bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
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
  "id": "M13-QX268CFE98",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "test DB oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
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
  "id": "M13-QX6573A1D9",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "test DB: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
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
  "id": "M13-QX357C6164",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "15+ haqiqiy test uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
  "source_ref": "",
  "distractors": [],
  "options": [
   "15+ haqiqiy test",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "15+ haqiqiy test"
  ]
 },
 {
  "id": "M13-QX47EF5175",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "15+ haqiqiy test bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M13-write-15"
  ]
 },
 {
  "id": "M13-QX1B9051B1",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "15+ haqiqiy test bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
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
  "id": "M13-QX45864EC5",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "15+ haqiqiy test oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
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
  "id": "M13-QXBDB5ED3E",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "15+ haqiqiy test: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
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
  "id": "M13-QXD0714286",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — TestCase?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13-testcase",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-testcase"
  ]
 },
 {
  "id": "M13-QXED5834FE",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "TestCase: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "testcase",
   "TestCase"
  ]
 },
 {
  "id": "M13-QXA6294B0C",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "TestCase bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QX5B379E6C",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "TestCase oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QX7041A0A3",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "TestCase: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QXDD325729",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Client qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M13"
  ]
 },
 {
  "id": "M13-QXEE15ABB0",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Client bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M13-client"
  ]
 },
 {
  "id": "M13-QXBF5E06DC",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "Client bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
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
  "id": "M13-QX16826A65",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "Client oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
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
  "id": "M13-QXED0AF876",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "Client: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
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
  "id": "M13-QXDB137CA2",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "assertRedirects/Contains uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
  "source_ref": "",
  "distractors": [],
  "options": [
   "assertRedirects/Contains",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "assertRedirects/Contains"
  ]
 },
 {
  "id": "M13-QXD8417EFE",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "assertRedirects/Contains: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "assert",
   "assertRedirects/Cont"
  ]
 },
 {
  "id": "M13-QX46554804",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "assertRedirects/Contains bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
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
  "id": "M13-QX152632E2",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "assertRedirects/Contains oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
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
  "id": "M13-QXAE1C0F60",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "assertRedirects/Contains: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-assert"
  ],
  "explanation_uz": "assertRedirects/Contains — M13-assert",
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
  "id": "M13-QX0BD58D5C",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — test DB?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13-test-db",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-test-db"
  ]
 },
 {
  "id": "M13-QX2BDC7146",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "test DB bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M13-test-db"
  ]
 },
 {
  "id": "M13-QXC6C80929",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "test DB bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
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
  "id": "M13-QXD2C88D89",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "test DB oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
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
  "id": "M13-QX49F1224C",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "test DB: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-test-db"
  ],
  "explanation_uz": "test DB — M13-test-db",
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
  "id": "M13-QX2CEB0DC1",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "15+ haqiqiy test qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M13"
  ]
 },
 {
  "id": "M13-QXF4499499",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "15+ haqiqiy test: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "15",
   "15+ haqiqiy test"
  ]
 },
 {
  "id": "M13-QXBB40986A",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "15+ haqiqiy test bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
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
  "id": "M13-QXBBF4852D",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "15+ haqiqiy test oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
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
  "id": "M13-QXAA940878",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "15+ haqiqiy test: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-write-15"
  ],
  "explanation_uz": "15+ haqiqiy test — M13-write-15",
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
  "id": "M13-QX55212E7C",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "TestCase uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
  "source_ref": "",
  "distractors": [],
  "options": [
   "TestCase",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "TestCase"
  ]
 },
 {
  "id": "M13-QXA5CD7C4C",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "TestCase bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M13-testcase"
  ]
 },
 {
  "id": "M13-QXBAFAB44B",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "TestCase bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QX0825F25D",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "order",
  "prompt": "TestCase oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QX2C08E0DE",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 5,
  "format": "trace",
  "prompt": "TestCase: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-testcase"
  ],
  "explanation_uz": "TestCase — M13-testcase",
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
  "id": "M13-QXDF6B2122",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — Client?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M13-client",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-client"
  ]
 },
 {
  "id": "M13-QXB95C4FC8",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Client: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M13-client"
  ],
  "explanation_uz": "Client — M13-client",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "client",
   "Client"
  ]
 }
];
