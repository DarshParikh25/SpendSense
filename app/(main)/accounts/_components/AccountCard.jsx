import { formatDistanceToNow } from "date-fns";

import HealthStatus from "./HealthStatus";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

import { currencyFormatter } from "@/lib/formatter";
import getStats from "@/lib/helper/getStats";
import Link from "next/link";
import { ArrowRight, Dot } from "lucide-react";
import IncomeExpenseProgress from "./IncomeExpenseProgress";
import getHealth from "@/lib/helper/finance/getHealth";
import TopCategories from "./TopCategories";
import ActivityMeta from "./ActivityMeta";
import CardShell from "@/components/CardShell";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const AccountCard = ({ account, defaultAccountId }) => {
  const { id, name, type, category, balance, transactions = [] } = account;

  const isDefault = defaultAccountId === account.id.toString();

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
      id: "income",
      label: "Income",
      value: income,
      color: "text-green-500",
    },
    {
      id: "expense",
      label: "Expense",
      value: expense,
      color: "text-[#fb5756]",
    },
  ];

  const health = getHealth(income, expense, balance);

  return (
    <CardShell
      header={
        <CardTitle className="flex items-start justify-between">
          {/* Left Section */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-white tracking-tight">
                {name}
              </h3>
              {isDefault && (
                <Badge
                  variant="outline"
                  className="bg-[#bebec0]/10 text-[#fff] border-[#bebec0]/50 rounded text-xs"
                >
                  Default
                </Badge>
              )}
            </div>

            <p className="flex items-center gap-2 text-sm text-[#bebec0]">
              <span>{type}</span>
              <span className="w-1 h-1 rounded-full bg-[#bebec0]/60" />
              <span>{category}</span>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {!isDefault && (
              <Label
                htmlFor={`acc-${id}`}
                className="text-sm text-muted-foreground"
              >
                Set Default
              </Label>
            )}
            <RadioGroupItem
              id={`acc-${id}`}
              value={id.toString()}
              className={"cursor-pointer"}
            />
          </div>
        </CardTitle>
      }
      content={
        <CardDescription className="w-full pt-4 flex flex-col justify-center items-baseline gap-10">
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
            <TopCategories categories={topCategories} />
          </div>
        </CardDescription>
      }
      footer={
        <Link
          href={`/accounts/${id}`}
          className="group flex items-center justify-baseline gap-1 hover:text-white transition-color duration-300 ease-in-out"
        >
          <span>View</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        </Link>
      }
      className={"h-full"}
      contentClassName={"flex-1"}
      footerClassName={"w-full flex justify-end pt-2"}
    />
  );
};

export default AccountCard;
