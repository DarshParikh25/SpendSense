"use client";

import { Button } from "@/components/ui/button";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";

import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

const DashboardBtn = () => {
  const dispatch = useAppDispatch();

  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);

  const handleDashboard = () => {
    if (isMenuOpen) {
      dispatch(closeMobileNav());
    }
  };

  return (
    <TooltipWrapper content={"Dashboard"} hideOnDesktop>
      <Button
        className={cn(
          isMenuOpen
            ? "border-[#1D1E24] hover:bg-[#b9b9b9]"
            : "border-[#BEBEC0] hover:bg-[#16161b]",
          "font-bold border bg-transparent",
        )}
        asChild
      >
        <Link href={"/dashboard"} onClick={handleDashboard}>
          <LayoutDashboard className="h-4 w-4" />
          <span className={isMenuOpen ? "inline" : "hidden lg:inline"}>
            Dashboard
          </span>
        </Link>
      </Button>
    </TooltipWrapper>
  );
};

export default DashboardBtn;
