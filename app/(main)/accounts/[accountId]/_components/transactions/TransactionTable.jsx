"use client";

import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Ellipsis,
  History,
  Trash2Icon,
} from "lucide-react";

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
import CategoryIcon from "./CategoryIcon";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import {
  clearSelection,
  selectAllTransactions,
  toggleTransactionSelection,
} from "@/lib/store/features/transaction/transactionSlice";
import DialogBox from "@/app/(main)/_components/DialogBox";

const TransactionTable = ({ accountDetails }) => {
  const dispatch = useAppDispatch();

  const [openMenuId, setOpenMenuId] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });

  const {
    selectedTransactionType: transactionType,
    selectedRecurringType: recurringType,
    selectedTransactionIds: selectedIds,
    search,
  } = useAppSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(clearSelection());
  }, [transactionType, recurringType, search, dispatch]);

  const searchLower = search?.toLowerCase() || "";

  // These will be handled by the backend later on
  const filterAndSortedTransaction = useMemo(() => {
    const transactions = accountDetails?.transactions ?? [];

    return transactions
      .filter((transaction) => {
        if (
          transactionType !== "All Types" &&
          transaction.type !== transactionType
        )
          return false;

        if (recurringType === "Recurring Only" && !transaction.isRecurring)
          return false;

        if (recurringType === "Non-recurring Only" && transaction.isRecurring)
          return false;

        if (searchLower) {
          const match =
            transaction.description?.toLowerCase().includes(searchLower) ||
            transaction.category?.toLowerCase().includes(searchLower);

          if (!match) return false;
        }

        return true;
      })
      .map((transaction) => ({
        ...transaction,
        timestamp: new Date(transaction.date).getTime(),
      }))
      .sort((a, b) => {
        const { key, direction } = sortConfig;
        const factor = direction === "asc" ? 1 : -1;

        if (key === "date") {
          if (a.timestamp !== b.timestamp) {
            return (a.timestamp - b.timestamp) * factor;
          }

          return (a.amount - b.amount) * factor;
        }

        if (key === "amount") {
          if (a.amount !== b.amount) {
            return (a.amount - b.amount) * factor;
          }

          return (a.timestamp - b.timestamp) * factor;
        }

        return 0;
      });
  }, [accountDetails, transactionType, recurringType, searchLower, sortConfig]);

  const allIds = filterAndSortedTransaction.map((t) => t.id);

  const isAllSelected =
    allIds.length > 0 && allIds.every((id) => selectedIds.includes(id));

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleCheckAll = (checked) => {
    const isChecked = checked === true;

    if (isChecked) {
      dispatch(selectAllTransactions(allIds));
    } else {
      dispatch(clearSelection());
    }
  };

  const handleDelete = (ids) => {
    // dispatch(deleteTransactions(ids));
    dispatch(clearSelection());
    setOpenMenuId(null);
  };

  return (
    <div
      className={"border border-[#bebec0]/40 rounded-md overflow-hidden px-1"}
    >
      <Table>
        <TableHeader className={"sticky top-0 z-10"}>
          <TableRow className={"text-white border-b border-[#bebec0]/30"}>
            <TableHead className={"w-12"}>
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={handleCheckAll}
                className={
                  "cursor-pointer data-[state=checked]:bg-[#bebec0] data-[state=checked]:text-[#1e1e24]"
                }
              />
            </TableHead>
            <TableHead
              onClick={() => handleSort("date")}
              className={
                "w-fit cursor-pointer font-semibold flex justify-baseline items-center gap-4"
              }
            >
              Date
              <span>
                {sortConfig.key === "date" && sortConfig.direction === "asc" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </TableHead>
            <TableHead className={"font-semibold"}>Description</TableHead>
            <TableHead className={"font-semibold"}>Category</TableHead>
            <TableHead
              onClick={() => handleSort("amount")}
              className="w-fit text-right font-semibold flex justify-end items-center gap-4 justify-self-end cursor-pointer"
            >
              Amount
              <span>
                {sortConfig.key === "amount" &&
                sortConfig.direction === "asc" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </TableHead>
            <TableHead className={"font-semibold"}>Recurring</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterAndSortedTransaction.length === 0 ? (
            <TableRow className={"py-0.5"}>
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
                <TableRow
                  key={id}
                  className={
                    "hover:bg-[#25252b] transition border-b border-[#bebec0]/30 last:border-0"
                  }
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedIds.includes(id)}
                      onCheckedChange={() =>
                        dispatch(toggleTransactionSelection(id))
                      }
                      className={
                        "cursor-pointer data-[state=checked]:bg-[#bebec0] data-[state=checked]:text-[#1e1e24]"
                      }
                    />
                  </TableCell>
                  <TableCell>{format(date, "PP")}</TableCell>
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
                  <TableCell
                    className={cn(
                      type === "Income" ? "text-[#72FF52]" : "text-[#FB5756]",
                      "text-right",
                    )}
                  >
                    {type === "Income" ? "+ " : "- "}
                    {currencyFormatter.format(amount)}
                  </TableCell>
                  <TableCell>
                    {isRecurring ? (
                      <TooltipWrapper
                        content={
                          <div>
                            <p>Next Date:</p>
                            <p>{format(recurringDate, "PP")}</p>
                          </div>
                        }
                        contentClassName={"bg-[#bebec0] text-[#1e1e24]"}
                        side="top"
                      >
                        <Badge
                          className={"rounded text-[#1e1e24] bg-purple-300"}
                        >
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
                  <TableCell className={"text-right"}>
                    <DropdownMenu
                      open={openMenuId === id}
                      onOpenChange={(open) => setOpenMenuId(open ? id : null)}
                    >
                      <DropdownMenuTrigger asChild>
                        <Ellipsis className="cursor-pointer w-4 h-4 justify-self-end" />
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
                            onSelect={(e) => e.preventDefault()}
                            className={
                              "text-red-600 cursor-pointer hover:bg-[#c3c3c6]"
                            }
                          >
                            <DialogBox
                              selectedIds={[id]}
                              onConfirm={handleDelete}
                              Icon={Trash2Icon}
                              title={`Delete transaction?`}
                              desc={
                                "This will permanently delete this transaction. This action cannot be undone."
                              }
                              actionText={"Delete"}
                            >
                              <span>Delete</span>
                            </DialogBox>
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
    </div>
  );
};

export default TransactionTable;
