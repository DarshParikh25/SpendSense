"use client";

import { useRouter } from "next/navigation";

import TransactionTable from "@/app/(main)/_components/transactions/TransactionTable";
import { Button } from "@/components/ui/button";

const AllTransactionsTable = ({ transactions }) => {
  const router = useRouter();

  return (
    <TransactionTable transactions={transactions} showAccountColumn>
      <div
        onClick={() => router.push("/transactions/create")}
        className={"py-1 hover:bg-[#25252b] border-t"}
      >
        <Button
          type="button"
          variant="ghost"
          className={"w-full cursor-pointer font-semibold"}
        >
          + Add New Transaction
        </Button>
      </div>
    </TransactionTable>
  );
};

export default AllTransactionsTable;
