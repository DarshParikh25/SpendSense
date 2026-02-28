import { currencyFormatter } from "@/lib/formatter";

const IncomeExpenseProgress = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {data.map(({ id, label, value, color }) => (
        <div key={id} className="w-full">
          <div className="flex justify-between text-sm mb-1">
            <span>{label}</span>
            <span className={`font-medium ${color}`}>
              {currencyFormatter.format(value)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncomeExpenseProgress;
