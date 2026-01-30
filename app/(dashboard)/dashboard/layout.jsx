import Footer from "@/components/footer/Footer";
import DashboardMobNav from "@/components/dashboard/header/mobile/DashboardMobNav";
import DashboardNav from "@/components/dashboard/header/DashboardNav";

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
      <main className="min-h-screen relative mt-24 z-0">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayout;
