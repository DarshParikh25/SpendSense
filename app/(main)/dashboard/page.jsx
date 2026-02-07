import requiresAuth from "@/lib/auth/requiresAuth";
import Budget from "@/app/(main)/dashboard/_component/dashboard/budget/Budget";
import Accounts from "@/app/(main)/dashboard/_component/dashboard/accounts/Accounts";
import Overview from "@/app/(main)/dashboard/_component/dashboard/overview/Overview";

import { redirect } from "next/navigation";
import Heading from "../../../components/Heading";

export default async function Dashboard() {
  const user = await requiresAuth();

  // This will be taken care by the middleware, but it is a good practice to include it.
  // Redirect to '/sign-in' if not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="py-8 md:py-12 flex flex-col gap-10">
      <Heading title={"Dashboard"} />
      {/* Budget Progress */}
      <Budget />

      {/* Overview */}
      <Overview />

      {/* Accounts Grid */}
      <Accounts />
    </div>
  );
}
