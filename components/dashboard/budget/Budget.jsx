"use client";

import { Progress } from "@/components/ui/progress";
import { selectBudgetProgress } from "@/lib/store/features/budget/budgetSelector";
import {
  setDraftBudget,
  updateBudget,
} from "@/lib/store/features/budget/budgetSlice";
import {
  openBudgetEditor,
  closeBudgetEditor,
} from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";

import ProgressInfo from "./ProgressInfo";
import EditBudget from "./EditBudget";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="border-2 border-[#bebec0] lg:col-span-2 gap-0">
      <CardHeader>
        <CardTitle className="text-white text-lg font-medium">
          Monthly Budget (Default Account)
        </CardTitle>
      </CardHeader>
      <CardContent className={"flex flex-col gap-1"}>
        <div className="flex items-center gap-2">
          {/* Budget and spent information */}
          <ProgressInfo
            isBudgetEditing={isBudgetEditing}
            spent={spent}
            total={total}
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
        <p className="w-fit text-sm self-end">{progress}% used</p>
      </CardContent>
    </Card>
  );
};

export default Budget;
