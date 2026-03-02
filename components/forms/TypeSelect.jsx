import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
              className={`w-full input cursor-pointer border-[1.5px] data-placeholder:text-[#bebec0]/50 ${triggerClassName}`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              align="center"
              avoidCollisions={false}
              className={`shadow-xl w-full ${contentClassName}`}
            >
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {types.map((type, index) => (
                  <SelectItem
                    key={index}
                    value={typeof type === "object" ? type.value : type}
                    className={`cursor-pointer ${itemClassName}`}
                  >
                    {typeof type === "object" ? type.label : type}
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
