import { addDays, addMonths, addWeeks, addYears } from "date-fns";

export default function calculateNextRecurringDate(date, interval) {
  const base = new Date(date);

  switch (interval) {
    case "daily":
      return addDays(base, 1);

    case "weekly":
      return addWeeks(base, 1);

    case "monthly":
      return addMonths(base, 1);

    case "quarterly":
      return addMonths(base, 3);

    case "half_yearly":
      return addMonths(base, 6);

    case "yearly":
      return addYears(base, 1);

    default:
      return null;
  }
}
