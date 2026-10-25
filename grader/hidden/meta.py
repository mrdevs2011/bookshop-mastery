"""Test metama'lumoti: konsept id lari, noto'g'ri tushuncha (misconception) id si, turi.
kind='core'  — to'g'ri loyiha shunday ishlashi SHART (ball shundan hisoblanadi).
kind='quirk' — haqiqiy BookShop ning ma'lum kamchiligi (B01–B22) aniq qayd qilinadi; ball hisobiga kirmaydi,
               lekin mutantlarni ushlashda ishtirok etadi (xatti-harakat o'zgarmasligini regressiya sifatida tekshiradi).
Har testning birinchi docstring qatori — o'zbekcha 'oddiy tilda' tavsif (plain_uz shundan olinadi)."""


def meta(concepts=(), mis='', kind=None):
    def deco(obj):
        d = dict(getattr(obj, '_bs', {}))
        if concepts:
            d['concepts'] = list(concepts)
        if mis:
            d['mis'] = mis
        if kind:
            d['kind'] = kind
        obj._bs = d
        return obj
    return deco


def info(test):
    cls = type(test)
    m = {'concepts': [], 'mis': '', 'kind': 'core'}
    m.update(getattr(cls, '_bs', {}))
    fn = getattr(cls, getattr(test, '_testMethodName', ''), None)
    m.update(getattr(fn, '_bs', {}))
    doc = ''
    if fn is not None and fn.__doc__:
        doc = fn.__doc__.strip().split('\n')[0].strip()
    m['doc'] = doc
    return m
