import MarketingNavCTAs from "../MarketingNavCTAs";
import NavLinks from "../../../../../components/NavLinks";
import MobileNavShell from "@/components/mobile/MobileNavShell";

const links = [
  { link: "Features", href: "/features" },
  { link: "Guide", href: "/guide" },
  { link: "Testimonials", href: "/testimonials" },
];

const MarketingMobNav = () => {
  return (
    <MobileNavShell>
      <div className="flex flex-col gap-12 px-8">
        <NavLinks
          links={links}
          activeClassName="text-black"
          inactiveClassName="text-[#1e1e24] hover:text-black"
        />
      </div>
      <MarketingNavCTAs
        divClassName={
          "w-full border-t border-[#1e1e24] px-8 pt-8 flex justify-end items-center md:hidden"
        }
      />
    </MobileNavShell>
  );
};

export default MarketingMobNav;
