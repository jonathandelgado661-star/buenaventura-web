export const WHATSAPP_NUMBER = "50230032614";
export const WHATSAPP_DISPLAY = "+502 3003 2614";

/**
 * Builds a wa.me link with a URL-encoded, pre-filled message.
 * Centralized here so every CTA in the site uses the same number
 * and so messages stay easy to audit/update from one place.
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  home: "Hola, vi los proyectos en la página web y quisiera recibir información.",
  patulul: "Hola, estoy interesado en conocer las opciones disponibles en Patulul.",
  rioBravoLocation:
    "Hola, estoy interesado en conocer las opciones disponibles en Río Bravo.",
  tecpanLocation:
    "Hola, estoy interesado en conocer las opciones disponibles en Tecpán.",
  general:
    "Hola, quisiera recibir asesoría personalizada sobre los proyectos disponibles.",
} as const;
