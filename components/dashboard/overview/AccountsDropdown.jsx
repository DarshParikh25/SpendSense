"use client";

import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const accounts = ["personal", "work"];

const AccountsDropdown = () => {
  const [account, setAccount] = useState("personal");
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={"focus-visible:ring-0 cursor-pointer"}
        >
          <span className="capitalize">{account}</span>
          {open ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"bg-[#1e1e24]"}>
        <DropdownMenuGroup>
          <DropdownMenuLabel className={"opacity-75 font-normal"}>
            Accounts
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={account} onValueChange={setAccount}>
            {/* Later on we'll fetch the accounts of the user from the DB */}
            {accounts.map((acc, index) => (
              <DropdownMenuRadioItem
                key={index}
                value={acc}
                className={
                  "relative pl-8 [&_svg]:opacity-0 data-[state=checked]:[&_svg]:opacity-100 [&>span:first-child]:hidden font-semibold hover:bg-[#25252c] cursor-pointer"
                }
              >
                <Check className="absolute left-2 h-4 w-4 transition-opacity" />
                <span className="capitalize">{acc}</span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountsDropdown;
