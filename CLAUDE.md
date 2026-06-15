# Restaurant Website Template

A reusable Next.js website template for Italian restaurants. Includes dynamic menu management via Sanity CMS, online table booking via Supabase, contact form with email notifications via Resend, Google Maps embed, and opening hours — all manageable by the restaurant owner without touching code.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **CMS**: Sanity v3 — embedded Studio at `/studio` (no separate deploy needed)
- **Database**: Supabase (bookings table)
- **Email**: Resend (booking notifications + contact form)
- **Styling**: Tailwind CSS
- **Deploy**: Vercel
- **Language**: JavaScript (no TypeScript for now)

---

## Project Structure

```
/
├── app/
│   ├── page.jsx                  # Homepage: hero, intro, CTA booking
│   ├── menu/
│   │   └── page.jsx              # Dynamic menu from Sanity
│   ├── book/
│   │   └── page.jsx              # Booking form
│   ├── contacts/
│   │   └── page.jsx              # Contact form + Google Maps + Hours
│   ├── studio/
│   │   └── [[...tool]]/
│   │       └── page.jsx          # Embedded Sanity Studio at /studio
│   └── api/
│       ├── booking/
│       │   └── route.js          # POST: save booking to Supabase + send emails
│       └── contact/
│           └── route.js          # POST: send contact email via Resend
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MenuCategory.jsx          # Menu section with dishes
│   ├── BookingForm.jsx           # Booking form with client-side validation
│   └── GoogleMap.jsx             # Google Maps iframe embed
├── sanity/
│   ├── lib/
│   │   ├── client.js             # Sanity client (generated)
│   │   ├── image.js              # Image URL helper (generated)
│   │   └── live.js               # Live preview helper (generated)
│   ├── schemaTypes/
│   │   ├── index.js              # Registers all schemas
│   │   ├── restaurant.js         # Name, address, phone, email, social links
│   │   ├── menuCategory.js       # Category + array of dishes
│   │   └── openingHours.js       # Day-by-day open/close times + exceptions
│   └── structure.js              # Sanity Studio sidebar configuration
├── lib/
│   └── supabase.js               # Supabase client (server-side only)
└── .env.local                    # See Environment Variables section
```

---

## Environment Variables

```
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production

# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=        # Server-side only, never expose client-side

# Resend
RESEND_API_KEY=
RESTAURANT_EMAIL=                 # Where booking/contact notifications are sent
RESEND_FROM_EMAIL=                # e.g. prenotazioni@ristorantexyz.it

# Google Maps
NEXT_PUBLIC_MAPS_EMBED_URL=       # Full embed URL from Google Maps share > Embed
```

---

## Sanity Schemas

Schemas live in `sanity/schemaTypes/` and must be registered in `sanity/schemaTypes/index.js`.
The Sanity client and helpers are already in `sanity/lib/` (generated — do not recreate in `lib/`).

### `restaurant`
Single document (singleton). Fields: `name`, `tagline`, `address`, `phone`, `email`, `googleMapsEmbedUrl`, `socialLinks` (instagram, facebook).

### `menuCategory`
Fields: `category` (string), `order` (number, for sorting), `items` (array of objects):
- `name` (string, required)
- `description` (text)
- `price` (number, required)
- `allergens` (array of strings — use predefined list: glutine, lattosio, frutta a guscio, uova, pesce, molluschi, soia, sedano, senape, sesamo)
- `photo` (image, optional)
- `available` (boolean, default true — hides dish from menu when false)

### `openingHours`
Single document. Fields: `schedule` (array of objects per weekday: `day`, `isOpen`, `openTime`, `closeTime`), `exceptions` (array: `date`, `label`, `isClosed`).

---

## Supabase Schema

```sql
create table bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text not null,
  date date not null,
  time time not null,
  guests integer not null check (guests between 1 and 20),
  notes text,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled'))
);
```

Row Level Security: enable RLS. Only server-side service role key can insert/read. No public access.

---

## API Routes

### `POST /api/booking`
Accepts: `{ name, email, phone, date, time, guests, notes }`.
1. Validate all fields server-side (no empty required fields, guests 1–20, date not in the past).
2. Insert into Supabase `bookings` table.
3. Send confirmation email to customer via Resend.
4. Send notification email to restaurant via Resend.
5. Return `{ ok: true }` or `{ ok: false, error: string }`.

### `POST /api/contact`
Accepts: `{ name, email, message }`.
1. Validate fields.
2. Send email to restaurant via Resend.
3. Return `{ ok: true }` or `{ ok: false, error: string }`.

---

## Key Behaviors

**BookingForm**
- Date picker: disable past dates and Sundays (or days marked closed in Sanity).
- Time slots: hardcoded as 12:00, 12:30, 13:00, 13:30, 19:00, 19:30, 20:00, 20:30, 21:00. Future enhancement: pull from Sanity opening hours.
- Show clear success/error feedback after submission.
- Never expose Supabase keys client-side — all DB logic goes through the API route.

**OpeningHours component**
- Compute "open now" / "closed" badge based on `new Date()` vs Sanity schedule.
- Handle exceptions (holidays, special closures) from Sanity `openingHours.exceptions`.

**Menu page**
- Fetch from Sanity at request time (SSR) so changes appear immediately without redeploy.
- Filter out dishes where `available === false`.
- Group by category, sorted by `order` field.

**SEO**
- Add `generateMetadata` in each page using restaurant name from Sanity.
- Add JSON-LD schema `Restaurant` type in homepage for Google rich results.
- `next/image` for all images (Sanity CDN URLs).

---

## Commands

```bash
# Install dependencies
npm install

# Run dev server (Next.js + Sanity Studio embedded at /studio)
npm run dev

# Deploy to Vercel
vercel --prod
```

---

## Anti-patterns — Do Not Do These

- Do not use `SUPABASE_SERVICE_ROLE_KEY` in any client component or `NEXT_PUBLIC_` variable.
- Do not call Supabase directly from client components — always go through API routes.
- Do not hardcode restaurant-specific content (name, address, colors) in components — pull from Sanity or CSS variables.
- Do not add a custom admin panel for bookings in v1 — the Supabase dashboard is sufficient.

---

## Customization Per Client

When adapting this template for a new restaurant:
1. Update `.env.local` with client's Sanity project, Supabase project, email, Maps URL.
2. Set brand colors in `tailwind.config.js` under `colors.brand`.
3. Replace hero image in `/public/hero.jpg`.
4. Populate Sanity with menu, hours, and restaurant info.
5. Configure Resend sending domain for client's domain.
