"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { link: "Features", href: "/features" },
  { link: "Guide", href: "/guide" },
  { link: "Testimonials", href: "/testimonials" },
];

const NavLinks = ({
  activeClassName = "text-white",
  inactiveClassName = "text-[#bebec0] hover:text-white",
}) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          className={
            pathname === link.href ? activeClassName : inactiveClassName
          }
          href={link.href}
          aria-label={link.link}
        >
          {link.link}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
