import { SignedIn, SignedOut } from "@clerk/nextjs";

import Login from "@/components/Login";
import MobileNavShell from "@/components/mobile/MobileNavShell";
import ProfileBtn from "@/components/ProfileBtn";
import NavLinks from "@/components/NavLinks";

const links = [
  { link: "Dashboard", href: "/dashboard" },
  { link: "Accounts", href: "/accounts" },
  { link: "Transactions", href: "/transactions" },
];

const DashboardMobNav = () => {
  return (
    <MobileNavShell drawerProps={{ justifyType: "justify-end" }}>
      <SignedIn>
        <div className="w-full flex flex-1 flex-col justify-between items-end">
          <div className="pr-8 flex flex-col md:hidden gap-12 font-bold">
            <NavLinks
              links={links}
              inactiveClassName="text-[#1e1e24] hover:text-black"
              activeClassName="text-[#000] underline underline-offset-4"
            />
          </div>

          <div
            className={`pr-6 pt-8 flex md:hidden w-full justify-end items-center gap-4 border-t`}
          >
            <ProfileBtn className={"text-[#1e1e24]"} showGreet />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>
    </MobileNavShell>
  );
};

export default DashboardMobNav;
