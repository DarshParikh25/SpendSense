import { Suspense } from "react";

import { db } from "@/data/db";
import FilterTransactionsSkeleton from "../_components/transactions/FilterTransactionsSkeleton";
import TransactionTableSkeleton from "../_components/transactions/TransactionTableSkeleton";
import AllTransactionsTable from "./_components/AllTransactionsTable";
import Heading from "../_components/Heading";
import FilterWrapper from "../_components/transactions/FilterWrapper";

const TransactionPage = () => {
  const transactions = db
    .map((item) => ({
      ...item,
      account: {
        ...item.account,
        transactions: (item.account.transactions || []).map((tx) => ({
          ...tx,
          accountName: item.account.name,
        })),
      },
    }))
    .flatMap((item) => item?.account.transactions || [])
    .map((tx, index) => ({
      ...tx,
      id: index + 1,
    }));

  return (
    <div className="py-10 flex flex-col gap-10">
      <Heading title={"Recent Transactions"} className={"mb-10"} />

      <div className="flex flex-col gap-4">
        <Suspense fallback={<FilterTransactionsSkeleton count={3} />}>
          <FilterWrapper showAccountsSelectDropdown />
        </Suspense>

        <Suspense fallback={<TransactionTableSkeleton />}>
          <AllTransactionsTable transactions={transactions} />
        </Suspense>
      </div>
    </div>
  );
};

export default TransactionPage;
