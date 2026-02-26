import { db } from "@/data/db";
import CardSkeleton from "../_components/CardSkeleton";
import TextSkeleton from "../_components/TextSkeleton";

export default function Loading() {
  return (
    <div className="mt-0 py-10 pb-20 w-full flex flex-col justify-center items-baseline gap-10">
      <div className="flex flex-col gap-2">
        <TextSkeleton className={"h-14 w-60 self-start"} />
        <TextSkeleton className={"h-8 w-120 self-start"} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} className={"w-105 h-40"} />
        ))}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {Array.from({ length: 2 }).map((_, i) => (
          <CardSkeleton key={i} className={"h-120"} />
        ))}
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <CardSkeleton className={"h-60"} />
        {Array.from({ length: db.length }).map((_, i) => (
          <CardSkeleton key={i} className={"h-60"} />
        ))}
      </div>
    </div>
  );
}
