import type { Metadata } from "next";
import { getLocationBySlug } from "@/data/locations";
import { getProjectsByLocation } from "@/data/projects";
import LocationHero from "@/components/location/LocationHero";
import ProjectShowcase from "@/components/location/ProjectShowcase";
import Comparator from "@/components/home/Comparator";
import Faq from "@/components/shared/Faq";
import { generalFaqs } from "@/data/faqs";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";
import ViewTracker from "@/components/shared/ViewTracker";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terrenos en Patulul | Proyectos y financiamiento",
  description:
    "Conoce Buenaventura Patulul, Las Delicias, Bella Vista y San Alberto: proyectos de terrenos en Patulul con financiamiento propio y amenidades.",
  alternates: { canonical: "/patulul" },
};

export default function PatululPage() {
  const location = getLocationBySlug("patulul")!;
  const projects = getProjectsByLocation("patulul");

  return (
    <>
      <ViewTracker event="location_view" payload={{ location: "patulul" }} />
      <LocationHero location={location} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <div className="bg-cream-100/60">
        <Comparator />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mb-8 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
            Resolvemos tus dudas sobre Patulul
          </h2>
        </Reveal>
        <Faq items={generalFaqs} />
      </section>

      <section className="relative overflow-hidden bg-forest-950 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">
            ¿Cuál proyecto de Patulul se adapta mejor a ti?
          </h2>
          <p className="mt-3 text-sm text-cream-100/75 sm:text-base">
            Un asesor puede ayudarte a comparar disponibilidad, precios y financiamiento entre los
            cuatro proyectos.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.patulul}
              size="lg"
              trackPayload={{ placement: "patulul_final_cta" }}
            >
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
