import CardShell from "@/components/CardShell";
import { Progress } from "@/components/ui/progress";
import { healthConfig } from "@/config/healthConfig";

const HealthCard = ({ health }) => {
  const config = healthConfig[health.status];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <CardShell
      title={
        <span className="text-white text-md sm:text-lg font-semibold flex items-center justify-baseline gap-1">
          Financial Health
          <Icon className={`w-4 h-4 ${config.color} ${config.animate ?? ""}`} />
        </span>
      }
      desc={
        <div>
          <p className="capitalize text-sm sm:text-base font-medium">
            {health.status}
          </p>
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
        </div>
      }
      className={"gap-0"}
    />
  );
};

export default HealthCard;
