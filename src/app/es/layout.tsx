import type { Metadata } from "next";
import { LocaleUpdater } from "@/components/layout/LocaleUpdater";

export const metadata: Metadata = {
  title: "Instalação de Redes de Proteção no Porto e Norte | Preventiva Norte",
  description:
    "Especialistas em instalação de redes de proteção para varandas, janelas e terraços no Porto e em todo o Norte de Portugal. Resistência de 150kg/m² e 3 anos de garantia.",
  keywords: [
    "redes de proteção porto",
    "redes de segurança porto",
    "redes para varandas porto",
    "redes para gatos porto",
    "segurança infantil janelas porto",
    "instalação redes porto",
    "redes anti-queda",
    "proteção terraços porto",
    "Preventiva Norte",
    "preço redes proteção",
    "orçamento redes segurança",
    "instaladores redes porto",
  ],
  authors: [{ name: "Preventiva Norte", url: "https://preventivanorte.pt" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivanorte.pt/es",
    title: "Preventiva Norte | Redes de Proteção no Porto e Norte de Portugal",
    description:
      "Instalação profissional de redes de proteção e redes de segurança no Porto e Norte de Portugal. Proteja quem mais ama sem comprometer a estética da sua casa.",
    siteName: "Preventiva Norte",
    images: [
      {
        url: "https://preventivanorte.pt/logo-preventiva-norte.png",
        width: 800,
        height: 600,
        alt: "Logo Preventiva Norte",
      },
    ],
  },
  alternates: {
    canonical: "https://preventivanorte.pt/es",
    languages: {
      pt: "https://preventivanorte.pt",
      es: "https://preventivanorte.pt/es",
    },
  },
};

export default function EsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <LocaleUpdater locale="es" />
      {children}
    </>
  );
}
