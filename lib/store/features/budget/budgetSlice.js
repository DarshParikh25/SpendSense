import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 12000.0,
  spent: 5000.0,
  draftBudget: 0.0,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updateBudget: (state, action) => {
      if (action.payload && action.payload > 0) {
        state.total = action.payload;
      }
    },

    addExpense: (state, action) => {
      state.spent += action.payload;
    },

    setDraftBudget: (state, action) => {
      state.draftBudget = action.payload;
    },
  },
});

export const { updateBudget, addExpense, setDraftBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
