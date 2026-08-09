"use client";

import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

/**
 * Discreet bottom bar shown only on mobile, always available without
 * covering content (content has bottom padding to compensate — see layout).
 */
export default function MobileWhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-forest-900/10 bg-cream-50/95 px-4 py-3 backdrop-blur-md md:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGES.home)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { placement: "mobile_bar" })}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 py-3 text-sm font-semibold text-cream-50 shadow-lg shadow-forest-900/20 active:scale-[0.98] transition-transform"
      >
        <svg viewBox="0 0 32 32" className="h-4 w-4 fill-[#25D366]" aria-hidden="true">
          <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.457.664 4.86 1.925 6.965L2.667 29.333l6.53-1.892A13.28 13.28 0 0 0 16 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667Z" />
        </svg>
        Consultar por WhatsApp
      </a>
    </div>
  );
}
