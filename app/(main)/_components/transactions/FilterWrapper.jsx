"use client";

import { usePathname } from "next/navigation";
import FilterTransactions from "./FilterTransactions";

const FilterWrapper = ({ showAccountsSelectDropdown = false }) => {
  const pathname = usePathname();

  return (
    <FilterTransactions
      key={pathname}
      showAccountsSelectDropdown={showAccountsSelectDropdown}
    />
  );
};

export default FilterWrapper;
