/* MUHRANGAN imtihon banki — mashqda KO'RSATILMAYDI */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.exam_bank = [
 {
  "id": "EX-93B981FA12",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Qaysi qator to'g'ri import?",
  "options": [
   "from django.db import models",
   "import django.db.models as models",
   "from django import db.models",
   "import models from django.db"
  ],
  "accepted": [
   "from django.db import models"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q01"
 },
 {
  "id": "EX-C0A0871FF2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] url='https://example.com' bo'lsa url[8:]?",
  "options": [
   "example.com",
   "https://example.com",
   "//example.com",
   "example.com/"
  ],
  "accepted": [
   "example.com"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q02"
 },
 {
  "id": "EX-E153FFA8E9",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-none",
   "M00-str-methods"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON] url = request.POST.get('url'); url.startswith('https://') — xato?",
  "options": [
   "url None bo'lsa AttributeError",
   "startswith sintaksis xato",
   "POST.get doim satr",
   "xato yo'q"
  ],
  "accepted": [
   "url None bo'lsa AttributeError"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q03"
 },
 {
  "id": "EX-7DEE0C8A66",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] return yozmasa Python nima qaytaradi?",
  "options": [
   "None",
   "0",
   "''",
   "xato"
  ],
  "accepted": [
   "None"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q04"
 },
 {
  "id": "EX-52C69F6501",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] try/except Exception: print(err) muammosi?",
  "options": null,
  "accepted": [
   "xatoni yutadi",
   "xatoni yashiradi",
   "Exception juda keng"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q05"
 },
 {
  "id": "EX-0963969FA7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] if name=='Django': print('ok') — chiqish?",
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q100"
 },
 {
  "id": "EX-E2F73597CF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] if name=='Python': print('ok') — chiqish?",
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q101"
 },
 {
  "id": "EX-CAAE87D0F5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] if name=='Book': print('ok') — chiqish?",
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q102"
 },
 {
  "id": "EX-B67B9FD366",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] if name=='User': print('ok') — chiqish?",
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q103"
 },
 {
  "id": "EX-A3C25158C7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] if name=='View': print('ok') — chiqish?",
  "options": [
   "ok",
   "hech narsa",
   "xato",
   "None"
  ],
  "accepted": [
   "ok"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M00-Q104"
 },
 {
  "id": "EX-0467E51487",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Ishlatilmagan import nima uchun yomon?",
  "options": [
   "Chalg'itadi va linter xatosi",
   "Dastur ishlamaydi",
   "Django rad etadi",
   "Migratsiya buziladi"
  ],
  "accepted": [
   "Chalg'itadi va linter xatosi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q11"
 },
 {
  "id": "EX-C9347CBEA5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] models.py da Django model bazasi qanday import qilinadi?",
  "options": null,
  "accepted": [
   "from django.db import models"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q12"
 },
 {
  "id": "EX-13D417CE6D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] View None qaytarsa Django nima qiladi?",
  "options": [
   "ValueError / 500",
   "200 bo'sh",
   "302",
   "404"
  ],
  "accepted": [
   "ValueError / 500"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q13"
 },
 {
  "id": "EX-E0FD28F7E5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON] book_list faqat GET da return qiladi. POST da?",
  "options": [
   "None → 500",
   "200",
   "405",
   "302 login"
  ],
  "accepted": [
   "None → 500"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q14"
 },
 {
  "id": "EX-56D253A6EA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] if a: ... elif b: ... else: — b True, a False. Qaysi blok?",
  "options": [
   "elif",
   "if",
   "else",
   "hech qaysi"
  ],
  "accepted": [
   "elif"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q15"
 },
 {
  "id": "EX-02C0842247",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] 'http://x.uz'.startswith('https://')?",
  "options": [
   "False",
   "True",
   "Xato",
   "None"
  ],
  "accepted": [
   "False"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q16"
 },
 {
  "id": "EX-8ABA4F474C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON] https:// ni kesib tashlash (haqiqiy kod uslubi):",
  "options": null,
  "accepted": [
   "url[8:]",
   "url = url[8:]"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q17"
 },
 {
  "id": "EX-380C9EA147",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] except Exception: print(err) — eng katta muammo?",
  "options": [
   "Xato yutiladi, sabab yo'qoladi",
   "print sekin",
   "Exception sintaksis xato",
   "Django rad etadi"
  ],
  "accepted": [
   "Xato yutiladi, sabab yo'qoladi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q18"
 },
 {
  "id": "EX-B2F1B1AF93",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Model klassida maydon self.siz yoziladi — to'g'rimi?",
  "options": [
   "Ha, klass atributi",
   "Yo'q, self kerak",
   "Faqat FK da",
   "Faqat CharField da"
  ],
  "accepted": [
   "Ha, klass atributi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q19"
 },
 {
  "id": "EX-6C748339C7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] request.POST.get('x') kalit yo'q bo'lsa?",
  "options": [
   "None",
   "''",
   "KeyError",
   "False"
  ],
  "accepted": [
   "None"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q20"
 },
 {
  "id": "EX-5595C9EDCD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] None or '' natijasi?",
  "options": [
   "''",
   "None",
   "True",
   "Xato"
  ],
  "accepted": [
   "''"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q21"
 },
 {
  "id": "EX-D80DF1BDDB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] def f(request: HttpRequest) — : HttpRequest nima?",
  "options": [
   "Type hint",
   "Majburiy tekshiruv",
   "Django dekorator",
   "Middleware"
  ],
  "accepted": [
   "Type hint"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q22"
 },
 {
  "id": "EX-30602AF8FA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] url None bo'lib startswith chaqirilsa?",
  "options": [
   "AttributeError",
   "Hech qanday muammo",
   "Faqat DEBUG da",
   "Faqat admin da"
  ],
  "accepted": [
   "AttributeError"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "BUG-B04"
 },
 {
  "id": "EX-0B440C8C3F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] def ustidagi \"\"\"...\"\"\" nima?",
  "options": [
   "docstring",
   "dekorator",
   "type hint",
   "import"
  ],
  "accepted": [
   "docstring"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q30"
 },
 {
  "id": "EX-100C144DDF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-bool"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] bool('False') natijasi?",
  "options": [
   "True",
   "False",
   "Xato",
   "None"
  ],
  "accepted": [
   "True"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q31"
 },
 {
  "id": "EX-806CB65EEA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] 'import os' yaroqli Python importmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q40"
 },
 {
  "id": "EX-D1954A3619",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] 'from os import path' yaroqli Python importmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q41"
 },
 {
  "id": "EX-1E46C08086",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] 'import sys' yaroqli Python importmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q42"
 },
 {
  "id": "EX-B11CFD32CA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] 'from django.conf import settings' yaroqli Python importmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M00-Q43"
 },
 {
  "id": "EX-09386A53A0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] HttpResponse('kitob topilmadi') status?",
  "options": [
   "200",
   "404",
   "403",
   "302"
  ],
  "accepted": [
   "200"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q01"
 },
 {
  "id": "EX-B8C822BDAB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Kitob qo'shish metodi?",
  "options": [
   "POST",
   "GET",
   "PUT",
   "DELETE"
  ],
  "accepted": [
   "POST"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q02"
 },
 {
  "id": "EX-9ED33D0FA4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] is_public ni GET dan olish (bir qator)?",
  "options": null,
  "accepted": [
   "request.GET.get('public') == 'true'",
   "request.GET.get(\"public\") == \"true\""
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q03"
 },
 {
  "id": "EX-A32BDD01A4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] redirect('/login/') status?",
  "options": [
   "302",
   "200",
   "301",
   "404"
  ],
  "accepted": [
   "302"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q04"
 },
 {
  "id": "EX-C35C04355F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] is_authenticated False?",
  "options": [
   "Anonim foydalanuvchi",
   "Xato",
   "None",
   "Sessiya yo'q"
  ],
  "accepted": [
   "Anonim foydalanuvchi"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q05"
 },
 {
  "id": "EX-1557D9FAF8",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 404 oilasi?",
  "options": [
   "client xato",
   "boshqa"
  ],
  "accepted": [
   "client xato"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q100"
 },
 {
  "id": "EX-3E6F424D29",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 302 oilasi?",
  "options": [
   "redirect",
   "boshqa"
  ],
  "accepted": [
   "redirect"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q101"
 },
 {
  "id": "EX-7793EADEC1",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 200 oilasi?",
  "options": [
   "muvaffaqiyat",
   "boshqa"
  ],
  "accepted": [
   "muvaffaqiyat"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q102"
 },
 {
  "id": "EX-4B637C79C3",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 500 oilasi?",
  "options": [
   "server xato",
   "boshqa"
  ],
  "accepted": [
   "server xato"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q103"
 },
 {
  "id": "EX-FFB556D733",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 403 oilasi?",
  "options": [
   "client xato",
   "boshqa"
  ],
  "accepted": [
   "client xato"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M01-Q104"
 },
 {
  "id": "EX-AF61201898",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Brauzer manzil satriga URL yozsa odatda qaysi metod?",
  "options": [
   "GET",
   "POST",
   "PUT",
   "PATCH"
  ],
  "accepted": [
   "GET"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q11"
 },
 {
  "id": "EX-FA6C3C107A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Logout ni GET da qilish xavfi?",
  "options": [
   "Rasm/link orqali majburan chiqish",
   "Sekin ishlaydi",
   "Cookie o'chmaydi",
   "CSRF majburiy"
  ],
  "accepted": [
   "Rasm/link orqali majburan chiqish"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q12"
 },
 {
  "id": "EX-61E40D6F1A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] 404 ma'nosi?",
  "options": [
   "Resurs topilmadi",
   "Server xato",
   "Redirect",
   "Muvaffaqiyat"
  ],
  "accepted": [
   "Resurs topilmadi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q13"
 },
 {
  "id": "EX-02CDD83A89",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] 500 ma'nosi?",
  "options": [
   "Server ichki xatosi",
   "Client xato",
   "Redirect",
   "Not found"
  ],
  "accepted": [
   "Server ichki xatosi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q14"
 },
 {
  "id": "EX-D39661F701",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Django da /login/ ga yo'naltirish:",
  "options": null,
  "accepted": [
   "redirect('/login/')",
   "return redirect('/login/')"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q15"
 },
 {
  "id": "EX-DD2EAB8E9B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] ?public=true da public qiymati?",
  "options": [
   "'true' (satr)",
   "True (bool)",
   "1",
   "None"
  ],
  "accepted": [
   "'true' (satr)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q16"
 },
 {
  "id": "EX-0419497668",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] request.method nima qaytaradi?",
  "options": [
   "'GET' yoki 'POST' kabi satr",
   "bool",
   "int",
   "list"
  ],
  "accepted": [
   "'GET' yoki 'POST' kabi satr"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q17"
 },
 {
  "id": "EX-94332E4BE8",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] HTML form method=post default encoding?",
  "options": [
   "application/x-www-form-urlencoded",
   "application/json",
   "multipart/form-data",
   "text/plain"
  ],
  "accepted": [
   "application/x-www-form-urlencoded"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q18"
 },
 {
  "id": "EX-E8BDDE7836",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Login dan keyin sessiya qayerda?",
  "options": [
   "Serverda + cookie da sessionid",
   "Faqat localStorage",
   "Faqat URL",
   "Faqat POST body"
  ],
  "accepted": [
   "Serverda + cookie da sessionid"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q19"
 },
 {
  "id": "EX-606573183A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes",
   "M07-404"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] Http404 raise qilinsa status?",
  "options": [
   "404",
   "200",
   "500",
   "302"
  ],
  "accepted": [
   "404"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q20"
 },
 {
  "id": "EX-9BFCF96021",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 302 — Redirect?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q21"
 },
 {
  "id": "EX-83AC9620B7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 404 — Not Found?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q22"
 },
 {
  "id": "EX-F20E3BE05C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 403 — Forbidden?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q23"
 },
 {
  "id": "EX-E66F038D49",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP 500 — Server Error?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q24"
 },
 {
  "id": "EX-D115ADB9C0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Redirect da muhim header?",
  "options": [
   "Location",
   "Content-Type",
   "Cookie",
   "Host"
  ],
  "accepted": [
   "Location"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q30"
 },
 {
  "id": "EX-4C9C235A38",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-body"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] POST forma ma'lumoti qayerda?",
  "options": [
   "request body (POST)",
   "URL query",
   "Cookie",
   "Header Host"
  ],
  "accepted": [
   "request body (POST)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M01-Q31"
 },
 {
  "id": "EX-9A4CFF82BE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] startproject core . nima qiladi?",
  "options": [
   "Joriy papkada core loyiha",
   "core papka ichida",
   "app yaratadi",
   "migrate"
  ],
  "accepted": [
   "Joriy papkada core loyiha"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M02-Q01"
 },
 {
  "id": "EX-594F8F0C2E",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] CsrfViewMiddleware bormi?",
  "options": [
   "Yo'q",
   "Ha",
   "Faqat DEBUG",
   "Faqat admin"
  ],
  "accepted": [
   "Yo'q"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M02-Q02"
 },
 {
  "id": "EX-3F318D7426",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] DEBUG=True xavfi?",
  "options": [
   "Traceback oshkor",
   "Sekin",
   "Migratsiya buziladi",
   "Static yo'q"
  ],
  "accepted": [
   "Traceback oshkor"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M02-Q03"
 },
 {
  "id": "EX-622FEEE60A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Book qaysi app?",
  "options": [
   "main",
   "core",
   "books",
   "auth"
  ],
  "accepted": [
   "main"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M02-Q04"
 },
 {
  "id": "EX-E77FCDDC95",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] startapp main nima yaratadi?",
  "options": [
   "Ilova papkasi (models, views, ...)",
   "Loyiha sozlamalari",
   "faqat urls",
   "db.sqlite3"
  ],
  "accepted": [
   "Ilova papkasi (models, views, ...)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q11"
 },
 {
  "id": "EX-1A7640B392",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] python manage.py migrate nima qiladi?",
  "options": [
   "Migratsiyalarni DB ga qo'llaydi",
   "Migratsiya fayli yozadi",
   "Test yuritadi",
   "Static yig'adi"
  ],
  "accepted": [
   "Migratsiyalarni DB ga qo'llaydi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q12"
 },
 {
  "id": "EX-7453B17610",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] makemigrations nima qiladi?",
  "options": [
   "models o'zgarishidan migratsiya fayli",
   "DB ni o'zgartiradi",
   "Server ishga tushadi",
   "Superuser"
  ],
  "accepted": [
   "models o'zgarishidan migratsiya fayli"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q13"
 },
 {
  "id": "EX-885CAB8EEB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] INSTALLED_APPS ga nima qo'shiladi?",
  "options": [
   "Ilova nomi (main)",
   "Har bir model",
   "Har bir view",
   "Template yo'li"
  ],
  "accepted": [
   "Ilova nomi (main)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q14"
 },
 {
  "id": "EX-1E3FEB9AAE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] MIDDLEWARE tartibi muhimmi?",
  "options": [
   "Ha, ketma-ket ishlaydi",
   "Yo'q",
   "Faqat CSRF uchun",
   "Faqat DEBUG da"
  ],
  "accepted": [
   "Ha, ketma-ket ishlaydi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q15"
 },
 {
  "id": "EX-1C6CE5EF21",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-middleware",
   "M12-csrf"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON] CSRF ni yoqish uchun MIDDLEWARE ga nima qo'shiladi?",
  "options": null,
  "accepted": [
   "django.middleware.csrf.CsrfViewMiddleware",
   "'django.middleware.csrf.CsrfViewMiddleware'"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q16"
 },
 {
  "id": "EX-4CFFE4D0D5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] URL moslash qachon?",
  "options": [
   "Middleware dan keyin, view dan oldin",
   "View dan keyin",
   "Template dan keyin",
   "Birinchi"
  ],
  "accepted": [
   "Middleware dan keyin, view dan oldin"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q17"
 },
 {
  "id": "EX-E3F934E9C9",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] ALLOWED_HOSTS=['*'] xavfi?",
  "options": [
   "Har qanday Host qabul",
   "Sekin",
   "Static buziladi",
   "Migratsiya xato"
  ],
  "accepted": [
   "Har qanday Host qabul"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q18"
 },
 {
  "id": "EX-093A734808",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] manage.py check mavjud buyruqmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q20"
 },
 {
  "id": "EX-B9D15E33AD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] manage.py showmigrations mavjud buyruqmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q21"
 },
 {
  "id": "EX-8F6E455C6F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] manage.py makemigrations mavjud buyruqmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q22"
 },
 {
  "id": "EX-4DE39A7389",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] manage.py migrate mavjud buyruqmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q23"
 },
 {
  "id": "EX-6D5356AA2C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] manage.py shell mavjud buyruqmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q24"
 },
 {
  "id": "EX-45EA299661",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] wsgi.py vazifasi?",
  "options": [
   "WSGI server kirish nuqtasi",
   "Template",
   "Migratsiya",
   "Test"
  ],
  "accepted": [
   "WSGI server kirish nuqtasi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q30"
 },
 {
  "id": "EX-9EA1F0143D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] STATICFILES_DIRS nima?",
  "options": [
   "Qo'shimcha static papkalar",
   "Faqat MEDIA",
   "Faqat admin CSS",
   "DB yo'li"
  ],
  "accepted": [
   "Qo'shimcha static papkalar"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M02-Q31"
 },
 {
  "id": "EX-648E275913",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Book.name?",
  "options": [
   "CharField(max_length=255)",
   "TextField",
   "URLField",
   "SlugField"
  ],
  "accepted": [
   "CharField(max_length=255)"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M03-Q01"
 },
 {
  "id": "EX-E912A08619",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] null=True, blank yo'q — forma?",
  "options": [
   "DB NULL mumkin, forma validatsiyasi alohida",
   "Doim xato",
   "Bo'sh satr",
   "O'chadi"
  ],
  "accepted": [
   "DB NULL mumkin, forma validatsiyasi alohida"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M03-Q02"
 },
 {
  "id": "EX-A83EE67543",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] CASCADE user o'chirilsa?",
  "options": [
   "Kitoblari ham o'chadi",
   "Kitoblar qoladi",
   "Xato",
   "Faqat BookView"
  ],
  "accepted": [
   "Kitoblari ham o'chadi"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M03-Q03"
 },
 {
  "id": "EX-BE9DE48454",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Ko'rishlar soni related manager?",
  "options": null,
  "accepted": [
   "book.bookview_set.count",
   "book.bookview_set.count()",
   "{{ book.bookview_set.count }}"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M03-Q04"
 },
 {
  "id": "EX-0FE150AE43",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] __str__ yo'q — admin?",
  "options": [
   "Book object (1)",
   "Book",
   "(bo'sh)",
   "name"
  ],
  "accepted": [
   "Book object (1)"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M03-Q05"
 },
 {
  "id": "EX-A34449FB69",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] filter(user=ali) vs user_id?",
  "options": [
   "Natija bir xil",
   "Birinchisi xato",
   "Ikkinchisi xato",
   "Turli SQL"
  ],
  "accepted": [
   "Natija bir xil"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M03-Q06"
 },
 {
  "id": "EX-775B756FE4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] public maydon turi?",
  "options": [
   "BooleanField(default=False)",
   "CharField",
   "IntegerField",
   "DateField"
  ],
  "accepted": [
   "BooleanField(default=False)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q11"
 },
 {
  "id": "EX-598D6AAE00",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] auto_now_add=True nima qiladi?",
  "options": [
   "Yaratilganda sanani avto qo'yadi",
   "Har save da yangilaydi",
   "Null qiladi",
   "Default bugun"
  ],
  "accepted": [
   "Yaratilganda sanani avto qo'yadi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q12"
 },
 {
  "id": "EX-416D0C966B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Book → User bog'lanishi (bir qator maydon):",
  "options": null,
  "accepted": [
   "user = models.ForeignKey(User, on_delete=models.CASCADE)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q13"
 },
 {
  "id": "EX-ECF1FC2452",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] null=True nima uchun?",
  "options": [
   "DB da NULL ruxsat",
   "Forma bo'sh bo'lishi",
   "Ikkalasi bir xil",
   "max_length o'rniga"
  ],
  "accepted": [
   "DB da NULL ruxsat"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q14"
 },
 {
  "id": "EX-89569C9712",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] blank=True nima uchun?",
  "options": [
   "Forma/validatsiyada bo'sh ruxsat",
   "DB NULL",
   "Ikkalasi bir xil",
   "Faqat admin"
  ],
  "accepted": [
   "Forma/validatsiyada bo'sh ruxsat"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q15"
 },
 {
  "id": "EX-F9CD1524EF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] public = BooleanField(default=False) — yangi kitob?",
  "options": [
   "private (False)",
   "public (True)",
   "None",
   "Xato"
  ],
  "accepted": [
   "private (False)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q16"
 },
 {
  "id": "EX-DA038CA319",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] bookview_set qayerdan keladi?",
  "options": [
   "FK teskari menejer (default)",
   "Qo'lda yozilgan metod",
   "settings",
   "admin"
  ],
  "accepted": [
   "FK teskari menejer (default)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q17"
 },
 {
  "id": "EX-7A91F8B719",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Book uchun __str__ (name qaytarsin):",
  "options": null,
  "accepted": [
   "def __str__(self): return self.name",
   "def __str__(self):\n    return self.name"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q18"
 },
 {
  "id": "EX-BCE184F47D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] UniqueConstraint(book, user) nima beradi?",
  "options": [
   "Bir user bir kitobni bir marta ko'rgan deb hisoblaydi",
   "Tezroq filter",
   "Admin chiroyli",
   "Migratsiya shart emas"
  ],
  "accepted": [
   "Bir user bir kitobni bir marta ko'rgan deb hisoblaydi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q19"
 },
 {
  "id": "EX-12929B65CA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] CharField da max_length shartmi?",
  "options": [
   "Ha (Django talab)",
   "Yo'q",
   "Faqat null=True da",
   "Faqat admin da"
  ],
  "accepted": [
   "Ha (Django talab)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q20"
 },
 {
  "id": "EX-8657D30120",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Book modelida 'name' maydoni bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q30"
 },
 {
  "id": "EX-E023F139EE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Book modelida 'url' maydoni bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q31"
 },
 {
  "id": "EX-6E7A08B971",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Book modelida 'public' maydoni bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q32"
 },
 {
  "id": "EX-895A1B63EF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Book modelida 'user' maydoni bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q33"
 },
 {
  "id": "EX-3D3424075F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Book modelida 'yaratilgan_sanasi' maydoni bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q34"
 },
 {
  "id": "EX-B16F089ACB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-charfield"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] CharField majburiy parametri?",
  "options": [
   "max_length",
   "null",
   "blank",
   "default"
  ],
  "accepted": [
   "max_length"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q40"
 },
 {
  "id": "EX-EDD6BFCEFC",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-boolfield"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] BooleanField default berilmasa?",
  "options": [
   "Default yo'q — ehtiyot",
   "Doim False",
   "Doim True",
   "None"
  ],
  "accepted": [
   "Default yo'q — ehtiyot"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q41"
 },
 {
  "id": "EX-0A146E9A22",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-datefield"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] yaratilgan_sanasi turi?",
  "options": [
   "DateField(auto_now_add=True)",
   "DateTimeField",
   "CharField",
   "IntegerField"
  ],
  "accepted": [
   "DateField(auto_now_add=True)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M03-Q42"
 },
 {
  "id": "EX-466444A2F7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] filter() SQL yuboradi?",
  "options": [
   "Yo'q, lazy",
   "Ha",
   "Faqat DEBUG",
   "Faqat count"
  ],
  "accepted": [
   "Yo'q, lazy"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M04-Q01"
 },
 {
  "id": "EX-2197F6982A",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON] 20 kitob × count — SQL?",
  "options": [
   "21 (1+20)",
   "1",
   "20",
   "2"
  ],
  "accepted": [
   "21 (1+20)"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M04-Q02"
 },
 {
  "id": "EX-6793799D36",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON] annotate bilan N+1 tuzatish:",
  "options": null,
  "accepted": [
   "Book.objects.filter(public=True).annotate(vc=Count('bookview'))",
   "Book.objects.annotate(vc=Count('bookview')).filter(public=True)"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M04-Q03"
 },
 {
  "id": "EX-319FA77448",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] get_or_create qaytaradi?",
  "options": [
   "(object, created)",
   "faqat object",
   "faqat bool",
   "QuerySet"
  ],
  "accepted": [
   "(object, created)"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M04-Q04"
 },
 {
  "id": "EX-544B82ECE5",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON] UniqueConstraint yo'q — xavf?",
  "options": [
   "Poyga dublikat",
   "Hech qanday",
   "Sekin",
   "Faqat PG"
  ],
  "accepted": [
   "Poyga dublikat"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M04-Q05"
 },
 {
  "id": "EX-5E56D39CFC",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON] Eng yangi tartib:",
  "options": null,
  "accepted": [
   "Book.objects.order_by('-id')"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M04-Q06"
 },
 {
  "id": "EX-442B7823F3",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] get() 0 qator topilsa?",
  "options": [
   "DoesNotExist",
   "None",
   "[]",
   "False"
  ],
  "accepted": [
   "DoesNotExist"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q11"
 },
 {
  "id": "EX-77D9EA28B1",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] get() 2+ qator topilsa?",
  "options": [
   "MultipleObjectsReturned",
   "birinchisini",
   "list",
   "xato yo'q"
  ],
  "accepted": [
   "MultipleObjectsReturned"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q12"
 },
 {
  "id": "EX-1DDECA3D45",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Ali ning kitoblari:",
  "options": null,
  "accepted": [
   "Book.objects.filter(user=ali)",
   "Book.objects.filter(user_id=ali.id)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q13"
 },
 {
  "id": "EX-446D05B515",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] qs.count() nima qiladi?",
  "options": [
   "SQL COUNT, butun QS ni yuklamaydi",
   "list qilib len",
   "Faqat cache",
   "Hech narsa"
  ],
  "accepted": [
   "SQL COUNT, butun QS ni yuklamaydi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q14"
 },
 {
  "id": "EX-FF961557FF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-exists"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] exists() vs count()?",
  "options": [
   "exists LIMIT 1, odatda arzonroq",
   "Bir xil",
   "exists sekinroq",
   "exists list qiladi"
  ],
  "accepted": [
   "exists LIMIT 1, odatda arzonroq"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q15"
 },
 {
  "id": "EX-B07AD714DF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] list(qs) dan keyin yana list(qs)?",
  "options": [
   "Cache dan, ikkinchi SQL yo'q (odatiy)",
   "Yana SQL",
   "Xato",
   "Faqat DEBUG"
  ],
  "accepted": [
   "Cache dan, ikkinchi SQL yo'q (odatiy)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q16"
 },
 {
  "id": "EX-E6B05045C7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] select_related('user') nima uchun?",
  "options": [
   "FK ni JOIN bilan birga olish (N+1 yo'q)",
   "M2M uchun",
   "Faqat count",
   "Delete uchun"
  ],
  "accepted": [
   "FK ni JOIN bilan birga olish (N+1 yo'q)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q17"
 },
 {
  "id": "EX-BB62343B11",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] prefetch_related qachon?",
  "options": [
   "reverse FK / M2M",
   "Faqat OneToOne",
   "Faqat count",
   "Faqat admin"
  ],
  "accepted": [
   "reverse FK / M2M"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q18"
 },
 {
  "id": "EX-2469D81EC5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON] Har kitobga ko'rishlar soni annotate:",
  "options": null,
  "accepted": [
   "Book.objects.annotate(vc=Count('bookview'))",
   "Book.objects.annotate(bookview_count=Count('bookview'))"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q19"
 },
 {
  "id": "EX-EE37BBC25F",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON] Shablonda {{ book.user.username }} 50 kitob — muammo?",
  "options": [
   "N+1 (har biri alohida user)",
   "1 SQL",
   "Xato",
   "Faqat admin"
  ],
  "accepted": [
   "N+1 (har biri alohida user)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q20"
 },
 {
  "id": "EX-FDCD40DCD4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON] public yoki o'z kitobi (Q):",
  "options": null,
  "accepted": [
   "Book.objects.filter(Q(public=True) | Q(user=request.user))",
   "Book.objects.filter(Q(public=True) | Q(user_id=request.user.id))"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q21"
 },
 {
  "id": "EX-5FB68D93EA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-shell"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] ORM ni sinash uchun?",
  "options": [
   "python manage.py shell",
   "migrate",
   "runserver",
   "test"
  ],
  "accepted": [
   "python manage.py shell"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q22"
 },
 {
  "id": "EX-64F36B5C78",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] bookview_set.count har kartochkada — muammo?",
  "options": [
   "N+1 SQL",
   "Hech qanday muammo",
   "Faqat DEBUG da",
   "Faqat admin da"
  ],
  "accepted": [
   "N+1 SQL"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "BUG-B10"
 },
 {
  "id": "EX-AFBC700563",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-values"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] values_list('id', flat=True) nima qaytaradi?",
  "options": [
   "id lar ro'yxati (tekis)",
   "dict lar",
   "Model obyektlari",
   "SQL matn"
  ],
  "accepted": [
   "id lar ro'yxati (tekis)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q30"
 },
 {
  "id": "EX-2A4755113C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-exclude"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] exclude(public=True) nima?",
  "options": [
   "public=True bo'lmaganlar",
   "Faqat public",
   "Bo'sh",
   "Xato"
  ],
  "accepted": [
   "public=True bo'lmaganlar"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q31"
 },
 {
  "id": "EX-718BDA55C1",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Book.DoesNotExist qachon?",
  "options": [
   "get() topilmasa",
   "filter() bo'sh",
   "delete dan keyin",
   "doim"
  ],
  "accepted": [
   "get() topilmasa"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q32"
 },
 {
  "id": "EX-D240CBAA8E",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] QuerySet.filter mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q40"
 },
 {
  "id": "EX-71602FBC79",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] QuerySet.exclude mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q41"
 },
 {
  "id": "EX-176D4B0C75",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] QuerySet.order_by mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q42"
 },
 {
  "id": "EX-F24B410596",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] QuerySet.count mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q43"
 },
 {
  "id": "EX-6973EBB54F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] QuerySet.exists mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q44"
 },
 {
  "id": "EX-7DA26F0831",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] QuerySet.get mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q45"
 },
 {
  "id": "EX-6B0DBBD474",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] QuerySet.annotate mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M04-Q46"
 },
 {
  "id": "EX-EC54078B9F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] models o'zgargach birinchi?",
  "options": [
   "makemigrations",
   "migrate",
   "runserver",
   "collectstatic"
  ],
  "accepted": [
   "makemigrations"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M05-Q01"
 },
 {
  "id": "EX-DB9EA5B6A2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 3,
  "format": "order",
  "prompt": "[IMTIHON] Book→nashr→rename→user FK diapazon?",
  "options": [
   "0001–0004",
   "0001–0002",
   "0005–0008",
   "0003–0007"
  ],
  "accepted": [
   "0001–0004"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M05-Q02"
 },
 {
  "id": "EX-73BCDCDDD6",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] Rename vs delete+add?",
  "options": [
   "Rename ma'lumotni saqlaydi",
   "Farq yo'q",
   "Rename sekin",
   "delete+add xavfsiz"
  ],
  "accepted": [
   "Rename ma'lumotni saqlaydi"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M05-Q03"
 },
 {
  "id": "EX-D807649225",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] null=False yangi maydon?",
  "options": [
   "default yoki null=True kerak",
   "Hech narsa",
   "Avtomatik ''",
   "Doim rad"
  ],
  "accepted": [
   "default yoki null=True kerak"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M05-Q04"
 },
 {
  "id": "EX-04C975B498",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] showmigrations?",
  "options": [
   "Qo'llangan/qo'llanmagan",
   "SQL",
   "Maydonlar",
   "Test"
  ],
  "accepted": [
   "Qo'llangan/qo'llanmagan"
  ],
  "time_budget": 60,
  "sealed": true,
  "source_practice": "M05-Q05"
 },
 {
  "id": "EX-72D7E921BD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] migrate dan oldin?",
  "options": [
   "makemigrations",
   "runserver",
   "collectstatic",
   "createsuperuser"
  ],
  "accepted": [
   "makemigrations"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q11"
 },
 {
  "id": "EX-68C3DC2849",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] sqlmigrate nima ko'rsatadi?",
  "options": [
   "Migratsiyaning SQL matni",
   "Python kod",
   "Test",
   "Template"
  ],
  "accepted": [
   "Migratsiyaning SQL matni"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q12"
 },
 {
  "id": "EX-F388916A47",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Yangi maydon qo'shish operatsiyasi?",
  "options": [
   "AddField",
   "RenameField",
   "RemoveField",
   "AlterField"
  ],
  "accepted": [
   "AddField"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q13"
 },
 {
  "id": "EX-2E7E422227",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] Django rename ni qanday sezadi?",
  "options": [
   "makemigrations so'raydi (detection)",
   "Avtomatik doim",
   "Hech qachon",
   "Faqat admin"
  ],
  "accepted": [
   "makemigrations so'raydi (detection)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q14"
 },
 {
  "id": "EX-A150E934A2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] RemoveField nima qiladi?",
  "options": [
   "Ustunni o'chiradi (ma'lumot yo'qoladi)",
   "Faqat modeldan",
   "Null qiladi",
   "Rename"
  ],
  "accepted": [
   "Ustunni o'chiradi (ma'lumot yo'qoladi)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q15"
 },
 {
  "id": "EX-620ACD2A56",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] BookView qaysi migratsiyada?",
  "options": [
   "0008",
   "0001",
   "0004",
   "0006"
  ],
  "accepted": [
   "0008"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q16"
 },
 {
  "id": "EX-B2A1278770",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] public maydon taxminan qaysi migratsiya?",
  "options": [
   "0006",
   "0001",
   "0008",
   "0003"
  ],
  "accepted": [
   "0006"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q17"
 },
 {
  "id": "EX-5E1E69D495",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON] Mavjud 1000 qator, yangi CharField null=False default yo'q —?",
  "options": [
   "Migratsiya default so'raydi yoki xato",
   "Avtomatik ''",
   "O'chiriladi",
   "Hech narsa"
  ],
  "accepted": [
   "Migratsiya default so'raydi yoki xato"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q18"
 },
 {
  "id": "EX-22DF148F66",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Migratsiyalar bog'liqligi?",
  "options": [
   "depends_on / chiziqli tarix",
   "Tasodifiy",
   "Faqat nom",
   "Git commit"
  ],
  "accepted": [
   "depends_on / chiziqli tarix"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q19"
 },
 {
  "id": "EX-E438DDD1F1",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] [X] belgisi?",
  "options": [
   "Qo'llangan",
   "Qo'llanmagan",
   "Xato",
   "O'chirilgan"
  ],
  "accepted": [
   "Qo'llangan"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q20"
 },
 {
  "id": "EX-E98398EF66",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] AlterField nima?",
  "options": [
   "Maydon xususiyatini o'zgartirish",
   "O'chirish",
   "Rename",
   "Yangi model"
  ],
  "accepted": [
   "Maydon xususiyatini o'zgartirish"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q30"
 },
 {
  "id": "EX-A687F2CA99",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] squashmigrations maqsadi?",
  "options": [
   "Ko'p migratsiyani birlashtirish",
   "DB backup",
   "Test",
   "Static"
  ],
  "accepted": [
   "Ko'p migratsiyani birlashtirish"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q31"
 },
 {
  "id": "EX-9E1310F252",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-dependency"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Migratsiya depends_on nima?",
  "options": [
   "Oldingi migratsiyaga bog'liqlik",
   "Git branch",
   "App nomi",
   "Python versiya"
  ],
  "accepted": [
   "Oldingi migratsiyaga bog'liqlik"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M05-Q32"
 },
 {
  "id": "EX-886ECEAD68",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Django da URL yo'lini qaysi funksiya belgilaydi?",
  "options": [
   "path()",
   "url()",
   "route()",
   "link()"
  ],
  "accepted": [
   "path()"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q01"
 },
 {
  "id": "EX-4FE141B9E5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] kitob id si butun son — to'g'ri konvertor?",
  "options": [
   "<int:id>",
   "<str:id>",
   "<slug:id>",
   "<id>"
  ],
  "accepted": [
   "<int:id>"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q02"
 },
 {
  "id": "EX-C7D4AAB3BE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] book_page uchun path yozing (id int):",
  "options": null,
  "accepted": [
   "path('book/<int:id>/', book_page)",
   "path(\"book/<int:id>/\", book_page)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q03"
 },
 {
  "id": "EX-11AE497D5B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] path oxirida / bo'lmasa (APPEND_SLASH)?",
  "options": [
   "Django odatda / ga redirect qilishi mumkin",
   "Doim 404",
   "Doim 500",
   "Hech narsa"
  ],
  "accepted": [
   "Django odatda / ga redirect qilishi mumkin"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q04"
 },
 {
  "id": "EX-41583F0223",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Faqat qaysi path da name= bor (haqiqiy loyiha)?",
  "options": [
   "logout",
   "login",
   "book-list",
   "signup"
  ],
  "accepted": [
   "logout"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q05"
 },
 {
  "id": "EX-E80F2C4E5D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON] Nomlangan URL ga redirect:",
  "options": null,
  "accepted": [
   "redirect('logout')",
   "return redirect('logout')"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q06"
 },
 {
  "id": "EX-589E12333B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] /error/ qanday ulangan?",
  "options": [
   "TemplateView.as_view(template_name='error.html')",
   "render()",
   "HttpResponse",
   "static"
  ],
  "accepted": [
   "TemplateView.as_view(template_name='error.html')"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q07"
 },
 {
  "id": "EX-42E74D84D1",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] URL tartibi muhimmi?",
  "options": [
   "Ha, birinchi mos kelgan ishlaydi",
   "Yo'q",
   "Faqat admin",
   "Faqat include"
  ],
  "accepted": [
   "Ha, birinchi mos kelgan ishlaydi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q08"
 },
 {
  "id": "EX-29E1A120C2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] include() nima uchun?",
  "options": [
   "Boshqa urls modulini ulash",
   "Template",
   "Static",
   "Migrate"
  ],
  "accepted": [
   "Boshqa urls modulini ulash"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q09"
 },
 {
  "id": "EX-314D7BB8E3",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] BookShop da nechta path (admin bilan)?",
  "options": [
   "9",
   "7",
   "5",
   "12"
  ],
  "accepted": [
   "9"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q10"
 },
 {
  "id": "EX-959C572FDD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Bosh sahifa path?",
  "options": [
   "path('', index)",
   "path('/', index)",
   "path('home/', index)",
   "path('index/', index)"
  ],
  "accepted": [
   "path('', index)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q11"
 },
 {
  "id": "EX-03E91001CA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] <int:id> ga 'abc' kelsa?",
  "options": [
   "Mos kelmaydi (404)",
   "0",
   "Xato 500",
   "'abc'"
  ],
  "accepted": [
   "Mos kelmaydi (404)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q12"
 },
 {
  "id": "EX-0D2D524491",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path 'admin/' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q20"
 },
 {
  "id": "EX-D095D353D5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path 'book-list/' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q21"
 },
 {
  "id": "EX-E127C7932B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path 'add-book/' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q22"
 },
 {
  "id": "EX-6CEC409A5D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path 'login/' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q23"
 },
 {
  "id": "EX-8565C80747",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path 'logout/' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q24"
 },
 {
  "id": "EX-277AB148DB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path 'signup/' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q25"
 },
 {
  "id": "EX-CF728012ED",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path 'error/' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q26"
 },
 {
  "id": "EX-2017E93761",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] path '(bo'sh)' loyihada bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M06-Q27"
 },
 {
  "id": "EX-30E8EE3C51",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] FBV nima?",
  "options": [
   "Function-Based View",
   "Form-Based View",
   "File-Based View",
   "Fast Backend View"
  ],
  "accepted": [
   "Function-Based View"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q01"
 },
 {
  "id": "EX-1327914447",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Auth tekshiruvdan keyin return qilmasak?",
  "options": [
   "Redirect ishlamaydi, kod davom etadi",
   "Avtomatik to'xtaydi",
   "404",
   "500"
  ],
  "accepted": [
   "Redirect ishlamaydi, kod davom etadi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q02"
 },
 {
  "id": "EX-B9134E8FD2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON] View hech narsa return qilmasa?",
  "options": [
   "ValueError: didn't return an HttpResponse",
   "200",
   "None sahifa",
   "302"
  ],
  "accepted": [
   "ValueError: didn't return an HttpResponse"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q03"
 },
 {
  "id": "EX-088BE1D7D1",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] GET va POST ni ajratish?",
  "options": [
   "if request.method == 'GET': ...",
   "if request.GET:",
   "if request.is_get",
   "avtomatik"
  ],
  "accepted": [
   "if request.method == 'GET': ..."
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q04"
 },
 {
  "id": "EX-DF5CE17821",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] render() nima qaytaradi?",
  "options": [
   "HttpResponse (HTML)",
   "None",
   "str",
   "dict"
  ],
  "accepted": [
   "HttpResponse (HTML)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q05"
 },
 {
  "id": "EX-B8AC397A40",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] books-list.html ni kontekst bilan:",
  "options": null,
  "accepted": [
   "return render(request, 'books-list.html', {'books': books})",
   "render(request, \"books-list.html\", {\"books\": books})"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q06"
 },
 {
  "id": "EX-1CB4CD3FB7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] render 3-arg nima?",
  "options": [
   "Kontekst lug'ati",
   "Template nomi",
   "Status",
   "Headers"
  ],
  "accepted": [
   "Kontekst lug'ati"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q07"
 },
 {
  "id": "EX-8348A8383D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] Private kitob begonaga HttpResponse('topilmadi') — muammo?",
  "options": [
   "Status 200, 404 emas",
   "To'g'ri",
   "Faqat matn xato",
   "CSRF"
  ],
  "accepted": [
   "Status 200, 404 emas"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q08"
 },
 {
  "id": "EX-7192439DA6",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON] Book ni id bo'yicha xavfsiz olish:",
  "options": null,
  "accepted": [
   "get_object_or_404(Book, id=id)",
   "get_object_or_404(Book, pk=id)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q09"
 },
 {
  "id": "EX-5CEC2CCEEC",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] raise Http404 natijasi?",
  "options": [
   "404 status + 404.html (DEBUG=False)",
   "200",
   "500",
   "302"
  ],
  "accepted": [
   "404 status + 404.html (DEBUG=False)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q10"
 },
 {
  "id": "EX-04AB6A26A9",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] index view autentifikatsiya bo'lsa?",
  "options": [
   "/book-list/ ga redirect",
   "books-list render",
   "login",
   "404"
  ],
  "accepted": [
   "/book-list/ ga redirect"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q11"
 },
 {
  "id": "EX-D0018298E4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] add_book da GET?",
  "options": [
   "Forma ko'rsatadi",
   "Kitob yaratadi",
   "404",
   "None"
  ],
  "accepted": [
   "Forma ko'rsatadi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M07-Q12"
 },
 {
  "id": "EX-0F04E19F25",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] {{ book.name }} XSS dan himoyalanganmi?",
  "options": [
   "Ha, avto-escape",
   "Yo'q",
   "Faqat admin",
   "Faqat DEBUG"
  ],
  "accepted": [
   "Ha, avto-escape"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q01"
 },
 {
  "id": "EX-2A5B4DB915",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] {{ book.user.username }} nima qiladi?",
  "options": [
   "Bog'langan user.username",
   "Xato",
   "None",
   "SQL"
  ],
  "accepted": [
   "Bog'langan user.username"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q02"
 },
 {
  "id": "EX-627630FE9C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] {{ book.bookview_set.count }} — qavs?",
  "options": [
   "Shablonda qavssiz (callable chaqiriladi)",
   "count() majburiy",
   "Xato",
   "Faqat Python"
  ],
  "accepted": [
   "Shablonda qavssiz (callable chaqiriladi)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q03"
 },
 {
  "id": "EX-B847546DC0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Ro'yxat aylanma tegi?",
  "options": [
   "{% for book in books %}",
   "{{ for book }}",
   "#for",
   "{% loop %}"
  ],
  "accepted": [
   "{% for book in books %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q04"
 },
 {
  "id": "EX-2CDE9CCECD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Shart tegi?",
  "options": [
   "{% if is_public %}",
   "{{ if }}",
   "#if",
   "{% when %}"
  ],
  "accepted": [
   "{% if is_public %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q05"
 },
 {
  "id": "EX-7C1F375F3C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] messages ni ko'rsatish?",
  "options": [
   "{% if messages %} ... {% endif %}",
   "{{ messages.all }}",
   "request.messages",
   "faqat admin"
  ],
  "accepted": [
   "{% if messages %} ... {% endif %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q06"
 },
 {
  "id": "EX-73BAB83764",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] base.html ulash?",
  "options": [
   "{% extends 'base.html' %}",
   "{% include 'base.html' %}",
   "import base",
   "{% base %}"
  ],
  "accepted": [
   "{% extends 'base.html' %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q07"
 },
 {
  "id": "EX-021BDACDDA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Formaga CSRF?",
  "options": [
   "{% csrf_token %}",
   "{{ csrf }}",
   "csrf()",
   "avtomatik"
  ],
  "accepted": [
   "{% csrf_token %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q08"
 },
 {
  "id": "EX-6D970EF249",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Static fayl URL?",
  "options": [
   "{% static 'x.css' %}",
   "{{ static }}",
   "/static avto",
   "media"
  ],
  "accepted": [
   "{% static 'x.css' %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q09"
 },
 {
  "id": "EX-71407CACAA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] |safe filtri xavfi?",
  "options": [
   "XSS mumkin",
   "Tezroq",
   "Hech narsa",
   "Faqat admin"
  ],
  "accepted": [
   "XSS mumkin"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q10"
 },
 {
  "id": "EX-57D349B1B2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] is_public true bo'lsa active klass (bir qator):",
  "options": null,
  "accepted": [
   "{% if is_public %}class=\"active\"{% endif %}",
   "{% if is_public %}class='active'{% endif %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M08-Q11"
 },
 {
  "id": "EX-AA6B3D9141",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Standart foydalanuvchi modeli?",
  "options": [
   "django.contrib.auth.models.User",
   "main.User",
   "auth.Account",
   "Person"
  ],
  "accepted": [
   "django.contrib.auth.models.User"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q01"
 },
 {
  "id": "EX-DB17D5A13D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] set_password nima qiladi?",
  "options": [
   "Parolni hash qiladi (saqlamaydi)",
   "DB ga yozadi",
   "Validator ishlatadi",
   "Login qiladi"
  ],
  "accepted": [
   "Parolni hash qiladi (saqlamaydi)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q02"
 },
 {
  "id": "EX-AB4B717A1D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] check_password to'g'ri bo'lsa?",
  "options": [
   "True",
   "User obyekt",
   "None",
   "login avto"
  ],
  "accepted": [
   "True"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q03"
 },
 {
  "id": "EX-4ABF37815F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] authenticate vs qo'lda get+check_password?",
  "options": [
   "authenticate is_active va backend tekshiradi",
   "Bir xil",
   "authenticate sekin",
   "Faqat admin"
  ],
  "accepted": [
   "authenticate is_active va backend tekshiradi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q04"
 },
 {
  "id": "EX-EAA1403428",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Foydalanuvchini login qilish:",
  "options": null,
  "accepted": [
   "login(request, user)",
   "django_login(request, user)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q05"
 },
 {
  "id": "EX-62AF78BB7F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Anonim foydalanuvchi is_authenticated?",
  "options": [
   "False",
   "True",
   "None",
   "Xato"
  ],
  "accepted": [
   "False"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q06"
 },
 {
  "id": "EX-463D8B8C4C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] @login_required o'rniga loyihada?",
  "options": [
   "Har viewda if not is_authenticated",
   "Middleware",
   "Faqat urls",
   "Hech narsa"
  ],
  "accepted": [
   "Har viewda if not is_authenticated"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q07"
 },
 {
  "id": "EX-5CD51E165A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] AUTH_PASSWORD_VALIDATORS qachon ishlaydi?",
  "options": [
   "Form / validate_password orqali",
   "set_password da avto",
   "Har login",
   "Hech qachon"
  ],
  "accepted": [
   "Form / validate_password orqali"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q08"
 },
 {
  "id": "EX-4C3D06B0DE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] is_active=False + qo'lda check_password login?",
  "options": [
   "Kira olishi mumkin (B08)",
   "Hech qachon",
   "Faqat admin",
   "Faqat shell"
  ],
  "accepted": [
   "Kira olishi mumkin (B08)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q09"
 },
 {
  "id": "EX-5384BC2B44",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] logout nima qiladi?",
  "options": [
   "Sessiyani tozalaydi",
   "User ni o'chiradi",
   "Parolni o'chiradi",
   "Cookie ni butunlay bloklaydi"
  ],
  "accepted": [
   "Sessiyani tozalaydi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q10"
 },
 {
  "id": "EX-360FBD0D3A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-messages"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Xato xabar ko'rsatish?",
  "options": [
   "messages.error(request, '...')",
   "print",
   "alert",
   "raise"
  ],
  "accepted": [
   "messages.error(request, '...')"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q11"
 },
 {
  "id": "EX-86B5520493",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Dekorator bilan himoya:",
  "options": null,
  "accepted": [
   "@login_required",
   "@login_required(login_url='/login/')"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q12"
 },
 {
  "id": "EX-0E795C6D59",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] auth da 'login' tushunchasi bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q20"
 },
 {
  "id": "EX-CA81F983FB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] auth da 'logout' tushunchasi bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q21"
 },
 {
  "id": "EX-2D22EBDD99",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] auth da 'authenticate' tushunchasi bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q22"
 },
 {
  "id": "EX-BB736D5192",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] auth da 'set_password' tushunchasi bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q23"
 },
 {
  "id": "EX-76562373E1",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] auth da 'check_password' tushunchasi bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M09-Q24"
 },
 {
  "id": "EX-59C818893B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] add_book URL dan https:// ni?",
  "options": [
   "Kesib tashlaydi (url[8:])",
   "Saqlaydi",
   "Rad etadi",
   "None"
  ],
  "accepted": [
   "Kesib tashlaydi (url[8:])"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q01"
 },
 {
  "id": "EX-6CE804345C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON] url maydoni yo'q POST —?",
  "options": [
   "AttributeError (None.startswith)",
   "Bo'sh saqlanadi",
   "404",
   "302"
  ],
  "accepted": [
   "AttributeError (None.startswith)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q02"
 },
 {
  "id": "EX-01F34AC700",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] public=False kitobni begona ochsa (haqiqiy kod)?",
  "options": [
   "'kitob topilmadi' (200)",
   "404",
   "403",
   "302"
  ],
  "accepted": [
   "'kitob topilmadi' (200)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q03"
 },
 {
  "id": "EX-CFC356DA50",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] ?public=true nima ko'rsatadi?",
  "options": [
   "Barcha public kitoblar (o'ziniki ham)",
   "Faqat begonalar",
   "Faqat o'ziniki",
   "Bo'sh"
  ],
  "accepted": [
   "Barcha public kitoblar (o'ziniki ham)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q04"
 },
 {
  "id": "EX-3D287967B4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Ko'rishlar soni qanday?",
  "options": [
   "get_or_create + count (noyob user)",
   "Har ochish +1",
   "Faqat cookie",
   "Session"
  ],
  "accepted": [
   "get_or_create + count (noyob user)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q05"
 },
 {
  "id": "EX-C9A821040A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] UniqueConstraint yo'q — xavf?",
  "options": [
   "Poyga dublikat BookView",
   "Hech narsa",
   "Sekin",
   "Faqat PG"
  ],
  "accepted": [
   "Poyga dublikat BookView"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q06"
 },
 {
  "id": "EX-3178885DAA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Ega private kitobini ochsa?",
  "options": [
   "Ko'radi + BookView yozuvi",
   "Rad",
   "404",
   "Faqat admin"
  ],
  "accepted": [
   "Ko'radi + BookView yozuvi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q07"
 },
 {
  "id": "EX-583C7C3127",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] public checkbox 'on'?",
  "options": [
   "True saqlanadi",
   "'on' satr",
   "False",
   "None"
  ],
  "accepted": [
   "True saqlanadi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M10-Q08"
 },
 {
  "id": "EX-3E17F33840",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Modelni adminga ulash?",
  "options": [
   "admin.site.register(Book)",
   "register(Book)",
   "Book.admin = True",
   "urls.py"
  ],
  "accepted": [
   "admin.site.register(Book)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M11-Q01"
 },
 {
  "id": "EX-D3F8477079",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Superuser yaratish?",
  "options": [
   "python manage.py createsuperuser",
   "migrate",
   "startapp",
   "shell"
  ],
  "accepted": [
   "python manage.py createsuperuser"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M11-Q02"
 },
 {
  "id": "EX-C9EA789D85",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] __str__ yo'q — admin ro'yxat?",
  "options": [
   "Book object (1)",
   "name",
   "(bo'sh)",
   "id"
  ],
  "accepted": [
   "Book object (1)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M11-Q03"
 },
 {
  "id": "EX-A586F857B0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] ModelAdmin nima uchun?",
  "options": [
   "Admin ro'yxat/filter/sozlama",
   "Faqat CSS",
   "Migratsiya",
   "Test"
  ],
  "accepted": [
   "Admin ro'yxat/filter/sozlama"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M11-Q04"
 },
 {
  "id": "EX-817BA70D8A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] BookView adminga ulanganmi (haqiqiy)?",
  "options": [
   "Yo'q",
   "Ha",
   "Faqat DEBUG",
   "Faqat superuser"
  ],
  "accepted": [
   "Yo'q"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M11-Q05"
 },
 {
  "id": "EX-5D422DD756",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] CSRF middleware yo'q —?",
  "options": [
   "Begona sayt POST qila oladi",
   "Hech narsa",
   "Faqat GET xavfli",
   "Static buziladi"
  ],
  "accepted": [
   "Begona sayt POST qila oladi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q01"
 },
 {
  "id": "EX-87820281BB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Avto-escape nima qiladi?",
  "options": [
   "HTML maxsus belgilarini escape",
   "SQL inject to'sadi",
   "CSRF",
   "Parol hash"
  ],
  "accepted": [
   "HTML maxsus belgilarini escape"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q02"
 },
 {
  "id": "EX-1C32EB5249",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] /book/<id>/ IDOR xavfi?",
  "options": [
   "Boshqa user private kitobini ko'rishga urinish",
   "Faqat public",
   "CSRF",
   "XSS"
  ],
  "accepted": [
   "Boshqa user private kitobini ko'rishga urinish"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q03"
 },
 {
  "id": "EX-FE1FA0C6AC",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] DEBUG=True prod da?",
  "options": [
   "Traceback/sozlamalar oshkor",
   "Yaxshi",
   "Majburiy",
   "Tezroq"
  ],
  "accepted": [
   "Traceback/sozlamalar oshkor"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q04"
 },
 {
  "id": "EX-A08C59092E",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] GET /logout/ xavfi?",
  "options": [
   "<img src> bilan majburan chiqish",
   "Hech narsa",
   "Faqat POST xavfli",
   "Cookie o'g'irlash"
  ],
  "accepted": [
   "<img src> bilan majburan chiqish"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q05"
 },
 {
  "id": "EX-F613B5D6A0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] SECRET_KEY gitda?",
  "options": [
   "Xavfli — oshkor",
   "Yaxshi amaliyot",
   "Majburiy",
   "Faqat private repo OK"
  ],
  "accepted": [
   "Xavfli — oshkor"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q06"
 },
 {
  "id": "EX-156EBB85B8",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Parol '1' o'tishi mumkinmi (haqiqiy signup)?",
  "options": [
   "Ha (validatorlar ishlamaydi)",
   "Yo'q",
   "Faqat admin",
   "Faqat shell"
  ],
  "accepted": [
   "Ha (validatorlar ishlamaydi)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q07"
 },
 {
  "id": "EX-0DBA47D8E4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] Login da 'user yo'q' vs 'parol xato' alohida?",
  "options": [
   "User enumeration xavfi",
   "Yaxshi UX majburiy",
   "CSRF",
   "Hech narsa"
  ],
  "accepted": [
   "User enumeration xavfi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q08"
 },
 {
  "id": "EX-6B9D960184",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Formaga CSRF token:",
  "options": null,
  "accepted": [
   "{% csrf_token %}"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q09"
 },
 {
  "id": "EX-C0AD1DE1F3",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] ALLOWED_HOSTS=['*']?",
  "options": [
   "Har qanday Host — xavfli",
   "Xavfsiz",
   "Django default",
   "Faqat local"
  ],
  "accepted": [
   "Har qanday Host — xavfli"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-Q10"
 },
 {
  "id": "EX-661268138B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] B05 haqiqiy kamchilik sifatida ro'yxatdami?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-BUG-B05"
 },
 {
  "id": "EX-D36F3277ED",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] B06 haqiqiy kamchilik sifatida ro'yxatdami?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-BUG-B06"
 },
 {
  "id": "EX-E96F84DFBC",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] B07 haqiqiy kamchilik sifatida ro'yxatdami?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-BUG-B07"
 },
 {
  "id": "EX-01D2E97C7D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] B08 haqiqiy kamchilik sifatida ro'yxatdami?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-BUG-B08"
 },
 {
  "id": "EX-042754F5AD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] B09 haqiqiy kamchilik sifatida ro'yxatdami?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-BUG-B09"
 },
 {
  "id": "EX-C529ACC2A0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] B20 haqiqiy kamchilik sifatida ro'yxatdami?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M12-BUG-B20"
 },
 {
  "id": "EX-9DB90D44C2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Django testlar qaysi klassdan meros oladi?",
  "options": [
   "TestCase",
   "unittest.Test",
   "pytest.Case",
   "Client"
  ],
  "accepted": [
   "TestCase"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q01"
 },
 {
  "id": "EX-33D45066CE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] HTTP so'rovni testlash uchun?",
  "options": [
   "django.test.Client",
   "requests.get",
   "curl",
   "Browser"
  ],
  "accepted": [
   "django.test.Client"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q02"
 },
 {
  "id": "EX-9A7B55060F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Redirect ni tekshirish?",
  "options": [
   "assertRedirects",
   "assertEqual",
   "assertTrue",
   "assertContains"
  ],
  "accepted": [
   "assertRedirects"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q03"
 },
 {
  "id": "EX-389EB30F1D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] HTML matn borligini?",
  "options": [
   "assertContains",
   "assertRedirects",
   "assertHTML",
   "assertText"
  ],
  "accepted": [
   "assertContains"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q04"
 },
 {
  "id": "EX-ED1539600B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Test DB haqida to'g'ri?",
  "options": [
   "Har test uchun alohida/toza muhit",
   "Prod DB ishlatiladi",
   "migrate shart emas",
   "Faqat sqlite in-memory majburiy"
  ],
  "accepted": [
   "Har test uchun alohida/toza muhit"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q05"
 },
 {
  "id": "EX-0A063CF768",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] main/tests.py hozir?",
  "options": [
   "Bo'sh (B22)",
   "15+ test",
   "Faqat admin",
   "Faqat models"
  ],
  "accepted": [
   "Bo'sh (B22)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q06"
 },
 {
  "id": "EX-4EE7C32716",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Anonim GET /book-list/ redirect tekshiruv (1 gap g'oya):",
  "options": null,
  "accepted": [
   "self.client.get('/book-list/') keyin assertRedirects",
   "client.get + assertRedirects"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q07"
 },
 {
  "id": "EX-36C36C6532",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] setUp nima uchun?",
  "options": [
   "Har testdan oldin tayyorgarlik",
   "Faqat bir marta",
   "O'chirish",
   "Migrate"
  ],
  "accepted": [
   "Har testdan oldin tayyorgarlik"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q08"
 },
 {
  "id": "EX-8E12D9226A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON] Login qilib so'rov?",
  "options": [
   "client.login(username=..., password=...)",
   "client.auth()",
   "session.login",
   "force_login faqat"
  ],
  "accepted": [
   "client.login(username=..., password=...)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q09"
 },
 {
  "id": "EX-0E8A664C48",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Kamida nechta test tavsiya (PROMPT)?",
  "options": [
   "15+",
   "1",
   "5",
   "100"
  ],
  "accepted": [
   "15+"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q10"
 },
 {
  "id": "EX-1C77D47C2A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] assertEqual unittest/Django da bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q20"
 },
 {
  "id": "EX-859207D2FF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] assertTrue unittest/Django da bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q21"
 },
 {
  "id": "EX-E321F7D9D6",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] assertFalse unittest/Django da bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q22"
 },
 {
  "id": "EX-9784278C3A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] assertIn unittest/Django da bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q23"
 },
 {
  "id": "EX-92134D0BFB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] assertRaises unittest/Django da bormi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M13-Q24"
 },
 {
  "id": "EX-8ACD57ABCC",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Takroriy auth tekshiruv o'rniga?",
  "options": [
   "@login_required",
   "Middleware o'chirish",
   "Faqat urls",
   "Frontend"
  ],
  "accepted": [
   "@login_required"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q01"
 },
 {
  "id": "EX-47E763C6B6",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] try/except DoesNotExist o'rniga?",
  "options": [
   "get_object_or_404",
   "Book.objects.all()",
   "filter().first()",
   "HttpResponse"
  ],
  "accepted": [
   "get_object_or_404"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q02"
 },
 {
  "id": "EX-4FC683045B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] ModelForm nima beradi?",
  "options": [
   "Model asosida forma + validatsiya",
   "Faqat HTML",
   "Faqat admin",
   "Migratsiya"
  ],
  "accepted": [
   "Model asosida forma + validatsiya"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q03"
 },
 {
  "id": "EX-D05D61CAC7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Ro'yxat uchun CBV?",
  "options": [
   "ListView",
   "DetailView",
   "CreateView",
   "TemplateView"
  ],
  "accepted": [
   "ListView"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q04"
 },
 {
  "id": "EX-BFA252180C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Takroriy style yechimi?",
  "options": [
   "base.html + extends",
   "Har faylda copy",
   "inline JS",
   "CDN majburiy"
  ],
  "accepted": [
   "base.html + extends"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q05"
 },
 {
  "id": "EX-5E8FC06796",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Qattiq URL o'rniga?",
  "options": [
   "name= + reverse/redirect('name')",
   "Faqat path string",
   "Absolute URL",
   "Hardcode OK"
  ],
  "accepted": [
   "name= + reverse/redirect('name')"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q06"
 },
 {
  "id": "EX-7397742A18",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] BookView dublikatini to'sish?",
  "options": [
   "UniqueConstraint(book, user)",
   "unique=True faqat book",
   "Faqat get_or_create",
   "Hech narsa"
  ],
  "accepted": [
   "UniqueConstraint(book, user)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q07"
 },
 {
  "id": "EX-8D1AF90434",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] N+1 count yechimi?",
  "options": [
   "annotate(Count(...))",
   "prefetch faqat",
   "select_related count",
   "cache template"
  ],
  "accepted": [
   "annotate(Count(...))"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q08"
 },
 {
  "id": "EX-B6EE5EDA5E",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] SECRET_KEY qayerda bo'lishi kerak?",
  "options": [
   "Muhit o'zgaruvchisi",
   "Git ichida",
   "Template",
   "urls.py"
  ],
  "accepted": [
   "Muhit o'zgaruvchisi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q09"
 },
 {
  "id": "EX-371151D600",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] login_required dekoratori:",
  "options": null,
  "accepted": [
   "@login_required",
   "@login_required(login_url='/login/')"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q10"
 },
 {
  "id": "EX-DB68157760",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] ListView Django CBV mi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q20"
 },
 {
  "id": "EX-849BC8C827",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] DetailView Django CBV mi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q21"
 },
 {
  "id": "EX-AEA8BB3AD2",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] CreateView Django CBV mi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q22"
 },
 {
  "id": "EX-A6204E1037",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] UpdateView Django CBV mi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q23"
 },
 {
  "id": "EX-1B5CA37FF7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] DeleteView Django CBV mi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M14-Q24"
 },
 {
  "id": "EX-6ED7190C1C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M15-sprint-steps"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Sprint bosqichlari soni (PROMPT)?",
  "options": [
   "20",
   "10",
   "5",
   "50"
  ],
  "accepted": [
   "20"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M15-Q01"
 },
 {
  "id": "EX-CC74D6641D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M15-grader-gate"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Har qadamdan keyin?",
  "options": [
   "Grader darvozasi (test yashil)",
   "Faqat commit",
   "Faqat UI",
   "O'tkazib yuborish"
  ],
  "accepted": [
   "Grader darvozasi (test yashil)"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M15-Q02"
 },
 {
  "id": "EX-5A71B3B663",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M15-sprint-steps"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Sprint maqsadi?",
  "options": [
   "Noldan ishlaydigan mini-BookShop",
   "Faqat o'qish",
   "Faqat test",
   "Faqat CSS"
  ],
  "accepted": [
   "Noldan ishlaydigan mini-BookShop"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M15-Q03"
 },
 {
  "id": "EX-18CB2487AD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M15-grader-gate"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Qadam yashil bo'lmasa?",
  "options": [
   "Keyingi qadam ochilmaydi",
   "O'tkazib ketish mumkin",
   "Avto tuzatish",
   "Ignore"
  ],
  "accepted": [
   "Keyingi qadam ochilmaydi"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M15-Q04"
 },
 {
  "id": "EX-7924BAB977",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M15-sprint-steps"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Birinchi qadamlar odatda?",
  "options": [
   "startproject / startapp / settings",
   "Faqat template",
   "Faqat test",
   "Deploy"
  ],
  "accepted": [
   "startproject / startapp / settings"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M15-Q05"
 },
 {
  "id": "EX-C39166EDFA",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] O'zgarishlarni saqlash?",
  "options": [
   "git commit",
   "git push only",
   "git clone",
   "git rm"
  ],
  "accepted": [
   "git commit"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q01"
 },
 {
  "id": "EX-6CE1719014",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] db.sqlite3 ni gitdan chiqarish?",
  "options": [
   ".gitignore ga yozish",
   "rm -rf",
   "git ignore buyrug'i yo'q",
   "commit qilmaslik yetarli"
  ],
  "accepted": [
   ".gitignore ga yozish"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q02"
 },
 {
  "id": "EX-C043EFC191",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Paketlar ro'yxati?",
  "options": [
   "requirements.txt",
   "packages.json",
   "Pipfile only",
   "setup.py majburiy"
  ],
  "accepted": [
   "requirements.txt"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q03"
 },
 {
  "id": "EX-F743B32AD5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] Virtual muhit?",
  "options": [
   "python -m venv .venv",
   "global pip only",
   "docker majburiy",
   "conda only"
  ],
  "accepted": [
   "python -m venv .venv"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q04"
 },
 {
  "id": "EX-D45618EB5F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] DB ni gitda saqlash muammosi?",
  "options": [
   "Konflikt + sirlar/ma'lumot oshkor",
   "Tezroq clone",
   "Majburiy Django",
   "Hech narsa"
  ],
  "accepted": [
   "Konflikt + sirlar/ma'lumot oshkor"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q05"
 },
 {
  "id": "EX-68F28CF817",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] Farqni ko'rish?",
  "options": [
   "git diff",
   "git log only",
   "git status only",
   "git show-branch"
  ],
  "accepted": [
   "git diff"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q06"
 },
 {
  "id": "EX-78352B0D73",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON] .env fayl gitga?",
  "options": [
   "Yo'q — ignore",
   "Ha",
   "Faqat private",
   "Faqat prod"
  ],
  "accepted": [
   "Yo'q — ignore"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q07"
 },
 {
  "id": "EX-C0E1E1DE40",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON] Django o'rnatishni qayd etish:",
  "options": null,
  "accepted": [
   "pip freeze > requirements.txt",
   "Django==... requirements.txt ga"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q08"
 },
 {
  "id": "EX-849EE14589",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] git init mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q20"
 },
 {
  "id": "EX-938430FCA7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] git add mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q21"
 },
 {
  "id": "EX-CE24955514",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] git commit mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q22"
 },
 {
  "id": "EX-6552BA2407",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] git status mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q23"
 },
 {
  "id": "EX-B429461AB4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] git log mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q24"
 },
 {
  "id": "EX-F517B53472",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON] git diff mavjudmi?",
  "options": [
   "Ha",
   "Yo'q"
  ],
  "accepted": [
   "Ha"
  ],
  "time_budget": 45,
  "sealed": true,
  "source_practice": "M16-Q25"
 },
 {
  "id": "EX-346EB7E770",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M00-import (import va from … import): to'g'ri identifikator?",
  "options": [
   "M00-import",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-import"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0F3D151EE5",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M00-import (import va from … import): to'g'ri identifikator?",
  "options": [
   "M00-import",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-import"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-72F232834E",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M00-import (import va from … import): to'g'ri identifikator?",
  "options": [
   "M00-import",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-import"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-710A690AB6",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-def-return (def, return, None qaytish): to'g'ri identifikator?",
  "options": [
   "M00-def-return",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-def-return"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C609401260",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-def-return (def, return, None qaytish): to'g'ri identifikator?",
  "options": [
   "M00-def-return",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-def-return"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B90F011FAC",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-def-return"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-def-return (def, return, None qaytish): to'g'ri identifikator?",
  "options": [
   "M00-def-return",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-def-return"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-58D0C6DED9",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-if (if / elif / else): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-6349879F23",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-if (if / elif / else): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-287AF4EE9D",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-if"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-if (if / elif / else): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F388EE87C9",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] str: startswith, slicing nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "method"
  ]
 },
 {
  "id": "EX-6848C5F8D0",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] str: startswith, slicing nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "method"
  ]
 },
 {
  "id": "EX-20DA37EAD7",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M00-str-methods"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] str: startswith, slicing nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "method"
  ]
 },
 {
  "id": "EX-60E7303377",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M00-try-except (try / except Exception): to'g'ri identifikator?",
  "options": [
   "M00-try-except",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-try-except"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F76A1E6874",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M00-try-except (try / except Exception): to'g'ri identifikator?",
  "options": [
   "M00-try-except",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-try-except"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-80C83597CF",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M00-try-except"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M00-try-except (try / except Exception): to'g'ri identifikator?",
  "options": [
   "M00-try-except",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-try-except"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DD62D9B246",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-class (class, self, meros): to'g'ri identifikator?",
  "options": [
   "M00-class",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-class"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B0BE466302",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-class (class, self, meros): to'g'ri identifikator?",
  "options": [
   "M00-class",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-class"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-349A4AC823",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-class"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-class (class, self, meros): to'g'ri identifikator?",
  "options": [
   "M00-class",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-class"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7F0DAEF322",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-kwargs (kwargs va type hint): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4155728E55",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-kwargs (kwargs va type hint): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C960962121",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-kwargs"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-kwargs (kwargs va type hint): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-79826738E8",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] None va bo'sh qiymat nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "none"
  ]
 },
 {
  "id": "EX-858D2176AF",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] None va bo'sh qiymat nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "none"
  ]
 },
 {
  "id": "EX-0F8EC030A7",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M00-none"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] None va bo'sh qiymat nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "none"
  ]
 },
 {
  "id": "EX-D42F217A11",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-http (HTTP so'rov/javob): to'g'ri identifikator?",
  "options": [
   "M01-http",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-http"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D41AD757AE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-http (HTTP so'rov/javob): to'g'ri identifikator?",
  "options": [
   "M01-http",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-http"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5EDF4B17AB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-http"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-http (HTTP so'rov/javob): to'g'ri identifikator?",
  "options": [
   "M01-http",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-http"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7213FDDB57",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M01-methods (GET vs POST): to'g'ri identifikator?",
  "options": [
   "M01-methods",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-methods"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-095E3CDC72",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M01-methods (GET vs POST): to'g'ri identifikator?",
  "options": [
   "M01-methods",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-methods"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-71AB2F456C",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M01-methods"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M01-methods (GET vs POST): to'g'ri identifikator?",
  "options": [
   "M01-methods",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-methods"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2C44F9FABE",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M01-status-codes (200/302/404/405/500): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-109BE52166",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M01-status-codes (200/302/404/405/500): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D050318358",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M01-status-codes"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M01-status-codes (200/302/404/405/500): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5381320B56",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Redirect = Location header nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "redire"
  ]
 },
 {
  "id": "EX-07A6B92FF3",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Redirect = Location header nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "redire"
  ]
 },
 {
  "id": "EX-D3D8E16404",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-redirect"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Redirect = Location header nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "redire"
  ]
 },
 {
  "id": "EX-5873493247",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-cookie-session (Cookie va sessiya): to'g'ri identifikator?",
  "options": [
   "M01-cookie-session",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-cookie-session"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0859057E9A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-cookie-session (Cookie va sessiya): to'g'ri identifikator?",
  "options": [
   "M01-cookie-session",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-cookie-session"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-57C44B8300",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-cookie-session"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-cookie-session (Cookie va sessiya): to'g'ri identifikator?",
  "options": [
   "M01-cookie-session",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-cookie-session"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-6FEE8AB904",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M01-form-encoding (Forma kodlash (urlencoded)): to'g'ri identifikator?",
  "options": [
   "M01-form-encoding",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-form-encoding"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-94F07E6E72",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M01-form-encoding (Forma kodlash (urlencoded)): to'g'ri identifikator?",
  "options": [
   "M01-form-encoding",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-form-encoding"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4A75A72A93",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M01-form-encoding"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M01-form-encoding (Forma kodlash (urlencoded)): to'g'ri identifikator?",
  "options": [
   "M01-form-encoding",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-form-encoding"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E18FB6B5F8",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M01-query-string (Query string ?public=true): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CD6240FF4D",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M01-query-string (Query string ?public=true): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A297AF1634",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M01-query-string"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M01-query-string (Query string ?public=true): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B77F7542F2",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] request.GET/POST/method/user nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "attrs"
  ]
 },
 {
  "id": "EX-3F225F8216",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] request.GET/POST/method/user nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "attrs"
  ]
 },
 {
  "id": "EX-42E20BFD54",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-request-attrs"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] request.GET/POST/method/user nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "attrs"
  ]
 },
 {
  "id": "EX-123045F713",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M02-startproject (startproject vs startapp): to'g'ri identifikator?",
  "options": [
   "M02-startproject",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-startproject"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B4ED8C69A4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M02-startproject (startproject vs startapp): to'g'ri identifikator?",
  "options": [
   "M02-startproject",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-startproject"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7CED334B24",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-startproject"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M02-startproject (startproject vs startapp): to'g'ri identifikator?",
  "options": [
   "M02-startproject",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-startproject"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-91C9EB66C3",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-manage (manage.py buyruqlari): to'g'ri identifikator?",
  "options": [
   "M02-manage",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-manage"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-18A062B168",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-manage (manage.py buyruqlari): to'g'ri identifikator?",
  "options": [
   "M02-manage",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-manage"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4F94E76EBF",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-manage"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-manage (manage.py buyruqlari): to'g'ri identifikator?",
  "options": [
   "M02-manage",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-manage"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B3A3FD56EB",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M02-settings (settings anatomiyasi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-652E5116A4",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M02-settings (settings anatomiyasi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DC33165A6C",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M02-settings (settings anatomiyasi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B9D486AF52",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] INSTALLED_APPS nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "apps"
  ]
 },
 {
  "id": "EX-C7FEAECF22",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] INSTALLED_APPS nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "apps"
  ]
 },
 {
  "id": "EX-904FD5A2AA",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M02-installed-apps"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] INSTALLED_APPS nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "apps"
  ]
 },
 {
  "id": "EX-F4238FE7C3",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M02-middleware (MIDDLEWARE tartibi): to'g'ri identifikator?",
  "options": [
   "M02-middleware",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-middleware"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9D8E56F078",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M02-middleware (MIDDLEWARE tartibi): to'g'ri identifikator?",
  "options": [
   "M02-middleware",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-middleware"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F84FC4B07C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M02-middleware"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M02-middleware (MIDDLEWARE tartibi): to'g'ri identifikator?",
  "options": [
   "M02-middleware",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-middleware"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-20666968A3",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-request-cycle (So'rov hayot sikli): to'g'ri identifikator?",
  "options": [
   "M02-request-cycle",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-request-cycle"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-6EF94A9FF5",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-request-cycle (So'rov hayot sikli): to'g'ri identifikator?",
  "options": [
   "M02-request-cycle",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-request-cycle"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E378CCB4A2",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-request-cycle"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-request-cycle (So'rov hayot sikli): to'g'ri identifikator?",
  "options": [
   "M02-request-cycle",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-request-cycle"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-78286EA080",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-fields (Maydon turlari (Char/Date/Bool/FK)): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-037B376238",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-fields (Maydon turlari (Char/Date/Bool/FK)): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-FC0634AA2E",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-fields (Maydon turlari (Char/Date/Bool/FK)): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-88415466BE",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] max_length nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "length"
  ]
 },
 {
  "id": "EX-2343CA2D52",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] max_length nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "length"
  ]
 },
 {
  "id": "EX-CAE5BE335E",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-max-length"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] max_length nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "length"
  ]
 },
 {
  "id": "EX-D7BF782F08",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-auto-now-add (auto_now_add): to'g'ri identifikator?",
  "options": [
   "M03-auto-now-add",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-auto-now-add"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-821660A747",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-auto-now-add (auto_now_add): to'g'ri identifikator?",
  "options": [
   "M03-auto-now-add",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-auto-now-add"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CE9DC226C6",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-auto-now-add"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-auto-now-add (auto_now_add): to'g'ri identifikator?",
  "options": [
   "M03-auto-now-add",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-auto-now-add"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1E22B18789",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-fk (ForeignKey + on_delete=CASCADE): to'g'ri identifikator?",
  "options": [
   "M03-fk",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-fk"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BA823F7363",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-fk (ForeignKey + on_delete=CASCADE): to'g'ri identifikator?",
  "options": [
   "M03-fk",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-fk"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E204C8FDAA",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-fk"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-fk (ForeignKey + on_delete=CASCADE): to'g'ri identifikator?",
  "options": [
   "M03-fk",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-fk"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-EEDE60EBE3",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-null-blank (null vs blank): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F0495251CC",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-null-blank (null vs blank): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-60253C25D4",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-null-blank"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-null-blank (null vs blank): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D921328582",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] default qiymat nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "defaul"
  ]
 },
 {
  "id": "EX-B1479EFD2B",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] default qiymat nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "defaul"
  ]
 },
 {
  "id": "EX-E52FB3B8DE",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-default"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] default qiymat nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "defaul"
  ]
 },
 {
  "id": "EX-41D13F494D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-user-id (user_id vs user): to'g'ri identifikator?",
  "options": [
   "M03-user-id",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-user-id"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BA1B16FDC7",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-user-id (user_id vs user): to'g'ri identifikator?",
  "options": [
   "M03-user-id",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-user-id"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7786839989",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-user-id"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-user-id (user_id vs user): to'g'ri identifikator?",
  "options": [
   "M03-user-id",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-user-id"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A48FAACB36",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-reverse (teskari menejer bookview_set): to'g'ri identifikator?",
  "options": [
   "M03-reverse",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-reverse"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-82888A91D2",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-reverse (teskari menejer bookview_set): to'g'ri identifikator?",
  "options": [
   "M03-reverse",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-reverse"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1A3114DFAA",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-reverse"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-reverse (teskari menejer bookview_set): to'g'ri identifikator?",
  "options": [
   "M03-reverse",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-reverse"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9CA64C2DC8",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-str (__str__): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C0BB70C600",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-str (__str__): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-27980CACF6",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M03-str"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M03-str (__str__): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B3B4967DF3",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Meta va UniqueConstraint nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "meta"
  ]
 },
 {
  "id": "EX-204D8CF9A9",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Meta va UniqueConstraint nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "meta"
  ]
 },
 {
  "id": "EX-2091F5CBEF",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-meta"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Meta va UniqueConstraint nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "meta"
  ]
 },
 {
  "id": "EX-2627B8BB34",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-get-filter (get / filter / exclude): to'g'ri identifikator?",
  "options": [
   "M04-get-filter",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-get-filter"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-99BF001142",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-get-filter (get / filter / exclude): to'g'ri identifikator?",
  "options": [
   "M04-get-filter",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-get-filter"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2BF1DA65EB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-get-filter"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-get-filter (get / filter / exclude): to'g'ri identifikator?",
  "options": [
   "M04-get-filter",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-get-filter"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-363B20838F",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-order-count (order_by / count / exists): to'g'ri identifikator?",
  "options": [
   "M04-order-count",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-order-count"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A6C2D5E499",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-order-count (order_by / count / exists): to'g'ri identifikator?",
  "options": [
   "M04-order-count",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-order-count"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-20B0F4655E",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-order-count"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-order-count (order_by / count / exists): to'g'ri identifikator?",
  "options": [
   "M04-order-count",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-order-count"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-007FD2D4B3",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-get-or-create (get_or_create): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-283633BFD7",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-get-or-create (get_or_create): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-60E0389F91",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-get-or-create"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-get-or-create (get_or_create): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2A4B45A4AA",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] DoesNotExist nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "exist"
  ]
 },
 {
  "id": "EX-A6234FB6D4",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] DoesNotExist nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "exist"
  ]
 },
 {
  "id": "EX-E59AA9AC00",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-does-not-exist"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] DoesNotExist nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "exist"
  ]
 },
 {
  "id": "EX-0058E11C10",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-lazy (Lazy QuerySet): to'g'ri identifikator?",
  "options": [
   "M04-lazy",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-lazy"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-8F255DA888",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-lazy (Lazy QuerySet): to'g'ri identifikator?",
  "options": [
   "M04-lazy",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-lazy"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B1D2389C1F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-lazy"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-lazy (Lazy QuerySet): to'g'ri identifikator?",
  "options": [
   "M04-lazy",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-lazy"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0C2DA6BE7D",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-order-id (order_by('-id')): to'g'ri identifikator?",
  "options": [
   "M04-order-id",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-order-id"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-24060A5DCF",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-order-id (order_by('-id')): to'g'ri identifikator?",
  "options": [
   "M04-order-id",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-order-id"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-3CFF18D4F4",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-order-id"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-order-id (order_by('-id')): to'g'ri identifikator?",
  "options": [
   "M04-order-id",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-order-id"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BD1FD9632E",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-q (Q obyektlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1DBD65B7DE",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-q (Q obyektlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E0EB4235A8",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-q"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-q (Q obyektlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-39A0314811",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] select_related nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "relate"
  ]
 },
 {
  "id": "EX-5E7BD8FCB7",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] select_related nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "relate"
  ]
 },
 {
  "id": "EX-A06AC26210",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-select-related"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] select_related nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "relate"
  ]
 },
 {
  "id": "EX-134F7F6AAD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-prefetch (prefetch_related): to'g'ri identifikator?",
  "options": [
   "M04-prefetch",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-prefetch"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-6DA4C5C3EB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-prefetch (prefetch_related): to'g'ri identifikator?",
  "options": [
   "M04-prefetch",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-prefetch"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AA69854524",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-prefetch"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-prefetch (prefetch_related): to'g'ri identifikator?",
  "options": [
   "M04-prefetch",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-prefetch"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AC68322D5C",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-annotate (annotate(Count)): to'g'ri identifikator?",
  "options": [
   "M04-annotate",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-annotate"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1AB6D69BD8",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-annotate (annotate(Count)): to'g'ri identifikator?",
  "options": [
   "M04-annotate",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-annotate"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CA135CDBBC",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-annotate"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M04-annotate (annotate(Count)): to'g'ri identifikator?",
  "options": [
   "M04-annotate",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-annotate"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CAB41E225E",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-n-plus-1 (N+1 muammosi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-788D574D73",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-n-plus-1 (N+1 muammosi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1661ABB680",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-n-plus-1"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-n-plus-1 (N+1 muammosi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9E5296B140",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-shell"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] shell bilan tajriba nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "shell"
  ]
 },
 {
  "id": "EX-AD69DBED80",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-shell"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] shell bilan tajriba nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "shell"
  ]
 },
 {
  "id": "EX-1A2735DDCD",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-shell"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] shell bilan tajriba nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "shell"
  ]
 },
 {
  "id": "EX-A588F354EB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-makemigrations (makemigrations vs migrate): to'g'ri identifikator?",
  "options": [
   "M05-makemigrations",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-makemigrations"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5B9182713D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-makemigrations (makemigrations vs migrate): to'g'ri identifikator?",
  "options": [
   "M05-makemigrations",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-makemigrations"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-21B5FD6E63",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-makemigrations"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-makemigrations (makemigrations vs migrate): to'g'ri identifikator?",
  "options": [
   "M05-makemigrations",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-makemigrations"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-19D80EF46B",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-showmigrations (showmigrations): to'g'ri identifikator?",
  "options": [
   "M05-showmigrations",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-showmigrations"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2F54EBD119",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-showmigrations (showmigrations): to'g'ri identifikator?",
  "options": [
   "M05-showmigrations",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-showmigrations"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-534A3AC8C0",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-showmigrations"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-showmigrations (showmigrations): to'g'ri identifikator?",
  "options": [
   "M05-showmigrations",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-showmigrations"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-08441C62E0",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-sqlmigrate (sqlmigrate): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-837CE4E7CA",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-sqlmigrate (sqlmigrate): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F12D8AE75E",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-sqlmigrate"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-sqlmigrate (sqlmigrate): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C791A943CB",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] AddField nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "field"
  ]
 },
 {
  "id": "EX-E77EB0283E",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] AddField nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "field"
  ]
 },
 {
  "id": "EX-832F412F96",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M05-add-field"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] AddField nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "field"
  ]
 },
 {
  "id": "EX-495E2A66A0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-rename (RenameField (detection)): to'g'ri identifikator?",
  "options": [
   "M05-rename",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-rename"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F10241F4DB",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-rename (RenameField (detection)): to'g'ri identifikator?",
  "options": [
   "M05-rename",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-rename"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BE9F33AD8C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-rename"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-rename (RenameField (detection)): to'g'ri identifikator?",
  "options": [
   "M05-rename",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-rename"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-277C7E8BE1",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-alter (AlterField): to'g'ri identifikator?",
  "options": [
   "M05-alter",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-alter"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BD6A501BE9",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-alter (AlterField): to'g'ri identifikator?",
  "options": [
   "M05-alter",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-alter"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-549D7D1D38",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-alter"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-alter (AlterField): to'g'ri identifikator?",
  "options": [
   "M05-alter",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-alter"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-502A8A080B",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-remove (RemoveField): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-6B65E55296",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-remove (RemoveField): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DD3B2F406B",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-remove"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-remove (RemoveField): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7EEA5381E8",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Migratsiya bog'liqlik grafi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "graph"
  ]
 },
 {
  "id": "EX-FD45DB55AC",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Migratsiya bog'liqlik grafi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "graph"
  ]
 },
 {
  "id": "EX-5E3556BB6B",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M05-graph"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] Migratsiya bog'liqlik grafi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "graph"
  ]
 },
 {
  "id": "EX-54F7C18C0C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-null-default (null qo'shish va default): to'g'ri identifikator?",
  "options": [
   "M05-null-default",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-null-default"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-8037E93836",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-null-default (null qo'shish va default): to'g'ri identifikator?",
  "options": [
   "M05-null-default",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-null-default"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0AC37AEA2D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M05-null-default"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M05-null-default (null qo'shish va default): to'g'ri identifikator?",
  "options": [
   "M05-null-default",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-null-default"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AFE67B50A4",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-history (0001–0008 tarixi): to'g'ri identifikator?",
  "options": [
   "M05-history",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-history"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-59E076BF83",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-history (0001–0008 tarixi): to'g'ri identifikator?",
  "options": [
   "M05-history",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-history"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-74FBC8E982",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-history"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-history (0001–0008 tarixi): to'g'ri identifikator?",
  "options": [
   "M05-history",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-history"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E8376B265E",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M06-path (path()): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CB456C97D1",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M06-path (path()): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4DBF537FCF",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M06-path"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M06-path (path()): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D1E95DB1C3",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] <int:id> nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "conver"
  ]
 },
 {
  "id": "EX-92D5863809",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] <int:id> nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "conver"
  ]
 },
 {
  "id": "EX-ED12EC3B13",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M06-converter"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] <int:id> nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "conver"
  ]
 },
 {
  "id": "EX-76102D39D8",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M06-order (URL tartibi): to'g'ri identifikator?",
  "options": [
   "M06-order",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-order"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1F18C1E1C0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M06-order (URL tartibi): to'g'ri identifikator?",
  "options": [
   "M06-order",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-order"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5041D6D71F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-order"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M06-order (URL tartibi): to'g'ri identifikator?",
  "options": [
   "M06-order",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-order"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-693B85FD97",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M06-trailing (oxirgi /): to'g'ri identifikator?",
  "options": [
   "M06-trailing",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-trailing"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-825E1008A8",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M06-trailing (oxirgi /): to'g'ri identifikator?",
  "options": [
   "M06-trailing",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-trailing"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A878C7DB32",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M06-trailing"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M06-trailing (oxirgi /): to'g'ri identifikator?",
  "options": [
   "M06-trailing",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-trailing"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-16B618FFEC",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M06-name-reverse (name= + reverse): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-FEB5F1BC26",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M06-name-reverse (name= + reverse): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F03C734131",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M06-name-reverse"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M06-name-reverse (name= + reverse): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B18B4912EC",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] include() nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "includ"
  ]
 },
 {
  "id": "EX-283C52A79D",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] include() nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "includ"
  ]
 },
 {
  "id": "EX-FFA5E74404",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M06-include"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] include() nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "includ"
  ]
 },
 {
  "id": "EX-11684932DD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M06-templateview (TemplateView.as_view): to'g'ri identifikator?",
  "options": [
   "M06-templateview",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-templateview"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AE4399FC20",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M06-templateview (TemplateView.as_view): to'g'ri identifikator?",
  "options": [
   "M06-templateview",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-templateview"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AD04669202",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M06-templateview"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M06-templateview (TemplateView.as_view): to'g'ri identifikator?",
  "options": [
   "M06-templateview",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M06-templateview"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C2CED76B75",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M07-fbv (FBV oqimi): to'g'ri identifikator?",
  "options": [
   "M07-fbv",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-fbv"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7A56CC11F4",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M07-fbv (FBV oqimi): to'g'ri identifikator?",
  "options": [
   "M07-fbv",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-fbv"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-977DE3BAC1",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M07-fbv (FBV oqimi): to'g'ri identifikator?",
  "options": [
   "M07-fbv",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-fbv"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E334045485",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M07-early-return (erta return): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-3492699D9D",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M07-early-return (erta return): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-003CDCB67D",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M07-early-return"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M07-early-return (erta return): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5D50073322",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] metod bo'yicha tarmoq nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "branch"
  ]
 },
 {
  "id": "EX-E0CB24F7C7",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] metod bo'yicha tarmoq nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "branch"
  ]
 },
 {
  "id": "EX-88DDCB0CB9",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-method-branch"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] metod bo'yicha tarmoq nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "branch"
  ]
 },
 {
  "id": "EX-0EDA408A6D",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M07-render-redirect (render/redirect/HttpResponse): to'g'ri identifikator?",
  "options": [
   "M07-render-redirect",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-render-redirect"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0B29FE5676",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M07-render-redirect (render/redirect/HttpResponse): to'g'ri identifikator?",
  "options": [
   "M07-render-redirect",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-render-redirect"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5DE022A49F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-render-redirect"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M07-render-redirect (render/redirect/HttpResponse): to'g'ri identifikator?",
  "options": [
   "M07-render-redirect",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-render-redirect"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-3970C929A8",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M07-context (kontekst lug'ati): to'g'ri identifikator?",
  "options": [
   "M07-context",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-context"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-643F2010DE",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M07-context (kontekst lug'ati): to'g'ri identifikator?",
  "options": [
   "M07-context",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-context"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9AA7F37BB2",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-context"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M07-context (kontekst lug'ati): to'g'ri identifikator?",
  "options": [
   "M07-context",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-context"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A4D7EFB4F5",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M07-none-return (None qaytarish xatosi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0911D65F5B",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M07-none-return (None qaytarish xatosi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0FE7360056",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M07-none-return (None qaytarish xatosi): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B7D2DCF1E8",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] 404 vs matn nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "404"
  ]
 },
 {
  "id": "EX-D157AB5D0D",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] 404 vs matn nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "404"
  ]
 },
 {
  "id": "EX-5D759B89B3",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-404"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] 404 vs matn nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "404"
  ]
 },
 {
  "id": "EX-18F577108A",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M07-get-object-or-404 (get_object_or_404): to'g'ri identifikator?",
  "options": [
   "M07-get-object-or-404",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-get-object-or-404"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F3CF052406",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M07-get-object-or-404 (get_object_or_404): to'g'ri identifikator?",
  "options": [
   "M07-get-object-or-404",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-get-object-or-404"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1DB3667819",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M07-get-object-or-404"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M07-get-object-or-404 (get_object_or_404): to'g'ri identifikator?",
  "options": [
   "M07-get-object-or-404",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M07-get-object-or-404"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-53DF0B2995",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M08-escape (avto-escape): to'g'ri identifikator?",
  "options": [
   "M08-escape",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-escape"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E7130843FA",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M08-escape (avto-escape): to'g'ri identifikator?",
  "options": [
   "M08-escape",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-escape"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-302004F2FC",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-escape"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M08-escape (avto-escape): to'g'ri identifikator?",
  "options": [
   "M08-escape",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-escape"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-95F19DD440",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M08-dot (nuqtali qidiruv): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-EB7008DCB5",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M08-dot (nuqtali qidiruv): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7CA6262537",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M08-dot"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M08-dot (nuqtali qidiruv): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5134204FA1",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] bookview_set.count nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "count"
  ]
 },
 {
  "id": "EX-C147890A0C",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] bookview_set.count nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "count"
  ]
 },
 {
  "id": "EX-7CCC26D351",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M08-related-count"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] bookview_set.count nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "count"
  ]
 },
 {
  "id": "EX-5D3EB13A6F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-for-if (for/if): to'g'ri identifikator?",
  "options": [
   "M08-for-if",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-for-if"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E0208D0B96",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-for-if (for/if): to'g'ri identifikator?",
  "options": [
   "M08-for-if",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-for-if"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-FDF559568F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-for-if (for/if): to'g'ri identifikator?",
  "options": [
   "M08-for-if",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-for-if"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B0E0BF10A8",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M08-messages (messages): to'g'ri identifikator?",
  "options": [
   "M08-messages",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-messages"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7D5844CD04",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M08-messages (messages): to'g'ri identifikator?",
  "options": [
   "M08-messages",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-messages"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B6DF5B1BD6",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-messages"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M08-messages (messages): to'g'ri identifikator?",
  "options": [
   "M08-messages",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-messages"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-91B6779503",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M08-extends (extends/block): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-57E6254BC5",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M08-extends (extends/block): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9FFB837A56",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M08-extends (extends/block): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CE133FAFF5",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] static nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "static"
  ]
 },
 {
  "id": "EX-D5316271F4",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] static nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "static"
  ]
 },
 {
  "id": "EX-376F6898C9",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M08-static"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] static nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "static"
  ]
 },
 {
  "id": "EX-6A9B32E686",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-csrf-token (csrf_token): to'g'ri identifikator?",
  "options": [
   "M08-csrf-token",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-csrf-token"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C89C509757",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-csrf-token (csrf_token): to'g'ri identifikator?",
  "options": [
   "M08-csrf-token",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-csrf-token"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-13A3F6674F",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-csrf-token"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-csrf-token (csrf_token): to'g'ri identifikator?",
  "options": [
   "M08-csrf-token",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-csrf-token"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-889F7872B9",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-user (User modeli): to'g'ri identifikator?",
  "options": [
   "M09-user",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-user"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-03353EAD21",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-user (User modeli): to'g'ri identifikator?",
  "options": [
   "M09-user",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-user"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-70AB0A8647",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-user"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-user (User modeli): to'g'ri identifikator?",
  "options": [
   "M09-user",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-user"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-EDDBC62FB7",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-set-password (set_password hash): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B33B0135CB",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-set-password (set_password hash): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-07D6C18AD4",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-set-password"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-set-password (set_password hash): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-10B21848F3",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] check_password nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "passwo"
  ]
 },
 {
  "id": "EX-1F6BDC89A1",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] check_password nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "passwo"
  ]
 },
 {
  "id": "EX-43930B1146",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-check-password"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] check_password nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "passwo"
  ]
 },
 {
  "id": "EX-DFCC204EAB",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-login-logout (login()/logout()): to'g'ri identifikator?",
  "options": [
   "M09-login-logout",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-login-logout"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D9D38E6758",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-login-logout (login()/logout()): to'g'ri identifikator?",
  "options": [
   "M09-login-logout",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-login-logout"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C95B9B46E9",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-login-logout"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-login-logout (login()/logout()): to'g'ri identifikator?",
  "options": [
   "M09-login-logout",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-login-logout"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DB10E89711",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-session-cookie (sessiya cookie): to'g'ri identifikator?",
  "options": [
   "M09-session-cookie",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-session-cookie"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BCE2A6DF9B",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-session-cookie (sessiya cookie): to'g'ri identifikator?",
  "options": [
   "M09-session-cookie",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-session-cookie"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-3C5458C099",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-session-cookie"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-session-cookie (sessiya cookie): to'g'ri identifikator?",
  "options": [
   "M09-session-cookie",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-session-cookie"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-78F74EEB33",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-request-user (request.user): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-400FE86DEA",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-request-user (request.user): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2F87423B00",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-request-user"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-request-user (request.user): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4A31807441",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] is_authenticated nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "authen"
  ]
 },
 {
  "id": "EX-86CBF5DA2C",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] is_authenticated nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "authen"
  ]
 },
 {
  "id": "EX-9379225D06",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-is-authenticated"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] is_authenticated nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "authen"
  ]
 },
 {
  "id": "EX-58F6BA8758",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-authenticate (authenticate vs qo'lda): to'g'ri identifikator?",
  "options": [
   "M09-authenticate",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-authenticate"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E38A5AD442",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-authenticate (authenticate vs qo'lda): to'g'ri identifikator?",
  "options": [
   "M09-authenticate",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-authenticate"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C3E1276D96",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-authenticate"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-authenticate (authenticate vs qo'lda): to'g'ri identifikator?",
  "options": [
   "M09-authenticate",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-authenticate"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2DD82B3E32",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-is-active (is_active): to'g'ri identifikator?",
  "options": [
   "M09-is-active",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-is-active"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9619BE142F",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-is-active (is_active): to'g'ri identifikator?",
  "options": [
   "M09-is-active",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-is-active"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-EE0F0934EE",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-is-active"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-is-active (is_active): to'g'ri identifikator?",
  "options": [
   "M09-is-active",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-is-active"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4345E4CB81",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-validators (parol validatorlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-295338F2AD",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-validators (parol validatorlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DD83EBE549",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-validators"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M09-validators (parol validatorlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1C442B9A49",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] login_required nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "requir"
  ]
 },
 {
  "id": "EX-B2597B8250",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] login_required nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "requir"
  ]
 },
 {
  "id": "EX-5B74B0DFA3",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] login_required nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "requir"
  ]
 },
 {
  "id": "EX-16DD3780C0",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-messages"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-messages (messages framework): to'g'ri identifikator?",
  "options": [
   "M09-messages",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-messages"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7F5B13AB1A",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-messages"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-messages (messages framework): to'g'ri identifikator?",
  "options": [
   "M09-messages",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-messages"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BEE4D15236",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M09-messages"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M09-messages (messages framework): to'g'ri identifikator?",
  "options": [
   "M09-messages",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-messages"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C908DBBEAE",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M10-add-book-url (add-book URL mantig'i): to'g'ri identifikator?",
  "options": [
   "M10-add-book-url",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M10-add-book-url"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C28E3640B9",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M10-add-book-url (add-book URL mantig'i): to'g'ri identifikator?",
  "options": [
   "M10-add-book-url",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M10-add-book-url"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0342D0672E",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M10-add-book-url"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M10-add-book-url (add-book URL mantig'i): to'g'ri identifikator?",
  "options": [
   "M10-add-book-url",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M10-add-book-url"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5AF952023E",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M10-public-private (public/private matritsa): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0042CD328A",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M10-public-private (public/private matritsa): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-35F77C17DC",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M10-public-private"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M10-public-private (public/private matritsa): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2BDED6EED1",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] noyob ko'rishlar hisobi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "views"
  ]
 },
 {
  "id": "EX-381FBB5FFC",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] noyob ko'rishlar hisobi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "views"
  ]
 },
 {
  "id": "EX-062D220745",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M10-unique-views"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] noyob ko'rishlar hisobi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "views"
  ]
 },
 {
  "id": "EX-AE11C4F4E9",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M11-register (admin.register): to'g'ri identifikator?",
  "options": [
   "M11-register",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-register"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7251CFF06A",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M11-register (admin.register): to'g'ri identifikator?",
  "options": [
   "M11-register",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-register"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-741B876944",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M11-register"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M11-register (admin.register): to'g'ri identifikator?",
  "options": [
   "M11-register",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-register"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E8DE3D48FE",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M11-modeladmin (ModelAdmin): to'g'ri identifikator?",
  "options": [
   "M11-modeladmin",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-modeladmin"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4390706F22",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M11-modeladmin (ModelAdmin): to'g'ri identifikator?",
  "options": [
   "M11-modeladmin",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-modeladmin"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7EE96B3892",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M11-modeladmin"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M11-modeladmin (ModelAdmin): to'g'ri identifikator?",
  "options": [
   "M11-modeladmin",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M11-modeladmin"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-86A69C5443",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M11-createsuperuser (createsuperuser): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1F2C47F6A1",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M11-createsuperuser (createsuperuser): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-29FAC9BD45",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M11-createsuperuser"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M11-createsuperuser (createsuperuser): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-259719E97D",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] __str__ ta'siri nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "effect"
  ]
 },
 {
  "id": "EX-27933FDD86",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] __str__ ta'siri nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "effect"
  ]
 },
 {
  "id": "EX-4B42971E3A",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M11-str-effect"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] __str__ ta'siri nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "effect"
  ]
 },
 {
  "id": "EX-327A6CF2F6",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M12-csrf (CSRF): to'g'ri identifikator?",
  "options": [
   "M12-csrf",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-csrf"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C1881A4395",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M12-csrf (CSRF): to'g'ri identifikator?",
  "options": [
   "M12-csrf",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-csrf"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A42B229F02",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M12-csrf"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M12-csrf (CSRF): to'g'ri identifikator?",
  "options": [
   "M12-csrf",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-csrf"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-FBA3666EC8",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M12-xss (XSS/autoescape): to'g'ri identifikator?",
  "options": [
   "M12-xss",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-xss"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7827122537",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M12-xss (XSS/autoescape): to'g'ri identifikator?",
  "options": [
   "M12-xss",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-xss"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-11C6B85252",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-xss"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M12-xss (XSS/autoescape): to'g'ri identifikator?",
  "options": [
   "M12-xss",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-xss"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D0D33F6BBD",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-idor (IDOR /book/<id>/): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CE145BD268",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-idor (IDOR /book/<id>/): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1C7D827CB4",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-idor"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-idor (IDOR /book/<id>/): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-3E4BCE69DD",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] user enumeration nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "enum"
  ]
 },
 {
  "id": "EX-324F8EDD8A",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] user enumeration nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "enum"
  ]
 },
 {
  "id": "EX-552CAFD872",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M12-user-enum"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] user enumeration nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "enum"
  ]
 },
 {
  "id": "EX-B0A6D2E8CE",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M12-debug-hosts (DEBUG/ALLOWED_HOSTS/SECRET_KEY): to'g'ri identifikator?",
  "options": [
   "M12-debug-hosts",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-debug-hosts"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-588B711092",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M12-debug-hosts (DEBUG/ALLOWED_HOSTS/SECRET_KEY): to'g'ri identifikator?",
  "options": [
   "M12-debug-hosts",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-debug-hosts"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2379E4B60C",
  "section": "A",
  "tier": "advanced",
  "concepts": [
   "M12-debug-hosts"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M12-debug-hosts (DEBUG/ALLOWED_HOSTS/SECRET_KEY): to'g'ri identifikator?",
  "options": [
   "M12-debug-hosts",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-debug-hosts"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C567CA21C1",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M12-get-side-effect (GET-logout): to'g'ri identifikator?",
  "options": [
   "M12-get-side-effect",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-get-side-effect"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9F866FEC5F",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M12-get-side-effect (GET-logout): to'g'ri identifikator?",
  "options": [
   "M12-get-side-effect",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-get-side-effect"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-9AD017829B",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-get-side-effect"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M12-get-side-effect (GET-logout): to'g'ri identifikator?",
  "options": [
   "M12-get-side-effect",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M12-get-side-effect"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-535363527A",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-password-policy (parol siyosati): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F5C668CF5D",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-password-policy (parol siyosati): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B29C0AD357",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-password-policy"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-password-policy (parol siyosati): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A5EE669F47",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] sirlar gitda nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "git"
  ]
 },
 {
  "id": "EX-52AAA7A4C3",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] sirlar gitda nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "git"
  ]
 },
 {
  "id": "EX-D370056CC0",
  "section": "D",
  "tier": "advanced",
  "concepts": [
   "M12-secrets-git"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] sirlar gitda nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "git"
  ]
 },
 {
  "id": "EX-B88FB594CA",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M13-testcase (TestCase): to'g'ri identifikator?",
  "options": [
   "M13-testcase",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-testcase"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-8DB1382E84",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M13-testcase (TestCase): to'g'ri identifikator?",
  "options": [
   "M13-testcase",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-testcase"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B4E43603C4",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M13-testcase (TestCase): to'g'ri identifikator?",
  "options": [
   "M13-testcase",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-testcase"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5B322B3B63",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M13-client (Client): to'g'ri identifikator?",
  "options": [
   "M13-client",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-client"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5BB7B34B6B",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M13-client (Client): to'g'ri identifikator?",
  "options": [
   "M13-client",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-client"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5B73A0C857",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M13-client"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M13-client (Client): to'g'ri identifikator?",
  "options": [
   "M13-client",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-client"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D0EAD2E902",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M13-assert (assertRedirects/Contains): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1FAB310AFE",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M13-assert (assertRedirects/Contains): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-64D1823255",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-assert"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M13-assert (assertRedirects/Contains): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CA5CF9A68B",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] test DB nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "db"
  ]
 },
 {
  "id": "EX-B9C8FBDD5E",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] test DB nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "db"
  ]
 },
 {
  "id": "EX-047330F15D",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M13-test-db"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] test DB nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "db"
  ]
 },
 {
  "id": "EX-7389793DF5",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M13-write-15 (15+ haqiqiy test): to'g'ri identifikator?",
  "options": [
   "M13-write-15",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-write-15"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-907E90D6DF",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M13-write-15 (15+ haqiqiy test): to'g'ri identifikator?",
  "options": [
   "M13-write-15",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-write-15"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-8CA6B838B4",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M13-write-15"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M13-write-15 (15+ haqiqiy test): to'g'ri identifikator?",
  "options": [
   "M13-write-15",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M13-write-15"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-141A1B4662",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-login-required (login_required refaktor): to'g'ri identifikator?",
  "options": [
   "M14-login-required",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-login-required"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-7B337CB2C9",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-login-required (login_required refaktor): to'g'ri identifikator?",
  "options": [
   "M14-login-required",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-login-required"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-06DFF2358E",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-login-required"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-login-required (login_required refaktor): to'g'ri identifikator?",
  "options": [
   "M14-login-required",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-login-required"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-08ACB3DBB0",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M14-get-object (get_object_or_404): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-6DB88C9418",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M14-get-object (get_object_or_404): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-EC3AB93C72",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M14-get-object"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M14-get-object (get_object_or_404): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A6BDC4C822",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] ModelForm nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "modelf"
  ]
 },
 {
  "id": "EX-937B846BD2",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] ModelForm nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "modelf"
  ]
 },
 {
  "id": "EX-65C973C867",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M14-modelform"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] ModelForm nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "modelf"
  ]
 },
 {
  "id": "EX-23C0C12E33",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M14-cbv (ListView/DetailView/CreateView): to'g'ri identifikator?",
  "options": [
   "M14-cbv",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-cbv"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C95731D3AC",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M14-cbv (ListView/DetailView/CreateView): to'g'ri identifikator?",
  "options": [
   "M14-cbv",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-cbv"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-98F6288706",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M14-cbv"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M14-cbv (ListView/DetailView/CreateView): to'g'ri identifikator?",
  "options": [
   "M14-cbv",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-cbv"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-8A3F31B933",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-base-html (base.html): to'g'ri identifikator?",
  "options": [
   "M14-base-html",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-base-html"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1FBFE97121",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-base-html (base.html): to'g'ri identifikator?",
  "options": [
   "M14-base-html",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-base-html"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-55508B3BD8",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-base-html"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-base-html (base.html): to'g'ri identifikator?",
  "options": [
   "M14-base-html",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-base-html"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4FE23B6C16",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M14-named-urls (nomlangan URL): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DF4A5BF6B1",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M14-named-urls (nomlangan URL): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DD19DFB073",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M14-named-urls"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M14-named-urls (nomlangan URL): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A7921FF14B",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] UniqueConstraint nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "unique"
  ]
 },
 {
  "id": "EX-91EF672DB5",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] UniqueConstraint nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "unique"
  ]
 },
 {
  "id": "EX-C2B55D434D",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M14-unique"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] UniqueConstraint nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "unique"
  ]
 },
 {
  "id": "EX-990C7FB963",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M14-annotate-count (annotate(Count)): to'g'ri identifikator?",
  "options": [
   "M14-annotate-count",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-annotate-count"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2F30B703A5",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M14-annotate-count (annotate(Count)): to'g'ri identifikator?",
  "options": [
   "M14-annotate-count",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-annotate-count"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-32A1F033FF",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M14-annotate-count"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M14-annotate-count (annotate(Count)): to'g'ri identifikator?",
  "options": [
   "M14-annotate-count",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-annotate-count"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AAF20DB383",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-env-settings (sozlamalarni muhitga ajratish): to'g'ri identifikator?",
  "options": [
   "M14-env-settings",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-env-settings"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B60994BD7D",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-env-settings (sozlamalarni muhitga ajratish): to'g'ri identifikator?",
  "options": [
   "M14-env-settings",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-env-settings"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D3BE6E4A86",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M14-env-settings"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M14-env-settings (sozlamalarni muhitga ajratish): to'g'ri identifikator?",
  "options": [
   "M14-env-settings",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M14-env-settings"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5BFD59C05A",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M15-sprint-steps"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M15-sprint-steps (20 qadamli sprint): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0FA1B37EE8",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M15-sprint-steps"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M15-sprint-steps (20 qadamli sprint): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C45E14DBE0",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M15-sprint-steps"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M15-sprint-steps (20 qadamli sprint): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0577458C7C",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M15-grader-gate"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] har qadam grader darvozasi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "gate"
  ]
 },
 {
  "id": "EX-11B7FC630D",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M15-grader-gate"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] har qadam grader darvozasi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "gate"
  ]
 },
 {
  "id": "EX-EDBA1D061E",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M15-grader-gate"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] har qadam grader darvozasi nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "gate"
  ]
 },
 {
  "id": "EX-B27ECD6AAB",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M16-git-basics (init/add/commit/diff/log): to'g'ri identifikator?",
  "options": [
   "M16-git-basics",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-git-basics"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-EEB81F6975",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M16-git-basics (init/add/commit/diff/log): to'g'ri identifikator?",
  "options": [
   "M16-git-basics",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-git-basics"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AA162A94CB",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M16-git-basics"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M16-git-basics (init/add/commit/diff/log): to'g'ri identifikator?",
  "options": [
   "M16-git-basics",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-git-basics"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-ECD6EA90A3",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M16-gitignore (.gitignore): to'g'ri identifikator?",
  "options": [
   "M16-gitignore",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-gitignore"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-CB8BA93CEA",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M16-gitignore (.gitignore): to'g'ri identifikator?",
  "options": [
   "M16-gitignore",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-gitignore"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-57B35913A1",
  "section": "B",
  "tier": "elite",
  "concepts": [
   "M16-gitignore"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M16-gitignore (.gitignore): to'g'ri identifikator?",
  "options": [
   "M16-gitignore",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-gitignore"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E66F279B22",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M16-requirements (requirements.txt): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5EC940C4CC",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M16-requirements (requirements.txt): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-71D32883A7",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M16-requirements"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M16-requirements (requirements.txt): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-70CC2233F9",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] venv nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "venv"
  ]
 },
 {
  "id": "EX-6A6CDC7631",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] venv nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "venv"
  ]
 },
 {
  "id": "EX-C7DF05D230",
  "section": "D",
  "tier": "elite",
  "concepts": [
   "M16-venv"
  ],
  "difficulty": 4,
  "format": "teach",
  "prompt": "[IMTIHON D] venv nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "venv"
  ]
 },
 {
  "id": "EX-5EBF62A6FF",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M16-db-out-of-git (db ni gitdan chiqarish): to'g'ri identifikator?",
  "options": [
   "M16-db-out-of-git",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-db-out-of-git"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-575F152CD5",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M16-db-out-of-git (db ni gitdan chiqarish): to'g'ri identifikator?",
  "options": [
   "M16-db-out-of-git",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-db-out-of-git"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1855600012",
  "section": "A",
  "tier": "elite",
  "concepts": [
   "M16-db-out-of-git"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M16-db-out-of-git (db ni gitdan chiqarish): to'g'ri identifikator?",
  "options": [
   "M16-db-out-of-git",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M16-db-out-of-git"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-44077AA7D3",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-docstring (docstring): to'g'ri identifikator?",
  "options": [
   "M00-docstring",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-docstring"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0E840A9F4E",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-docstring (docstring): to'g'ri identifikator?",
  "options": [
   "M00-docstring",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-docstring"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-5518F53683",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-docstring"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M00-docstring (docstring): to'g'ri identifikator?",
  "options": [
   "M00-docstring",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M00-docstring"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-868F2F49DB",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-bool"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-bool (bool va solishtirish): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-3D186485FA",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-bool"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-bool (bool va solishtirish): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-8329E1E63C",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M00-bool"
  ],
  "difficulty": 2,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M00-bool (bool va solishtirish): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-8F271469A4",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] HTTP headerlar nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "header"
  ]
 },
 {
  "id": "EX-7DCFCCC1E4",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] HTTP headerlar nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "header"
  ]
 },
 {
  "id": "EX-652D5CAE53",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M01-headers"
  ],
  "difficulty": 3,
  "format": "teach",
  "prompt": "[IMTIHON D] HTTP headerlar nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "header"
  ]
 },
 {
  "id": "EX-8B2D51A2CD",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-body"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-body (so'rov tanasi): to'g'ri identifikator?",
  "options": [
   "M01-body",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-body"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-90B86E2730",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-body"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-body (so'rov tanasi): to'g'ri identifikator?",
  "options": [
   "M01-body",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-body"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-1EA2DD4BE3",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M01-body"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M01-body (so'rov tanasi): to'g'ri identifikator?",
  "options": [
   "M01-body",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M01-body"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-24A2C37A93",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-wsgi (WSGI/ASGI): to'g'ri identifikator?",
  "options": [
   "M02-wsgi",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-wsgi"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A261810293",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-wsgi (WSGI/ASGI): to'g'ri identifikator?",
  "options": [
   "M02-wsgi",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-wsgi"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-75B30FD15B",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-wsgi"
  ],
  "difficulty": 5,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M02-wsgi (WSGI/ASGI): to'g'ri identifikator?",
  "options": [
   "M02-wsgi",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M02-wsgi"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-552E8223FC",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M02-staticfiles (STATICFILES_DIRS): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4430561B3C",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M02-staticfiles (STATICFILES_DIRS): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C97FD51602",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M02-staticfiles"
  ],
  "difficulty": 1,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M02-staticfiles (STATICFILES_DIRS): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-41510A0D4F",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-charfield"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] CharField xususiyatlari nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "charfi"
  ]
 },
 {
  "id": "EX-30FE48842A",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-charfield"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] CharField xususiyatlari nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "charfi"
  ]
 },
 {
  "id": "EX-D7AAE17ED0",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M03-charfield"
  ],
  "difficulty": 2,
  "format": "teach",
  "prompt": "[IMTIHON D] CharField xususiyatlari nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "charfi"
  ]
 },
 {
  "id": "EX-5711C65D23",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-boolfield"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-boolfield (BooleanField default): to'g'ri identifikator?",
  "options": [
   "M03-boolfield",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-boolfield"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D98AEDAE27",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-boolfield"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-boolfield (BooleanField default): to'g'ri identifikator?",
  "options": [
   "M03-boolfield",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-boolfield"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-DFCE15CF4B",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M03-boolfield"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M03-boolfield (BooleanField default): to'g'ri identifikator?",
  "options": [
   "M03-boolfield",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-boolfield"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AB5046D34B",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-datefield"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-datefield (DateField): to'g'ri identifikator?",
  "options": [
   "M03-datefield",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-datefield"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-89F31FCF78",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-datefield"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-datefield (DateField): to'g'ri identifikator?",
  "options": [
   "M03-datefield",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-datefield"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-AB476D0E99",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-datefield"
  ],
  "difficulty": 4,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M03-datefield (DateField): to'g'ri identifikator?",
  "options": [
   "M03-datefield",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M03-datefield"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-729F955F10",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-values"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-values (values / values_list): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-86499AC94B",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-values"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-values (values / values_list): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-0B31501697",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M04-values"
  ],
  "difficulty": 5,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M04-values (values / values_list): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-78E04A4491",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-exclude"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] exclude() nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "exclud"
  ]
 },
 {
  "id": "EX-1551CA624E",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-exclude"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] exclude() nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "exclud"
  ]
 },
 {
  "id": "EX-79E94B3ED7",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M04-exclude"
  ],
  "difficulty": 1,
  "format": "teach",
  "prompt": "[IMTIHON D] exclude() nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "exclud"
  ]
 },
 {
  "id": "EX-C9DD91054E",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-exists"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-exists (exists() vs count): to'g'ri identifikator?",
  "options": [
   "M04-exists",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-exists"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-126581545C",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-exists"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-exists (exists() vs count): to'g'ri identifikator?",
  "options": [
   "M04-exists",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-exists"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BA51ECD395",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M04-exists"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M04-exists (exists() vs count): to'g'ri identifikator?",
  "options": [
   "M04-exists",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M04-exists"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-A0F5342B5E",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-squash (squashmigrations): to'g'ri identifikator?",
  "options": [
   "M05-squash",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-squash"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-C7465E5AAE",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-squash (squashmigrations): to'g'ri identifikator?",
  "options": [
   "M05-squash",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-squash"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-3B98D48A77",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M05-squash"
  ],
  "difficulty": 3,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M05-squash (squashmigrations): to'g'ri identifikator?",
  "options": [
   "M05-squash",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M05-squash"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-241EA648CE",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-dependency"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-dependency (depends_on): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-2D3B51009C",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-dependency"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-dependency (depends_on): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E61FFA8749",
  "section": "C",
  "tier": "core",
  "concepts": [
   "M05-dependency"
  ],
  "difficulty": 4,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M05-dependency (depends_on): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-B48B969D33",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] HttpResponse turlari nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "httpre"
  ]
 },
 {
  "id": "EX-0A6833801C",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] HttpResponse turlari nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "httpre"
  ]
 },
 {
  "id": "EX-3DA73BE692",
  "section": "D",
  "tier": "core",
  "concepts": [
   "M07-httpresponse"
  ],
  "difficulty": 5,
  "format": "teach",
  "prompt": "[IMTIHON D] HttpResponse turlari nima ekanini 2–3 gapda yozing.",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true,
  "rubric_keys": [
   "httpre"
  ]
 },
 {
  "id": "EX-E3562834A0",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-autoescape (autoescape off xavfi): to'g'ri identifikator?",
  "options": [
   "M08-autoescape",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-autoescape"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-4B83A80EDE",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-autoescape (autoescape off xavfi): to'g'ri identifikator?",
  "options": [
   "M08-autoescape",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-autoescape"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E323A379A4",
  "section": "A",
  "tier": "core",
  "concepts": [
   "M08-autoescape"
  ],
  "difficulty": 1,
  "format": "choice",
  "prompt": "[IMTIHON A] Konsept M08-autoescape (autoescape off xavfi): to'g'ri identifikator?",
  "options": [
   "M08-autoescape",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M08-autoescape"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-F8EC473DE8",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-hashers"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-hashers (parol hash algoritmlari): to'g'ri identifikator?",
  "options": [
   "M09-hashers",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-hashers"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-95EDB26D3A",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-hashers"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-hashers (parol hash algoritmlari): to'g'ri identifikator?",
  "options": [
   "M09-hashers",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-hashers"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-E4685D6C1C",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-hashers"
  ],
  "difficulty": 2,
  "format": "choice",
  "prompt": "[IMTIHON B] Konsept M09-hashers (parol hash algoritmlari): to'g'ri identifikator?",
  "options": [
   "M09-hashers",
   "M99-fake",
   "M00-none",
   "M12-csrf"
  ],
  "accepted": [
   "M09-hashers"
  ],
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-BCFEB22425",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-xss-context (XSS kontekstlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-D265CD89E1",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-xss-context (XSS kontekstlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-70C3B1A64F",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M12-xss-context"
  ],
  "difficulty": 3,
  "format": "write",
  "prompt": "[IMTIHON C] Konsept M12-xss-context (XSS kontekstlari): to'g'ri identifikator?",
  "options": null,
  "accepted": null,
  "time_budget": 45,
  "sealed": true
 },
 {
  "id": "EX-631EB48F54",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-early-return",
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:15 — check_auth chaqirilmagan. Mexanizm?",
  "options": [
   "check_auth yozilgan, lekin hech bir viewda chaqirilmagan. Chaqirilsa ham return ",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "check_auth yozilgan, lekin hech bir viewda chaqirilmagan. Chaqirilsa ham return "
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B01"
 },
 {
  "id": "EX-5AA5F43E46",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M07-early-return",
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:15 — check_auth chaqirilmagan. Mexanizm?",
  "options": [
   "check_auth yozilgan, lekin hech bir viewda chaqirilmagan. Chaqirilsa ham return ",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "check_auth yozilgan, lekin hech bir viewda chaqirilmagan. Chaqirilsa ham return "
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B01"
 },
 {
  "id": "EX-7B7EA5A18E",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M07-none-return",
   "M01-http-methods"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:19 — book_list POST → None. Mexanizm?",
  "options": [
   "Faqat if method==GET: return render(...). POST/PUT/… da funksiya None qaytaradi ",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Faqat if method==GET: return render(...). POST/PUT/… da funksiya None qaytaradi "
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B02"
 },
 {
  "id": "EX-6CF02F4EED",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M07-none-return",
   "M01-http-methods"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:19 — book_list POST → None. Mexanizm?",
  "options": [
   "Faqat if method==GET: return render(...). POST/PUT/… da funksiya None qaytaradi ",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Faqat if method==GET: return render(...). POST/PUT/… da funksiya None qaytaradi "
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B02"
 },
 {
  "id": "EX-7037FE0B4C",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:93 — login/mrsign boshqa metod → None. Mexanizm?",
  "options": [
   "GET va POST dan tashqari metodda return yo'q — xuddi B02 sinfi.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "GET va POST dan tashqari metodda return yo'q — xuddi B02 sinfi."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B03"
 },
 {
  "id": "EX-623EE549E0",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M07-none-return"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:93 — login/mrsign boshqa metod → None. Mexanizm?",
  "options": [
   "GET va POST dan tashqari metodda return yo'q — xuddi B02 sinfi.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "GET va POST dan tashqari metodda return yo'q — xuddi B02 sinfi."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B03"
 },
 {
  "id": "EX-B447DA306F",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M00-none",
   "M00-try-except",
   "M07-views"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:41 — url None → AttributeError. Mexanizm?",
  "options": [
   "request.POST.get('url') None bo'lishi mumkin; url.startswith(...) → AttributeErr",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "request.POST.get('url') None bo'lishi mumkin; url.startswith(...) → AttributeErr"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B04"
 },
 {
  "id": "EX-9BADF065D3",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M00-none",
   "M00-try-except",
   "M07-views"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:41 — url None → AttributeError. Mexanizm?",
  "options": [
   "request.POST.get('url') None bo'lishi mumkin; url.startswith(...) → AttributeErr",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "request.POST.get('url') None bo'lishi mumkin; url.startswith(...) → AttributeErr"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B04"
 },
 {
  "id": "EX-E48DD838B0",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-csrf",
   "M02-middleware",
   "M08-csrf-token"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/settings.py:0 — CSRF middleware yo'q. Mexanizm?",
  "options": [
   "CsrfViewMiddleware MIDDLEWARE da yo'q; formalarda {% csrf_token %} yo'q. Begona ",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "CsrfViewMiddleware MIDDLEWARE da yo'q; formalarda {% csrf_token %} yo'q. Begona "
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B05"
 },
 {
  "id": "EX-F1C4128BE3",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-csrf",
   "M02-middleware",
   "M08-csrf-token"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/settings.py:0 — CSRF middleware yo'q. Mexanizm?",
  "options": [
   "CsrfViewMiddleware MIDDLEWARE da yo'q; formalarda {% csrf_token %} yo'q. Begona ",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "CsrfViewMiddleware MIDDLEWARE da yo'q; formalarda {% csrf_token %} yo'q. Begona "
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B05"
 },
 {
  "id": "EX-08CB2A082F",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-logout",
   "M12-get-side-effect"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:0 — logout GET bilan ishlaydi. Mexanizm?",
  "options": [
   "logout view GET ni qabul qiladi. <img src=/logout/> yoki link bosilishi sessiyan",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "logout view GET ni qabul qiladi. <img src=/logout/> yoki link bosilishi sessiyan"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B06"
 },
 {
  "id": "EX-D0EE102F8D",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-logout",
   "M12-get-side-effect"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:0 — logout GET bilan ishlaydi. Mexanizm?",
  "options": [
   "logout view GET ni qabul qiladi. <img src=/logout/> yoki link bosilishi sessiyan",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "logout view GET ni qabul qiladi. <img src=/logout/> yoki link bosilishi sessiyan"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B06"
 },
 {
  "id": "EX-D550F08683",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-set-password",
   "M09-validators"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:0 — parol validatorlari ishlamaydi. Mexanizm?",
  "options": [
   "set_password to'g'ridan chaqiriladi; AUTH_PASSWORD_VALIDATORS faqat forms/UserCr",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "set_password to'g'ridan chaqiriladi; AUTH_PASSWORD_VALIDATORS faqat forms/UserCr"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B07"
 },
 {
  "id": "EX-7BDF876FB5",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-set-password",
   "M09-validators"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:0 — parol validatorlari ishlamaydi. Mexanizm?",
  "options": [
   "set_password to'g'ridan chaqiriladi; AUTH_PASSWORD_VALIDATORS faqat forms/UserCr",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "set_password to'g'ridan chaqiriladi; AUTH_PASSWORD_VALIDATORS faqat forms/UserCr"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B07"
 },
 {
  "id": "EX-0027B90802",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-authenticate",
   "M09-is-active"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:0 — authenticate o'rniga qo'lda login. Mexanizm?",
  "options": [
   "User.objects.get + check_password + django_login. authenticate() is_active, back",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "User.objects.get + check_password + django_login. authenticate() is_active, back"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B08"
 },
 {
  "id": "EX-89E5291007",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M09-authenticate",
   "M09-is-active"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:0 — authenticate o'rniga qo'lda login. Mexanizm?",
  "options": [
   "User.objects.get + check_password + django_login. authenticate() is_active, back",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "User.objects.get + check_password + django_login. authenticate() is_active, back"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B08"
 },
 {
  "id": "EX-E70A65A38C",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M07-404",
   "M07-get-object-or-404",
   "M01-status-codes"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:80 — private kitob → 200 'topilmadi'. Mexanizm?",
  "options": [
   "HttpResponse('kitob topilmadi') status 200 qaytaradi. 404.html bor, lekin ishlat",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "HttpResponse('kitob topilmadi') status 200 qaytaradi. 404.html bor, lekin ishlat"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B09"
 },
 {
  "id": "EX-A940EDA37A",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M07-404",
   "M07-get-object-or-404",
   "M01-status-codes"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:80 — private kitob → 200 'topilmadi'. Mexanizm?",
  "options": [
   "HttpResponse('kitob topilmadi') status 200 qaytaradi. 404.html bor, lekin ishlat",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "HttpResponse('kitob topilmadi') status 200 qaytaradi. 404.html bor, lekin ishlat"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B09"
 },
 {
  "id": "EX-97C3AF3E1F",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M04-n-plus-1",
   "M04-annotate",
   "M08-related-count"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/templates/books-list.html:0 — N+1 bookview_set.count. Mexanizm?",
  "options": [
   "Har kartochkada {{ book.bookview_set.count }} alohida SQL. 20 kitob → 21 so'rov.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Har kartochkada {{ book.bookview_set.count }} alohida SQL. 20 kitob → 21 so'rov."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B10"
 },
 {
  "id": "EX-7DC2221AA9",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M04-n-plus-1",
   "M04-annotate",
   "M08-related-count"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/templates/books-list.html:0 — N+1 bookview_set.count. Mexanizm?",
  "options": [
   "Har kartochkada {{ book.bookview_set.count }} alohida SQL. 20 kitob → 21 so'rov.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Har kartochkada {{ book.bookview_set.count }} alohida SQL. 20 kitob → 21 so'rov."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B10"
 },
 {
  "id": "EX-DA0CDBA98C",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-if",
   "M07-context"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] main/templates/books-list.html:0 — tab active klassi qo'yilmaydi. Mexanizm?",
  "options": [
   "is_public kontekstga uzatiladi, lekin shablon a.active klassini hech qachon qo'y",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "is_public kontekstga uzatiladi, lekin shablon a.active klassini hech qachon qo'y"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B11"
 },
 {
  "id": "EX-639E4C6D64",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-if",
   "M07-context"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] main/templates/books-list.html:0 — tab active klassi qo'yilmaydi. Mexanizm?",
  "options": [
   "is_public kontekstga uzatiladi, lekin shablon a.active klassini hech qachon qo'y",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "is_public kontekstga uzatiladi, lekin shablon a.active klassini hech qachon qo'y"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B11"
 },
 {
  "id": "EX-8915CD9CAA",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:1 — axlat importlar. Mexanizm?",
  "options": [
   "from os import name, from statistics import mode (models); views da from django.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "from os import name, from statistics import mode (models); views da from django."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B12"
 },
 {
  "id": "EX-7949DB3D41",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M00-import"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:1 — axlat importlar. Mexanizm?",
  "options": [
   "from os import name, from statistics import mode (models); views da from django.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "from os import name, from statistics import mode (models); views da from django."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B12"
 },
 {
  "id": "EX-B7BA9B7310",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M03-null-blank",
   "M03-field-types",
   "M00-slicing"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:11 — url CharField(null=True) zaif. Mexanizm?",
  "options": [
   "blank yo'q, max_length yo'q; view url[8:]/url[7:] kesadi; shablon https://{{book",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "blank yo'q, max_length yo'q; view url[8:]/url[7:] kesadi; shablon https://{{book"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B13"
 },
 {
  "id": "EX-10E06AC662",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M03-null-blank",
   "M03-field-types",
   "M00-slicing"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:11 — url CharField(null=True) zaif. Mexanizm?",
  "options": [
   "blank yo'q, max_length yo'q; view url[8:]/url[7:] kesadi; shablon https://{{book",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "blank yo'q, max_length yo'q; view url[8:]/url[7:] kesadi; shablon https://{{book"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B13"
 },
 {
  "id": "EX-7412577B51",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M03-meta",
   "M04-get-or-create"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:14 — BookView UniqueConstraint yo'q. Mexanizm?",
  "options": [
   "get_or_create poyga holatida (ikki so'rov bir vaqtda) dublikat BookView yaratish",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "get_or_create poyga holatida (ikki so'rov bir vaqtda) dublikat BookView yaratish"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B14"
 },
 {
  "id": "EX-65609C0FD7",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M03-meta",
   "M04-get-or-create"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:14 — BookView UniqueConstraint yo'q. Mexanizm?",
  "options": [
   "get_or_create poyga holatida (ikki so'rov bir vaqtda) dublikat BookView yaratish",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "get_or_create poyga holatida (ikki so'rov bir vaqtda) dublikat BookView yaratish"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B14"
 },
 {
  "id": "EX-17AFAF0C76",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-str",
   "M11-admin"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:7 — Book.__str__ yo'q. Mexanizm?",
  "options": [
   "Adminda 'Book object (1)' ko'rinadi; BookView register qilinmagan.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Adminda 'Book object (1)' ko'rinadi; BookView register qilinmagan."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B15"
 },
 {
  "id": "EX-41924BD0C6",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M03-str",
   "M11-admin"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] main/models.py:7 — Book.__str__ yo'q. Mexanizm?",
  "options": [
   "Adminda 'Book object (1)' ko'rinadi; BookView register qilinmagan.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Adminda 'Book object (1)' ko'rinadi; BookView register qilinmagan."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B15"
 },
 {
  "id": "EX-4D1A3F4897",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-filter",
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:26 — public=true o'z kitoblarini ham aralashtiradi. Mexanizm?",
  "options": [
   "filter(public=True) egasining o'z kitoblarini ham chiqaradi; ko'rish hisobiga eg",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "filter(public=True) egasining o'z kitoblarini ham chiqaradi; ko'rish hisobiga eg"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B16"
 },
 {
  "id": "EX-4DE38BD267",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M04-filter",
   "M10-public-private"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:26 — public=true o'z kitoblarini ham aralashtiradi. Mexanizm?",
  "options": [
   "filter(public=True) egasining o'z kitoblarini ham chiqaradi; ko'rish hisobiga eg",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "filter(public=True) egasining o'z kitoblarini ham chiqaradi; ko'rish hisobiga eg"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B16"
 },
 {
  "id": "EX-0A7955CBA8",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M06-name-reverse",
   "M07-redirect"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:12 — qattiq yozilgan URL'lar. Mexanizm?",
  "options": [
   "redirect('/login/') — name= faqat logout da. URL o'zgarsa barcha redirect sinadi",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "redirect('/login/') — name= faqat logout da. URL o'zgarsa barcha redirect sinadi"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B17"
 },
 {
  "id": "EX-DE6F6902D8",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M06-name-reverse",
   "M07-redirect"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:12 — qattiq yozilgan URL'lar. Mexanizm?",
  "options": [
   "redirect('/login/') — name= faqat logout da. URL o'zgarsa barcha redirect sinadi",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "redirect('/login/') — name= faqat logout da. URL o'zgarsa barcha redirect sinadi"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B17"
 },
 {
  "id": "EX-3D22D178DC",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:20 — login_required o'rniga takror. Mexanizm?",
  "options": [
   "Har viewda if not request.user.is_authenticated: return redirect(...). Takror, u",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Har viewda if not request.user.is_authenticated: return redirect(...). Takror, u"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B18"
 },
 {
  "id": "EX-B7EDDCAEF1",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] core/views.py:20 — login_required o'rniga takror. Mexanizm?",
  "options": [
   "Har viewda if not request.user.is_authenticated: return redirect(...). Takror, u",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Har viewda if not request.user.is_authenticated: return redirect(...). Takror, u"
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B18"
 },
 {
  "id": "EX-752FD1412C",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] main/templates/:0 — base.html yo'q. Mexanizm?",
  "options": [
   "Har shablonda 150–350 qator takroriy <style>. extends/block ishlatilmagan.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Har shablonda 150–350 qator takroriy <style>. extends/block ishlatilmagan."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B19"
 },
 {
  "id": "EX-F23BF11C88",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M08-extends"
  ],
  "difficulty": 3,
  "format": "debug",
  "prompt": "[IMTIHON B] main/templates/:0 — base.html yo'q. Mexanizm?",
  "options": [
   "Har shablonda 150–350 qator takroriy <style>. extends/block ishlatilmagan.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Har shablonda 150–350 qator takroriy <style>. extends/block ishlatilmagan."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B19"
 },
 {
  "id": "EX-FA4754CB49",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-debug-hosts",
   "M16-gitignore"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/settings.py:0 — DEBUG/HOSTS/SECRET/db.git. Mexanizm?",
  "options": [
   "DEBUG=True, ALLOWED_HOSTS=['*'], SECRET_KEY qattiq yozilgan, db.sqlite3 gitda.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "DEBUG=True, ALLOWED_HOSTS=['*'], SECRET_KEY qattiq yozilgan, db.sqlite3 gitda."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B20"
 },
 {
  "id": "EX-1328746DE8",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M12-debug-hosts",
   "M16-gitignore"
  ],
  "difficulty": 5,
  "format": "debug",
  "prompt": "[IMTIHON B] core/settings.py:0 — DEBUG/HOSTS/SECRET/db.git. Mexanizm?",
  "options": [
   "DEBUG=True, ALLOWED_HOSTS=['*'], SECRET_KEY qattiq yozilgan, db.sqlite3 gitda.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "DEBUG=True, ALLOWED_HOSTS=['*'], SECRET_KEY qattiq yozilgan, db.sqlite3 gitda."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B20"
 },
 {
  "id": "EX-7C98438963",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] core/settings.py:0 — LANGUAGE_CODE en-us. Mexanizm?",
  "options": [
   "UI o'zbekcha, LANGUAGE_CODE='en-us', TIME_ZONE='UTC'.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "UI o'zbekcha, LANGUAGE_CODE='en-us', TIME_ZONE='UTC'."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B21"
 },
 {
  "id": "EX-4EEA0BE882",
  "section": "B",
  "tier": "core",
  "concepts": [
   "M02-settings"
  ],
  "difficulty": 2,
  "format": "debug",
  "prompt": "[IMTIHON B] core/settings.py:0 — LANGUAGE_CODE en-us. Mexanizm?",
  "options": [
   "UI o'zbekcha, LANGUAGE_CODE='en-us', TIME_ZONE='UTC'.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "UI o'zbekcha, LANGUAGE_CODE='en-us', TIME_ZONE='UTC'."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B21"
 },
 {
  "id": "EX-3C0ECED103",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M13-testcase",
   "M13-client"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/tests.py:0 — tests.py bo'sh. Mexanizm?",
  "options": [
   "Birorta TestCase yo'q. Refaktor va regressiya himoyasiz.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Birorta TestCase yo'q. Refaktor va regressiya himoyasiz."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B22"
 },
 {
  "id": "EX-E2014A8038",
  "section": "B",
  "tier": "advanced",
  "concepts": [
   "M13-testcase",
   "M13-client"
  ],
  "difficulty": 4,
  "format": "debug",
  "prompt": "[IMTIHON B] main/tests.py:0 — tests.py bo'sh. Mexanizm?",
  "options": [
   "Birorta TestCase yo'q. Refaktor va regressiya himoyasiz.",
   "CSRF yo'q",
   "Syntax xato",
   "Migratsiya yo'q"
  ],
  "accepted": [
   "Birorta TestCase yo'q. Refaktor va regressiya himoyasiz."
  ],
  "time_budget": 90,
  "sealed": true,
  "bug": "B22"
 },
 {
  "id": "EX-F6AA0654E4",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 1)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-1A6D8A0246",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 2)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-7AD7591440",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 3)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-A033DB39AB",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 4)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-69D180AB3E",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 5)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-EF023D9DD7",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 6)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-CC9D0BF41D",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 7)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-CB5ED9F475",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 1: Model + migratsiya: Book ga yangi maydon (variant 8)",
  "accepted": [],
  "grader_task": "W1",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-C33DA8CC33",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 1)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-23148C6F85",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 2)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-63360D57F4",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 3)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-0C3CCC53FC",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 4)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-97CA6AFBE2",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 5)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-52138C738E",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 6)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-D5C0619F3B",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 7)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-4AFE7F5085",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M07-fbv"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 2: urls + view: ruxsat mantig'i (variant 8)",
  "accepted": [],
  "grader_task": "W2",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-1BA56F19AD",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 1)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-CE9799901A",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 2)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-39A9E88911",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 3)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-A9B69E2BE3",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 4)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-EA5B3CF749",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 5)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-C04A85EFA5",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 6)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-FF2E21A352",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 7)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-F56E6A2110",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M09-login-required"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 3: Auth oqimi: login/logout (variant 8)",
  "accepted": [],
  "grader_task": "W3",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-9B73D1FFE8",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 1)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-854F4E4E17",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 2)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-12BCB07C46",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 3)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-C1900A328B",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 4)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-6619E37B35",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 5)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-4DA4A98B9E",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 6)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-746B1A0110",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 7)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-CB91F25CB7",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M08-for-if"
  ],
  "difficulty": 3,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 4: Shablon render: for/if (variant 8)",
  "accepted": [],
  "grader_task": "W4",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-5433F9F568",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 1)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-92E661AACD",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 2)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-573683133C",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 3)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-2DBCB3D70A",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 4)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-B5193CB536",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 5)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-23705C4511",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 6)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-367D52C71A",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 7)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-695B22D9B4",
  "section": "C",
  "tier": "elite",
  "concepts": [
   "M13-testcase"
  ],
  "difficulty": 4,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 5: Kutilmagan kengaytma: sevimlilar (variant 8)",
  "accepted": [],
  "grader_task": "W5",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-6BF0892FFC",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 1)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-7BFD962803",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 2)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-8E2966209E",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 3)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-585ED200AB",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 4)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-B3B6021E30",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 5)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-4E509DC7D6",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 6)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-BE51C712BF",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 7)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 },
 {
  "id": "EX-B36FB811D6",
  "section": "C",
  "tier": "advanced",
  "concepts": [
   "M03-fields"
  ],
  "difficulty": 5,
  "format": "build",
  "prompt": "[IMTIHON C] Vazifa 6: Xato topib tuzatish + regressiya test (variant 8)",
  "accepted": [],
  "grader_task": "W6",
  "time_budget": 900,
  "sealed": true
 }
];
