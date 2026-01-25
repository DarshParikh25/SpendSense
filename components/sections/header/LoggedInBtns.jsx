"use client";

import { Button } from "@/components/ui/button";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";

import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LoggedInBtns = () => {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.ui.open);

  const handleDashboard = () => {
    if (open) {
      dispatch(closeMobileNav());
    }
  };

  return (
    <>
      {/* Dashboard Btn */}
      <TooltipWrapper content={"Dashboard"} hideOnDesktop>
        <Button
          className={cn(
            open ? "border-[#1D1E24]" : "border-[#BEBEC0]",
            "font-bold border",
          )}
          asChild
        >
          <Link href={"/dashboard"} onClick={handleDashboard}>
            <LayoutDashboard className="h-4 w-4" />
            <span className={open ? "inline" : "hidden lg:inline"}>
              Dashboard
            </span>
          </Link>
        </Button>
      </TooltipWrapper>

      {/* Profile Btn */}
      <TooltipWrapper content={"Profile"}>
        <Link href={"/profile"}>
          <Image
            src={"/profile/priya-sharma.png"}
            width={40}
            height={40}
            className="h-10 w-auto rounded-full object-cover hover:cursor-pointer focus:outline-none"
            alt="profile"
          />
        </Link>
      </TooltipWrapper>
    </>
  );
};

export default LoggedInBtns;
