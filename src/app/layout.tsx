import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshit Mishra | IT Engineer & Software Developer",
  description: "Portfolio of Harshit Mishra, an IT Engineer student passionate about software development, AI, and building scalable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-[#050505] text-[#ededed] antialiased selection:bg-blue-500/30 selection:text-blue-200`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
