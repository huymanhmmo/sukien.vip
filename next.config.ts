import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sukien.vip',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
