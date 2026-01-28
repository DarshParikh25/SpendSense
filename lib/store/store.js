import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./features/ui/uiSlice";

// Cannot make store a global var in Next.js
// export const store = configureStore({
//   reducer: {
//     ui: uiReducer,
//   },
// });

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
    },
  });
};
