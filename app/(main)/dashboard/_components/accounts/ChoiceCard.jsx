"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { db } from "@/data/db";
import { currencyFormatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ChoiceCard = () => {
  const router = useRouter();

  const [accounts, setAccounts] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    setAccounts(db);
  }, []);

  const handleMakeDefault = (id) => {
    setLoadingId(id);

    try {
      setAccounts((prev) =>
        prev.map((acc) => ({
          ...acc,
          account: {
            ...acc.account,
            isDefault: acc.account.id === id,
          },
        })),
      );
    } catch (error) {
      console.log("Failed to set default account", error); // replace with actual toast notification
    } finally {
      setLoadingId(null);
    }
  };

  return accounts.map(({ account: { id, isDefault, name, balance, type } }) => (
    <Card
      key={id}
      onClick={() => router.push(`/accounts/${id}`)}
      className={cn(
        isDefault ? "bg-[#26272f]" : "bg-transparent",
        "border-2 border-[#bebec0] px-4 py-8 gap-6 transition-colors cursor-pointer",
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
