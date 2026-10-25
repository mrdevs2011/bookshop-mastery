/* questions M13 — P5 */
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
 }
];
