import CardShell from "@/components/CardShell";
import { CardDescription, CardTitle } from "@/components/ui/card";
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
          header={
            <CardTitle className="font-medium text-base">{label}</CardTitle>
          }
          content={
            <CardDescription className={"font-bold text-2xl text-white"}>
              {value}
            </CardDescription>
          }
          className={"gap-2 border-[#bebec0]"}
        />
      ))}
    </div>
  );
};

export default SummaryRow;
