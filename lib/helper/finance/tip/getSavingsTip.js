export function getSavingsTip(savingsRate) {
  if (savingsRate >= 40) return "Excellent savings rate! Consider investing";

  if (savingsRate >= 20) return "Healthy savings habit. Keep it consistent.";

  if (savingsRate > 0) return "Try increasing savings to 20%";

  return "Expenses exceeded income. Let's rebalance";
}
