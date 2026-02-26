import DashboardBtn from "@/components/DashboardBtn";
import ProfileBtn from "@/components/ProfileBtn";
import { TooltipProvider } from "@/components/ui/tooltip";
import AddTransactionBtn from "./AddTransactionBtn";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Login from "@/components/Login";

const DashboardNavCTAs = ({ divClassName }) => {
  return (
    <TooltipProvider delayDuration={200}>
      <SignedIn>
        <div
          className={`w-fit justify-self-end justify-center items-center gap-4
            ${divClassName}`}
        >
          {/* Dashboard btn */}
          <DashboardBtn />

          {/* Add Transaction btn */}
          <AddTransactionBtn />

          {/* Profile btn */}
          <ProfileBtn />
        </div>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </TooltipProvider>
  );
};

export default DashboardNavCTAs;
