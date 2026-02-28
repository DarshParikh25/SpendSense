export const getDailyBuckets = () => {
  const today = new Date();
  const day = today.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diffToMonday);

  const buckets = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    const day = date.toLocaleString("default", { weekday: "short" });
    const month = date.toLocaleString("default", { month: "short" });
    const dateOfMonth = date.getDate();

    buckets.push({
      label: `${day}, ${month} ${dateOfMonth}`,
      date: date.toISOString().split("T")[0],
      income: 0,
      expense: 0,
    });
  }

  return buckets;
};

export const getMonthlyBuckets = () => {
  const year = new Date().getFullYear();

  return Array.from({ length: 12 }, (_, i) => ({
    label: new Date(year, i).toLocaleString("default", { month: "short" }),
    month: i,
    income: 0,
    expense: 0,
  }));
};

export const getQuarterlyBuckets = () => {
  const year = new Date().getFullYear();

  return [
    { label: "Jan-Mar", months: [0, 1, 2], year, income: 0, expense: 0 },
    { label: "Apr-Jun", months: [3, 4, 5], year, income: 0, expense: 0 },
    { label: "Jul-Sep", months: [6, 7, 8], year, income: 0, expense: 0 },
    { label: "Oct-Dec", months: [9, 10, 11], year, income: 0, expense: 0 },
  ];
};

export const getHalfYearlyBuckets = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const prevYear = currentYear - 1;

  return [
    {
      label: `Jan-Jun '${prevYear}`,
      months: [0, 1, 2, 3, 4, 5],
      year: prevYear,
      income: 0,
      expense: 0,
    },
    {
      label: `Jul-Dec '${prevYear}`,
      months: [6, 7, 8, 9, 10, 11],
      year: prevYear,
      income: 0,
      expense: 0,
    },
    {
      label: `Jan-Jun '${currentYear}`,
      months: [0, 1, 2, 3, 4, 5],
      year: currentYear,
      income: 0,
      expense: 0,
    },
    {
      label: `Jul-Dec '${currentYear}`,
      months: [6, 7, 8, 9, 10, 11],
      year: currentYear,
      income: 0,
      expense: 0,
    },
  ];
};

export const getYearlyBuckets = () => {
  const currentYear = new Date().getFullYear();

  return Array.from({ length: 4 }, (_, i) => {
    const year = currentYear - (3 - i);

    return {
      label: year.toString(),
      year,
      income: 0,
      expense: 0,
    };
  });
};
