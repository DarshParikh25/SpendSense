import { Suspense } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import requiresAuth from "@/lib/auth/requiresAuth";
import Budget from "@/app/(main)/dashboard/_components/budget/Budget";
import RecentTransactions from "./_components/overview/recent-transactions/RecentTransactions";
import ExpenseBreakdown from "./_components/overview/expense-breakdown/ExpenseBreakdown";
import AddAccount from "./_components/add-account/AddAccount";
import ChoiceCard from "./_components/accounts/ChoiceCard";
import ChoiceCardSkeleton from "./_components/accounts/ChoiceCardSkeleton";
import OverviewSkeleton from "./_components/overview/OverviewSkeleton";
import CardSkeleton from "../_components/CardSkeleton";
import Heading from "@/app/(main)/_components/Heading";
import TextSkeleton from "../_components/TextSkeleton";
import { cn } from "@/lib/utils";
import { db } from "@/data/db";

const getGridCols = (count) => {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
};

export default async function DashboardPage() {
  const user = await requiresAuth();

  // This will be taken care by the middleware, but it is a good practice to include it.
  // Redirect to '/sign-in' if not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  const gridClass = getGridCols(db.length + 1);

  return (
    <div className="py-8 md:py-12 flex flex-col gap-10">
      {/* Title */}
      <Suspense fallback={<TextSkeleton className={"h-14 w-60"} />}>
        <Heading title={"Dashboard"} />
      </Suspense>

      {/* Budget */}
      <Suspense fallback={<CardSkeleton className={"h-40"} />}>
        <Budget />
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
          <AddAccount />
        </div>
        <Link
          href={"/accounts"}
          className="flex gap-1 justify-end items-center hover:text-white hover:underline hover:underline-offset-10 transition-all"
        >
          <span className="text-sm font-medium">View All Accounts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
