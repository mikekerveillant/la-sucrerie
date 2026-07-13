# La Sucrerie — direct booking website

Bilingual (FR default at `/`, EN at `/en`) direct-booking site for La Sucrerie,
a guest house in Chavenay, Île-de-France. Goal: convert Airbnb guests into
direct bookings at 10% below Airbnb rates.

## Where things live

| What | Where |
| --- | --- |
| All property facts, rooms, pricing, booking-engine URL | `config/property.ts` |
| All wording, French + English | `config/i18n.ts` |
| Photos (drop-in replacements, same filenames) | `public/images/` |
| Launch checklist of everything to replace | `PLACEHOLDERS.md` |
| Env vars (GHL webhook, site URL) | `.env.example` |

## Key behaviours

- **Booking flow**: no custom payments. `components/BookingEngineEmbed.tsx`
  renders the channel-manager iframe when `bookingEngine.embedUrl` is set in
  config; until then it shows an inquiry form. Availability lives in the
  channel manager (Smoobu/Lodgify/Beds24), never in this site.
- **Lead capture**: all forms POST JSON to `NEXT_PUBLIC_GHL_WEBHOOK_URL`
  tagged with `source` (`website-booking` / `website-contact` /
  `website-leadmagnet`) and fire a `lead_submitted` event.
- **i18n**: two root layouts via route groups — `app/(fr)/…` and
  `app/(en)/en/…` — sharing the page templates in `components/pages/`.
- **SEO**: per-page metadata with hreflang, `app/sitemap.ts`, `app/robots.ts`,
  LodgingBusiness + FAQPage JSON-LD in `components/JsonLd.tsx`.

## Commands

```bash
npm run dev     # local dev server
npm run build   # production build (all pages static)
npm run start   # serve the production build
```

Deploys to Vercel as a standard Next.js app.
