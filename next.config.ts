import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,  // 为了兼容 GitHub Pages
  reactStrictMode: true,
  basePath: '/out', // 设置应用的基础路径
  assetPrefix: '/out/'
};

export default nextConfig;
