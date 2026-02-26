import {
  getMonthRange,
  getPreviousMonthRange,
} from "@/lib/helper/date/getMonthRanges";
import calculateSavings from "./savings/calculateSavings";

const getMonthlyComparison = (accounts) => {
  const transactions = accounts.flatMap((item) => item.transactions || []);

  const currentRange = getMonthRange();
  const previousRange = getPreviousMonthRange();

  const current = calculateSavings(
    transactions,
    currentRange.start,
    currentRange.end,
  );

  const previous = calculateSavings(
    transactions,
    previousRange.start,
    previousRange.end,
  );

  const trend =
    previous.savings !== 0
      ? ((current.savings - previous.savings) / Math.abs(previous.savings)) *
        100
      : 0;

  return {
    currentIncome: current.income,
    currentExpense: current.expense,
    currentSavings: current.savings,

    previousIncome: previous.income,
    previousExpense: previous.expense,
    previousSavings: previous.savings,

    savingsTrend: trend,
  };
};

export default getMonthlyComparison;
