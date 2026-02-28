"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "group relative flex items-center justify-center",
        "data-[state=unchecked]:size-4 data-[state=checked]:size-5 shrink-0 rounded-full border",
        "border-muted-foreground/40",
        "transition-colors",
        "data-[state=checked]:border-none",
        "outline-none focus-visible:ring-2 focus-visible:ring-[#fb5756]/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckCircle className="size-5 text-[#fb5756] opacity-0 scale-75 transition-all duration-200 ease-in group-data-[state=checked]:scale-100 group-data-[state=checked]:opacity-100" />
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
