import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMobileNav: (state) => {
      state.open = true;
    },
    closeMobileNav: (state) => {
      state.open = false;
    },
  },
});

export const { openMobileNav, closeMobileNav } = uiSlice.actions;
export default uiSlice.reducer;
