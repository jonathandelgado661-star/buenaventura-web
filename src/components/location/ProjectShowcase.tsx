import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";

/**
 * Large alternating showcase block used on location pages (Patulul)
 * to present each project with its own photography and highlights,
 * instead of a plain repetitive list.
 */
export default function ProjectShowcase({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal
        className={`grid grid-cols-2 gap-3 ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={project.gallery[0]}
            alt={project.name}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={project.gallery[1] ?? project.gallery[0]}
            alt={`${project.name} — vista adicional`}
            fill
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={project.gallery[2] ?? project.gallery[0]}
            alt={`${project.name} — vista adicional`}
            fill
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal className={reverse ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow ring-1 ring-stone-900/5">
            <Image
              src={project.logo}
              alt={`Logotipo ${project.name}`}
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
              {project.locationLabel}
            </p>
            <h3 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-base leading-relaxed text-stone-700">{project.shortDescription}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-cream-100/70 p-4 text-center">
          <div>
            <dt className="text-[11px] uppercase tracking-wide text-stone-500">Desde</dt>
            <dd className="mt-1 font-display text-lg font-semibold text-forest-900">
              {project.priceFromDisplay}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wide text-stone-500">Área</dt>
            <dd className="mt-1 font-display text-lg font-semibold text-forest-900">
              {project.areaFromDisplay}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wide text-stone-500">Enganche</dt>
            <dd className="mt-1 font-display text-lg font-semibold text-forest-900">
              {project.downPaymentDisplay}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/proyectos/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-forest-800/20 px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-900 hover:text-cream-50"
          >
            Ver proyecto completo
          </Link>
          <WhatsAppButton
            message={project.whatsappMessage}
            trackPayload={{ project: project.slug, placement: "location_showcase" }}
          >
            Consultar
          </WhatsAppButton>
        </div>
      </Reveal>
    </div>
  );
}
