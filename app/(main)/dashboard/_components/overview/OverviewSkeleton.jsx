import CardSkeleton from "@/app/(main)/_components/CardSkeleton";

const OverviewSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 2 }).map((_, i) => (
        <CardSkeleton key={i} className={"h-120"} />
      ))}
    </div>
  );
};

export default OverviewSkeleton;
