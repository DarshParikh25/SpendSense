import AddTransactionForm from "@/components/forms/add-transaction/AddTransactionForm";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";

import { Scan } from "lucide-react";

const page = () => {
  return (
    <div className="py-8 md:py-12 flex justify-center items-center">
      <div className="w-150 flex flex-col items-center justify-center gap-10">
        <Heading title="Add Transaction" className="w-fit self-start" />
        <Button
          className={
            "w-full bg-[#bebec0] hover:bg-[#b3b3b4] text-[#1e1e24] cursor-pointer flex gap-4"
          }
        >
          <Scan />
          <span>Scan Receipt with AI</span>
        </Button>
        <AddTransactionForm />
      </div>
    </div>
  );
};

export default page;
