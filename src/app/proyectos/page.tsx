import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Proyectos disponibles en Patulul, Río Bravo y Tecpán",
  description:
    "Explora todos los proyectos de terrenos que comercializamos: Buenaventura Patulul, Las Delicias, Bella Vista, San Alberto, Río Bravo y Tecpán.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Todos los proyectos"
          title="Proyectos que comercializamos"
          description="Conoce disponibilidad, precios y financiamiento de cada proyecto en Patulul, Río Bravo y Tecpán."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
