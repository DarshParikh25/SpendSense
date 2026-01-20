"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();

  const navlinks = [
    { link: "Features", href: "/features" },
    { link: "Guide", href: "/guide" },
    { link: "Testimonials", href: "/testimonials" },
  ];

  return (
    <nav className="hidden md:flex text-sm lg:text-[16px] gap-8 xl:gap-12 font-bold justify-self-center">
      {navlinks.map((navlink, index) => (
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
