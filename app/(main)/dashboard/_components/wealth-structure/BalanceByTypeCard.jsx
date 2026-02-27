"use client";

import { lazy, Suspense, useMemo } from "react";

import { CardDescription, CardTitle } from "@/components/ui/card";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import CardShell from "@/components/CardShell";
import { currencyFormatter } from "@/lib/formatter";
import { accountTypesColors } from "@/config/categoryConfig";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <CardDescription className="font-medium">
            No accounts found!
          </CardDescription>
        )
      }
      footer={
        <Link
          href={"/accounts"}
          className="group w-fit flex gap-1 justify-center items-center hover:text-white hover:underline hover:underline-offset-2 transition-all"
        >
          <span className="text-sm font-medium">View All Accounts</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-out duration-300" />
        </Link>
      }
      footerClassName={"flex justify-end items-center"}
      contentClassName={"h-full flex justify-center items-center"}
    />
  );
};

export default BalanceByTypeCard;
