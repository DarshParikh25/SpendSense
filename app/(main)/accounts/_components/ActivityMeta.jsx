const ActivityMeta = ({ data }) => {
  const { txCount, lastActivity } = data;

  return (
    <div className="w-full flex justify-between items-center text-sm">
      <div className="text-left">
        <p className="text-sm">Transactions</p>
        <p className="font-medium text-white">{txCount}</p>
      </div>

      <div className="text-right">
        <p className="text-sm">Last Used</p>
        <p className="font-medium text-white">{lastActivity}</p>
      </div>
    </div>
  );
};

export default ActivityMeta;
