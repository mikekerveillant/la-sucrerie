/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LA SUCRERIE — SINGLE SOURCE OF TRUTH FOR PROPERTY DATA
 *
 * Everything factual about the property lives here: rooms, capacity, ratings,
 * pricing, contact details, booking-engine settings. Update this file to
 * change what the site displays — no component edits needed.
 *
 * All translatable COPY (sentences, descriptions) lives in /config/i18n.ts.
 * Anything marked PLACEHOLDER must be replaced before launch — see
 * PLACEHOLDERS.md at the project root for the full checklist.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const property = {
  name: "La Sucrerie",
  /** Used in <title> tags and schema.org */
  legalName: "La Sucrerie — Maison d'hôtes à Chavenay",

  // The apex domain is primary on Vercel (www redirects to it).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://la-sucrerie.com",

  address: {
    // PLACEHOLDER: exact street address (shown on Location + Contact pages and in schema.org)
    street: "Rue du Centre", // PLACEHOLDER
    town: "Chavenay",
    postalCode: "78450",
    region: "Île-de-France",
    department: "Yvelines",
    country: "FR",
  },

  /** Approximate centre of Chavenay — fine for the map embed; refine if needed. */
  coordinates: {
    lat: 48.8542,
    lng: 1.9869,
  },

  capacity: {
    guestsMin: 14,
    guestsMax: 16,
    bedrooms: 5,
    beds: 9,
    privateBaths: 3,
  },

  /** Real Airbnb social proof — keep in sync with the live listing. */
  rating: {
    score: 4.82,
    reviewCount: 364,
    yearsHosting: 16,
    categories: {
      cleanliness: 4.9,
      checkIn: 4.9,
      accuracy: 4.8,
      location: 4.7,
      communication: 4.5,
      value: 4.6,
    },
  },

  // PLACEHOLDER: link to the real Airbnb listing (used on the Reviews page as third-party proof).
  airbnbListingUrl: "https://www.airbnb.fr/", // PLACEHOLDER

  contact: {
    // Reached via WhatsApp (preferred) — the number is shown as a WhatsApp
    // contact on the site, not as a plain call link.
    phone: "+33 6 62 10 57 42",
    email: "reservation@la-sucrerie.com",
    whatsapp: "+33662105742", // digits only, used in wa.me link
  },

  /**
   * PLACEHOLDER PRICING — illustrative numbers only.
   * `directFromPerNight` should be ~10% below `airbnbFromPerNight`.
   * Shown in the price-comparison module on the Book page and in CTAs.
   */
  pricing: {
    currency: "EUR",
    directFromPerNight: 495, // PLACEHOLDER
    airbnbFromPerNight: 550, // PLACEHOLDER
    directDiscountPercent: 10,
  },

  /**
   * Channel-manager booking engine (Smoobu / Lodgify / Beds24…).
   * IMPORTANT: calendar availability is synced by the channel manager and is
   * NEVER stored in this site. When `embedUrl` is set, the Book page renders
   * the engine iframe; while it is empty, a styled inquiry form is shown.
   */
  bookingEngine: {
    embedUrl: "", // PLACEHOLDER: e.g. "https://booking.smoobu.com/…"
  },

  houseRules: {
    checkInStart: "16:00",
    checkInEnd: "22:00",
    checkOut: "11:00",
    selfCheckIn: true,
    smoking: false,
    pets: false,
  },

  amenityFacts: {
    wifiMbps: 374,
    parkingCars: 5,
    tvInches: 42,
  },

  /**
   * Rooms. `nameKey`/`bedsKey`/`blurbKey` point into the i18n dictionary so
   * descriptions can differ per language; ids double as anchor links
   * (/rooms#la-sucrerie) referenced from the home page cards.
   */
  rooms: [
    {
      id: "la-sucrerie",
      name: "Suite La Sucrerie",
      floor: 1,
      sleeps: 2,
      image: "/images/room-la-sucrerie.jpg",
    },
    {
      id: "les-jumeaux",
      name: "Suite Les Jumeaux",
      floor: 1,
      sleeps: 7,
      image: "/images/room-les-jumeaux.jpg",
    },
    {
      id: "capucine",
      name: "Chambre Capucine",
      floor: 2,
      sleeps: 2,
      image: "/images/room-capucine.jpg",
    },
    {
      id: "marie-lys",
      name: "Chambre Marie-Lys",
      floor: 2,
      sleeps: 2,
      image: "/images/room-marie-lys.jpg",
    },
    {
      id: "valerie-anne",
      name: "Chambre Valérie-Anne",
      floor: 2,
      sleeps: 2,
      image: "/images/room-valerie-anne.jpg",
    },
    {
      id: "attic",
      name: "Le Grenier", // attic — extra sleeping space, not a full bedroom
      floor: 3,
      sleeps: 2,
      image: "/images/room-attic.jpg",
    },
  ],

  /** Distances shown as cards on the Location page and teased on Home. */
  distances: [
    { id: "paris", minutesByCar: 35 },
    { id: "versailles", minutesByCar: 20 },
    { id: "saint-germain", minutesByCar: 20 }, // PLACEHOLDER: confirm drive time
    { id: "golf", minutesByCar: 5 },
    { id: "cdg", minutesByCar: 50 }, // PLACEHOLDER: confirm drive time
    { id: "orly", minutesByCar: 40 }, // PLACEHOLDER: confirm drive time
  ],

  images: {
    hero: "/images/hero.jpg",
    og: "/images/hero.jpg", // PLACEHOLDER: dedicated 1200×630 OG image recommended
    living: "/images/house-living.jpg",
    billiards: "/images/house-billiards.jpg",
    kitchen: "/images/house-kitchen.jpg",
    veranda: "/images/house-veranda.jpg",
    terrace: "/images/house-terrace.jpg",
    garden: "/images/house-garden.jpg",
    facade: "/images/house-facade.jpg",
    chavenay: "/images/location-chavenay.jpg",
  },
} as const;

export type Room = (typeof property.rooms)[number];
export type DistanceCard = (typeof property.distances)[number];

/** Form `source` tags sent to the GHL webhook with every lead. */
export const LEAD_SOURCES = {
  booking: "website-booking",
  contact: "website-contact",
  leadMagnet: "website-leadmagnet",
} as const;
