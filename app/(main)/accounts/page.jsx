import { db } from "@/data/db";

import getGridCols from "@/lib/helper/ui/getGridCols";

import SummaryRow from "./_components/SummaryRow";
import AccountCard from "./_components/AccountCard";
import AccountsHeader from "./_components/AccountsHeader";

export default function AccountsPage() {
  const accounts = db.map((item) => item.account);

  const gridClass = getGridCols(accounts.length);

  return (
    <div className="py-10 flex flex-col justify-center gap-10">
      {/* Header */}
      <AccountsHeader />

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
