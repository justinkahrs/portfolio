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
            Creator of{" "}
            <Link href="https://o11n.life" passHref legacyBehavior>
              <a className="text-blue-500 hover:underline"> o11n</a>
            </Link>
            , an AI-augmented IDE to enable rapid development
          </li>
          <li>
            Web and application development (
            <Link
              href="https://justinkahrs.github.io/resume/"
              passHref
              legacyBehavior
            >
              <a className="text-blue-500 hover:underline">résumé</a>
            </Link>
            )
          </li>
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
          <li>Sound design for games and other commercial projects</li>
        </ul>
        <p className="text-gray-600 mt-2">
          <Link href="/contact" passHref legacyBehavior>
            <a className="text-blue-500 hover:underline">Contact me </a>
          </Link>
          to discuss how we can work together!
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
