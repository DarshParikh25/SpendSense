"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LastFiveTransactions from "./LastFiveTransactions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setRecentTransactionAcc } from "@/lib/store/features/ui/uiSlice";
import SelectDropdown from "@/components/SelectDropdown";
import { useEffect } from "react";
import { db } from "@/data/db";

const RecentTransactions = () => {
  const dispatch = useAppDispatch();

  const accOpts = db.map((acc) => acc.account.name);

  useEffect(() => {
    const defaultAccount = db.find((acc) => acc.account.isDefault);
    console.log(defaultAccount);

    if (defaultAccount) {
      dispatch(setRecentTransactionAcc(defaultAccount.account.name));
    }
  }, [dispatch]);

  const account = useAppSelector((state) => state.ui.recentTransactionsAcc);

  const handleAccountChange = (value) => {
    dispatch(setRecentTransactionAcc(value));
  };

  const selectedAccount = useAppSelector(
    (state) => state.ui.recentTransactionsAcc,
  );

  const accountTransactions = db.find(
    (acc) => acc.account.name === selectedAccount,
  )?.account?.transactions;

  return (
    <Card className="border-2 border-[#bebec0] rounded-xl px-4 py-8 col-span-1 gap-8">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-xl font-semibold text-white">
          Recent Transactions
        </CardTitle>

        {/* Dropdown to select the account for the recent transactions */}
        <SelectDropdown
          options={accOpts}
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
