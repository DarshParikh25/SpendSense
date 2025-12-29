"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();

  const navlinks = [
    { link: "Features", href: "/features" },
    { link: "Guide", href: "/guide" },
    { link: "Testimonials", href: "/testimonials" },
  ];

  return (
    <div className='px-20 py-14 flex justify-between items-center'>
      <Link href={"/"}>
        <Image src='/logos/dark-logo.svg' width={200} height={39} alt='logo' />
      </Link>
      <nav className='flex gap-12 font-bold'>
        {navlinks.map((navlink, index) => (
          <Link
            key={index}
            className={
              pathname === navlink.href
                ? "text-white"
                : "text-[#BEBEC0] hover:text-[#ffffff]"
            }
            href={navlink.href}
          >
            {navlink.link}
          </Link>
        ))}
      </nav>
      <Button
        className={
          "bg-[#FB5756] font-bold text-white h-fit px-6 py-3 hover:cursor-pointer hover:bg-[#ff6f6f] transition-all"
        }
        asChild
      >
        <Link href={"/sign-in"}>Login</Link>
      </Button>
    </div>
  );
};

export default Header;
