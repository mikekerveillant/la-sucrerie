"use client";

import { useState, type FormEvent } from "react";
import { getDict, type Locale } from "@/config/i18n";
import { LEAD_SOURCES, property } from "@/config/property";
import { submitLead, trackEvent } from "@/lib/lead";

const inputClass =
  "w-full rounded-lg border border-molasses/20 bg-white px-4 py-2.5 text-molasses placeholder:text-molasses/40";
const labelClass = "mb-1.5 block text-sm font-medium text-molasses";

/**
 * Booking inquiry fallback form (shown while no booking-engine embed URL is
 * configured). Posts to the GHL webhook with source "website-booking" and
 * fires a `lead_submitted` event on success.
 */
export default function InquiryForm({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const f = t.book.form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const ok = await submitLead({
      source: LEAD_SOURCES.booking,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      checkIn: String(data.get("checkIn") ?? ""),
      checkOut: String(data.get("checkOut") ?? ""),
      guests: String(data.get("guests") ?? ""),
      message: String(data.get("message") ?? ""),
      language: String(data.get("language") ?? locale),
      page: window.location.pathname,
    });
    if (ok) {
      setStatus("sent");
      trackEvent("lead_submitted", { source: LEAD_SOURCES.booking });
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl border border-sage/50 bg-white p-8 text-center shadow-sm"
        role="status"
      >
        <p className="font-display text-2xl text-molasses">{f.successTitle}</p>
        <p className="mx-auto mt-3 max-w-md text-molasses-soft">{f.successBody}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-molasses/10 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="font-display text-2xl text-molasses">{t.book.widgetFallbackTitle}</h3>
      <p className="mt-2 text-sm text-molasses-soft">{t.book.widgetFallbackIntro}</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="inq-name" className={labelClass}>
            {f.name} *
          </label>
          <input id="inq-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>
            {f.email} *
          </label>
          <input id="inq-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-phone" className={labelClass}>
            {f.phone}
          </label>
          <input id="inq-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-checkin" className={labelClass}>
            {f.checkIn} *
          </label>
          <input id="inq-checkin" name="checkIn" type="date" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-checkout" className={labelClass}>
            {f.checkOut} *
          </label>
          <input id="inq-checkout" name="checkOut" type="date" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="inq-guests" className={labelClass}>
            {f.guests} *
          </label>
          <select id="inq-guests" name="guests" required className={inputClass} defaultValue="10">
            {Array.from({ length: property.capacity.guestsMax }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="inq-language" className={labelClass}>
            {f.language}
          </label>
          <select id="inq-language" name="language" defaultValue={locale} className={inputClass}>
            <option value="fr">{f.languageOptions.fr}</option>
            <option value="en">{f.languageOptions.en}</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inq-message" className={labelClass}>
            {f.message}
          </label>
          <textarea id="inq-message" name="message" rows={4} className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-caramel px-6 py-3 font-semibold text-sugar hover:bg-caramel-deep disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? f.submitting : f.submit}
          </button>
          {status === "error" && <p className="mt-3 text-sm text-red-700">{f.errorBody}</p>}
        </div>
      </form>
    </div>
  );
}
