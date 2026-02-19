import Features from "@/app/(marketing)/_components/marketing/features/Features";
import FinalCTA from "@/app/(marketing)/_components/marketing/finalcta/FinalCTA";
import Guide from "@/app/(marketing)/_components/marketing/guide/Guide";
import Hero from "@/app/(marketing)/_components/marketing/hero/Hero";
import Stats from "@/app/(marketing)/_components/marketing/stats/Stats";
import Testimonials from "@/app/(marketing)/_components/marketing/testimonials/Testimonials";

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
