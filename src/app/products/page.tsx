import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products by SaavyLab LLC",
};

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="card p-5">
        <h2 className="text-xl font-semibold">Orpheus</h2>
        <p className="mt-2 text-white/80 max-w-prose">
          A music education and practice companion designed to help you plan,
          track, and improve your sessions. Available on iOS and Android.
        </p>
        <div className="mt-4 flex gap-3">
          <a className="btn btn-primary" href="https://getorpheus.app" target="_blank" rel="noreferrer">
            Visit getorpheus.app
          </a>
        </div>
      </div>
    </div>
  );
}
