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
    <div className="mt-24 md:mt-28">
      <h1>Dashboard</h1>
    </div>
  );
}
