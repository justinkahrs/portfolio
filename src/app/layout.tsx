// app/layout.tsx

import React from "react";
import "./globals.css";
import Image from "next/image";
import Navigation from "./navigation";

export const metadata = {
  title: "Justin Kahrs Portfolio",
  description: "Developer, automation specialist, and musician.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* You can include additional <meta> tags here */}</head>
      <body>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
            {/* Header */}
            <h1 className="text-3xl font-bold text-center mb-6">
              Justin Kahrs
            </h1>

            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/profilepic.jpeg"
                alt="Justin Kahrs"
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <p className="text-center text-gray-600 max-w-xs">
                Developer, automation specialist, and musician. Passionate about
                crafting efficient solutions and beautiful harmonies.
              </p>
            </div>

            {/* Navigation */}
            <Navigation />

            {/* Dynamic Content */}
            {children}
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Justin Kahrs. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
