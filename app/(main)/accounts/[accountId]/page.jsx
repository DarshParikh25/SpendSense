import { Suspense } from "react";

import { db } from "@/data/db";
import Title from "./_components/Title";
import TransactionOverview from "./_components/stats/TransactionOverview";
import TitleSkeleton from "./_components/TitleSkeleton";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import FilterTransactions from "./_components/transactions/FilterTransactions";
import TransactionTable from "./_components/transactions/TransactionTable";
import TransactionTableSkeleton from "./_components/transactions/TransactionTableSkeleton";
import FilterTransactionsSkeleton from "./_components/transactions/FilterTransactionsSkeleton";

const AccountPage = async ({ params }) => {
  const { accountId } = await params;

  const accountDetails = db.find(
    (acc) => acc.account.id === Number(accountId),
  )?.account;

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
        <Title accountDetails={accountDetails} />
      </Suspense>

      {/* Overview */}
      <Suspense fallback={<CardSkeleton className={"h-180"} />}>
        <TransactionOverview />
      </Suspense>

      {/* Transactions Table */}
      <div className="flex flex-col gap-4">
        <Suspense fallback={<FilterTransactionsSkeleton />}>
          <FilterTransactions />
        </Suspense>

        <Suspense
          fallback={
            <TransactionTableSkeleton
              rows={accountDetails?.transactions.length}
            />
          }
        >
          <TransactionTable accountDetails={accountDetails} />
        </Suspense>
      </div>
    </div>
  );
};

export default AccountPage;
