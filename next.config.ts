import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    unoptimized: true,
  },
};
const nextConfig = {
  output: 'export',
  distDir: 'out',
};

module.exports = nextConfig;

export default nextConfig;
