import DashboardBtn from "@/components/DashboardBtn";
import ProfileBtn from "@/components/ProfileBtn";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import AddTransactionBtn from "./AddTransactionBtn";

const DashboardNavCTAs = ({ divClassName }) => {
  return (
    <TooltipProvider delayDuration={200}>
      <div
        className={cn(
          "w-fit justify-self-end justify-center items-center gap-4",
          divClassName,
        )}
      >
        {/* Dashboard btn */}
        <DashboardBtn />

        {/* Add Transaction btn */}
        <AddTransactionBtn />

        {/* Profile btn */}
        <ProfileBtn />
      </div>
    </TooltipProvider>
  );
};

export default DashboardNavCTAs;
