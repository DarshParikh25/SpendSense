import { Progress } from "@/components/ui/progress";
import { healthConfig } from "@/config/healthConfig";

const HealthStatus = ({ health }) => {
  const config = healthConfig[health.status];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <div className="w-full">
      <p className="text-sm flex items-center justify-baseline gap-1">
        Health: <span className="capitalize text-white">{health.status}</span>
        <Icon className={`w-4 h-4 ${config.color} ${config.animate ?? ""}`} />
      </p>

      {health.status.toLowerCase() !== "invalid" && (
        <div className="flex flex-col gap-1">
          <Progress
            value={health.score}
            className={`bg-[#bebec0] mt-2 ${health.color} *:rounded-full`}
          />
          <p className="text-xs text-right">
            Reason: <span className="text-white">{health.reason}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default HealthStatus;
