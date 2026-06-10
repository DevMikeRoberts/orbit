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
    title: "Coming soon",
    blurb: "More on the way.",
    github: null,
    tags: [],
    accent: "#3b82f6",
  },
  {
    title: "Coming soon",
    blurb: "More on the way.",
    github: null,
    tags: [],
    accent: "#60a5fa",
  },
  {
    title: "Coming soon",
    blurb: "More on the way.",
    github: null,
    tags: [],
    accent: "#93c5fd",
  },
];
