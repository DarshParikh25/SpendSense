export const getLabelRange = (period, transactions = []) => {
  const now = new Date();
  let start;
  let end;

  switch (period) {
    case "daily": {
      const day = now.getDay();
      const diffToMonday = day === 0 ? -6 : 1 - day;

      start = new Date(now);
      start.setDate(now.getDate() + diffToMonday);

      end = new Date(start);
      end.setDate(start.getDate() + 6);
      break;
    }

    case "monthly": {
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      break;
    }

    case "quarterly": {
      const quarter = Math.ceil(now.getMonth() / 3);
      const startMonth = quarter * 3;

      start = new Date(now.getFullYear(), startMonth, 1);
      end = new Date(now.getFullYear(), startMonth + 3, 0);
      break;
    }

    case "half yearly": {
      const startMonth = now.getMonth() < 6 ? 0 : 6;

      start = new Date(now.getFullYear(), startMonth, 1);
      end = new Date(now.getFullYear(), startMonth + 6, 0);
      break;
    }

    case "yearly": {
      if (!transactions.length) {
        start = new Date(now.getFullYear(), 0, 1);
        end = new Date(now.getFullYear(), 11, 31);
        break;
      }

      const years = transactions.map((tx) => new Date(tx.date).getFullYear());

      const minYear = Math.min(...years);
      const maxYear = Math.max(...years);

      start = new Date(minYear, 0, 1);
      end = new Date(maxYear, 11, 31);
      break;
    }

    default:
      throw new Error(`Unsupported period: ${period}`);
  }

  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};
