import projects from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const entries = Object.entries(projects);

  return (
    <div className="content-page min-h-screen bg-white">
      <main className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Projects
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Things I&apos;ve built.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([slug, project]) => (
            <ProjectCard key={slug} project={project} slug={slug} />
          ))}
        </div>
      </main>
    </div>
  );
}
