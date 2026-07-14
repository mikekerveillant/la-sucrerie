# Before launch — everything to replace

Every item below is a placeholder. The site works with them, but replace each
one before pointing real visitors at it. Almost all of them live in
**`config/property.ts`** (facts & settings) or **`config/i18n.ts`** (wording).

## 1. Photos — `public/images/`
Real photos added 2026-07-14 for 13 of 15 images. Remaining:

- [ ] `location-chavenay.jpg` — still a solid-colour placeholder (village /
      countryside shot)
- [ ] `room-attic.jpg` — still a solid-colour placeholder
- [ ] **Low-resolution photos to replace with bigger versions** (currently
      639px wide — will look soft on laptop screens; aim for ≥1600px):
      `hero.jpg`, `house-billiards.jpg`, `house-kitchen.jpg`,
      `house-living.jpg`, `house-veranda.jpg`, `room-la-sucrerie.jpg`
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
- [x] Domain set to `https://www.la-sucrerie.com` — done 2026-07-13.
      (Still to do at deploy time: point the DNS of la-sucrerie.com at Vercel.)

## 6. Wording — `config/i18n.ts`
- [x] **Testimonials** — replaced with 6 real Airbnb reviews (Eliane, Sarah,
      Matthieu & Priscilia, Marzia, Adele & Marc, Elisabeth) — done 2026-07-13
- [ ] **Cancellation policy FAQ** (Book page) — currently a soft placeholder
      answer; write the real policy
- [ ] Airport drive times (CDG 50 min, Orly 40 min in `config/property.ts`)
      are estimates — confirm

## 7. Nice-to-have later
- [ ] Replace the generated favicon (`app/favicon.ico`)
- [ ] Verify the "mid-19th century" date if you want a precise year in the
      "DEPUIS…" label (copy currently says "Depuis le XIXᵉ siècle")
