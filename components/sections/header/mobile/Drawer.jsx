"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Login from "../Login";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import LoggedInBtns from "../LoggedInBtns";
import { cn } from "@/lib/utils";
import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";

const navlinks = [
  { link: "Features", href: "/features" },
  { link: "Guide", href: "/guide" },
  { link: "Testimonials", href: "/testimonials" },
];

const Drawer = () => {
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.ui.open);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleClick = () => {
    if (open) {
      dispatch(closeMobileNav());
    }
  };

  return (
    <aside
      className={cn(
        open ? "translate-x-0" : "translate-x-full",
        "fixed top-22 right-0 z-50 h-[90vh] w-[85%] max-w-sm bg-[#1d1e24] transform transition-transform duration-300 ease-out",
      )}
    >
      <nav className="flex flex-col justify-between items-end text-right h-full py-10 font-semibold bg-[#bebec0] text-[#1d1e24]">
        <div className="flex flex-col gap-6 px-8">
          {navlinks.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              onClick={handleClick}
              className={cn(
                pathname === nav.href
                  ? "text-[#3d4254]"
                  : "text-[#1d1e24] hover:text-[#3d4254]",
                "transition-all duration-300",
              )}
            >
              {nav.link}
            </Link>
          ))}
        </div>

        <div className="border-t border-[#1d1e24] w-full">
          <div className="pt-6 flex gap-6 px-8 justify-end items-center text-right">
            {isLoggedIn ? (
              // After logged in buttons - client component
              <LoggedInBtns />
            ) : (
              // Login button - client component
              <Login className="justify-self-end" />
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Drawer;
