import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalElements from "@/components/layout/GlobalElements";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreematha Earthmovers",
  description: "Strong Foundations. Reliable Earthmoving Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-[72px]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GlobalElements />
        <Analytics />
      </body>
    </html>
  );
}
