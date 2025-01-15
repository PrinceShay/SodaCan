import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lenis } from "../components/functions/Lenis";
import GrainBackground from "@/components/functions/GrainBackground";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Unleash the Beast | MONSTER Energy",
  description:
    "We’re tearing down the old and rebuilding with a sharper edge. A fresh page, raw designs, and unapologetic vibes. The relaunch is in the works—stay tuned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-black font-mono`}>
        <GrainBackground />
        <Lenis>{children}</Lenis>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
