import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const SearchInput = ({ value, handleSearch, placeholder }) => {
  return (
    <div className="w-full border border-[#bebec0] flex items-center justify-center px-3 rounded-md focus-within:border-white transition-colors">
      <Search size={20} />
      <Input
        value={value}
        onChange={handleSearch}
        className={"focus-visible:ring-0 border-0 placeholder:text-sm"}
        placeholder={placeholder}
        type={"text"}
      />
    </div>
  );
};

export default SearchInput;
