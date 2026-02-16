import Logo from "@/components/Logo";
import DashboardNavCTAs from "./DashboardNavCTAs";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Login from "@/components/Login";

const DashboardNav = () => {
  return (
    <nav className="fixed top-0 z-60 w-full px-6 lg:px-16 sm:px-10 xl:px-20 py-8 grid grid-cols-2 items-center justify-center bg-[#1d1e24]/50 backdrop-blur-md border-b">
      {/* Website Logo */}
      <Logo />

      {/* Nav CTAs */}
      <DashboardNavCTAs divClassName={"hidden md:flex"} />
    </nav>
  );
};

export default DashboardNav;
