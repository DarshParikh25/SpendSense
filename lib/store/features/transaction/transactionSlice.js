import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  selectedTransactionType: "All Types",
  selectedRecurringType: "All Transactions",
  selectedTransactionIds: [],
  isDeleting: false,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setSelectedTransactionType: (state, action) => {
      state.selectedTransactionType = action.payload;
    },

    setSelectedRecurringType: (state, action) => {
      state.selectedRecurringType = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    toggleTransactionSelection: (state, action) => {
      const id = action.payload;

      if (state.selectedTransactionIds.includes(id)) {
        state.selectedTransactionIds = state.selectedTransactionIds.filter(
          (item) => item !== id,
        );
      } else {
        state.selectedTransactionIds.push(id);
      }
    },

    selectAllTransactions: (state, action) => {
      state.selectedTransactionIds = action.payload; // array of ids
    },

    clearSelection: (state) => {
      state.selectedTransactionIds = [];
    },

    toggleIsDeleting: (state) => {
      state.isDeleting = !state.isDeleting;
    },
  },
});

export const {
  setSelectedTransactionType,
  setSelectedRecurringType,
  setSearch,
  toggleTransactionSelection,
  selectAllTransactions,
  clearSelection,
  toggleIsDeleting,
} = transactionSlice.actions;
export default transactionSlice.reducer;
