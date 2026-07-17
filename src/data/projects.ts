export interface Project {
  title: string;
  blurb: string;
  github: string | null;
  tags: string[];
  accent: string;
}

export const projects: Project[] = [
  {
    title: "Vibe Board",
    blurb:
      "Drag-and-drop Kanban board that delegates coding tasks to AI agents — GitHub Copilot, Claude Code, OpenAI Codex, and OpenCode — with real-time streaming, task groups, and git worktree isolation.",
    github: "https://github.com/DevMikeRoberts/vibe-board",
    tags: ["TypeScript", "React", "AI Agents", "Git Worktrees"],
    accent: "#7c3aed",
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
