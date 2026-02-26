import { Suspense } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

import requiresAuth from "@/lib/auth/requiresAuth";
import Budget from "@/app/(main)/dashboard/_components/budget/Budget";
import RecentTransactions from "./_components/overview/recent-transactions/RecentTransactions";
import ExpenseBreakdown from "./_components/overview/expense-breakdown/ExpenseBreakdown";
import AddAccount from "../_components/AddAccount";
import ChoiceCard from "./_components/accounts/ChoiceCard";
import ChoiceCardSkeleton from "./_components/accounts/ChoiceCardSkeleton";
import OverviewSkeleton from "./_components/overview/OverviewSkeleton";
import CardSkeleton from "../_components/CardSkeleton";
import Heading from "@/app/(main)/_components/Heading";
import { cn } from "@/lib/utils";
import { db } from "@/data/db";
import AddAccountCard from "./_components/add-account/AddAccountCard";
import getDashboardGreeting from "@/lib/helper/ui/getDashboardGreeting";
import getHealth from "@/lib/helper/finance/getHealth";
import getStats from "@/lib/helper/getStats";
import HealthCard from "./_components/HealthCard";
import SavingsCard from "./_components/SavingsCard";
import getGridCols from "@/lib/helper/ui/getGridCols";
import getSavingsData from "@/lib/helper/finance/savings/getSavingsData";
import getMonthlyComparison from "@/lib/helper/finance/getMonthlyComparison";

export default async function DashboardPage() {
  const auth = await requiresAuth();

  // This will be taken care by the middleware, but it is a good practice to include it.
  // Redirect to '/sign-in' if not authenticated
  if (!auth) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  const name = user?.firstName || user?.fullName || user?.username || "User";

  const accounts = db.map((item) => item.account);

  const gridClass = getGridCols(accounts.length + 1);

  const { income, expense } = getStats(
    db.flatMap((item) => item.account.transactions),
  );

  const balance = accounts.reduce((sum, item) => sum + (item.balance || 0), 0);

  const health = getHealth(income, expense, balance);

  const comparison = getMonthlyComparison(accounts);

  const savingsData = getSavingsData(
    comparison.currentSavings,
    comparison.currentIncome,
    comparison.savingsTrend,
  );

  return (
    <div className="py-8 md:py-12 flex flex-col gap-10">
      {/* Title */}
      <div>
        <Heading title={"Dashboard"} />
        <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
          {getDashboardGreeting({ name, health })}
        </p>
      </div>

      {/* Stats */}
      <Suspense fallback={<CardSkeleton className={"h-40"} />}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <HealthCard health={health} />
          <Budget />
          <SavingsCard savingsData={savingsData} />
        </div>
      </Suspense>

      {/* Overview */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <Suspense fallback={<OverviewSkeleton />}>
          <RecentTransactions />
          <ExpenseBreakdown />
        </Suspense>
      </div>

      {/* Accounts Grid */}
      <div className="flex flex-col justify-center gap-2">
        <div className={cn(`grid gap-10`, gridClass)}>
          {/* Cards for all Accounts */}
          <Suspense fallback={<ChoiceCardSkeleton />}>
            <ChoiceCard />
          </Suspense>

          {/* Add Account Card and Drawer */}
          <AddAccount>
            <AddAccountCard />
          </AddAccount>
        </div>
        <Link
          href={"/accounts"}
          className="group flex gap-1 justify-end items-center hover:text-white hover:underline hover:underline-offset-2 transition-all"
        >
          <span className="text-sm font-medium">View All Accounts</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-out duration-300" />
        </Link>
      </div>
    </div>
  );
}
