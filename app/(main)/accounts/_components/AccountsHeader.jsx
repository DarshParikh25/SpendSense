import Heading from "@/app/(main)/_components/Heading";
import { currencyFormatter } from "@/lib/formatter";

const AccountsHeader = ({ accounts }) => {
  const totalBalance = accounts.reduce(
    (sum, acc) => sum + (acc.balance || 0),
    0,
  );

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
      <div className="flex flex-col justify-center items-baseline gap-2">
        <Heading title={"Accounts"} />

        <p className="text-base md:text-lg font-semibold">
          Manage and analyze your financial accounts
        </p>
      </div>

      <div className="flex flex-col gap-1 justify-center md:items-end">
        <p className="text-white text-4xl font-bold">
          {currencyFormatter.format(totalBalance)}
        </p>
        <p className="text-[#bebec0]/75">Total Balance</p>
      </div>
    </div>
  );
};

export default AccountsHeader;
