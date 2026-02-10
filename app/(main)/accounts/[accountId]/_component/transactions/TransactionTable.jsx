import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { categoryColors, categoryIcons } from "@/data/categories";
import { currencyFormatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import { Clock, Ellipsis, History } from "lucide-react";
import CategoryIcon from "./CategoryIcon";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// dummy transactions
const transactions = [
  {
    id: 1,
    date: format(new Date(), "PP"),
    description: "Dummy Description",
    category: "Travel",
    isRecurring: false,
    recurringDuration: null,
    recurringDate: null,
    type: "Expense",
    amount: 200.55,
  },
  {
    id: 2,
    date: format(new Date(), "PP"),
    description: "Dummy Description",
    category: "Insurance",
    isRecurring: true,
    recurringDuration: "Yearly",
    recurringDate: format(new Date(), "PP"),
    type: "Expense",
    amount: 292.12,
  },
  {
    id: 3,
    date: format(new Date(), "PP"),
    description: "Dummy Description",
    category: "Shopping",
    isRecurring: false,
    recurringDuration: null,
    recurringDate: null,
    type: "Expense",
    amount: 2300.15,
  },
  {
    id: 4,
    date: format(new Date(), "PP"),
    description: "Dummy Description",
    category: "Salary",
    isRecurring: true,
    recurringDuration: "Monthly",
    recurringDate: format(new Date(), "PP"),
    type: "Income",
    amount: 30000.0,
  },
  {
    id: 5,
    date: format(new Date(), "PP"),
    description: "Dummy Description",
    category: "Dining",
    isRecurring: false,
    recurringDuration: null,
    recurringDate: null,
    type: "Income",
    amount: 1365.25,
  },
  {
    id: 6,
    date: format(new Date(), "PP"),
    description: "Dummy Description",
    category: "Internet",
    isRecurring: false,
    recurringDuration: "",
    recurringDate: null,
    type: "Income",
    amount: 1610.13,
  },
];

const TransactionTable = () => {
  const filterAndSortedTransaction = transactions;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className={"w-12"}>
            <Checkbox className={"cursor-pointer"} />
          </TableHead>
          <TableHead className={"cursor-pointer font-semibold"}>Date</TableHead>
          <TableHead className={"font-semibold"}>Description</TableHead>
          <TableHead className={"font-semibold"}>Category</TableHead>
          <TableHead className={"font-semibold"}>Recurring</TableHead>
          <TableHead className="text-right font-semibold">Amount</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filterAndSortedTransaction.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className={"text-center font-medium"}>
              No transactions found
            </TableCell>
          </TableRow>
        ) : (
          filterAndSortedTransaction.map(
            ({
              id,
              date,
              description,
              category,
              isRecurring,
              recurringDate,
              recurringDuration,
              type,
              amount,
            }) => (
              <TableRow key={id}>
                <TableCell>
                  <Checkbox className={"cursor-pointer"} />
                </TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>
                  <Badge
                    style={{
                      backgroundColor: categoryColors[category.toLowerCase()],
                    }}
                    className={"bg-[#bebec0] text-[#1e1e24] rounded"}
                  >
                    <CategoryIcon
                      name={categoryIcons[category.toLowerCase()]}
                    />
                    <span>{category}</span>
                  </Badge>
                </TableCell>
                <TableCell>
                  {isRecurring ? (
                    <TooltipWrapper
                      content={
                        <div>
                          <p>Next Date:</p>
                          <p>{recurringDate}</p>
                        </div>
                      }
                      contentClassName={"bg-[#bebec0] text-[#1e1e24]"}
                      side="top"
                    >
                      <Badge className={"rounded text-white bg-purple-600"}>
                        <History />
                        <span>{recurringDuration}</span>
                      </Badge>
                    </TooltipWrapper>
                  ) : (
                    <Badge
                      variant={"outline"}
                      className={"rounded border border-[#bebec0]/50"}
                    >
                      <Clock />
                      <span>One-time</span>
                    </Badge>
                  )}
                </TableCell>
                <TableCell
                  className={cn(
                    type === "Income" ? "text-[#72FF52]" : "text-[#FB5756]",
                    "text-right",
                  )}
                >
                  {type === "Income" ? "+ " : "- "}
                  {currencyFormatter.format(amount)}
                </TableCell>
                <TableCell className={"text-right"}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Ellipsis className="cursor-pointer w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={"bg-[#bebec0]"}>
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          className={
                            "text-[#1e1e24] cursor-pointer hover:bg-[#c3c3c6]"
                          }
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={
                            "text-red-600 cursor-pointer hover:bg-[#c3c3c6]"
                          }
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ),
          )
        )}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
