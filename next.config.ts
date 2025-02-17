import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build
  },
  /* config options here */
  images: {
    domains: ["lh3.googleusercontent.com","avatars.githubusercontent.com","res.cloudinary.com"],
  },
};

export default nextConfig;
