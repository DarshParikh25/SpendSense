"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { currencyFormatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

// This will come from DB
let accountsInfo = [
  {
    id: 1,
    name: "Work",
    isDefault: false,
    balance: "5941.00",
    type: "Current Account",
  },
  {
    id: 2,
    name: "Personal",
    isDefault: true,
    balance: "152124.00",
    type: "Savings Account",
  },
];

const ChoiceCard = () => {
  const [accounts, setAccounts] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    setAccounts(accountsInfo);
  }, []);

  const handleMakeDefault = (id) => {
    setLoadingId(id);

    try {
      setAccounts((prev) =>
        prev.map((acc) => ({
          ...acc,
          isDefault: acc.id === id,
        })),
      );
    } catch (error) {
      console.log("Failed to set default account", error);
    } finally {
      setLoadingId(null);
    }
  };

  return accounts.map(({ id, name, isDefault, balance, type }) => (
    <Card
      key={id}
      className={cn(
        isDefault ? "bg-[#26272f]" : "bg-transparent",
        "border-2 border-[#bebec0] px-4 py-8 gap-6 transition-colors",
      )}
    >
      <CardHeader className={"flex justify-between items-center"}>
        <CardTitle className={"text-xl font-semibold"}>{name}</CardTitle>
        <Switch
          checked={isDefault}
          disabled={loadingId === id}
          onCheckedChange={() => handleMakeDefault(id)}
          onClick={(e) => e.stopPropagation()}
          className={
            "h-6 w-12 data-[state=checked]:[&>span]:translate-x-7 data-[state=unchecked]:[&>span]:translate-x-1 data-[state=checked]:bg-[#fb5756] data-[state=unchecked]:bg-[#bebec0] [&>span]:bg-white cursor-pointer"
          }
        />
      </CardHeader>
      <CardContent
        className={"flex flex-col justify-center items-baseline gap-0.5"}
      >
        <h4 className="text-white text-3xl font-bold tracking-wide">
          {currencyFormatter.format(balance)}
        </h4>
        <p className="text-lg font-medium">{type}</p>
      </CardContent>
      <CardFooter className={"flex items-center justify-between"}>
        <div className="w-fit flex justify-center items-center gap-0.5">
          <ArrowUpRight strokeWidth={2.5} className="w-5 h-5 text-[#72FF52]" />
          <span className="font-medium">Expense</span>
        </div>
        <div className="w-fit flex justify-center items-center gap-0.5">
          <ArrowDownRight
            strokeWidth={2.5}
            className="w-5 h-5 text-[#FB5756]"
          />
          <span className="font-medium">Income</span>
        </div>
      </CardFooter>
    </Card>
  ));
};

export default ChoiceCard;
