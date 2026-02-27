import { accountCategoriesByType } from "@/config/categoryConfig";
import LiquidityCard from "./LiquidityCard";
import NetPositionCard from "./NetPositionCard";

const Summary = ({ accounts }) => {
  const { asset = [], liability = [] } = accountCategoriesByType();

  const totalAssets = accounts
    .filter((acc) => asset.includes(acc.type))
    .reduce((sum, item) => sum + (item.balance || 0), 0);

  const totalLiabilities = accounts
    .filter((acc) => liability.includes(acc.type))
    .reduce((sum, item) => sum + (item.balance || 0), 0);

  return (
    <div className="grid grid-cols-1 gap-10">
      {/* NET POSITION */}
      <NetPositionCard assets={totalAssets} liabilities={totalLiabilities} />

      {/* LIQUIDITY */}
      <LiquidityCard
        accounts={accounts}
        assets={totalAssets}
        liabilities={totalLiabilities}
      />
    </div>
  );
};

export default Summary;
