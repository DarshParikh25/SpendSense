import { formatDistanceToNow } from "date-fns";

import HealthStatus from "./HealthStatus";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

import { currencyFormatter } from "@/lib/formatter";
import getStats from "@/lib/helper/getStats";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IncomeExpenseProgress from "./IncomeExpenseProgress";
import getHealth from "@/lib/helper/finance/getHealth";
import TopCategories from "./TopCategories";
import ActivityMeta from "./ActivityMeta";

const AccountCard = ({ account }) => {
  const { id, name, type, balance, isDefault, transactions = [] } = account;

  const txCount = transactions.length;

  const lastActivity = txCount
    ? formatDistanceToNow(new Date(transactions[0].date), { addSuffix: true })
    : "No activity";

  const { income, expense, topCategories } = getStats(transactions);

  const max = Math.max(income, expense, 1);

  const incomePercent = (income / max) * 100;
  const expensePercent = (expense / max) * 100;

  const progressBarData = [
    {
      label: "Income",
      value: income,
      percent: incomePercent,
      color: "*:bg-green-500",
    },
    {
      label: "Expense",
      value: expense,
      percent: expensePercent,
      color: "*:bg-[#fb5756]",
    },
  ];

  const health = getHealth(income, expense, balance);

  return (
    <Card className="sm:px-2 sm:py-8 border-2 border-[#bebec0] hover:shadow-md transition">
      {/* Header */}
      <CardHeader className={"flex justify-between items-center"}>
        <CardTitle>
          <h3 className="text-2xl font-semibold flex items-center justify-baseline gap-2">
            <span className="text-white">{name}</span>
            {isDefault && (
              <Badge
                variant={"default"}
                className={"bg-[#fb5756]/20 text-[#fb5756] rounded"}
              >
                Default
              </Badge>
            )}
          </h3>
          <p className="text-sm font-normal">{type}</p>
        </CardTitle>
        <Switch
          checked={isDefault}
          // disabled={loadingId === id}
          // onCheckedChange={() => handleMakeDefault(id)}
          // onClick={(e) => e.stopPropagation()}
          className={
            "h-6 w-12 data-[state=checked]:[&>span]:translate-x-7 data-[state=unchecked]:[&>span]:translate-x-1 data-[state=checked]:bg-[#fb5756] data-[state=unchecked]:bg-[#bebec0] [&>span]:bg-white cursor-pointer"
          }
        />
      </CardHeader>

      {/* Content */}
      <CardContent className="w-full pt-4 flex flex-col justify-center items-baseline gap-10">
        {/* Balance */}
        <div>
          <p className="text-3xl font-bold text-white">
            {currencyFormatter.format(balance)}
          </p>

          <p className="text-sm">Available Balance</p>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-6">
          {/* Health */}
          <HealthStatus health={health} />

          {/* Income / Expense */}
          <IncomeExpenseProgress data={progressBarData} />
        </div>

        <div className="w-full flex flex-col gap-4">
          {/* Account Activity Meta */}
          <ActivityMeta data={{ txCount, lastActivity }} />

          {/* Categories */}
          {topCategories.length > 0 && (
            <TopCategories categories={topCategories} />
          )}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="w-full flex justify-end pt-2">
        <Link
          href={`/accounts/${id}`}
          className="group flex items-center justify-baseline gap-1 hover:text-white transition-color duration-300 ease-in-out"
        >
          <span>View</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
