import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { cn } from "@/lib/utils";

const TooltipWrapper = ({
  children,
  content,
  contentClassName, // for styling TooltipContent
  side = "bottom",
  align = "center",
  sideOffset = 4,
  hideOnDesktop = false, // hide tooltip on large screen
  ...props // for tooltip component
}) => {
  return (
    <Tooltip {...props}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(hideOnDesktop && "lg:hidden", contentClassName)}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipWrapper;
