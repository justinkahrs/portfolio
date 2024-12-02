/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/contact", // Incoming request path
        destination:
          "https://hook.us2.make.com/czl2sakrvu8n63iqrlfgbp5nwyyk14bp", // API URL
      },
    ];
  },
};

export default nextConfig;
