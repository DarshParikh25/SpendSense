import Link from "next/link";
import { SquarePen } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/app/(main)/_components/Heading";
import ExportBtn from "./ExportBtn";

const TransactionsHeader = ({ transactions }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-baseline sm:items-center gap-4 sm:gap-4">
      <Heading title={"Transactions"} />

      <div className="w-full flex flex-row flex-wrap sm:justify-end gap-4">
        {/* Add Transaction */}
        <Button
          className={
            "w-full sm:w-fit font-bold bg-[#FB5756] hover:bg-[#ff6f6f] text-[#fff]"
          }
          asChild
        >
          <Link href={"/transactions/create"}>
            <SquarePen className="h-4 w-4" />
            <span className={"font-semibold"}>Add Transaction</span>
          </Link>
        </Button>

        {/* Export */}
        <ExportBtn transactions={transactions} />
      </div>
    </div>
  );
};

export default TransactionsHeader;
