"use client";

import { lazy, Suspense } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setBarChartDuration } from "@/lib/store/features/ui/uiSlice";

import CardShell from "@/components/CardShell";
import { CardTitle } from "@/components/ui/card";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import SelectDropdown from "@/app/(main)/_components/SelectDropdown";

const TransactionBarChart = lazy(() => import("./TransactionBarChart"));

// Dummy data
const transactionData = [
  {
    name: "Feb 06",
    income: 2045.75,
    expense: 560.1,
  },
  {
    name: "Feb 05",
    income: 1045.75,
    expense: 602.4,
  },
  {
    name: "Feb 04",
    income: 2345.15,
    expense: 960.1,
  },
  {
    name: "Feb 03",
    income: 245.45,
    expense: 1005.1,
  },
  {
    name: "Feb 02",
    income: 3200.7,
    expense: 500.1,
  },
  {
    name: "Feb 01",
    income: 2005.0,
    expense: 260.16,
  },
];

const durationOpts = [
  "Last 7 Days",
  "Last Month",
  "Last 3 Months",
  "Last 6 Months",
  "Last Year",
  "All Time",
];

const TransactionOverview = () => {
  const dispatch = useAppDispatch();

  const duration = useAppSelector((state) => state.ui.barChartDuration);

  const handleDurationChange = (value) => {
    dispatch(setBarChartDuration(value));
  };

  return (
    <CardShell
      header={
        // Title and duration selection
        <div className="flex justify-between items-center w-full gap-2 sm:gap-0">
          <CardTitle className="text-lg font-semibold">
            Transaction Overview
          </CardTitle>
          <SelectDropdown
            options={durationOpts}
            label={"Duration"}
            value={duration}
            onChange={handleDurationChange}
          />
        </div>
      }
      content={
        // Bar Chart
        <Suspense
          fallback={<CardSkeleton className={"w-full h-110 border-none"} />}
        >
          <TransactionBarChart transactionData={transactionData} />
        </Suspense>
      }
      className={"py-8 sm:py-10 px-2 sm:px-4 gap-12"}
    />
  );
};

export default TransactionOverview;
