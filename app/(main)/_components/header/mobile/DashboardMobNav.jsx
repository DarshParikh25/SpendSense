import DashboardNavCTAs from "../DashboardNavCTAs";
import MobileNavShell from "@/components/mobile/MobileNavShell";

const DashboardMobNav = () => {
  return (
    <MobileNavShell drawerProps={{ justifyType: "justify-end" }}>
      <DashboardNavCTAs
        divClassName={
          "w-full border-t border-[#1d1e24] px-8 pt-8 flex flex-col items-end justify-center md:hidden"
        }
      />
    </MobileNavShell>
  );
};

export default DashboardMobNav;
