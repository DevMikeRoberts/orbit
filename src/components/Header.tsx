"use client";

import Link from "next/link";
import type { View } from "@/app/page";

interface NavLink {
  label: string;
  href?: string;
  view?: View;
  external?: boolean;
}

const links: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Chat", href: "/chat" },
  { label: "Resume", href: "/michael_roberts_resume.pdf", external: true },
  { label: "Contact", view: "contact" },
];

export function Header({
  view,
  onViewChange,
}: {
  view: View;
  onViewChange: (v: View) => void;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-3">
      <button
        onClick={() => onViewChange("home")}
        className="text-sm font-semibold tracking-tight text-white/60 transition-colors hover:text-white"
      >
        @devmikeroberts
      </button>
      <nav className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 backdrop-blur-xl border border-white/[0.06]">
        {links.map((link) =>
          link.href && link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white hover:bg-white/10"
            >
              {link.label}
            </a>
          ) : link.href ? (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white hover:bg-white/10"
            >
              {link.label}
            </Link>
          ) : link.view ? (
            <button
              key={link.label}
              onClick={() => onViewChange(link.view!)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                view === link.view
                  ? "text-white bg-white/15"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ) : null,
        )}
      </nav>
    </header>
  );
}
