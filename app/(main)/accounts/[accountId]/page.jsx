import Title from "./_component/Title";
import TransactionOverview from "./_component/stats/TransactionOverview";
import FilterTransactions from "./_component/transactions/FilterTransactions";
import TransactionTable from "./_component/transactions/TransactionTable";

// This will come from DB
const accountsInfo = [
  {
    id: 1,
    name: "Work",
    isDefault: false,
    balance: "5941.00",
    type: "Current Account",
    transactionCount: 34,
  },
  {
    id: 2,
    name: "Personal",
    isDefault: true,
    balance: "152124.00",
    type: "Savings Account",
    transactionCount: 178,
  },
];

const AccountPage = async ({ params }) => {
  const { accountId } = await params;

  const accountDetails = accountsInfo[accountId - 1];

  return (
    <div className="overflow-x-hidden py-8 md:py-12 flex flex-col gap-10">
      <Title accountDetails={accountDetails} />
      <TransactionOverview />
      <div className="flex flex-col gap-4">
        <FilterTransactions />
        <TransactionTable />
      </div>
    </div>
  );
};

export default AccountPage;
