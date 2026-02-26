import {
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  AlertOctagon,
  XCircle,
} from "lucide-react";

export const healthConfig = {
  excellent: {
    color: "text-green-500",
    icon: CheckCircle,
  },

  healthy: {
    color: "text-[#72FF52]",
    icon: TrendingUp,
  },

  warning: {
    color: "text-orange-500",
    icon: AlertTriangle,
    animate: "animate-pulse",
  },

  critical: {
    color: "text-[#fb5756]",
    icon: AlertOctagon,
    animate: "animate-pulse",
  },

  invalid: {
    color: "text-gray-400",
    icon: XCircle,
  },
};
