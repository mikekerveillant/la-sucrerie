import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";
import SugarLine from "@/components/SugarLine";
import FadeIn from "@/components/FadeIn";
import RatingBadge from "@/components/RatingBadge";
import CategoryBars from "@/components/CategoryBars";

export default function ReviewsPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  return (
    <>
      <header className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <p className="eyebrow">{t.reviews.eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{t.reviews.title}</h1>
        <p className="mt-5 text-molasses-soft">{t.reviews.intro}</p>
        <RatingBadge locale={locale} className="mt-6" />
        <SugarLine className="mt-10" />
      </header>

      {/* Category rating bars */}
      <FadeIn as="section" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl">{t.reviews.categoriesTitle}</h2>
        <div className="mt-10 rounded-2xl border border-molasses/10 bg-white p-6 sm:p-10">
          <CategoryBars locale={locale} />
        </div>
      </FadeIn>

      {/* Testimonials — PLACEHOLDER quotes, replace with real guest reviews */}
      <FadeIn as="section" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-center text-3xl">{t.reviews.testimonialsTitle}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.reviews.testimonials.map((item) => (
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
      </FadeIn>

      {/* Third-party proof: link to the Airbnb listing */}
      <section className="bg-sugar-deep">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl">{t.reviews.airbnbProofTitle}</h2>
          <p className="mt-4 text-molasses-soft">{t.reviews.airbnbProofBody}</p>
          <a
            href={property.airbnbListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full border-2 border-caramel px-7 py-3 font-semibold text-caramel-deep hover:bg-caramel hover:text-sugar"
          >
            {t.reviews.airbnbProofCta} ↗
          </a>
          <p className="mt-4 text-xs text-molasses-soft/70">
            {property.rating.reviewCount} {t.common.reviewsOnAirbnb}
          </p>
        </div>
      </section>
    </>
  );
}
