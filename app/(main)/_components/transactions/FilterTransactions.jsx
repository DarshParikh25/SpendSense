"use client";

import { useEffect, useState } from "react";
import { RotateCcw, Trash2, Trash2Icon } from "lucide-react";

import SearchInput from "@/app/(main)/_components/SearchInput";
import SelectDropdown from "@/app/(main)/_components/SelectDropdown";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import {
  setSearch,
  setSelectedRecurringType,
  setSelectedTransactionType,
  clearSelection,
  toggleIsDeleting,
  setSelectedAccount,
} from "@/lib/store/features/transaction/transactionSlice";
import { useDebounce } from "@/lib/store/hooks/useDebounce";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { Button } from "@/components/ui/button";
import DialogBox from "@/app/(main)/_components/DialogBox";
import { db } from "@/data/db";

const TYPES = ["Income", "Expense", "All Types"];

const RECURRING_TYPES = [
  "Recurring Only",
  "Non-recurring Only",
  "All Transactions",
];

const ACCOUNTS = db.map((item) => item?.account.name);

const FilterTransactions = ({ showAccountsSelectDropdown }) => {
  const dispatch = useAppDispatch();

  const [localSearch, setLocalSearch] = useState("");

  const debouncedSearch = useDebounce(localSearch, 300);

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  useEffect(() => {
    dispatch(setSelectedRecurringType("All Transactions"));
    dispatch(setSelectedTransactionType("All Types"));
    dispatch(setSelectedAccount("All Accounts"));
  }, [dispatch]);

  const {
    selectedTransactionType: transactionType,
    selectedRecurringType: recurringType,
    selectedTransactionIds: selectedIds,
    selectedAccount,
    search,
    isDeleting,
  } = useAppSelector((state) => state.transaction);

  const isFiltered =
    transactionType !== "All Types" ||
    recurringType !== "All Transactions" ||
    selectedAccount !== "All Accounts" ||
    search.length > 0;

  const count = selectedIds.length;

  const accounts = [...ACCOUNTS, "All Accounts"];

  const handleTypeChange = (value) => {
    dispatch(setSelectedTransactionType(value));
  };

  const handleRecurringType = (value) => {
    dispatch(setSelectedRecurringType(value));
  };

  const handleSelectedAccount = (value) => {
    dispatch(setSelectedAccount(value));
  };

  const handleSearch = (e) => {
    setLocalSearch(e.target.value);
  };

  const handleFilters = () => {
    setLocalSearch("");
    dispatch(setSelectedRecurringType("All Transactions"));
    dispatch(setSelectedTransactionType("All Types"));
    dispatch(setSelectedAccount("All Accounts"));
  };

  const handleDelete = (ids) => {
    !isDeleting && dispatch(toggleIsDeleting());
    // dispatch(deleteTransactions(ids));
    dispatch(clearSelection());
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
        {showAccountsSelectDropdown && (
          <SelectDropdown
            options={accounts}
            label={"Accounts"}
            value={selectedAccount}
            onChange={handleSelectedAccount}
          />
        )}

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
          content={`Delete ${selectedIds.length} Transactions`}
          contentClassName={"bg-[#bebec0] text-[#1e1e24]"}
        >
          <DialogBox
            selectedIds={selectedIds}
            onConfirm={handleDelete}
            Icon={Trash2Icon}
            title={`Delete ${count > 1 && count} transaction${count > 1 && "s"}?`}
            desc={`This will permanently delete ${count > 1 ? "these" : "this"} transaction${count > 1 && "s"}. This action cannot be undone.`}
            actionText={"Delete"}
          >
            {selectedIds.length > 0 && (
              <Button
                className={
                  "flex justify-center items-center gap-1 bg-[#FB5756] text-white cursor-pointer"
                }
              >
                <Trash2 />
                <span>({selectedIds.length})</span>
              </Button>
            )}
          </DialogBox>
        </TooltipWrapper>
      </div>
    </div>
  );
};

export default FilterTransactions;
