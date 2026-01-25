"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
// import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
// import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
// import { setLoggedIn } from "@/lib/store/features/auth/authSlice";

const Login = () => {
  // const dispatch = useAppDispatch();

  // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  // const open = useAppSelector((state) => state.ui.open);

  // this will work only after login is successful
  // const handleLogin = () => {
  //   if (open) {
  //     dispatch(closeMobileNav());
  //   }
  //   dispatch(setLoggedIn());
  // };

  return (
    <Button
      className={`justify-self-end bg-[#FB5756] font-bold text-white text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-3 hover:cursor-pointer hover:bg-[#ff6f6f] transition-all`}
      asChild
    >
      <Link
        href={"/sign-in"}
        // onClick={handleLogin}
        aria-label="login"
      >
        Login
      </Link>
    </Button>
  );
};

export default Login;
