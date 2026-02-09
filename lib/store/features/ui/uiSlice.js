import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isBudgetEditing: false,
  recentTransactionsAcc: null,
  barChartDuration: "Last 7 Days",
  transactionType: "All Types",
  transactionDuration: "All Transactions",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMobileNav: (state) => {
      state.isMenuOpen = true;
    },

    closeMobileNav: (state) => {
      state.isMenuOpen = false;
    },

    openBudgetEditor: (state) => {
      state.isBudgetEditing = true;
    },

    closeBudgetEditor: (state) => {
      state.isBudgetEditing = false;
    },

    setRecentTransactionAcc: (state, action) => {
      state.recentTransactionsAcc = action.payload;
    },

    setBarChartDuration: (state, action) => {
      state.barChartDuration = action.payload;
    },

    setTransactionType: (state, action) => {
      state.transactionType = action.payload;
    },

    setTransactionDuration: (state, action) => {
      state.transactionDuration = action.payload;
    },
  },
});

export const {
  openMobileNav,
  closeMobileNav,
  openBudgetEditor,
  closeBudgetEditor,
  setRecentTransactionAcc,
  setBarChartDuration,
  setTransactionType,
  setTransactionDuration,
} = uiSlice.actions;
export default uiSlice.reducer;
