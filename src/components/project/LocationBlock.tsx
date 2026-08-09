"use client";

import type { Project } from "@/data/types";
import Reveal from "@/components/shared/Reveal";
import { trackEvent } from "@/lib/analytics";

export default function LocationBlock({ project }: { project: Project }) {
  if (project.nearbyPlaces.length === 0 && !project.mapsUrl && !project.additionalNote) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="rounded-3xl bg-forest-950 p-8 sm:p-12">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
          Ubicación
        </span>
        <h2 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">
          {project.locationLabel}
        </h2>

        {project.additionalNote && (
          <p className="mt-3 max-w-2xl text-sm text-cream-100/80">{project.additionalNote}</p>
        )}

        {project.nearbyPlaces.length > 0 && (
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.nearbyPlaces.map((place) => (
              <li key={place} className="flex items-center gap-2.5 text-sm text-cream-100/90">
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M10 1.5c-3.31 0-6 2.69-6 6 0 4.5 6 11 6 11s6-6.5 6-11c0-3.31-2.69-6-6-6Zm0 8.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
                  />
                </svg>
                {place}
              </li>
            ))}
          </ul>
        )}

        {project.mapsUrl && (
          <a
            href={project.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("maps_click", { project: project.slug })}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-50 hover:text-forest-950"
          >
            Ver ubicación en Google Maps
          </a>
        )}
      </Reveal>
    </section>
  );
}
