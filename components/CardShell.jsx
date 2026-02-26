import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CardShell = ({
  isIcon = false,
  footer = false,
  Icon,
  title,
  desc,
  className,
  titleClassName,
  descClassName,
  footerClassName,
  children,
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col justify-center items-start border-2",
        className,
      )}
    >
      <CardHeader className={"w-full"}>
        {isIcon && <Icon className="text-[#FB5756] w-auto h-10 md:h-12" />}
        <CardTitle className={titleClassName}>{title}</CardTitle>
      </CardHeader>
      <CardContent className={"w-full"}>
        <CardDescription className={descClassName}>{desc}</CardDescription>
      </CardContent>
      {footer && (
        <CardFooter className={footerClassName}>{children}</CardFooter>
      )}
    </Card>
  );
};

export default CardShell;
