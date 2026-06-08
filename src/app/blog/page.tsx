import Link from "next/link";
import { fetchBlogIndex } from "@/data/blog";

export default async function BlogPage() {
  const entries = await fetchBlogIndex();

  return (
    <div className="content-page min-h-screen bg-white">
      <main className="mx-auto max-w-2xl px-6 pt-24 pb-16">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Blog
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Thoughts and notes.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/blog/${entry.slug}`}
              className="group rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              <h2 className="text-sm font-semibold text-zinc-900 group-hover:text-zinc-700">
                {entry.title}
              </h2>
              {entry.date && (
                <p className="mt-0.5 text-xs text-zinc-400">{entry.date}</p>
              )}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
