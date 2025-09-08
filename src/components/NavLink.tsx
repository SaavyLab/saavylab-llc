"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & { exact?: boolean };

export default function NavLink({ href, exact, className, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(String(href) + "/");

  return (
    <Link
      href={href}
      className={
        "nav-pill " + (isActive ? "is-active" : "") + (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}
