/* AVTO/QO'L — P3. */
window.BS = window.BS || {}; window.BS.data = window.BS.data || {};
window.BS.data.concepts = [
 {
  "id": "M00-import",
  "nomi": "import va from … import",
  "modul": "M00",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": [
   "MC-unused-ok"
  ]
 },
 {
  "id": "M00-def-return",
  "nomi": "def, return, None qaytish",
  "modul": "M00",
  "prereq": [
   "M00-import"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": [
   "MC-implicit-none"
  ]
 },
 {
  "id": "M00-if",
  "nomi": "if / elif / else",
  "modul": "M00",
  "prereq": [
   "M00-def-return"
  ],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M00-str-methods",
  "nomi": "str: startswith, slicing",
  "modul": "M00",
  "prereq": [
   "M00-import"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": [
   "MC-slice-safe"
  ]
 },
 {
  "id": "M00-try-except",
  "nomi": "try / except Exception",
  "modul": "M00",
  "prereq": [
   "M00-def-return"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": [
   "MC-get-always-str"
  ]
 },
 {
  "id": "M00-class",
  "nomi": "class, self, meros",
  "modul": "M00",
  "prereq": [
   "M00-def-return"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M00-kwargs",
  "nomi": "kwargs va type hint",
  "modul": "M00",
  "prereq": [
   "M00-def-return"
  ],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M00-none",
  "nomi": "None va bo'sh qiymat",
  "modul": "M00",
  "prereq": [
   "M00-def-return"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "debug"
  ],
  "misconceptions": [
   "MC-get-always-str"
  ]
 },
 {
  "id": "M01-http",
  "nomi": "HTTP so'rov/javob",
  "modul": "M01",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "trace"
  ],
  "misconceptions": []
 },
 {
  "id": "M01-methods",
  "nomi": "GET vs POST",
  "modul": "M01",
  "prereq": [
   "M01-http"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "trace",
   "debug"
  ],
  "misconceptions": [
   "MC-get-safe"
  ]
 },
 {
  "id": "M01-status-codes",
  "nomi": "200/302/404/405/500",
  "modul": "M01",
  "prereq": [
   "M01-http"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "trace"
  ],
  "misconceptions": [
   "MC-text-equals-404"
  ]
 },
 {
  "id": "M01-redirect",
  "nomi": "Redirect = Location header",
  "modul": "M01",
  "prereq": [
   "M01-status-codes"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "trace"
  ],
  "misconceptions": []
 },
 {
  "id": "M01-cookie-session",
  "nomi": "Cookie va sessiya",
  "modul": "M01",
  "prereq": [
   "M01-http"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "trace"
  ],
  "misconceptions": []
 },
 {
  "id": "M01-form-encoding",
  "nomi": "Forma kodlash (urlencoded)",
  "modul": "M01",
  "prereq": [
   "M01-methods"
  ],
  "weight": 1,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M01-query-string",
  "nomi": "Query string ?public=true",
  "modul": "M01",
  "prereq": [
   "M01-http"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M01-request-attrs",
  "nomi": "request.GET/POST/method/user",
  "modul": "M01",
  "prereq": [
   "M01-methods"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M02-startproject",
  "nomi": "startproject vs startapp",
  "modul": "M02",
  "prereq": [
   "M01-http"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M02-manage",
  "nomi": "manage.py buyruqlari",
  "modul": "M02",
  "prereq": [
   "M02-startproject"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M02-settings",
  "nomi": "settings anatomiyasi",
  "modul": "M02",
  "prereq": [
   "M02-startproject"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "debug"
  ],
  "misconceptions": [
   "MC-debug-prod-ok",
   "MC-lang-cosmetic"
  ]
 },
 {
  "id": "M02-installed-apps",
  "nomi": "INSTALLED_APPS",
  "modul": "M02",
  "prereq": [
   "M02-settings"
  ],
  "weight": 1,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M02-middleware",
  "nomi": "MIDDLEWARE tartibi",
  "modul": "M02",
  "prereq": [
   "M02-settings"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "debug"
  ],
  "misconceptions": [
   "MC-csrf-optional"
  ]
 },
 {
  "id": "M02-request-cycle",
  "nomi": "So'rov hayot sikli",
  "modul": "M02",
  "prereq": [
   "M02-middleware",
   "M01-http"
  ],
  "weight": 3,
  "formats": [
   "trace",
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-fields",
  "nomi": "Maydon turlari (Char/Date/Bool/FK)",
  "modul": "M03",
  "prereq": [
   "M00-class",
   "M02-startproject"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-max-length",
  "nomi": "max_length",
  "modul": "M03",
  "prereq": [
   "M03-fields"
  ],
  "weight": 1,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-auto-now-add",
  "nomi": "auto_now_add",
  "modul": "M03",
  "prereq": [
   "M03-fields"
  ],
  "weight": 1,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-fk",
  "nomi": "ForeignKey + on_delete=CASCADE",
  "modul": "M03",
  "prereq": [
   "M03-fields"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-null-blank",
  "nomi": "null vs blank",
  "modul": "M03",
  "prereq": [
   "M03-fields"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "debug"
  ],
  "misconceptions": [
   "MC-null-enough"
  ]
 },
 {
  "id": "M03-default",
  "nomi": "default qiymat",
  "modul": "M03",
  "prereq": [
   "M03-fields"
  ],
  "weight": 1,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-user-id",
  "nomi": "user_id vs user",
  "modul": "M03",
  "prereq": [
   "M03-fk"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": [
   "MC-fk-id-same"
  ]
 },
 {
  "id": "M03-reverse",
  "nomi": "teskari menejer bookview_set",
  "modul": "M03",
  "prereq": [
   "M03-fk"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-str",
  "nomi": "__str__",
  "modul": "M03",
  "prereq": [
   "M00-class"
  ],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": [
   "MC-default-str-ok"
  ]
 },
 {
  "id": "M03-meta",
  "nomi": "Meta va UniqueConstraint",
  "modul": "M03",
  "prereq": [
   "M03-fields"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": [
   "MC-get-or-create-atomic"
  ]
 },
 {
  "id": "M04-get-filter",
  "nomi": "get / filter / exclude",
  "modul": "M04",
  "prereq": [
   "M03-fields"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-order-count",
  "nomi": "order_by / count / exists",
  "modul": "M04",
  "prereq": [
   "M04-get-filter"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-get-or-create",
  "nomi": "get_or_create",
  "modul": "M04",
  "prereq": [
   "M04-get-filter"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": [
   "MC-get-or-create-atomic"
  ]
 },
 {
  "id": "M04-does-not-exist",
  "nomi": "DoesNotExist",
  "modul": "M04",
  "prereq": [
   "M04-get-filter"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-lazy",
  "nomi": "Lazy QuerySet",
  "modul": "M04",
  "prereq": [
   "M04-get-filter"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "trace",
   "debug"
  ],
  "misconceptions": [
   "MC-qs-immediate"
  ]
 },
 {
  "id": "M04-order-id",
  "nomi": "order_by('-id')",
  "modul": "M04",
  "prereq": [
   "M04-order-count"
  ],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-q",
  "nomi": "Q obyektlari",
  "modul": "M04",
  "prereq": [
   "M04-get-filter"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-select-related",
  "nomi": "select_related",
  "modul": "M04",
  "prereq": [
   "M04-lazy",
   "M03-fk"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-prefetch",
  "nomi": "prefetch_related",
  "modul": "M04",
  "prereq": [
   "M04-lazy",
   "M03-reverse"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-annotate",
  "nomi": "annotate(Count)",
  "modul": "M04",
  "prereq": [
   "M04-order-count"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write",
   "debug"
  ],
  "misconceptions": [
   "MC-count-free"
  ]
 },
 {
  "id": "M04-n-plus-1",
  "nomi": "N+1 muammosi",
  "modul": "M04",
  "prereq": [
   "M04-annotate",
   "M04-prefetch"
  ],
  "weight": 4,
  "formats": [
   "choice",
   "debug",
   "trace"
  ],
  "misconceptions": [
   "MC-count-free"
  ]
 },
 {
  "id": "M04-shell",
  "nomi": "shell bilan tajriba",
  "modul": "M04",
  "prereq": [
   "M04-get-filter",
   "M02-manage"
  ],
  "weight": 2,
  "formats": [
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-makemigrations",
  "nomi": "makemigrations vs migrate",
  "modul": "M05",
  "prereq": [
   "M03-fields",
   "M02-manage"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": [
   "MC-migration-auto"
  ]
 },
 {
  "id": "M05-showmigrations",
  "nomi": "showmigrations",
  "modul": "M05",
  "prereq": [
   "M05-makemigrations"
  ],
  "weight": 1,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-sqlmigrate",
  "nomi": "sqlmigrate",
  "modul": "M05",
  "prereq": [
   "M05-makemigrations"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-add-field",
  "nomi": "AddField",
  "modul": "M05",
  "prereq": [
   "M05-makemigrations"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-rename",
  "nomi": "RenameField (detection)",
  "modul": "M05",
  "prereq": [
   "M05-makemigrations"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-alter",
  "nomi": "AlterField",
  "modul": "M05",
  "prereq": [
   "M05-makemigrations"
  ],
  "weight": 2,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-remove",
  "nomi": "RemoveField",
  "modul": "M05",
  "prereq": [
   "M05-makemigrations"
  ],
  "weight": 2,
  "formats": [
   "choice"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-graph",
  "nomi": "Migratsiya bog'liqlik grafi",
  "modul": "M05",
  "prereq": [
   "M05-makemigrations"
  ],
  "weight": 2,
  "formats": [
   "choice",
   "order"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-null-default",
  "nomi": "null qo'shish va default",
  "modul": "M05",
  "prereq": [
   "M05-add-field",
   "M03-null-blank"
  ],
  "weight": 3,
  "formats": [
   "choice",
   "debug"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-history",
  "nomi": "0001–0008 tarixi",
  "modul": "M05",
  "prereq": [
   "M05-rename",
   "M05-remove"
  ],
  "weight": 3,
  "formats": [
   "order",
   "trace"
  ],
  "misconceptions": []
 },
 {
  "id": "M06-path",
  "nomi": "path()",
  "modul": "M06",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M06-converter",
  "nomi": "<int:id>",
  "modul": "M06",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M06-order",
  "nomi": "URL tartibi",
  "modul": "M06",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M06-trailing",
  "nomi": "oxirgi /",
  "modul": "M06",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M06-name-reverse",
  "nomi": "name= + reverse",
  "modul": "M06",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M06-include",
  "nomi": "include()",
  "modul": "M06",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M06-templateview",
  "nomi": "TemplateView.as_view",
  "modul": "M06",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-fbv",
  "nomi": "FBV oqimi",
  "modul": "M07",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-early-return",
  "nomi": "erta return",
  "modul": "M07",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-method-branch",
  "nomi": "metod bo'yicha tarmoq",
  "modul": "M07",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-render-redirect",
  "nomi": "render/redirect/HttpResponse",
  "modul": "M07",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-context",
  "nomi": "kontekst lug'ati",
  "modul": "M07",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-none-return",
  "nomi": "None qaytarish xatosi",
  "modul": "M07",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-404",
  "nomi": "404 vs matn",
  "modul": "M07",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-get-object-or-404",
  "nomi": "get_object_or_404",
  "modul": "M07",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-escape",
  "nomi": "avto-escape",
  "modul": "M08",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-dot",
  "nomi": "nuqtali qidiruv",
  "modul": "M08",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-related-count",
  "nomi": "bookview_set.count",
  "modul": "M08",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-for-if",
  "nomi": "for/if",
  "modul": "M08",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-messages",
  "nomi": "messages",
  "modul": "M08",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-extends",
  "nomi": "extends/block",
  "modul": "M08",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-static",
  "nomi": "static",
  "modul": "M08",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-csrf-token",
  "nomi": "csrf_token",
  "modul": "M08",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-user",
  "nomi": "User modeli",
  "modul": "M09",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-set-password",
  "nomi": "set_password hash",
  "modul": "M09",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-check-password",
  "nomi": "check_password",
  "modul": "M09",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-login-logout",
  "nomi": "login()/logout()",
  "modul": "M09",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-session-cookie",
  "nomi": "sessiya cookie",
  "modul": "M09",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-request-user",
  "nomi": "request.user",
  "modul": "M09",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-is-authenticated",
  "nomi": "is_authenticated",
  "modul": "M09",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-authenticate",
  "nomi": "authenticate vs qo'lda",
  "modul": "M09",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-is-active",
  "nomi": "is_active",
  "modul": "M09",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-validators",
  "nomi": "parol validatorlari",
  "modul": "M09",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-login-required",
  "nomi": "login_required",
  "modul": "M09",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-messages",
  "nomi": "messages framework",
  "modul": "M09",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M10-add-book-url",
  "nomi": "add-book URL mantig'i",
  "modul": "M10",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M10-public-private",
  "nomi": "public/private matritsa",
  "modul": "M10",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M10-unique-views",
  "nomi": "noyob ko'rishlar hisobi",
  "modul": "M10",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M11-register",
  "nomi": "admin.register",
  "modul": "M11",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M11-modeladmin",
  "nomi": "ModelAdmin",
  "modul": "M11",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M11-createsuperuser",
  "nomi": "createsuperuser",
  "modul": "M11",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M11-str-effect",
  "nomi": "__str__ ta'siri",
  "modul": "M11",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-csrf",
  "nomi": "CSRF",
  "modul": "M12",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-xss",
  "nomi": "XSS/autoescape",
  "modul": "M12",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-idor",
  "nomi": "IDOR /book/<id>/",
  "modul": "M12",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-user-enum",
  "nomi": "user enumeration",
  "modul": "M12",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-debug-hosts",
  "nomi": "DEBUG/ALLOWED_HOSTS/SECRET_KEY",
  "modul": "M12",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-get-side-effect",
  "nomi": "GET-logout",
  "modul": "M12",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-password-policy",
  "nomi": "parol siyosati",
  "modul": "M12",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-secrets-git",
  "nomi": "sirlar gitda",
  "modul": "M12",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M13-testcase",
  "nomi": "TestCase",
  "modul": "M13",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M13-client",
  "nomi": "Client",
  "modul": "M13",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M13-assert",
  "nomi": "assertRedirects/Contains",
  "modul": "M13",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M13-test-db",
  "nomi": "test DB",
  "modul": "M13",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M13-write-15",
  "nomi": "15+ haqiqiy test",
  "modul": "M13",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-login-required",
  "nomi": "login_required refaktor",
  "modul": "M14",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-get-object",
  "nomi": "get_object_or_404",
  "modul": "M14",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-modelform",
  "nomi": "ModelForm",
  "modul": "M14",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-cbv",
  "nomi": "ListView/DetailView/CreateView",
  "modul": "M14",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-base-html",
  "nomi": "base.html",
  "modul": "M14",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-named-urls",
  "nomi": "nomlangan URL",
  "modul": "M14",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-unique",
  "nomi": "UniqueConstraint",
  "modul": "M14",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-annotate-count",
  "nomi": "annotate(Count)",
  "modul": "M14",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M14-env-settings",
  "nomi": "sozlamalarni muhitga ajratish",
  "modul": "M14",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M15-sprint-steps",
  "nomi": "20 qadamli sprint",
  "modul": "M15",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M15-grader-gate",
  "nomi": "har qadam grader darvozasi",
  "modul": "M15",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M16-git-basics",
  "nomi": "init/add/commit/diff/log",
  "modul": "M16",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M16-gitignore",
  "nomi": ".gitignore",
  "modul": "M16",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M16-requirements",
  "nomi": "requirements.txt",
  "modul": "M16",
  "prereq": [],
  "weight": 3,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M16-venv",
  "nomi": "venv",
  "modul": "M16",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M16-db-out-of-git",
  "nomi": "db ni gitdan chiqarish",
  "modul": "M16",
  "prereq": [],
  "weight": 2,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M00-docstring",
  "nomi": "docstring",
  "modul": "M00",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M00-bool",
  "nomi": "bool va solishtirish",
  "modul": "M00",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M01-headers",
  "nomi": "HTTP headerlar",
  "modul": "M01",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M01-body",
  "nomi": "so'rov tanasi",
  "modul": "M01",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M02-wsgi",
  "nomi": "WSGI/ASGI",
  "modul": "M02",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M02-staticfiles",
  "nomi": "STATICFILES_DIRS",
  "modul": "M02",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-charfield",
  "nomi": "CharField xususiyatlari",
  "modul": "M03",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-boolfield",
  "nomi": "BooleanField default",
  "modul": "M03",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M03-datefield",
  "nomi": "DateField",
  "modul": "M03",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-values",
  "nomi": "values / values_list",
  "modul": "M04",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-exclude",
  "nomi": "exclude()",
  "modul": "M04",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M04-exists",
  "nomi": "exists() vs count",
  "modul": "M04",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-squash",
  "nomi": "squashmigrations",
  "modul": "M05",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M05-dependency",
  "nomi": "depends_on",
  "modul": "M05",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M07-httpresponse",
  "nomi": "HttpResponse turlari",
  "modul": "M07",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M08-autoescape",
  "nomi": "autoescape off xavfi",
  "modul": "M08",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M09-hashers",
  "nomi": "parol hash algoritmlari",
  "modul": "M09",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 },
 {
  "id": "M12-xss-context",
  "nomi": "XSS kontekstlari",
  "modul": "M12",
  "prereq": [],
  "weight": 1,
  "formats": [
   "choice",
   "write"
  ],
  "misconceptions": []
 }
];
