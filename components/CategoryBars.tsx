import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";
import { formatScore } from "@/lib/format";

/** Airbnb category rating bars (cleanliness 4.9, check-in 4.9, …). */
export default function CategoryBars({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const categories = property.rating.categories;

  return (
    <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
      {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => {
        const score = categories[key];
        const pct = (score / 5) * 100;
        return (
          <div key={key}>
            <div className="flex items-baseline justify-between">
              <dt className="text-sm font-medium text-molasses">{t.reviews.categories[key]}</dt>
              <dd className="text-sm font-semibold text-molasses">
                {formatScore(locale, score, 1)}
              </dd>
            </div>
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-molasses/10"
              role="img"
              aria-label={`${t.reviews.categories[key]}: ${score} / 5`}
            >
              <div className="h-full rounded-full bg-caramel" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </dl>
  );
}
