import { cn } from "@/lib/utils";
import { currencyFormatter } from "@/lib/formatter";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { format } from "date-fns";

const LastFiveTransactions = ({ transactions }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {transactions.map(
        ({ id, description, isRecurring, date, amount, type }) => (
          <div key={id} className="flex items-center justify-between">
            <div>
              <h4 className="font-bold">
                {description || "Untitled"}
                <span>{isRecurring && "(Recurring)"}</span>
              </h4>
              <p className="opacity-75 font-medium">{format(date, "PP")}</p>
            </div>
            <div
              className={cn(
                type === "Expense" ? "text-[#FB5756]" : "text-emerald-500",
                "flex justify-center items-center gap-0.5 w-fit",
              )}
            >
              <span>
                {type === "Expense" ? (
                  <ArrowDownRight className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </span>
              {currencyFormatter.format(amount)}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default LastFiveTransactions;
