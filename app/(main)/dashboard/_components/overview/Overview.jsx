import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import { Suspense } from "react";
import RecentTransactions from "./recent-transactions/RecentTransactions";
import ExpenseBreakdown from "./expense-breakdown/ExpenseBreakdown";
import { db } from "@/data/db";

const Overview = () => {
  const transactions = db
    .flatMap((item) => item?.account.transactions ?? [])
    .map((tx, index) => ({
      ...tx,
      id: index + 1,
    }));

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      <Suspense fallback={<CardSkeleton />}>
        <RecentTransactions transactions={transactions} />
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <ExpenseBreakdown transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default Overview;
