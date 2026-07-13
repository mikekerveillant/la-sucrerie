"use client";

/**
 * Lead submission to GoHighLevel (GHL).
 *
 * All site forms post JSON to a single GHL inbound webhook, tagged with a
 * `source` field (website-booking / website-contact / website-leadmagnet)
 * so leads can be routed and scored inside GHL.
 *
 * PLACEHOLDER: set NEXT_PUBLIC_GHL_WEBHOOK_URL in .env.local / Vercel.
 */
export type LeadPayload = {
  source: string;
  name?: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message?: string;
  language: string;
  page?: string;
};

export async function submitLead(payload: LeadPayload): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
  if (!url) {
    // No webhook configured yet: log so the form still "works" in dev/preview.
    console.warn("[La Sucrerie] NEXT_PUBLIC_GHL_WEBHOOK_URL is not set — lead not sent:", payload);
    return true;
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/** Fires an analytics event (GTM dataLayer + DOM CustomEvent). */
export function trackEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...data });
  window.dispatchEvent(new CustomEvent(event, { detail: data }));
}
