import Image from "next/image";
import Link from "next/link";
import { property } from "@/config/property";
import { getDict, localePath, type Locale } from "@/config/i18n";
import SugarLine from "@/components/SugarLine";
import FadeIn from "@/components/FadeIn";
import { floorLabel } from "@/components/RoomCard";

export default function RoomsPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  return (
    <>
      <header className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <p className="eyebrow">{t.rooms.eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{t.rooms.title}</h1>
        <p className="mt-5 text-molasses-soft">{t.rooms.intro}</p>
        <p className="mt-4 text-sm font-medium text-molasses">
          {property.capacity.guestsMin}–{property.capacity.guestsMax} {t.common.guests} ·{" "}
          {property.capacity.bedrooms} {t.common.bedrooms} · {property.capacity.beds}{" "}
          {t.common.beds} · {property.capacity.privateBaths} {t.common.baths}
        </p>
        <SugarLine className="mt-10" />
      </header>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-20">
        {property.rooms.map((room, index) => {
          const detail = t.rooms.detail[room.id];
          const reversed = index % 2 === 1;
          return (
            <FadeIn
              as="section"
              key={room.id}
              className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2"
            >
              {/* Anchor target for links from the home page cards */}
              <div id={room.id} className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${reversed ? "lg:order-2" : ""}`}>
                <Image
                  src={room.image}
                  alt={`${room.name} — ${detail?.beds ?? ""}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={reversed ? "lg:order-1" : ""}>
                <p className="eyebrow">
                  {floorLabel(locale, room.floor)} · {t.common.sleeps(room.sleeps)}
                </p>
                <h2 className="mt-2 text-3xl">{room.name}</h2>
                <p className="mt-4 text-molasses-soft">{detail?.blurb}</p>
                <dl className="mt-6 rounded-xl border border-molasses/10 bg-white p-5">
                  <dt className="eyebrow">{t.rooms.bedsLabel}</dt>
                  <dd className="mt-1.5 text-sm text-molasses">{detail?.beds}</dd>
                </dl>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <section className="bg-molasses">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl text-sugar">{t.rooms.ctaTitle}</h2>
          <p className="mt-4 text-sugar/80">{t.rooms.ctaBody}</p>
          <Link
            href={localePath(locale, "/book")}
            className="mt-8 inline-block rounded-full bg-caramel px-8 py-3.5 font-semibold text-sugar hover:bg-caramel-deep"
          >
            {t.common.bookDirectSave}
          </Link>
        </div>
      </section>
    </>
  );
}
