import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Stats />
      <WhyChoose />
      <Portfolio />
      <Blog />
      <Contact />
      <CTA />
    </>
  );
}
