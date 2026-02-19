"use client";

import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const DatePicker = ({ value, onChange, contentClassName }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate) => {
    if (!selectedDate) return;

    onChange(selectedDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={"w-full flex justify-between items-center"}
        >
          {value ? format(value, "PPP") : "Select Date"}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={contentClassName} align="center">
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleSelect}
          initialFocus
          defaultMonth={value}
          showOutsideDays={false}
          captionLayout="dropdown"
          className="rounded-lg"
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
