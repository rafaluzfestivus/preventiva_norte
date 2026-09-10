import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { BenefitsWhyUs } from "@/components/sections/BenefitsWhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { Resources } from "@/components/sections/Resources";
import { pt } from "@/dictionaries/pt";

export default function Home() {
  return (
    <>
      <Hero dict={pt.hero} basePath="" />
      <TrustBar dict={pt.trustBar} />
      <Services dict={pt.services} basePath="" />
      <BenefitsWhyUs benefits={pt.benefits} whyUs={pt.whyUs} />
      <AboutUs dict={pt.aboutUs} />
      <Testimonials dict={pt.testimonials} />
      <Resources dict={pt.resources} />
      <ContactSection dict={pt.contact} />
    </>
  );
}
