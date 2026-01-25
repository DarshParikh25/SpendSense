import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import uiReducer from "./features/ui/uiSlice";

// Cannot make store a global var in Next.js
// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer,
    },
  });
};
