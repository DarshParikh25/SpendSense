"use client";

import SelectDropdown from "@/components/SelectDropdown";
import TransactionBarChart from "./TransactionBarChart";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setDuration } from "@/lib/store/features/ui/uiSlice";
import Stats from "./Stats";

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

  const duration = useAppSelector((state) => state.ui.duration);

  const handleDurationChange = (value) => {
    dispatch(setDuration(value));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12 border-2 border-[#bebec0] p-10 rounded-xl">
      {/* Title and duration selection */}
      <div className="flex justify-between items-center w-full">
        <h3 className="text-lg font-semibold">Transaction Overview</h3>
        <SelectDropdown
          options={durationOpts}
          label={"Duration"}
          value={duration}
          onChange={handleDurationChange}
        />
      </div>

      {/* Stats */}
      <Stats transactionData={transactionData} />

      {/* Bar Chart */}
      <TransactionBarChart transactionData={transactionData} />
    </div>
  );
};

export default TransactionOverview;
