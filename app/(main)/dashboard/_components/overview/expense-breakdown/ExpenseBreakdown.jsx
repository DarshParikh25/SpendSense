"use client";

import ExpenseChart from "./ExpenseChart";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/data/db";

const TOP_N = 5;

const ExpenseBreakdown = () => {
  const selectedAccount = useAppSelector(
    (state) => state.ui.recentTransactionsAcc,
  );

  // all transactions
  const transactions =
    db.find((acc) => acc.account.name === selectedAccount)?.account
      ?.transactions ?? [];

  // only expenses
  const expenses = transactions.filter(
    (transaction) => transaction.type === "Expense",
  );

  // total expense
  const totalAmount = expenses.reduce(
    (sum, transaction) => sum + (Number(transaction.amount) || 0),
    0,
  );

  // category-wise total
  const categoryTotals = Object.entries(
    expenses.reduce((acc, { category, amount }) => {
      acc[category] = (acc[category] || 0) + (Number(amount) || 0);
      return acc;
    }, {}),
  );

  const costPerCat = categoryTotals
    .map(([category, total]) => ({
      category,
      total,
    }))
    .sort((a, b) => b.total - a.total);

  let finalCostPerCat = [];

  if (costPerCat.length > TOP_N) {
    const top = costPerCat.slice(0, TOP_N);
    const rest = costPerCat.slice(TOP_N);

    const othersTotal = res.reduce(
      (sum, item) => sum + (Number(item.total) || 0),
      0,
    );

    finalCostPerCat = [
      ...top,
      {
        category: "Others",
        total: othersTotal,
      },
    ];
  } else {
    finalCostPerCat = costPerCat;
  }

  finalCostPerCat = finalCostPerCat.map((item) => ({
    ...item,
    proportion: totalAmount ? ((item.total / totalAmount) * 100).toFixed(2) : 0,
  }));

  return (
    <Card className="border-2 border-[#bebec0] rounded-xl col-span-1 px-4 py-8">
      <CardHeader>
        <CardTitle className={"text-xl font-semibold text-white"}>
          Monthly Expense Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className={"h-full flex justify-center items-center"}>
        {costPerCat?.length > 0 ? (
          <ExpenseChart costPerCat={finalCostPerCat} />
        ) : (
          <p className="font-medium">No expenses these months</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpenseBreakdown;
