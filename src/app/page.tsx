// app/page.tsx

import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Work() {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center">
      <a
        href="https://x.com/justin_kahrs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-700 hover:text-blue-500 mb-2 sm:mb-0"
      >
        <Twitter className="mr-2" />
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/justin-k-84138b152/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-700 hover:text-blue-500 mb-2 sm:mb-0"
      >
        <Linkedin className="mr-2" />
        LinkedIn
      </a>
      <a
        href="https://github.com/justinkahrs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-700 hover:text-blue-500"
      >
        <Github className="mr-2" />
        GitHub
      </a>
    </div>
  );
}
