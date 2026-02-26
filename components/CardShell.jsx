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
      className={`flex flex-col justify-center items-start border-2
        ${className}`}
    >
      {header && (
        <CardHeader className={`w-full ${headerClassName}`}>
          {header}
        </CardHeader>
      )}
      {content && (
        <CardContent className={`w-full ${contentClassName}`}>
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
