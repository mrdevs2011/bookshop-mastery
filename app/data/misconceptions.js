/* AVTO/QO'L — P3. Qo'lda tahrirlash mumkin, lekin id/prereq bog'liqligini saqlang. */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.misconceptions = [
 {
  "id": "MC-implicit-none",
  "name": "View avtomatik bo'sh javob qaytaradi",
  "why_tempting": "Python funksiyasi return yozmasa None qaytaradi — 'hech narsa' deb o'ylash",
  "why_wrong": "Django view HttpResponse (yoki subklass) qaytarishi SHART; None → 500 ValueError"
 },
 {
  "id": "MC-get-always-str",
  "name": "POST.get doim satr qaytaradi",
  "why_tempting": "Forma maydoni bo'sh bo'lsa ham string kutish",
  "why_wrong": "Kalit yo'q yoki qiymat yo'q bo'lsa None; None.startswith → AttributeError"
 },
 {
  "id": "MC-csrf-optional",
  "name": "CSRF faqat production uchun",
  "why_tempting": "Lokal ishlayapti, shuning uchun kerak emas deb o'ylash",
  "why_wrong": "Middleware yoqilmasa har qanday sayt foydalanuvchi nomidan POST qila oladi"
 },
 {
  "id": "MC-get-safe",
  "name": "GET hech qachon o'zgartirmaydi",
  "why_tempting": "HTTP semantikasi: GET idempotent",
  "why_wrong": "Agar view GET da side-effect qilsa (logout), rasm/link orqali majburan chaqiriladi"
 },
 {
  "id": "MC-set-password-validates",
  "name": "set_password validatorlarni ishga tushiradi",
  "why_tempting": "settings da AUTH_PASSWORD_VALIDATORS bor",
  "why_wrong": "Validatorlar form/validate_password orqali; set_password faqat hash qiladi"
 },
 {
  "id": "MC-check-password-enough",
  "name": "check_password = to'liq autentifikatsiya",
  "why_tempting": "Parol to'g'ri bo'lsa kifoya",
  "why_wrong": "authenticate is_active, backend, signalarni ham tekshiradi"
 },
 {
  "id": "MC-text-equals-404",
  "name": "Matn 'topilmadi' = 404",
  "why_tempting": "Foydalanuvchi matnni ko'radi",
  "why_wrong": "Status 200; crawler/API 404 kutadi; 404.html ishlamaydi"
 },
 {
  "id": "MC-count-free",
  "name": "RelatedManager.count arzon",
  "why_tempting": "Oddiy metod chaqiruvi",
  "why_wrong": "Har chaqiruvda SQL; N kartochka → N+1 so'rov"
 },
 {
  "id": "MC-context-auto-class",
  "name": "Kontekst o'zgaruvchi CSS klassiga aylanadi",
  "why_tempting": "is_public uzatilgan",
  "why_wrong": "Shablon {% if %} bilan klassni qo'yishi kerak"
 },
 {
  "id": "MC-unused-ok",
  "name": "Ishlatilmagan import zararsiz",
  "why_tempting": "Kod ishlaydi",
  "why_wrong": "Chalg'itadi, linter xatosi, ba'zan nom to'qnashuvi"
 },
 {
  "id": "MC-null-enough",
  "name": "null=True forma va validatsiyani yechadi",
  "why_tempting": "DB NULL qabul qiladi",
  "why_wrong": "blank forma uchun; max_length; URLField yaxshiroq"
 },
 {
  "id": "MC-get-or-create-atomic",
  "name": "get_or_create har doim atomik",
  "why_tempting": "Nomida 'or create'",
  "why_wrong": "Unique constraint bo'lmasa poyga dublikat beradi"
 },
 {
  "id": "MC-default-str-ok",
  "name": "Default __str__ yetarli",
  "why_tempting": "Admin ishlaydi",
  "why_wrong": "'Book object (1)' foydasiz; admin va shell da chalkash"
 },
 {
  "id": "MC-public-excludes-owner",
  "name": "public=true egasini chiqarib tashlaydi",
  "why_tempting": "'boshqalar uchun' deb o'ylash",
  "why_wrong": "filter(public=True) egasini ham qamrab oladi"
 },
 {
  "id": "MC-hardcode-ok",
  "name": "URL ni qattiq yozish oddiyroq",
  "why_tempting": "qisqa kod",
  "why_wrong": "Yo'l o'zgarsa barcha redirect/sinish; reverse markazlashtiradi"
 },
 {
  "id": "MC-repeat-ok",
  "name": "Takroriy auth tekshiruv aniqroq",
  "why_tempting": "Har viewda ko'rinadi",
  "why_wrong": "Unutish oson; @login_required yagona nuqta"
 },
 {
  "id": "MC-copy-paste-css",
  "name": "Har shablonda style qulay",
  "why_tempting": "Mustaqil fayl",
  "why_wrong": "O'zgarish 7 joyda; base.html + extends"
 },
 {
  "id": "MC-debug-prod-ok",
  "name": "DEBUG=True qulay, qoldirish mumkin",
  "why_tempting": "Xato sahifasi chiroyli",
  "why_wrong": "Traceback, SECRET, sozlamalar oshkor"
 },
 {
  "id": "MC-lang-cosmetic",
  "name": "LANGUAGE_CODE faqat kosmetik",
  "why_tempting": "UI o'zbekcha yozilgan",
  "why_wrong": "format, tarjima, admin tillari ta'sirlanadi"
 },
 {
  "id": "MC-manual-enough",
  "name": "Qo'lda sinash yetarli",
  "why_tempting": "Ilova kichik",
  "why_wrong": "Regressiya; refaktor xavfsiz emas; CI yo'q"
 },
 {
  "id": "MC-dead-helper",
  "name": "Yordamchi funksiya yozilgan = ishlatilgan",
  "why_tempting": "Kod bazada bor",
  "why_wrong": "Chaqirilmasa o'lik kod; return qilinmasa ta'sirsiz"
 },
 {
  "id": "MC-slice-safe",
  "name": "url[8:] har doim xavfsiz",
  "why_tempting": "https:// 8 belgi",
  "why_wrong": "None yoki qisqa satr → xato; protokolsiz URL buziladi"
 },
 {
  "id": "MC-fk-id-same",
  "name": "user va user_id bir xil narsa",
  "why_tempting": "Ikkala filter ishlaydi",
  "why_wrong": "Semantik farq bor (obyekt vs int); lekin ORM ikkalasini qabul qiladi"
 },
 {
  "id": "MC-migration-auto",
  "name": "models o'zgarsa migratsiya avtomatik",
  "why_tempting": "makemigrations qulay",
  "why_wrong": "Qo'lda makemigrations + migrate; rename detection ehtiyot"
 },
 {
  "id": "MC-qs-immediate",
  "name": "QuerySet yaratilishi SQL yuboradi",
  "why_tempting": "filter(...) chaqiruvi",
  "why_wrong": "Lazy: faqat iter/list/count/get da SQL"
 }
];
