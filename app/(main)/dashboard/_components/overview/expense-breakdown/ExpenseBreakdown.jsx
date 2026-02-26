"use client";

import { lazy, Suspense } from "react";

import { CardTitle } from "@/components/ui/card";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import { getMonthRange } from "@/lib/helper/date/getMonthRanges";
import CardShell from "@/components/CardShell";

const ExpenseChart = lazy(() => import("./ExpenseChart"));

const TOP_N = 5;

const ExpenseBreakdown = ({ transactions }) => {
  const { start, end } = getMonthRange();

  // only expenses
  const expenses = transactions.filter(
    (transaction) =>
      new Date(transaction.date) >= new Date(start) &&
      new Date(transaction.date) <= new Date(end) &&
      transaction.type === "Expense",
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

    const othersTotal = rest.reduce(
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
    <CardShell
      header={
        <CardTitle className={"text-xl font-semibold text-white"}>
          Monthly Expense Breakdown
        </CardTitle>
      }
      content={
        costPerCat?.length > 0 ? (
          <Suspense
            fallback={<CardSkeleton className={"w-full h-80 border-none"} />}
          >
            <ExpenseChart costPerCat={finalCostPerCat} />
          </Suspense>
        ) : (
          <p className="font-medium">No expenses these months</p>
        )
      }
      className={"px-4 py-8"}
      contentClassName={"h-full flex justify-center items-center"}
    />
  );
};

export default ExpenseBreakdown;
