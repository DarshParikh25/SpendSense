import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import AddAccountCard from "./AddAccountCard";
import AddAccountForm from "@/components/forms/add-account/AddAccountForm";

const AddAccount = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        {/* Add Account Card */}
        <AddAccountCard />
      </DrawerTrigger>
      <DrawerContent
        className={
          "bg-[#bebec0] text-[#1e1e24] border-none flex items-baseline justify-center px-6 pb-10"
        }
      >
        <DrawerHeader>
          <DrawerTitle className={"text-2xl font-bold mb-2"}>
            Create New Account
          </DrawerTitle>
        </DrawerHeader>
        <AddAccountForm />
      </DrawerContent>
    </Drawer>
  );
};

export default AddAccount;
