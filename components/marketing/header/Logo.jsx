import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} aria-label="home" className="justify-self-start">
      <Image
        src="/logos/logo.png"
        width={200}
        height={100}
        alt="logo"
        className="h-6 lg:h-10 xl:h-12 w-auto object-cover pointer-events-none"
      />
    </Link>
  );
};

export default Logo;
