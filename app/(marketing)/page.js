import Features from "@/components/sections/features/Features";
import FinalCTA from "@/components/sections/finalcta/FinalCTA";
import Guide from "@/components/sections/guide/Guide";
import Hero from "@/components/sections/hero/Hero";
import Stats from "@/components/sections/stats/Stats";
import Testimonials from "@/components/sections/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Guide />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
