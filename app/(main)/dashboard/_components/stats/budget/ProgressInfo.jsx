import { Input } from "@/components/ui/input";

const ProgressInfo = ({
  isBudgetEditing,
  spent,
  total,
  draftBudget,
  handleBudgetChange,
}) => {
  return (
    //  Input for editing the budget
    isBudgetEditing ? (
      <Input
        value={draftBudget}
        onChange={handleBudgetChange}
        className={"focus-visible:ring-0!"}
        type="number"
      />
    ) : (
      `${spent} of ${total} spent`
    )
  );
};

export default ProgressInfo;
