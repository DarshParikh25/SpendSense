import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Navlink from "./Navlink";

const Header = () => {
  return (
    <div className='fixed top-0 z-50 px-20 py-8 grid grid-cols-[1fr_auto_1fr] items-center bg-[#1d1e24]/50 backdrop-blur-md border-b w-full'>
      <Link href={"/"} aria-label='home' className='justify-self-start'>
        <Image
          src='/logos/dark-logo.svg'
          width={200}
          height={39}
          alt='logo'
          className='h-12 w-auto object-contain pointer-events-none'
        />
      </Link>
      <Navlink />
      <Button
        className={
          "justify-self-end bg-[#FB5756] font-bold text-white h-fit px-6 py-3 hover:cursor-pointer hover:bg-[#ff6f6f] transition-all"
        }
        asChild
      >
        <Link href={"/sign-in"} aria-label='login'>
          Login
        </Link>
      </Button>
    </div>
  );
};

export default Header;
