import type { Metadata } from "next";
import { LocaleUpdater } from "@/components/layout/LocaleUpdater";

export const metadata: Metadata = {
  title: "Instal·lació de Xarxes de Protecció a Barcelona | Preventiva Este",
  description:
    "Especialistes en instal·lació de xarxes de protecció per a balcons, finestres i terrasses a Barcelona i voltants. Resistència de 150kg/m² i 3 anys de garantia.",
  keywords: [
    "xarxes de protecció barcelona",
    "malles de seguretat barcelona",
    "xarxes per a balcons barcelona",
    "xarxes per a gats barcelona",
    "seguretat infantil finestres barcelona",
    "instal·lació xarxes barcelona",
    "malles anticaigudes",
    "protecció terrasses barcelona",
    "Preventiva Este",
    "preu xarxes protecció",
    "pressupost malles seguretat",
    "instal·ladors xarxes barcelona",
  ],
  authors: [{ name: "Preventiva Este", url: "https://preventivaeste.com" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivanorte.pt/es",
    title: "Preventiva Este | Xarxes de Protecció a Barcelona",
    description:
      "Instal·lació professional de xarxes de protecció i malles de seguretat a Barcelona. Protegeix els teus éssers estimats sense sacrificar l'estètica.",
    siteName: "Preventiva Este",
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
