import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogEntry } from "@/data/blog";

export default async function BlogEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await fetchBlogEntry(slug);

  if (!entry) notFound();

  return (
    <div className="content-page min-h-screen bg-white">
      <main className="mx-auto max-w-2xl px-6 pt-24 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-zinc-900"
        >
          &larr; Back to blog
        </Link>

        <article className="mt-6">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900">
            {entry.title}
          </h1>
          {entry.date && (
            <p className="mt-1 text-xs text-zinc-400">{entry.date}</p>
          )}

          <div className="mt-6 whitespace-pre-wrap text-sm leading-relaxed text-zinc-700">
            {entry.body}
          </div>

          {entry.image && (
            <img
              src={entry.image}
              alt=""
              className="mt-6 rounded-lg border border-zinc-200"
            />
          )}
        </article>
      </main>
    </div>
  );
}
