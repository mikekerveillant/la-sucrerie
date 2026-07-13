import type { Metadata } from "next";
import ReviewsPage from "@/components/pages/ReviewsPage";
import { getDict } from "@/config/i18n";
import { pageMetadata } from "@/lib/meta";

const locale = "en" as const;
const t = getDict(locale);

export const metadata: Metadata = pageMetadata(
  locale,
  "/reviews",
  t.reviews.metaTitle,
  t.reviews.metaDescription
);

export default function Page() {
  return <ReviewsPage locale={locale} />;
}
