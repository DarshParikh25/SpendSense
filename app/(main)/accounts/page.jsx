"use client";

import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { TrendingUp, TrendingDown, Plus } from "lucide-react";

import { db } from "@/data/db";
import { currencyFormatter } from "@/lib/formatter";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ---------------------------------------
   Helpers
----------------------------------------*/

const getStats = (transactions = []) => {
  let income = 0;
  let expense = 0;

  const categoryMap = {};

  transactions.forEach((tx) => {
    if (tx.type === "Income") income += tx.amount;
    if (tx.type === "Expense") expense += tx.amount;

    if (tx.type === "Expense") {
      categoryMap[tx.category] = (categoryMap[tx.category] || 0) + tx.amount;
    }
  });

  const topCategories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  return {
    income,
    expense,
    topCategories,
  };
};

const getGridCols = (count) => {
  if (count === 1) return "grid-cols-1 max-w-md mx-auto";
  if (count === 2) return "grid-cols-2 max-w-4xl mx-auto";
  return "grid-cols-3";
};

const getHealth = (income, expense, balance) => {
  if (balance < 1000) return "critical";
  if (expense > income) return "warning";
  return "healthy";
};

/* ---------------------------------------
   Summary Cards
----------------------------------------*/

const SummaryRow = ({ accounts }) => {
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Stat label="Total Balance">
        {currencyFormatter.format(totalBalance)}
      </Stat>

      <Stat label="Accounts">{accounts.length}</Stat>

      <Stat label="Active">{accounts.filter((a) => a.balance > 0).length}</Stat>

      <Stat label="Inactive">
        {accounts.filter((a) => a.balance === 0).length}
      </Stat>
    </div>
  );
};

const Stat = ({ label, children }) => (
  <Card className="border border-[#bebec0]/30">
    <CardContent className="p-4 space-y-1">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-lg font-bold">{children}</p>
    </CardContent>
  </Card>
);

/* ---------------------------------------
   Account Card
----------------------------------------*/

const AccountCard = ({ account }) => {
  const router = useRouter();

  const { id, name, type, balance, isDefault, transactions = [] } = account;

  const txCount = transactions.length;

  const lastActivity = txCount
    ? formatDistanceToNow(new Date(transactions[0].date), { addSuffix: true })
    : "No activity";

  const { income, expense, topCategories } = getStats(transactions);

  const max = Math.max(income, expense, 1);

  const incomePercent = (income / max) * 100;
  const expensePercent = (expense / max) * 100;

  const health = getHealth(income, expense, balance);

  return (
    <Card className="border border-[#bebec0]/30 hover:shadow-md transition">
      <CardContent className="p-5 space-y-4">
        {/* Header */}
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-xs text-muted-foreground">{type} Account</p>
          </div>

          {isDefault && (
            <span className="text-xs px-2 py-0.5 rounded bg-[#fb5756]/20 text-[#fb5756]">
              Default
            </span>
          )}
        </div>

        {/* Balance */}
        <div>
          <p className="text-2xl font-bold">
            {currencyFormatter.format(balance)}
          </p>

          <p className="text-xs text-muted-foreground">Available</p>
        </div>

        {/* Health */}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Health</p>

          <div className="h-2 bg-gray-200 rounded overflow-hidden">
            <div
              className={`h-full ${
                health === "healthy"
                  ? "bg-green-500 w-[80%]"
                  : health === "warning"
                    ? "bg-yellow-500 w-[55%]"
                    : "bg-red-500 w-[25%]"
              }`}
            />
          </div>

          <p className="text-xs capitalize mt-1">{health}</p>
        </div>

        {/* Income / Expense */}
        <div className="space-y-2">
          <MiniBar
            label="Income"
            value={income}
            percent={incomePercent}
            color="bg-green-500"
          />

          <MiniBar
            label="Expense"
            value={expense}
            percent={expensePercent}
            color="bg-red-500"
          />
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-muted-foreground">Transactions</p>
            <p className="font-medium">{txCount}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Last Used</p>
            <p className="font-medium">{lastActivity}</p>
          </div>
        </div>

        {/* Categories */}
        {topCategories.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Top Spending</p>

            {topCategories.map(([cat, val]) => (
              <p key={cat} className="text-xs flex justify-between">
                <span>{cat}</span>
                <span>{currencyFormatter.format(val)}</span>
              </p>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => router.push(`/accounts/${id}`)}
          >
            View →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const MiniBar = ({ label, value, percent, color }) => (
  <div>
    <div className="flex justify-between text-xs mb-1">
      <span>{label}</span>
      <span>{currencyFormatter.format(value)}</span>
    </div>

    <div className="h-1.5 bg-gray-200 rounded">
      <div
        className={`h-full ${color} rounded`}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

/* ---------------------------------------
   Activity Feed
----------------------------------------*/

const ActivityFeed = ({ accounts }) => {
  const activities = accounts
    .flatMap((a) => a.transactions || [])
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <Card className="border border-[#bebec0]/30">
      <CardContent className="p-5 space-y-4">
        <h3 className="font-semibold">Recent Activity</h3>

        {activities.length === 0 ? (
          <p className="text-sm text-muted-foreground">No activity yet</p>
        ) : (
          activities.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between text-sm border-b last:border-0 pb-2"
            >
              <span>{tx.description}</span>
              <span>{currencyFormatter.format(tx.amount)}</span>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

/* ---------------------------------------
   Tips Panel
----------------------------------------*/

const TipsPanel = () => (
  <Card className="border border-[#bebec0]/30">
    <CardContent className="p-5 space-y-4">
      <h3 className="font-semibold">Improve Your Setup</h3>

      <ul className="text-sm space-y-2 text-muted-foreground">
        <li>• Review inactive accounts</li>
        <li>• Set monthly budgets</li>
        <li>• Enable auto sync</li>
        <li>• Categorize transactions</li>
      </ul>

      <Button variant="outline" size="sm">
        Open Settings
      </Button>
    </CardContent>
  </Card>
);

/* ---------------------------------------
   Main Page
----------------------------------------*/

export default function AccountsPage() {
  const accounts = db.map((item) => item.account);

  const gridClass = getGridCols(accounts.length);

  return (
    <div className="py-10 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Accounts</h1>

          <p className="text-muted-foreground text-sm">
            Manage and analyze your financial accounts
          </p>
        </div>

        <Button>
          <Plus className="w-4 h-4 mr-1" />
          Add Account
        </Button>
      </div>

      {/* Summary */}
      <SummaryRow accounts={accounts} />

      {/* Grid */}
      <div className={`grid gap-6 ${gridClass}`}>
        {accounts.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ActivityFeed accounts={accounts} />
        </div>

        <TipsPanel />
      </div>
    </div>
  );
}
