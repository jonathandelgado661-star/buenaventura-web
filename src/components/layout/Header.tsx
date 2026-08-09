"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/nav";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 shadow-md shadow-stone-900/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span
            className={`font-display text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl transition-colors ${
              scrolled || open ? "text-forest-900" : "text-white"
            }`}
          >
            Buenaventura
          </span>
          <span
            className={`hidden text-[11px] font-medium uppercase tracking-[0.2em] sm:block transition-colors ${
              scrolled || open ? "text-gold-600" : "text-gold-300"
            }`}
          >
            Proyectos
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${
                pathname === link.href
                  ? "text-gold-500"
                  : scrolled
                    ? "text-stone-700"
                    : "text-cream-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton message={WHATSAPP_MESSAGES.general} size="sm" trackPayload={{ placement: "header" }}>
            Hablar con un asesor
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ${
              open ? "translate-y-0 rotate-45 bg-forest-900" : `-translate-y-2 ${scrolled ? "bg-forest-900" : "bg-white"}`
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ${
              open ? "opacity-0" : `opacity-100 ${scrolled ? "bg-forest-900" : "bg-white"}`
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ${
              open ? "translate-y-0 -rotate-45 bg-forest-900" : `translate-y-2 ${scrolled ? "bg-forest-900" : "bg-white"}`
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-cream-50 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-6">
          {mainNav.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`border-b border-stone-900/5 py-4 font-display text-2xl text-forest-900 transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 px-6">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            size="lg"
            className="w-full"
            trackPayload={{ placement: "mobile_menu" }}
          >
            Hablar con un asesor
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
