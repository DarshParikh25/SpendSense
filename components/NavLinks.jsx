"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch } from "@/lib/store/hooks/hooks";

const NavLinks = ({
  links,
  activeClassName = "text-white",
  inactiveClassName = "text-[#bebec0] hover:text-white",
}) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(closeMobileNav());
  };

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          onClick={handleClick}
          className={
            pathname === link.href ? activeClassName : inactiveClassName
          }
          href={link.href}
          aria-label={link.link}
        >
          {link.link}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
