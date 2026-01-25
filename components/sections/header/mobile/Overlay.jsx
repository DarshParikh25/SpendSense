"use client";

import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { cn } from "@/lib/utils";

const Overlay = () => {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.ui.open);

  const handleClick = () => {
    if (open) {
      dispatch(closeMobileNav());
    }
  };

  return (
    <div
      className={cn(
        open ? "opacity-100" : "opacity-0 pointer-events-none",
        "fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300",
      )}
      onClick={handleClick}
    />
  );
};

export default Overlay;
