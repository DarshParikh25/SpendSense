import FilterTransactions from "./FilterTransactions";
import TransactionTable from "./TransactionTable";

const AllTransactions = ({ accountDetails }) => {
  return (
    <div className="flex flex-col gap-4">
      <FilterTransactions />
      <TransactionTable accountDetails={accountDetails} />
    </div>
  );
};

export default AllTransactions;
