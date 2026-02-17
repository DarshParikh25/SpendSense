import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionSearch: "",
  selectedTransactionType: "All Types",
  selectedRecurringType: "All Transactions",
  search: "",
  selectedTransactionIds: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactionSearch: (state, action) => {
      state.transactionSearch = action.payload;
    },

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
  },
});

export const {
  setTransactionSearch,
  setSelectedTransactionType,
  setSelectedRecurringType,
  setSearch,
  toggleTransactionSelection,
  selectAllTransactions,
  clearSelection,
} = transactionSlice.actions;
export default transactionSlice.reducer;
