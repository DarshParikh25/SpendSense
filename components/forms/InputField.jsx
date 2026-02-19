import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const InputField = ({
  errors,
  name,
  label,
  register,
  required,
  placeholder = "",
  validation,
  className,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="flex gap-0.5 font-semibold">
        {label}
        {required && <span className="text-[#fb5756]">*</span>}
      </label>
      <Input
        {...register(name, { required, ...validation })}
        placeholder={placeholder}
        className={cn(
          "input bg-transparent border-[1.5px] px-4 py-2 rounded-lg focus-visible:ring-0 outline-none transition-colors",
          className,
        )}
      />
      {errors?.[name] && (
        <p className="text-[#fb5756] text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
