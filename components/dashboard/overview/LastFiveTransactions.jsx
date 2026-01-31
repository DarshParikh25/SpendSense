import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const transactions = [
  {
    title: "Flat Rent",
    recurring: true,
    date: "Dec 12, 2025",
    amount: "1500.00",
    type: "expense",
  },
  {
    title: "Netflix",
    recurring: true,
    date: "Dec 8, 2025",
    amount: "10.00",
    type: "expense",
  },
  {
    title: "Received Salary",
    recurring: false,
    date: "Dec 5, 2025",
    amount: "5549.52",
    type: "income",
  },
  {
    title: "Shopping",
    recurring: false,
    date: "Dec 5, 2025",
    amount: "157.21",
    type: "expense",
  },
  {
    title: "Shopping",
    recurring: false,
    date: "Dec 4, 2025",
    amount: "418.58",
    type: "expense",
  },
];

const LastFiveTransactions = () => {
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
            <span>$</span>
            {amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastFiveTransactions;
