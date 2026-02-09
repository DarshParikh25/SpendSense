import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isBudgetEditing: false,
  recentTransactionsAcc: null,
  duration: "Last 7 Days",
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

    setDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
});

export const {
  openMobileNav,
  closeMobileNav,
  openBudgetEditor,
  closeBudgetEditor,
  setRecentTransactionAcc,
  setDuration,
} = uiSlice.actions;
export default uiSlice.reducer;
