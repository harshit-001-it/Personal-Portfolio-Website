import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Personal-Portfolio-Website",
  assetPrefix: "/Personal-Portfolio-Website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
