"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Toggle = () => {
  const [open, setOpen] = useState(false); // change to redux state management later on

  return (
    <button
      aria-label="Toggle navigation menu"
      onClick={() => setOpen((prev) => !prev)} // just for reference, will be changed using redux later on
      className="fixed right-6 top-8 z-70 text-[#bebec0] transition-colors hover:cursor-pointer"
    >
      {open ? <X /> : <Menu />}
    </button>
  );
};

export default Toggle;
