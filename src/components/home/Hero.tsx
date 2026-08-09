import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] w-full items-end overflow-hidden bg-forest-950 sm:min-h-[90vh]">
      <Image
        src="/images/buenaventura-patulul/patulul-08.jpg"
        alt="Vista aérea de urbanización de terrenos Buenaventura"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-forest-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <span className="mb-5 inline-block rounded-full border border-gold-300/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm">
          Patulul · Río Bravo · Tecpán
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl">
          Tu próximo terreno puede empezar aquí.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
          Descubre proyectos inmobiliarios en Patulul, Río Bravo y Tecpán con opciones de
          financiamiento y asesoría personalizada durante todo el proceso.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center rounded-full bg-cream-50 px-8 py-4 text-base font-semibold text-forest-950 shadow-lg transition-all hover:bg-white active:scale-[0.97]"
          >
            Ver proyectos
          </Link>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.home}
            variant="primary"
            size="lg"
            trackPayload={{ placement: "hero" }}
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>

        <p className="mt-6 text-xs text-cream-100/60 sm:text-sm">
          Te ayudamos a comparar ubicaciones, precios y opciones de financiamiento.
        </p>
      </div>
    </section>
  );
}
