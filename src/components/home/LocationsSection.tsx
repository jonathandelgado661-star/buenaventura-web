import { locations } from "@/data/locations";
import LocationCard from "@/components/shared/LocationCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const ctaLabels: Record<string, string> = {
  patulul: "Explorar Patulul",
  "rio-bravo": "Conocer Río Bravo",
  tecpan: "Conocer Tecpán",
};

export default function LocationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionHeading
        eyebrow="Ubicaciones"
        title="Encuentra el proyecto ideal según tu ubicación"
        description="Comparamos por ti las opciones disponibles en cada zona para que tomes una decisión informada."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {locations.map((loc, i) => (
          <Reveal key={loc.slug} delay={i * 100}>
            <LocationCard location={loc} ctaLabel={ctaLabels[loc.slug]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
