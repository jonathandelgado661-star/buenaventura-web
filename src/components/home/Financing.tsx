import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const plans = [
  {
    title: "Contado",
    description: "Para quienes prefieren adquirir su terreno con un solo pago.",
  },
  {
    title: "Semicontado",
    description: "Modalidades de hasta 1 año o hasta 11 meses sin intereses, según el proyecto.",
  },
  {
    title: "Financiamiento propio",
    description: "Planes propios de 2 a 8 años, según el proyecto y disponibilidad vigente.",
  },
  {
    title: "Abonos a capital",
    description: "Posibilidad de realizar abonos a capital según las condiciones vigentes de cada proyecto.",
  },
];

export default function Financing() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionHeading
        eyebrow="Financiamiento"
        title="Facilidad de financiamiento para cada plan"
        description="Las condiciones específicas varían según el proyecto. Un asesor te confirmará los detalles vigentes para la opción que te interese."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, i) => (
          <Reveal key={plan.title} delay={i * 90}>
            <div className="h-full rounded-2xl bg-gradient-to-b from-forest-800 to-forest-900 p-6 text-cream-50 shadow-md">
              <h3 className="font-display text-lg font-semibold text-gold-300">{plan.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/75">{plan.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
