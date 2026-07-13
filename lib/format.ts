import type { Locale } from "@/config/i18n";

/** "495 €" (fr) / "€495" (en) — whole euros, no decimals. */
export function formatPrice(locale: Locale, amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** 4.82 -> "4,82" (fr) / "4.82" (en) */
export function formatScore(locale: Locale, score: number, digits = 2): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(score);
}
