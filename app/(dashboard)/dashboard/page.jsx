import Budget from "@/components/dashboard/budget/Budget";
import ExpenseBreakdown from "@/components/dashboard/overview/ExpenseBreakdown";
import RecentTransactions from "@/components/dashboard/overview/RecentTransactions";
import requiresAuth from "@/lib/auth/requiresAuth";

import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await requiresAuth();

  // This will be taken care by the middleware, but it is a good practice to include it.
  // Redirect to '/sign-in' if not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="py-8 md:py-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
      <h1 className="text-[#fb5756] font-bold text-4xl lg:text-5xl tracking-tight col-span-2">
        Dashboard
      </h1>
      {/* Budget Progress */}
      <Budget />

      {/* Overview */}
      <RecentTransactions />
      <ExpenseBreakdown />
    </div>
  );
}
