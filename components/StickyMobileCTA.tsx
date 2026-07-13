"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDict, localePath, type Locale } from "@/config/i18n";

/**
 * Mobile-only sticky footer bar: "Book direct — save 10%" -> /book.
 * Hidden on the Book page itself (the widget is already there).
 */
export default function StickyMobileCTA({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const pathname = usePathname() ?? "/";
  const bookPath = localePath(locale, "/book");
  if (pathname === bookPath) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-molasses/10 bg-sugar/95 p-3 backdrop-blur sm:hidden">
      <Link
        href={bookPath}
        className="flex items-center justify-between rounded-full bg-caramel px-5 py-3 text-sm font-semibold text-sugar"
      >
        <span>{t.stickyBar.text}</span>
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
