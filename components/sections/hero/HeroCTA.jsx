import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroCTA = () => {
  const loggedIn = false;

  return (
    <div className='flex-1 inline-flex flex-wrap justify-center items-center gap-4 sm:gap-12 mt-2'>
      <Link
        href={loggedIn ? "/dashboard" : "/login"}
        aria-label={loggedIn ? "Dashboard" : "Login"}
      >
        <Button
          className={
            "px-6 py-5.5 text-md bg-[#FB5756] text-white font-bold hover:cursor-pointer hover:bg-[#ff6f6f] transition-all"
          }
        >
          Get Started
        </Button>
      </Link>
      <Link href={"/demo"} aria-label='Demo'>
        <Button
          className={
            "px-6 py-5.5 text-md bg-transparent border border-[#bebec0] font-bold text-white hover:cursor-pointer hover:bg-[#24252c] transition-all"
          }
        >
          Watch Demo
        </Button>
      </Link>
    </div>
  );
};

export default HeroCTA;
