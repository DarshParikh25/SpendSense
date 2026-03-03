const compareStrings = (a, b, factor) => a.localeCompare(b) * factor;

const compareNumbers = (a, b, factor) => (a - b) * factor;

const getFilteredAndSortedTransactions = (
  transactions,
  transactionType,
  recurringType,
  selectedAccount,
  searchLower,
  sortConfig,
) => {
  return transactions
    .filter((transaction) => {
      if (
        transactionType !== "All Types" &&
        transaction.type !== transactionType
      )
        return false;

      if (recurringType === "Recurring Only" && !transaction.isRecurring)
        return false;

      if (recurringType === "Non-recurring Only" && transaction.isRecurring)
        return false;

      if (
        selectedAccount !== "All Accounts" &&
        transaction.accountName !== selectedAccount
      )
        return false;

      if (searchLower) {
        const match =
          transaction.description?.toLowerCase().includes(searchLower) ||
          transaction.category?.toLowerCase().includes(searchLower);

        if (!match) return false;
      }

      return true;
    })
    .map((transaction) => ({
      ...transaction,
      timestamp: new Date(transaction.date).getTime(),
    }))
    .sort((a, b) => {
      const { key, direction } = sortConfig;
      const factor = direction === "asc" ? 1 : -1;

      if (key === "date") {
        if (a.timestamp !== b.timestamp) {
          return compareNumbers(a.timestamp, b.timestamp, factor);
        }

        // fallback: sort by amount if same dates
        return compareNumbers(a.amount, b.amount, factor);
      }

      if (key === "amount") {
        if (a.amount !== b.amount) {
          return compareNumbers(a.amount, b.amount, factor);
        }

        // fallback: sort by date if same amount
        return compareNumbers(a.timestamp, b.timestamp, factor);
      }

      if (key === "category") {
        const aCategory = (a.category || "").toLowerCase();
        const bCategory = (b.category || "").toLowerCase();

        if (aCategory !== bCategory) {
          return compareStrings(aCategory, bCategory, factor);
        }

        // fallback: sort by date if same category
        return compareNumbers(a.timestamp, b.timestamp, factor);
      }

      if (key === "account") {
        const aAccount = (a.accountName || "").toLowerCase();
        const bAccount = (b.accountName || "").toLowerCase();

        if (aAccount !== bAccount) {
          return compareStrings(aAccount, bAccount, factor);
        }

        // fallback: sort by date if same account
        return compareNumbers(a.timestamp, b.timestamp, factor);
      }

      return 0;
    });
};

export default getFilteredAndSortedTransactions;
