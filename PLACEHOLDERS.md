# Before launch — everything to replace

Every item below is a placeholder. The site works with them, but replace each
one before pointing real visitors at it. Almost all of them live in
**`config/property.ts`** (facts & settings) or **`config/i18n.ts`** (wording).

## 1. Photos — `public/images/`
All 15 images are solid-colour stand-ins. Drop in real photos **with the same
filenames** and the site picks them up automatically. Aim for ~1600px wide,
landscape.

- [ ] `hero.jpg` — the money shot (house exterior or garden at golden hour)
- [ ] `house-facade.jpg` — the facade (history section)
- [ ] `house-living.jpg` — living room
- [ ] `house-billiards.jpg` — billiards room
- [ ] `house-kitchen.jpg` — kitchen
- [ ] `house-veranda.jpg` — veranda dining area
- [ ] `house-terrace.jpg` — terrace
- [ ] `house-garden.jpg` — garden
- [ ] `room-la-sucrerie.jpg`, `room-les-jumeaux.jpg`, `room-capucine.jpg`,
      `room-marie-lys.jpg`, `room-valerie-anne.jpg`, `room-attic.jpg`
- [ ] Optional: a dedicated 1200×630 social-preview image (then update
      `images.og` in `config/property.ts`)

## 2. Money & booking — `config/property.ts`
- [ ] `pricing.directFromPerNight` (now 495 €) and `pricing.airbnbFromPerNight`
      (now 550 €) — set the real "from" rates; keep direct ≈ 10% below Airbnb
- [ ] `bookingEngine.embedUrl` — paste the Smoobu/Lodgify/Beds24 booking-engine
      URL once the channel manager is set up; the Book page switches from the
      inquiry form to the real calendar automatically
- [ ] `airbnbListingUrl` — link to the real Airbnb listing (Reviews page)

## 3. Contact details — `config/property.ts`
- [x] Email (`reservation@la-sucrerie.com`) and WhatsApp (`+33 6 62 10 57 42`)
      are set — done 2026-07-13
- [ ] `address.street` — exact street address (or leave vague on purpose)
- [ ] `coordinates` — currently the centre of Chavenay; fine as-is unless you
      want the pin exactly on the house

## 4. Lead capture (GoHighLevel)
- [ ] Set `NEXT_PUBLIC_GHL_WEBHOOK_URL` in `.env.local` and in Vercel
      (see `.env.example`). Until it's set, form submissions are logged to the
      browser console instead of being sent.

## 5. Domain
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain (affects SEO tags,
      sitemap, social previews)

## 6. Wording — `config/i18n.ts`
- [ ] **Testimonials** — all 6 quotes (in both `fr` and `en` sections) are
      marked `[EXEMPLE — à remplacer]` / `[SAMPLE — replace]`. Replace with
      real Airbnb guest quotes.
- [ ] **Cancellation policy FAQ** (Book page) — currently a soft placeholder
      answer; write the real policy
- [ ] Airport drive times (CDG 50 min, Orly 40 min in `config/property.ts`)
      are estimates — confirm

## 7. Nice-to-have later
- [ ] Replace the generated favicon (`app/favicon.ico`)
- [ ] Verify the "mid-19th century" date if you want a precise year in the
      "DEPUIS…" label (copy currently says "Depuis le XIXᵉ siècle")
