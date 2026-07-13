import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getDict } from "@/config/i18n";
import { pageMetadata } from "@/lib/meta";

const locale = "en" as const;
const t = getDict(locale);

export const metadata: Metadata = pageMetadata(
  locale,
  "/",
  t.home.metaTitle,
  t.home.metaDescription
);

export default function Page() {
  return <HomePage locale={locale} />;
}
