import Heading from "@/app/(main)/_components/Heading";
import TooltipWrapper from "@/components/TooltipWrapper";
import { healthConfig } from "@/config/healthConfig";
import { currencyFormatter } from "@/lib/formatter";
import { formatDistanceToNow } from "date-fns";
import { CheckCircle } from "lucide-react";

const Title = ({ accountDetails, health }) => {
  const config = healthConfig[health.status];

  if (!config) return null;

  const Icon = config.icon;

  const transactions = (accountDetails?.transactions ?? []).sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const lastActivity = transactions.length
    ? formatDistanceToNow(new Date(transactions[0].date), { addSuffix: true })
    : "No activity";

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center items-baseline gap-2 md:gap-4">
      {/* Left */}
      <div className="w-full flex flex-col justify-center items-baseline gap-2">
        <Heading title={accountDetails?.name} />

        {/* Category and Sub-category */}
        <div className="flex items-center justify-baseline gap-2">
          <p className="font-medium text-lg">{accountDetails?.type}</p>
          <span className="w-1.5 h-1.5 bg-[#bebec0] rounded-full" />
          <p className="font-medium text-lg">{accountDetails?.category}</p>
        </div>

        {/* Default and Health */}
        <div className="flex flex-col sm:flex-row items-baseline sm:items-center justify-center gap-2">
          {accountDetails?.isDefault && (
            <>
              <p className="font-medium flex gap-1 items-center justify-center">
                <span>Default Account</span>
                <CheckCircle className="size-4 text-[#fff]" />
              </p>
              <span className="hidden sm:flex w-1.5 h-1.5 bg-[#bebec0] rounded-full" />
            </>
          )}
          <TooltipWrapper
            content={health.reason}
            contentClassName={
              "bg-[#bebec0] text-[#1e1e24] max-w-45 text-center"
            }
          >
            <p className="font-medium flex gap-1 items-center justify-center">
              Health: <span className="capitalize">{health.status}</span>
              <Icon
                className={`w-4 h-4 ${config.color} ${config.animate ?? ""}`}
              />
            </p>
          </TooltipWrapper>
        </div>
      </div>

      {/* Right */}
      <div className="w-full flex flex-col justify-center items-between md:items-end gap-2">
        {/* Balance */}
        <div className="flex flex-col justify-center items-between md:items-end">
          <p className="text-3xl font-bold text-white">
            {currencyFormatter.format(accountDetails?.balance)}
          </p>
          <p>Balance</p>
        </div>

        {/* Tx count and Last used */}
        <div className="flex flex-col sm:flex-row justify-baseline items-baseline sm:items-center gap-2">
          <p>Transactions: {accountDetails?.transactions.length}</p>
          <span className="hidden sm:inline w-1 h-1 bg-[#bebec0] rounded-full" />
          <p>Last Used: {lastActivity}</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
