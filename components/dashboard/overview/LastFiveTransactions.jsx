import { currencyFormatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const LastFiveTransactions = ({ transactions }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {transactions.map(({ title, recurring, date, amount, type }, index) => (
        <div key={index} className="flex items-center justify-between">
          <div>
            <h4 className="font-bold">
              {title || "Untitled"}
              <span>{recurring && "(Recurring)"}</span>
            </h4>
            <p className="opacity-75 font-medium">{date}</p>
          </div>
          <div
            className={cn(
              type === "expense" ? "text-[#FB5756]" : "text-[#72FF52]",
              "flex justify-center items-center gap-0.5 w-fit",
            )}
          >
            <span>
              {type === "expense" ? (
                <ArrowDownRight className="w-5 h-5" />
              ) : (
                <ArrowUpRight className="w-5 h-5" />
              )}
            </span>
            {currencyFormatter.format(amount)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastFiveTransactions;
