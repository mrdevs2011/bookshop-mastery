(function () { var T = window.T, BS = window.BS, H = BS.hl;
  // invariant: teglarni olib, entity'larni qaytarsak — aynan asl matn
  function plain(html) { return html.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&'); }
  var SAMPLES = {
    py: ['def index(request):\n    """Bosh sahifa."""\n    if request.user.is_authenticated:\n        return redirect("/book-list/")  # izoh\n    return redirect(\'/login/\')\n',
      '@login_required\nclass A(Base):\n    x = f"{a}b" + r\'\\d\' + 1.5e-3\n    def m(self, *args, **kw): return None\n', "s = 'yopilmagan\nprint(1)\n", '"""yopilmagan uchlik\nikkinchi qator'],
    tpl: ['{% extends "base.html" %}\n{% block c %}<h1>{{ book.name|upper }}</h1>{% for b in books %}<a href="{% url \'x\' b.id %}">{{ b.user.username }}</a>{% endfor %}{% endblock %}{# izoh #}\n',
      '<form method="post">{% csrf_token %}<input name="a" value="{{ v }}"></form>', '{% if x == "a" %}a{% elif y %}b{% else %}c{% endif %}{{ yopilmagan'],
    html: ['<!DOCTYPE html>\n<html lang="uz"><head><meta charset="utf-8"><!-- izoh --><style>a{color:red}</style></head><body><p class=\'x\' data-a="1">Salom &amp; xayr &lt;3</p></body></html>', '<div <b', 'a < b > c'],
    sh: ['$ python manage.py runserver --port=8000 && echo "$HOME" | grep \'x\' # izoh\n$ ls -la ${PWD}/tmp > out.txt\n', 'git commit -m "msg" ; cd ..\n', '"yopilmagan', "echo 'a"]
  };
  var NASTY = '<script>alert("x")</script> & &amp; \' " < > \\ ` $ # { } % ( ) [ ] \u00e9\u044f\u4e2d\n\t';

  T.describe('hl', function () {
    Object.keys(SAMPLES).forEach(function (lang) {
      SAMPLES[lang].forEach(function (code, i) {
        T.it(lang + ' #' + (i + 1) + ': matn aynan saqlanadi (invariant)', function () { T.eq(plain(H.highlight(lang, code)), code); });
      });
    });
    T.it('tasodifiy axlat (seed 1..400, hamma til): invariant va xom <script> yo‘q', function () {
      var alphabet = ['<', '>', '&', '"', "'", '\\', '\n', ' ', '#', '{%', '%}', '{{', '}}', '$', '"""', "'''", 'def ', 'if ', '-x', '--y=', '/*', '<!--', '-->', '0x1', '1.', 'a_b', '|', ';', '`'], langs = H.langs;
      for (var seed = 1; seed <= 400; seed++) {
        var r = BS.rng.create(seed), s = '', n = r.int(0, 30);
        for (var k = 0; k < n; k++) s += r.pick(alphabet);
        var lang = langs[seed % langs.length], out = H.highlight(lang, s);
        if (plain(out) !== s) throw new Error('invariant buzildi: lang=' + lang + ' seed=' + seed + ' kirish=' + JSON.stringify(s));
      }
    });
    T.it('XSS: kod ichidagi <script> hech qachon xom teg bo‘lib chiqmaydi', function () {
      ['py', 'tpl', 'html', 'sh', 'noma‘lum'].forEach(function (lang) {
        var out = H.highlight(lang, NASTY);
        T.assert(out.indexOf('<script') < 0, lang + ': xom <script>'); T.eq(plain(out), NASTY);
      });
      T.assert(H.highlight('py', 'x = "<script>"').indexOf('&lt;script&gt;') >= 0);
    });
    T.it('python: kalit so‘z, def nomi, self, izoh, satr, raqam, dekorator', function () {
      var o = H.highlight('py', '@dec\ndef foo(self):  # c\n    return "s" + 12');
      ['<span class="tok-kw">def</span>', '<span class="tok-fn">foo</span>', '<span class="tok-self">self</span>', '<span class="tok-cm"># c</span>',
        '<span class="tok-str">&quot;s&quot;</span>'.replace(/&quot;/g, '"'), '<span class="tok-num">12</span>', '<span class="tok-dec">@dec</span>', '<span class="tok-kw">return</span>'].forEach(function (frag) {
        T.assert(o.indexOf(frag) >= 0, 'topilmadi: ' + frag + ' | ' + o);
      });
      T.assert(H.highlight('py', 'class Foo: pass').indexOf('<span class="tok-cls">Foo</span>') >= 0);
    });
    T.it('python: satr ichidagi kalit so‘z va # rangsiz', function () {
      var o = H.highlight('py', 'a = "def # x"');
      T.assert(o.indexOf('tok-kw') < 0 && o.indexOf('tok-cm') < 0, o);
    });
    T.it('shablon: {{ }} o‘zgaruvchi, {% %} kalit so‘z, filtr, izoh', function () {
      var o = H.highlight('tpl', '{{ book.name|upper }}{% if x %}{# n #}');
      T.assert(o.indexOf('<span class="tok-var">book.name</span>') >= 0, o); T.assert(o.indexOf('<span class="tok-fn">|upper</span>') >= 0, o);
      T.assert(o.indexOf('<span class="tok-kw">if</span>') >= 0, o); T.assert(o.indexOf('<span class="tok-cm">{# n #}</span>') >= 0, o);
    });
    T.it('shell: $ prompt, buyruq, flag, o‘zgaruvchi', function () {
      var o = H.highlight('sh', '$ python manage.py runserver --port=8000 "$HOME"');
      T.assert(o.indexOf('<span class="tok-dim">$ </span>') >= 0, o); T.assert(o.indexOf('<span class="tok-fn">python</span>') >= 0, o);
      T.assert(o.indexOf('<span class="tok-flag">--port=8000</span>') >= 0, o);
    });
    T.it('noma‘lum til — faqat escape; esc to‘g‘ri', function () {
      T.eq(H.highlight('xyz', '<a>&'), '&lt;a&gt;&amp;'); T.eq(H.esc('<&>'), '&lt;&amp;&gt;');
      T.eq(H.highlight('py', ''), ''); T.assert(H.langs.indexOf('py') >= 0 && H.langs.indexOf('tpl') >= 0);
    });
  });
})();
