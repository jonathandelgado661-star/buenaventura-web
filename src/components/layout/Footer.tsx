import Link from "next/link";
import { footerNav } from "@/data/nav";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-cream-100 pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-2xl font-semibold text-cream-50">
              Buenaventura <span className="text-gold-400">Proyectos</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
              Te asesoramos para encontrar tu terreno ideal en los proyectos que comercializamos
              en Patulul, Río Bravo y Tecpán.
            </p>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Navegación
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-100/80 hover:text-cream-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Ubicaciones
            </h3>
            <ul className="mt-4 space-y-3">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/${loc.slug}`} className="text-sm text-cream-100/80 hover:text-cream-50">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Proyectos
            </h3>
            <ul className="mt-4 space-y-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/proyectos/${p.slug}`}
                    className="text-sm text-cream-100/80 hover:text-cream-50"
                  >
                    {p.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-100/10 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-cream-100/50">
            Este sitio web es administrado por asesores comerciales independientes que brindan
            información y acompañamiento sobre los proyectos publicados. No representamos ni
            actuamos como propietarios, desarrolladores o administradores oficiales de dichos
            proyectos. Los precios, disponibilidad, promociones, características y condiciones de
            financiamiento pueden cambiar sin previo aviso y deben confirmarse directamente con un
            asesor.
          </p>
          <p className="mt-4 text-xs text-cream-100/40">
            © {year} Buenaventura Proyectos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
