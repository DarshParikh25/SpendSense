import { Inter } from "next/font/google";

import "../globals.css";
import Footer from "@/components/sections/footer/Footer";
import Navbar from "@/components/sections/header/Navbar";
import MobileNav from "@/components/sections/header/mobile/MobileNav";
import StoreProvider from "../StoreProvider";

export const metadata = {
  title: "SpendSense",
  description: "One stop finance tracker web app.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1D1E24] text-[#BEBEC0]`}>
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
      </body>
    </html>
  );
}
