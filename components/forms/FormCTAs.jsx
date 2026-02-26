"use client";

import DialogBox from "@/app/(main)/_components/DialogBox";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

const FormCTAs = ({
  isSubmitting,
  loadingText,
  submitText,
  inSheet,
  handleCancel,
  handleConfirm,
  Icon,
  title,
  desc,
  actionText,
  cancelBtnClassName,
  submitBtnClassName,
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
        <DialogBox
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          Icon={Icon}
          title={title}
          desc={desc}
          actionText={actionText}
        >
          {CancelButton}
        </DialogBox>
      )}
      <Button
        type="submit"
        variant="default"
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
