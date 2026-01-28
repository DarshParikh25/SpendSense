"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { link: "Features", href: "/features" },
  { link: "Guide", href: "/guide" },
  { link: "Testimonials", href: "/testimonials" },
];

const DesktopNav = () => {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <nav className="hidden md:flex text-sm lg:text-[16px] gap-8 xl:gap-12 font-bold justify-self-center">
      {!user &&
        navlinks.map((navlink, index) => (
          <Link
            key={index}
            className={
              pathname === navlink.href
                ? "text-white"
                : "text-[#BEBEC0] hover:text-[#ffffff]"
            }
            href={navlink.href}
            aria-label={navlink.link}
          >
            {navlink.link}
          </Link>
        ))}
    </nav>
  );
};

export default DesktopNav;
