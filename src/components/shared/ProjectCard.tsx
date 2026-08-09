import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
      <Link href={`/proyectos/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.locationLabel}`}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/0 to-transparent" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/95 p-1.5 shadow-md">
          <Image
            src={project.logo}
            alt={`Logotipo ${project.name}`}
            width={80}
            height={80}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-cream-100">
          {project.locationLabel}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-forest-950">{project.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-500 line-clamp-2">
          {project.shortDescription}
        </p>

        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-stone-900/5 pt-4 text-center">
          <div>
            <dt className="text-[10px] uppercase tracking-wide text-stone-500">Desde</dt>
            <dd className="mt-0.5 text-sm font-semibold text-forest-900">
              {project.priceFromDisplay}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide text-stone-500">Área</dt>
            <dd className="mt-0.5 text-sm font-semibold text-forest-900">
              {project.areaFromDisplay}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wide text-stone-500">Enganche</dt>
            <dd className="mt-0.5 text-sm font-semibold text-forest-900">
              {project.downPaymentDisplay}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/proyectos/${project.slug}`}
            className="flex-1 rounded-full border border-forest-800/20 px-4 py-2.5 text-center text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-900 hover:text-cream-50"
          >
            Ver proyecto
          </Link>
          <WhatsAppButton
            message={project.whatsappMessage}
            size="sm"
            className="flex-1"
            trackPayload={{ project: project.slug, placement: "project_card" }}
          >
            Consultar
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
