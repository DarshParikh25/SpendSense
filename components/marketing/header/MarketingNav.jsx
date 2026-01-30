import MarketingNavCTAs from "./MarketingNavCTAs";
import Logo from "@/components/Logo";
import NavLinks from "./NavLinks";

const MarketingNav = () => {
  return (
    <nav className="fixed top-0 z-60 w-full px-6 lg:px-16 sm:px-10 xl:px-20 py-8 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center justify-center bg-[#1d1e24]/50 backdrop-blur-md border-b">
      {/* Website Logo */}
      <Logo />

      {/* Nav Links */}
      <div className="hidden md:flex text-sm lg:text-[16px] gap-8 xl:gap-12 font-bold justify-self-center">
        <NavLinks />
      </div>

      {/* Nav CTAs */}
      <MarketingNavCTAs divClassName={"hidden md:flex"} />
    </nav>
  );
};

export default MarketingNav;
