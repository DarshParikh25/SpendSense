import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AccountsDropdown from "./AccountsDropdown";
import LastFiveTransactions from "./LastFiveTransactions";

const RecentTransactions = () => {
  const transactions = [
    {
      title: "Flat Rent",
      recurring: true,
      date: "Dec 12, 2025",
      amount: "1500.00",
      type: "expense",
    },
    {
      title: "Netflix",
      recurring: true,
      date: "Dec 8, 2025",
      amount: "10.00",
      type: "expense",
    },
    {
      title: "Received Salary",
      recurring: false,
      date: "Dec 5, 2025",
      amount: "5549.52",
      type: "income",
    },
    {
      title: "Shopping",
      recurring: false,
      date: "Dec 5, 2025",
      amount: "157.21",
      type: "expense",
    },
    {
      title: "Shopping",
      recurring: false,
      date: "Dec 4, 2025",
      amount: "418.58",
      type: "expense",
    },
  ];

  return (
    <Card className="border-2 border-[#bebec0] rounded-xl px-4 py-8 col-span-1 gap-8">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-xl font-semibold text-white">
          Recent Transactions
        </CardTitle>

        {/* Dropdown to select the account for the recent transactions */}
        <AccountsDropdown />
      </CardHeader>

      <CardContent className={"h-full flex justify-center items-center"}>
        {/* Show the recent 5 transactions for the selected account */}
        {transactions?.length > 0 ? (
          <LastFiveTransactions transactions={transactions} />
        ) : (
          <p className="font-medium">No recent transactions</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
