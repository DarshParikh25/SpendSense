import Heading from "@/app/(main)/_components/Heading";
import { currencyFormatter } from "@/lib/formatter";

const Title = ({ accountDetails }) => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center">
      <div className="flex flex-col justify-center items-baseline gap-2">
        <Heading title={accountDetails.name} />
        <p className="font-medium text-lg">{accountDetails.type}</p>
      </div>
      <div className="flex flex-col justify-center items-end gap-1">
        <p className="text-2xl font-bold text-white">
          {currencyFormatter.format(accountDetails.balance)}
        </p>
        <p className="font-medium">
          {accountDetails.transactions.length} transactions
        </p>
      </div>
    </div>
  );
};

export default Title;
