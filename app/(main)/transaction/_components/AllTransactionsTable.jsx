"use client";

import { useRouter } from "next/navigation";

import TransactionTable from "@/app/(main)/_components/transactions/TransactionTable";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

const AllTransactionsTable = ({ transactions }) => {
  const router = useRouter();

  return (
    <TransactionTable transactions={transactions} showAccountColumn>
      <TableRow
        onClick={() => router.push("/transaction/create")}
        className={"hover:bg-[#25252b]"}
      >
        <TableCell colSpan={8} className={"text-center"}>
          <Button
            type="button"
            variant="ghost"
            className={"w-full cursor-pointer font-semibold"}
          >
            + Add New Transaction
          </Button>
        </TableCell>
      </TableRow>
    </TransactionTable>
  );
};

export default AllTransactionsTable;
