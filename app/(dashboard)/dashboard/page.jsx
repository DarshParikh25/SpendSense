import requiresAuth from "@/lib/auth/requiresAuth";
import Budget from "@/components/dashboard/budget/Budget";
import Accounts from "@/components/dashboard/accounts/Accounts";
import Overview from "@/components/dashboard/overview/Overview";

import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await requiresAuth();

  // This will be taken care by the middleware, but it is a good practice to include it.
  // Redirect to '/sign-in' if not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="py-8 md:py-12 flex flex-col gap-10">
      <h1 className="text-[#fb5756] font-bold text-4xl lg:text-5xl tracking-tight">
        Dashboard
      </h1>
      {/* Budget Progress */}
      <Budget />

      {/* Overview */}
      <Overview />

      {/* Accounts Grid */}
      <Accounts />
    </div>
  );
}
