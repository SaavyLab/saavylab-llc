import Link from "next/link";
import NavLink from "@/components/NavLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="container-page flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[--color-primary]" />
          <span className="text-sm tracking-wide text-white/90">SaavyLab LLC</span>
        </Link>
        <nav className="nav flex items-center gap-2">
          <NavLink href="/" exact>
            Home
          </NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/open-source">Open Source</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
