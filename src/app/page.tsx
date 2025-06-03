// app/page.tsx

import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Work() {
  return (
    <div>
      {/* Professional Services Offered */}
      <div className="mb-6">
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            AI and automation consulting via{" "}
            <a
              href="https://www.senna-automation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Senna Automation
            </a>
          </li>
          <li>Web and application development contracting</li>
          <li>Sound design for games and other commercial projects</li>
        </ul>
        <p className="text-gray-600 mt-2">
          Feel free to
          <Link
            href="https://justinkahrs.github.io/resume/"
            passHref
            legacyBehavior
          >
            <a className="text-blue-500 hover:underline"> read my resume </a>
          </Link>
          or
          <Link href="/contact" passHref legacyBehavior>
            <a className="text-blue-500 hover:underline"> contact me </a>
          </Link>
          to discuss how we can work together.
        </p>
      </div>

      {/* Social Links */}
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
    </div>
  );
}
