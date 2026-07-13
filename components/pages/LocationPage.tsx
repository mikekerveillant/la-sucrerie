import Image from "next/image";
import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";
import SugarLine from "@/components/SugarLine";
import FadeIn from "@/components/FadeIn";

export default function LocationPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const { lat, lng } = property.coordinates;
  // OpenStreetMap embed — no Google Maps API key needed for v1.
  const bbox = `${lng - 0.045},${lat - 0.028},${lng + 0.045},${lat + 0.028}`;
  const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
    bbox
  )}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <>
      <header className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <p className="eyebrow !text-sage-deep">{t.location.eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{t.location.title}</h1>
        <p className="mt-5 text-molasses-soft">{t.location.intro}</p>
        <SugarLine tone="sage" className="mt-10" />
      </header>

      {/* Chavenay photo */}
      <FadeIn as="section" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
          <Image
            src={property.images.chavenay}
            alt={t.location.chavenayImageAlt}
            fill
            sizes="(min-width: 1152px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </FadeIn>

      {/* Distance cards */}
      <FadeIn as="section" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-center text-3xl">{t.location.distancesTitle}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {property.distances.map((d) => {
            const copy = t.location.distances[d.id];
            return (
              <div key={d.id} className="rounded-2xl border border-molasses/10 bg-white p-6">
                <p className="eyebrow !text-sage-deep">{t.location.minutes(d.minutesByCar)}</p>
                <h3 className="mt-2 font-display text-xl text-molasses">{copy?.title}</h3>
                <p className="mt-2 text-sm text-molasses-soft">{copy?.body}</p>
              </div>
            );
          })}
        </div>
      </FadeIn>

      {/* Map */}
      <section className="bg-sugar-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl">{t.location.mapTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-molasses-soft">
            {t.location.mapBody}
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-molasses/10">
            <iframe
              src={osmSrc}
              title={t.location.mapIframeTitle}
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
