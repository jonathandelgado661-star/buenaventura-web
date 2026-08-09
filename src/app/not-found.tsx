import Link from "next/link";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 text-center">
      <span className="font-display text-7xl font-semibold text-forest-900/20">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
        No encontramos esta página
      </h1>
      <p className="mt-3 max-w-md text-sm text-stone-600 sm:text-base">
        Puede que el enlace haya cambiado. Explora nuestros proyectos disponibles o escríbenos por
        WhatsApp y te ayudamos directamente.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/proyectos"
          className="inline-flex items-center justify-center rounded-full border border-forest-800/20 px-6 py-3 text-sm font-semibold text-forest-900 hover:bg-forest-900 hover:text-cream-50"
        >
          Ver proyectos
        </Link>
        <WhatsAppButton message={WHATSAPP_MESSAGES.general} trackPayload={{ placement: "404" }}>
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
