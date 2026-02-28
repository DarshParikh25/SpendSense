"use client";

import { useMemo, useState } from "react";

import { RadioGroup } from "@/components/ui/radio-group";
import getGridCols from "@/lib/helper/ui/getGridCols";
import AccountCard from "./AccountCard";

const AccountsChoiceCard = ({ accounts }) => {
  const defaultAccount = useMemo(
    () => accounts.find((acc) => acc.isDefault),
    [accounts],
  );

  const [defaultAccountId, setDefaultAccountId] = useState(
    defaultAccount?.id?.toString() ?? "",
  );

  const gridClass = getGridCols(accounts.length);

  return (
    <RadioGroup
      value={defaultAccountId}
      onValueChange={(value) => setDefaultAccountId(value)}
      className={`grid gap-6 ${gridClass}`}
    >
      {accounts.map((acc) => (
        <AccountCard
          key={acc.id}
          account={acc}
          defaultAccountId={defaultAccountId}
        />
      ))}
    </RadioGroup>
  );
};

export default AccountsChoiceCard;
