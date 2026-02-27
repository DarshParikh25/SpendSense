"use client";

import { lazy, Suspense, useMemo } from "react";

import { CardTitle } from "@/components/ui/card";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import CardShell from "@/components/CardShell";
import { currencyFormatter } from "@/lib/formatter";
import { accountTypesColors } from "@/config/categoryConfig";

const BalanceByTypeChart = lazy(() => import("./BalanceByTypeChart"));

const BalanceByTypeCard = ({ accounts }) => {
  const chartData = useMemo(() => {
    return accounts.reduce((res, acc) => {
      const match = res.find(
        (type) => type.name.toLowerCase() === acc.type.toLowerCase(),
      );

      match
        ? match.balance + (acc.balance || 0)
        : res.push({
            name: acc.type || "",
            value: acc.balance || 0,
            fill: accountTypesColors[acc.type] || "",
            label: currencyFormatter.format(acc.balance || 0),
          });

      return res;
    }, []);
  }, [accounts]);

  return (
    <CardShell
      header={
        <CardTitle className={"p-4 text-xl font-semibold text-white"}>
          Balance by Account Type
        </CardTitle>
      }
      content={
        accounts?.length > 0 ? (
          <Suspense
            fallback={<CardSkeleton className={"w-full h-80 border-none"} />}
          >
            <BalanceByTypeChart data={chartData} />
          </Suspense>
        ) : (
          <p className="font-medium">No expenses these months</p>
        )
      }
      contentClassName={"h-full flex justify-center items-center"}
    />
  );
};

export default BalanceByTypeCard;
