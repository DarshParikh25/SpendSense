"use client";

import { useEffect } from "react";

import Overlay from "@/components/mobile/Overlay";
import Drawer from "@/components/mobile/Drawer";
import Toggle from "@/components/mobile/Toggle";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import MarketingNavCTAs from "../MarketingNavCTAs";
import NavLinks from "../NavLinks";

const MarketingMobNav = () => {
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
      <Drawer>
        <div className="flex flex-col gap-12 px-8">
          <NavLinks
            activeClassName="text-black"
            inactiveClassName="text-[#1d1e24] hover:text-black"
          />
        </div>
        <MarketingNavCTAs
          divClassName={
            "w-full border-t border-[#1d1e24] px-8 pt-8 flex justify-end items-center md:hidden"
          }
        />
      </Drawer>
    </div>
  );
};

export default MarketingMobNav;
