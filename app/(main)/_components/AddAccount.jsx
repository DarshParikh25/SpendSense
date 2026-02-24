"use client";

import { useState } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import AddAccountCard from "../dashboard/_components/add-account/AddAccountCard";
import AddAccountForm from "@/components/forms/add-account/AddAccountForm";

const AddAccount = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={isSubmitting ? undefined : setIsOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
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
        <AddAccountForm
          closeDrawer={() => setIsOpen(false)}
          setIsSubmitting={setIsSubmitting}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default AddAccount;
