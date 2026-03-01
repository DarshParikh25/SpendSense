import { currencyFormatter } from "@/lib/formatter";

const EPSILON = 1e-9;

const formatWithSign = (value) => {
  const abs = currencyFormatter.format(Math.abs(value));

  if (value > EPSILON) return { value: `+ ${abs}`, category: "positive" };
  if (value < -EPSILON) return { value: `- ${abs}`, category: "negative" };

  return { value: abs, category: "zero" };
};

export default formatWithSign;
