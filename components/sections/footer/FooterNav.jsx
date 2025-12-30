import Link from "next/link";

const FooterNav = () => {
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

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 xl:gap-32'>
      {footerNav.map((section, index) => (
        <div key={index}>
          <h3 className='text-black font-semibold mb-4'>{section.title}</h3>
          <ul className='space-y-4'>
            {section.links.map((link, index) => (
              <li
                key={index}
                className='text-[#808080] hover:text-[#454545] w-fit'
              >
                <Link href={link.href} aria-label={link.label}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
