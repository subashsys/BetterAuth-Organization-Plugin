"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Notes" },
  { href: "/team", label: "Team" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="mt-4 flex gap-6 text-sm">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
                : "text-gray-500 hover:text-gray-900"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
