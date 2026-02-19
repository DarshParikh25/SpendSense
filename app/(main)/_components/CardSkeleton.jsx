import { cn } from "@/lib/utils";

const CardSkeleton = ({ className }) => {
  return (
    <div
      className={cn(
        "border-2 border-[#bebec0]/30 rounded-xl skeleton-shimmer-dark",
        className,
      )}
    />
  );
};

export default CardSkeleton;
