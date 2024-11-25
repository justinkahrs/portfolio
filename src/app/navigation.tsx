// app/navigation.tsx

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const pathname = usePathname();
  const activeTab = pathname === "/" ? "work" : pathname.replace("/", "");

  return (
    <div className="flex justify-center mb-6">
      <Link href="/" passHref legacyBehavior>
        <Button
          variant={activeTab === "work" ? "default" : "outline"}
          className="mr-2"
        >
          Work
        </Button>
      </Link>
      <Link href="/music" passHref legacyBehavior>
        <Button
          variant={activeTab === "music" ? "default" : "outline"}
          className="mr-2"
        >
          Music
        </Button>
      </Link>
      <Link href="/contact" passHref legacyBehavior>
        <Button variant={activeTab === "contact" ? "default" : "outline"}>
          Contact
        </Button>
      </Link>
    </div>
  );
}
