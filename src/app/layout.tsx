import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lenis } from "../components/functions/Lenis";
import GrainBackground from "@/components/functions/GrainBackground";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title: "Unleash the Beast | MONSTER Energy",
  description:
    "We’re tearing down the old and rebuilding with a sharper edge. A fresh page, raw designs, and unapologetic vibes. The relaunch is in the works—stay tuned.",
};

const saphifen = localFont({ src: 'fonts/saphifen.otf',weight:"400" })
// const bebasNeue = localFont({ src: 'fonts/bebasNeue.ttf',weight:"400" })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saphifen.className} antialiased bg-[#0C1110] text-white`}>
        <GrainBackground />
        <Lenis>{children}</Lenis>
        <FloatingCTA />
      </body>
    </html>
  );
}
