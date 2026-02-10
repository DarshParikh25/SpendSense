"use client";

import { Search } from "lucide-react";

import { Input } from "./ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setTransactionSearch } from "@/lib/store/features/transaction/transactionSlice";

const SearchInput = ({ placeholder }) => {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.transaction.transactionSearch);

  const handleSearch = (e) => {
    dispatch(setTransactionSearch(e.target.value));
  };

  return (
    <div className="w-full border border-[#bebec0] flex items-center justify-center px-3 rounded-md">
      <Search size={20} />
      <Input
        value={search}
        onChange={handleSearch}
        className={"focus-visible:ring-0 border-0"}
        placeholder={placeholder}
        type={"text"}
      />
    </div>
  );
};

export default SearchInput;
