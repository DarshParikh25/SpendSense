"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const AuthToast = ({ message }) => {
  useEffect(() => {
    if (message === "auth-required") {
      toast.info("Please sign in to continue.");
    }
  });

  return null;
};

export default AuthToast;
