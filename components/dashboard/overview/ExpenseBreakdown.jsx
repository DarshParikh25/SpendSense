import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExpenseChart from "./ExpenseChart";

const ExpenseBreakdown = () => {
  return (
    <Card className="border-2 border-[#bebec0] rounded-xl col-span-1 px-4 py-8">
      <CardHeader>
        <CardTitle className={"text-lg font-medium text-white"}>
          Monthly Expense Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ExpenseChart />
      </CardContent>
    </Card>
  );
};

export default ExpenseBreakdown;
