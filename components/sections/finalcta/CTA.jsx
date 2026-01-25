"use client";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import Link from "next/link";

const CTA = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Button
      className={
        "mt-4 border border-black px-6 py-2 h-full text-sm md:text-[16px] bg-transparent font-bold hover:cursor-pointer hover:bg-[#c4c4c4] transition-all"
      }
      asChild
    >
      <Link
        href={isLoggedIn ? "/dashbord" : "/login"}
        aria-label={`Button to ${isLoggedIn ? "Dashboard" : "Login"}`}
      >
        Get Started
      </Link>
    </Button>
  );
};

export default CTA;
