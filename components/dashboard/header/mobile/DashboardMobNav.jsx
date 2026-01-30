import Drawer from "@/components/mobile/Drawer";
import Overlay from "@/components/mobile/Overlay";
import Toggle from "@/components/mobile/Toggle";
import DashboardNavCTAs from "../DashboardNavCTAs";

const DashboardMobNav = () => {
  return (
    <div className="md:hidden justify-self-end">
      {/* Toggle button */}
      <Toggle />

      {/* Overlay */}
      <Overlay />

      {/* Drawer */}
      <Drawer justifyType="justify-end">
        <DashboardNavCTAs
          divClassName={
            "w-full border-t border-[#1d1e24] px-8 pt-8 flex flex-col items-end justify-center md:hidden"
          }
        />
      </Drawer>
    </div>
  );
};

export default DashboardMobNav;
