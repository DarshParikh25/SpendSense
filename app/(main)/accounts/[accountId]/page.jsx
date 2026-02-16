import { db } from "@/data/db";
import Title from "./_component/Title";
import TransactionOverview from "./_component/stats/TransactionOverview";
import AllTransactions from "./_component/transactions/AllTransactions";

const AccountPage = async ({ params }) => {
  const { accountId } = await params;

  const accountDetails = db.find(
    (acc) => acc.account.id === Number(accountId),
  )?.account;

  return (
    <div className="overflow-x-hidden py-8 md:py-12 flex flex-col gap-10">
      <Title accountDetails={accountDetails} />
      <TransactionOverview />
      <AllTransactions accountDetails={accountDetails} />
    </div>
  );
};

export default AccountPage;
