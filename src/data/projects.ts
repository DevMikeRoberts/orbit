export interface Project {
  title: string;
  blurb: string;
  github: string | null;
  tags: string[];
  accent: string;
}

export const projects: Project[] = [
  {
    title: "Vibe Kanban",
    blurb:
      "A Kanban board built for orchestrating AI coding agents — plan, queue, and review agent-driven tasks across a project with a fast, drag-and-drop workflow.",
    github: "https://github.com/DevMikeRoberts/vibe-kanban",
    tags: ["React", "TypeScript", "Rust", "Tauri"],
    accent: "#1e40af",
  },
  {
    title: "BG Strip",
    blurb:
      "A zero-install, fully client-side background remover. Drop in a photo, an ONNX segmentation model removes the background on-device, and you download a transparent PNG — your image never leaves your machine.",
    github: "https://github.com/DevMikeRoberts/ai-background-remover",
    tags: ["HTML", "ONNX", "WebAssembly"],
    accent: "#7c3aed",
  },
  {
    title: "Project Zelda",
    blurb:
      "An 8-bit top-down dungeon crawler built in Unity for a university CS course — custom sprite sheets, tile-based collision maps, enemy AI, and an inventory system.",
    github: "https://github.com/DevMikeRoberts/project_zelda",
    tags: ["C#", "Unity"],
    accent: "#b45309",
  },
  {
    title: "Orbit App",
    blurb:
      "A full-featured React Native mobile app — smooth cross-platform navigation, real-time data sync, and a polished UI that feels at home on both iOS and Android.",
    github: "https://github.com/DevMikeRoberts/orbit-app",
    tags: ["React Native", "TypeScript", "Expo"],
    accent: "#0d9488",
  },
];
