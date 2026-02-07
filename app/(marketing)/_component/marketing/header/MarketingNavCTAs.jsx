"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";

import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "./Login";
import { cn } from "@/lib/utils";
import DashboardBtn from "@/components/DashboardBtn";
import ProfileBtn from "@/components/ProfileBtn";

const MarketingNavCTAs = ({ divClassName }) => {
  return (
    <TooltipProvider delayDuration={200}>
      <div
        className={cn(
          "w-fit justify-self-end justify-center items-center gap-4",
          divClassName,
        )}
      >
        {/* Login btn - shown only if user is signed out */}
        <SignedOut>
          <Login />
        </SignedOut>

        {/* Dashboard and Profile btns - shown only if user is logged in */}
        <SignedIn>
          <DashboardBtn />
          <ProfileBtn />
        </SignedIn>
      </div>
    </TooltipProvider>
  );
};

export default MarketingNavCTAs;
