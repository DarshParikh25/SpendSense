import { currencyFormatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";

const EPSILON = 1e-9;

const Stats = ({ transactionData }) => {
  const expense = transactionData
    .filter(({ expense }) => Number(expense) > 0)
    .reduce((sum, { expense }) => sum + (Number(expense) || 0), 0);

  const income = transactionData
    .filter(({ income }) => Number(income) > 0)
    .reduce((sum, { income }) => sum + (Number(income) || 0), 0);

  const net = income - expense;
  const safeNet = Math.abs(net) < EPSILON ? 0 : net;

  const isPositive = net > EPSILON;
  const isNegative = net < -EPSILON;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full text-center">
      <div className="">
        <h4 className="text-sm">Total Income</h4>
        <p className="font-bold text-lg text-[#72FF52]">
          + {currencyFormatter.format(income)}
        </p>
      </div>
      <div className="">
        <h4 className="text-sm">Total Expense</h4>
        <p className="font-bold text-lg text-[#FB5756]">
          - {currencyFormatter.format(expense)}
        </p>
      </div>
      <div>
        <h4 className="text-sm">Net</h4>
        <p
          className={cn(
            isPositive ? "text-[#72FF52]" : isNegative && "text-[#FB5756]",
            "font-bold text-lg",
          )}
        >
          {isPositive && "+"} {currencyFormatter.format(safeNet)}
        </p>
      </div>
    </div>
  );
};

export default Stats;
