import type { Metadata } from "next";
import LocationPage from "@/components/pages/LocationPage";
import { getDict } from "@/config/i18n";
import { pageMetadata } from "@/lib/meta";

const locale = "en" as const;
const t = getDict(locale);

export const metadata: Metadata = pageMetadata(
  locale,
  "/location",
  t.location.metaTitle,
  t.location.metaDescription
);

export default function Page() {
  return <LocationPage locale={locale} />;
}
