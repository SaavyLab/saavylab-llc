import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About SaavyLab LLC",
};

export default function AboutPage() {
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>About SaavyLab</h1>
      <p>
        We’re a small studio building software for musicians — tools that help
        players practice deliberately, perform confidently, and stay inspired.
        We also publish dev blogs and share open-source packages born from our
        day-to-day work.
      </p>
      <p>
        Our flagship app is <a href="https://getorpheus.app" target="_blank" rel="noreferrer">Orpheus</a> — a
        music practice companion for iOS and Android.
      </p>
    </div>
  );
}

