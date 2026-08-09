import type { Metadata } from "next";
import Link from "next/link";
import { getLocationBySlug } from "@/data/locations";
import { getProjectBySlug } from "@/data/projects";
import LocationHero from "@/components/location/LocationHero";
import ProjectShowcase from "@/components/location/ProjectShowcase";
import AmenitiesServices from "@/components/project/AmenitiesServices";
import LocationBlock from "@/components/project/LocationBlock";
import Faq from "@/components/shared/Faq";
import { generalFaqs } from "@/data/faqs";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";
import ViewTracker from "@/components/shared/ViewTracker";

export const metadata: Metadata = {
  title: "Terrenos en Río Bravo | Financiamiento disponible",
  description:
    "Conoce Buenaventura Río Bravo: terrenos completamente planos, amenidades y financiamiento propio de 2 a 8 años.",
  alternates: { canonical: "/rio-bravo" },
};

export default function RioBravoPage() {
  const location = getLocationBySlug("rio-bravo")!;
  const project = getProjectBySlug("rio-bravo")!;

  return (
    <>
      <ViewTracker event="location_view" payload={{ location: "rio-bravo" }} />
      <LocationHero location={location} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <ProjectShowcase project={project} />
      </section>

      <AmenitiesServices project={project} />
      <LocationBlock project={project} />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
            Consulta el detalle completo de precios y opciones de lote
          </h2>
          <div className="mt-6">
            <Link
              href="/proyectos/rio-bravo"
              className="inline-flex items-center justify-center rounded-full border border-forest-800/20 px-7 py-3.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-900 hover:text-cream-50"
            >
              Ver ficha completa de Buenaventura Río Bravo
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal className="mb-8 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
            Resolvemos tus dudas sobre Río Bravo
          </h2>
        </Reveal>
        <Faq items={generalFaqs} />
      </section>

      <section className="relative overflow-hidden bg-forest-950 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">
            ¿Quieres conocer disponibilidad en Río Bravo?
          </h2>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              message={location.whatsappMessage}
              size="lg"
              trackPayload={{ placement: "rio_bravo_final_cta" }}
            >
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
