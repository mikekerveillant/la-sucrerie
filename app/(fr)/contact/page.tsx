import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { getDict } from "@/config/i18n";
import { pageMetadata } from "@/lib/meta";

const locale = "fr" as const;
const t = getDict(locale);

export const metadata: Metadata = pageMetadata(
  locale,
  "/contact",
  t.contact.metaTitle,
  t.contact.metaDescription
);

export default function Page() {
  return <ContactPage locale={locale} />;
}
