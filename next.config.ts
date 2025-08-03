import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "cdn.jsdelivr.net"],
  },
  publicRuntimeConfig: {
    basePath: "", // Set your basePath value here
  },
};

export default nextConfig;
