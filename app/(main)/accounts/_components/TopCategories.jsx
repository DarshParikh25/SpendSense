import { currencyFormatter } from "@/lib/formatter";

const TopCategories = ({ categories }) => {
  return (
    <div className="flex flex-col justify-between gap-1">
      <p className="text-sm font-medium">Top Spending:</p>

      {categories.length > 0 ? (
        categories.map(([category, total], index) => (
          <p key={index} className="text-sm flex justify-between">
            <span>{category}</span>
            <span>{currencyFormatter.format(total)}</span>
          </p>
        ))
      ) : (
        <p className="text-sm italic">No expense activity yet</p>
      )}
    </div>
  );
};

export default TopCategories;
