import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://api.jdoodle.com/v1/execute/:path*", // Your backend or third-party API URL
  //     },
  //   ];
  // },
};

export default nextConfig;
