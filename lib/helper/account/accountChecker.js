import { accounts } from "@/db/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";

export const hasAccounts = async (id) => {
  console.log("Checking accounts for:", id);

  const account = await db.query.accounts.findFirst({
    where: eq(accounts.userId, id),
  });

  console.log("Account found:", account);

  return !!account;
};
