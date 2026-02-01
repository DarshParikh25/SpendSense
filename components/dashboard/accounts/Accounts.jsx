import { Card, CardContent } from "@/components/ui/card";
import ChoiceCard from "./ChoiceCard";

import { Plus } from "lucide-react";

const Accounts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
      {/* Add Account Card */}
      <Card
        className={
          "border-2 border-[#bebec0] px-4 py-8 cursor-pointer bg-transparent hover:bg-[#26272f]"
        }
      >
        <CardContent
          className={"h-full flex flex-col justify-center items-center gap-1"}
        >
          <Plus strokeWidth={2.5} className="w-7 h-7" />
          <span className="text-xl font-semibold">Add Account</span>
        </CardContent>
      </Card>

      {/* Cards for all Accounts */}
      <ChoiceCard />
    </div>
  );
};

export default Accounts;
