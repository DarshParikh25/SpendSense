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
        <Pencil
          onClick={handleEditBudget}
          className="hover:cursor-pointer w-4 h-4"
        />
      )}
    </>
  );
};

export default EditBudget;
