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
import { Resources } from "@/components/sections/Resources";
import { es } from "@/dictionaries/es";

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección en Porto y Norte | Preventiva Norte",
  description:
    "Especialistas en la instalación de redes de protección para balcones, ventanas y terrazas en Porto y en todo el Norte de Portugal. Resistencia de 150kg/m² y 2 años de garantía.",
  alternates: {
    canonical: "https://preventivanorte.pt/es",
    languages: {
      pt: "https://preventivanorte.pt",
      es: "https://preventivanorte.pt/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Preventiva Norte",
    url: "https://preventivanorte.pt/es",
    title: "Preventiva Norte | Redes de Protección en Porto y Norte de Portugal",
    description:
      "Instalación profesional de redes de protección y redes de seguridad en Porto y Norte de Portugal.",
    images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
  },
};

export default function EsHome() {
  return (
    <>
      <Hero dict={es.hero} basePath="/es" />
      <TrustBar dict={es.trustBar} />
      <Services dict={es.services} basePath="/es" />
      <Benefits dict={es.benefits} />
      <WhyUs dict={es.whyUs} />
      <AboutUs dict={es.aboutUs} />
      <Gallery dict={es.gallery} />
      <Testimonials dict={es.testimonials} />
      <Resources dict={es.resources} />
      <ContactSection dict={es.contact} />
    </>
  );
}
