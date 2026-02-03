import { Input } from "@/components/ui/input";

const InputField = ({
  errors,
  name,
  label,
  register,
  required,
  placeholder = "",
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="flex gap-0.5 font-semibold">
        {label}
        {required && <span className="text-[#fb5756]">*</span>}
      </label>
      <Input
        {...register(name, { required })}
        placeholder={placeholder}
        className="input bg-transparent border-[1.5px] border-[#1e1e24]/30 px-4 py-2 rounded-lg focus-visible:ring-0 focus-visible:border-[#1e1e24] outline-none transition-colors"
      />
      {errors?.[name] && (
        <p className="text-[#fb5756] text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
