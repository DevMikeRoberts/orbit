export interface Location {
  id: string;
  city: string;
  place: string;
  lat: number;
  lng: number;
  role: string;
  description: string;
  emoji: string;
  date: string;
  color: string;
}

export const locations: Location[] = [
  {
    id: "atlanta",
    city: "Atlanta",
    place: "📍 Georgia",
    lat: 33.749,
    lng: -84.388,
    role: "Senior Software Engineer — Cargill",
    description:
      "Architecting cloud-native platforms. Built reusable Terraform modules that cut infra provisioning by 90%. OpenTelemetry, Prometheus, Grafana, incident response.",
    emoji: "🏗️",
    date: "Nov 2024 — Present",
    color: "#60a5fa",
  },
  {
    id: "atlanta-emory",
    city: "Atlanta",
    place: "🎓 Emory University",
    lat: 33.790,
    lng: -84.324,
    role: "B.S. Computer Science",
    description:
      "Graduated 2022. AWS Certified Solutions Architect — Associate.",
    emoji: "🎓",
    date: "2018 — 2022",
    color: "#a78bfa",
  },
  {
    id: "seattle",
    city: "Seattle",
    place: "☁️ Amazon Web Services",
    lat: 47.615,
    lng: -122.335,
    role: "Solutions Architect",
    description:
      "Designed cloud-native solutions on EC2, Lambda, S3, RDS. Built serverless apps and automation with Python, JS, and SQL.",
    emoji: "💼",
    date: "Jul 2022 — Apr 2023",
    color: "#34d399",
  },
  {
    id: "seattle-intern",
    city: "Seattle",
    place: "☁️ Amazon Web Services",
    lat: 47.618,
    lng: -122.340,
    role: "SDE Intern",
    description:
      "Built serverless apps with Lambda, API Gateway, DynamoDB. Developed a scalable chatbot platform.",
    emoji: "🛠️",
    date: "May 2021 — Aug 2021",
    color: "#f472b6",
  },
  {
    id: "projects",
    city: "Remote",
    place: "🌐 Distributed",
    lat: 39.828,
    lng: -98.579,
    role: "Side Projects",
    description:
      "LLM Agent Swarm CLI — auto-provisions servers for distributed AI agent swarms. Location discovery platform with geolocation & mapping APIs.",
    emoji: "🚀",
    date: "Ongoing",
    color: "#fbbf24",
  },
];
