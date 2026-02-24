const getStats = (transactions = []) => {
  let income = 0;
  let expense = 0;

  const categoryMap = {};

  transactions.forEach((tx) => {
    if (tx.type === "Income") income += tx.amount;
    if (tx.type === "Expense") expense += tx.amount;

    if (tx.type === "Expense") {
      categoryMap[tx.category] = (categoryMap[tx.category] || 0) + tx.amount;
    }
  });

  const topCategories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  return {
    income,
    expense,
    topCategories,
  };
};

export default getStats;
