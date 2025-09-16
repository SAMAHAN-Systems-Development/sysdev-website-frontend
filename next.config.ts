import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "samahan.addu.edu.ph",
        pathname: "/sysdev/minio/sysdev-images/**",
      },
    ],
    domains: [
      "avatars.githubusercontent.com",
      "cdn.jsdelivr.net",
      "103.37.49.230",
    ],
  },
  publicRuntimeConfig: {
    basePath: "", // Set your basePath value here
  },
};

export default nextConfig;
