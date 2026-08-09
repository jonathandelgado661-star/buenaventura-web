import type { Project } from "@/data/types";
import Faq from "@/components/shared/Faq";
import { generalFaqs } from "@/data/faqs";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";

export default function ProjectFaqCta({ project }: { project: Project }) {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mb-8 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
            Resolvemos tus dudas
          </h2>
        </Reveal>
        <Faq items={generalFaqs} />
      </section>

      <section className="relative overflow-hidden bg-forest-950 py-16 sm:py-20">
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">
            ¿Listo para conocer más sobre {project.shortName}?
          </h2>
          <p className="mt-3 text-sm text-cream-100/75 sm:text-base">
            Escríbenos y recibe información actualizada sobre disponibilidad, precios y
            financiamiento.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              message={project.whatsappMessage}
              size="lg"
              trackPayload={{ project: project.slug, placement: "project_final_cta" }}
            >
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
