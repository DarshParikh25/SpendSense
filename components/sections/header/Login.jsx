import Link from "next/link";

import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <Button
      className={`justify-self-end bg-[#FB5756] font-bold text-white text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-3 hover:cursor-pointer hover:bg-[#ff6f6f] transition-all`}
      asChild
    >
      <Link href={"/sign-in"} aria-label="login">
        Login
      </Link>
    </Button>
  );
};

export default Login;
