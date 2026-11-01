import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/**",
      },
    ],
  },
};

export default nextConfig;
