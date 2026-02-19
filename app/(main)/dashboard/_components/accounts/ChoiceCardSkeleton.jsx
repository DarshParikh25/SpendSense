import { db } from "@/data/db";
import CardSkeleton from "@/app/(main)/_components/CardSkeleton";

const ChoiceCardSkeleton = () => {
  return (
    <div>
      {Array.from({ length: db.length }).map((_, i) => (
        <CardSkeleton key={i} className="h-60" />
      ))}
    </div>
  );
};

export default ChoiceCardSkeleton;
