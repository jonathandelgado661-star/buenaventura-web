import type { Project } from "@/data/types";
import Gallery from "@/components/shared/Gallery";
import Reveal from "@/components/shared/Reveal";

export default function ProjectGallerySection({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="mb-8 max-w-2xl">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
          Galería
        </span>
        <h2 className="font-display text-2xl font-semibold text-forest-950 sm:text-3xl">
          Conoce {project.shortName} en imágenes
        </h2>
      </Reveal>
      <Gallery images={project.gallery} alt={project.name} />

      <Reveal className="mx-auto mt-10 max-w-3xl space-y-4">
        {project.description.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-stone-700">
            {paragraph}
          </p>
        ))}
      </Reveal>
    </section>
  );
}
