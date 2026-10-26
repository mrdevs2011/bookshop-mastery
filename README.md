# BookShop Mastery

Django BookShop loyihasi asosidagi **o'zbekcha statik kurs**:
darslik (01–14) va interaktiv Mastery Engine app (18 rejim, adaptiv takrorlash, mock imtihon).

Faqat HTML/CSS/JS — backend yo'q, Python yo'q.

## Tuzilma

- `public/` — butun sayt (darslik + `public/app/` ilova)
- `vercel.json` — Vercel sozlamasi (`public/` ni `dist/` ga ko'chiradi)

## Deploy (Vercel)

Framework = Other. Build `vercel.json` dan olinadi.

- Darslik: `https://<project>.vercel.app/`
- App: `https://<project>.vercel.app/app/`

## Lokal ko'rish

```bash
cd public && python3 -m http.server 8000
```

Keyin `http://localhost:8000/` ni oching.

## Eslatma

Progress brauzerning `localStorage` ida saqlanadi (qurilmaga bog'liq).
