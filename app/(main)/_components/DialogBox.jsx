import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const DialogBox = ({
  open,
  setOpen,
  contentClassName,
  title,
  titleClassName,
  descClassName,
  children,
  footer,
  footerClassName,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={cn(
          "bg-[#1e1e24] flex flex-col gap-6 [&>button]:focus-within:ring-0 [&>button]:focus-visible:ring-0",
          contentClassName,
        )}
      >
        {/* Header */}
        {title && (
          <DialogHeader>
            <DialogTitle
              className={cn("text-[#fb5756] text-2xl", titleClassName)}
            >
              {title}
            </DialogTitle>
          </DialogHeader>
        )}

        {/* Body */}
        <div className={cn("flex flex-col gap-6", descClassName)}>
          {children}
        </div>

        {/* Footer */}
        {footer && <div className={footerClassName}>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
