import { Inter } from "next/font/google";

import "../globals.css";
import Footer from "@/components/marketing/footer/Footer";
import Navbar from "@/components/marketing/header/Navbar";
import MobileNav from "@/components/marketing/header/mobile/MobileNav";
import StoreProvider from "../StoreProvider";

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
    <StoreProvider>
      <header>
        <Navbar />
        <MobileNav />
      </header>
      <main className="min-h-screen relative mt-24 z-0">{children}</main>
      <footer>
        <Footer />
      </footer>
    </StoreProvider>
  );
}
