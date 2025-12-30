import Image from "next/image";
import Link from "next/link";

import FooterNav from "./FooterNav";

const Footer = () => {
  const socials = [
    {
      name: "facebook",
      href: "https://facebook.com/",
      icon: "/socials/facebook.svg",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com/in/",
      icon: "/socials/linkedin.svg",
    },
    {
      name: "youtube",
      href: "https://youtube.com/",
      icon: "/socials/youtube.svg",
    },
    {
      name: "instagram",
      href: "https://instagram.com/",
      icon: "/socials/instagram.svg",
    },
  ];

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-12 px-10 lg:px-16 xl:px-20 py-14 bg-white w-full text-black'>
      <div className='order-2 lg:order-1 flex flex-col gap-4 place-items-center lg:items-start'>
        <Link href={"/"} aria-label='home'>
          <Image
            src={"/logos/light-logo.svg"}
            width={300}
            height={60}
            alt='footer-logo'
            className='h-14 w-auto object-contain pointer-events-none'
          />
        </Link>
        <div className='flex justify-self-center md:justify-self-start gap-6'>
          {socials.map(({ name, href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target='_blank'
              aria-label={name}
              rel='noopener noreferrer'
            >
              <Image
                src={icon}
                width={48}
                height={48}
                alt={name}
                className='md:h-8 lg:h-12 w-auto object-contain pointer-events-none'
              />
            </Link>
          ))}
        </div>
        <p className='text-[#808080] text-sm lg:text-md font-bold px-1.5'>
          Copyright &copy; 2025 | Darsh Parikh
        </p>
      </div>
      <div className='order-1 lg:order-2'>
        <FooterNav />
      </div>
    </div>
  );
};

export default Footer;
