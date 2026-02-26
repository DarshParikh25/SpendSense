"use client";

import { lazy, Suspense, useMemo, useState } from "react";

import { CardTitle } from "@/components/ui/card";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import CardShell from "@/components/CardShell";
import SelectDropdown from "@/app/(main)/_components/SelectDropdown";
import {
  getHalfYearlyBuckets,
  getMonthlyBuckets,
  getQuarterlyBuckets,
  getWeeklyBuckets,
  getYearlyBuckets,
} from "@/lib/helper/date/generateBuckets";
import { fillMatchingBucket } from "@/lib/helper/date/fillMatchingBucket";

const CashFlowChart = lazy(() => import("./CashFlowChart"));

const RANGES = {
  Weekly: "this week",
  Monthly: "this month",
  Quarterly: "in last 3 months",
  "Half Yearly": "in last 6 months",
  Yearly: "this year",
};

const CashFlowCard = ({ accounts }) => {
  const [selectedRange, setSelectedRange] = useState("Monthly");

  const transactions = accounts.flatMap((item) => item.transactions ?? []);

  const buildChartData = (period, transactions) => {
    let buckets;

    switch (period) {
      case "weekly":
        buckets = getWeeklyBuckets();
        break;

      case "monthly":
        buckets = getMonthlyBuckets();
        break;

      case "quarterly":
        buckets = getQuarterlyBuckets();
        break;

      case "half yearly":
        buckets = getHalfYearlyBuckets();
        break;

      case "yearly":
        buckets = getYearlyBuckets();
        break;

      default:
        return [];
    }

    const clonedBuckets = buckets.map((b) => ({ ...b }));

    return fillMatchingBucket(clonedBuckets, transactions, period);
  };

  // compute transaction data for line chart
  const chartData = useMemo(
    () => buildChartData(selectedRange.toLowerCase(), transactions),
    [selectedRange, transactions],
  );

  const hasData = chartData?.some(
    (item) => item.income !== 0 || item.expense !== 0,
  );

  const handleOnChange = (value) => {
    setSelectedRange(value);
  };

  return (
    <CardShell
      header={
        <CardTitle
          className={
            "flex items-center justify-between text-xl font-semibold text-white"
          }
        >
          Cash Flow Trend
          <SelectDropdown
            options={Object.keys(RANGES)}
            value={selectedRange}
            label={"Range"}
            onChange={handleOnChange}
          />
        </CardTitle>
      }
      content={
        hasData ? (
          <Suspense
            fallback={<CardSkeleton className={"w-full h-80 border-none"} />}
          >
            <CashFlowChart data={chartData} />
          </Suspense>
        ) : (
          <p className="font-medium">
            No income and expense {RANGES[selectedRange]}
          </p>
        )
      }
      className={"px-4 py-8"}
      contentClassName={"h-full flex justify-center items-center"}
    />
  );
};

export default CashFlowCard;
