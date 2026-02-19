import { cn } from "@/lib/utils";

const Heading = ({ title, className }) => {
  return (
    <h1
      className={cn(
        "text-[#fb5756] font-bold text-4xl lg:text-5xl tracking-tight",
        className,
      )}
    >
      {title}
    </h1>
  );
};

export default Heading;
