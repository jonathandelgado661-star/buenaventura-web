import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const reasons = [
  {
    title: "Opciones de financiamiento",
    description: "Planes de financiamiento propio y modalidades semicontado según el proyecto.",
  },
  {
    title: "Ubicaciones estratégicas",
    description: "Proyectos en Patulul, Río Bravo y Tecpán, cada uno con su propio contexto y accesos.",
  },
  {
    title: "Diferentes medidas",
    description: "Lotes de distintas medidas y precios para adaptarse a tu presupuesto y planes.",
  },
  {
    title: "Infraestructura",
    description: "Calles, agua, drenajes y otros servicios según el proyecto y su etapa de desarrollo.",
  },
  {
    title: "Amenidades",
    description: "Piscinas, áreas sociales, canchas y espacios pensados para la vida en familia.",
  },
  {
    title: "Asesoría personalizada",
    description: "Un asesor te acompaña para resolver dudas y comparar opciones antes de decidir.",
  },
];

export default function WhyInvest() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 sm:py-28">
      <div className="absolute inset-0 opacity-[0.15]">
        <Image
          src="/images/san-alberto/sanalberto-11.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por qué invertir"
          title="Más que comprar un terreno, estás construyendo patrimonio"
          description="Cada familia tiene planes distintos. Por eso comparamos contigo las opciones disponibles, sin presión y con información clara."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 70} className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/40 font-display text-gold-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-cream-50">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream-100/70">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 max-w-2xl border-t border-cream-100/10 pt-8">
          <p className="text-sm text-cream-100/60">
            En proyectos donde aplica, también es posible iniciar el proceso de compra desde el
            extranjero. Un asesor puede confirmarte si esta opción está disponible para el
            proyecto de tu interés.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
