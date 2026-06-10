"use client";

import { useState } from "react";
import { GlobeScene } from "@/components/globe/GlobeScene";
import { Header } from "@/components/Header";
import { ContactOverlay } from "@/components/ContactOverlay";
import { ProjectsOverlay } from "@/components/ProjectsOverlay";

export type View = "home" | "contact" | "projects";

export default function Home() {
  const [view, setView] = useState<View>("home");

  return (
    <>
      <GlobeScene view={view} />
      <Header view={view} onViewChange={setView} />
      <ContactOverlay view={view} onViewChange={setView} />
      <ProjectsOverlay view={view} onViewChange={setView} />
    </>
  );
}
