import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="col-span-2 w-full border border-[#bebec0] flex items-center justify-center px-3 rounded-md">
      <Search size={20} />
      <Input
        className={"focus-visible:ring-0 border-0"}
        placeholder={placeholder}
        type={"text"}
      />
    </div>
  );
};

export default SearchInput;
