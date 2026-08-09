import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import MobileWhatsAppBar from "@/components/whatsapp/MobileWhatsAppBar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://buenaventurapatulul.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Terrenos en Patulul, Río Bravo y Tecpán | Proyectos disponibles",
    template: "%s | Buenaventura Proyectos",
  },
  description:
    "Conoce proyectos de terrenos disponibles en Patulul, Río Bravo y Tecpán. Consulta precios, ubicaciones, amenidades y opciones de financiamiento.",
  openGraph: {
    type: "website",
    locale: "es_GT",
    siteName: "Buenaventura Proyectos",
    url: siteUrl,
    title: "Terrenos en Patulul, Río Bravo y Tecpán | Proyectos disponibles",
    description:
      "Conoce proyectos de terrenos disponibles en Patulul, Río Bravo y Tecpán. Consulta precios, ubicaciones, amenidades y opciones de financiamiento.",
    images: [{ url: "/images/buenaventura-patulul/patulul-08.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrenos en Patulul, Río Bravo y Tecpán | Proyectos disponibles",
    description:
      "Conoce proyectos de terrenos disponibles en Patulul, Río Bravo y Tecpán. Consulta precios, ubicaciones, amenidades y opciones de financiamiento.",
    images: ["/images/buenaventura-patulul/patulul-08.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream-50 text-stone-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Buenaventura Proyectos",
              description:
                "Asesores comerciales independientes especializados en proyectos de terrenos en Patulul, Río Bravo y Tecpán, Guatemala.",
              url: siteUrl,
              telephone: "+50230032614",
              areaServed: ["Patulul", "Río Bravo", "Tecpán"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "GT",
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileWhatsAppBar />
      </body>
    </html>
  );
}
