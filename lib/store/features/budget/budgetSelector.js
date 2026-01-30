export const selectBudgetProgress = (state) => {
  const { spent, total } = state.budget;

  if (!total || total <= 0) return 0;

  return ((spent / total) * 100).toFixed(2);
};
