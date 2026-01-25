"use client";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import Link from "next/link";

const HeroCTA = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-4 sm:gap-12 mt-2">
      <Button
        className={
          "px-6 py-5.5 text-sm sm:text-[16px] bg-[#FB5756] text-white font-bold hover:cursor-pointer hover:bg-[#ff6f6f] transition-all"
        }
        asChild
      >
        <Link
          href={isLoggedIn ? "/dashboard" : "/login"}
          aria-label={`Button to ${isLoggedIn ? "Dashboard" : "Login"}`}
        >
          Get Started
        </Link>
      </Button>
      <Button
        className={
          "px-6 py-5.5 text-sm sm:text-[16px] bg-transparent border border-[#bebec0] font-bold text-white hover:cursor-pointer hover:bg-[#24252c] transition-all"
        }
        asChild
      >
        <Link href={"/demo"} aria-label="Demo">
          Watch Demo
        </Link>
      </Button>
    </div>
  );
};

export default HeroCTA;
