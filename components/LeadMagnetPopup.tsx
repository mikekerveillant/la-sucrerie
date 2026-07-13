"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { getDict, type Locale } from "@/config/i18n";
import { LEAD_SOURCES } from "@/config/property";
import { submitLead, trackEvent } from "@/lib/lead";

const STORAGE_KEY = "lasucrerie-leadmagnet-seen";

/**
 * Email capture: "Get our direct-booking rate card".
 * Desktop: shows on exit intent (mouse leaves viewport towards the top).
 * Mobile: shows once the visitor has scrolled ~55% of the page.
 * Shown at most once per browser session.
 */
export default function LeadMagnetPopup({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [email, setEmail] = useState("");
  const shown = useRef(false);

  const trigger = useCallback(() => {
    if (shown.current) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable — still show once per mount */
    }
    shown.current = true;
    setOpen(true);
  }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 640px) and (hover: hover)").matches;

    if (isDesktop) {
      const onMouseOut = (e: MouseEvent) => {
        if (e.relatedTarget === null && e.clientY <= 0) trigger();
      };
      document.addEventListener("mouseout", onMouseOut);
      return () => document.removeEventListener("mouseout", onMouseOut);
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.55) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [trigger]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const ok = await submitLead({
      source: LEAD_SOURCES.leadMagnet,
      email,
      language: locale,
      page: window.location.pathname,
    });
    if (ok) {
      setStatus("sent");
      trackEvent("lead_submitted", { source: LEAD_SOURCES.leadMagnet });
    } else {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-molasses/50 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="leadmagnet-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-md rounded-2xl bg-sugar p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="leadmagnet-title" className="font-display text-2xl text-molasses">
            {t.leadMagnet.title}
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.leadMagnet.close}
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-molasses-soft hover:bg-sugar-deep"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {status === "sent" ? (
          <p className="mt-4 text-molasses-soft">{t.leadMagnet.success}</p>
        ) : (
          <>
            <p className="mt-3 text-sm text-molasses-soft">{t.leadMagnet.body}</p>
            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3">
              <label className="text-sm font-medium text-molasses" htmlFor="leadmagnet-email">
                {t.leadMagnet.emailLabel}
              </label>
              <input
                id="leadmagnet-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-molasses/20 bg-white px-4 py-2.5 text-molasses"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-caramel px-5 py-2.5 text-sm font-semibold text-sugar hover:bg-caramel-deep disabled:opacity-60"
              >
                {status === "sending" ? t.leadMagnet.submitting : t.leadMagnet.submit}
              </button>
              {status === "error" && <p className="text-sm text-red-700">{t.leadMagnet.error}</p>}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-molasses-soft underline underline-offset-4"
              >
                {t.leadMagnet.dismiss}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
