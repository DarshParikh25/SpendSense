const calculateSavings = (transactions, start, end) => {
  const filtered = transactions.filter((t) => {
    const txDate = new Date(t.date);
    return txDate >= start && txDate <= end;
  });

  const income = filtered
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + (t.amount || 0), 0);

  const expense = filtered
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + (t.amount || 0), 0);

  return {
    income,
    expense,
    savings: income - expense,
  };
};

export default calculateSavings;
