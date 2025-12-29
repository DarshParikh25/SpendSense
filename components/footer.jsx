import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerNav = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Financial Guides", href: "/financial-guides" },
        { label: "Help Center", href: "/help-center" },
        { label: "Contact Support", href: "/contact-support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];

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
    <div className='flex justify-between items-center px-20 py-14'>
      <div className='space-y-4'>
        <Link href={"/"}>
          <Image
            src={"/logos/light-logo.svg"}
            width={300}
            height={60}
            alt='footer-logo'
          />
        </Link>
        <div className='flex space-x-6'>
          {socials.map(({ name, href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target='_blank'
              aria-label={name}
              rel='noopener noreferrer'
            >
              <Image src={icon} width={48} height={48} alt={name} />
            </Link>
          ))}
        </div>
        <p className='text-[#808080] font-bold px-1.5'>
          Copyright &copy; 2025 | Darsh Parikh
        </p>
      </div>
      <div className='flex space-x-32'>
        {footerNav.map((section, index) => (
          <div key={index}>
            <h3 className='text-black font-semibold mb-4'>{section.title}</h3>
            <ul className='space-y-4'>
              {section.links.map((link, index) => (
                <li key={index} className='text-[#808080] hover:text-[#454545]'>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
