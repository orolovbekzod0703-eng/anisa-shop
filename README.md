# Anisa Shop — Ayollar kiyimlari onlayn do'koni

Zamonaviy, mobile-first e-commerce sayti. React + Vite + Tailwind + Zustand,
backend **Supabase** (Postgres + Auth + Storage). Admin panel bilan.

## Xususiyatlar

- 🇺🇿 / 🇷🇺 UZ/RU tillar
- 🛍️ Mahsulotlar, kategoriyalar, filtrlar (o'lcham/rang/brend/narx), qidiruv (autocomplete)
- 🏷️ Yorliqlar (Yangi, Bestseller, Cheklangan, Aksiya) badges
- ⭐ Sharhlar va reyting (5 yulduz) — login talab
- 💗 Sevimlilar · 🛒 Chetdan chiqadigan savat
- 👤 Mijoz akkaunti — ro'yxatdan o'tish, kirish, buyurtmalar tarixi
- 📦 5-bosqichli checkout (Payme/Click/Uzum/naqd)
- 🗺️ Xarita (OpenStreetMap + Leaflet) — manzilni xaritada tanlash
- 🔥 Aksiya banneri hisoblagich bilan
- 🔐 Admin panel (`/admin`)
  - **Dashboard** — statistika (kunlik/haftalik sotuv, 30 kun grafigi, top mahsulotlar)
  - **Buyurtmalar** — status filtri, o'zgartirish, tafsilotlar
  - **Mahsulotlar** — CRUD, rasm upload, yorliqlar
- 📱 To'liq responsiv

## 1. Boshlash (lokal)

```bash
npm install
copy .env.example .env
npm run dev
```

## 2. Supabase sozlash

1. [supabase.com](https://supabase.com) da yangi loyiha yarating.
2. **Project Settings → API** dan `URL` va `anon public` kalitni oling.
3. `.env` ga qo'ying:

   ```
   VITE_SUPABASE_URL=https://xxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJ...
   ```

4. **SQL Editor** → [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
   Bu jadval, RLS va `anisa` public storage bucket yaratadi.
5. So'ng [`supabase/migrations/001_features.sql`](supabase/migrations/001_features.sql) ni ham Run qiling
   (labels, profiles, reviews).
6. (Ixtiyoriy) namuna 3 mahsulot uchun [`supabase/seed.sql`](supabase/seed.sql).

## 3. Admin foydalanuvchi

1. Supabase → **Authentication → Users → Add user** (Auto Confirm yoqing).
2. Yaratilgan user'ning **UID** ni ko'chirib oling.
3. **SQL Editor**:

   ```sql
   insert into public.admins (user_id) values ('SIZNING-UID');
   ```

4. `/admin/login` — email/parol bilan kiring.

## 4. Vercel'ga deploy

1. Kodni GitHub'ga push qiling.
2. [vercel.com/new](https://vercel.com/new) → repositoriyani import qiling.
3. Framework `Vite` avtomatik aniqlanadi.
4. **Environment Variables** ga `VITE_SUPABASE_URL` va `VITE_SUPABASE_ANON_KEY` qo'shing.
5. **Deploy**.

SPA marshrutlari uchun `vercel.json` da rewrites sozlangan.

## Aloqa

- Instagram: [@anisa_shop_olmaliq](https://www.instagram.com/anisa_shop_olmaliq/)
- Telegram: [@Anisashop_admin](https://t.me/Anisashop_admin)
- Telefon: +998 94 923 26 89
- Manzil: Olmaliq sh., O'zbekiston

## Litsenziya

MIT
