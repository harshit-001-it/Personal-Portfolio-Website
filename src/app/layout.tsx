import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

// Removing Geist fonts due to download failure in this environment
// We'll use system font stack defined in globals.css

export const metadata: Metadata = {
  title: "Harshit Mishra | IT Engineer & AI Enthusiast",
  description: "Personal portfolio of Harshit Mishra - IT Engineer, Software Developer, and ML Engineer specializing in intelligent systems and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased font-sans bg-black text-white cursor-none">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
