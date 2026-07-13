import type { MetadataRoute } from "next";
import { property } from "@/config/property";
import { locales, localePath } from "@/config/i18n";

const paths = ["/", "/rooms", "/house", "/location", "/reviews", "/book", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${property.siteUrl}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/book" ? 0.9 : 0.7,
      alternates: {
        languages: {
          fr: `${property.siteUrl}${localePath("fr", path)}`,
          en: `${property.siteUrl}${localePath("en", path)}`,
        },
      },
    }))
  );
}
