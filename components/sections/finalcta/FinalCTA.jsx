import CTA from "./CTA";

const FinalCTA = () => {
  return (
    <div className="bg-[#BEBEC0] text-black flex flex-col justify-center items-center text-center px-10 py-14 md:px-20 md:py-20 gap-4">
      <h3 className="text-3xl md:text-4xl font-bold">
        Start Your Journey to Financial Freedom
      </h3>
      <p className="text-lg md:text-xl">
        Track smarter, save better, and let AI guide you to the financial future
        you deserve
      </p>

      {/* CTA Button - client component */}
      <CTA />
    </div>
  );
};

export default FinalCTA;
