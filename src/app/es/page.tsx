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
  title: "Instalação de Redes de Proteção no Porto e Norte | Preventiva Norte",
  description:
    "Especialistas em instalação de redes de proteção para varandas, janelas e terraços no Porto e em todo o Norte de Portugal. Resistência de 150kg/m² e 3 anos de garantia.",
  alternates: {
    canonical: "https://preventivanorte.pt/es",
    languages: {
      pt: "https://preventivanorte.pt",
      es: "https://preventivanorte.pt/es",
    },
  },
  openGraph: {
    url: "https://preventivanorte.pt/es",
    title: "Preventiva Norte | Redes de Proteção no Porto e Norte de Portugal",
    description:
      "Instalação profissional de redes de proteção e redes de segurança no Porto e Norte de Portugal.",
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
      <Resources dict={es.resources} />
      <ContactSection />
    </>
  );
}
