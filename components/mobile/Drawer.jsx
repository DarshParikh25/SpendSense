"use client";

import { useUser } from "@clerk/nextjs";

import { useAppSelector } from "@/lib/store/hooks/hooks";
import { cn } from "@/lib/utils";

const Drawer = ({ justifyType = "justify-between", children }) => {
  const { isLoaded } = useUser();

  const open = useAppSelector((state) => state.ui.open);

  if (!isLoaded) {
    return null;
  }

  return (
    <aside
      className={cn(
        open ? "translate-x-0" : "translate-x-full",
        "fixed top-22 right-0 z-50 h-[90vh] w-[85%] max-w-sm bg-[#1d1e24] transform transition-transform duration-300 ease-in-out",
      )}
    >
      <nav
        className={cn(
          "flex flex-col items-end text-right h-full pt-20 pb-10 font-semibold bg-[#bebec0] text-[#1d1e24]",
          justifyType,
        )}
      >
        {children}
      </nav>
    </aside>
  );
};

export default Drawer;
