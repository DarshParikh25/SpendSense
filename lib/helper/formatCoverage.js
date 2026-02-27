const formatCoverage = (months) => {
  if (!months || months <= 0) return "0 months";

  if (months < 0.23) {
    const days = Math.round(months * 30);

    return `${days} day${days > 1 ? "s" : ""}`;
  }

  if (months < 1) {
    const weeks = Math.round(months * 4.345);

    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  }

  if (months < 2) {
    return `${months.toFixed(1)} months`;
  }

  return `${Math.round(months)} months`;
};

export default formatCoverage;
