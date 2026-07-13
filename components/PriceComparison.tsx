import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";
import { formatPrice } from "@/lib/format";

/**
 * "Direct: from €X/night · On Airbnb: from €Y/night".
 * Values come from config/property.ts and are PLACEHOLDERS until real
 * seasonal rates are set.
 */
export default function PriceComparison({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const { directFromPerNight, airbnbFromPerNight, currency, directDiscountPercent } =
    property.pricing;

  return (
    <div className="rounded-2xl border border-caramel/25 bg-sugar-deep p-6 sm:p-8">
      <p className="eyebrow">{t.book.priceCompareTitle}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-5 ring-2 ring-caramel">
          <p className="text-sm font-semibold text-caramel-deep">
            {t.book.priceDirect} · −{directDiscountPercent}%
          </p>
          <p className="mt-1 font-display text-3xl text-molasses">
            {t.book.priceFrom(formatPrice(locale, directFromPerNight, currency))}
          </p>
        </div>
        <div className="rounded-xl bg-white/60 p-5">
          <p className="text-sm font-medium text-molasses-soft">{t.book.priceAirbnb}</p>
          <p className="mt-1 font-display text-3xl text-molasses-soft line-through decoration-copper/60">
            {t.book.priceFrom(formatPrice(locale, airbnbFromPerNight, currency))}
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs text-molasses-soft/80">{t.book.pricePlaceholderNote}</p>
    </div>
  );
}
