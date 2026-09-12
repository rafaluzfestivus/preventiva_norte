import type { Metadata } from "next";
import EsProteccioContent from "./CaProteccioContent";

export const metadata: Metadata = {
  title: "Redes de Protección en Galicia | Niños, Gatos y Aves",
  description:
    "Protección integral para pisos y viviendas en Galicia y Norte de Portugal. Redes certificadas para seguridad infantil, protección de gatos y control de aves. Instalación profesional en 24h.",
  keywords: [
    "redes para gatos galicia",
    "seguridad infantil vigo",
    "control de aves a coruña",
    "redes de seguridad balcones",
    "protección ventanas niños",
    "Preventiva Norte",
  ],
  alternates: {
    canonical: "https://preventivanorte.pt/es/proteccion",
    languages: {
      pt: "https://preventivanorte.pt/proteccion",
      es: "https://preventivanorte.pt/es/proteccion",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Preventiva Norte",
    url: "https://preventivanorte.pt/es/proteccion",
    title: "Redes de Protección en Galicia | Niños, Gatos y Aves",
    description:
      "Protección integral para pisos y viviendas en Galicia y Norte de Portugal. Redes certificadas para seguridad infantil, protección de gatos y control de aves.",
    images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
  },
};

export default function EsProteccionPage() {
  return <EsProteccioContent />;
}
