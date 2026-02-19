import { cn } from "@/lib/utils";

const TextSkeleton = ({ className }) => {
  return <div className={cn("rounded-lg skeleton-shimmer-dark", className)} />;
};

export default TextSkeleton;
