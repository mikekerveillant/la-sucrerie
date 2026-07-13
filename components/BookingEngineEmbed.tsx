import { property } from "@/config/property";
import type { Locale } from "@/config/i18n";
import InquiryForm from "@/components/InquiryForm";

/**
 * Booking widget slot.
 *
 * IMPORTANT — availability & payments are handled by the channel manager
 * (Smoobu / Lodgify / Beds24). Its calendar stays in sync with Airbnb; this
 * site never stores availability or takes payment itself.
 *
 * When `bookingEngine.embedUrl` is set in config/property.ts, the engine is
 * embedded in an iframe. Until then, a styled date-range + guest inquiry
 * form is rendered as the fallback (posts to the GHL webhook).
 */
export default function BookingEngineEmbed({ locale }: { locale: Locale }) {
  const { embedUrl } = property.bookingEngine;

  if (embedUrl) {
    return (
      <div className="overflow-hidden rounded-2xl border border-molasses/10 bg-white shadow-sm">
        <iframe
          src={embedUrl}
          title="Booking engine"
          className="h-[720px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback until the channel-manager embed URL is configured.
  return <InquiryForm locale={locale} />;
}
