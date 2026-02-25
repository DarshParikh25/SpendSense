"use client";

import {
  setDraftBudget,
  updateBudget,
} from "@/lib/store/features/budget/budgetSlice";
import {
  openBudgetEditor,
  closeBudgetEditor,
} from "@/lib/store/features/ui/uiSlice";
import EditBudget from "./EditBudget";
import ProgressInfo from "./ProgressInfo";
import { Progress } from "@/components/ui/progress";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { selectBudgetProgress } from "@/lib/store/features/budget/budgetSelector";
import { currencyFormatter } from "@/lib/formatter";
import CardShell from "@/components/CardShell";

const Budget = () => {
  const dispatch = useAppDispatch();

  const isBudgetEditing = useAppSelector((state) => state.ui.isBudgetEditing);
  const { draftBudget, total, spent } = useAppSelector((state) => state.budget);

  const progress = useAppSelector(selectBudgetProgress);

  const used = Number(progress) >= 100 ? "100.00" : progress;

  const handleBudgetChange = (e) => {
    dispatch(setDraftBudget(e.target.value));
  };

  const handleEditBudget = () => {
    dispatch(setDraftBudget(total));
    dispatch(openBudgetEditor());
  };

  const handleSaveBudget = () => {
    dispatch(updateBudget(Number(draftBudget)));
    dispatch(closeBudgetEditor());
  };

  const handleCancelBudget = () => {
    dispatch(closeBudgetEditor());
  };

  return (
    <CardShell
      title={`Monthly Budget (Default Account)`}
      desc={
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            {/* Budget and spent information */}
            <ProgressInfo
              isBudgetEditing={isBudgetEditing}
              spent={currencyFormatter.format(spent)}
              total={currencyFormatter.format(total)}
              draftBudget={draftBudget}
              progress={progress}
              handleBudgetChange={handleBudgetChange}
            />

            {/* Edit, Save, or Cancel buttons */}
            <EditBudget
              isBudgetEditing={isBudgetEditing}
              handleSaveBudget={handleSaveBudget}
              handleCancelBudget={handleCancelBudget}
              handleEditBudget={handleEditBudget}
            />
          </div>

          {/* Progress bar */}
          <Progress
            value={used}
            className={"bg-[#bebec0] mt-2 *:bg-[#fb5756] *:rounded-full"}
          />
          <p className="w-fit text-xs sm:text-sm self-end">{progress}% used</p>
        </div>
      }
      className={"gap-0"}
      titleClassName={"text-white text-md sm:text-lg font-semibold"}
    />
  );
};

export default Budget;
