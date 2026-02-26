const getDashboardGreeting = ({ name, health }) => {
  const hour = new Date().getHours();

  let timeGreeting;

  if (hour < 12) timeGreeting = "Good Morning";
  else if (hour < 17) timeGreeting = "Good Afternoon";
  else timeGreeting = "Good Evening";

  const messages = {
    excellent: "Your finances are in great shape",
    healthy: "You're managing your money well",
    warning: "Keep an eye on your spending",
    critical: "Let’s improve your balance",
    invalid: "Let’s review your finances today",
  };

  return `${timeGreeting}, ${name}! ${messages[health.status] || ""}`;
};

export default getDashboardGreeting;
