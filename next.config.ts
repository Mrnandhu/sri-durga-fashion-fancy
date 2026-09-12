import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["10.230.182.49"],
  devIndicators: false,
};

export default nextConfig;
