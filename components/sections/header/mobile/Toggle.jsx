"use client";

import { Menu, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { closeMobileNav, openMobileNav } from "@/lib/store/features/ui/uiSlice";

const Toggle = () => {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.ui.open);

  const handleClick = () => {
    open ? dispatch(closeMobileNav()) : dispatch(openMobileNav());
  };

  return (
    <button
      aria-label="Toggle navigation menu"
      onClick={handleClick}
      className="fixed right-6 top-8 z-70 text-[#bebec0] transition-colors hover:cursor-pointer"
    >
      {open ? <X /> : <Menu />}
    </button>
  );
};

export default Toggle;
