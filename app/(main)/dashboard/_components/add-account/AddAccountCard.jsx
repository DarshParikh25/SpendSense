import { Card, CardContent } from "@/components/ui/card";

import { Plus } from "lucide-react";

const AddAccountCard = () => {
  return (
    <Card
      className={
        "h-full hidden md:flex border-2 border-[#bebec0] px-4 py-8 cursor-pointer bg-transparent hover:bg-[#26272f]"
      }
    >
      <CardContent
        className={"h-full flex flex-col justify-center items-center gap-1"}
      >
        <Plus strokeWidth={2.5} className="w-7 h-7" />
        <span className="text-xl font-semibold">Add Account</span>
      </CardContent>
    </Card>
  );
};

export default AddAccountCard;
