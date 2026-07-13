import { getDict, type Locale } from "@/config/i18n";
import SugarLine from "@/components/SugarLine";
import RatingBadge from "@/components/RatingBadge";
import BookingEngineEmbed from "@/components/BookingEngineEmbed";
import PriceComparison from "@/components/PriceComparison";
import { FaqJsonLd } from "@/components/JsonLd";

export default function BookPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  return (
    <>
      <FaqJsonLd locale={locale} />

      <header className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <p className="eyebrow">{t.book.eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{t.book.title}</h1>
        <p className="mt-5 text-molasses-soft">{t.book.intro}</p>
        <RatingBadge locale={locale} className="mt-6" />
        <SugarLine className="mt-10" />
      </header>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-14 sm:px-6">
        {/* Price comparison: direct vs Airbnb (placeholder values from config) */}
        <PriceComparison locale={locale} />

        {/*
          Booking widget slot. Renders the channel-manager engine when
          bookingEngine.embedUrl is set in config/property.ts; until then, the
          styled inquiry fallback form (posts to the GHL webhook).
          Availability is synced by the channel manager — never stored here.
        */}
        <BookingEngineEmbed locale={locale} />

        <p className="text-center text-xs text-molasses-soft/80">{t.book.channelNote}</p>
      </div>

      {/* FAQ (mirrors the FAQPage JSON-LD above) */}
      <section className="bg-sugar-deep">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl">{t.book.faqTitle}</h2>
          <div className="mt-10 space-y-4">
            {t.book.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-molasses/10 bg-white p-5 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-molasses marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span aria-hidden="true" className="text-caramel transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-molasses-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
