import { Inter } from "next/font/google";

import "./globals.css";
import StoreProvider from "./StoreProvider";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  // metadataBase: "",

  title: {
    default: "SpendSense",
    template: "%s | SpendSense",
  },

  description: "One stop finance tracker web app.",

  openGraph: {
    type: "website",
    siteName: "SpendSense",
    locale: "en_US",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#1e1e24] text-[#BEBEC0]`}>
          <StoreProvider>{children}</StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
