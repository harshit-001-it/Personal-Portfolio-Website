import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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
        className="font-sans bg-[#050505] text-[#ededed] antialiased selection:bg-blue-500/30 selection:text-blue-200"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
