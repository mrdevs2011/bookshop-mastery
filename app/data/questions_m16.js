/* M16 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m16 = [
 {
  "id": "M16-Q01",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "O'zgarishlarni saqlash?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "git commit",
   "git push only",
   "git clone",
   "git rm"
  ],
  "accepted": [
   "git commit"
  ]
 },
 {
  "id": "M16-Q02",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "db.sqlite3 ni gitdan chiqarish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B20.",
  "source_ref": "",
  "distractors": [],
  "options": [
   ".gitignore ga yozish",
   "rm -rf",
   "git ignore buyrug'i yo'q",
   "commit qilmaslik yetarli"
  ],
  "accepted": [
   ".gitignore ga yozish"
  ]
 },
 {
  "id": "M16-Q03",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Paketlar ro'yxati?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "requirements.txt",
   "packages.json",
   "Pipfile only",
   "setup.py majburiy"
  ],
  "accepted": [
   "requirements.txt"
  ]
 },
 {
  "id": "M16-Q04",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Virtual muhit?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "python -m venv .venv",
   "global pip only",
   "docker majburiy",
   "conda only"
  ],
  "accepted": [
   "python -m venv .venv"
  ]
 },
 {
  "id": "M16-Q05",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "DB ni gitda saqlash muammosi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Konflikt + sirlar/ma'lumot oshkor",
   "Tezroq clone",
   "Majburiy Django",
   "Hech narsa"
  ],
  "accepted": [
   "Konflikt + sirlar/ma'lumot oshkor"
  ]
 },
 {
  "id": "M16-Q06",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Farqni ko'rish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "git diff",
   "git log only",
   "git status only",
   "git show-branch"
  ],
  "accepted": [
   "git diff"
  ]
 },
 {
  "id": "M16-Q07",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": ".env fayl gitga?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Yo'q — ignore",
   "Ha",
   "Faqat private",
   "Faqat prod"
  ],
  "accepted": [
   "Yo'q — ignore"
  ]
 },
 {
  "id": "M16-Q08",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "Django o'rnatishni qayd etish:",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "pip freeze > requirements.txt",
   "Django==... requirements.txt ga"
  ]
 },
 {
  "id": "M16-Q20",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "git init mavjudmi?",
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
  "id": "M16-Q21",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "git add mavjudmi?",
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
  "id": "M16-Q22",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "git commit mavjudmi?",
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
  "id": "M16-Q23",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "git status mavjudmi?",
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
  "id": "M16-Q24",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "git log mavjudmi?",
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
  "id": "M16-Q25",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "git diff mavjudmi?",
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
  "id": "M16-QX8BC05502",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "init/add/commit/diff/log qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M16"
  ]
 },
 {
  "id": "M16-QX5FC23AE8",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "init/add/commit/diff/log bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M16-git-basics"
  ]
 },
 {
  "id": "M16-QX3EECA8F4",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "init/add/commit/diff/log bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QXA9401E7B",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "init/add/commit/diff/log oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QX29953E22",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "init/add/commit/diff/log: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QXCFA0EF9B",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": ".gitignore uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
  "source_ref": "",
  "distractors": [],
  "options": [
   ".gitignore",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   ".gitignore"
  ]
 },
 {
  "id": "M16-QX685F5A4E",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": ".gitignore: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "gitignore",
   ".gitignore"
  ]
 },
 {
  "id": "M16-QX72695979",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": ".gitignore bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
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
  "id": "M16-QX503264F3",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": ".gitignore oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
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
  "id": "M16-QX791B67ED",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": ".gitignore: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
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
  "id": "M16-QX75E4C2B2",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — requirements.txt?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16-requirements",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-requirements"
  ]
 },
 {
  "id": "M16-QX07087FD5",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "requirements.txt bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M16-requirements"
  ]
 },
 {
  "id": "M16-QXBA3C7F45",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "requirements.txt bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
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
  "id": "M16-QX5EF8BE52",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "requirements.txt oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
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
  "id": "M16-QXB265B955",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "requirements.txt: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
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
  "id": "M16-QX2DD0DDF2",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "venv qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M16"
  ]
 },
 {
  "id": "M16-QXDA947427",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "venv: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "venv",
   "venv"
  ]
 },
 {
  "id": "M16-QX8AB2B9C3",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "venv bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
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
  "id": "M16-QX9E274994",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "venv oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
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
  "id": "M16-QX028589B3",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "venv: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
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
  "id": "M16-QX0553939C",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "db ni gitdan chiqarish uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
  "source_ref": "",
  "distractors": [],
  "options": [
   "db ni gitdan chiqarish",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "db ni gitdan chiqarish"
  ]
 },
 {
  "id": "M16-QX611B9753",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "db ni gitdan chiqarish bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M16-db-out-of-git"
  ]
 },
 {
  "id": "M16-QX8FF61C12",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "db ni gitdan chiqarish bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
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
  "id": "M16-QXD2601496",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "db ni gitdan chiqarish oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
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
  "id": "M16-QX11E5650F",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "db ni gitdan chiqarish: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
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
  "id": "M16-QX7BBED62A",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — init/add/commit/diff/log?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16-git-basics",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-git-basics"
  ]
 },
 {
  "id": "M16-QXD3CA5A59",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "init/add/commit/diff/log: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "basics",
   "init/add/commit/diff"
  ]
 },
 {
  "id": "M16-QX4355D2AC",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "init/add/commit/diff/log bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QXADC627C5",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "init/add/commit/diff/log oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QX9815F5AB",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "init/add/commit/diff/log: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QXE94B5873",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": ".gitignore qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M16"
  ]
 },
 {
  "id": "M16-QXC00DD659",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": ".gitignore bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M16-gitignore"
  ]
 },
 {
  "id": "M16-QXF0A81228",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": ".gitignore bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
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
  "id": "M16-QXD7106A24",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": ".gitignore oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
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
  "id": "M16-QX663B539A",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": ".gitignore: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
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
  "id": "M16-QX4087D5F8",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "requirements.txt uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
  "source_ref": "",
  "distractors": [],
  "options": [
   "requirements.txt",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "requirements.txt"
  ]
 },
 {
  "id": "M16-QXEFDA4A78",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "requirements.txt: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "requirements",
   "requirements.txt"
  ]
 },
 {
  "id": "M16-QX04E3564E",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "requirements.txt bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
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
  "id": "M16-QXED5F5A86",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "requirements.txt oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
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
  "id": "M16-QX8DB14AB8",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "requirements.txt: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-requirements"
  ],
  "explanation_uz": "requirements.txt — M16-requirements",
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
  "id": "M16-QX3C4A3885",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — venv?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16-venv",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-venv"
  ]
 },
 {
  "id": "M16-QX4EA5B085",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "venv bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M16-venv"
  ]
 },
 {
  "id": "M16-QX969D6686",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "venv bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
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
  "id": "M16-QX9215DBA4",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "venv oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
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
  "id": "M16-QX703AEC57",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "venv: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-venv"
  ],
  "explanation_uz": "venv — M16-venv",
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
  "id": "M16-QXFA565A08",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "db ni gitdan chiqarish qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M16"
  ]
 },
 {
  "id": "M16-QX4E7F3F8C",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "db ni gitdan chiqarish: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "git",
   "db ni gitdan chiqari"
  ]
 },
 {
  "id": "M16-QX00AE814D",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "db ni gitdan chiqarish bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
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
  "id": "M16-QXDD5CAD54",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "db ni gitdan chiqarish oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
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
  "id": "M16-QXA48FEF5C",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "db ni gitdan chiqarish: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-db-out-of-git"
  ],
  "explanation_uz": "db ni gitdan chiqarish — M16-db-out-of-git",
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
  "id": "M16-QX075FDC59",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "init/add/commit/diff/log uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
  "source_ref": "",
  "distractors": [],
  "options": [
   "init/add/commit/diff/log",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "init/add/commit/diff/log"
  ]
 },
 {
  "id": "M16-QX467EA470",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "init/add/commit/diff/log bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M16-git-basics"
  ]
 },
 {
  "id": "M16-QX1758E5A7",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "init/add/commit/diff/log bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QX0FC447EC",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "init/add/commit/diff/log oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QXF8B47C66",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 4,
  "format": "trace",
  "prompt": "init/add/commit/diff/log: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-git-basics"
  ],
  "explanation_uz": "init/add/commit/diff/log — M16-git-basics",
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
  "id": "M16-QX5BDC0EAA",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — .gitignore?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M16-gitignore",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-gitignore"
  ]
 },
 {
  "id": "M16-QX6B1FD294",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": ".gitignore: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "gitignore",
   ".gitignore"
  ]
 },
 {
  "id": "M16-QXDA289EBF",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": ".gitignore bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M16-gitignore"
  ],
  "explanation_uz": ".gitignore — M16-gitignore",
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
