import {
  Brain,
  ChartColumn,
  ChartPie,
  CreditCard,
  Globe,
  Receipt,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  const featuresInfo = [
    {
      icon: ChartColumn,
      title: "Advanced Analytics",
      desc: "Uncover spending patterns and trends with intelligent AI-powered analytics",
    },
    {
      icon: Receipt,
      title: "Smart Receipt Scanner",
      desc: "Snap a photo and let AI instantly extract all your receipt details",
    },
    {
      icon: ChartPie,
      title: "Budget Planning",
      desc: "Set smart budgets and get AI-powered recommendations to stay on track",
    },
    {
      icon: CreditCard,
      title: "Multi-Account Support",
      desc: "See your complete financial picture with all accounts and cards at one place",
    },
    {
      icon: Globe,
      title: "Multi-Currency",
      desc: "Track expenses in multiple currencies with automatic real-time conversion",
    },
    {
      icon: Brain,
      title: "Automated Insights",
      desc: "Discover opportunities to save with automated insights tailored for you",
    },
  ];

  return (
    <div className='px-6 py-20 md:px-20 md:py-40 flex flex-col justify-center items-center gap-18 md:gap-24'>
      <h2 className='text-2xl md:text-4xl font-bold text-center'>
        Everything You Need for Complete Financial Control
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-14 px-2 w-full '>
        {featuresInfo.map(({ icon: Icon, title, desc }, index) => (
          <Card
            key={index}
            className={
              "md:px-4 md:py-10 flex flex-col justify-center items-start gap-4 border-2"
            }
          >
            <CardHeader className={"w-full"}>
              <Icon className='text-[#FB5756] w-auto h-10 md:h-12' />
              <CardTitle className={"font-bold text-xl md:text-2xl"}>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className={"text-sm md:text-[16px]"}>
                {desc}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
