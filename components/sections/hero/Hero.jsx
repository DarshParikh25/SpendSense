import Image from "next/image";

import HeroCTA from "./HeroCTA";

const Hero = () => {
  return (
    <div className='mt-28 px-20 py-16 flex flex-col justify-center items-center gap-20'>
      <div className='text-center flex flex-col justify-center items-center font-bold w-full gap-4'>
        <h1 className='text-[96px] leading-24 w-5xl'>
          Where <span className='text-[#ff6f6f]'>Spending</span> Finally Makes{" "}
          <span className='text-[#ff6f6f]'>Sense</span>
        </h1>
        <p className='text-2xl w-3xl font-normal'>
          AI-powered expense tracking that analyzes your spending and delivers
          real-time insights to help you save more
        </p>
        <HeroCTA />
      </div>
      <Image
        src={"/Image.png"}
        width={1280}
        height={716}
        alt='hero image'
        className='h-179 w-auto shadow-md object-contain pointer-events-none'
      />
    </div>
  );
};

export default Hero;
