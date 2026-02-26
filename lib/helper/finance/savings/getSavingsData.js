const getSavingsData = (currentSavings, currentIncome, savingsTrend) => {
  const savingsRate =
    currentIncome > 0 ? (currentSavings / currentIncome) * 100 : 0;

  return {
    savings: currentSavings,
    savingsRate,
    trend: savingsTrend,
    isPositive: currentSavings >= 0,
  };
};

export default getSavingsData;
