import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,  // 为了兼容 GitHub Pages
  reactStrictMode: true,
  assetPrefix: '.',
};

export default nextConfig;
