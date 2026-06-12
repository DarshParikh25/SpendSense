import { currentUser } from "@clerk/nextjs/server";

import Heading from "@/app/(main)/_components/Heading";
import { db } from "@/data/db";
import getHealth from "@/lib/helper/finance/getHealth";
import getStats from "@/lib/helper/getStats";
import DashboardStats from "./_components/stats/DashboardStats";
import Greetings from "./_components/Greetings";
import Overview from "./_components/overview/Overview";
import CashFlowCard from "./_components/cash-flow/CashFlowCard";
import BalanceByTypeCard from "./_components/wealth-structure/BalanceByTypeCard";
import Summary from "./_components/wealth-structure/summary/Summary";

export default async function DashboardPage() {
  const user = await currentUser();

  const name = user?.firstName || user?.fullName || user?.username || "User";

  const accounts = db.map((item) => item?.account);

  const { income, expense } = getStats(
    db.flatMap((item) => item.account.transactions),
  );

  const balance = accounts.reduce((sum, item) => sum + (item.balance || 0), 0);

  const health = getHealth(income, expense, balance);

  return (
    <div className="py-8 md:py-12 flex flex-col gap-10 overflow-x-hidden">
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

      {/* Wealth Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <BalanceByTypeCard accounts={accounts} />
        <Summary accounts={accounts} />
      </div>
    </div>
  );
}
