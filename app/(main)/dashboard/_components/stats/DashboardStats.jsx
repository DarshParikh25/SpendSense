import getSavingsData from "@/lib/helper/finance/savings/getSavingsData";
import BudgetCard from "./budget/BudgetCard";
import HealthCard from "./HealthCard";
import SavingsCard from "./SavingsCard";
import getMonthlyComparison from "@/lib/helper/finance/getMonthlyComparison";
import { Suspense } from "react";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";

const DashboardStats = ({ accounts, health }) => {
  const comparison = getMonthlyComparison(accounts);

  const savingsData = getSavingsData(
    comparison.currentSavings,
    comparison.currentIncome,
    comparison.savingsTrend,
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <Suspense fallback={<CardSkeleton className={"h-40"} />}>
        <HealthCard health={health} />
      </Suspense>
      <Suspense fallback={<CardSkeleton className={"h-40"} />}>
        <BudgetCard />
      </Suspense>
      <Suspense fallback={<CardSkeleton className={"h-40"} />}>
        <SavingsCard savingsData={savingsData} />
      </Suspense>
    </div>
  );
};

export default DashboardStats;
