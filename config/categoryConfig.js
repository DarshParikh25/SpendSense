import { accountCategories, transactionCategories } from "@/data/categories";

export const categoryColors = Object.fromEntries(
  transactionCategories.map((cat) => [cat.id, cat.color]),
);

export const categoryIcons = Object.fromEntries(
  transactionCategories.map((cat) => [cat.id, cat.icon]),
);

export const accountTypes = Object.fromEntries(
  accountCategories.map((cat) => [cat.name, cat.subCategories]),
);

export const accountTypesColors = Object.fromEntries(
  accountCategories.map((cat) => [cat.name, cat.color]),
);

export const accountCategoriesByType = () => {
  return accountCategories.reduce((acc, cat) => {
    const type = cat.type;

    !acc[type] && (acc[type] = []);

    acc[type].push(cat.name);

    return acc;
  }, {});
};
