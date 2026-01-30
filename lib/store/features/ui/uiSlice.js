import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isBudgetEditing: false,
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
  },
});

export const {
  openMobileNav,
  closeMobileNav,
  openBudgetEditor,
  closeBudgetEditor,
} = uiSlice.actions;
export default uiSlice.reducer;
