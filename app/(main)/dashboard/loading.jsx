import { db } from "@/data/db";
import CardSkeleton from "../_components/CardSkeleton";
import TextSkeleton from "../_components/TextSkeleton";

export default function Loading() {
  return (
    <div className="mt-0 py-10 pb-20 w-full flex flex-col justify-center items-center gap-10">
      <TextSkeleton className={"h-14 w-60 self-start"} />

      <CardSkeleton className={"w-full h-40"} />

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
