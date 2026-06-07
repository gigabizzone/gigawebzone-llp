import { Hero } from "@/components/Hero";
import { ServicePillars } from "@/components/home/ServicePillars";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Testimonials } from "@/components/home/Testimonials";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { SisterBrand } from "@/components/home/SisterBrand";
import { Process } from "@/components/home/Process";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePillars />
      <WhyChoose />
      <FeaturedWork />
      <Testimonials />
      <IndustriesServed />
      <SisterBrand />
      <Process />
      <FinalCta />
    </>
  );
}
