const getHealth = (income, expense, balance) => {
  // Prevent invalid data
  if (income < 0 || expense < 0 || balance < 0) {
    return {
      status: "invalid",
      score: 0,
      reason: "Negative financial values detected",
    };
  }

  const totalSavings = income - expense;

  // Savings rate (% of income saved)
  const savingsRate = income > 0 ? (totalSavings / income) * 100 : 0;

  // Expense ratio (% of income spent)
  const expenseRatio = income > 0 ? (expense / income) * 100 : 100;

  // Emergency fund check (3 months rule)
  const emergencyFund = balance >= expense * 3;

  // CRITICAL
  if (balance < 1000 || savingsRate < 0) {
    return {
      status: "critical",
      score: 25,
      reason: "Low balance or negative savings",
      color: "*:bg-[#fb5756]",
      insights: {
        savingsRate: savingsRate.toFixed(1) + "%",
        emergencyFund,
      },
    };
  }

  // WARNING
  if (expenseRatio > 90) {
    return {
      status: "warning",
      score: 50,
      reason: "Expenses are consuming most of your income",
      color: "*:bg-orange-500",
      insights: {
        expenseRatio: expenseRatio.toFixed(1) + "%",
        emergencyFund,
      },
    };
  }

  // EXCELLENT
  if (savingsRate >= 40 && emergencyFund) {
    return {
      status: "excellent",
      score: 100,
      reason: "Strong savings and emergency fund",
      color: "*:bg-green-500",
      insights: {
        savingsRate: savingsRate.toFixed(1) + "%",
        emergencyFund,
      },
    };
  }

  // HEALTHY (default)
  return {
    status: "healthy",
    score: 75,
    reason: "Balanced income and expenses",
    color: "*:bg-[#72FF52]",
    insights: {
      savingsRate: savingsRate.toFixed(1) + "%",
      emergencyFund,
    },
  };
};

export default getHealth;
