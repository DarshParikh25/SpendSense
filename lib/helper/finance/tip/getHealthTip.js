const getHealthTip = (status) => {
  const tips = {
    excellent: "Excellent work! Consider investing your surplus",

    healthy: "Try saving at least 20% of your income each month",

    warning: "Review recent expenses to avoid overspending",

    critical: "Focus on reducing expenses and building an emergency fund",

    invalid: "Add more data to get accurate insights",
  };

  return tips[status] || "";
};

export default getHealthTip;
