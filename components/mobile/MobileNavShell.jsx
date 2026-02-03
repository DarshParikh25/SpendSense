"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import Toggle from "./Toggle";
import Overlay from "./Overlay";
import MenuDrawer from "./MenuDrawer";

const MobileNavShell = ({ children, drawerProps = {} }) => {
  const dispatch = useAppDispatch();

  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMenuOverlay = () => {
    if (isMenuOpen) {
      dispatch(closeMobileNav());
    }
  };

  return (
    <div className="md:hidden justify-self-end">
      {/* Toggle button */}
      <Toggle isMenuOpen={isMenuOpen} />

      {/* Overlay */}
      <Overlay isOpen={isMenuOpen} handleClick={handleMenuOverlay} />

      {/* Drawer */}
      <MenuDrawer {...drawerProps}>{children}</MenuDrawer>
    </div>
  );
};

export default MobileNavShell;
