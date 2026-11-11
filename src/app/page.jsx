import Hero from "@/components/Hero";
import PopularLinks from "@/components/PopularLinks";
import PremiumSection from "@/components/PremiumSection";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChooseSection from "@/components/WhyChooseSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PopularLinks />
      <PremiumSection />
      <Pricing />
      <Testimonials />
      <WhyChooseSection />
    </>
  );
}
