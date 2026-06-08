"use client";

import { useState } from "react";
import { GlobeScene } from "@/components/globe/GlobeScene";
import { Header } from "@/components/Header";
import { ContactOverlay } from "@/components/ContactOverlay";

export type View = "home" | "contact";

export default function Home() {
  const [view, setView] = useState<View>("home");

  return (
    <div className="globe-page fixed inset-0">
      <GlobeScene view={view} />
      <Header view={view} onViewChange={setView} />
      <ContactOverlay view={view} onViewChange={setView} />
    </div>
  );
}
