import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";
import { formatScore } from "@/lib/format";

/** "★ 4,82 · 364 avis · 16 ans d'accueil" — the site's trust badge. */
export default function RatingBadge({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const t = getDict(locale);
  const { score, reviewCount, yearsHosting } = property.rating;
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-sugar px-4 py-1.5 text-sm font-medium text-molasses-soft ${className}`}
    >
      {t.common.ratingLine(formatScore(locale, score), reviewCount, yearsHosting)}
    </p>
  );
}
