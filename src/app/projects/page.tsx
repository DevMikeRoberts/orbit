import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-blue-400">✨ MY BEST WORK</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Projects<span className="text-blue-500">.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            A collection of my best work spanning web development, machine learning, and game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              style={{
                borderLeftColor: project.accent,
                borderLeftWidth: "4px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/50" />
              
              <div className="relative p-6 flex flex-col h-full">
                <div className="text-3xl font-bold text-slate-600 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>

                <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                  {project.blurb}
                </p>

                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56 4.56-1.53 7.84-5.83 7.84-10.91C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                    <span>View on GitHub</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 border-t border-slate-700">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>←</span>
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
