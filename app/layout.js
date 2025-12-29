import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "SpendSense",
  description: "One stop finance tracker web app.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#1D1E24] text-[#BEBEC0]`}>
        <header className='bg-transparent w-full'>
          <Header />
        </header>
        <main className='min-h-screen'>{children}</main>
        <footer className='bg-white w-full text-black'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
