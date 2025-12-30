import { Inter } from "next/font/google";

import "../globals.css";
import Footer from "@/components/sections/footer/Footer";
import Header from "@/components/sections/header/Header";

export const metadata = {
  title: "SpendSense",
  description: "One stop finance tracker web app.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#1D1E24] text-[#BEBEC0]`}>
        <header>
          <Header />
        </header>
        <main className='min-h-screen'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
