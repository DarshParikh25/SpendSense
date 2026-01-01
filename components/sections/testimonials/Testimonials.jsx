import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Testimonials = () => {
  const testimonialDetails = [
    {
      profile: "/profile/michael-dee.png",
      name: "Michael Dee",
      profession: "Marketing Consultant",
      message:
        "Honestly, I was skeptical about another finance app, but SpendSensence just... gets it. I take photos of my receipt while waiting for my coffee, and by the time I'm home, everything's already sorted. Last April during tax prep, my accountant actually complimented how organized I was. First time that's every happened!",
    },
    {
      profile: "/profile/david-park.png",
      name: "David Park",
      profession: "Product Manager",
      message:
        "So the budget alerts caught me spending $180/month on subscriptions I didn't even use. Turns out I was stil paying for a gym I hadn't been to in like 8 months and two streaming services I forgot existed. Cancelled them in 10 minutes. My wife thinks I'm a financial genius now.",
    },
    {
      profile: "/profile/priya-sharma.png",
      name: "Priya Sharma",
      profession: "Freelance Graphic Designer",
      message:
        "Working with clients in foreign used to give me a headache with currency conversions. The multi-currency tracking shows me what I actually make after all the fees-no more guessing. Plus, the AI insights told me I should charge 15% more for weekend work based on my patterns. Took that advice, nobody complained, and I'm making more. Wild.",
    },
  ];

  return (
    <div className='px-6 py-20 md:px-20 md:py-40 flex flex-col justify-center items-center gap-18 lg:gap-24'>
      <h2 className='text-2xl md:text-4xl font-bold text-center'>
        What Our Users Are Saying
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16'>
        {testimonialDetails.map(
          ({ profile, name, profession, message }, index) => (
            <Card
              key={index}
              className={"flex flex-col justify-between items-start"}
            >
              <CardContent className={"italic text-sm md:text-[16px]"}>
                {'"'}
                {message}
                {'"'}
              </CardContent>
              <CardFooter className={"flex justify-center gap-4"}>
                <Image
                  src={profile}
                  width={56}
                  height={56}
                  alt={`profile picture ${index + 1}`}
                  className='h-12 md:h-14 w-auto object-contain'
                />
                <div className='w-full flex flex-col justify-center items-start'>
                  <h4 className='text-[16px] md:text-lg font-bold'>{name}</h4>
                  <p className='text-xs md:text-sm font-medium'>{profession}</p>
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
