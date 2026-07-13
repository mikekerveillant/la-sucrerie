import type { Metadata } from "next";
import "../globals.css";
import { fontClasses } from "@/lib/fonts";
import { property } from "@/config/property";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL(property.siteUrl),
  title: property.legalName,
};

/** Root layout for the French site (default locale, served at /). */
export default function FrenchRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fontClasses} h-full`}>
      <body className="flex min-h-full flex-col pb-[72px] sm:pb-0">
        <SiteShell locale="fr">{children}</SiteShell>
      </body>
    </html>
  );
}
