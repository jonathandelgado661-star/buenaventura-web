import type { Project } from "@/data/types";
import Reveal from "@/components/shared/Reveal";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-forest-600" aria-hidden="true">
      <circle cx="10" cy="10" r="10" className="fill-forest-600/10" />
      <path
        d="m6 10.5 2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function AmenitiesServices({ project }: { project: Project }) {
  return (
    <section className="bg-cream-100/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Amenidades
            </span>
            <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
              Espacios pensados para la familia
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.amenities.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Servicios y urbanización
            </span>
            <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
              Infraestructura del proyecto
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.services.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-forest-800/10 bg-white p-5">
              <h3 className="font-display text-sm font-semibold text-forest-950">
                Documentación y respaldo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {project.documentationNote}
              </p>
              {project.internationalNote && (
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {project.internationalNote}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
