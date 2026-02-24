import { transactionCategories } from "@/data/categories";

export const categoryColors = Object.fromEntries(
  transactionCategories.map((cat) => [cat.id, cat.color]),
);

export const categoryIcons = Object.fromEntries(
  transactionCategories.map((cat) => [cat.id, cat.icon]),
);
