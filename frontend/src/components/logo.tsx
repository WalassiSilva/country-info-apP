import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl font-bold text-emerald-200"
    >
      <Globe />
    </Link>
  );
}
