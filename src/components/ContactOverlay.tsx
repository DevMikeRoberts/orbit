"use client";

import type { View } from "@/app/page";

const EMAIL = "hello@m-roberts.com";

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
      aria-hidden={!open}
    >
      <aside
        className={`contact-panel ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="Contact"
      >
        <button
          className="panel-close"
          onClick={() => onViewChange("home")}
          aria-label="Close contact"
        >
          ✕
        </button>

        <div className="contact-mega">
          <a href={`mailto:${EMAIL}`} className="contact-mega-email">
            {EMAIL}
          </a>
        </div>
      </aside>
    </div>
  );
}
