import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto | Habla con un asesor",
  description:
    "Contáctanos por WhatsApp y recibe asesoría personalizada sobre los proyectos de terrenos disponibles en Patulul, Río Bravo y Tecpán.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Contacto
            </span>
            <h1 className="font-display text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl lg:text-5xl">
              Hablemos sobre tu próximo terreno
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-700 sm:text-lg">
              Somos asesores especializados en los proyectos que comercializamos en Patulul, Río
              Bravo y Tecpán. Escríbenos por WhatsApp y con gusto te ayudamos a comparar opciones,
              precios y financiamiento disponible.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.general}
                size="lg"
                trackPayload={{ placement: "contact_page" }}
              >
                Escribir por WhatsApp
              </WhatsAppButton>
              <span className="text-sm font-medium text-stone-600">{WHATSAPP_DISPLAY}</span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { title: "Respuesta rápida", desc: "Te atendemos directamente por WhatsApp." },
                { title: "Asesoría clara", desc: "Comparamos opciones según tu presupuesto." },
                { title: "Sin compromiso", desc: "Resolvemos tus dudas antes de decidir." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-cream-100/70 p-4">
                  <p className="font-display text-sm font-semibold text-forest-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/bella-vista/bellavista-07.jpg"
              alt="Paisaje de uno de los proyectos que comercializamos"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
