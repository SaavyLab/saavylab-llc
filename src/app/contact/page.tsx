import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SaavyLab LLC",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <div className="card p-5">
        <p className="text-white/80">We’d love to hear from you.</p>
        <p className="mt-2">
          Email: <a className="underline" href="mailto:jayson@saavylab.com">jayson@saavylab.com</a>
        </p>
      </div>
    </div>
  );
}

