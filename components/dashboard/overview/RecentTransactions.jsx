import AccountsDropdown from "./AccountsDropdown";

const RecentTransactions = () => {
  return (
    <div className="border-2 border-[#bebec0] rounded-xl p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
        <AccountsDropdown />
      </div>
    </div>
  );
};

export default RecentTransactions;
