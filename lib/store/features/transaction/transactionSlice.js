import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionSearch: "",
  selectAllTransactions: false,
  selectedTransactionType: "All Types",
  selectedRecurringType: "All Transactions",
  search: "",
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactionSearch: (state, action) => {
      state.transactionSearch = action.payload;
    },

    setSelectAllTransactions: (state) => {
      state.selectAllTransactions = !state.selectAllTransactions;
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
  },
});

export const {
  setTransactionSearch,
  setSelectAllTransactions,
  setSelectedTransactionType,
  setSelectedRecurringType,
  setSearch,
} = transactionSlice.actions;
export default transactionSlice.reducer;
