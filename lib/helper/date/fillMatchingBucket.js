const fillWeeklyBuckets = (buckets, date) => {
  const iso = date.toISOString().split("T")[0];

  return buckets.find((b) => b.date === iso);
};

const fillMonthlyBuckets = (buckets, date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const currentYear = new Date().getFullYear();

  if (year !== currentYear) return;

  return buckets.find((b) => b.month === month);
};

const fillQuarterlyBuckets = (buckets, date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  return buckets.find((b) => b.year === year && b.months.includes(month));
};

const fillHalfYearlyBuckets = (buckets, date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  return buckets.find((b) => b.year === year && b.months.includes(month));
};

const fillYearlyBuckets = (buckets, date) => {
  const year = date.getFullYear();

  return buckets.find((b) => b.year === year);
};

export const fillMatchingBucket = (buckets, transactions, period) => {
  transactions.forEach((tx) => {
    const date = new Date(tx.date);
    let bucket;

    switch (period) {
      case "weekly": {
        bucket = fillWeeklyBuckets(buckets, date);
        break;
      }

      case "monthly": {
        bucket = fillMonthlyBuckets(buckets, date);
        break;
      }

      case "quarterly": {
        bucket = fillQuarterlyBuckets(buckets, date);
        break;
      }

      case "half yearly": {
        bucket = fillHalfYearlyBuckets(buckets, date);
        break;
      }

      case "yearly": {
        bucket = fillYearlyBuckets(buckets, date);
        break;
      }

      default:
        return;
    }

    if (!bucket) return;

    if (tx.type === "Income") {
      bucket.income += tx.amount;
    } else if (tx.type === "Expense") {
      bucket.expense += tx.amount;
    }
  });

  return buckets;
};
