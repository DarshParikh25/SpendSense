import { Info } from "lucide-react";

import CardShell from "@/components/CardShell";
import TooltipWrapper from "@/components/TooltipWrapper";
import { CardDescription, CardTitle } from "@/components/ui/card";

import { accountCategories } from "@/data/categories";

import { cn } from "@/lib/utils";
import { currencyFormatter } from "@/lib/formatter";
import formatCoverage from "@/lib/helper/formatCoverage";

const LiquidityCard = ({ accounts, assets, liabilities }) => {
  const liquidCategories = accountCategories.flatMap((cat) =>
    cat.liquid ? cat.subCategories.map((sub) => sub.toLowerCase()) : [],
  );

  const liquidAssets = (accounts ?? []).reduce((sum, item) => {
    const type = item.category.toLowerCase();

    if (liquidCategories.includes(type)) return sum + (item.balance || 0);

    return sum;
  }, 0);

  const now = new Date();
  const startMonth = now.getMonth() - 2;

  const start = new Date(now.getFullYear(), startMonth, 1);
  const end = new Date(now.getFullYear(), startMonth + 3, 0);

  const expensesInRange = accounts.reduce((sum, acc) => {
    for (const tx of acc.transactions ?? []) {
      const txDate = new Date(tx.date);

      if (
        tx.type?.toLowerCase() === "expense" &&
        txDate >= start &&
        txDate <= end
      ) {
        sum += tx.amount;
      }
    }

    return sum;
  }, 0);

  const coverage = liquidAssets / expensesInRange;

  const debtRatio = liabilities / assets;

  const data = [
    {
      id: "liquid assets",
      title: "liquid assets",
      value: currencyFormatter.format(liquidAssets),
      info: "Liquid Assets are funds you can quickly access without selling long-term investments — such as cash or savings accounts.",
    },
    {
      id: "debt ratio",
      title: "debt ratio",
      value: debtRatio.toFixed(2),
      info: (
        <p className="flex flex-col justify-center items-center gap-2">
          Debt Ratio indicates how much of your assets are financed through
          debt. Lower values generally mean stronger financial stability.
          <span className="text-black">
            0.3 or below is generally considered healthy.
          </span>
        </p>
      ),
    },
  ];

  return (
    <CardShell
      header={
        <CardTitle className="text-xl font-semibold text-white">
          Liquidity
        </CardTitle>
      }
      content={
        <CardDescription className="text-base flex flex-col gap-6">
          {/* Primary KPI */}
          <div className="flex flex-col items-baseline">
            <p className="capitalize flex justify-center items-center gap-1">
              Coverage
              <TooltipWrapper
                content={
                  "Coverage shows how many months you can cover your expenses using your liquid assets if your income stops."
                }
                contentClassName={
                  "max-w-50 bg-[#bebec0] text-[#1e1e24] text-center font-medium"
                }
              >
                <Info className="w-4 h-4 text-[#bebec0]/75" />
              </TooltipWrapper>
            </p>
            <span className="text-2xl font-bold text-white">
              ~ {formatCoverage(coverage.toFixed(2))}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t pt-4 flex flex-col gap-4">
            {data?.map(({ id, title, value, info }) => (
              <div key={id} className="flex justify-between items-center">
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
                    id === "debt ratio" && "text-green-600",
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

export default LiquidityCard;
