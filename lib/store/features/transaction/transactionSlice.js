import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionSearch: "",
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactionSearch: (state, action) => {
      state.transactionSearch = action.payload;
    },
  },
});

export const { setTransactionSearch } = transactionSlice.actions;
export default transactionSlice.reducer;
