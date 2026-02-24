import { Plus } from "lucide-react";

import Heading from "@/app/(main)/_components/Heading";
import AddAccount from "@/app/(main)/_components/AddAccount";
import { Button } from "@/components/ui/button";

const AccountsHeader = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <div className="flex flex-col justify-center items-baseline gap-2">
        <Heading title={"Accounts"} />

        <p className="text-base md:text-lg font-semibold">
          Manage and analyze your financial accounts
        </p>
      </div>

      <AddAccount>
        <Button
          variant="outline"
          className={"cursor-pointer bg-transparent hover:bg-[#25252d]"}
        >
          <Plus className="w-4 h-4" />
          <span className="font-semibold">Add Account</span>
        </Button>
      </AddAccount>
    </div>
  );
};

export default AccountsHeader;
