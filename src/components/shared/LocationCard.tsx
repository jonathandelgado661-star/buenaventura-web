import Image from "next/image";
import Link from "next/link";
import type { LocationInfo } from "@/data/types";
import { getProjectsByLocation } from "@/data/projects";

export default function LocationCard({
  location,
  ctaLabel,
}: {
  location: LocationInfo;
  ctaLabel: string;
}) {
  const count = getProjectsByLocation(location.slug).length;

  return (
    <Link
      href={`/${location.slug}`}
      className="group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-3xl shadow-lg shadow-forest-950/10 sm:h-[30rem]"
    >
      <Image
        src={location.heroImage}
        alt={`Terrenos en ${location.name}`}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

      <div className="relative z-10 p-6 sm:p-8">
        <span className="inline-block rounded-full bg-gold-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-950">
          {count} {count === 1 ? "proyecto disponible" : "proyectos disponibles"}
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold text-cream-50">{location.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-cream-100/80">{location.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-transform duration-300 group-hover:translate-x-1">
          {ctaLabel}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14m0 0-6-6m6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
