import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open source from SaavyLab LLC",
};

type Project = { name: string; description: string; href: string };

export default function OpenSourcePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Open Source</h1>
      <p className="text-white/80 max-w-prose">
        Coming soon - A selection of libraries and tools we maintain and use across our
        projects. More on our GitHub.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {/* {projects.map((p) => (
          <a key={p.name} href={p.href} className="card p-5">
            <div className="flex items-start justify-between">
              <h2 className="font-semibold">{p.name}</h2>
              <span className="h-2 w-2 rounded-full bg-[--color-tertiary]" />
            </div>
            <p className="mt-2 text-sm text-white/80">{p.description}</p>
          </a>
        ))} */}
      </div>
      <a className="inline-block text-sm" href="https://github.com/saavylab" target="_blank" rel="noreferrer">
        See more on GitHub →
      </a>
    </div>
  );
}
