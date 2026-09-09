import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhyUs } from "@/components/sections/WhyUs";
import { AboutUs } from "@/components/sections/AboutUs";
import { es } from "@/dictionaries/es";

export const metadata: Metadata = {
  title: "Instal·lació de Xarxes de Protecció a Barcelona | Preventiva Este",
  description:
    "Especialistes en instal·lació de xarxes de protecció per a balcons, finestres i terrasses a Barcelona i voltants. Resistència de 150kg/m² i 3 anys de garantia.",
  alternates: {
    canonical: "https://preventivanorte.pt/es",
    languages: {
      pt: "https://preventivanorte.pt",
      es: "https://preventivanorte.pt/es",
    },
  },
  openGraph: {
    url: "https://preventivanorte.pt/es",
    title: "Preventiva Este | Xarxes de Protecció a Barcelona",
    description:
      "Instal·lació professional de xarxes de protecció i malles de seguretat a Barcelona.",
    images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
  },
};

export default function EsHome() {
  return (
    <>
      <Hero dict={es.hero} basePath="/es" />
      <TrustBar dict={es.trustBar} />
      <Services dict={es.services} />
      <Benefits dict={es.benefits} />
      <WhyUs dict={es.whyUs} />
      <AboutUs dict={es.aboutUs} />
      <Gallery dict={es.gallery} />
      <Testimonials dict={es.testimonials} />
      <ContactSection />
    </>
  );
}
