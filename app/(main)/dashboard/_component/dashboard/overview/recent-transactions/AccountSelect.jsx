"use client";

import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setRecentTransactionAcc } from "@/lib/store/features/ui/uiSlice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const accounts = [
  {
    id: 1,
    name: "Personal",
    isDefault: true,
  },
  {
    id: 2,
    name: "Work",
    isDefault: false,
  },
];

const AccountSelect = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const defaultAccount = accounts.find((acc) => acc.isDefault);

    if (defaultAccount) {
      dispatch(setRecentTransactionAcc(defaultAccount.name));
    }
  }, [dispatch]);

  const account = useAppSelector((state) => state.ui.recentTransactionsAcc);

  const handleAccountChange = (value) => {
    dispatch(setRecentTransactionAcc(value));
  };

  return (
    <Select value={account} onValueChange={handleAccountChange}>
      <SelectTrigger className={"cursor-pointer focus-visible:ring-0"}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        position="popper"
        side="bottom"
        align="center"
        className={"bg-[#1e1e24]"}
      >
        <SelectGroup>
          <SelectLabel>Accounts</SelectLabel>
          {accounts.map(({ id, name }) => (
            <SelectItem
              key={id}
              value={name}
              className={"font-semibold hover:bg-[#25252c] cursor-pointer"}
            >
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AccountSelect;
