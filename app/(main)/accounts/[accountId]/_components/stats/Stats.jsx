import { cn } from "@/lib/utils";
import { currencyFormatter } from "@/lib/formatter";
import formatWithSign from "@/lib/helper/ui/formatWithSign";

import CardShell from "@/components/CardShell";
import { CardDescription, CardTitle } from "@/components/ui/card";

const EPSILON = 1e-9;

const Stats = ({ transactions }) => {
  const expense = transactions
    .filter(
      (tx) => tx.type.toLowerCase() === "expense" && Number(tx.amount) > 0,
    )
    .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

  const income = transactions
    .filter((tx) => tx.type.toLowerCase() === "income" && Number(tx.amount) > 0)
    .reduce((sum, tx) => sum + (Number(tx.amount) || 0), 0);

  const net = income - expense;
  const safeNet = Math.abs(net) < EPSILON ? 0 : net;
  const formattedNet = formatWithSign(safeNet);

  const data = [
    {
      id: "income",
      label: "Total Income",
      value: `+ ${currencyFormatter.format(income)}`,
      style: "text-emerald-500",
    },
    {
      id: "expense",
      label: "Total Expense",
      value: `- ${currencyFormatter.format(expense)}`,
      style: "text-[#fb5756]",
    },
    {
      id: "net",
      label: "Net",
      value: formattedNet.value,
      style:
        formattedNet.category === "positive"
          ? "text-emerald-500"
          : formattedNet.category === "negative"
            ? "text-[#FB5756]"
            : "text-[#bebec0]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full text-center gap-10">
      {data.map(({ id, label, value, style }) => (
        <CardShell
          key={id}
          header={
            <CardTitle className={`font-bold text-2xl ${style}`}>
              {value}
            </CardTitle>
          }
          content={
            <CardDescription className="text-sm">{label}</CardDescription>
          }
          className={cn(
            "flex justify-center items-center gap-0 py-8",
            id === "net" && "col-span-1 sm:col-span-2 md:col-span-1",
          )}
        />
      ))}
    </div>
  );
};

export default Stats;
