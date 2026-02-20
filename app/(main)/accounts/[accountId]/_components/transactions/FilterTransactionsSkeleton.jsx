import CardSkeleton from "@/app/(main)/_components/CardSkeleton";

const FilterTransactionsSkeleton = () => {
  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
      <CardSkeleton className={"h-10 w-full rounded-lg border"} />

      <div className="flex justify-center items-center gap-4">
        {Array.from({ length: 2 }).map((_, i) => {
          <CardSkeleton className={"h-10 min-w-35 w-full rounded-lg border"} />;
        })}
      </div>
    </div>
  );
};

export default FilterTransactionsSkeleton;
