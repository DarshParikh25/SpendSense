import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const requiresAuth = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return user;
};

export default requiresAuth;
