import type { Metadata } from "next";
import HousePage from "@/components/pages/HousePage";
import { getDict } from "@/config/i18n";
import { pageMetadata } from "@/lib/meta";

const locale = "en" as const;
const t = getDict(locale);

export const metadata: Metadata = pageMetadata(
  locale,
  "/house",
  t.house.metaTitle,
  t.house.metaDescription
);

export default function Page() {
  return <HousePage locale={locale} />;
}
