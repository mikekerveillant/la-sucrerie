import type { ReactNode } from "react";
import { getDict, type Locale } from "@/config/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import { LodgingJsonLd } from "@/components/JsonLd";

/** Shared chrome for both locales: header, footer, mobile CTA, lead popup. */
export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const t = getDict(locale);
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-caramel focus:px-4 focus:py-2 focus:text-sugar"
      >
        {t.common.skipToContent}
      </a>
      <LodgingJsonLd locale={locale} />
      <Header locale={locale} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <StickyMobileCTA locale={locale} />
      <LeadMagnetPopup locale={locale} />
    </>
  );
}
