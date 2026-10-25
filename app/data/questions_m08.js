/* M08 savollar — kengaytirilgan */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.questions_m08 = [
 {
  "id": "M08-Q01",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "{{ book.name }} XSS dan himoyalanganmi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Ha, avto-escape",
   "Yo'q",
   "Faqat admin",
   "Faqat DEBUG"
  ],
  "accepted": [
   "Ha, avto-escape"
  ]
 },
 {
  "id": "M08-Q02",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "{{ book.user.username }} nima qiladi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Bog'langan user.username",
   "Xato",
   "None",
   "SQL"
  ],
  "accepted": [
   "Bog'langan user.username"
  ]
 },
 {
  "id": "M08-Q03",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "{{ book.bookview_set.count }} — qavs?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B10: har biri SQL.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "Shablonda qavssiz (callable chaqiriladi)",
   "count() majburiy",
   "Xato",
   "Faqat Python"
  ],
  "accepted": [
   "Shablonda qavssiz (callable chaqiriladi)"
  ]
 },
 {
  "id": "M08-Q04",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Ro'yxat aylanma tegi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% for book in books %}",
   "{{ for book }}",
   "#for",
   "{% loop %}"
  ],
  "accepted": [
   "{% for book in books %}"
  ]
 },
 {
  "id": "M08-Q05",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "Shart tegi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% if is_public %}",
   "{{ if }}",
   "#if",
   "{% when %}"
  ],
  "accepted": [
   "{% if is_public %}"
  ]
 },
 {
  "id": "M08-Q06",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "messages ni ko'rsatish?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% if messages %} ... {% endif %}",
   "{{ messages.all }}",
   "request.messages",
   "faqat admin"
  ],
  "accepted": [
   "{% if messages %} ... {% endif %}"
  ]
 },
 {
  "id": "M08-Q07",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "base.html ulash?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B19: hozir extends yo'q.",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% extends 'base.html' %}",
   "{% include 'base.html' %}",
   "import base",
   "{% base %}"
  ],
  "accepted": [
   "{% extends 'base.html' %}"
  ]
 },
 {
  "id": "M08-Q08",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Formaga CSRF?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% csrf_token %}",
   "{{ csrf }}",
   "csrf()",
   "avtomatik"
  ],
  "accepted": [
   "{% csrf_token %}"
  ]
 },
 {
  "id": "M08-Q09",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Static fayl URL?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "{% static 'x.css' %}",
   "{{ static }}",
   "/static avto",
   "media"
  ],
  "accepted": [
   "{% static 'x.css' %}"
  ]
 },
 {
  "id": "M08-Q10",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "|safe filtri xavfi?",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "",
  "source_ref": "",
  "distractors": [],
  "options": [
   "XSS mumkin",
   "Tezroq",
   "Hech narsa",
   "Faqat admin"
  ],
  "accepted": [
   "XSS mumkin"
  ]
 },
 {
  "id": "M08-Q11",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "is_public true bo'lsa active klass (bir qator):",
  "time_budget": 45,
  "hints": [
   "Ishorat",
   "Skelet"
  ],
  "explanation_uz": "B11 tuzatishi.",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "{% if is_public %}class=\"active\"{% endif %}",
   "{% if is_public %}class='active'{% endif %}"
  ]
 },
 {
  "id": "M08-QX6E66A9D3",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "avto-escape qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M08"
  ]
 },
 {
  "id": "M08-QX4B524CED",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "avto-escape bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M08-escape"
  ]
 },
 {
  "id": "M08-QXBA1DE13A",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "avto-escape bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
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
  "id": "M08-QX02E2A3B0",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "avto-escape oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
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
  "id": "M08-QX8540DB62",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "avto-escape: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
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
  "id": "M08-QX8323769D",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "nuqtali qidiruv uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
  "source_ref": "",
  "distractors": [],
  "options": [
   "nuqtali qidiruv",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "nuqtali qidiruv"
  ]
 },
 {
  "id": "M08-QXD4A317A2",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "nuqtali qidiruv: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "dot",
   "nuqtali qidiruv"
  ]
 },
 {
  "id": "M08-QXF203E0C3",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "nuqtali qidiruv bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
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
  "id": "M08-QXB3D72367",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "nuqtali qidiruv oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
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
  "id": "M08-QX1194A1D5",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "nuqtali qidiruv: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
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
  "id": "M08-QXBC16AE47",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — bookview_set.count?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08-related-count",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-related-count"
  ]
 },
 {
  "id": "M08-QX64B2F387",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "bookview_set.count bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M08-related-count"
  ]
 },
 {
  "id": "M08-QXB9E657CD",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "bookview_set.count bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
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
  "id": "M08-QX7E414B58",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "bookview_set.count oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
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
  "id": "M08-QXA1AFB858",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "bookview_set.count: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
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
  "id": "M08-QXB92C5F46",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "for/if qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-for-if"
  ],
  "explanation_uz": "for/if — M08-for-if",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M08"
  ]
 },
 {
  "id": "M08-QX8DD9F8D3",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "for/if: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-for-if"
  ],
  "explanation_uz": "for/if — M08-for-if",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "if",
   "for/if"
  ]
 },
 {
  "id": "M08-QX6811654E",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "for/if bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-for-if"
  ],
  "explanation_uz": "for/if — M08-for-if",
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
  "id": "M08-QX0935B9FB",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "for/if oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-for-if"
  ],
  "explanation_uz": "for/if — M08-for-if",
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
  "id": "M08-QXE819DE8D",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "for/if: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-for-if"
  ],
  "explanation_uz": "for/if — M08-for-if",
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
  "id": "M08-QX8F63B125",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "messages uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-messages"
  ],
  "explanation_uz": "messages — M08-messages",
  "source_ref": "",
  "distractors": [],
  "options": [
   "messages",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "messages"
  ]
 },
 {
  "id": "M08-QX7F372375",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "messages bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-messages"
  ],
  "explanation_uz": "messages — M08-messages",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M08-messages"
  ]
 },
 {
  "id": "M08-QXE606CA75",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "messages bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-messages"
  ],
  "explanation_uz": "messages — M08-messages",
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
  "id": "M08-QXC283BEAA",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "messages oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-messages"
  ],
  "explanation_uz": "messages — M08-messages",
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
  "id": "M08-QX1CDE5063",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "messages: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-messages"
  ],
  "explanation_uz": "messages — M08-messages",
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
  "id": "M08-QX525F949C",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — extends/block?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-extends"
  ],
  "explanation_uz": "extends/block — M08-extends",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08-extends",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-extends"
  ]
 },
 {
  "id": "M08-QXE991D757",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "extends/block: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-extends"
  ],
  "explanation_uz": "extends/block — M08-extends",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "extends",
   "extends/block"
  ]
 },
 {
  "id": "M08-QX9972CA34",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "extends/block bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-extends"
  ],
  "explanation_uz": "extends/block — M08-extends",
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
  "id": "M08-QX62C22475",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "extends/block oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-extends"
  ],
  "explanation_uz": "extends/block — M08-extends",
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
  "id": "M08-QXB3D4237D",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "extends/block: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-extends"
  ],
  "explanation_uz": "extends/block — M08-extends",
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
  "id": "M08-QX3FCE46A3",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "static qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-static"
  ],
  "explanation_uz": "static — M08-static",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M08"
  ]
 },
 {
  "id": "M08-QX0E3CAE51",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "static bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-static"
  ],
  "explanation_uz": "static — M08-static",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M08-static"
  ]
 },
 {
  "id": "M08-QX29B89924",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "static bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-static"
  ],
  "explanation_uz": "static — M08-static",
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
  "id": "M08-QXCD377D32",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "static oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-static"
  ],
  "explanation_uz": "static — M08-static",
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
  "id": "M08-QX4D7C0272",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "static: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-static"
  ],
  "explanation_uz": "static — M08-static",
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
  "id": "M08-QX136E96D6",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "csrf_token uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-csrf-token"
  ],
  "explanation_uz": "csrf_token — M08-csrf-token",
  "source_ref": "",
  "distractors": [],
  "options": [
   "csrf_token",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "csrf_token"
  ]
 },
 {
  "id": "M08-QX8E658474",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "csrf_token: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-csrf-token"
  ],
  "explanation_uz": "csrf_token — M08-csrf-token",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "token",
   "csrf_token"
  ]
 },
 {
  "id": "M08-QX4B507D65",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "csrf_token bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-csrf-token"
  ],
  "explanation_uz": "csrf_token — M08-csrf-token",
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
  "id": "M08-QX93AFDC6F",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "csrf_token oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-csrf-token"
  ],
  "explanation_uz": "csrf_token — M08-csrf-token",
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
  "id": "M08-QX2898E408",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "csrf_token: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-csrf-token"
  ],
  "explanation_uz": "csrf_token — M08-csrf-token",
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
  "id": "M08-QX5BD0293E",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — autoescape off xavfi?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-autoescape"
  ],
  "explanation_uz": "autoescape off xavfi — M08-autoescape",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08-autoescape",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-autoescape"
  ]
 },
 {
  "id": "M08-QXACB36629",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "autoescape off xavfi bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-autoescape"
  ],
  "explanation_uz": "autoescape off xavfi — M08-autoescape",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M08-autoescape"
  ]
 },
 {
  "id": "M08-QX2B428B8A",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "autoescape off xavfi bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-autoescape"
  ],
  "explanation_uz": "autoescape off xavfi — M08-autoescape",
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
  "id": "M08-QX174EB019",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "autoescape off xavfi oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-autoescape"
  ],
  "explanation_uz": "autoescape off xavfi — M08-autoescape",
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
  "id": "M08-QXAD5456E5",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "autoescape off xavfi: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-autoescape"
  ],
  "explanation_uz": "autoescape off xavfi — M08-autoescape",
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
  "id": "M08-QX74F97792",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "avto-escape qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M08"
  ]
 },
 {
  "id": "M08-QXB87BA690",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "avto-escape: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "escape",
   "avto-escape"
  ]
 },
 {
  "id": "M08-QX68DFE07F",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "avto-escape bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
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
  "id": "M08-QX08D9D2AF",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "avto-escape oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
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
  "id": "M08-QX893C740A",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "avto-escape: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-escape"
  ],
  "explanation_uz": "avto-escape — M08-escape",
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
  "id": "M08-QXE66F6EFB",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "nuqtali qidiruv uchun eng mos atama?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
  "source_ref": "",
  "distractors": [],
  "options": [
   "nuqtali qidiruv",
   "CSRF token",
   "N+1 so'rov",
   "migrate"
  ],
  "accepted": [
   "nuqtali qidiruv"
  ]
 },
 {
  "id": "M08-QX11267EBC",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "nuqtali qidiruv bilan bog'liq 1 qator kod yozing (yoki identifikator).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "M08-dot"
  ]
 },
 {
  "id": "M08-QXF3B127AD",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "nuqtali qidiruv bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
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
  "id": "M08-QX43F2D6F5",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "nuqtali qidiruv oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
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
  "id": "M08-QX94574C22",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "nuqtali qidiruv: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-dot"
  ],
  "explanation_uz": "nuqtali qidiruv — M08-dot",
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
  "id": "M08-QXDBD4BAD9",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "Qaysi ifoda to'g'ri — bookview_set.count?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08-related-count",
   "M99-x",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-related-count"
  ]
 },
 {
  "id": "M08-QX348C90E6",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "bookview_set.count: kalit so'z/ifodani yozing.",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
  "source_ref": "",
  "distractors": [],
  "accepted": [
   "count",
   "bookview_set.count"
  ]
 },
 {
  "id": "M08-QXB6BB20F6",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "bookview_set.count bilan bog'liq xato: ehtimoliy sabab?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
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
  "id": "M08-QXB228AAFF",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 5,
  "format": "order",
  "prompt": "bookview_set.count oqimini tartiblang (konseptual).",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
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
  "id": "M08-QXCD07EEC1",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 1,
  "format": "trace",
  "prompt": "bookview_set.count: so'rov ketma-ketligida qayerda?",
  "time_budget": 90,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-related-count"
  ],
  "explanation_uz": "bookview_set.count — M08-related-count",
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
  "id": "M08-QXDBD870E2",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "for/if qaysi modulga tegishli?",
  "time_budget": 45,
  "hints": [
   "Asosiy qoidani eslang.",
   "Konsept: M08-for-if"
  ],
  "explanation_uz": "for/if — M08-for-if",
  "source_ref": "",
  "distractors": [],
  "options": [
   "M08",
   "MX",
   "M99",
   "—"
  ],
  "accepted": [
   "M08"
  ]
 }
];
