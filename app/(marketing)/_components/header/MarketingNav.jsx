import MarketingNavCTAs from "./MarketingNavCTAs";
import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import DesktopNavShell from "@/components/DesktopNavShell";

const links = [
  { link: "Features", href: "/features" },
  { link: "Guide", href: "/guide" },
  { link: "Testimonials", href: "/testimonials" },
];

const MarketingNav = () => {
  return (
    <DesktopNavShell>
      {/* Website Logo */}
      <Logo />

      {/* Nav Links */}
      <div className="hidden md:flex text-sm lg:text-[16px] gap-8 xl:gap-12 font-bold justify-self-center">
        <NavLinks links={links} />
      </div>

      {/* Nav CTAs */}
      <MarketingNavCTAs divClassName={"hidden md:flex"} />
    </DesktopNavShell>
  );
};

export default MarketingNav;
