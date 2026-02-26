import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

import requiresAuth from "@/lib/auth/requiresAuth";
import AddAccount from "../_components/AddAccount";
import ChoiceCard from "./_components/accounts/ChoiceCard";
import ChoiceCardSkeleton from "./_components/accounts/ChoiceCardSkeleton";
import Heading from "@/app/(main)/_components/Heading";
import { db } from "@/data/db";
import AddAccountCard from "./_components/add-account/AddAccountCard";
import getHealth from "@/lib/helper/finance/getHealth";
import getStats from "@/lib/helper/getStats";
import getGridCols from "@/lib/helper/ui/getGridCols";
import DashboardStats from "./_components/stats/DashboardStats";
import Greetings from "./_components/Greetings";
import Overview from "./_components/overview/Overview";
import CashFlowCard from "./_components/cash-flow/CashFlowCard";

export default async function DashboardPage() {
  await requiresAuth();

  const user = await currentUser();

  const name = user?.firstName || user?.fullName || user?.username || "User";

  const accounts = db.map((item) => item.account);

  const gridClass = getGridCols(accounts.length + 1);

  const { income, expense } = getStats(
    db.flatMap((item) => item.account.transactions),
  );

  const balance = accounts.reduce((sum, item) => sum + (item.balance || 0), 0);

  const health = getHealth(income, expense, balance);

  return (
    <div className="py-8 md:py-12 flex flex-col gap-10">
      {/* Title */}
      <div>
        <Heading title={"Dashboard"} />
        <Greetings name={name} health={health} />
      </div>

      {/* Stats */}
      <DashboardStats accounts={accounts} health={health} />

      {/* Cash Flow Trend */}
      <CashFlowCard accounts={accounts} />

      {/* Overview */}
      <Overview />

      {/* Accounts Grid */}
      <div className="flex flex-col justify-center gap-2">
        <div className={`grid gap-10 ${gridClass}`}>
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
