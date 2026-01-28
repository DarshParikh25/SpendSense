import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const Loader = ({
  size,
  textColor = "#bebec0",
  position = "flex",
  entireHeight = "h-fit",
  textClassName = "",
}) => {
  return (
    <div
      style={{ color: textColor }}
      className={cn(
        "items-center justify-center gap-2",
        position,
        entireHeight,
      )}
    >
      <LoaderCircle size={size} className="spinner" />
      <span className={textClassName}>Loading...</span>
    </div>
  );
};

export default Loader;
