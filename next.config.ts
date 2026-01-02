import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for deployment
  output: 'export',
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // React compiler for better performance
  reactCompiler: true,
};

export default nextConfig;
