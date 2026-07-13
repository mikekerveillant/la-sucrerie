import type { Metadata } from "next";
import "../globals.css";
import { fontClasses } from "@/lib/fonts";
import { property } from "@/config/property";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL(property.siteUrl),
  title: `${property.name} — Guest house in Chavenay, near Paris & Versailles`,
};

/** Root layout for the English site (served at /en). */
export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontClasses} h-full`}>
      <body className="flex min-h-full flex-col pb-[72px] sm:pb-0">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
