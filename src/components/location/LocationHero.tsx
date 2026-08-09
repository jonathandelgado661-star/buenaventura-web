import Image from "next/image";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import type { LocationInfo } from "@/data/types";

export default function LocationHero({ location }: { location: LocationInfo }) {
  return (
    <section className="relative flex min-h-[60vh] w-full items-end overflow-hidden bg-forest-950 sm:min-h-[65vh]">
      <Image
        src={location.heroImage}
        alt={`Terrenos en ${location.name}`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pb-14 lg:px-8">
        <span className="mb-4 inline-block rounded-full border border-gold-300/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm">
          {location.name}
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
          {location.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
          {location.description}
        </p>
        <div className="mt-8">
          <WhatsAppButton
            message={location.whatsappMessage}
            size="lg"
            trackPayload={{ placement: "location_hero", location: location.slug }}
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
