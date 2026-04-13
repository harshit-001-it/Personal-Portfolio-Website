import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Personal-Portfolio-Website",
  assetPrefix: "/Personal-Portfolio-Website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
