export type LocationSlug = "patulul" | "rio-bravo" | "tecpan";

export interface LotOption {
  label: string;
  size: string;
  area: string;
  price: string;
  downPayment: string;
  note?: string;
}

export interface LotGroup {
  title?: string;
  options: LotOption[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Project {
  slug: string;
  name: string;
  shortName: string;
  location: LocationSlug;
  locationLabel: string;
  logo: string;
  heroImage: string;
  gallery: string[];
  tagline: string;
  shortDescription: string;
  description: string[];
  /** Display string, e.g. "Q67,200" or "Consultar precio" */
  priceFromDisplay: string;
  priceIsFrom: boolean;
  downPaymentDisplay: string;
  areaFromDisplay: string;
  lotGroups?: LotGroup[];
  lotsNote?: string;
  financingPoints: string[];
  financingSummary: string;
  reservationNote?: string;
  amenities: string[];
  services: string[];
  nearbyPlaces: string[];
  mapsUrl?: string;
  documentationNote: string;
  internationalNote?: string;
  additionalNote?: string;
  whatsappMessage: string;
  featured: boolean;
}

export interface LocationInfo {
  slug: LocationSlug;
  name: string;
  title: string;
  heroImage: string;
  description: string;
  projectSlugs: string[];
  whatsappMessage: string;
}
