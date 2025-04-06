import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
};

module.exports = {
  exportTrailingSlash: true,  // 确保生成的 URL 以斜杠结尾（适用于 GitHub Pages）
};

export default nextConfig;
