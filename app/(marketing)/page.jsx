import Features from "@/components/marketing/features/Features";
import FinalCTA from "@/components/marketing/finalcta/FinalCTA";
import Guide from "@/components/marketing/guide/Guide";
import Hero from "@/components/marketing/hero/Hero";
import Stats from "@/components/marketing/stats/Stats";
import Testimonials from "@/components/marketing/testimonials/Testimonials";

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
