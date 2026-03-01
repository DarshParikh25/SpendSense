import CardShell from "@/components/CardShell";
import { CardDescription, CardTitle } from "@/components/ui/card";

const SummaryRow = ({ accounts }) => {
  const stats = [
    {
      id: "accounts",
      label: "Accounts",
      value: accounts.length,
    },
    {
      id: "active",
      label: "Active",
      value: accounts.filter((a) => a.balance > 0).length,
    },
    {
      id: "inactive",
      label: "Inactive",
      value: accounts.filter((a) => a.balance === 0).length,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map(({ id, label, value }) => (
        <CardShell
          key={id}
          header={
            <CardTitle className="font-medium text-base">{label}</CardTitle>
          }
          content={
            <CardDescription className={"font-bold text-2xl text-white"}>
              {value}
            </CardDescription>
          }
          className={"gap-2"}
        />
      ))}
    </div>
  );
};

export default SummaryRow;
