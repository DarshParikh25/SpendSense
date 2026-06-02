import Footer from "@/components/footer/Footer";
import DashboardMobNav from "@/app/(main)/_components/header/DashboardMobNav";
import DashboardNav from "@/app/(main)/_components/header/DashboardNav";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { accounts } from "@/db/schema";

export const metadata = {
  title: "Dashboard",

  description: "Manage your finances with ease.",
};

const DashboardLayout = async ({ children }) => {
  const { userId } = await auth();

  const userAccounts = await db.query.accounts.findMany({
    where: eq(accounts.userId, userId),
    limit: 1,
  });

  if (userAccounts.length === 0) redirect("/accounts/create");

  return (
    <div>
      <header>
        <DashboardNav />
        <DashboardMobNav />
      </header>
      <main className="min-h-screen relative mt-24 md:mt-28 px-6 sm:px-10 lg:px-16 xl:px-20 z-0">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayout;
