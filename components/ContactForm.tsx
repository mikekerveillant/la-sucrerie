"use client";

import { useState, type FormEvent } from "react";
import { getDict, type Locale } from "@/config/i18n";
import { LEAD_SOURCES } from "@/config/property";
import { submitLead, trackEvent } from "@/lib/lead";

const inputClass =
  "w-full rounded-lg border border-molasses/20 bg-white px-4 py-2.5 text-molasses placeholder:text-molasses/40";
const labelClass = "mb-1.5 block text-sm font-medium text-molasses";

/** Contact form — posts to the GHL webhook with source "website-contact". */
export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const f = t.contact.form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const ok = await submitLead({
      source: LEAD_SOURCES.contact,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      language: String(data.get("language") ?? locale),
      page: window.location.pathname,
    });
    if (ok) {
      setStatus("sent");
      trackEvent("lead_submitted", { source: LEAD_SOURCES.contact });
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-sage/50 bg-white p-8 text-center shadow-sm" role="status">
        <p className="font-display text-2xl text-molasses">{f.successTitle}</p>
        <p className="mx-auto mt-3 max-w-md text-molasses-soft">{f.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border border-molasses/10 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
    >
      <div>
        <label htmlFor="ct-name" className={labelClass}>
          {f.name} *
        </label>
        <input id="ct-name" name="name" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="ct-email" className={labelClass}>
          {f.email} *
        </label>
        <input id="ct-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="ct-phone" className={labelClass}>
          {f.phone}
        </label>
        <input id="ct-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="ct-language" className={labelClass}>
          {f.language}
        </label>
        <select id="ct-language" name="language" defaultValue={locale} className={inputClass}>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="ct-message" className={labelClass}>
          {f.message} *
        </label>
        <textarea id="ct-message" name="message" rows={5} required className={inputClass} />
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
  );
}
