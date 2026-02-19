import { Controller } from "react-hook-form";

import DatePicker from "./DatePicker";

const DateSelector = ({ name, control, contentClassName }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="w-full">
          <DatePicker
            value={field.value}
            onChange={field.onChange}
            contentClassName={contentClassName}
          />
          {fieldState.error && (
            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default DateSelector;
