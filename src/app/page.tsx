"use client";

import { useState } from "react";
import { GlobeScene } from "@/components/globe/GlobeScene";
import { Header } from "@/components/Header";
import { ContactOverlay } from "@/components/ContactOverlay";
import { ProjectsOverlay } from "@/components/ProjectsOverlay";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";

export type View = "home" | "contact" | "projects";

const LIVE_LOCATION = { lat: 33.749, lng: -84.388 };

export default function Home() {
  const [view, setView] = useState<View>("home");

  return (
    <>
      <GlobeScene view={view} locations={locations} liveLocation={LIVE_LOCATION} />
      <Header
        view={view}
        onViewChange={setView}
        handle="@devmikeroberts"
        resumeUrl="/michael_roberts_resume.pdf"
      />
      <ContactOverlay view={view} onViewChange={setView} email="hello@m-roberts.com" />
      <ProjectsOverlay view={view} onViewChange={setView} projects={projects} />

      <a
        href="/create"
        className="fixed bottom-6 right-6 z-10 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl border border-white/[0.06] transition-all hover:bg-white/15 hover:text-white"
      >
        <span className="text-sm">🌍</span>
        Create your Orbit
        <span className="text-white/40">→</span>
      </a>
    </>
  );
}
