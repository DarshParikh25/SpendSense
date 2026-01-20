"use client";

import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Login from "../Login";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
  { link: "Features", href: "/features" },
  { link: "Guide", href: "/guide" },
  { link: "Testimonials", href: "/testimonials" },
];

const Drawer = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false); // change to redux state management later on
  const isLoggedIn = false; // change to redux state management later on

  return (
    <aside
      className={`fixed top-22 right-0 z-50 h-[90vh] w-[85%] max-w-sm bg-[#1d1e24] transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <nav className="flex flex-col justify-between items-end text-right h-full py-10 font-semibold bg-[#bebec0] text-[#1d1e24]">
        <div className="flex flex-col gap-6 px-8">
          {navlinks.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              onClick={() => setOpen(false)} // just for reference, will be changed using redux later on
              className={`${
                pathname === nav.href
                  ? "text-[#3d4254]"
                  : "text-[#1d1e24] hover:text-[#3d4254]"
              } transition-all duration-300`}
            >
              {nav.link}
            </Link>
          ))}
        </div>

        <div className="border-t border-[#1d1e24] w-full">
          <div className="pt-6 flex gap-6 px-8 justify-end items-center text-right">
            {isLoggedIn ? (
              <>
                <Button
                  className={
                    "border border-[#1d1e24] font-bold bg-transparent hover:bg-[#b9b9b9]"
                  }
                  asChild
                >
                  <Link
                    href={"/dashboard"}
                    onClick={() => setOpen(false)} // just for reference, will be changed using redux later on
                    className="max-w-fit"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </Button>
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)} // just for reference, will be changed using redux later on
                  className="max-w-fit"
                >
                  <Image
                    src={"/profile/priya-sharma.png"}
                    width={40}
                    height={40}
                    alt="Profile"
                    className="h-10 w-auto object-cover hover:cursor-pointer focus:outline-none"
                  />
                </Link>
              </>
            ) : (
              <Login className="justify-self-end" />
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Drawer;
