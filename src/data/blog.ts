export interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  body: string;
  image?: string;
}

const REMOTE_URL = "https://m-roberts.com/blog-data";

export async function fetchBlogIndex(): Promise<Omit<BlogEntry, "body">[]> {
  try {
    const res = await fetch(`${REMOTE_URL}/index.json`);
    if (!res.ok) throw new Error("fetch failed");
    return await res.json();
  } catch {
    return fallbackIndex;
  }
}

export async function fetchBlogEntry(
  slug: string,
): Promise<BlogEntry | null> {
  try {
    const res = await fetch(`${REMOTE_URL}/${slug}.txt`);
    if (!res.ok) throw new Error("fetch failed");
    const text = await res.text();
    const lines = text.split("\n");
    const title = lines[0].trim();
    const body = lines.slice(1).join("\n").trim();
    return { slug, title, date: "", body };
  } catch {
    return fallbackEntries.find((e) => e.slug === slug) ?? null;
  }
}

const fallbackIndex: Omit<BlogEntry, "body">[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-06-08",
  },
  {
    slug: "building-orbit",
    title: "Building Orbit",
    date: "2026-06-07",
  },
];

const fallbackEntries: BlogEntry[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-06-08",
    body: `Welcome to my blog.

This is a plain text entry. The first line becomes the title and the rest is the body content.

Images (jpg, png) can be displayed alongside entries. They'll show up below the body text.

More entries coming soon.`,
  },
  {
    slug: "building-orbit",
    title: "Building Orbit",
    date: "2026-06-07",
    body: `Orbit is an interactive 3D globe portfolio built with Three.js and React Three Fiber.

It features animated location pins with company info cards, a live location marker with ping animation, atmospheric glow effects, a cloud layer, and a Konami code easter egg that triggers a Halo-themed spin animation.

The site is deployed on Vercel's edge network with a custom domain at m-roberts.com.

Key technical decisions:
- Next.js 16 with App Router
- Three.js / React Three Fiber for 3D
- Tailwind CSS v4 for styling
- Docker multi-stage build for ECS deployment
- Vercel edge deployment with standalone output`,
  },
];
