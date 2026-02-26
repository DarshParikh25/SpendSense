import CardShell from "@/components/CardShell";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { healthConfig } from "@/config/healthConfig";
import getHealthTip from "@/lib/helper/finance/tip/getHealthTip";

const HealthCard = ({ health }) => {
  const config = healthConfig[health.status];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <CardShell
      header={
        <CardTitle className="text-white text-md sm:text-lg font-semibold flex items-center justify-baseline gap-1">
          Financial Health
          <Icon className={`w-4 h-4 ${config.color} ${config.animate ?? ""}`} />
        </CardTitle>
      }
      content={
        <CardDescription>
          <p className="capitalize text-sm font-medium">{health.status}</p>
          {health.status.toLowerCase() !== "invalid" && (
            <div className="flex flex-col gap-1">
              <Progress
                value={health.score}
                className={`bg-[#bebec0] mt-2 ${health.color} *:rounded-full`}
              />
              <p className="text-xs sm:text-sm text-right">
                Reason: <span className="text-white">{health.reason}</span>
              </p>
            </div>
          )}
        </CardDescription>
      }
      className={"gap-0 pb-2"}
      footer={
        <p className="w-full flex justify-center item-center mt-6 text-xs text-[#bebec0]/75 text-center">
          Tip: {getHealthTip(health.status)}
        </p>
      }
    />
  );
};

export default HealthCard;
