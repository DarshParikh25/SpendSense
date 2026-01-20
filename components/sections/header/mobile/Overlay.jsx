"use client";

import { useState } from "react";

const Overlay = () => {
  const [open, setOpen] = useState(false); // change to redux state management later on

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => setOpen(false)} // just for reference, will be changed using redux later on
    />
  );
};

export default Overlay;
