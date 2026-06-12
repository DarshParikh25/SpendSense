import Footer from "@/components/footer/Footer";
import DashboardMobNav from "@/app/(main)/_components/header/DashboardMobNav";
import DashboardNav from "@/app/(main)/_components/header/DashboardNav";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { hasAccounts } from "@/lib/helper/account/accountChecker";

export const metadata = {
  title: "Dashboard",

  description: "Manage your finances with ease.",
};

const DashboardLayout = async ({ children }) => {
  console.log("Dashboard");
  const { userId } = await auth();
  console.log("user id: ", userId);

  const hasUserAccounts = await hasAccounts(userId);

  console.log("Has accounts:", hasUserAccounts);

  if (!hasUserAccounts) {
    console.log("REDIRECTING TO CREATE ACCOUNT");
    redirect("/accounts/create");
  }

  console.log("LAYOUT CONTINUES");

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
