import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { Check, Pencil, X } from "lucide-react";

const EditBudget = ({
  isBudgetEditing,
  handleSaveBudget,
  handleCancelBudget,
  handleEditBudget,
}) => {
  return (
    <>
      {isBudgetEditing ? (
        <>
          <Check
            onClick={handleSaveBudget}
            className="hover:cursor-pointer w-5 h-5 text-green-500"
          />
          <X
            onClick={handleCancelBudget}
            className="hover:cursor-pointer w-5 h-5 text-[#fb5756]"
          />
        </>
      ) : (
        <TooltipWrapper
          content={"Edit"}
          contentClassName={"bg-[#bebec0] text-[#1e1e24] font-medium mt-2"}
        >
          <Pencil
            onClick={handleEditBudget}
            className="hover:cursor-pointer w-3 h-3"
          />
        </TooltipWrapper>
      )}
    </>
  );
};

export default EditBudget;
