import type { Metadata } from "next";
import RoomsPage from "@/components/pages/RoomsPage";
import { getDict } from "@/config/i18n";
import { pageMetadata } from "@/lib/meta";

const locale = "fr" as const;
const t = getDict(locale);

export const metadata: Metadata = pageMetadata(
  locale,
  "/rooms",
  t.rooms.metaTitle,
  t.rooms.metaDescription
);

export default function Page() {
  return <RoomsPage locale={locale} />;
}
