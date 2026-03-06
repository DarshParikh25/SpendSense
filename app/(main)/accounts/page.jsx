import { db } from "@/data/db";
import { Plus } from "lucide-react";

import SummaryRow from "./_components/SummaryRow";
import AccountsHeader from "./_components/AccountsHeader";
import AddAccount from "../_components/AddAccount";
import { Button } from "@/components/ui/button";
import AccountsChoiceCard from "./_components/AccountsChoiceCard";

export default function AccountsPage() {
  const accounts = db.map((item) => item.account);

  return (
    <div className="py-10 flex flex-col justify-center gap-10">
      <div className="flex flex-row sm:flex-nowrap flex-wrap md:flex-col justify-center md:items-end gap-4 md:gap-1">
        {/* Header */}
        <AccountsHeader accounts={accounts} />

        <AddAccount>
          <Button
            variant="outline"
            className={
              "w-full sm:w-fit cursor-pointer bg-transparent hover:bg-[#25252c]"
            }
          >
            <Plus className="w-4 h-4" />
            <span className="font-semibold">Add Account</span>
          </Button>
        </AddAccount>
      </div>

      {/* Summary */}
      <SummaryRow accounts={accounts} />

      {/* Grid */}
      <AccountsChoiceCard accounts={accounts} />
    </div>
  );
}
