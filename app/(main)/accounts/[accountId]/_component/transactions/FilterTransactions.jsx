"use client";

import SearchInput from "@/components/SearchInput";
import SelectDropdown from "@/components/SelectDropdown";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import {
  setSearch,
  setSelectedRecurringType,
  setSelectedTransactionType,
} from "@/lib/store/features/transaction/transactionSlice";
import { useDebounce } from "@/lib/store/hooks/useDebounce";
import { useEffect, useState } from "react";

const TYPES = ["Income", "Expense", "All Types"];
const RECURRING_TYPES = [
  "Recurring Only",
  "Non-recurring Only",
  "All Transactions",
];

const FilterTransactions = () => {
  const dispatch = useAppDispatch();

  const [localSearch, setLocalSearch] = useState("");

  const debouncedSearch = useDebounce(localSearch, 300);

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  const {
    selectedTransactionType: transactionType,
    selectedRecurringType: recurringType,
  } = useAppSelector((state) => state.transaction);

  const handleTypeChange = (value) => {
    dispatch(setSelectedTransactionType(value));
  };

  const handleRecurringType = (value) => {
    dispatch(setSelectedRecurringType(value));
  };

  const handleSearch = (e) => {
    setLocalSearch(e.target.value);
  };

  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
      <SearchInput
        value={localSearch}
        handleSearch={handleSearch}
        placeholder="Search Transaction"
      />
      <div className="flex justify-center items-center gap-4">
        <SelectDropdown
          options={TYPES}
          label={"Transaction Type"}
          value={transactionType}
          onChange={handleTypeChange}
        />
        <SelectDropdown
          options={RECURRING_TYPES}
          label={"Recurring"}
          value={recurringType}
          onChange={handleRecurringType}
        />
      </div>
    </div>
  );
};

export default FilterTransactions;
