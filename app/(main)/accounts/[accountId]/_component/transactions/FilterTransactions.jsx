"use client";

import { useEffect, useState } from "react";
import { RotateCcw, Trash2 } from "lucide-react";

import SearchInput from "@/components/SearchInput";
import SelectDropdown from "@/components/SelectDropdown";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import {
  setIsDeleting,
  setIsFiltered,
  setSearch,
  setSelectedRecurringType,
  setSelectedTransactionType,
} from "@/lib/store/features/transaction/transactionSlice";
import { useDebounce } from "@/lib/store/hooks/useDebounce";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { Button } from "@/components/ui/button";

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
    isFiltered,
    isDeleting,
  } = useAppSelector((state) => state.transaction);

  const handleTypeChange = (value) => {
    dispatch(setSelectedTransactionType(value));
    !isFiltered && dispatch(setIsFiltered());
  };

  const handleRecurringType = (value) => {
    dispatch(setSelectedRecurringType(value));
    !isFiltered && dispatch(setIsFiltered());
  };

  const handleSearch = (e) => {
    setLocalSearch(e.target.value);
    !isFiltered && dispatch(setIsFiltered());
  };

  const handleFilters = () => {
    isFiltered && dispatch(setIsFiltered());
    setLocalSearch("");
    dispatch(setSelectedRecurringType("All Transactions"));
    dispatch(setSelectedTransactionType("All Types"));
  };

  const handleDelete = () => {
    isDeleting && dispatch(setIsDeleting());
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

        {/* Only visible when transactions are filtered */}
        <TooltipWrapper
          content={"Reset"}
          contentClassName={"bg-[#bebec0] text-[#1e1e24]"}
        >
          {isFiltered && (
            <Button
              onClick={handleFilters}
              className={"border border-[#bebec0] cursor-pointer"}
            >
              <RotateCcw />
            </Button>
          )}
        </TooltipWrapper>

        {/* Only visible when any transaction(s) is/are selected */}
        <TooltipWrapper
          content={"Delete Transactions"}
          contentClassName={"bg-[#bebec0] text-[#1e1e24]"}
        >
          {isDeleting && (
            <Button
              onClick={handleDelete}
              className={"bg-[#FB5756] text-[#1e1e24] cursor-pointer"}
            >
              <Trash2 />
            </Button>
          )}
        </TooltipWrapper>
      </div>
    </div>
  );
};

export default FilterTransactions;
