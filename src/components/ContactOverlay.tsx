"use client";

import type { View } from "@/app/page";

export function ContactOverlay({
  view,
  onViewChange,
}: {
  view: View;
  onViewChange: (v: View) => void;
}) {
  const open = view === "contact";

  return (
    <div
      className={`fixed inset-0 z-20 transition-all duration-500 ease-out ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => onViewChange("home")}
      />

      <div
        className={`absolute bottom-0 left-0 right-0 flex flex-col items-center gap-6 px-6 pb-10 pt-8 rounded-t-2xl bg-white/[0.06] backdrop-blur-2xl border-t border-white/[0.08] transition-transform duration-500 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="mailto:mikerobs238@hotmail.com"
          className="text-3xl font-light text-white/40 hover:text-white transition-all duration-300 tracking-tight"
        >
          mikerobs238@hotmail.com
        </a>
        <button
          onClick={() => onViewChange("home")}
          className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white/60 backdrop-blur-xl border border-white/[0.06] transition-all duration-300 hover:text-white hover:bg-white/20"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
