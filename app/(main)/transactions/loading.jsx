import TextSkeleton from "../_components/TextSkeleton";
import TransactionTableSkeleton from "../_components/transactions/TransactionTableSkeleton";
import FilterTransactionsSkeleton from "../_components/transactions/FilterTransactionsSkeleton";

const Loading = () => {
  return (
    <div className="overflow-x-hidden py-8 md:py-12 flex flex-col gap-10">
      {/* Title */}
      <TextSkeleton />

      {/* Recent Transactions Table */}
      <div className="flex flex-col gap-4">
        <FilterTransactionsSkeleton count={2} />
        <TransactionTableSkeleton />
      </div>
    </div>
  );
};

export default Loading;
