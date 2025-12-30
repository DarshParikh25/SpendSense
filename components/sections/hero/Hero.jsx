import Image from "next/image";

import HeroCTA from "./HeroCTA";

const Hero = () => {
  return (
    <div className='mt-28 px-6 sm:px-12 md:px-20 py-8 md:py-16 flex flex-col justify-center items-center gap-20'>
      <div className='text-center flex flex-col justify-center items-center font-bold w-full gap-4'>
        <h1 className='text-[36px] sm:text-[42px] md:text-[64px] lg:text-[90px] leading-14 md:leading-18 lg:leading-24 lg:w-5xl'>
          Where <span className='text-[#FB5756]'>Spending</span> Finally Makes{" "}
          <span className='text-[#FB5756]'>Sense</span>
        </h1>
        <p className='text-md lg:text-2xl lg:w-3xl font-normal'>
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
        className='lg:h-129 xl:h-179 w-auto shadow-md object-contain pointer-events-none'
      />
    </div>
  );
};

export default Hero;
