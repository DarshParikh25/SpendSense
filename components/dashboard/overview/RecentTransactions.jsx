import AccountsDropdown from "./AccountsDropdown";
import LastFiveTransactions from "./LastFiveTransactions";

const RecentTransactions = () => {
  return (
    <div className="flex flex-col justify-center gap-6 border-2 border-[#bebec0] rounded-xl p-10 col-span-1">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-white">Recent Transactions</h2>

        {/* Dropdown to select the account for the recent transactions */}
        <AccountsDropdown />
      </div>

      {/* Show the recent 5 transactions for the selected account */}
      <LastFiveTransactions />
    </div>
  );
};

export default RecentTransactions;
