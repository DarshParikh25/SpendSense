"use client";

import { makeStore } from "@/lib/store/store";
import { useState } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  const [store] = useState(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
