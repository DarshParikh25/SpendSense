"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "../Login";
import LoggedInBtns from "../LoggedInBtns";

const NavCTAs = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="hidden md:flex w-fit justify-self-end justify-center items-center gap-4">
        {/* Login btn - shown only if user is signed out */}
        <SignedOut>
          <Login />
        </SignedOut>

        {/* Dashboard and Profile btns - shown only if user is logged in */}
        <SignedIn>
          <LoggedInBtns />
        </SignedIn>
      </div>
    </TooltipProvider>
  );
};

export default NavCTAs;
