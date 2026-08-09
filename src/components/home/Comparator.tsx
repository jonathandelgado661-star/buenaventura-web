import Link from "next/link";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const locationLabels: Record<string, string> = {
  patulul: "Patulul",
  "rio-bravo": "Río Bravo",
  tecpan: "Tecpán",
};

export default function Comparator() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionHeading
        eyebrow="Comparador"
        title="Compara los proyectos en un vistazo"
        description="Precios, enganches y áreas desde, para que compares fácilmente sin perderte en tablas complicadas."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-stone-900/10 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-forest-950">
                  {project.shortName}
                </h3>
                <span className="rounded-full bg-cream-100 px-2.5 py-1 text-[11px] font-medium text-forest-800">
                  {locationLabels[project.location]}
                </span>
              </div>

              <dl className="mt-4 space-y-2.5 text-sm">
                <div className="flex items-center justify-between border-b border-dashed border-stone-900/10 pb-2.5">
                  <dt className="text-stone-500">Precio desde</dt>
                  <dd className="font-semibold text-forest-900">{project.priceFromDisplay}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-stone-900/10 pb-2.5">
                  <dt className="text-stone-500">Enganche desde</dt>
                  <dd className="font-semibold text-forest-900">{project.downPaymentDisplay}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-stone-900/10 pb-2.5">
                  <dt className="text-stone-500">Área desde</dt>
                  <dd className="font-semibold text-forest-900">{project.areaFromDisplay}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-stone-500">Financiamiento</dt>
                  <dd className="text-right font-semibold text-forest-900">
                    {project.financingSummary}
                  </dd>
                </div>
              </dl>

              <Link
                href={`/proyectos/${project.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-500"
              >
                Ver detalle completo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
