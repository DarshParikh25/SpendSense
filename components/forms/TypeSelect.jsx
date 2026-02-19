import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { Controller } from "react-hook-form";

const TypeSelect = ({
  name,
  control,
  types,
  label,
  required,
  placeholder,
  triggerClassName,
  contentClassName,
  itemClassName,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field, fieldState }) => (
        <div className="w-full">
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger
              className={cn(
                "w-full input cursor-pointer border-[1.5px]",
                triggerClassName,
              )}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              align="center"
              avoidCollisions={false}
              className={cn("shadow-xl w-full", contentClassName)}
            >
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {types.map((type, index) => (
                  <SelectItem
                    key={index}
                    value={type}
                    className={cn("cursor-pointer", itemClassName)}
                  >
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Error Message */}
          {fieldState.error && (
            <p className="text-[#fb5756] text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default TypeSelect;
