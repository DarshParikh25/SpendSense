import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const FormCTAs = ({
  isSubmitting,
  loadingText,
  submitText,
  inSheet,
  cancelBtnClassName,
  submitBtnClassName,
}) => {
  const CancelButton = (
    <Button
      type="button"
      disabled={isSubmitting}
      className={cn(
        "border-[1.5px] cursor-pointer bg-transparent font-semibold",
        cancelBtnClassName,
      )}
    >
      Cancel
    </Button>
  );

  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-6"}>
      {inSheet ? <SheetClose asChild>{CancelButton}</SheetClose> : CancelButton}
      <Button
        type="submit"
        variant="default"
        disabled={isSubmitting}
        className={cn(
          "border-none font-semibold cursor-pointer",
          submitBtnClassName,
        )}
      >
        {isSubmitting ? loadingText : submitText}
      </Button>
    </div>
  );
};

export default FormCTAs;
