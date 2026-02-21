"use client";

import { Button } from "@/components/ui/button";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { closeMobileNav } from "@/lib/store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { cn } from "@/lib/utils";
import { SquarePen } from "lucide-react";
import Link from "next/link";

const AddTransactionBtn = () => {
  const dispatch = useAppDispatch();

  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);

  const handleAddTransaction = () => {
    if (isMenuOpen) {
      dispatch(closeMobileNav());
    }
  };

  return (
    <TooltipWrapper content={"Add Transaction"} hideOnDesktop>
      <Button
        className={"font-bold bg-[#FB5756] hover:bg-[#ff6f6f] text-[#ffffff]"}
        asChild
      >
        <Link href={"/transaction/create"} onClick={handleAddTransaction}>
          <SquarePen className="h-4 w-4" />
          <span
            className={cn(
              isMenuOpen ? "inline" : "hidden lg:inline",
              "font-semibold",
            )}
          >
            Add Transaction
          </span>
        </Link>
      </Button>
    </TooltipWrapper>
  );
};

export default AddTransactionBtn;
