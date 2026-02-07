import Features from "@/app/(marketing)/_component/marketing/features/Features";
import FinalCTA from "@/app/(marketing)/_component/marketing/finalcta/FinalCTA";
import Guide from "@/app/(marketing)/_component/marketing/guide/Guide";
import Hero from "@/app/(marketing)/_component/marketing/hero/Hero";
import Stats from "@/app/(marketing)/_component/marketing/stats/Stats";
import Testimonials from "@/app/(marketing)/_component/marketing/testimonials/Testimonials";

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
