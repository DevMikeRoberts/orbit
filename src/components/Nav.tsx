"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { label: string; href: string }[] = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Chat", href: "/chat" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-3">
      <Link
        href="/"
        className="text-sm font-semibold tracking-tight text-zinc-400 transition-colors hover:text-zinc-900"
      >
        @devmikeroberts
      </Link>
      <nav className="flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 backdrop-blur-xl border border-black/[0.06] shadow-sm">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              pathname.startsWith(link.href)
                ? "text-zinc-900 bg-black/10"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-black/5"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/michael_roberts_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 hover:bg-black/5"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
