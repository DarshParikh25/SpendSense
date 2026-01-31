import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AccountsDropdown from "./AccountsDropdown";
import LastFiveTransactions from "./LastFiveTransactions";

const RecentTransactions = () => {
  return (
    <Card className="border-2 border-[#bebec0] rounded-xl px-4 py-8 col-span-1 gap-8">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg font-medium text-white">
          Recent Transactions
        </CardTitle>

        {/* Dropdown to select the account for the recent transactions */}
        <AccountsDropdown />
      </CardHeader>

      <CardContent>
        {/* Show the recent 5 transactions for the selected account */}
        <LastFiveTransactions />
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
