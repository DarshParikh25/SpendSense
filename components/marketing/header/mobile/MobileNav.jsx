"use client";

import { useEffect } from "react";

import Overlay from "./Overlay";
import Drawer from "./Drawer";
import Toggle from "./Toggle";
import { useAppSelector } from "@/lib/store/hooks/hooks";

const MobileNav = () => {
  const open = useAppSelector((state) => state.ui.open);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <div className="md:hidden justify-self-end">
      {/* Toggle button */}
      <Toggle />

      {/* Overlay */}
      <Overlay />

      {/* Drawer */}
      <Drawer />
    </div>
  );
};

export default MobileNav;
