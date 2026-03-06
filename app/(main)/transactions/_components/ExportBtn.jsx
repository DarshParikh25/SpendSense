"use client";

import { format } from "date-fns";
import { Download } from "lucide-react";
import { useMemo, useState } from "react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import exportToCSV from "@/lib/helper/export/exportToCSV";
import DialogBox from "@/app/(main)/_components/DialogBox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import exportToXLSX from "@/lib/helper/export/exportToXLSX";

const ExportBtn = ({ transactions }) => {
  const [exportOpen, setExportOpen] = useState(false);
  const [exportType, setExportType] = useState("all");
  const [formatValue, setFormatValue] = useState("csv");

  const filteredTransactions = []; // fetch from backend itself
  const selectedTransactions = []; // fetch from backend itself

  const filename = useMemo(() => {
    if (exportType === "filtered") {
      return `transactions`;
    } else {
      return `transactions`;
    }
  }, [exportType]);

  const exportData = useMemo(() => {
    let exportTxs;

    if (exportType === "selected") {
      exportTxs = selectedTransactions;
    } else if (exportType === "filtered") {
      exportTxs = filteredTransactions;
    } else {
      exportTxs = transactions;
    }

    return exportTxs.map((tx, index) => ({
      "Sr. No.": index + 1,
      Date: format(new Date(tx.date), "yyyy-MM-dd"),
      Description: tx.description,
      Category: tx.category,
      Account: tx.accountName,
      Type: tx.type,
      Amount: tx.amount,
      Recurring: tx.isRecurring ? "Yes" : "No",
      "Recurring Interval": tx.recurringDuration,
      "Next Recurring Date":
        tx.recurringDate && format(new Date(tx.recurringDate), "yyyy-MM-dd"),
    }));
  }, [exportType, filteredTransactions, selectedTransactions, transactions]);

  const hasExportableData = exportData.length > 0;

  const handleExport = (type, format) => {
    if (!hasExportableData) return;

    if (format === "csv") {
      // csv export logic
      exportToCSV(exportData, filename);
    } else if (format === "xlsx") {
      // xlsx export logic
      exportToXLSX(exportData, filename);
    }

    setExportOpen(false);
  };

  return (
    <div className="w-full sm:w-fit self-end">
      <Button
        type="outline"
        onClick={() => setExportOpen(true)}
        className={
          "w-full sm:w-fit border rounded cursor-pointer bg-transparent hover:bg-[#25252c] gap-2"
        }
      >
        <Download className="size-4" />
        <span>Export Transactions</span>
      </Button>

      <DialogBox
        open={exportOpen}
        setOpen={setExportOpen}
        title={"Export Transactions"}
        footer={
          <>
            {/* Confirmation */}
            <div className="flex flex-col text-xs gap-1">
              <p>Export Preview:</p>
              <p>{exportData.length} transactions will be exported.</p>
              {filteredTransactions.length ? (
                <ul className="list-disc flex flex-col px-4">
                  <li>Date: {"All Time"}</li>
                  <li>Account: {"All Accounts"}</li>
                  <li>Type: {"All Types"}</li>
                </ul>
              ) : undefined}
            </div>

            <DialogFooter className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Cancel */}
              <Button
                variant={"outline"}
                onClick={() => setExportOpen(false)}
                className={
                  "border bg-transparent hover:bg-[#25252c] cursor-pointer"
                }
              >
                Cancel
              </Button>

              {/* Export */}
              <Button
                variant="default"
                disabled={!hasExportableData}
                onClick={() => handleExport(exportType, formatValue)}
                className={
                  "bg-[#fb5756] hover:bg-[#fd6868] text-[#fff] font-semibold cursor-pointer disabled:cursor-not-allowed"
                }
              >
                Export
              </Button>
            </DialogFooter>
            <p className="text-xs text-right">
              {hasExportableData
                ? `File Name: ${filename}.${formatValue}`
                : "Hint: No transactions available to export."}
            </p>
          </>
        }
        footerClassName={"mt-2 flex flex-col gap-4"}
      >
        {/* Export */}
        <RadioGroup
          value={exportType}
          onValueChange={setExportType}
          className={"flex flex-col"}
        >
          <p className="text-sm font-medium">Export:</p>
          {selectedTransactions.length ? (
            <div className="flex justify-baseline items-center gap-2">
              <RadioGroupItem value="selected" id="selected" />
              <Label htmlFor="selected">
                Selected Transactions ({selectedTransactions.length})
              </Label>
            </div>
          ) : undefined}
          {filteredTransactions.length ? (
            <div className="flex justify-baseline items-center gap-2">
              <RadioGroupItem value="filtered" id="filtered" />
              <Label htmlFor="filtered">
                All Filtered Transactions ({filteredTransactions.length})
              </Label>
            </div>
          ) : undefined}
          <div className="flex justify-baseline items-center gap-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All Transactions ({exportData.length})</Label>
          </div>
        </RadioGroup>

        {/* Format */}
        <RadioGroup
          value={formatValue}
          onValueChange={setFormatValue}
          className={"flex flex-col"}
        >
          <p className="text-sm font-medium">File Format:</p>
          <div className="flex justify-baseline items-center gap-2">
            <RadioGroupItem value="csv" id="csv" />
            <Label htmlFor="csv">CSV (.csv)</Label>
          </div>
          <div className="flex justify-baseline items-center gap-2">
            <RadioGroupItem value="xlsx" id="xlsx" />
            <Label htmlFor="xlsx">Excel (.xlsx)</Label>
          </div>
        </RadioGroup>
      </DialogBox>
    </div>
  );
};

export default ExportBtn;
