import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import TitleSkeleton from "./_components/TitleSkeleton";
import TransactionTableSkeleton from "@/app/(main)/_components/transactions/TransactionTableSkeleton";
import FilterTransactionsSkeleton from "@/app/(main)/_components/transactions/FilterTransactionsSkeleton";

export default function Loading() {
  return (
    <div className="overflow-x-hidden py-8 md:py-12 flex flex-col gap-10">
      {/* Title */}
      <TitleSkeleton
        headingClassName={"h-14 w-40"}
        blClassName={"h-6 w-44"}
        trClassName={"h-10 w-35"}
        brClassName={"h-6 w-30"}
      />

      {/* Bar Chart */}
      <CardSkeleton className={"h-180"} />

      {/* Transactions Table */}
      <div className="flex flex-col gap-4">
        <FilterTransactionsSkeleton count={2} />
        <TransactionTableSkeleton />
      </div>
    </div>
  );
}
