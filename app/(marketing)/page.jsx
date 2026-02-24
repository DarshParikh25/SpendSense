import Features from "@/app/(marketing)/_components/features/Features";
import FinalCTA from "@/app/(marketing)/_components/finalcta/FinalCTA";
import Guide from "@/app/(marketing)/_components/guide/Guide";
import Hero from "@/app/(marketing)/_components/hero/Hero";
import Stats from "@/app/(marketing)/_components/stats/Stats";
import Testimonials from "@/app/(marketing)/_components/testimonials/Testimonials";

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
