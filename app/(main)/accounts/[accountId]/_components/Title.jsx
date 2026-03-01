import Heading from "@/app/(main)/_components/Heading";
import { currencyFormatter } from "@/lib/formatter";
import { formatDistanceToNow } from "date-fns";

const Title = ({ accountDetails }) => {
  const transactions = (accountDetails.transactions ?? []).sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const lastActivity = transactions.length
    ? formatDistanceToNow(new Date(transactions[0].date), { addSuffix: true })
    : "No activity";

  return (
    <div className="flex flex-col justify-center items-baseline md:items-end gap-4 md:gap-0">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center items-baseline gap-0 md:gap-4">
        <div className="flex flex-col justify-center items-baseline gap-2">
          <Heading title={accountDetails.name} />
          <div className="flex items-center justify-baseline gap-2">
            <p className="font-medium text-lg">{accountDetails.type}</p>
            <span className="w-1.5 h-1.5 bg-[#bebec0] rounded-full" />
            <p className="font-medium text-lg">{accountDetails.type}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-baseline md:items-end">
          <p className="text-3xl font-bold text-white">
            {currencyFormatter.format(accountDetails.balance)}
          </p>
          <p>Balance</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-baseline md:justify-end items-baseline sm:items-center gap-0 sm:gap-2">
        <p>Transactions: {accountDetails.transactions.length}</p>
        <span className="hidden sm:inline w-1 h-1 bg-[#bebec0] rounded-full" />
        <p>Last Used: {lastActivity}</p>
      </div>
    </div>
  );
};

export default Title;
