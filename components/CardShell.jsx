import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CardShell = ({
  header,
  content,
  footer,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col justify-center items-start border-2",
        className,
      )}
    >
      {header && (
        <CardHeader className={cn("w-full", headerClassName)}>
          {header}
        </CardHeader>
      )}
      {content && (
        <CardContent className={cn("w-full", contentClassName)}>
          {content}
        </CardContent>
      )}
      {footer && (
        <CardFooter className={cn("w-full", footerClassName)}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default CardShell;
