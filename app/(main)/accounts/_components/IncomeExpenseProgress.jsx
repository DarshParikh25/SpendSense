import { Progress } from "@/components/ui/progress";
import { currencyFormatter } from "@/lib/formatter";

const IncomeExpenseProgress = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {data.map(({ label, value, percent, color }, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-between text-sm mb-1">
            <span>{label}</span>
            <span className="text-white font-medium">
              {currencyFormatter.format(value)}
            </span>
          </div>

          <Progress
            value={percent}
            className={`bg-[#bebec0] mt-2 ${color} *:rounded-full`}
          />
        </div>
      ))}
    </div>
  );
};

export default IncomeExpenseProgress;
