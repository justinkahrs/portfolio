import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/u12TbZf.jpeg",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/contact', // Incoming request path
        destination: 'http://automation.servehttp.com/webhook-test/contact', // API URL
      },
    ];
  },
};
