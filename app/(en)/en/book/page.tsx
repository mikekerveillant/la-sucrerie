import type { Metadata } from "next";
import BookPage from "@/components/pages/BookPage";
import { getDict } from "@/config/i18n";
import { pageMetadata } from "@/lib/meta";

const locale = "en" as const;
const t = getDict(locale);

export const metadata: Metadata = pageMetadata(
  locale,
  "/book",
  t.book.metaTitle,
  t.book.metaDescription
);

export default function Page() {
  return <BookPage locale={locale} />;
}
