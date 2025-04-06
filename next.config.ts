import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,  // 为了兼容 GitHub Pages
};

export default nextConfig;
