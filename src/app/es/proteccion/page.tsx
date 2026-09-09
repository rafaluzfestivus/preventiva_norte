import type { Metadata } from "next";
import EsProteccioContent from "./CaProteccioContent";

export const metadata: Metadata = {
  title: "Redes de Proteção no Porto | Crianças, Gatos e Aves",
  description:
    "Proteção integral para a sua casa no Porto e Norte de Portugal. Redes certificadas para segurança infantil, proteção de gatos e controlo de aves. Instalação profissional em 24h.",
  keywords: [
    "redes para gatos porto",
    "segurança infantil porto",
    "controlo de aves porto",
    "redes de segurança varandas",
    "proteção janelas crianças",
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
    url: "https://preventivanorte.pt/es/proteccion",
    title: "Redes de Proteção no Porto | Crianças, Gatos e Aves",
    description:
      "Proteção integral para a sua casa no Porto e Norte de Portugal. Redes certificadas para segurança infantil, proteção de gatos e controlo de aves.",
    images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
  },
};

export default function EsProteccionPage() {
  return <EsProteccioContent />;
}
