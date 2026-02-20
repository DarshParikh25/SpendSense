import TextSkeleton from "@/app/(main)/_components/TextSkeleton";

const TitleSkeleton = ({
  headingClassName,
  blClassName,
  trClassName,
  brClassName,
}) => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center">
      <div className="flex flex-col justify-center items-baseline gap-2">
        <TextSkeleton className={headingClassName} />
        <TextSkeleton className={blClassName} />
      </div>
      <div className="flex flex-col justify-center items-end gap-1">
        <TextSkeleton className={trClassName} />
        <TextSkeleton className={brClassName} />
      </div>
    </div>
  );
};

export default TitleSkeleton;
