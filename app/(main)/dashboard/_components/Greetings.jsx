import getDashboardGreeting from "@/lib/helper/ui/getDashboardGreeting";

const Greetings = ({ name, health }) => {
  return (
    <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
      {getDashboardGreeting({ name, health })}
    </p>
  );
};

export default Greetings;
