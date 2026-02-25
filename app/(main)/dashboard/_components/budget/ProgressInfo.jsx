import { Input } from "@/components/ui/input";

import { TriangleAlert } from "lucide-react";

const ProgressInfo = ({
  isBudgetEditing,
  spent,
  total,
  draftBudget,
  progress,
  handleBudgetChange,
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {/* For alerts, if budget exceeds 80% */}
      {!isBudgetEditing && progress >= 80 && (
        <TriangleAlert className="w-5 h-5 text-[#fb5756] animate-pulse" />
      )}

      {/* Input for editing the budget */}
      <span>
        {isBudgetEditing ? (
          <Input
            value={draftBudget}
            onChange={handleBudgetChange}
            className={"focus-visible:ring-0!"}
            type="number"
          />
        ) : (
          `${spent} of ${total} spent`
        )}
      </span>
    </div>
  );
};

export default ProgressInfo;
