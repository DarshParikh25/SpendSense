"use client";

import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch } from "@/lib/store/hooks/hooks";
import { cn } from "@/lib/utils";

const Overlay = ({ isMenuOpen }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isMenuOpen) {
      dispatch(closeMobileNav());
    }
  };

  return (
    <div
      className={cn(
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        "fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300",
      )}
      onClick={handleClick}
    />
  );
};

export default Overlay;
