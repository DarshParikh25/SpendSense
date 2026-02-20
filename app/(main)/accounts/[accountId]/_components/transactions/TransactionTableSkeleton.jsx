import CardSkeleton from "@/app/(main)/_components/CardSkeleton";
import TextSkeleton from "@/app/(main)/_components/TextSkeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TransactionTableSkeleton = ({ rows }) => {
  return (
    <div
      className={"border border-[#bebec0]/40 rounded-md overflow-hidden px-1"}
    >
      <Table>
        <TableHeader className={"sticky top-0 z-10"}>
          <TableRow className={"text-white border-b border-[#bebec0]/30"}>
            <TableHead className={"w-12"}>
              <CardSkeleton className={"w-4 h-4 rounded"} />
            </TableHead>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableHead key={i} className={i === 3 && "place-items-end"}>
                <TextSkeleton className={"h-6 w-32"} />
              </TableHead>
            ))}
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRow
              key={i}
              className={
                "hover:bg-[#25252b] transition border-b border-[#bebec0]/30 last:border-0"
              }
            >
              <TableCell>
                <CardSkeleton className={"w-4 h-4 rounded"} />
              </TableCell>
              {Array.from({ length: 5 }).map((_, idx) => (
                <TableCell key={idx}>
                  <TextSkeleton className={"h-6 w-32"} />
                </TableCell>
              ))}

              <TableCell className={"place-items-end"}>
                <TextSkeleton className={"h-3 w-8"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTableSkeleton;
