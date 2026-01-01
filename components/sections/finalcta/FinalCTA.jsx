import { Button } from "@/components/ui/button";
import Link from "next/link";

const FinalCTA = () => {
  const loggedIn = false;

  return (
    <div className='bg-[#BEBEC0] text-black flex flex-col justify-center items-center text-center px-10 py-14 md:px-20 md:py-20 gap-4'>
      <h3 className='text-3xl md:text-4xl font-bold'>
        Start Your Journey to Financial Freedom
      </h3>
      <p className='text-lg md:text-xl'>
        Track smarter, save better, and let AI guide you to the financial future
        you deserve
      </p>
      <Link
        href={loggedIn ? "/dashbord" : "/login"}
        aria-label={`Button to ${loggedIn ? "Dashboard" : "Login"}`}
      >
        <Button
          className={
            "mt-4 border border-black px-6 py-2 h-full text-sm md:text-[16px] bg-transparent font-bold hover:cursor-pointer hover:bg-[#c4c4c4] transition-all"
          }
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default FinalCTA;
