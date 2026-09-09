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
import { pt } from "@/dictionaries/pt";

export default function Home() {
  return (
    <>
      <Hero dict={pt.hero} basePath="" />
      <TrustBar dict={pt.trustBar} />
      <Services dict={pt.services} />
      <Benefits dict={pt.benefits} />
      <WhyUs dict={pt.whyUs} />
      <AboutUs dict={pt.aboutUs} />
      <Gallery dict={pt.gallery} />
      <Testimonials dict={pt.testimonials} />
      <Resources dict={pt.resources} />
      <ContactSection />
    </>
  );
}
