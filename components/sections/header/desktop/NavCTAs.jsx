import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import Login from "../Login";

const NavCTAs = () => {
  const isLoggedIn = false; // change to redux state management later on

  return (
    <TooltipProvider delayDuration={200}>
      <div className="hidden md:flex w-fit justify-self-end justify-center items-center gap-4">
        {/* Dashboard btn - shown only if user is logged in */}
        {isLoggedIn && (
          <TooltipWrapper content={"Dashboard"} hideOnDesktop>
            <Button className={"border border-[#BEBEC0] font-bold"} asChild>
              <Link href={"/dashboard"}>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden lg:inline">Dashboard</span>
              </Link>
            </Button>
          </TooltipWrapper>
        )}

        {/* Login btn - shown only if user is logged out */}
        {!isLoggedIn && (
          <Login
          // onClick={() => {  // just for reference, will be changed using redux later on
          //   setIsLoggedIn(true);
          // }}
          />
        )}

        {/* Profile btn - shown only if user is logged in */}
        {isLoggedIn && (
          <TooltipWrapper content={"Profile"}>
            <Link href={"/profile"}>
              <Image
                src={"/profile/priya-sharma.png"}
                width={40}
                height={40}
                className="h-10 w-auto rounded-full object-cover hover:cursor-pointer"
                alt="profile"
              />
            </Link>
          </TooltipWrapper>
        )}
      </div>
    </TooltipProvider>
  );
};

export default NavCTAs;
