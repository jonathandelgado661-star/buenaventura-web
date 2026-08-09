import Image from "next/image";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Advisory() {
  return (
    <section className="bg-cream-100/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl shadow-xl lg:order-1">
          <Image
            src="/images/rio-bravo/riobravo-08.jpg"
            alt="Familia recorriendo un proyecto de terrenos"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Asesoría personalizada
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
            Te acompañamos durante todo el proceso
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-700 sm:text-lg">
            Comprar un terreno implica comparar ubicación, presupuesto, medidas y financiamiento.
            Nuestro equipo de asesores puede ayudarte a conocer las opciones disponibles y resolver
            tus dudas antes de tomar una decisión.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.general}
              size="lg"
              trackPayload={{ placement: "advisory_section" }}
            >
              Hablar con un asesor
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
