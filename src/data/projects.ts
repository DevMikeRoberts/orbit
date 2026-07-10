export interface Project {
  title: string;
  blurb: string;
  github: string | null;
  tags: string[];
  accent: string;
}

export const projects: Project[] = [
  {
    title: "Orbit",
    blurb:
      "This very portfolio — a hand-shaded 3D globe with biographical pins, custom GLSL star streaks on camera drag, and a city-light night side.",
    github: "https://github.com/devmikeroberts/orbit",
    tags: ["Next.js", "Three.js", "GLSL", "React 19"],
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
    title: "Orbitfolio",
    blurb:
      "A reusable portfolio platform for creating interactive 3D globe portfolios — the same tech that powers this site, packaged as a deployable template.",
    github: "https://github.com/DevMikeRoberts/orbit-app",
    tags: ["Next.js", "Three.js", "TypeScript"],
    accent: "#059669",
  },
];
