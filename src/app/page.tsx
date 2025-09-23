export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-6 md:grid-cols-5 md:gap-10">
        <div className="md:col-span-3">
          <div className="badge">
            <span className="inline-block h-2 w-2 rounded-full bg-[--color-primary]" />
            Makers of Staaf
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Software for musicians and the devs who support them.
          </h1>
          <p className="mt-4 text-white/80 max-w-prose">
            SaavyLab builds thoughtful tools for music practice, learning, and
            performance — and we share our process through developer blogs and
            open-source packages.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://staaf.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Explore Staaf
            </a>
            <a
              href="/open-source"
              className="btn btn-secondary"
            >
              Open Source
            </a>
          </div>
        </div>
        <div className="md:col-span-2 card p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <h2 className="text-xl font-semibold">What we’re working on</h2>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>• Staaf: iOS & Android companion for musicians</li>
            <li>• Developer blog: architecture notes, music tech R&D</li>
            <li>• OSS: utilities, UI, audio tooling</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <h3 className="font-semibold">Staaf</h3>
          <p className="mt-2 text-white/80 text-sm">
            Your practice companion. Structure sessions, ear training, and note taking.
          </p>
          <a className="mt-4 inline-block text-sm" href="https://staaf.app" target="_blank" rel="noreferrer">
            Visit staaf.app →
          </a>
        </div>
        <div className="card p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <h3 className="font-semibold">Open Source</h3>
          <p className="mt-2 text-white/80 text-sm">Reusable packages we've opensourced.</p>
          <a className="mt-4 inline-block text-sm" href="/open-source">
            Browse packages (coming soon!)→
          </a>
        </div>
        <div className="card p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <h3 className="font-semibold">Blog</h3>
          <p className="mt-2 text-white/80 text-sm">Deep dives on dev and music tech.</p>
          <a className="mt-4 inline-block text-sm" href="/blog">
            Read updates (also coming soon!)→
          </a>
        </div>
      </section>

      <section>
        <div className="card p-5 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-1 text-white/80 text-sm">Questions or ideas? We’d love to chat.</p>
          </div>
          <a className="btn btn-primary" href="mailto:jayson@saavylab.com">Email jayson@saavylab.com</a>
        </div>
      </section>
    </div>
  );
}
