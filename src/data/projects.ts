export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  github: string;
  tags: string[];
}

const projects: Record<string, Project> = {
  "openapi-stitcher": {
    title: "OpenAPI Stitcher",
    description:
      "CLI tool that merges multiple OpenAPI 3.x specs into a single unified specification. Handles circular refs, deduplicates schemas, and preserves doc comments.",
    thumbnail: "/projects/stitcher.svg",
    link: "https://github.com/DevMikeRoberts/openapi-stitcher",
    github: "https://github.com/DevMikeRoberts/openapi-stitcher",
    tags: ["TypeScript", "Node.js", "CLI"],
  },
  "distributed-llm-swarm": {
    title: "Distributed LLM Agent Swarm CLI",
    description:
      "Auto-provisions cloud servers to run distributed AI agent swarms. Coordinates multi-agent inference across a cluster with zero-config setup.",
    thumbnail: "/projects/swarm.svg",
    link: "https://github.com/DevMikeRoberts/agent-swarm",
    github: "https://github.com/DevMikeRoberts/agent-swarm",
    tags: ["Rust", "AWS", "WebSocket"],
  },
  orbit: {
    title: "Orbit — Personal Site",
    description:
      "Interactive 3D globe portfolio built with Three.js, React Three Fiber, and Next.js. Features animated location pins, Konami code easter egg, and Vercel edge deployment.",
    thumbnail: "/projects/orbit.svg",
    link: "https://m-roberts.com",
    github: "https://github.com/DevMikeRoberts/orbit",
    tags: ["Next.js", "Three.js", "Tailwind CSS"],
  },
};

export default projects;
