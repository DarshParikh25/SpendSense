const CardSkeleton = ({ className }) => {
  return (
    <div
      className={`border-2 border-[#bebec0]/30 rounded-xl skeleton-shimmer-dark ${
        className
      }`}
    />
  );
};

export default CardSkeleton;
