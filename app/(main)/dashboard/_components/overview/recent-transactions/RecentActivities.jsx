import { CardTitle } from "@/components/ui/card";
import LastFiveActivities from "./LastFiveTransactions";

import CardShell from "@/components/CardShell";

const RecentActivities = ({ transactions }) => {
  const topTransactions = transactions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
  return (
    <CardShell
      header={
        <CardTitle className="text-xl font-semibold text-white">
          Recent Activity
        </CardTitle>
      }
      content={
        // Show the recent 5 transactions for the selected account
        topTransactions?.length > 0 ? (
          <LastFiveActivities transactions={topTransactions} />
        ) : (
          <p className="font-medium">No recent transactions</p>
        )
      }
      className={"rounded-xl px-4 py-8 gap-8"}
    />
  );
};

export default RecentActivities;
