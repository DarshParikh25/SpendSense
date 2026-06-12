"use client";

import AlertDialogBox from "@/app/(main)/_components/AlertDialogBox";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

const FormCTAs = ({
  isSubmitting,
  loadingText,
  submitText,
  inSheet,
  Icon,
  title,
  desc,
  cancelText,
  actionText,
  cancelBtnClassName,
  submitBtnClassName,
  handleLeaveConfirm,
  handleConfirm,
}) => {
  const CancelButton = (
    <Button
      type="button"
      disabled={isSubmitting}
      className={`border-[1.5px] cursor-pointer bg-transparent font-semibold
        ${cancelBtnClassName}`}
    >
      Cancel
    </Button>
  );

  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-6"}>
      {inSheet ? (
        <SheetClose asChild>{CancelButton}</SheetClose>
      ) : (
        <AlertDialogBox
          onConfirm={handleLeaveConfirm}
          Icon={Icon}
          title={title}
          desc={desc}
          cancelText={cancelText}
          actionText={actionText}
        >
          {CancelButton}
        </AlertDialogBox>
      )}
      <Button
        type="submit"
        variant="default"
        onClick={handleConfirm}
        disabled={isSubmitting}
        className={`border-none font-semibold cursor-pointer
          ${submitBtnClassName}`}
      >
        {isSubmitting ? loadingText : submitText}
      </Button>
    </div>
  );
};

export default FormCTAs;
