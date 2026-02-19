import Footer from "@/components/footer/Footer";
import DashboardMobNav from "@/app/(main)/_components/header/mobile/DashboardMobNav";
import DashboardNav from "@/app/(main)/_components/header/DashboardNav";

export const metadata = {
  title: "Dashboard",

  description: "Manage your finances with ease.",
};

const DashboardLayout = ({ children }) => {
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
