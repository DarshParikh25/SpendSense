"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LastFiveTransactions from "./LastFiveTransactions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setRecentTransactionAcc } from "@/lib/store/features/ui/uiSlice";
import SelectDropdown from "@/components/SelectDropdown";
import { useEffect } from "react";

const accountDetails = [
  {
    id: 1,
    name: "Personal",
    transactions: [
      {
        id: 1,
        title: "Flat Rent",
        recurring: true,
        date: "Dec 12, 2025",
        amount: "1500.00",
        type: "expense",
      },
      {
        id: 2,
        title: "Netflix",
        recurring: true,
        date: "Dec 8, 2025",
        amount: "10.00",
        type: "expense",
      },
      {
        id: 3,
        title: "Received Salary",
        recurring: false,
        date: "Dec 5, 2025",
        amount: "5549.52",
        type: "income",
      },
      {
        id: 4,
        title: "Shopping",
        recurring: false,
        date: "Dec 5, 2025",
        amount: "157.21",
        type: "expense",
      },
      {
        id: 5,
        title: "Shopping",
        recurring: false,
        date: "Dec 4, 2025",
        amount: "418.58",
        type: "expense",
      },
    ],
    isDefault: true,
  },
  {
    id: 2,
    name: "Work",
    transactions: [],
    isDefault: false,
  },
];

const RecentTransactions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const defaultAccount = accountDetails.find((acc) => acc.isDefault);

    if (defaultAccount) {
      dispatch(setRecentTransactionAcc(defaultAccount.name));
    }
  }, [dispatch]);

  const account = useAppSelector((state) => state.ui.recentTransactionsAcc);

  const handleAccountChange = (value) => {
    dispatch(setRecentTransactionAcc(value));
  };

  const selectedAccount = useAppSelector(
    (state) => state.ui.recentTransactionsAcc,
  );

  const accountTransactions =
    accountDetails.find((acc) => acc.name === selectedAccount)?.transactions ??
    [];

  return (
    <Card className="border-2 border-[#bebec0] rounded-xl px-4 py-8 col-span-1 gap-8">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-xl font-semibold text-white">
          Recent Transactions
        </CardTitle>

        {/* Dropdown to select the account for the recent transactions */}
        <SelectDropdown
          options={accountDetails}
          label={"Accounts"}
          value={account}
          onChange={handleAccountChange}
        />
      </CardHeader>

      <CardContent className={"h-full flex justify-center items-center"}>
        {/* Show the recent 5 transactions for the selected account */}
        {accountTransactions?.length > 0 ? (
          <LastFiveTransactions transactions={accountTransactions} />
        ) : (
          <p className="font-medium">No recent transactions</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
