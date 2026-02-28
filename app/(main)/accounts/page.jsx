import { db } from "@/data/db";

import getGridCols from "@/lib/helper/ui/getGridCols";

import SummaryRow from "./_components/SummaryRow";
import AccountCard from "./_components/AccountCard";
import AccountsHeader from "./_components/AccountsHeader";
import AddAccount from "../_components/AddAccount";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AccountsPage() {
  const accounts = db.map((item) => item.account);

  const gridClass = getGridCols(accounts.length);

  return (
    <div className="py-10 flex flex-col justify-center gap-10">
      <div className="flex flex-col justify-center md:items-end gap-4 md:gap-1">
        {/* Header */}
        <AccountsHeader accounts={accounts} />

        <AddAccount>
          <Button
            variant="outline"
            className={"w-fit cursor-pointer bg-transparent hover:bg-[#25252d]"}
          >
            <Plus className="w-4 h-4" />
            <span className="font-semibold">Add Account</span>
          </Button>
        </AddAccount>
      </div>

      {/* Summary */}
      <SummaryRow accounts={accounts} />

      {/* Grid */}
      <div className={`grid gap-6 ${gridClass}`}>
        {accounts.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>
    </div>
  );
}
