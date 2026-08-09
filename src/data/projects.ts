import type { Project } from "./types";

const img = (slug: string, prefix: string, count: number) =>
  Array.from(
    { length: count },
    (_, i) => `/images/${slug}/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`
  );

const patululGallery = img("buenaventura-patulul", "patulul", 17);
const sanAlbertoGallery = img("san-alberto", "sanalberto", 17);
const bellaVistaGallery = img("bella-vista", "bellavista", 12);
const rioBravoGallery = img("rio-bravo", "riobravo", 11);
const tecpanGallery = img("tecpan", "tecpan", 12);
const deliciasGallery = img("las-delicias", "delicias", 5);

// Precios, medidas y enganches compartidos por Buenaventura Patulul,
// Las Delicias y San Alberto (confirmado por el cliente).
const patululTrioLotGroups = [
  {
    options: [
      {
        label: "Opción 1",
        size: "8 x 18 metros",
        area: "144 m²",
        price: "Q82,800",
        downPayment: "Q8,000",
      },
      {
        label: "Opción 2",
        size: "8 x 16 metros",
        area: "128 m²",
        price: "Q73,600",
        downPayment: "Q7,000",
        note: "Fase 1",
      },
      {
        label: "Opción 3",
        size: "8 x 16 metros",
        area: "128 m²",
        price: "Q67,200",
        downPayment: "Q6,000",
        note: "Fase 4",
      },
    ],
  },
];

const patululTrioAmenities = [
  "Piscina",
  "Garita de ingreso",
  "Canchas polideportivas",
  "Kioscos con churrasqueras",
  "Agua disponible las 24 horas",
  "Drenajes",
  "Calles pavimentadas",
];

const patululTrioFinancing = [
  "Financiamiento propio disponible.",
  "Puedes iniciar tu proceso con el 50% del enganche.",
];

const patululTrioDocumentation =
  "Consulta con un asesor la documentación, proceso de escrituración y respaldo jurídico correspondiente al proyecto.";

const patululTrioReservation =
  "Puedes iniciar tu proceso con el 50% del enganche. Sujeto a disponibilidad y condiciones comerciales vigentes.";

export const projects: Project[] = [
  {
    slug: "buenaventura-patulul",
    name: "Buenaventura Patulul",
    shortName: "Buenaventura Patulul",
    location: "patulul",
    locationLabel: "Patulul, Suchitepéquez",
    logo: "/logos/buenaventura-patulul.jpg",
    heroImage: patululGallery[7],
    gallery: patululGallery,
    tagline: "Terrenos con urbanización y amenidades en Patulul",
    shortDescription:
      "Terrenos residenciales en Patulul con calles pavimentadas, amenidades y financiamiento propio.",
    description: [
      "Buenaventura Patulul es uno de los proyectos que comercializamos en la zona de Patulul, pensado para quienes buscan un terreno con urbanización, amenidades y opciones de financiamiento accesibles.",
      "El proyecto cuenta con distintas medidas de lote y fases disponibles, para adaptarse a diferentes presupuestos y planes familiares.",
    ],
    priceFromDisplay: "Q67,200",
    priceIsFrom: true,
    downPaymentDisplay: "Q6,000",
    areaFromDisplay: "128 m²",
    lotGroups: patululTrioLotGroups,
    financingPoints: patululTrioFinancing,
    financingSummary: "Financiamiento propio disponible",
    reservationNote: patululTrioReservation,
    amenities: patululTrioAmenities,
    services: ["Agua disponible las 24 horas", "Drenajes", "Calles pavimentadas", "Garita de ingreso"],
    nearbyPlaces: [],
    documentationNote: patululTrioDocumentation,
    whatsappMessage:
      "Hola, vi Buenaventura Patulul en la página web y quisiera conocer disponibilidad, precios y financiamiento.",
    featured: true,
  },
  {
    slug: "las-delicias",
    name: "Residenciales Las Delicias",
    shortName: "Las Delicias",
    location: "patulul",
    locationLabel: "Patulul, Suchitepéquez",
    logo: "/logos/las-delicias.jpg",
    heroImage: deliciasGallery[1],
    gallery: deliciasGallery,
    tagline: "Un residencial pensado para la familia en Patulul",
    shortDescription:
      "Residencial en Patulul con piscina, áreas sociales y financiamiento propio.",
    description: [
      "Residenciales Las Delicias es otro de los proyectos que comercializamos en Patulul, con espacios verdes, áreas sociales y una propuesta orientada a la vida en familia.",
      "Comparte medidas, precios y enganches con Buenaventura Patulul y Residenciales San Alberto, aunque se trata de un desarrollo independiente con su propia ubicación dentro de la zona.",
    ],
    priceFromDisplay: "Q67,200",
    priceIsFrom: true,
    downPaymentDisplay: "Q6,000",
    areaFromDisplay: "128 m²",
    lotGroups: patululTrioLotGroups,
    financingPoints: patululTrioFinancing,
    financingSummary: "Financiamiento propio disponible",
    reservationNote: patululTrioReservation,
    amenities: patululTrioAmenities,
    services: ["Agua disponible las 24 horas", "Drenajes", "Calles pavimentadas", "Garita de ingreso"],
    nearbyPlaces: [],
    documentationNote: patululTrioDocumentation,
    whatsappMessage:
      "Hola, vi Residenciales Las Delicias en la página web y quisiera conocer disponibilidad, precios y financiamiento.",
    featured: true,
  },
  {
    slug: "san-alberto",
    name: "Residenciales San Alberto",
    shortName: "San Alberto",
    location: "patulul",
    locationLabel: "Patulul, Suchitepéquez",
    logo: "/logos/san-alberto.jpg",
    heroImage: sanAlbertoGallery[4],
    gallery: sanAlbertoGallery,
    tagline: "Tu nueva residencial, a una hora del Lago de Atitlán",
    shortDescription:
      "Terrenos en Patulul a aproximadamente 1 hora del Lago de Atitlán, con amenidades y financiamiento propio.",
    description: [
      "Residenciales San Alberto es uno de los proyectos que comercializamos en Patulul, con una ubicación a aproximadamente una hora del Lago de Atitlán.",
      "Comparte medidas, precios y enganches con Buenaventura Patulul y Residenciales Las Delicias, manteniendo su propia identidad, fotografías y disponibilidad.",
    ],
    priceFromDisplay: "Q67,200",
    priceIsFrom: true,
    downPaymentDisplay: "Q6,000",
    areaFromDisplay: "128 m²",
    lotGroups: patululTrioLotGroups,
    financingPoints: patululTrioFinancing,
    financingSummary: "Financiamiento propio disponible",
    reservationNote: patululTrioReservation,
    amenities: patululTrioAmenities,
    services: ["Agua disponible las 24 horas", "Drenajes", "Calles pavimentadas", "Garita de ingreso"],
    nearbyPlaces: ["Aproximadamente 1 hora del Lago de Atitlán"],
    documentationNote: patululTrioDocumentation,
    additionalNote: "Aproximadamente a 1 hora del Lago de Atitlán.",
    whatsappMessage:
      "Hola, vi Residenciales San Alberto en la página web y quisiera conocer disponibilidad y planes de financiamiento.",
    featured: true,
  },
  {
    slug: "bella-vista",
    name: "Residenciales Bella Vista",
    shortName: "Bella Vista",
    location: "patulul",
    locationLabel: "Patulul, Suchitepéquez",
    logo: "/logos/bella-vista.jpg",
    heroImage: bellaVistaGallery[6],
    gallery: bellaVistaGallery,
    tagline: "Mi mejor inversión: lotes residenciales y comerciales",
    shortDescription:
      "Lotes residenciales desde 128 m² y lotes comerciales, con casa club, piscina y financiamiento hasta 1 año sin intereses.",
    description: [
      "Residenciales Bella Vista es uno de los proyectos que comercializamos en Patulul, con lotes residenciales para construir vivienda o adquirir patrimonio, y lotes comerciales para inversión o desarrollo de negocio.",
      "Se ubica en una zona con potencial de crecimiento, cerca del Cruce de Cocales y a poco menos de una hora del Lago de Atitlán, y cuenta con urbanización completa y amenidades pensadas para la familia.",
    ],
    priceFromDisplay: "Consultar precio",
    priceIsFrom: false,
    downPaymentDisplay: "Q8,000",
    areaFromDisplay: "128 m²",
    lotsNote:
      "Lotes residenciales desde 128 m² para construir vivienda o adquirir patrimonio. También existen lotes comerciales disponibles para inversión o desarrollo de negocio; consulta con un asesor precios y disponibilidad.",
    financingPoints: [
      "Financiamiento propio.",
      "Modalidad de hasta 1 año sin intereses.",
      "Planes de financiamiento a mayor plazo.",
      "Abonos a capital permitidos según condiciones vigentes.",
    ],
    financingSummary: "Hasta 1 año sin intereses o financiamiento a mayor plazo",
    amenities: [
      "Áreas verdes",
      "Jardines",
      "Churrasqueras",
      "Casa club",
      "Piscina",
      "Juegos infantiles",
      "Senderos peatonales",
    ],
    services: [
      "Agua potable",
      "Drenajes",
      "Planta de tratamiento",
      "Electricidad instalada",
      "Calles amplias y pavimentadas",
      "Garita de seguridad",
      "Muro perimetral",
    ],
    nearbyPlaces: [
      "10 minutos del Cruce de Cocales",
      "30 minutos del Lago de Atitlán",
      "2 horas de Ciudad de Guatemala",
      "1 hora del IRTRA en Retalhuleu",
    ],
    mapsUrl: "https://maps.app.goo.gl/3aRQ8RKLa87m9sB29?g_st=ac",
    documentationNote:
      "Consulta con un asesor la documentación, proceso de escrituración y respaldo jurídico correspondiente al proyecto.",
    whatsappMessage:
      "Hola, vi Residenciales Bella Vista en la página web y quisiera conocer lotes disponibles, precios y opciones de financiamiento.",
    featured: true,
  },
  {
    slug: "rio-bravo",
    name: "Buenaventura Río Bravo",
    shortName: "Río Bravo",
    location: "rio-bravo",
    locationLabel: "Río Bravo, Suchitepéquez",
    logo: "/logos/rio-bravo.jpg",
    heroImage: rioBravoGallery[4],
    gallery: rioBravoGallery,
    tagline: "Terrenos completamente planos en Río Bravo",
    shortDescription:
      "Terrenos planos desde 128 m², financiamiento propio de 2 a 8 años y plan semicontado hasta 1 año sin intereses.",
    description: [
      "Buenaventura Río Bravo es el proyecto que comercializamos en esta ubicación, con terrenos completamente planos y opciones de financiamiento pensadas para distintos presupuestos.",
      "Cuenta con amenidades sociales y deportivas, servicios básicos disponibles las 24 horas, y la posibilidad de iniciar el proceso de compra incluso si vives en el extranjero.",
    ],
    priceFromDisplay: "Q73,600",
    priceIsFrom: true,
    downPaymentDisplay: "Q6,000",
    areaFromDisplay: "128 m²",
    lotGroups: [
      {
        options: [
          {
            label: "Medida desde",
            size: "8 x 16 metros",
            area: "128 m²",
            price: "Q73,600",
            downPayment: "Q6,000",
          },
        ],
      },
    ],
    lotsNote:
      "Si existen lotes de mayor tamaño, pueden llegar aproximadamente hasta 10 x 30 metros según disponibilidad. Esta medida no se presenta como disponibilidad garantizada; consulta con un asesor las opciones vigentes.",
    financingPoints: [
      "Financiamiento propio de 2 a 8 años.",
      "Plan semicontado de hasta 1 año sin intereses.",
      "Sujeto a condiciones comerciales vigentes.",
    ],
    financingSummary: "Financiamiento propio de 2 a 8 años",
    amenities: [
      "Piscina",
      "Casa club",
      "Áreas sociales",
      "Juegos infantiles",
      "Kioscos con churrasqueras",
      "Canchas polideportivas",
      "Salón de eventos",
      "Muro perimetral",
      "Garita de acceso",
    ],
    services: ["Servicios básicos disponibles las 24 horas", "Muro perimetral", "Garita de acceso"],
    nearbyPlaces: [
      "20 minutos del Centro Comercial Cocales",
      "35 minutos de Playa El Semillero",
    ],
    documentationNote:
      "Consulta con un asesor la documentación y respaldo jurídico correspondiente al proyecto.",
    internationalNote:
      "También puede iniciarse el proceso si vives en Estados Unidos u otro país, utilizando DPI o pasaporte, según la información proporcionada por el proyecto.",
    whatsappMessage:
      "Hola, vi Buenaventura Río Bravo en la página web y quisiera conocer disponibilidad, precios y opciones de financiamiento.",
    featured: true,
  },
  {
    slug: "tecpan",
    name: "Residenciales Buenaventura Tecpán",
    shortName: "Tecpán",
    location: "tecpan",
    locationLabel: "Km 89.5, Carretera CA-1, Tecpán, Guatemala",
    logo: "/logos/tecpan.jpg",
    heroImage: tecpanGallery[10],
    gallery: tecpanGallery,
    tagline: "Ubicación estratégica sobre la CA-1",
    shortDescription:
      "Lotes urbanizados sobre la CA-1, con laguna artificial, áreas verdes y financiamiento propio de 2 a 8 años.",
    description: [
      "Residenciales Buenaventura Tecpán es el proyecto que comercializamos en esta ubicación, sobre el kilómetro 89.5 de la carretera CA-1, en Tecpán, Guatemala.",
      "Ofrece lotes en calles internas y sobre el bulevar principal, con urbanización completa, áreas verdes y una laguna artificial dentro del proyecto.",
    ],
    priceFromDisplay: "Q320,000",
    priceIsFrom: true,
    downPaymentDisplay: "Q30,000",
    areaFromDisplay: "128 m²",
    lotGroups: [
      {
        title: "Calles internas",
        options: [
          {
            label: "8 x 16 metros",
            size: "8 x 16 metros",
            area: "128 m²",
            price: "Q320,000",
            downPayment: "Q30,000",
          },
          {
            label: "8 x 18 metros",
            size: "8 x 18 metros",
            area: "144 m²",
            price: "Q360,000",
            downPayment: "Q30,000",
          },
        ],
      },
      {
        title: "Bulevar principal",
        options: [
          {
            label: "8 x 20 metros",
            size: "8 x 20 metros",
            area: "160 m²",
            price: "Q400,000",
            downPayment: "Q30,000",
          },
          {
            label: "9 x 20 metros",
            size: "9 x 20 metros",
            area: "180 m²",
            price: "Q450,000",
            downPayment: "Q30,000",
          },
        ],
      },
    ],
    financingPoints: [
      "Contado.",
      "Semicontado: hasta 11 meses sin intereses.",
      "Financiamiento propio de 2 a 8 años.",
      "Abonos a capital sin penalización, según condiciones vigentes.",
    ],
    financingSummary: "Financiamiento propio de 2 a 8 años",
    amenities: ["Áreas verdes", "Churrasqueras", "Laguna artificial"],
    services: [
      "Agua potable",
      "Drenajes",
      "Planta de tratamiento",
      "Posteado eléctrico",
      "Calles amplias y pavimentadas",
      "Garita de seguridad",
      "Muro perimetral",
    ],
    nearbyPlaces: ["Ubicación estratégica sobre la carretera CA-1"],
    documentationNote:
      "Consulta con un asesor la documentación, proceso de escrituración y respaldo jurídico correspondiente al proyecto.",
    internationalNote:
      "Si vives en el extranjero, consulta con un asesor los documentos necesarios para iniciar tu proceso.",
    whatsappMessage:
      "Hola, vi Residenciales Buenaventura Tecpán en la página web y quisiera conocer disponibilidad y planes de financiamiento.",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByLocation(location: string): Project[] {
  return projects.filter((p) => p.location === location);
}

export const featuredProjects = projects.filter((p) => p.featured);
