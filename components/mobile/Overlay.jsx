import { cn } from "@/lib/utils";

const Overlay = ({ isOpen, handleClick }) => {
  return (
    <div
      className={cn(
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        "fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300",
      )}
      onClick={handleClick}
    />
  );
};

export default Overlay;
