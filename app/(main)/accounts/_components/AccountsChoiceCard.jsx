"use client";

import { useMemo, useState } from "react";

import AccountCard from "./AccountCard";

import { RadioGroup } from "@/components/ui/radio-group";
import getGridCols from "@/lib/helper/ui/getGridCols";
import DialogBox from "@/app/(main)/_components/DialogBox";

const AccountsChoiceCard = ({ accounts }) => {
  const defaultAccount = useMemo(
    () => accounts.find((acc) => acc.isDefault),
    [accounts],
  );

  const [defaultAccountId, setDefaultAccountId] = useState(
    defaultAccount?.id?.toString() ?? "",
  );
  const [pendingAccountId, setPendingAccountId] = useState(null);

  const gridClass = getGridCols(accounts.length);

  const handleValueChange = (value) => {
    if (value !== defaultAccountId) {
      setPendingAccountId(value);
    }
  };

  const handleConfirm = () => {
    if (pendingAccountId) {
      setDefaultAccountId(pendingAccountId);
    }
    setPendingAccountId(null);
  };

  const handleCancel = () => {
    setPendingAccountId(null);
  };

  const handleIntentChange = (value) => {
    if (value !== defaultAccountId) {
      setPendingAccountId(value);
    }
  };

  return (
    <>
      <RadioGroup
        value={defaultAccountId}
        onValueChange={handleValueChange}
        className={`grid gap-6 ${gridClass}`}
      >
        {accounts.map((acc) => (
          <AccountCard
            key={acc.id}
            account={acc}
            defaultAccountId={defaultAccountId}
            onIntentSelect={handleIntentChange}
          />
        ))}
      </RadioGroup>

      {/* Dialog Box */}
      <DialogBox
        selectedIds={pendingAccountId ? [pendingAccountId] : []}
        title={"Change Default Account?"}
        desc={"Are you sure you want to change your default account?"}
        actionText={"Proceed"}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default AccountsChoiceCard;
