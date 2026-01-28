"use client";

import { Button } from "@/components/ui/button";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { LayoutDashboard } from "lucide-react";
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
      <UserButton
        appearance={{
          theme: dark,
          elements: {
            avatarBox: "!w-9 !h-9",
            userButtonPopoverActionButton__signOut: {
              color: "#FB5756",
            },
            userProfileSidebarItem__active: {
              backgroundColor: "#FB5756",
              color: "#FFFFFF",
            },
          },
        }}
      />
    </>
  );
};

export default LoggedInBtns;
