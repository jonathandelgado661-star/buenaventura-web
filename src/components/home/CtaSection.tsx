import Image from "next/image";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/tecpan/tecpan-06.jpg"
        alt="Amenidades de uno de los proyectos que comercializamos"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest-950/75" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            Recibe asesoría personalizada hoy mismo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream-100/80 sm:text-lg">
            Escríbenos por WhatsApp y un asesor te ayudará a comparar disponibilidad, precios y
            financiamiento en Patulul, Río Bravo y Tecpán.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.home}
              size="lg"
              trackPayload={{ placement: "home_final_cta" }}
            >
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
