"use client";

import ExpenseChart from "./ExpenseChart";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExpenseBreakdown = () => {
  const selectedAccount = useAppSelector(
    (state) => state.ui.recentTransactionsAcc,
  );

  /* Raw data */
  const rawData = [
    {
      account: "personal",
      allTransactions: [
        { category: "Rental", value: "1500.00", proportion: "35.56" },
        { category: "Travel", value: "1251.66", proportion: "29.68" },
        { category: "Entertainment", value: "304.33", proportion: "7.22" },
        { category: "Shopping", value: "1161.13", proportion: "27.53" },
      ],
    },
    {
      account: "work",
      allTransactions: [],
    },
  ];

  const rawTransactionData =
    rawData.find((item) => item.account === selectedAccount)?.allTransactions ??
    [];

  return (
    <Card className="border-2 border-[#bebec0] rounded-xl col-span-1 px-4 py-8">
      <CardHeader>
        <CardTitle className={"text-xl font-semibold text-white"}>
          Monthly Expense Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className={"h-full flex justify-center items-center"}>
        {rawTransactionData?.length > 0 ? (
          <ExpenseChart rawData={rawTransactionData} />
        ) : (
          <p className="font-medium">No expenses these months</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpenseBreakdown;
