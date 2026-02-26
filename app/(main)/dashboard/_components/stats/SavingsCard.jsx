import { CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { currencyFormatter } from "@/lib/formatter";
import { getSavingsTip } from "@/lib/helper/finance/tip/getSavingsTip";
import CardShell from "@/components/CardShell";

const SavingsCard = ({ savingsData }) => {
  const { savings, savingsRate, trend, isPositive } = savingsData;

  const tip = getSavingsTip(savingsRate);

  return (
    <CardShell
      header={
        <CardTitle className="text-white text-md sm:text-lg font-semibold flex items-center justify-between">
          Savings
          {trend !== 0 && (
            <div
              className={`flex items-center text-sm sm:text-base ${
                trend >= 0 ? "text-green-600" : "text-[#fb5756]"
              }`}
            >
              {trend >= 0 ? (
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
              ) : (
                <ArrowDownRight className="w-4 sm:w-5 h-4 sm:h-5" />
              )}
              {Math.abs(trend).toFixed(1)}%
            </div>
          )}
        </CardTitle>
      }
      content={
        <CardDescription>
          <p
            className={`text-xl md:text-2xl font-bold ${
              isPositive ? "text-green-600" : "text-red-500"
            }`}
          >
            {currencyFormatter.format(savings)}
          </p>

          {/* Rate */}
          <p className="text-xs sm:text-sm">
            {savingsRate.toFixed(1)}% of income saved
          </p>
        </CardDescription>
      }
      className={"gap-1 pb-2"}
      footer={
        <p className="w-full flex justify-center item-center mt-6 text-xs text-[#bebec0]/75 text-center">
          Tip: {tip}
        </p>
      }
    />
  );
};

export default SavingsCard;
