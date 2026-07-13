import Image from "next/image";
import Link from "next/link";
import { property } from "@/config/property";
import { getDict, localePath, type Locale } from "@/config/i18n";
import { formatPrice } from "@/lib/format";
import SugarLine from "@/components/SugarLine";
import FadeIn from "@/components/FadeIn";
import RatingBadge from "@/components/RatingBadge";
import RoomCard from "@/components/RoomCard";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = (path: string) => localePath(locale, path);
  const spaceImages = property.images as Record<string, string>;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[72vh] min-h-[480px] w-full">
          <Image
            src={property.images.hero}
            alt={t.home.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-molasses/70 via-molasses/25 to-molasses/10" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
            <p className="eyebrow !text-sugar/90">{t.common.eyebrowBrand}</p>
            <h1 className="mt-3 max-w-2xl text-4xl text-sugar sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-base text-sugar/90 sm:text-lg">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={p("/book")}
                className="rounded-full bg-caramel px-7 py-3 font-semibold text-sugar transition-colors hover:bg-caramel-deep"
              >
                {t.home.heroCta}
              </Link>
              <Link
                href={p("/house")}
                className="rounded-full border border-sugar/60 px-7 py-3 font-semibold text-sugar transition-colors hover:bg-sugar/10"
              >
                {t.home.heroSecondaryCta}
              </Link>
            </div>
            <RatingBadge locale={locale} className="mt-6" />
          </div>
        </div>
      </section>

      {/* ── Direct-booking value proposition ─────────────────────────────── */}
      <FadeIn as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.home.valueEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.home.valueTitle}</h2>
          <p className="mt-4 text-molasses-soft">{t.home.valueBody}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.home.valuePoints.map((point) => (
            <div key={point.title} className="rounded-2xl border border-molasses/10 bg-white p-6">
              <h3 className="font-display text-xl text-caramel-deep">{point.title}</h3>
              <p className="mt-2 text-sm text-molasses-soft">{point.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-molasses-soft">
          {t.book.priceDirect}:{" "}
          <strong className="text-molasses">
            {t.common.fromPerNight(formatPrice(locale, property.pricing.directFromPerNight))}
          </strong>{" "}
          · {t.book.priceAirbnb}:{" "}
          <span className="line-through decoration-copper/60">
            {t.common.fromPerNight(formatPrice(locale, property.pricing.airbnbFromPerNight))}
          </span>
        </p>
      </FadeIn>

      <SugarLine className="mx-auto max-w-4xl px-4" />

      {/* ── Shared spaces (the house) ────────────────────────────────────── */}
      <FadeIn as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.home.spacesEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.home.spacesTitle}</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.home.spaces.map((space) => (
            <div
              key={space.title}
              className="overflow-hidden rounded-2xl border border-molasses/10 bg-white"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={spaceImages[space.image] ?? property.images.living}
                  alt={space.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-molasses">{space.title}</h3>
                <p className="mt-2 text-sm text-molasses-soft">{space.body}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <SugarLine className="mx-auto max-w-4xl px-4" />

      {/* ── Rooms overview ───────────────────────────────────────────────── */}
      <FadeIn as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.home.roomsEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.home.roomsTitle}</h2>
          <p className="mt-4 text-molasses-soft">{t.home.roomsBody}</p>
          <p className="mt-4 text-sm font-medium text-molasses">
            {property.capacity.guestsMin}–{property.capacity.guestsMax} {t.common.guests} ·{" "}
            {property.capacity.bedrooms} {t.common.bedrooms} · {property.capacity.beds}{" "}
            {t.common.beds} · {property.capacity.privateBaths} {t.common.baths}
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {property.rooms.map((room) => (
            <RoomCard key={room.id} room={room} locale={locale} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={p("/rooms")}
            className="font-semibold text-caramel-deep underline underline-offset-4 hover:text-caramel"
          >
            {t.common.seeAllRooms}
          </Link>
        </div>
      </FadeIn>

      {/* ── Location teaser (sage accent: outdoors) ──────────────────────── */}
      <section className="bg-sugar-deep">
        <FadeIn className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-sage-deep">{t.home.locationEyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{t.home.locationTitle}</h2>
            <p className="mt-4 text-molasses-soft">{t.home.locationBody}</p>
            <ul className="mt-6 space-y-2 text-sm text-molasses">
              {property.distances.slice(0, 3).map((d) => (
                <li key={d.id} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-sage" />
                  <span>
                    <strong>{t.location.distances[d.id]?.title}</strong> —{" "}
                    {t.location.minutes(d.minutesByCar)}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={p("/location")}
              className="mt-6 inline-block font-semibold text-sage-deep underline underline-offset-4"
            >
              {t.home.locationCta}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={property.images.chavenay}
              alt={t.location.chavenayImageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* ── Testimonial strip ────────────────────────────────────────────── */}
      <FadeIn as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.home.testimonialsEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.home.testimonialsTitle}</h2>
          <RatingBadge locale={locale} className="mt-5" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.reviews.testimonials.slice(0, 3).map((item) => (
            <figure key={item.name} className="rounded-2xl border border-molasses/10 bg-white p-6">
              <blockquote className="font-display text-lg leading-relaxed text-molasses">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-molasses-soft">
                <strong className="text-molasses">{item.name}</strong> · {item.detail}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={p("/reviews")}
            className="font-semibold text-caramel-deep underline underline-offset-4 hover:text-caramel"
          >
            {t.home.testimonialsCta}
          </Link>
        </div>
      </FadeIn>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="bg-molasses">
        <FadeIn className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-3xl text-sugar sm:text-4xl">{t.home.finalCtaTitle}</h2>
          <p className="mt-4 text-sugar/80">{t.home.finalCtaBody}</p>
          <Link
            href={p("/book")}
            className="mt-8 inline-block rounded-full bg-caramel px-8 py-3.5 font-semibold text-sugar transition-colors hover:bg-caramel-deep"
          >
            {t.home.finalCtaButton}
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
