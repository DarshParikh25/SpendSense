import { ChartColumn, ChartPie, CreditCard } from "lucide-react";

const Guide = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Create your Account",
      detail:
        "Sign up in minutes with our quick and secure registration process",
    },
    {
      icon: ChartColumn,
      title: "Track your Spending",
      detail:
        "Sit back while AI automatically categorizes and tracks every transaction",
    },
    {
      icon: ChartPie,
      title: "Get Insights",
      detail:
        "Discover AI-powered insights that help you save more and spend smarter",
    },
  ];

  return (
    <div className='text-black bg-[#BEBEC0] px-16 py-20 md:px-20 md:py-24 text-center flex flex-col justify-center items-center gap-16'>
      <h2 className='text-2xl md:text-4xl font-bold'>
        Get Started in 3 Easy Steps
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
        {steps.map(({ icon: Icon, title, detail }, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center gap-2'
          >
            <Icon className='w-auto h-10 md:h-12' />
            <h4 className='text-xl md:text-2xl font-bold'>
              {index + 1}. {title}
            </h4>
            <p className='text-sm md:text-[16px] md:mt-2'>{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
