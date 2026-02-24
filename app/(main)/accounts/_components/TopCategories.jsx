import { currencyFormatter } from "@/lib/formatter";

const TopCategories = ({ categories }) => {
  return (
    <div className="flex flex-col justify-between gap-1">
      <p className="text-sm font-medium">Top Spending:</p>

      {categories.map(([category, total], index) => (
        <p key={index} className="text-sm text-white flex justify-between">
          <span>{category}</span>
          <span>{currencyFormatter.format(total)}</span>
        </p>
      ))}
    </div>
  );
};

export default TopCategories;
