import { SignedIn, SignedOut } from "@clerk/nextjs";

import Logo from "@/components/Logo";
import Login from "@/components/Login";
import ProfileBtn from "@/components/ProfileBtn";
import DesktopNavShell from "@/components/DesktopNavShell";
import NavLinks from "@/components/NavLinks";

const links = [
  { link: "Dashboard", href: "/dashboard" },
  { link: "Accounts", href: "/accounts" },
  { link: "Transactions", href: "/transactions" },
];

const DashboardNav = () => {
  return (
    <DesktopNavShell>
      {/* Website Logo */}
      <Logo />

      <div className="hidden md:flex text-sm lg:text-[16px] gap-8 xl:gap-12 font-bold justify-self-center">
        <NavLinks links={links} />
      </div>

      {/* Nav CTAs */}
      <div>
        <SignedIn>
          <div
            className={`hidden md:flex w-fit justify-self-end justify-center items-center gap-4`}
          >
            {/* Profile btn */}
            <ProfileBtn className={"text-white"} showGreet />
          </div>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </div>
    </DesktopNavShell>
  );
};

export default DashboardNav;
