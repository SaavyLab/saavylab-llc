import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="container-page py-10 text-sm text-white/70">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SaavyLab LLC.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="https://staaf.app" className="hover:text-white" target="_blank" rel="noreferrer">
              Staaf
            </Link>
            <Link href="https://github.com/saavylab" className="hover:text-white" target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link href="https://twitter.com/saavylab" className="hover:text-white" target="_blank" rel="noreferrer">
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
