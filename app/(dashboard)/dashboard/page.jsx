import requiresAuth from "@/lib/auth/requiresAuth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await requiresAuth();

  // Redirect to '/sign-in' if not authenticated
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
