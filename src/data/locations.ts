import type { LocationInfo } from "./types";

export const locations: LocationInfo[] = [
  {
    slug: "patulul",
    name: "Patulul",
    title: "Terrenos y proyectos residenciales en Patulul",
    heroImage: "/images/buenaventura-patulul/patulul-08.jpg",
    description:
      "En Patulul comercializamos cuatro proyectos con distintas características: Buenaventura Patulul, Residenciales Las Delicias, Residenciales Bella Vista y Residenciales San Alberto. Te ayudamos a comparar ubicación, precio y financiamiento para que encuentres el que mejor se adapte a tus planes.",
    projectSlugs: ["buenaventura-patulul", "las-delicias", "bella-vista", "san-alberto"],
    whatsappMessage: "Hola, estoy interesado en conocer las opciones disponibles en Patulul.",
  },
  {
    slug: "rio-bravo",
    name: "Río Bravo",
    title: "Terrenos en Río Bravo con financiamiento disponible",
    heroImage: "/images/rio-bravo/riobravo-05.jpg",
    description:
      "En Río Bravo comercializamos Buenaventura Río Bravo, un proyecto de terrenos completamente planos con amenidades sociales y deportivas, y opciones de financiamiento propio de 2 a 8 años.",
    projectSlugs: ["rio-bravo"],
    whatsappMessage: "Hola, estoy interesado en conocer las opciones disponibles en Río Bravo.",
  },
  {
    slug: "tecpan",
    name: "Tecpán",
    title: "Terrenos en Tecpán sobre la carretera CA-1",
    heroImage: "/images/tecpan/tecpan-11.jpg",
    description:
      "En Tecpán comercializamos Residenciales Buenaventura Tecpán, ubicado en el kilómetro 89.5 de la CA-1, con lotes urbanizados, laguna artificial y planes de financiamiento propio de 2 a 8 años.",
    projectSlugs: ["tecpan"],
    whatsappMessage: "Hola, estoy interesado en conocer las opciones disponibles en Tecpán.",
  },
];

export function getLocationBySlug(slug: string): LocationInfo | undefined {
  return locations.find((l) => l.slug === slug);
}
