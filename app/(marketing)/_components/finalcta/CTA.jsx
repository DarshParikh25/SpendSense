"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const CTA = () => {
  const { user } = useUser();

  return (
    <Button
      className={
        "mt-4 border border-black px-6 py-2 h-full text-sm md:text-[16px] bg-transparent font-bold hover:cursor-pointer hover:bg-[#c4c4c4] transition-all"
      }
      asChild
    >
      <Link
        href={user ? "/dashboard" : "/sign-in"}
        aria-label={`Button to ${user ? "Dashboard" : "Login"}`}
      >
        Get Started
      </Link>
    </Button>
  );
};

export default CTA;
