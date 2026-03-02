import { Info } from "lucide-react";

import CardShell from "@/components/CardShell";
import { CardDescription, CardTitle } from "@/components/ui/card";
import TooltipWrapper from "@/components/TooltipWrapper";

import { cn } from "@/lib/utils";
import { currencyFormatter } from "@/lib/formatter";

const NetPositionCard = ({ assets, liabilities }) => {
  const netWorth = assets - liabilities;

  const data = [
    {
      id: "assets",
      title: "assets",
      value: currencyFormatter.format(assets),
      info: "Assets are everything you own that has financial value — such as bank balances, investments, property, or cash.",
    },
    {
      id: "liabilities",
      title: "liabilities",
      value: currencyFormatter.format(liabilities),
      info: "Liabilities are the amounts you owe — including loans, credit cards, or other debts.",
    },
  ];

  return (
    <CardShell
      header={
        <CardTitle className="text-xl font-semibold text-white">
          Net Position
        </CardTitle>
      }
      content={
        <CardDescription className="text-base flex flex-col gap-6">
          {/* Net Worth */}
          <div className="flex flex-col items-baseline">
            <p className="capitalize flex justify-center items-center gap-1">
              Net Worth
              <TooltipWrapper
                content={
                  <p className="flex flex-col justify-center items-center gap-2">
                    Net Worth is what remains after subtracting your liabilities
                    from your assets. It represents your true financial
                    position.
                    <span className="text-black">
                      Formula: Assets − Liabilities
                    </span>
                  </p>
                }
                contentClassName={
                  "max-w-55 bg-[#bebec0] text-[#1e1e24] text-center font-medium"
                }
              >
                <Info className="w-4 h-4 text-[#bebec0]/75" />
              </TooltipWrapper>
            </p>
            <span className="text-2xl font-bold text-emerald-500">
              {currencyFormatter.format(netWorth)}
            </span>
          </div>

          {/* Breakdown */}
          <div className="border-t pt-4 flex flex-col gap-3">
            {data?.map(({ id, title, value, info }) => (
              <div key={id} className="flex justify-between">
                <p className="capitalize flex justify-center items-center gap-1">
                  {title}
                  <TooltipWrapper
                    content={info}
                    contentClassName={
                      "max-w-55 bg-[#bebec0] text-[#1e1e24] text-center font-medium"
                    }
                  >
                    <Info className="w-4 h-4 text-[#bebec0]/75" />
                  </TooltipWrapper>
                </p>
                <span
                  className={cn(
                    "font-medium",
                    id === "liabilities" && "text-[#fb5756]",
                  )}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </CardDescription>
      }
      className={"px-4 py-6"}
    />
  );
};

export default NetPositionCard;
