import CardShell from "@/components/CardShell";
import { currencyFormatter } from "@/lib/formatter";

const SummaryRow = ({ accounts }) => {
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  const stats = [
    {
      label: "Total Balance",
      value: currencyFormatter.format(totalBalance),
    },
    {
      label: "Accounts",
      value: accounts.length,
    },
    {
      label: "Active",
      value: accounts.filter((a) => a.balance > 0).length,
    },
    {
      label: "Inactive",
      value: accounts.filter((a) => a.balance === 0).length,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value }, index) => (
        <CardShell
          key={index}
          title={label}
          desc={value}
          className={"gap-2 border-[#bebec0]"}
          titleClassName={"font-medium text-base"}
          descClassName={"font-bold text-2xl text-white"}
        />
      ))}
    </div>
  );
};

export default SummaryRow;
