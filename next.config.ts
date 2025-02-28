import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "3000",
  //       pathname: "/images/**",
  //       search: "",
  //     },
  //   ],
  // },
  // images: {
  //   domains: ["http://localhost:3000/"],
  // },
};

export default nextConfig;
