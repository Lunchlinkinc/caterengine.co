import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/blog/best-restaurant-catering-operating-support-canada",
        destination: "/blog/best-restaurant-catering-operating-support-usa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
