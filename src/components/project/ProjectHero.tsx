import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

const locationHref: Record<string, string> = {
  patulul: "/patulul",
  "rio-bravo": "/rio-bravo",
  tecpan: "/tecpan",
};

const locationLabel: Record<string, string> = {
  patulul: "Patulul",
  "rio-bravo": "Río Bravo",
  tecpan: "Tecpán",
};

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-forest-950">
      <Image
        src={project.heroImage}
        alt={project.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pb-12 lg:px-8">
        <nav className="mb-5 flex items-center gap-2 text-xs text-cream-100/70">
          <Link href="/" className="hover:text-cream-50">
            Inicio
          </Link>
          <span>/</span>
          <Link href={locationHref[project.location]} className="hover:text-cream-50">
            {locationLabel[project.location]}
          </Link>
          <span>/</span>
          <span className="text-cream-100">{project.shortName}</span>
        </nav>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg sm:h-20 sm:w-20">
              <Image
                src={project.logo}
                alt={`Logotipo ${project.name}`}
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                {project.locationLabel}
              </p>
              <h1 className="mt-1 font-display text-3xl font-semibold text-cream-50 sm:text-4xl lg:text-5xl">
                {project.name}
              </h1>
              <p className="mt-2 max-w-lg text-sm text-cream-100/80 sm:text-base">
                {project.tagline}
              </p>
            </div>
          </div>

          <WhatsAppButton
            message={project.whatsappMessage}
            size="lg"
            className="shrink-0"
            trackPayload={{ project: project.slug, placement: "project_hero" }}
          >
            Consultar disponibilidad
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
