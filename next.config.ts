import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Optimize image loading
    dangerouslyAllowSVG: true,
    // Use lazy loading by default for all images
    unoptimized: false,
  },
};

export default nextConfig;
