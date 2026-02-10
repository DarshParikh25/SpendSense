"use client";

import SearchInput from "@/components/SearchInput";
import SelectDropdown from "@/components/SelectDropdown";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import {
  setTransactionDuration,
  setTransactionType,
} from "@/lib/store/features/ui/uiSlice";

const types = ["Income", "Expense", "All Types"];
const duration = ["All Transactions"];

const FilterTransactions = () => {
  const dispatch = useAppDispatch();

  const transactionType = useAppSelector((state) => state.ui.transactionType);
  const transactionDuration = useAppSelector(
    (state) => state.ui.transactionDuration,
  );

  const handleTypeChange = (value) => {
    dispatch(setTransactionType(value));
  };

  const handleDurationChange = (value) => {
    dispatch(setTransactionDuration(value));
  };

  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
      <SearchInput placeholder="Search Transaction" />
      <div className="flex justify-center items-center gap-4">
        <SelectDropdown
          options={types}
          label={"Transaction Type"}
          value={transactionType}
          onChange={handleTypeChange}
        />
        <SelectDropdown
          options={duration}
          label={"Duration"}
          value={transactionDuration}
          onChange={handleDurationChange}
        />
      </div>
    </div>
  );
};

export default FilterTransactions;
