import DesktopNav from "./desktop/DesktopNav";
import NavCTAs from "./desktop/NavCTAs";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-60 w-full px-6 lg:px-16 sm:px-10 xl:px-20 py-8 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center justify-center bg-[#1d1e24]/50 backdrop-blur-md border-b">
      <Logo />
      <DesktopNav />
      <NavCTAs />
    </div>
  );
};

export default Navbar;
