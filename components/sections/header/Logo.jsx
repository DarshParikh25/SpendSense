import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} aria-label="home" className="justify-self-start">
      <Image
        src="/logos/dark-logo.svg"
        width={200}
        height={39}
        alt="logo"
        className="h-6 lg:h-10 xl:h-12 w-auto object-contain pointer-events-none"
      />
    </Link>
  );
};

export default Logo;
