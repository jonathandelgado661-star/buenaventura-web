import type { Project } from "@/data/types";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Reveal from "@/components/shared/Reveal";

export default function PriceSection({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <Reveal className="lg:col-span-1">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Precio y financiamiento
          </span>
          <h2 className="font-display text-3xl font-semibold text-forest-950">
            Opciones de lote disponibles
          </h2>

          <dl className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-cream-100/70 p-4 text-center sm:max-w-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-stone-500">Desde</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-forest-900">
                {project.priceFromDisplay}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-stone-500">Área</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-forest-900">
                {project.areaFromDisplay}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-stone-500">Enganche</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-forest-900">
                {project.downPaymentDisplay}
              </dd>
            </div>
          </dl>

          {project.lotsNote && (
            <p className="mt-5 text-sm leading-relaxed text-stone-600">{project.lotsNote}</p>
          )}

          <div className="mt-7 rounded-2xl border border-forest-800/15 bg-forest-950 p-5">
            <h3 className="font-display text-base font-semibold text-gold-300">Financiamiento</h3>
            <ul className="mt-3 space-y-2">
              {project.financingPoints.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-cream-100/85">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {project.reservationNote && (
            <p className="mt-5 rounded-xl bg-gold-500/10 p-4 text-sm leading-relaxed text-forest-900">
              {project.reservationNote}
            </p>
          )}

          <div className="mt-7">
            <WhatsAppButton
              message={project.whatsappMessage}
              size="lg"
              className="w-full sm:w-auto"
              trackPayload={{ project: project.slug, placement: "price_section" }}
            >
              Consultar precios y disponibilidad
            </WhatsAppButton>
          </div>
        </Reveal>

        <div className="lg:col-span-2">
          {project.lotGroups?.map((group, gi) => (
            <Reveal key={group.title ?? gi} delay={gi * 100} className={gi > 0 ? "mt-8" : ""}>
              {group.title && (
                <h3 className="mb-3 font-display text-lg font-semibold text-forest-950">
                  {group.title}
                </h3>
              )}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.options.map((opt) => (
                  <div
                    key={opt.label}
                    className="relative overflow-hidden rounded-2xl border border-stone-900/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {opt.note && (
                      <span className="absolute right-4 top-4 rounded-full bg-gold-500/15 px-2.5 py-1 text-[11px] font-semibold text-gold-600">
                        {opt.note}
                      </span>
                    )}
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      {opt.label}
                    </p>
                    <p className="mt-1 font-display text-2xl font-semibold text-forest-950">
                      {opt.price}
                    </p>
                    <div className="mt-4 space-y-1.5 text-sm text-stone-600">
                      <p>
                        Medida: <span className="font-medium text-stone-900">{opt.size}</span>
                      </p>
                      <p>
                        Área: <span className="font-medium text-stone-900">{opt.area}</span>
                      </p>
                      <p>
                        Enganche:{" "}
                        <span className="font-medium text-stone-900">{opt.downPayment}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
