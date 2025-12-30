const Stats = () => {
  const statsInfo = [
    { stat: "50K+", label: "Active Users" },
    { stat: "$2B+", label: "Transaction Tracked" },
    { stat: "99.9%", label: "Uptime" },
    { stat: "4.9/5", label: "User Rating" },
  ];

  return (
    <div className='bg-[#BEBEC0] text-black w-full px-1 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center'>
      {statsInfo.map((stats, index) => (
        <div
          key={index}
          className='flex flex-col justify-center items-center text-center'
        >
          <h4 className='font-bold text-3xl'>{stats.stat}</h4>
          <p>{stats.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
