import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import LocationsSection from "@/components/home/LocationsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Comparator from "@/components/home/Comparator";
import WhyInvest from "@/components/home/WhyInvest";
import Financing from "@/components/home/Financing";
import Advisory from "@/components/home/Advisory";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Terrenos en Patulul, Río Bravo y Tecpán | Proyectos disponibles",
  description:
    "Conoce proyectos de terrenos disponibles en Patulul, Río Bravo y Tecpán. Consulta precios, ubicaciones, amenidades y opciones de financiamiento.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LocationsSection />
      <FeaturedProjects />
      <Comparator />
      <WhyInvest />
      <Financing />
      <Advisory />
      <CtaSection />
    </>
  );
}
