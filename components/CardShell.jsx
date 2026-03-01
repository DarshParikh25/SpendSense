import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
      className={`flex flex-col justify-baseline items-between border-2 border-[#bebec0]/50
        ${className}`}
    >
      {header && (
        <CardHeader className={`w-full ${headerClassName}`}>
          {header}
        </CardHeader>
      )}
      {content && (
        <CardContent className={`w-full flex-1 ${contentClassName}`}>
          {content}
        </CardContent>
      )}
      {footer && (
        <CardFooter className={`w-full ${footerClassName}`}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default CardShell;
