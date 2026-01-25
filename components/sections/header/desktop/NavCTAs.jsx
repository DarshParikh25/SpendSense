"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "../Login";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import LoggedInBtns from "../LoggedInBtns";

const NavCTAs = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="hidden md:flex w-fit justify-self-end justify-center items-center gap-4">
        {/* Dashboard and Profile btns - shown only if user is logged in */}
        {isLoggedIn && <LoggedInBtns />}

        {/* Login btn - shown only if user is logged out */}
        {!isLoggedIn && <Login />}
      </div>
    </TooltipProvider>
  );
};

export default NavCTAs;
