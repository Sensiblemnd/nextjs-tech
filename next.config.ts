import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ], // Allows Next.js to optimize and serve external images from images.unsplash.com domain
  },
};

export default nextConfig;
