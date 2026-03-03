"use client";

import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Ellipsis,
  History,
  Trash2Icon,
} from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import {
  clearSelection,
  selectAllTransactions,
  toggleTransactionSelection,
} from "@/lib/store/features/transaction/transactionSlice";
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
import { currencyFormatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";
import CategoryIcon from "@/app/(main)/accounts/[accountId]/_components/transactions/CategoryIcon";
import TooltipWrapper from "@/components/TooltipWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DialogBox from "@/app/(main)/_components/DialogBox";
import { categoryColors, categoryIcons } from "@/config/categoryConfig";
import getFilteredAndSortedTransactions from "@/lib/helper/finance/getFilteredAndSortedTransactions";

const TransactionTable = ({
  children,
  transactions = [],
  showAccountColumn = false,
}) => {
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
    selectedAccount,
    search,
  } = useAppSelector((state) => state.transaction);

  // Clear selection when filters change
  useEffect(() => {
    dispatch(clearSelection());
  }, [transactionType, recurringType, search, dispatch]);

  const searchLower = search?.toLowerCase() || "";

  // Filter + Sort
  // These will be handled by the backend later on
  const filterAndSortedTransaction = useMemo(
    () =>
      getFilteredAndSortedTransactions(
        transactions,
        transactionType,
        recurringType,
        selectedAccount,
        searchLower,
        sortConfig,
      ),
    [
      transactions,
      transactionType,
      recurringType,
      selectedAccount,
      searchLower,
      sortConfig,
    ],
  );

  const allIds = (filterAndSortedTransaction ?? []).map((t) => t.id) ?? [];

  const isAllSelected =
    allIds.length > 0 && allIds.every((id) => selectedIds.includes(id));

  // Sorting
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // Select All
  const handleCheckAll = (checked) => {
    const isChecked = checked === true;

    if (isChecked) {
      dispatch(selectAllTransactions(allIds));
    } else {
      dispatch(clearSelection());
    }
  };

  // Delete
  const handleDelete = (ids) => {
    // dispatch(deleteTransactions(ids));
    dispatch(clearSelection());
    setOpenMenuId(null);
  };

  return (
    <div
      className={"border border-[#bebec0]/40 rounded-md overflow-hidden px-1"}
    >
      <Table className={"relative"}>
        <TableHeader className={"sticky top-0 z-10"}>
          <TableRow className={"text-white border-b border-[#bebec0]"}>
            {/* Checkbox */}
            <TableHead className={"w-12"}>
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={handleCheckAll}
                className={
                  "cursor-pointer data-[state=checked]:bg-[#bebec0] data-[state=checked]:text-[#1e1e24]"
                }
              />
            </TableHead>

            {/* Date */}
            <TableHead className={"font-semibold"}>
              <div
                onClick={() => handleSort("date")}
                className="w-fit cursor-pointer flex justify-baseline items-center gap-4"
              >
                Date
                <span>
                  {sortConfig.key === "date" &&
                  sortConfig.direction === "asc" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </div>
            </TableHead>

            {/* Description */}
            <TableHead className={"font-semibold"}>Description</TableHead>

            {/* Category */}
            <TableHead className={"font-semibold"}>
              <div
                onClick={() => handleSort("category")}
                className="w-fit cursor-pointer flex justify-center items-center gap-4"
              >
                Category
                <span>
                  {sortConfig.key === "category" &&
                  sortConfig.direction === "asc" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </div>
            </TableHead>

            {/* Amount */}
            <TableHead className={"font-semibold text-right"}>
              <div
                onClick={() => handleSort("amount")}
                className="w-fit cursor-pointer flex justify-self-end justify-end items-center gap-4"
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
              </div>
            </TableHead>

            {/* Recurring */}
            <TableHead className={"font-semibold"}>Recurring</TableHead>

            {/* Account */}
            {showAccountColumn && (
              <TableHead className={"font-semibold"}>
                <div
                  onClick={() => handleSort("account")}
                  className="w-fit cursor-pointer flex justify-baseline items-center gap-4"
                >
                  Account
                  <span>
                    {sortConfig.key === "account" &&
                    sortConfig.direction === "asc" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </div>
              </TableHead>
            )}
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
                accountName = "",
              }) => (
                <TableRow
                  key={id}
                  className={
                    "hover:bg-[#25252b] transition border-b border-[#bebec0]/30 last:border-0"
                  }
                >
                  {/* Checkbox */}
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

                  {/* Date */}
                  <TableCell>{format(date, "PP")}</TableCell>

                  {/* Description */}
                  <TableCell>{description}</TableCell>

                  {/* Category */}
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

                  {/* Amount */}
                  <TableCell
                    className={cn(
                      type === "Income" ? "text-emerald-500" : "text-[#FB5756]",
                      "text-right",
                    )}
                  >
                    {type === "Income" ? "+ " : "- "}
                    {currencyFormatter.format(amount)}
                  </TableCell>

                  {/* Recurring */}
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

                  {/* Extra Cell */}
                  {showAccountColumn && (
                    <TableCell>
                      <Badge
                        variant={"outline"}
                        className={"rounded border border-[#bebec0]/50"}
                      >
                        {accountName}
                      </Badge>
                    </TableCell>
                  )}

                  {/* Actions */}
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
                          {/* Edit */}
                          <DropdownMenuItem
                            className={
                              "text-[#1e1e24] cursor-pointer hover:bg-[#c3c3c6]"
                            }
                          >
                            Edit
                          </DropdownMenuItem>

                          {/* Delete */}
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
      {children}
    </div>
  );
};

export default TransactionTable;
