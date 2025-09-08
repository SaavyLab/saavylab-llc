import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/app/blog/_posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "SaavyLab LLC blog",
};

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <div className="grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-5 block">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              {p.date ? (
                <span className="text-xs text-white/60">{p.date}</span>
              ) : null}
            </div>
            {p.summary ? (
              <p className="mt-1 text-sm text-white/80">{p.summary}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
