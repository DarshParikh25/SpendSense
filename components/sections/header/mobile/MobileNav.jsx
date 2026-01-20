"use client";

import { useEffect, useState } from "react";

import Overlay from "./Overlay";
import Drawer from "./Drawer";
import Toggle from "./Toggle";

const MobileNav = () => {
  const [open, setOpen] = useState(false); // change to redux state management later on

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
