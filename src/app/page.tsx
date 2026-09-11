import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { BenefitsWhyUs } from "@/components/sections/BenefitsWhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { Gallery } from "@/components/sections/Gallery";
import { Highlights } from "@/components/sections/Highlights";
import { KitInstalacaoSection } from "@/components/sections/KitInstalacaoSection";
import { pt } from "@/dictionaries/pt";

export default function Home() {
  return (
    <>
      <Hero dict={pt.hero} basePath="" />
      <TrustBar dict={pt.trustBar} />
      <Services dict={pt.services} basePath="" />
      <AboutUs dict={pt.aboutUs} />
      <BenefitsWhyUs benefits={pt.benefits} whyUs={pt.whyUs} />
      <Gallery dict={pt.gallery} />
      <Testimonials dict={pt.testimonials} />
      <Highlights dict={pt.highlights} />
      <ContactSection dict={pt.contact} />
      <KitInstalacaoSection locale="pt" />
    </>
  );
}
