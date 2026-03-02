import { Suspense } from "react";

import { db } from "@/data/db";

import Title from "./_components/Title";
import Stats from "./_components/stats/Stats";
import TitleSkeleton from "./_components/TitleSkeleton";
import TransactionOverview from "./_components/stats/TransactionOverview";

import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import PaginationShell from "@/app/(main)/_components/PaginationShell";
import TransactionTable from "@/app/(main)/_components/transactions/TransactionTable";
import FilterTransactions from "@/app/(main)/_components/transactions/FilterTransactions";
import TransactionTableSkeleton from "@/app/(main)/_components/transactions/TransactionTableSkeleton";
import FilterTransactionsSkeleton from "@/app/(main)/_components/transactions/FilterTransactionsSkeleton";
import getHealth from "@/lib/helper/finance/getHealth";
import getStats from "@/lib/helper/getStats";
import HealthStatus from "../_components/HealthStatus";

const AccountPage = async ({ params }) => {
  const { accountId } = await params;

  const accountDetails = db.find(
    (acc) => acc.account.id === Number(accountId),
  )?.account;

  const { income, expense } = getStats(accountDetails.transactions ?? []);

  const health = getHealth(income, expense, accountDetails.balance);

  return (
    <div className="overflow-x-hidden py-8 md:py-12 flex flex-col gap-10">
      {/* Title */}
      <Suspense
        fallback={
          <TitleSkeleton
            headingClassName={"h-14 w-40"}
            blClassName={"h-6 w-44"}
            trClassName={"h-10 w-35"}
            brClassName={"h-6 w-30"}
          />
        }
      >
        <Title accountDetails={accountDetails} health={health} />
      </Suspense>

      {/* Stats */}
      <Stats income={income} expense={expense} />

      {/* Overview */}
      <Suspense fallback={<CardSkeleton className={"h-180"} />}>
        <TransactionOverview />
      </Suspense>

      {/* Transactions Table */}
      <div className="flex flex-col gap-4">
        <Suspense fallback={<FilterTransactionsSkeleton count={2} />}>
          <FilterTransactions />
        </Suspense>

        <Suspense fallback={<TransactionTableSkeleton />}>
          <TransactionTable transactions={accountDetails.transactions} />
        </Suspense>

        <PaginationShell />
      </div>
    </div>
  );
};

export default AccountPage;
