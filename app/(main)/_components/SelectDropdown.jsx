import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectDropdown = ({ options = [], value, label, onChange }) => {
  const normalizedOptions = options.map((opt, index) => {
    if (typeof opt === "string") {
      return {
        id: index + 1,
        name: opt,
      };
    }

    return opt;
  });

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={"cursor-pointer focus-visible:ring-0"}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        position="popper"
        side="bottom"
        align="center"
        className={"bg-[#1e1e24]"}
      >
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {normalizedOptions.map(({ id, name }, index) => (
            <SelectItem
              key={id ? id : index}
              value={name}
              className={"font-semibold hover:bg-[#25252c] cursor-pointer"}
            >
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDropdown;
