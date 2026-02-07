import RecentTransactions from "./recent-transactions/RecentTransactions";
import ExpenseBreakdown from "./expense-breakdown/ExpenseBreakdown";

const Overview = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      <RecentTransactions />
      <ExpenseBreakdown />
    </div>
  );
};

export default Overview;
