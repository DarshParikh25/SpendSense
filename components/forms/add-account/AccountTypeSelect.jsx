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

const AccountTypeSelect = ({ control, accountTypes }) => {
  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger
            className={
              "w-full input cursor-pointer border-[1.5px] border-[#1e1e24]/30"
            }
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            position="popper"
            side="bottom"
            align="center"
            className={
              "border-[1.5px] border-[#1e1e24] bg-[#bebec0] text-[#1e1e24] shadow-xl w-full"
            }
          >
            <SelectGroup>
              <SelectLabel>Account Type</SelectLabel>
              {accountTypes.map((type, index) => (
                <SelectItem
                  key={index}
                  value={type}
                  className={"cursor-pointer bg-transparent hover:bg-[#c3c3c3]"}
                >
                  {type}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default AccountTypeSelect;
