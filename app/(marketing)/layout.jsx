import { Inter } from "next/font/google";

import "../globals.css";
import Footer from "@/components/footer/Footer";
import MarketingNav from "@/app/(marketing)/_component/marketing/header/MarketingNav";
import MarketingMobNav from "@/app/(marketing)/_component/marketing/header/mobile/MarketingMobNav";

export const metadata = {
  title: "Money at Your Fingertips",

  description: "One stop finance tracker web app.",

  openGraph: {
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function MarketingLayout({ children }) {
  return (
    <div>
      <header>
        <MarketingNav />
        <MarketingMobNav />
      </header>
      <main className="min-h-screen relative mt-24 z-0">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
