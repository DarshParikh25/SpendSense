"use client";

import { useEffect } from "react";

import { useAppSelector } from "@/lib/store/hooks/hooks";
import Toggle from "./Toggle";
import Overlay from "./Overlay";
import Drawer from "./Drawer";

const MobileNavShell = ({ children, drawerProps = {} }) => {
  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="md:hidden justify-self-end">
      {/* Toggle button */}
      <Toggle isMenuOpen={isMenuOpen} />

      {/* Overlay */}
      <Overlay isMenuOpen={isMenuOpen} />

      {/* Drawer */}
      <Drawer {...drawerProps}>{children}</Drawer>
    </div>
  );
};

export default MobileNavShell;
