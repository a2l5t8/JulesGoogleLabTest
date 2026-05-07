import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the base path is correct for GitHub Pages
  // If your repo is named 'portfolio', set this to '/portfolio'
  // For a custom domain or username.github.io, you might not need this.
  // basePath: '/portfolio',
};

export default nextConfig;
