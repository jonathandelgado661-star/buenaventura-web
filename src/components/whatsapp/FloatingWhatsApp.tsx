"use client";

import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

/**
 * Floating WhatsApp button, visible on every page (desktop + mobile).
 * Sits above the mobile sticky bar (see MobileWhatsAppBar) with enough
 * offset that they never overlap.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MESSAGES.home)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { placement: "floating_button" })}
      aria-label="Consultar por WhatsApp"
      className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-105 active:scale-95 md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.457.664 4.86 1.925 6.965L2.667 29.333l6.53-1.892A13.28 13.28 0 0 0 16 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667Zm0 24.166a10.79 10.79 0 0 1-5.505-1.507l-.395-.234-3.876 1.123 1.147-3.78-.257-.39A10.8 10.8 0 1 1 26.833 16 10.83 10.83 0 0 1 16 26.833Zm5.925-8.09c-.324-.163-1.917-.946-2.214-1.054-.297-.108-.513-.163-.729.163-.216.325-.837 1.054-1.026 1.271-.189.216-.378.244-.702.081-.324-.163-1.367-.504-2.605-1.607-.963-.858-1.613-1.918-1.802-2.243-.189-.325-.02-.5.143-.663.146-.146.324-.379.486-.568.163-.19.216-.325.324-.542.108-.216.054-.406-.027-.568-.081-.163-.729-1.756-.999-2.406-.263-.632-.53-.546-.729-.556l-.621-.011c-.216 0-.568.081-.865.406-.297.325-1.134 1.108-1.134 2.702s1.161 3.133 1.323 3.35c.163.216 2.285 3.49 5.537 4.894.774.334 1.377.534 1.848.683.776.247 1.482.212 2.041.129.623-.093 1.917-.784 2.187-1.541.27-.758.27-1.407.189-1.542-.081-.135-.297-.216-.622-.379Z" />
      </svg>
    </a>
  );
}
