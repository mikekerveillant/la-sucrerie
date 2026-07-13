import type { Metadata } from "next";
import { property } from "@/config/property";
import { localePath, type Locale } from "@/config/i18n";

/**
 * Builds per-page metadata with canonical + hreflang alternates for both
 * locales, plus OpenGraph/Twitter tags.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string
): Metadata {
  const canonical = localePath(locale, path);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: localePath("fr", path),
        en: localePath("en", path),
        "x-default": localePath("fr", path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: property.name,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [{ url: property.images.og, width: 1600, height: 1000, alt: property.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [property.images.og],
    },
  };
}
