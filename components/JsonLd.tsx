import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";

/** Renders a schema.org JSON-LD block. */
function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** LodgingBusiness with aggregateRating + Room entries — rendered site-wide. */
export function LodgingJsonLd({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: t.home.metaDescription,
    url: property.siteUrl,
    image: `${property.siteUrl}${property.images.hero}`,
    telephone: property.contact.phone,
    email: property.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address.street,
      addressLocality: property.address.town,
      postalCode: property.address.postalCode,
      addressRegion: property.address.region,
      addressCountry: property.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.coordinates.lat,
      longitude: property.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: property.rating.score,
      reviewCount: property.rating.reviewCount,
      bestRating: 5,
    },
    checkinTime: property.houseRules.checkInStart,
    checkoutTime: property.houseRules.checkOut,
    petsAllowed: property.houseRules.pets,
    numberOfRooms: property.capacity.bedrooms,
    containsPlace: property.rooms.map((room) => ({
      "@type": "Room",
      name: room.name,
      description: t.rooms.detail[room.id]?.beds,
      occupancy: { "@type": "QuantitativeValue", maxValue: room.sleeps },
    })),
  };
  return <JsonLdScript data={data} />;
}

/** FAQPage schema — Book page only. */
export function FaqJsonLd({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.book.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <JsonLdScript data={data} />;
}
