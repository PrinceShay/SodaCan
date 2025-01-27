import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lenis } from "../components/functions/Lenis";
import GrainBackground from "@/components/functions/GrainBackground";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Unleash the Beast | MONSTER Energy",
  description:
    "We’re tearing down the old and rebuilding with a sharper edge. A fresh page, raw designs, and unapologetic vibes. The relaunch is in the works—stay tuned.",
};

const saphifen = localFont({
  src: "fonts/saphifen.otf",
  weight: "400",
  variable: "--font-saphifen", // Use only as a CSS variable
});

const bebasNeue = localFont({
  src: "fonts/BebasNeue.ttf",
  weight: "400",
  variable: "--font-bebasNeue", // Use only as a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saphifen.variable} ${bebasNeue.variable} antialiased bg-[#0C1110] text-white`}
      >
        <GrainBackground />
        <Navbar />
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
